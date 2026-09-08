import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { UserRole } from '../../types';
import { 
  Sparkles, 
  ShieldCheck, 
  Eye, 
  UserCheck, 
  Lock, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle 
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const { loginAs, setIsJoinModalOpen, addToast, setCurrentPage } = useApp();

  const [selectedRole, setSelectedRole] = useState<UserRole>('leader');
  const [email, setEmail] = useState('ananya.nair@pillai.edu');
  const [password, setPassword] = useState('••••••••••••');
  const [rememberMe, setRememberMe] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const roleConfigs = [
    {
      role: 'viewer' as UserRole,
      title: 'Public Viewer / Student',
      tag: 'General Access',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      description: 'Explore campus events, reserve delegate passes, discover team members, and view verified achievements.',
      defaultEmail: 'viewer@student.pillai.edu',
      badgeColor: 'border-slate-700 bg-slate-800 text-slate-300',
      icon: Eye
    },
    {
      role: 'member' as UserRole,
      title: 'Committee Member',
      tag: 'Aarav Sharma • Core Wing',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
      description: 'Access personal task manager, submit event proposals, review committee meeting notes, and manage student profile.',
      defaultEmail: 'aarav.sharma@pillai.edu',
      badgeColor: 'border-blue-500/40 bg-blue-500/10 text-blue-300',
      icon: UserCheck
    },
    {
      role: 'leader' as UserRole,
      title: 'Executive / Team Leader',
      tag: 'Ananya Nair • President',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      description: 'Create & publish conclaves, assign tasks to members, inspect attendee rosters, and curate achievements.',
      defaultEmail: 'ananya.nair@pillai.edu',
      badgeColor: 'border-amber-500/40 bg-amber-500/10 text-amber-300',
      icon: ShieldCheck
    }
  ];

  const handleRoleSelect = (role: UserRole, defaultEmail: string) => {
    setSelectedRole(role);
    setEmail(defaultEmail);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      loginAs(selectedRole, email);
    }, 600);
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail || !forgotEmail.includes('@')) {
      addToast('error', 'Invalid Email', 'Please provide your registered Pillai University email.');
      return;
    }
    setShowForgotPassword(false);
    addToast('success', 'Reset Link Dispatched', `A password reset link has been dispatched to ${forgotEmail}.`);
    setForgotEmail('');
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-4xl space-y-8">
        
        {/* Header Branding */}
        <div className="text-center space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 p-[1.5px] mx-auto shadow-xl shadow-amber-950/50 flex items-center justify-center">
            <div className="w-full h-full rounded-[14px] bg-[#0a0f1d] flex items-center justify-center">
              <span className="font-regal text-2xl font-bold text-amber-300">T</span>
            </div>
          </div>
          <h1 className="font-regal text-3xl sm:text-4xl font-extrabold text-slate-100">
            TAPAS Institutional Portal
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
            Select your credentialed authority tier to access the council console or continue as a public delegate.
          </p>
        </div>

        {/* 1. Visual Role Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roleConfigs.map((cfg) => {
            const Icon = cfg.icon;
            const isSelected = selectedRole === cfg.role;
            return (
              <div
                key={cfg.role}
                onClick={() => handleRoleSelect(cfg.role, cfg.defaultEmail)}
                className={`relative rounded-2xl border p-5 cursor-pointer transition-all duration-300 flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'border-amber-400 bg-[#0d1629] shadow-xl shadow-amber-500/10 ring-1 ring-amber-400/50'
                    : 'border-slate-800 bg-[#0a0f1d] hover:border-slate-700 opacity-80 hover:opacity-100'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={cfg.avatar}
                        alt={cfg.title}
                        className="w-10 h-10 rounded-full object-cover border border-amber-500/40"
                      />
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider block text-amber-400">
                          {cfg.tag}
                        </span>
                        <h4 className="font-regal text-sm font-bold text-slate-100">
                          {cfg.title}
                        </h4>
                      </div>
                    </div>
                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>

                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {cfg.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-mono truncate max-w-[170px]">{cfg.defaultEmail}</span>
                  <span className={`text-[10px] font-semibold ${isSelected ? 'text-amber-300' : 'text-slate-500'}`}>
                    {isSelected ? 'Active' : 'Click to Select'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 2. Login Form Container */}
        <div className="relative rounded-3xl border border-amber-500/30 bg-[#090f1d] p-6 sm:p-10 shadow-2xl space-y-6 max-w-xl mx-auto">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <h3 className="font-regal text-lg font-bold text-slate-100">
                Authenticate as <span className="text-amber-400 capitalize">{selectedRole}</span>
              </h3>
              <p className="text-xs text-slate-400">
                Pillai University Single Sign-On (SSO) Simulator
              </p>
            </div>
            <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300">
              Demo Mode Active
            </span>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Institutional Email ID (@pillai.edu)
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400 font-mono"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-slate-300">
                  Password Credentials
                </label>
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-[11px] text-amber-400 hover:text-amber-300 font-medium"
                >
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-900 text-amber-500 focus:ring-0"
                />
                <span>Remember session credentials</span>
              </label>
              <span className="text-[11px] text-slate-500">256-Bit Encrypted</span>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-xl shadow-amber-950/50 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Enter {selectedRole === 'leader' ? 'Team Leader Console' : selectedRole === 'member' ? 'Member Dashboard' : 'Public Portal'}</span>
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                </>
              )}
            </button>
          </form>

          {/* Prompt to join / Request account */}
          <div className="pt-4 border-t border-slate-800 text-center text-xs text-slate-400 space-y-1">
            <p>
              Not an inducted TAPAS member yet?{' '}
              <button
                onClick={() => setIsJoinModalOpen(true)}
                className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4"
              >
                Submit candidate recruitment form
              </button>
            </p>
          </div>

        </div>

      </div>

      {/* Forgot password modal */}
      {showForgotPassword && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0a0f1d] border border-amber-500/30 rounded-2xl p-6 max-w-sm w-full space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h4 className="font-regal text-base font-bold text-slate-100">
                Reset Council Access Key
              </h4>
              <button
                onClick={() => setShowForgotPassword(false)}
                className="text-slate-400 hover:text-slate-200"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-400">
              Enter your registered Pillai University email address to receive an instant authentication passcode.
            </p>

            <form onSubmit={handleForgotSubmit} className="space-y-3">
              <input
                type="email"
                required
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                placeholder="username@pillai.edu"
                className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400 font-mono"
              />

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(false)}
                  className="px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-slate-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold"
                >
                  Send Reset Link
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
