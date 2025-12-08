import { createAuthClient } from "better-auth/react";

/**
 * Better Auth client for client-side authentication hooks
 *
 * Note: Our MyKad authentication is primarily server-side.
 * This client is used for session management and hooks.
 */
export const authClient = createAuthClient({
  baseURL: typeof window !== "undefined" ? window.location.origin : undefined,
});

export type Session = typeof authClient.$Infer.Session;

/**
 * Hook to get the current session
 */
export const useSession = authClient.useSession;

/**
 * Hook to sign out
 */
export const useSignOut = () => {
  return authClient.signOut;
};
