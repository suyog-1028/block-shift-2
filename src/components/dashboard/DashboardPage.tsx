import React from 'react';
import { useApp } from '../../context/AppContext';
import { MemberDashboard } from './MemberDashboard';
import { LeaderDashboard } from './LeaderDashboard';
import { ShieldCheck, UserCheck, Lock, Sparkles, ArrowRight } from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { currentUser, loginAs, setCurrentPage } = useApp();

  if (currentUser.role === 'leader') {
    return <LeaderDashboard />;
  }

  if (currentUser.role === 'member') {
    return <MemberDashboard />;
  }

  // Viewer role landing on Dashboard
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-8">
      <div className="w-16 h-16 rounded-3xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto shadow-xl">
        <Lock className="w-8 h-8" />
      </div>

      <div className="space-y-3 max-w-xl mx-auto">
        <h2 className="font-regal text-3xl font-bold text-slate-100">
          Council Dashboard Restricted
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          You are currently visiting as a <span className="text-slate-200 font-semibold">Public Delegate / Viewer</span>. The interactive dashboards are configured for inducted committee members and executive council leads.
        </p>
      </div>

      {/* Quick Access Card options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
        <div 
          onClick={() => loginAs('member', 'aarav.sharma@pillai.edu')}
          className="p-6 rounded-3xl border border-slate-800 bg-[#0a0f1d] hover:border-blue-500/40 hover:bg-[#0e172a] transition-all cursor-pointer space-y-3 group"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center">
              <UserCheck className="w-5 h-5" />
            </div>
            <span className="text-xs text-blue-400 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
              Enter →
            </span>
          </div>
          <h3 className="font-regal text-lg font-bold text-slate-100">
            Committee Member
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Test as Aarav Sharma: update assigned tasks, pitch event proposals, and view member announcements.
          </p>
        </div>

        <div 
          onClick={() => loginAs('leader', 'ananya.nair@pillai.edu')}
          className="p-6 rounded-3xl border border-amber-500/30 bg-[#0d1629] hover:border-amber-400 transition-all cursor-pointer space-y-3 group shadow-xl"
        >
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-xs text-amber-300 font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
              Enter →
            </span>
          </div>
          <h3 className="font-regal text-lg font-bold text-slate-100">
            Executive Team Leader
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Test as President Ananya Nair: create and edit conclaves, export attendee CSV rosters, and delegate tasks.
          </p>
        </div>
      </div>

      <div className="pt-4">
        <button
          onClick={() => setCurrentPage('login')}
          className="text-xs text-slate-400 hover:text-slate-200 underline underline-offset-4"
        >
          Or view full custom authentication screen →
        </button>
      </div>
    </div>
  );
};
