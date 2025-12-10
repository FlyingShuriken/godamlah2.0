"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

import { db } from "@/server/db";
import {
  validateMyKad,
  generateDisplayName,
  type MyKadValidationResult,
} from "@/server/better-auth/mykad-plugin";

/**
 * Result type for authentication actions
 */
export type AuthResult = {
  success: boolean;
  error?: string;
  user?: {
    id: string;
    name: string;
    mykadNumber: string;
  };
};

/**
 * Input schema for MyKad sign-in
 */
const signInSchema = z.object({
  mykadNumber: z
    .string()
    .min(1, "MyKad number is required")
    .transform((val) => val.replace(/[-\s]/g, "")),
});

/**
 * Sign in with MyKad number
 *
 * This action:
 * 1. Validates the MyKad number format
 * 2. Finds or creates a user with that MyKad
 * 3. Creates a session and sets cookies
 */
export async function signInWithMyKad(
  _prevState: AuthResult | null,
  formData: FormData,
): Promise<AuthResult> {
  try {
    // Parse and validate input
    const rawMykad = formData.get("mykadNumber");
    const parsed = signInSchema.safeParse({ mykadNumber: rawMykad });

    if (!parsed.success) {
      return {
        success: false,
        error: parsed.error.errors[0]?.message ?? "Invalid input",
      };
    }

    const { mykadNumber } = parsed.data;

    // Validate MyKad format
    const validation = validateMyKad(mykadNumber);
    if (!validation.isValid || !validation.normalized) {
      return {
        success: false,
        error: validation.error ?? "Invalid MyKad number format",
      };
    }

    const normalizedMykad = validation.normalized;

    // Generate internal email for better-auth compatibility
    const internalEmail = `${normalizedMykad}@mykad.internal`;
    const displayName = generateDisplayName(normalizedMykad);

    const incomingHeaders = await headers();

    // Find existing user by MyKad number or internal email
    let user = await db.user.findFirst({
      where: {
        OR: [{ mykadNumber: normalizedMykad }, { email: internalEmail }],
      },
    });

    if (!user) {
      // Create new user directly in database
      const userId = generateId();

      user = await db.user.create({
        data: {
          id: userId,
          email: internalEmail,
          name: displayName,
          emailVerified: false,
          mykadNumber: normalizedMykad,
          mykadVerifiedAt: new Date(),
        },
      });
    } else if (!user.mykadNumber) {
      // Link MyKad to existing user
      user = await db.user.update({
        where: { id: user.id },
        data: {
          mykadNumber: normalizedMykad,
          mykadVerifiedAt: new Date(),
        },
      });
    }

    // Create session
    const sessionToken = generateSecureToken();
    const sessionExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    await db.session.create({
      data: {
        id: generateId(),
        token: sessionToken,
        userId: user.id,
        expiresAt: sessionExpiresAt,
        ipAddress:
          incomingHeaders.get("x-forwarded-for") ??
          incomingHeaders.get("x-real-ip") ??
          "unknown",
        userAgent: incomingHeaders.get("user-agent") ?? "unknown",
      },
    });

    // Set session cookie
    const cookieStore = await cookies();
    cookieStore.set("better-auth.session_token", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: sessionExpiresAt,
    });

    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        mykadNumber: normalizedMykad,
      },
    };
  } catch (error) {
    console.error("[Auth] Sign-in error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}

/**
 * Sign out the current user
 */
export async function signOut(): Promise<void> {
  try {
    // Get session token from cookie
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;

    // Delete session from database if token exists
    if (sessionToken) {
      await db.session.deleteMany({
        where: { token: sessionToken },
      });
    }

    // Clear the cookie
    cookieStore.delete("better-auth.session_token");
  } catch (error) {
    console.error("[Auth] Sign-out error:", error);
  }

  redirect("/");
}

/**
 * Validate a MyKad number without signing in
 */
export async function validateMyKadNumber(
  mykadNumber: string,
): Promise<MyKadValidationResult & { displayName?: string }> {
  const validation = validateMyKad(mykadNumber);

  if (validation.isValid && validation.normalized) {
    return {
      ...validation,
      displayName: generateDisplayName(validation.normalized),
    };
  }

  return validation;
}

/**
 * Check if a MyKad number is already registered
 */
export async function isMyKadRegistered(
  mykadNumber: string,
): Promise<{ registered: boolean; userId?: string }> {
  const validation = validateMyKad(mykadNumber);

  if (!validation.isValid || !validation.normalized) {
    return { registered: false };
  }

  const user = await db.user.findFirst({
    where: { mykadNumber: validation.normalized },
    select: { id: true },
  });

  return {
    registered: !!user,
    userId: user?.id,
  };
}

/**
 * Input schema for Organization sign-up
 */
const orgSignUpSchema = z.object({
  orgName: z.string().min(1, "Organization name is required"),
  ssmNumber: z.string().min(1, "SSM/Registration number is required"),
  orgType: z.enum(["COMPANY", "ORGANIZER"], {
    errorMap: () => ({ message: "Organization type must be COMPANY or ORGANIZER" }),
  }),
});

/**
 * Sign up as an organization (Company or Event Organizer)
 */
export async function signUpAsOrganization(
  _prevState: AuthResult | null,
  formData: FormData,
): Promise<AuthResult> {
  try {
    // Parse and validate input
    const orgName = formData.get("orgName");
    const ssmNumber = formData.get("ssmNumber");
    const orgType = formData.get("orgType");

    const parsed = orgSignUpSchema.safeParse({
      orgName,
      ssmNumber,
      orgType,
    });

    if (!parsed.success) {
      return {
        success: false,
        error: parsed.error.errors[0]?.message ?? "Invalid input",
      };
    }

    const { orgName: validOrgName, ssmNumber: validSsmNumber, orgType: validOrgType } = parsed.data;

    const incomingHeaders = await headers();

    // Create a user account for the organization
    const userId = generateId();
    const orgEmail = `${validSsmNumber}@org.internal`;

    const user = await db.user.create({
      data: {
        id: userId,
        email: orgEmail,
        name: validOrgName,
        emailVerified: false,
      },
    });

    // Create the organization
    await db.organization.create({
      data: {
        id: generateId(),
        name: validOrgName,
        type: validOrgType,
        ssmNumber: validSsmNumber,
        createdById: userId,
      },
    });

    // Create user profile with the profile type
    await db.userProfile.create({
      data: {
        userId,
        fullName: validOrgName,
      },
    });

    // Update user's profileType
    await db.user.update({
      where: { id: userId },
      data: { profileType: validOrgType },
    });

    // Create session
    const sessionToken = generateSecureToken();
    const sessionExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    await db.session.create({
      data: {
        id: generateId(),
        token: sessionToken,
        userId: user.id,
        expiresAt: sessionExpiresAt,
        ipAddress:
          incomingHeaders.get("x-forwarded-for") ??
          incomingHeaders.get("x-real-ip") ??
          "unknown",
        userAgent: incomingHeaders.get("user-agent") ?? "unknown",
      },
    });

    // Set session cookie
    const cookieStore = await cookies();
    cookieStore.set("better-auth.session_token", sessionToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: sessionExpiresAt,
    });

    return {
      success: true,
      user: {
        id: user.id,
        name: user.name,
        mykadNumber: "",
      },
    };
  } catch (error) {
    console.error("[Auth] Organization sign-up error:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again.",
    };
  }
}

// Utility functions

/**
 * Generate a secure random token
 */
function generateSecureToken(): string {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const length = 32;
  let result = "";

  // Use crypto for secure random generation
  const randomValues = new Uint8Array(length);
  crypto.getRandomValues(randomValues);

  for (let i = 0; i < length; i++) {
    result += chars[randomValues[i]! % chars.length];
  }

  return result;
}

/**
 * Generate a unique ID
 */
function generateId(): string {
  return generateSecureToken();
}
