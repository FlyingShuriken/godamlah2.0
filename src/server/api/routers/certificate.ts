import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import crypto from "crypto";

export const certificateRouter = createTRPCRouter({
  // Issue a certificate (Organizer/Company only)
  issue: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
        organizationId: z.string(),
        eventId: z.string().optional(),
        title: z.string(),
        description: z.string().optional(),
        type: z.enum(["ATTENDANCE", "ACHIEVEMENT", "CERTIFICATION", "EMPLOYMENT"]),
        skills: z.array(z.string()).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      // Verify organization ownership/membership
      const org = await ctx.db.organization.findUnique({
        where: { id: input.organizationId },
      });

      if (!org || org.createdById !== ctx.session.user.id) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "You are not authorized to issue certificates for this organization",
        });
      }

      // Generate a unique hash for verification
      // Simple hash: SHA256(orgId + userId + timestamp + random)
      const dataToHash = `${input.organizationId}:${input.userId}:${Date.now()}:${Math.random()}`;
      const hash = crypto.createHash("sha256").update(dataToHash).digest("hex");

      const certificate = await ctx.db.certificate.create({
        data: {
          userId: input.userId,
          organizationId: input.organizationId,
          eventId: input.eventId,
          title: input.title,
          description: input.description,
          type: input.type,
          skills: input.skills ?? [],
          issueDate: new Date(),
          hash: hash,
        },
      });

      return certificate;
    }),

  // Get my certificates
  getMine: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.certificate.findMany({
      where: { userId: ctx.session.user.id },
      include: {
        organization: true,
        event: true,
      },
      orderBy: { issueDate: "desc" },
    });
  }),

  // Verify a certificate (Public)
  verify: publicProcedure
    .input(z.object({ hash: z.string() }))
    .query(async ({ ctx, input }) => {
      const cert = await ctx.db.certificate.findUnique({
        where: { hash: input.hash },
        include: {
          organization: true,
          event: true,
        },
      });

      if (!cert) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Certificate not found" });
      }
      
      // Fetch user profile name separately
      const profile = await ctx.db.userProfile.findUnique({
        where: { userId: cert.userId },
        select: { fullName: true }
      });

      return {
        ...cert,
        recipientName: profile?.fullName ?? "Unknown User",
      };
    }),
    
  // Get certificates issued by an organization
  getIssued: protectedProcedure
    .input(z.object({ organizationId: z.string() }))
    .query(async ({ ctx, input }) => {
       const org = await ctx.db.organization.findUnique({
        where: { id: input.organizationId },
      });

      if (!org || org.createdById !== ctx.session.user.id) {
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "Not authorized",
        });
      }
      
      // We need to fetch certificates and then map user profiles
      const certs = await ctx.db.certificate.findMany({
        where: { organizationId: input.organizationId },
        orderBy: { createdAt: 'desc' }
      });

      // Fetch profiles for these users
      const userIds = [...new Set(certs.map(c => c.userId))];
      const profiles = await ctx.db.userProfile.findMany({
        where: { userId: { in: userIds } },
        select: { userId: true, fullName: true }
      });
      
      const profileMap = new Map(profiles.map(p => [p.userId, p.fullName]));

      return certs.map(cert => ({
        ...cert,
        recipientName: profileMap.get(cert.userId) ?? "Unknown User"
      }));
    })
});
