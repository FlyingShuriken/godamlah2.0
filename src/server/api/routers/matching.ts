import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const matchingRouter = createTRPCRouter({
  suggestJobs: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;
    const profile = await ctx.db.userProfile.findUnique({
      where: { userId },
    });

    const skills = new Set((profile?.skills ?? []).map((s) => s.toLowerCase()));

    const jobs = await ctx.db.jobPosting.findMany({
      where: { status: "PUBLISHED" },
      include: { organization: true },
    });

    const scored = jobs.map((job) => {
      const overlap = job.skills.filter((skill) => skills.has(skill.toLowerCase()));
      const missing = job.skills.filter((skill) => !skills.has(skill.toLowerCase()));
      const score = overlap.length / Math.max(job.skills.length, 1);
      return {
        job,
        overlap,
        missing,
        score,
      };
    });

    return scored
      .sort((a, b) => b.score - a.score)
      .map(({ job, overlap, missing }) => ({
        job,
        overlap,
        missing,
      }));
  }),

  suggestEvents: protectedProcedure
    .input(z.object({ organizationId: z.string().cuid().optional() }).optional())
    .query(async ({ ctx, input }) => {
      const events = await ctx.db.event.findMany({
        where: {
          ...(input?.organizationId ? { organizationId: input.organizationId } : {}),
        },
        orderBy: { startsAt: "asc" },
        include: { organization: true },
      });

      const now = new Date();

      return events
        .filter((event) => event.startsAt >= now)
        .slice(0, 10)
        .map((event) => ({
          event,
          startsAt: event.startsAt,
          organization: event.organization,
        }));
    }),
});
