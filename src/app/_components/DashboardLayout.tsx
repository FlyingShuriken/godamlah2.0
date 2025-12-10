import React from 'react';
import { Home, Briefcase, User, Calendar, PlusCircle, LayoutDashboard, LogOut } from 'lucide-react';
import { type ProfileType } from '../../types';

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  role: ProfileType;
  onLogout: () => void;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, activeTab, setActiveTab, role, onLogout 
}) => {
  const isUser = role === 'USER';

  // Navigation Items based on Role
  const navItems = isUser ? [
    { id: 'home', icon: Home, label: 'Feed' },
    { id: 'jobs', icon: Briefcase, label: 'Jobs' },
    { id: 'events', icon: Calendar, label: 'Events' },
    { id: 'checkins', icon: PlusCircle, label: 'Check-ins' },
    { id: 'profile', icon: User, label: 'Profile' },
  ] : [
    { id: 'manage', icon: LayoutDashboard, label: 'Manage' },
    { id: 'verify', icon: PlusCircle, label: 'Verify' },
    { id: 'profile', icon: User, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col pb-20 md:pb-0">
      {/* Top Bar (Desktop & Mobile) */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md px-4 py-3 flex items-center justify-between">
         <div className="flex items-center gap-2">
            <div className={`h-8 w-8 rounded-lg flex items-center justify-center ${isUser ? 'bg-emerald-500' : 'bg-blue-600'}`}>
                <span className="font-bold text-white text-lg">{isUser ? 'T' : 'O'}</span>
            </div>
            <h1 className="font-bold text-white tracking-tight hidden md:block">Talent<span className="text-emerald-500">Sync</span></h1>
         </div>
         
         <div className="flex items-center gap-4">
             <button 
                onClick={onLogout}
                className="p-2 text-slate-400 hover:text-red-400 transition-colors rounded-full hover:bg-slate-900"
                title="Logout"
            >
                <LogOut size={20} />
             </button>
         </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-6 lg:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-500">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-slate-950 border-t border-slate-800 pb-safe z-50 md:hidden">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                  isActive ? 'text-emerald-500' : 'text-slate-500 hover:text-slate-300'
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
      <aside className="hidden md:flex flex-col fixed left-0 top-16 bottom-0 w-20 border-r border-slate-800 bg-slate-950/50 backdrop-blur-sm z-30">
          <div className="flex-1 flex flex-col items-center pt-6 gap-6">
            {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`p-3 rounded-xl transition-all ${
                    isActive 
                        ? 'bg-emerald-500/10 text-emerald-400' 
                        : 'text-slate-400 hover:bg-slate-900 hover:text-white'
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
