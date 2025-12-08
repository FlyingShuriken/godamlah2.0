import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

const profileType = z.enum(["USER", "ORGANIZER", "COMPANY"]);

const profileInput = z.object({
  fullName: z.string().min(2).max(100).optional(),
  headline: z.string().min(2).max(140).optional(),
  bio: z.string().max(500).optional(),
  skills: z.array(z.string().trim().min(1)).max(30).optional(),
  consentTalentPool: z.boolean().optional(),
  visibility: z.enum(["PRIVATE", "TALENT_POOL"]).optional(),
});

export const profileRouter = createTRPCRouter({
  getMine: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;
    const profile = await ctx.db.userProfile.findUnique({
      where: { userId },
    });

    return profile ?? null;
  }),

  getProfileType: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;
    const user = await ctx.db.user.findUnique({
      where: { id: userId },
      select: { profileType: true },
    });

    return { profileType: user?.profileType ?? "USER" } as const;
  }),

  upsert: protectedProcedure
    .input(profileInput)
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;

      const normalizedSkills =
        input.skills?.filter(Boolean).map((s) => s.trim()) ?? [];

      const profile = await ctx.db.userProfile.upsert({
        where: { userId },
        update: {
          fullName: input.fullName,
          headline: input.headline,
          bio: input.bio,
          skills: normalizedSkills,
          consentTalentPool:
            input.consentTalentPool ??
            (await ctx.db.userProfile.findUnique({ where: { userId } }))
              ?.consentTalentPool ??
            false,
          visibility: input.visibility,
        },
        create: {
          userId,
          fullName: input.fullName,
          headline: input.headline,
          bio: input.bio,
          skills: normalizedSkills,
          consentTalentPool: input.consentTalentPool ?? false,
          visibility: input.visibility ?? "TALENT_POOL",
        },
      });

      return profile;
    }),

  setProfileType: protectedProcedure
    .input(z.object({ profileType }))
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;
      const updated = await ctx.db.user.update({
        where: { id: userId },
        data: { profileType: input.profileType },
        select: { profileType: true },
      });
      return updated;
    }),

  timeline: protectedProcedure.query(async ({ ctx }) => {
    const userId = ctx.session.user.id;

    return ctx.db.experience.findMany({
      where: { userId },
      orderBy: [{ startDate: "desc" }, { createdAt: "desc" }],
      include: {
        organization: true,
        event: true,
      },
    });
  }),
});
