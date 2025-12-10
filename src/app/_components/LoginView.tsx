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
import { signInWithMyKad, signUpAsOrganization, type AuthResult } from "@/server/better-auth/actions";
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

  const [userState, userFormAction, userIsPending] = useActionState<AuthResult | null, FormData>(
    signInWithMyKad,
    null
  );

  const [orgState, orgFormAction, orgIsPending] = useActionState<AuthResult | null, FormData>(
    signUpAsOrganization,
    null
  );

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
      <div className="min-h-[100dvh] w-full flex flex-col items-center justify-center p-4 sm:p-6 bg-slate-950 relative overflow-x-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 left-0 w-full h-96 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="z-10 w-full max-w-md sm:max-w-3xl md:max-w-5xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="text-center space-y-3 mt-4 sm:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Talent<span className="text-emerald-500">Sync</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-400 max-w-xs mx-auto sm:max-w-none">
              Choose your portal to get started.
            </p>
          </div>

          {/* Changed: Grid layout adjustments for better scaling */}
          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 w-full">
            <button
              onClick={() => handleRoleSelect("USER")}
              // Changed: h-auto with min-height ensures content never gets cut off if text wraps
              className="group relative flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 hover:border-emerald-500 transition-all text-left w-full h-auto min-h-[5.5rem] sm:min-h-[7rem]"
            >
              <div className="shrink-0 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                <User size={22} className="sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white truncate">Job Seeker</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-tight">Build your verified career history.</p>
              </div>
              <ArrowRight className="shrink-0 text-slate-600 group-hover:text-emerald-400 transition-colors" size={20} />
            </button>

            <button
              onClick={() => handleRoleSelect("COMPANY")}
              className="group relative flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 hover:border-blue-500 transition-all text-left w-full h-auto min-h-[5.5rem] sm:min-h-[7rem]"
            >
              <div className="shrink-0 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Building2 size={22} className="sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white truncate">Company</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-tight">Hire verified talent & post jobs.</p>
              </div>
              <ArrowRight className="shrink-0 text-slate-600 group-hover:text-blue-400 transition-colors" size={20} />
            </button>

            <button
              onClick={() => handleRoleSelect("ORGANIZER")}
              className="group relative flex items-center gap-4 p-4 sm:p-5 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 hover:border-purple-500 transition-all text-left w-full h-auto min-h-[5.5rem] sm:min-h-[7rem]"
            >
              <div className="shrink-0 h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <Calendar size={22} className="sm:w-6 sm:h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white truncate">Event Organizer</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-tight">Manage events & volunteer staff.</p>
              </div>
              <ArrowRight className="shrink-0 text-slate-600 group-hover:text-purple-400 transition-colors" size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    // Changed: min-h-[100dvh] for mobile full height, added overflow-y-auto for safety
    <div className="min-h-[100dvh] w-full flex items-center justify-center p-4 bg-slate-950 overflow-y-auto">
      <Card className="w-full max-w-md p-6 sm:p-8 relative overflow-hidden bg-slate-900 border-slate-800 shadow-2xl">
        {/* Decorative Background */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-emerald-500/20 to-transparent blur-3xl rounded-full pointer-events-none" />

        <div className="mb-8 relative z-10">
          <button
            onClick={() => {
              setStep("ROLE");
              setValidationError(null);
            }}
            // Changed: Increased padding for better touch target size
            className="text-sm text-slate-400 hover:text-white mb-6 flex items-center gap-2 py-2 px-1 -ml-1 rounded transition-colors"
          >
            ← Back to roles
          </button>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {selectedRole === "USER"
              ? "Job Seeker"
              : selectedRole === "COMPANY"
                ? "Company"
                : "Organizer"}{" "}
            Login
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
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
          className="space-y-6 relative z-10"
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
                className="text-lg tracking-widest font-mono py-6 sm:py-2"
                error={validationError || undefined}
              />
              {mykad.length === 14 && !validationError && (
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 p-2 rounded animate-in fade-in duration-300">
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
            <div className="rounded-lg bg-red-950/30 px-4 py-3 text-sm text-red-400 border border-red-900/50">
              {state.error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full h-12 text-base font-medium"
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