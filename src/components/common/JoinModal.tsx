import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Sparkles, X, CheckCircle, Send, ShieldCheck, HeartHandshake } from 'lucide-react';
import confetti from 'canvas-confetti';

export const JoinModal: React.FC = () => {
  const { isJoinModalOpen, setIsJoinModalOpen, addToast } = useApp();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    collegeId: '',
    department: 'Computer Engineering',
    year: 'SE (2nd Year)',
    wingPreference: 'Technical',
    socialOrPortfolio: '',
    statementOfPurpose: ''
  });

  const [submittedAppId, setSubmittedAppId] = useState<string | null>(null);

  if (!isJoinModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.collegeId.trim()) {
      addToast('error', 'Incomplete Application', 'Please fill in all mandatory applicant details.');
      return;
    }

    const appId = 'TAPAS-2026-' + Math.floor(1000 + Math.random() * 9000);
    setSubmittedAppId(appId);

    // Fire celebratory confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    addToast('success', 'Application Lodged!', `Your application ${appId} has been submitted to the Executive Screening Board.`);
  };

  const handleClose = () => {
    setIsJoinModalOpen(false);
    setSubmittedAppId(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#090f1d] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-[#070b14]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-700 p-[1.5px] flex items-center justify-center">
              <div className="w-full h-full rounded-[10px] bg-[#0a0f1d] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-300" />
              </div>
            </div>
            <div>
              <h3 className="font-regal text-lg font-bold text-slate-100">
                Join TAPAS Committee
              </h3>
              <p className="text-xs text-amber-400/90">
                Official Student Council Recruitment • Pillai University 2026–27
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 text-sm text-slate-300">
          {submittedAppId ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle className="w-9 h-9" />
              </div>
              <div className="space-y-2">
                <h4 className="font-regal text-xl font-bold text-slate-100">
                  Application Received with Distinction!
                </h4>
                <p className="text-slate-400 max-w-md mx-auto text-xs leading-relaxed">
                  Thank you, <span className="text-amber-300 font-semibold">{formData.fullName}</span>. Your candidacy has been logged under application reference:
                </p>
                <div className="inline-block px-4 py-2 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono font-bold tracking-widest text-base">
                  {submittedAppId}
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 max-w-md mx-auto text-left space-y-2 text-xs">
                <div className="font-semibold text-slate-300 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400" /> Next Selection Milestones:
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  <li>Portfolio & Statement Review by Team Leads: March 20–25</li>
                  <li>In-Person Personal Interview at Dr. K. M. Vasudevan Pillai Campus</li>
                  <li>Orientation & Task Delegation Announcement</li>
                </ul>
              </div>

              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-950/40 hover:brightness-110 transition-all"
              >
                Done & Return to Site
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed flex items-start gap-2.5">
                <HeartHandshake className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  TAPAS is looking for driven individuals passionate about elevating student life, curating high-impact conclaves, and fostering leadership at Pillai University. Open to all faculties, schools, and academic years.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Siddharth Deshmukh"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#070b14] border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">University Email ID *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="siddharth.d@pillai.edu"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#070b14] border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">University PRN / Roll *</label>
                  <input
                    type="text"
                    required
                    value={formData.collegeId}
                    onChange={(e) => setFormData({ ...formData, collegeId: e.target.value })}
                    placeholder="PU-2024-CS-085"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#070b14] border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Department</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                  >
                    <option>Computer Engineering</option>
                    <option>Information Technology</option>
                    <option>Electronics & Telecomm (EXTC)</option>
                    <option>Mechanical Engineering</option>
                    <option>Automobile Engineering</option>
                    <option>AI & Data Science</option>
                    <option>Civil Engineering</option>
                    <option>Arts, Commerce & Science</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Current Year</label>
                  <select
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                  >
                    <option>FE (1st Year)</option>
                    <option>SE (2nd Year)</option>
                    <option>TE (3rd Year)</option>
                    <option>BE (Final Year)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Preferred Committee Wing</label>
                  <select
                    value={formData.wingPreference}
                    onChange={(e) => setFormData({ ...formData, wingPreference: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                  >
                    <option value="Technical">Technical & Web Architecture</option>
                    <option value="Cultural & Arts">Cultural, Dance & Music</option>
                    <option value="Operations">Operations & Venue Logistics</option>
                    <option value="Creative & Media">Creative, Graphic Design & Video</option>
                    <option value="Public Relations">PR, Corporate Sponsorship & Media</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Portfolio / LinkedIn / GitHub URL</label>
                  <input
                    type="url"
                    value={formData.socialOrPortfolio}
                    onChange={(e) => setFormData({ ...formData, socialOrPortfolio: e.target.value })}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#070b14] border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Statement of Purpose & Contributions *
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.statementOfPurpose}
                  onChange={(e) => setFormData({ ...formData, statementOfPurpose: e.target.value })}
                  placeholder="Share your prior experiences, skills you bring, and what excites you about contributing to TAPAS Committee..."
                  className="w-full px-3 py-2 text-xs rounded-lg bg-[#070b14] border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:brightness-110 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-amber-950/40"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Candidate Dossier</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
