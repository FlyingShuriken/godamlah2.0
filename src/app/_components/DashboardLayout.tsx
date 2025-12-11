import React from "react";
import {
  Home,
  Briefcase,
  User,
  Calendar,
  PlusCircle,
  LayoutDashboard,
  LogOut,
  Award,
} from "lucide-react";
import { type ProfileType } from "../../types";

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  role: ProfileType;
  onLogout: () => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  activeTab,
  setActiveTab,
  role,
  onLogout,
}) => {
  const isUser = role === "USER";

  // Navigation Items based on Role
  const navItems = isUser
    ? [
        { id: "home", icon: Home, label: "Feed" },
        { id: "jobs", icon: Briefcase, label: "Jobs" },
        { id: "events", icon: Calendar, label: "Events" },
        { id: "checkins", icon: PlusCircle, label: "Check-ins" },
        { id: "certificates", icon: Award, label: "Certs" },
        { id: "profile", icon: User, label: "Profile" },
      ]
    : [
        { id: "manage", icon: LayoutDashboard, label: "Manage" },
        { id: "verify", icon: PlusCircle, label: "Verify" },
        { id: "profile", icon: User, label: "Settings" },
      ];

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 pb-20 md:pb-0">
      {/* Top Bar (Desktop & Mobile) */}
      <header className="sticky top-0 z-40 flex w-full items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 py-3 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-lg ${isUser ? "bg-emerald-500" : "bg-blue-600"}`}
          >
            <span className="text-lg font-bold text-white">
              {isUser ? "T" : "O"}
            </span>
          </div>
          <h1 className="hidden font-bold tracking-tight text-white md:block">
            Talent<span className="text-emerald-500">Sync</span>
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onLogout}
            className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-900 hover:text-red-400"
            title="Logout"
          >
            <LogOut size={20} />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="animate-in fade-in mx-auto w-full max-w-7xl flex-1 p-4 duration-500 md:p-6 lg:px-8">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="pb-safe fixed bottom-0 left-0 z-50 w-full border-t border-slate-800 bg-slate-950 md:hidden">
        <div className="flex h-16 items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex h-full w-full flex-col items-center justify-center space-y-1 ${
                  isActive
                    ? "text-emerald-500"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Desktop Sidebar (Hidden on Mobile) */}
      <aside className="fixed top-16 bottom-0 left-0 z-30 hidden w-20 flex-col border-r border-slate-800 bg-slate-950/50 backdrop-blur-sm md:flex">
        <div className="flex flex-1 flex-col items-center gap-6 pt-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`rounded-xl p-3 transition-all ${
                  isActive
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "text-slate-400 hover:bg-slate-900 hover:text-white"
                }`}
                title={item.label}
              >
                <Icon size={24} />
              </button>
            );
          })}
        </div>
      </aside>
    </div>
  );
};
