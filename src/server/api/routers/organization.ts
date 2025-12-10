import type { PrismaClient } from "../../../../generated/prisma";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { aiService } from "@/server/services/ai";

const organizationType = z.enum(["COMPANY", "ORGANIZER"]);
type ProfileTypeValue = "USER" | "ORGANIZER" | "COMPANY";
const jobStatus = z.enum(["DRAFT", "PUBLISHED", "CLOSED"]);

const ensureProfileType = async (
  db: PrismaClient,
  userId: string,
  allowed: ProfileTypeValue[],
) => {
  const user = await db.user.findUnique({
    select: { profileType: true },
    where: { id: userId },
  });
  if (!user || !allowed.includes(user.profileType as ProfileTypeValue)) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "Insufficient profile permissions",
    });
  }
};

export const organizationRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(2).max(120),
        type: organizationType,
        ssmNumber: z.string().trim().max(64).optional(),
        industry: z.string().trim().max(120).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      if (input.type === "ORGANIZER") {
        await ensureProfileType(ctx.db, ctx.session.user.id, [
          "ORGANIZER",
          "COMPANY",
        ]);
      }
      if (input.type === "COMPANY") {
        await ensureProfileType(ctx.db, ctx.session.user.id, [
          "COMPANY",
          "ORGANIZER",
        ]);
      }

      return ctx.db.organization.create({
        data: {
          name: input.name,
          type: input.type,
          ssmNumber: input.ssmNumber,
          industry: input.industry,
          createdById: ctx.session.user.id,
        },
      });
    }),

  listMine: protectedProcedure.query(({ ctx }) => {
    return ctx.db.organization.findMany({
      where: { createdById: ctx.session.user.id },
      orderBy: { createdAt: "desc" },
    });
  }),

  createEvent: protectedProcedure
    .input(
      z.object({
        organizationId: z.string(),
        title: z.string().min(2).max(140),
        description: z.string().max(500).optional(),
        location: z.string().max(140).optional(),
        startsAt: z.string().datetime(),
        endsAt: z.string().datetime().optional(),
        skills: z.array(z.string()).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ensureProfileType(ctx.db, ctx.session.user.id, [
        "ORGANIZER",
        "COMPANY",
      ]);

      const org = await ctx.db.organization.findFirst({
        where: { id: input.organizationId, createdById: ctx.session.user.id },
      });

      if (!org) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Organization not found or not owned",
        });
      }

      if (org.type !== "ORGANIZER") {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Only organizers can create events",
        });
      }

      let skills = input.skills;
      if (!skills || skills.length === 0) {
        skills = await aiService.extractSkills(
          `${input.title} ${input.description ?? ""}`,
        );
      }

      return ctx.db.event.create({
        data: {
          organizationId: input.organizationId,
          title: input.title,
          description: input.description,
          location: input.location,
          skills: skills,
          startsAt: new Date(input.startsAt),
          endsAt: input.endsAt ? new Date(input.endsAt) : null,
          createdById: ctx.session.user.id,
        },
      });
    }),

  listEvents: protectedProcedure
    .input(z.object({ organizationId: z.string().optional() }).optional())
    .query(({ ctx, input }) => {
      return ctx.db.event.findMany({
        where: input?.organizationId
          ? { organizationId: input.organizationId }
          : { organization: { createdById: ctx.session.user.id } },
        orderBy: { startsAt: "asc" },
      });
    }),

  createJob: protectedProcedure
    .input(
      z.object({
        organizationId: z.string(),
        title: z.string().min(2).max(140),
        description: z.string().max(500).optional(),
        skills: z.array(z.string().trim().min(1)).max(30),
        status: jobStatus.optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await ensureProfileType(ctx.db, ctx.session.user.id, ["COMPANY"]);

      const org = await ctx.db.organization.findFirst({
        where: { id: input.organizationId, createdById: ctx.session.user.id },
      });

      if (!org) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Organization not found or not owned",
        });
      }

      if (org.type !== "COMPANY") {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Only companies can create jobs",
        });
      }

      return ctx.db.jobPosting.create({
        data: {
          organizationId: input.organizationId,
          title: input.title,
          description: input.description,
          skills: input.skills,
          status: input.status ?? "PUBLISHED",
          createdById: ctx.session.user.id,
        },
      });
    }),

  listJobs: protectedProcedure
    .input(
      z
        .object({
          status: jobStatus.optional(),
          organizationId: z.string().optional(),
        })
        .optional(),
    )
    .query(({ ctx, input }) => {
      return ctx.db.jobPosting.findMany({
        where: {
          ...(input?.status
            ? { status: input.status }
            : { status: "PUBLISHED" }),
          ...(input?.organizationId
            ? { organizationId: input.organizationId }
            : {}),
        },
        orderBy: { createdAt: "desc" },
      });
    }),
});
