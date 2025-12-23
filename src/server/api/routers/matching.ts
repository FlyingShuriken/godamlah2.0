import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { aiService } from "@/server/services/ai";

export const matchingRouter = createTRPCRouter({
  suggestJobs: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;

    // Fetch user profile and experiences to aggregate skills
    const [profile, experiences] = await Promise.all([
      ctx.db.userProfile.findUnique({ where: { userId } }),
      ctx.db.experience.findMany({
        where: { userId }, // Use all experiences for matching
        select: { skills: true },
      }),
    ]);

    const userSkills = new Set<string>();
    if (profile?.skills) profile.skills.forEach((s) => userSkills.add(s));
    experiences.forEach((exp) => exp.skills.forEach((s) => userSkills.add(s)));

    const userSkillsArray = Array.from(userSkills);

    const jobs = await ctx.db.jobPosting.findMany({
      where: { status: "PUBLISHED" },
      include: { organization: true },
    });

    const scored = jobs.map((job) => {
      const score = aiService.calculateMatchScore(userSkillsArray, job.skills);

      // Calculate overlap/missing for UI display
      const jobSkillsSet = new Set(job.skills.map((s) => s.toLowerCase()));
      const userSkillsLower = new Set(
        userSkillsArray.map((s) => s.toLowerCase()),
      );

      const overlap = job.skills.filter((s) =>
        userSkillsLower.has(s.toLowerCase()),
      );
      const missing = job.skills.filter(
        (s) => !userSkillsLower.has(s.toLowerCase()),
      );

      return {
        job,
        overlap,
        missing,
        score,
      };
    });

    return scored
      .sort((a, b) => b.score - a.score)
      .map(({ job, overlap, missing, score }) => ({
        job,
        overlap,
        missing,
        score,
      }));
  }),

  suggestEvents: protectedProcedure
    .input(z.object({ organizationId: z.string().optional() }).optional())
    .query(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;

      // Fetch user skills
      const [profile, experiences] = await Promise.all([
        ctx.db.userProfile.findUnique({ where: { userId } }),
        ctx.db.experience.findMany({
          where: { userId },
          select: { skills: true },
        }),
      ]);

      const userSkills = new Set<string>();
      if (profile?.skills) profile.skills.forEach((s) => userSkills.add(s));
      experiences.forEach((exp) =>
        exp.skills.forEach((s) => userSkills.add(s)),
      );
      const userSkillsArray = Array.from(userSkills);

      const events = await ctx.db.event.findMany({
        where: {
          ...(input?.organizationId
            ? { organizationId: input.organizationId }
            : {}),
          startsAt: { gte: new Date() }, // Only future events
        },
        orderBy: { startsAt: "asc" },
        include: { organization: true },
      });

      const scored = events.map((event) => {
        const score = aiService.calculateMatchScore(
          userSkillsArray,
          event.skills,
        );
        return {
          event,
          score,
          organization: event.organization,
        };
      });

      // Return all upcoming events so users can self check-in; order by soonest date, then score for ties
      return scored.sort((a, b) => {
        const dateDiff =
          a.event.startsAt.getTime() - b.event.startsAt.getTime();
        if (dateDiff !== 0) return dateDiff;
        return b.score - a.score;
      });
    }),

  suggestCandidates: protectedProcedure
    .input(z.object({ jobId: z.string() }))
    .query(async ({ ctx, input }) => {
      const job = await ctx.db.jobPosting.findUnique({
        where: { id: input.jobId },
        include: { organization: true },
      });

      if (!job) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Job not found" });
      }

      // Ensure user has permission to view candidates for this job
      // Allow if user is the job creator OR the organization creator
      const isJobCreator = job.createdById === ctx.session.user.id;
      const isOrgCreator = job.organization.createdById === ctx.session.user.id;

      if (!isJobCreator && !isOrgCreator) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Not authorized to view candidates for this job",
        });
      }

      // Fetch users in talent pool
      const profiles = await ctx.db.userProfile.findMany({
        where: { visibility: "TALENT_POOL" },
        include: {
          user: {
            include: {
              experiences: {
                where: { verificationStatus: "VERIFIED" },
                select: { skills: true },
              },
            },
          },
        },
      });

      const scored = profiles.map((profile) => {
        const userSkills = new Set<string>(profile.skills);
        profile.user.experiences.forEach((exp) =>
          exp.skills.forEach((s) => userSkills.add(s)),
        );
        const userSkillsArray = Array.from(userSkills);

        const score = aiService.calculateMatchScore(
          userSkillsArray,
          job.skills,
        );

        return {
          user: profile.user,
          profile,
          score,
          skills: userSkillsArray,
        };
      });

      return scored.sort((a, b) => b.score - a.score).slice(0, 20);
    }),

  careerInsights: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;

    // 1. Fetch user skills
    const [profile, experiences] = await Promise.all([
      ctx.db.userProfile.findUnique({ where: { userId } }),
      ctx.db.experience.findMany({
        where: { userId },
        select: { skills: true },
      }),
    ]);

    const userSkills = new Set<string>();
    if (profile?.skills) profile.skills.forEach((s) => userSkills.add(s));
    experiences.forEach((exp) => exp.skills.forEach((s) => userSkills.add(s)));
    const userSkillsArray = Array.from(userSkills);
    const userSkillsLower = new Set(
      userSkillsArray.map((s) => s.toLowerCase()),
    );

    // 2. Fetch all published jobs
    const jobs = await ctx.db.jobPosting.findMany({
      where: { status: "PUBLISHED" },
      select: { title: true, skills: true },
    });

    // 3. Analyze "Reach" jobs (30% - 75% match)
    // These are jobs the user is qualified for but missing some skills
    const missingSkillsCount = new Map<string, number>();
    const potentialRolesCount = new Map<string, number>();

    jobs.forEach((job) => {
      const score = aiService.calculateMatchScore(userSkillsArray, job.skills);

      if (score >= 30 && score < 80) {
        // This is a "Reach" job
        potentialRolesCount.set(
          job.title,
          (potentialRolesCount.get(job.title) ?? 0) + 1,
        );

        // Identify missing skills
        job.skills.forEach((skill) => {
          if (!userSkillsLower.has(skill.toLowerCase())) {
            missingSkillsCount.set(
              skill,
              (missingSkillsCount.get(skill) ?? 0) + 1,
            );
          }
        });
      }
    });

    // 4. Sort and format results
    const recommendedSkills = Array.from(missingSkillsCount.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([skill, count]) => ({ skill, count }));

    const potentialRoles = Array.from(potentialRolesCount.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3)
      .map(([role, count]) => ({ role, count }));

    return {
      recommendedSkills,
      potentialRoles,
    };
  }),
});
