// --- START OF FILE DashboardPage.tsx ---

"use client";

import { useState, useEffect } from "react";
import { api } from "@/trpc/react";
import { signOut } from "@/server/better-auth/actions";
import { DashboardLayout } from "@/app/_components/DashboardLayout";
import { SeekerView } from "@/app/_components/SeekerView";
import { OrganizerView } from "@/app/_components/OrganizerView";

export function DashboardPage() {
  // No need for utils.invalidate() if we force reload on logout,
  // but good to have utils for other operations.
  const [activeTab, setActiveTab] = useState("home");

  // FIX 1: Disable caching for the profile type check.
  // This ensures we ALWAYS ask the server "Who am I?" when this component mounts.
  const profileTypeQuery = api.profile.getProfileType.useQuery(undefined, {
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    staleTime: 0, // Data is considered stale immediately
  });

  const role = profileTypeQuery.data?.profileType ?? "USER";

  useEffect(() => {
    // Only auto-switch tabs when we are sure about the role
    if (!profileTypeQuery.isLoading && role) {
      if (role === "USER") {
        setActiveTab("home");
      } else {
        setActiveTab("manage");
      }
    }
  }, [role, profileTypeQuery.isLoading]);

  const handleLogout = async () => {
    // Call the server action to sign out
    await signOut();

    // FIX 2: FORCE A HARD BROWSER RELOAD
    // Instead of router.push('/'), we use window.location.href.
    // This wipes the browser's JavaScript memory (TRPC cache, React state, etc).
    // This guarantees the next user starts with a clean slate.
    window.location.href = "/";
  };

  const renderContent = () => {
    // FIX 3: Strict Loading State
    // Do not render ANY view until we confirm the role from the server.
    // This prevents the "Flash of Wrong Content" (e.g. seeing Company view as a User).
    if (profileTypeQuery.isLoading) {
      return (
        <div className="flex h-full items-center justify-center text-slate-400">
          Loading dashboard...
        </div>
      );
    }

    if (role === "USER") {
      return <SeekerView activeTab={activeTab} />;
    } else if (role === "ORGANIZER" || role === "COMPANY") {
      return <OrganizerView activeTab={activeTab} role={role} />;
    }

    // Fallback
    return <div className="text-slate-400">Loading...</div>;
  };

  if (profileTypeQuery.isError) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-950">
        <div className="text-red-400">
          Failed to load profile: {profileTypeQuery.error?.message}
        </div>
        <button
          onClick={() => {
            // Hard reload on error too
            window.location.href = "/";
          }}
          className="text-emerald-400 underline"
        >
          Go back to login
        </button>
      </div>
    );
  }

  // Full screen loader during initial role check
  if (profileTypeQuery.isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="text-slate-400">Loading your profile...</div>
      </div>
    );
  }

  return (
    <DashboardLayout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      role={role}
      onLogout={handleLogout}
    >
      {renderContent()}
    </DashboardLayout>
  );
}
