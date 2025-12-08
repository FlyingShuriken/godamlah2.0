import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

import { db } from "@/server/db";

/**
 * Better Auth configuration for MyKad-based authentication
 *
 * This system uses MyKad IC numbers as the primary authentication method.
 * Each MyKad number maps to a unique user account. The email field is used
 * internally for better-auth compatibility but is not a real email.
 *
 * Flow:
 * 1. User enters MyKad IC number (or scans QR code in production)
 * 2. System validates the IC format
 * 3. If user exists with that IC, sign them in
 * 4. If not, create a new account and sign them in
 *
 * Security notes:
 * - In mock mode, we trust the IC number input
 * - In production, QR scanning would verify against chip data
 * - Sessions are managed by better-auth with secure cookies
 */
export const auth = betterAuth({
  database: prismaAdapter(db, {
    provider: "postgresql",
  }),
  // Disable email/password since we use MyKad-based auth
  emailAndPassword: {
    enabled: false,
  },
  session: {
    // Session expires in 7 days
    expiresIn: 60 * 60 * 24 * 7,
    // Refresh session if it expires in less than 1 day
    updateAge: 60 * 60 * 24,
    cookieCache: {
      enabled: true,
      maxAge: 60 * 5, // 5 minutes
    },
  },
  // User fields configuration
  user: {
    additionalFields: {
      mykadNumber: {
        type: "string",
        required: false,
        input: false, // Don't allow setting via normal user update
      },
      mykadVerifiedAt: {
        type: "date",
        required: false,
        input: false,
      },
    },
  },
  trustedOrigins: ["http://localhost:3000", "http://127.0.0.1:3000"],
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;
