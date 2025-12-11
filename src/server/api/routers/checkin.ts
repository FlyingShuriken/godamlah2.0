import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { aiService } from "@/server/services/ai";

// Helper to normalize MyKad number (remove dashes and spaces)
const normalizeMyKad = (mykad: string) => mykad.replace(/[-\s]/g, "");

export const checkInRouter = createTRPCRouter({
  /**
   * Self check-in to an event (unverified until organizer/admin confirms)
   */
  checkInToEvent: protectedProcedure
    .input(
      z.object({
        eventId: z.string(),
        note: z.string().max(280).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const event = await ctx.db.event.findUnique({
        where: { id: input.eventId },
        include: { organization: true },
      });

      if (!event) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Event not found" });
      }

      return ctx.db.$transaction(async (tx) => {
        const existing = await tx.checkIn.findFirst({
          where: { userId, eventId: input.eventId, type: "EVENT" },
        });

        if (existing) return existing;

        const checkIn = await tx.checkIn.create({
          data: {
            userId,
            organizationId: event.organizationId,
            eventId: input.eventId,
            type: "EVENT",
            note: input.note,
            verificationStatus: "UNVERIFIED",
          },
        });

        const existingExperience = await tx.experience.findFirst({
          where: { userId, eventId: input.eventId, type: "EVENT" },
        });

        if (!existingExperience) {
          await tx.experience.create({
            data: {
              userId,
              organizationId: event.organizationId,
              eventId: input.eventId,
              type: "EVENT",
              title: event.title,
              startDate: event.startsAt,
              endDate: event.endsAt,
              isCurrent: false,
              verificationStatus: "UNVERIFIED",
              skills: event.skills,
            },
          });
        }

        return checkIn;
      });
    }),

  /**
   * Self check-in to employment (unverified until company confirms)
   */
  checkInEmployment: protectedProcedure
    .input(
      z.object({
        organizationId: z.string(),
        title: z.string().min(2).max(140),
        note: z.string().max(280).optional(),
        startDate: z.string().datetime().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;

      const org = await ctx.db.organization.findUnique({
        where: { id: input.organizationId },
      });

      if (!org) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Organization not found",
        });
      }

      const startDate = input.startDate
        ? new Date(input.startDate)
        : new Date();

      const extractedSkills = await aiService.extractSkills(input.title);

      return ctx.db.$transaction(async (tx) => {
        const checkIn = await tx.checkIn.create({
          data: {
            userId,
            organizationId: input.organizationId,
            type: "EMPLOYMENT",
            note: input.note,
            verificationStatus: "UNVERIFIED",
          },
        });

        await tx.experience.create({
          data: {
            userId,
            organizationId: input.organizationId,
            type: "EMPLOYMENT",
            title: input.title,
            startDate,
            isCurrent: true,
            verificationStatus: "UNVERIFIED",
            skills: extractedSkills,
          },
        });

        return checkIn;
      });
    }),

  /**
   * Admin check-in to an event by organizer (verified)
   */
  adminCheckInToEvent: protectedProcedure
    .input(
      z.object({
        eventId: z.string(),
        mykadNumber: z.string().min(12).max(14), // Accept with or without dashes
        note: z.string().max(280).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const adminId = ctx.session.user.id;
      const event = await ctx.db.event.findUnique({
        where: { id: input.eventId },
        include: { organization: true },
      });

      if (!event) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Event not found" });
      }

      if (event.organization.createdById !== adminId) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Not event owner",
        });
      }

      if (event.organization.type !== "ORGANIZER") {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Only organizers can check in attendees",
        });
      }

      // Look up user by MyKad number
      const normalizedMyKad = normalizeMyKad(input.mykadNumber);
      const user = await ctx.db.user.findUnique({
        where: { mykadNumber: normalizedMyKad },
      });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "No user found with this MyKad IC number",
        });
      }

      return ctx.db.$transaction(async (tx) => {
        const checkIn = await tx.checkIn.upsert({
          where: {
            userId_eventId_type: {
              userId: user.id,
              eventId: input.eventId,
              type: "EVENT",
            },
          },
          update: {
            note: input.note,
            verificationStatus: "VERIFIED",
            addedById: adminId,
          },
          create: {
            userId: user.id,
            organizationId: event.organizationId,
            eventId: input.eventId,
            type: "EVENT",
            note: input.note,
            verificationStatus: "VERIFIED",
            addedById: adminId,
          },
        });

        await tx.experience.upsert({
          where: {
            userId_eventId_type: {
              userId: user.id,
              eventId: input.eventId,
              type: "EVENT",
            },
          },
          update: {
            verificationStatus: "VERIFIED",
            startDate: event.startsAt,
            endDate: event.endsAt,
            title: event.title,
            skills: event.skills,
          },
          create: {
            userId: user.id,
            organizationId: event.organizationId,
            eventId: input.eventId,
            type: "EVENT",
            title: event.title,
            startDate: event.startsAt,
            endDate: event.endsAt,
            isCurrent: false,
            verificationStatus: "VERIFIED",
            skills: event.skills,
          },
        });

        return checkIn;
      });
    }),

  /**
   * Admin employment check-in by company (verified)
   */
  adminCheckInEmployment: protectedProcedure
    .input(
      z.object({
        organizationId: z.string(),
        mykadNumber: z.string().min(12).max(14), // Accept with or without dashes
        title: z.string().min(2).max(140),
        startDate: z.string().datetime().optional(),
        endDate: z.string().datetime().optional(),
        note: z.string().max(280).optional(),
        isCurrent: z.boolean().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const adminId = ctx.session.user.id;
      const org = await ctx.db.organization.findUnique({
        where: { id: input.organizationId },
      });

      if (!org) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Organization not found",
        });
      }

      if (org.createdById !== adminId || org.type !== "COMPANY") {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Not company owner",
        });
      }

      // Look up user by MyKad number
      const normalizedMyKad = normalizeMyKad(input.mykadNumber);
      const user = await ctx.db.user.findUnique({
        where: { mykadNumber: normalizedMyKad },
      });

      if (!user) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "No user found with this MyKad IC number",
        });
      }

      const startDate = input.startDate
        ? new Date(input.startDate)
        : new Date();
      const endDate = input.endDate ? new Date(input.endDate) : null;
      const isCurrent = input.isCurrent ?? !endDate;

      const extractedSkills = await aiService.extractSkills(input.title);

      return ctx.db.$transaction(async (tx) => {
        const checkIn = await tx.checkIn.upsert({
          where: {
            userId_organizationId_type: {
              userId: user.id,
              organizationId: input.organizationId,
              type: "EMPLOYMENT",
            },
          },
          update: {
            note: input.note,
            verificationStatus: "VERIFIED",
            addedById: adminId,
          },
          create: {
            userId: user.id,
            organizationId: input.organizationId,
            type: "EMPLOYMENT",
            note: input.note,
            verificationStatus: "VERIFIED",
            addedById: adminId,
          },
        });

        await tx.experience.upsert({
          where: {
            userId_organizationId_type: {
              userId: user.id,
              organizationId: input.organizationId,
              type: "EMPLOYMENT",
            },
          },
          update: {
            title: input.title,
            startDate,
            endDate,
            isCurrent,
            verificationStatus: "VERIFIED",
            skills: extractedSkills,
          },
          create: {
            userId: user.id,
            organizationId: input.organizationId,
            type: "EMPLOYMENT",
            title: input.title,
            startDate,
            endDate,
            isCurrent,
            verificationStatus: "VERIFIED",
            skills: extractedSkills,
          },
        });

        return checkIn;
      });
    }),

  myCheckIns: protectedProcedure.query(({ ctx }) => {
    return ctx.db.checkIn.findMany({
      where: { userId: ctx.session.user.id },
      include: { organization: true, event: true, addedBy: true },
      orderBy: { createdAt: "desc" },
    });
  }),

  myExperiences: protectedProcedure.query(({ ctx }) => {
    return ctx.db.experience.findMany({
      where: { userId: ctx.session.user.id },
      include: { organization: true, event: true },
      orderBy: [
        { isCurrent: "desc" },
        { startDate: "desc" },
        { createdAt: "desc" },
      ],
    });
  }),
});
