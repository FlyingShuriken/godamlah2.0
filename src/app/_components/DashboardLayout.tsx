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
  Menu,
  X,
} from "lucide-react";
import { type ProfileType } from "../../types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

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
        ...(role === "COMPANY"
          ? [{ id: "verify", icon: PlusCircle, label: "Verify" }]
          : []),
        { id: "profile", icon: User, label: "Settings" },
      ];

  return (
    <div className="liquid-bg min-h-screen font-sans text-slate-900 selection:bg-emerald-500/30 dark:bg-slate-950 dark:text-slate-50">
      {/* Desktop Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-72 flex-col border-r border-white/10 bg-white/5 backdrop-blur-2xl md:flex dark:border-slate-800/50 dark:bg-slate-900/40">
        <div className="flex h-20 items-center px-8">
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-xl shadow-lg shadow-emerald-500/20",
                isUser
                  ? "bg-gradient-to-br from-emerald-400 to-emerald-600"
                  : "bg-gradient-to-br from-blue-500 to-indigo-600",
              )}
            >
              <span className="text-xl font-bold text-white">
                {isUser ? "T" : "O"}
              </span>
            </div>
            <h1 className="text-xl font-bold tracking-tight">
              Talent<span className="text-emerald-500">Sync</span>
            </h1>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-4 py-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ease-in-out",
                  isActive
                    ? "bg-emerald-50 text-emerald-700 shadow-sm dark:bg-emerald-500/10 dark:text-emerald-400"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100",
                )}
              >
                <Icon
                  size={20}
                  className={cn(
                    "transition-colors",
                    isActive
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300",
                  )}
                />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-slate-200 p-4 dark:border-slate-800">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-slate-600 hover:bg-red-50 hover:text-red-600 dark:text-slate-400 dark:hover:bg-red-900/20 dark:hover:text-red-400"
            onClick={onLogout}
          >
            <LogOut size={20} />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-white/10 bg-white/5 px-4 backdrop-blur-2xl md:hidden dark:border-slate-800/50 dark:bg-slate-900/40">
        <div className="flex items-center gap-2">
          <div
            className={cn(
              "flex h-8 w-8 items-center justify-center rounded-lg",
              isUser
                ? "bg-gradient-to-br from-emerald-400 to-emerald-600"
                : "bg-gradient-to-br from-blue-500 to-indigo-600",
            )}
          >
            <span className="text-sm font-bold text-white">
              {isUser ? "T" : "O"}
            </span>
          </div>
          <span className="font-bold text-slate-900 dark:text-white">
            TalentSync
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onLogout}
          className="text-slate-500"
        >
          <LogOut size={20} />
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-8 md:ml-72 md:px-8 lg:px-12">
        <div className="animate-in fade-in slide-in-from-bottom-4 mx-auto max-w-5xl duration-500">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="pb-safe fixed right-0 bottom-0 left-0 z-50 border-t border-white/10 bg-white/5 backdrop-blur-2xl md:hidden dark:border-slate-800/50 dark:bg-slate-900/40">
        <div className="flex h-16 items-center justify-around px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "flex flex-1 flex-col items-center justify-center gap-1 py-2 transition-colors",
                  isActive
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200",
                )}
              >
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2.5 : 2}
                  className={cn(
                    "transition-transform duration-200",
                    isActive && "scale-110",
                  )}
                />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};
