import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

const organizationType = z.enum(["COMPANY", "ORGANIZER"]);
const jobStatus = z.enum(["DRAFT", "PUBLISHED", "CLOSED"]);

export const organizationRouter = createTRPCRouter({
  create: protectedProcedure
    .input(
      z.object({
        name: z.string().min(2).max(120),
        type: organizationType,
        ssmNumber: z.string().trim().max(64).optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.db.organization.create({
        data: {
          name: input.name,
          type: input.type,
          ssmNumber: input.ssmNumber,
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
        organizationId: z.string().cuid(),
        title: z.string().min(2).max(140),
        description: z.string().max(500).optional(),
        location: z.string().max(140).optional(),
        startsAt: z.string().datetime(),
        endsAt: z.string().datetime().optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const org = await ctx.db.organization.findFirst({
        where: { id: input.organizationId, createdById: ctx.session.user.id },
      });

      if (!org) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Organization not found or not owned" });
      }

      return ctx.db.event.create({
        data: {
          organizationId: input.organizationId,
          title: input.title,
          description: input.description,
          location: input.location,
          startsAt: new Date(input.startsAt),
          endsAt: input.endsAt ? new Date(input.endsAt) : null,
          createdById: ctx.session.user.id,
        },
      });
    }),

  listEvents: protectedProcedure
    .input(z.object({ organizationId: z.string().cuid().optional() }).optional())
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
        organizationId: z.string().cuid(),
        title: z.string().min(2).max(140),
        description: z.string().max(500).optional(),
        skills: z.array(z.string().trim().min(1)).max(30),
        status: jobStatus.optional(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const org = await ctx.db.organization.findFirst({
        where: { id: input.organizationId, createdById: ctx.session.user.id },
      });

      if (!org) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Organization not found or not owned" });
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
    .input(z.object({ status: jobStatus.optional(), organizationId: z.string().cuid().optional() }).optional())
    .query(({ ctx, input }) => {
      return ctx.db.jobPosting.findMany({
        where: {
          ...(input?.status ? { status: input.status } : { status: "PUBLISHED" }),
          ...(input?.organizationId ? { organizationId: input.organizationId } : {}),
        },
        orderBy: { createdAt: "desc" },
      });
    }),
});
