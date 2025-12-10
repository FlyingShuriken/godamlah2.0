import { checkInRouter } from "@/server/api/routers/checkin";
import { matchingRouter } from "@/server/api/routers/matching";
import { organizationRouter } from "@/server/api/routers/organization";
import { profileRouter } from "@/server/api/routers/profile";
import { certificateRouter } from "@/server/api/routers/certificate";
import { createCallerFactory, createTRPCRouter } from "@/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  profile: profileRouter,
  organization: organizationRouter,
  checkIn: checkInRouter,
  matching: matchingRouter,
  certificate: certificateRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.profile.get();
 *       ^? UserProfile | null
 */
export const createCaller = createCallerFactory(appRouter);
