"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { signInWithMyKad, type AuthResult } from "@/server/better-auth/actions";
import { validateMyKad } from "@/server/better-auth/mykad-plugin";

interface MyKadLoginFormProps {
  className?: string;
}

export function MyKadLoginForm({ className }: MyKadLoginFormProps) {
  const router = useRouter();
  const [mykadInput, setMykadInput] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);
  const [state, formAction, isPending] = useActionState<
    AuthResult | null,
    FormData
  >(signInWithMyKad, null);

  // Handle successful sign-in
  useEffect(() => {
    console.log(state);
    if (state?.success) {
      console.log("Sign-in successful");
      router.refresh();
    }
  }, [state, router]);

  // Client-side validation as user types
  useEffect(() => {
    if (mykadInput.length === 0) {
      setValidationError(null);
      return;
    }

    // Only validate when user has entered enough characters
    if (mykadInput.replace(/[-\s]/g, "").length >= 12) {
      const result = validateMyKad(mykadInput);
      if (!result.isValid) {
        setValidationError(result.error ?? "Invalid MyKad number");
      } else {
        setValidationError(null);
      }
    } else if (mykadInput.replace(/[-\s]/g, "").length > 0) {
      setValidationError(null);
    }
  }, [mykadInput]);

  // Format input with dashes: XXXXXX-XX-XXXX
  const formatMykadInput = (value: string): string => {
    const digits = value.replace(/\D/g, "").slice(0, 12);
    if (digits.length <= 6) return digits;
    if (digits.length <= 8) return `${digits.slice(0, 6)}-${digits.slice(6)}`;
    return `${digits.slice(0, 6)}-${digits.slice(6, 8)}-${digits.slice(8)}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatMykadInput(e.target.value);
    setMykadInput(formatted);
  };

  // Show parsed info when valid
  const mykadInfo = mykadInput.length >= 12 ? validateMyKad(mykadInput) : null;
  const isValidMykad = mykadInfo?.isValid ?? false;

  const handleSubmit = (formData: FormData) => {
    // Add the raw mykad number to form data
    const rawMykad = mykadInput.replace(/[-\s]/g, "");
    formData.set("mykadNumber", rawMykad);
    formAction(formData);
  };

  return (
    <form className={className} action={handleSubmit}>
      <div className="space-y-2">
        <label
          htmlFor="mykad-input"
          className="block text-sm font-medium text-slate-200"
        >
          MyKad IC Number
        </label>
        <div className="relative">
          <input
            id="mykad-input"
            name="mykadDisplay"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            value={mykadInput}
            onChange={handleInputChange}
            placeholder="XXXXXX-XX-XXXX"
            className={`w-full rounded-lg border px-4 py-3 font-mono text-lg tracking-wider text-white transition-colors ${
              validationError
                ? "border-red-500 bg-red-950/20 focus:border-red-400"
                : isValidMykad
                  ? "border-emerald-500 bg-emerald-950/20 focus:border-emerald-400"
                  : "border-slate-700 bg-slate-900 focus:border-slate-500"
            } focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 focus:outline-none ${validationError ? "focus:ring-red-500/50" : isValidMykad ? "focus:ring-emerald-500/50" : "focus:ring-slate-500/50"} `}
            disabled={isPending}
          />
          {isValidMykad && (
            <div className="absolute top-1/2 right-3 -translate-y-1/2">
              <svg
                className="h-5 w-5 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Validation feedback */}
        {validationError && (
          <p className="text-sm text-red-400">{validationError}</p>
        )}

        {/* Parsed MyKad info */}
        {isValidMykad && mykadInfo && (
          <div className="rounded-lg bg-emerald-950/30 px-3 py-2 text-sm text-emerald-300">
            <p className="font-medium">MyKad Valid</p>
            <p className="text-emerald-400/80">
              Birth:{" "}
              {mykadInfo.birthDate?.toLocaleDateString("en-MY", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
              {mykadInfo.gender && (
                <> · {mykadInfo.gender === "male" ? "Male" : "Female"}</>
              )}
            </p>
          </div>
        )}

        {/* Server-side error */}
        {state && !state.success && state.error && (
          <p className="rounded-lg bg-red-950/30 px-3 py-2 text-sm text-red-400">
            {state.error}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={!isValidMykad || isPending}
        className={`mt-4 w-full rounded-lg px-6 py-3 text-base font-semibold transition-all ${
          isValidMykad && !isPending
            ? "bg-emerald-500 text-slate-900 hover:bg-emerald-400 active:bg-emerald-600"
            : "cursor-not-allowed bg-slate-700 text-slate-400"
        } `}
      >
        {isPending ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="h-5 w-5 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Signing in...
          </span>
        ) : (
          "Sign in with MyKad"
        )}
      </button>
    </form>
  );
}
