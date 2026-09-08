import React, { useState } from 'react';
import { useApp, PageId } from '../../context/AppContext';
import { 
  Sparkles, 
  Menu, 
  X, 
  ShieldCheck, 
  User as UserIcon, 
  LogOut, 
  LogIn, 
  Calendar, 
  Trophy, 
  Users, 
  Info, 
  Home, 
  LayoutDashboard,
  ChevronDown
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { 
    currentPage, 
    setCurrentPage, 
    currentUser, 
    switchRole, 
    logout, 
    setIsJoinModalOpen 
  } = useApp();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const navItems: { id: PageId; label: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Info },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
  ];

  // If user is member or leader, add Dashboard in nav
  if (currentUser.role !== 'viewer') {
    navItems.push({ id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard });
  }

  const handleNavClick = (id: PageId) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-amber-500/15 bg-[#070b14]/90 backdrop-blur-md transition-all">
      {/* Top micro-bar with College Affiliation */}
      <div className="hidden sm:block border-b border-slate-800/80 bg-[#05080f] py-1.5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="tracking-wide font-medium text-slate-300">
              Mahatma Education Society’s Pillai University • Dr. K. M. Vasudevan Pillai Campus, New Panvel
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>State Private University • NAAC ‘A+’ Accredited</span>
            <span className="text-slate-600">|</span>
            <span className="text-amber-400/90 font-medium">Academic Session 2025–2026</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand identity */}
          <button 
            id="brand-home-link"
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group text-left focus:outline-none"
          >
            {/* Crest Emblem */}
            <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 p-[1.5px] shadow-lg shadow-amber-950/40 group-hover:shadow-amber-500/20 transition-all duration-300">
              <div className="w-full h-full rounded-[10px] bg-[#0a0f1d] flex items-center justify-center">
                <span className="font-regal text-xl font-bold bg-gradient-to-br from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                  T
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-500/20 border border-amber-400/60 flex items-center justify-center">
                <Sparkles className="w-2.5 h-2.5 text-amber-300" />
              </div>
            </div>

            {/* Typography */}
            <div>
              <div className="flex items-center gap-2">
                <span className="font-regal text-xl font-extrabold tracking-wider text-slate-100 group-hover:text-amber-300 transition-colors">
                  TAPAS
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/30 text-amber-300">
                  Committee
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium tracking-tight">
                Pillai University
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'text-amber-300 bg-amber-500/10 border border-amber-500/30 font-semibold'
                      : 'text-slate-300 hover:text-slate-100 hover:bg-slate-800/50 border border-transparent'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-amber-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons & Role menu */}
          <div className="hidden lg:flex items-center gap-3">
            
            {/* Role indicator dropdown */}
            <div className="relative">
              <button
                id="role-switch-trigger"
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-700/80 bg-slate-900/80 hover:bg-slate-800 text-xs text-slate-200 transition-all"
                title="Switch role for testing"
              >
                <div className={`w-2 h-2 rounded-full ${
                  currentUser.role === 'leader' ? 'bg-amber-400' :
                  currentUser.role === 'member' ? 'bg-blue-400' : 'bg-slate-400'
                }`} />
                <span className="font-medium capitalize text-slate-300">
                  {currentUser.role === 'leader' ? 'Team Leader' : currentUser.role === 'member' ? 'Member' : 'Viewer'}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {roleDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-xl border border-slate-700 bg-[#0d1424] shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-2 border-b border-slate-800">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Role Preview Mode</p>
                    <p className="text-xs text-slate-300 mt-0.5">Switch viewing perspective:</p>
                  </div>
                  
                  <div className="py-1 space-y-1">
                    <button
                      onClick={() => { switchRole('viewer'); setRoleDropdownOpen(false); }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                        currentUser.role === 'viewer' ? 'bg-amber-500/20 text-amber-200 font-semibold' : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <div>
                        <div className="font-medium">Public Viewer</div>
                        <div className="text-[10px] text-slate-400">Browse events, team & achievements</div>
                      </div>
                      {currentUser.role === 'viewer' && <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />}
                    </button>

                    <button
                      onClick={() => { switchRole('member'); setRoleDropdownOpen(false); }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                        currentUser.role === 'member' ? 'bg-amber-500/20 text-amber-200 font-semibold' : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <div>
                        <div className="font-medium">Committee Member (Aarav)</div>
                        <div className="text-[10px] text-slate-400">Tasks, idea submissions & profile</div>
                      </div>
                      {currentUser.role === 'member' && <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />}
                    </button>

                    <button
                      onClick={() => { switchRole('leader'); setRoleDropdownOpen(false); }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                        currentUser.role === 'leader' ? 'bg-amber-500/20 text-amber-200 font-semibold' : 'text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      <div>
                        <div className="font-medium">Team Leader (Ananya)</div>
                        <div className="text-[10px] text-slate-400">Create events, assign tasks, full admin</div>
                      </div>
                      {currentUser.role === 'leader' && <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Auth / Profile action */}
            {currentUser.role === 'viewer' ? (
              <button
                id="nav-login-btn"
                onClick={() => handleNavClick('login')}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-700 bg-slate-800/60 hover:bg-slate-800 text-slate-200 text-xs font-medium transition-all"
              >
                <LogIn className="w-3.5 h-3.5 text-amber-400" />
                <span>Portal Login</span>
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  id="nav-dashboard-quick"
                  onClick={() => handleNavClick('dashboard')}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-medium transition-all"
                >
                  <img 
                    src={currentUser.avatar} 
                    alt={currentUser.name} 
                    className="w-5 h-5 rounded-full object-cover border border-amber-400/50" 
                  />
                  <span>{currentUser.name.split(' ')[0]}</span>
                </button>
                <button
                  id="nav-logout-btn"
                  onClick={logout}
                  className="p-2 rounded-lg border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-rose-400 transition-colors"
                  title="Log out"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Join CTA */}
            <button
              id="nav-join-tapas-btn"
              onClick={() => setIsJoinModalOpen(true)}
              className="relative group overflow-hidden rounded-lg p-[1px] font-medium text-xs shadow-lg shadow-amber-950/40 transition-all active:scale-[0.98]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-lg group-hover:brightness-110 transition-all"></span>
              <span className="relative flex items-center gap-1.5 px-4 py-2 rounded-[7px] bg-[#0b1120] text-amber-300 font-semibold group-hover:bg-opacity-90 transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Join TAPAS</span>
              </span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#070b14] px-4 pt-3 pb-6 space-y-3 animate-in fade-in">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Role switcher inside mobile drawer */}
          <div className="pt-3 border-t border-slate-800/80 space-y-2">
            <div className="text-xs font-semibold uppercase text-slate-400 px-1">Switch Perspective:</div>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                onClick={() => switchRole('viewer')}
                className={`py-1.5 px-2 rounded text-xs text-center border ${
                  currentUser.role === 'viewer' ? 'bg-amber-500/20 border-amber-500 text-amber-200' : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}
              >
                Viewer
              </button>
              <button
                onClick={() => switchRole('member')}
                className={`py-1.5 px-2 rounded text-xs text-center border ${
                  currentUser.role === 'member' ? 'bg-amber-500/20 border-amber-500 text-amber-200' : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}
              >
                Member
              </button>
              <button
                onClick={() => switchRole('leader')}
                className={`py-1.5 px-2 rounded text-xs text-center border ${
                  currentUser.role === 'leader' ? 'bg-amber-500/20 border-amber-500 text-amber-200' : 'bg-slate-900 border-slate-800 text-slate-400'
                }`}
              >
                Team Lead
              </button>
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            {currentUser.role === 'viewer' ? (
              <button
                onClick={() => handleNavClick('login')}
                className="w-full py-2.5 rounded-lg border border-slate-700 bg-slate-800 text-slate-200 text-sm font-medium flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4 text-amber-400" />
                <span>Portal Login</span>
              </button>
            ) : (
              <button
                onClick={logout}
                className="w-full py-2.5 rounded-lg border border-rose-900/40 bg-rose-950/20 text-rose-300 text-sm font-medium flex items-center justify-center gap-2"
              >
                <LogOut className="w-4 h-4 text-rose-400" />
                <span>Log Out ({currentUser.name})</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsJoinModalOpen(true);
              }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-950/40"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Apply to Join TAPAS</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
