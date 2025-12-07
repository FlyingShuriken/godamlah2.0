import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const checkInRouter = createTRPCRouter({
  checkInToEvent: protectedProcedure
    .input(
      z.object({
        eventId: z.string().cuid(),
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
              verificationStatus: "VERIFIED",
            },
          });
        }

        return checkIn;
      });
    }),

  checkInEmployment: protectedProcedure
    .input(
      z.object({
        organizationId: z.string().cuid(),
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
        throw new TRPCError({ code: "NOT_FOUND", message: "Organization not found" });
      }

      const startDate = input.startDate ? new Date(input.startDate) : new Date();

      return ctx.db.$transaction(async (tx) => {
        const checkIn = await tx.checkIn.create({
          data: {
            userId,
            organizationId: input.organizationId,
            type: "EMPLOYMENT",
            note: input.note,
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
            verificationStatus: "VERIFIED",
          },
        });

        return checkIn;
      });
    }),

  myCheckIns: protectedProcedure.query(({ ctx }) => {
    return ctx.db.checkIn.findMany({
      where: { userId: ctx.session.user.id },
      include: { organization: true, event: true },
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
