"use client";

import React, { useState, useEffect } from "react";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Building2,
  Calendar,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import {
  signInWithMyKad,
  signUpAsOrganization,
  type AuthResult,
} from "@/server/better-auth/actions";
import { validateMyKad } from "@/server/better-auth/mykad-plugin";
import { Card, Button, Input } from "./ui";
import { type ProfileType } from "@/types";

interface LoginViewProps {
  onLoginSuccess?: () => void;
}

export const LoginView: React.FC<LoginViewProps> = ({ onLoginSuccess }) => {
  const router = useRouter();
  const [step, setStep] = useState<"ROLE" | "FORM">("ROLE");
  const [selectedRole, setSelectedRole] = useState<ProfileType | null>(null);

  // Form State
  const [mykad, setMykad] = useState("");
  const [orgName, setOrgName] = useState("");
  const [ssmNumber, setSsmNumber] = useState("");
  const [validationError, setValidationError] = useState<string | null>(null);

  const [userState, userFormAction, userIsPending] = useActionState<
    AuthResult | null,
    FormData
  >(signInWithMyKad, null);

  const [orgState, orgFormAction, orgIsPending] = useActionState<
    AuthResult | null,
    FormData
  >(signUpAsOrganization, null);

  // Use appropriate state based on role
  const state = selectedRole === "USER" ? userState : orgState;
  const formAction = selectedRole === "USER" ? userFormAction : orgFormAction;
  const isPending = selectedRole === "USER" ? userIsPending : orgIsPending;

  useEffect(() => {
    if (state?.success) {
      onLoginSuccess?.();
      router.refresh();
    }
  }, [state?.success, onLoginSuccess, router]);

  const handleRoleSelect = (role: ProfileType) => {
    setSelectedRole(role);
    setStep("FORM");
    setValidationError(null);
  };

  // Format input with dashes: XXXXXX-XX-XXXX
  const formatMykadInput = (value: string): string => {
    const digits = value.replace(/\D/g, "").slice(0, 12);
    if (digits.length <= 6) return digits;
    if (digits.length <= 8) return `${digits.slice(0, 6)}-${digits.slice(6)}`;
    return `${digits.slice(0, 6)}-${digits.slice(6, 8)}-${digits.slice(8)}`;
  };

  const handleMyKadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatMykadInput(e.target.value);
    setMykad(formatted);

    // Client-side validation as user types
    if (formatted.length === 0) {
      setValidationError(null);
      return;
    }

    // Only validate when user has entered enough characters
    if (formatted.replace(/[-\s]/g, "").length >= 12) {
      const result = validateMyKad(formatted);
      if (!result.isValid) {
        setValidationError(result.error ?? "Invalid MyKad number");
      } else {
        setValidationError(null);
      }
    } else if (formatted.replace(/[-\s]/g, "").length > 0) {
      setValidationError(null);
    }
  };

  if (step === "ROLE") {
    return (
      // Changed: min-h-[100dvh] handles mobile browser bars better.
      // Removed overflow-hidden from parent to allow scrolling on small landscape screens.
      <div className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-x-hidden bg-slate-950 p-4 sm:p-6">
        {/* Background Decor */}
        <div className="pointer-events-none absolute top-0 left-0 h-96 w-full rounded-full bg-emerald-500/10 blur-[100px]" />

        <div className="animate-in fade-in slide-in-from-bottom-8 z-10 w-full max-w-md space-y-8 duration-700 sm:max-w-3xl md:max-w-5xl">
          <div className="mt-4 space-y-3 text-center sm:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Talent<span className="text-emerald-500">Sync</span>
            </h1>
            <p className="mx-auto max-w-xs text-sm text-slate-400 sm:max-w-none sm:text-base">
              Choose your portal to get started.
            </p>
          </div>

          {/* Changed: Grid layout adjustments for better scaling */}
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
            <button
              onClick={() => handleRoleSelect("USER")}
              // Changed: h-auto with min-height ensures content never gets cut off if text wraps
              className="group relative flex h-auto min-h-[5.5rem] w-full items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-left transition-all hover:border-emerald-500 hover:bg-slate-800 sm:min-h-[7rem] sm:p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 transition-colors group-hover:bg-emerald-500 group-hover:text-slate-950 sm:h-14 sm:w-14">
                <User size={22} className="sm:h-6 sm:w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold text-white">
                  Job Seeker
                </h3>
                <p className="text-xs leading-tight text-slate-400 sm:text-sm">
                  Build your verified career history.
                </p>
              </div>
              <ArrowRight
                className="shrink-0 text-slate-600 transition-colors group-hover:text-emerald-400"
                size={20}
              />
            </button>

            <button
              onClick={() => handleRoleSelect("COMPANY")}
              className="group relative flex h-auto min-h-[5.5rem] w-full items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-left transition-all hover:border-blue-500 hover:bg-slate-800 sm:min-h-[7rem] sm:p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 transition-colors group-hover:bg-blue-500 group-hover:text-white sm:h-14 sm:w-14">
                <Building2 size={22} className="sm:h-6 sm:w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold text-white">Company</h3>
                <p className="text-xs leading-tight text-slate-400 sm:text-sm">
                  Hire verified talent & post jobs.
                </p>
              </div>
              <ArrowRight
                className="shrink-0 text-slate-600 transition-colors group-hover:text-blue-400"
                size={20}
              />
            </button>

            <button
              onClick={() => handleRoleSelect("ORGANIZER")}
              className="group relative flex h-auto min-h-[5.5rem] w-full items-center gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4 text-left transition-all hover:border-purple-500 hover:bg-slate-800 sm:min-h-[7rem] sm:p-5"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-purple-400 transition-colors group-hover:bg-purple-500 group-hover:text-white sm:h-14 sm:w-14">
                <Calendar size={22} className="sm:h-6 sm:w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold text-white">
                  Event Organizer
                </h3>
                <p className="text-xs leading-tight text-slate-400 sm:text-sm">
                  Manage events & volunteer staff.
                </p>
              </div>
              <ArrowRight
                className="shrink-0 text-slate-600 transition-colors group-hover:text-purple-400"
                size={20}
              />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    // Changed: min-h-[100dvh] for mobile full height, added overflow-y-auto for safety
    <div className="flex min-h-[100dvh] w-full items-center justify-center overflow-y-auto bg-slate-950 p-4">
      <Card className="relative w-full max-w-md overflow-hidden border-slate-800 bg-slate-900 p-6 shadow-2xl sm:p-8">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-500/20 to-transparent blur-3xl" />

        <div className="relative z-10 mb-8">
          <button
            onClick={() => {
              setStep("ROLE");
              setValidationError(null);
            }}
            // Changed: Increased padding for better touch target size
            className="mb-6 -ml-1 flex items-center gap-2 rounded px-1 py-2 text-sm text-slate-400 transition-colors hover:text-white"
          >
            ← Back to roles
          </button>
          <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
            {selectedRole === "USER"
              ? "Job Seeker"
              : selectedRole === "COMPANY"
                ? "Company"
                : "Organizer"}{" "}
            Login
          </h2>
          <p className="text-sm leading-relaxed text-slate-400">
            {selectedRole === "USER"
              ? "Enter your MyKad IC number to continue."
              : "Enter your organization details to continue."}
          </p>
        </div>

        <form
          action={(formData) => {
            if (selectedRole === "USER") {
              const rawMykad = mykad.replace(/[-\s]/g, "");
              formData.set("mykadNumber", rawMykad);
            }
            formAction(formData);
          }}
          className="relative z-10 space-y-6"
        >
          {selectedRole === "USER" ? (
            <div className="space-y-2">
              <Input
                label="MyKad Number"
                placeholder="XXXXXX-XX-XXXX"
                value={mykad}
                onChange={handleMyKadChange}
                // Changed: Added inputMode for mobile numeric keypad
                inputMode="numeric"
                className="py-6 font-mono text-lg tracking-widest sm:py-2"
                error={validationError || undefined}
              />
              {mykad.length === 14 && !validationError && (
                <div className="animate-in fade-in flex items-center gap-2 rounded bg-emerald-500/10 p-2 text-xs text-emerald-400 duration-300">
                  <ShieldCheck size={14} />
                  Format valid
                </div>
              )}
            </div>
          ) : (
            <>
              <input type="hidden" name="orgName" value={orgName} />
              <input type="hidden" name="ssmNumber" value={ssmNumber} />
              <input type="hidden" name="orgType" value={selectedRole || ""} />
              <Input
                label={
                  selectedRole === "COMPANY"
                    ? "Company Name"
                    : "Organization Name"
                }
                placeholder="e.g. TechCorp Solutions"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
                className="py-5 sm:py-2"
              />
              <Input
                label="SSM / Registration No."
                placeholder="e.g. 202301000000"
                value={ssmNumber}
                onChange={(e) => setSsmNumber(e.target.value)}
                className="py-5 sm:py-2"
              />
              {validationError && (
                <p className="text-xs text-red-400">{validationError}</p>
              )}
            </>
          )}

          {state && !state.success && state.error && (
            <div className="rounded-lg border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-400">
              {state.error}
            </div>
          )}

          <Button
            type="submit"
            className="h-12 w-full text-base font-medium"
            size="lg"
            isLoading={isPending}
            disabled={
              selectedRole === "USER"
                ? mykad.length !== 14 || !!validationError
                : !orgName || !ssmNumber || !!validationError
            }
          >
            Access Portal
          </Button>
        </form>
      </Card>
    </div>
  );
};
