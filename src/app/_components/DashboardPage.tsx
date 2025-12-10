"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/trpc/react";
import { signOut } from "@/server/better-auth/actions";
import { DashboardLayout } from "@/app/_components/DashboardLayout";
import { SeekerView } from "@/app/_components/SeekerView";
import { OrganizerView } from "@/app/_components/OrganizerView";
import { type ProfileType } from "@/types";

export function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("home");
  
  const profileTypeQuery = api.profile.getProfileType.useQuery();
  const profileQuery = api.profile.getMine.useQuery();

  const role = profileTypeQuery.data?.profileType ?? "USER";
  const userName = profileQuery.data?.fullName ?? "User";

  useEffect(() => {
    // Auto-select first tab based on role
    if (role === "USER") {
      setActiveTab("home");
    } else {
      setActiveTab("manage");
    }
  }, [role]);

  const handleLogout = async () => {
    // Call the server action to sign out
    await signOut();
    router.push("/");
  };

  const renderContent = () => {
    if (role === "USER") {
      return <SeekerView activeTab={activeTab} />;
    } else if (role === "ORGANIZER" || role === "COMPANY") {
      return <OrganizerView activeTab={activeTab} role={role} />;
    }
    return <div className="text-slate-400">Loading...</div>;
  };

  if (profileTypeQuery.isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
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
