import { cookies, headers } from "next/headers";
import { cache } from "react";

import { db } from "@/server/db";
import { auth } from ".";

/**
 * Get the current session from cookies
 *
 * This function retrieves the session by:
 * 1. Getting the session token from cookies
 * 2. Looking up the session in the database
 * 3. Verifying it's not expired
 * 4. Returning the session with user data
 */
export const getSession = cache(async () => {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;

    console.log("[Auth] Session token from cookie:", sessionToken ? "present" : "missing");

    if (!sessionToken) {
      return null;
    }

    // Find session in database
    const session = await db.session.findFirst({
      where: {
        token: sessionToken,
        expiresAt: {
          gt: new Date(),
        },
      },
      include: {
        user: true,
      },
    });

    console.log("[Auth] Session found in DB:", session ? "yes" : "no");

    if (!session) {
      return null;
    }

    return {
      session: {
        id: session.id,
        token: session.token,
        userId: session.userId,
        expiresAt: session.expiresAt,
        createdAt: session.createdAt,
        updatedAt: session.updatedAt,
        ipAddress: session.ipAddress,
        userAgent: session.userAgent,
      },
      user: {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        emailVerified: session.user.emailVerified,
        image: session.user.image,
        createdAt: session.user.createdAt,
        updatedAt: session.user.updatedAt,
        mykadNumber: session.user.mykadNumber,
        mykadVerifiedAt: session.user.mykadVerifiedAt,
      },
    };
  } catch (error) {
    console.error("[Auth] getSession error:", error);
    return null;
  }
});

/**
 * Get session using better-auth's API (fallback)
 */
export const getSessionFromBetterAuth = cache(async () =>
  auth.api.getSession({ headers: await headers() }),
);
