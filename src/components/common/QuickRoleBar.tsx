import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Eye, Sparkles, UserCheck, ArrowRight, X } from 'lucide-react';

export const QuickRoleBar: React.FC = () => {
  const { currentUser, switchRole, setCurrentPage } = useApp();
  const [collapsed, setCollapsed] = useState(false);

  if (collapsed) {
    return (
      <button
        onClick={() => setCollapsed(false)}
        className="fixed bottom-5 left-5 z-40 px-3 py-2 rounded-xl bg-[#090f1d]/90 border border-amber-500/40 text-amber-300 text-xs font-semibold shadow-xl backdrop-blur-md flex items-center gap-2 hover:bg-slate-900 transition-all"
        title="Open Role Simulator"
      >
        <ShieldCheck className="w-4 h-4 text-amber-400" />
        <span className="capitalize">{currentUser.role} Mode</span>
      </button>
    );
  }

  return (
    <aside aria-label="Role Simulation Dock" className="fixed bottom-5 left-5 z-40 max-w-md bg-[#090f1d]/95 border border-amber-500/30 rounded-2xl p-3 shadow-2xl backdrop-blur-md text-xs text-slate-300 animate-in slide-in-from-left duration-300">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800 gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span className="font-semibold text-slate-100 uppercase tracking-wider text-[11px]">
            Live Role Simulator
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-amber-400/80 bg-amber-400/10 px-2 py-0.5 rounded-full border border-amber-400/20 font-medium">
            Active: {currentUser.role === 'leader' ? 'Team Leader' : currentUser.role === 'member' ? 'Member' : 'Viewer'}
          </span>
          <button
            onClick={() => setCollapsed(true)}
            className="p-1 text-slate-400 hover:text-slate-200 rounded hover:bg-slate-800"
            title="Minimize"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Role buttons */}
      <div className="grid grid-cols-3 gap-1.5 mt-2.5">
        <button
          onClick={() => switchRole('viewer')}
          className={`px-2.5 py-1.5 rounded-lg border text-left flex flex-col gap-0.5 transition-all ${
            currentUser.role === 'viewer'
              ? 'border-amber-400 bg-amber-500/20 text-amber-200 shadow-sm'
              : 'border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300'
          }`}
        >
          <div className="flex items-center gap-1 font-semibold text-[11px]">
            <Eye className="w-3 h-3 text-slate-400" />
            <span>Viewer</span>
          </div>
          <span className="text-[9px] text-slate-400 leading-tight">Public access</span>
        </button>

        <button
          onClick={() => switchRole('member')}
          className={`px-2.5 py-1.5 rounded-lg border text-left flex flex-col gap-0.5 transition-all ${
            currentUser.role === 'member'
              ? 'border-blue-400 bg-blue-500/20 text-blue-200 shadow-sm'
              : 'border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300'
          }`}
        >
          <div className="flex items-center gap-1 font-semibold text-[11px]">
            <UserCheck className="w-3 h-3 text-blue-400" />
            <span>Member</span>
          </div>
          <span className="text-[9px] text-slate-400 leading-tight">Tasks & Ideas</span>
        </button>

        <button
          onClick={() => switchRole('leader')}
          className={`px-2.5 py-1.5 rounded-lg border text-left flex flex-col gap-0.5 transition-all ${
            currentUser.role === 'leader'
              ? 'border-amber-400 bg-amber-500/20 text-amber-200 shadow-sm'
              : 'border-slate-800 bg-slate-900/60 hover:bg-slate-800 text-slate-300'
          }`}
        >
          <div className="flex items-center gap-1 font-semibold text-[11px]">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Leader</span>
          </div>
          <span className="text-[9px] text-slate-400 leading-tight">Full Admin</span>
        </button>
      </div>

      {currentUser.role !== 'viewer' && (
        <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between">
          <span className="text-[10px] text-slate-400 truncate max-w-[170px]">
            Logged as: {currentUser.name}
          </span>
          <button
            onClick={() => setCurrentPage('dashboard')}
            className="text-[11px] text-amber-300 hover:text-amber-200 font-medium flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20"
          >
            <span>Open Dashboard</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      )}
    </aside>
  );
};
