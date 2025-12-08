/**
 * MyKad Authentication Utilities
 *
 * This module provides Malaysian IC (MyKad) number validation and utilities.
 * In production, this would integrate with a QR code scanner that reads
 * the MyKad chip. For now, it uses manual IC number input.
 *
 * MyKad format: YYMMDD-PB-####
 * - YYMMDD: Birth date (6 digits)
 * - PB: Place of birth code (2 digits)
 * - ####: Unique identifier (4 digits, last digit indicates gender)
 */

import { z } from "zod";

export interface MyKadValidationResult {
  isValid: boolean;
  normalized?: string;
  birthDate?: Date;
  gender?: "male" | "female";
  stateCode?: string;
  error?: string;
}

/**
 * Validate and parse a MyKad number
 */
export function validateMyKad(input: string): MyKadValidationResult {
  // Remove any dashes or spaces
  const normalized = input.replace(/[-\s]/g, "");

  // Must be exactly 12 digits
  if (!/^\d{12}$/.test(normalized)) {
    return { isValid: false, error: "MyKad must be exactly 12 digits" };
  }

  // Parse components
  const year = parseInt(normalized.substring(0, 2), 10);
  const month = parseInt(normalized.substring(2, 4), 10);
  const day = parseInt(normalized.substring(4, 6), 10);
  const stateCode = normalized.substring(6, 8);
  const lastDigit = parseInt(normalized.substring(11, 12), 10);

  // Validate month
  if (month < 1 || month > 12) {
    return { isValid: false, error: "Invalid month in MyKad" };
  }

  // Validate day
  if (day < 1 || day > 31) {
    return { isValid: false, error: "Invalid day in MyKad" };
  }

  // Determine century (00-30 = 2000s, 31-99 = 1900s for reasonable ages)
  const fullYear = year <= 30 ? 2000 + year : 1900 + year;

  // Create birth date
  const birthDate = new Date(fullYear, month - 1, day);

  // Validate the date is real (handles things like Feb 30)
  if (
    birthDate.getFullYear() !== fullYear ||
    birthDate.getMonth() !== month - 1 ||
    birthDate.getDate() !== day
  ) {
    return { isValid: false, error: "Invalid birth date in MyKad" };
  }

  // Check if birth date is in the future
  if (birthDate > new Date()) {
    return { isValid: false, error: "Birth date cannot be in the future" };
  }

  // Determine gender (odd = male, even = female)
  const gender = lastDigit % 2 === 1 ? "male" : "female";

  return {
    isValid: true,
    normalized,
    birthDate,
    gender,
    stateCode,
  };
}

/**
 * Generate a display name from MyKad
 */
export function generateDisplayName(mykad: string): string {
  const validation = validateMyKad(mykad);
  if (!validation.isValid || !validation.birthDate) {
    return `User ${mykad.substring(0, 6)}`;
  }

  const yearSuffix = validation.birthDate.getFullYear().toString().slice(-2);
  return `MyKad User ${mykad.substring(0, 6)}${yearSuffix}`;
}

/**
 * MyKad authentication schema
 */
export const mykadAuthSchema = z.object({
  mykadNumber: z
    .string()
    .min(12, "MyKad must be at least 12 digits")
    .max(14, "MyKad is too long") // Allow for dashes
    .transform((val) => val.replace(/[-\s]/g, ""))
    .refine((val) => validateMyKad(val).isValid, {
      message: "Invalid MyKad number format",
    }),
});

export type MyKadAuthInput = z.infer<typeof mykadAuthSchema>;
