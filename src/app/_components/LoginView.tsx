"use client";

import React, { useState, useEffect } from "react";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Building2,
  ArrowRight,
  ShieldCheck,
  QrCode,
  Loader2,
} from "lucide-react";
import { QrReader } from "react-qr-reader";
import {
  signInWithMyKad,
  signUpAsOrganization,
  type AuthResult,
} from "@/server/better-auth/actions";
import { validateMyKad } from "@/server/better-auth/mykad-plugin";
import { type ProfileType } from "@/types";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

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
  const [isScanModalOpen, setIsScanModalOpen] = useState(false);

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

  const handleScanResult = (result?: unknown, _error?: unknown) => {
    if (result) {
      // @ts-expect-error - react-qr-reader types are loose
      const text = result?.text;
      if (text) {
        const formatted = formatMykadInput(text);
        setMykad(formatted);
        setIsScanModalOpen(false);
      }
    }
  };

  return (
    <div className="liquid-bg flex min-h-screen w-full items-center justify-center p-4 dark:bg-slate-950">
      <div className="animate-in fade-in zoom-in-95 w-full max-w-md duration-500">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Talent<span className="text-emerald-500">Sync</span>
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            The national infrastructure for talent verification
          </p>
        </div>

        <Card className="border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl dark:border-slate-800/50 dark:bg-slate-900/40">
          <CardHeader>
            <CardTitle className="text-center text-xl">
              {step === "ROLE"
                ? "Choose your account type"
                : selectedRole === "USER"
                  ? "Citizen Login"
                  : "Organization Access"}
            </CardTitle>
            <CardDescription className="text-center">
              {step === "ROLE"
                ? "Select how you want to access the platform"
                : selectedRole === "USER"
                  ? "Enter your MyKad number to verify your identity"
                  : "Register or login your organization"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {step === "ROLE" ? (
              <div className="grid gap-4">
                <button
                  onClick={() => handleRoleSelect("USER")}
                  className="group relative flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-emerald-500/50 hover:bg-white/10 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950/50 dark:hover:border-emerald-500/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                    <User size={24} />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      Citizen
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Access your career passport
                    </p>
                  </div>
                  <ArrowRight className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-emerald-500" />
                </button>

                <button
                  onClick={() => handleRoleSelect("COMPANY")}
                  className="group relative flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-blue-500/50 hover:bg-white/10 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950/50 dark:hover:border-blue-500/50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <Building2 size={24} />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      Organization
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Manage talent and events
                    </p>
                  </div>
                  <ArrowRight className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-blue-500" />
                </button>
              </div>
            ) : (
              <form action={formAction} className="space-y-4">
                {selectedRole === "USER" ? (
                  <div className="space-y-2">
                    <Label htmlFor="mykad">MyKad Number</Label>
                    <div className="relative">
                      <Input
                        id="mykad"
                        name="mykad"
                        placeholder="e.g. 900101-14-1234"
                        value={mykad}
                        onChange={handleMyKadChange}
                        className={cn(
                          "pr-10 font-mono tracking-wide",
                          validationError
                            ? "border-red-500 focus-visible:ring-red-500"
                            : "focus-visible:ring-emerald-500",
                        )}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setIsScanModalOpen(true)}
                        className="absolute top-1/2 right-2 -translate-y-1/2 text-slate-400 hover:text-emerald-500"
                      >
                        <QrCode size={20} />
                      </button>
                    </div>
                    {validationError && (
                      <p className="text-xs text-red-500">{validationError}</p>
                    )}
                    {!validationError &&
                      mykad.replace(/[-\s]/g, "").length === 12 && (
                        <p className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
                          <ShieldCheck size={12} /> Valid format
                        </p>
                      )}
                  </div>
                ) : (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="orgName">Organization Name</Label>
                      <Input
                        id="orgName"
                        name="orgName"
                        placeholder="e.g. Tech Solutions Sdn Bhd"
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ssmNumber">Registration No. (SSM)</Label>
                      <Input
                        id="ssmNumber"
                        name="ssmNumber"
                        placeholder="e.g. 202301000001"
                        value={ssmNumber}
                        onChange={(e) => setSsmNumber(e.target.value)}
                        required
                      />
                    </div>
                  </>
                )}

                {state?.error && (
                  <div className="rounded-md bg-red-50 p-3 text-sm text-red-500 dark:bg-red-900/20 dark:text-red-400">
                    {state.error}
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      setStep("ROLE");
                      setValidationError(null);
                      setMykad("");
                      setOrgName("");
                      setSsmNumber("");
                    }}
                    disabled={isPending}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className={cn(
                      "flex-1",
                      selectedRole === "USER"
                        ? "bg-emerald-600 hover:bg-emerald-700"
                        : "bg-blue-600 hover:bg-blue-700",
                    )}
                    disabled={
                      isPending ||
                      (selectedRole === "USER" &&
                        (!!validationError ||
                          mykad.replace(/[-\s]/g, "").length !== 12))
                    }
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      "Continue"
                    )}
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
          <CardFooter className="justify-center border-t border-slate-100 bg-slate-50/50 py-4 dark:border-slate-800 dark:bg-slate-900/50">
            <p className="text-xs text-slate-500">
              Protected by National Digital Identity Framework
            </p>
          </CardFooter>
        </Card>
      </div>

      <Dialog open={isScanModalOpen} onOpenChange={setIsScanModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Scan MyKad QR</DialogTitle>
          </DialogHeader>
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-black">
            <QrReader
              onResult={handleScanResult}
              constraints={{ facingMode: "environment" }}
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-center text-sm text-slate-500">
            Position the QR code within the frame
          </p>
        </DialogContent>
      </Dialog>
    </div>
  );
};
