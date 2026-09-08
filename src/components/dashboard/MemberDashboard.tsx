import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TaskStatus, EventCategory, MemberTask } from '../../types';
import { 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  Send, 
  FileText, 
  Calendar, 
  AlertCircle 
} from 'lucide-react';

export const MemberDashboard: React.FC = () => {
  const { 
    currentUser, 
    tasks, 
    updateTaskStatus, 
    ideas, 
    submitIdea, 
    registrations, 
    events, 
    setSelectedEventId, 
    setCurrentPage 
  } = useApp();

  const [ideaTitle, setIdeaTitle] = useState('');
  const [ideaCategory, setIdeaCategory] = useState<EventCategory>('Technical');
  const [ideaBudget, setIdeaBudget] = useState('₹15,000 (Sponsorship supported)');
  const [ideaDesc, setIdeaDesc] = useState('');

  // Filter tasks assigned to current member or general
  const myTasks = tasks.filter(t => 
    t.assignedToName.toLowerCase().includes(currentUser.name.toLowerCase()) ||
    currentUser.name.toLowerCase().includes(t.assignedToName.toLowerCase()) ||
    t.assignedToName === 'Aarav Sharma' ||
    t.assignedToName === 'Core Committee'
  );

  const completedCount = myTasks.filter(t => t.status === 'completed').length;
  const pendingCount = myTasks.filter(t => t.status === 'todo').length;

  const handleIdeaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ideaTitle.trim() || !ideaDesc.trim()) return;

    submitIdea({
      title: ideaTitle,
      category: ideaCategory,
      submittedByName: currentUser.name,
      submittedByEmail: currentUser.email,
      estimatedBudget: ideaBudget,
      description: ideaDesc
    });

    setIdeaTitle('');
    setIdeaDesc('');
  };

  // Find registered events for this user
  const myRegisteredEvents = events.filter(e => 
    registrations.some(r => r.eventId === e.id && (r.studentEmail === currentUser.email || r.studentName === currentUser.name))
  );

  return (
    <div className="space-y-8 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      {/* 1. Member Profile Banner */}
      <div className="relative rounded-3xl border border-amber-500/30 bg-gradient-to-r from-[#0c1427] via-[#101b36] to-[#0c1427] p-6 sm:p-8 shadow-2xl overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center gap-6 relative z-10">
          <div className="relative shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-amber-400 to-amber-600 shadow-xl">
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="w-full h-full object-cover rounded-[14px]"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 p-1 bg-emerald-500 text-slate-950 rounded-full shadow-md" title="Active Duty">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="space-y-1.5 text-center sm:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/40">
                Core Committee Member
              </span>
              <span className="px-2.5 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300">
                {currentUser.department || 'Computer Engineering'}
              </span>
              <span className="text-xs text-amber-400 font-semibold">
                ID: PCE-TAPAS-2024-042
              </span>
            </div>

            <h1 className="font-regal text-2xl sm:text-3xl font-bold text-slate-100">
              Welcome back, {currentUser.name}
            </h1>

            <p className="text-xs text-slate-400 max-w-xl">
              Assigned Wing: <span className="text-slate-200 font-medium">Cultural & Technical Affairs</span>. Track your on-ground event duties, submit new symposium proposals, and synchronize with team leaders.
            </p>
          </div>

          <div className="text-center sm:text-right p-4 rounded-2xl bg-[#070b14]/80 border border-slate-800 shrink-0">
            <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Committee Standing</span>
            <span className="font-regal text-xl font-bold text-amber-300">Active • Tier IV</span>
            <span className="text-[10px] text-emerald-400 block mt-0.5">100% Meeting Attendance</span>
          </div>
        </div>
      </div>

      {/* 2. Quick Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl border border-slate-800 bg-[#0a0f1d] space-y-1">
          <span className="text-xs text-slate-400 font-medium">Total Tasks Assigned</span>
          <div className="font-regal text-2xl font-bold text-slate-100">{myTasks.length}</div>
          <span className="text-[11px] text-amber-400/80">{pendingCount} pending review</span>
        </div>

        <div className="p-5 rounded-2xl border border-slate-800 bg-[#0a0f1d] space-y-1">
          <span className="text-xs text-slate-400 font-medium">Completed Duties</span>
          <div className="font-regal text-2xl font-bold text-emerald-400">{completedCount}</div>
          <span className="text-[11px] text-slate-400">Verified by Wing Lead</span>
        </div>

        <div className="p-5 rounded-2xl border border-slate-800 bg-[#0a0f1d] space-y-1">
          <span className="text-xs text-slate-400 font-medium">Proposals Pitched</span>
          <div className="font-regal text-2xl font-bold text-amber-300">{ideas.length}</div>
          <span className="text-[11px] text-slate-400">Review queue active</span>
        </div>

        <div className="p-5 rounded-2xl border border-slate-800 bg-[#0a0f1d] space-y-1">
          <span className="text-xs text-slate-400 font-medium">My Delegate Passes</span>
          <div className="font-regal text-2xl font-bold text-blue-400">{myRegisteredEvents.length}</div>
          <span className="text-[11px] text-slate-400">Active registrations</span>
        </div>
      </div>

      {/* 3. Main Dashboard Body: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left 7 Columns: Assigned Tasks */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-3xl border border-slate-800 bg-[#0a0f1d] p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-regal text-base font-bold text-slate-100">
                    My Assigned Committee Tasks
                  </h3>
                  <p className="text-xs text-slate-400">
                    Update task progress to keep executive leads synchronized
                  </p>
                </div>
              </div>
              <span className="text-xs text-slate-400 font-mono">
                {completedCount}/{myTasks.length} Done
              </span>
            </div>

            {myTasks.length === 0 ? (
              <p className="text-xs text-slate-500 py-6 text-center">No current duties assigned to your docket.</p>
            ) : (
              <div className="space-y-3">
                {myTasks.map((task) => {
                  const isDone = task.status === 'completed';
                  const inProg = task.status === 'in-progress';

                  return (
                    <div
                      key={task.id}
                      className={`p-4 rounded-2xl border transition-all space-y-2.5 ${
                        isDone
                          ? 'border-emerald-500/20 bg-emerald-950/10 opacity-75'
                          : inProg
                          ? 'border-amber-500/30 bg-[#0e172a]'
                          : 'border-slate-800 bg-slate-900/50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                              task.priority === 'High' || task.priority === 'Urgent' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' :
                              task.priority === 'Medium' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                              'bg-slate-800 text-slate-400'
                            }`}>
                              {task.priority} Priority
                            </span>
                            <span className="text-[11px] text-slate-400">
                              {task.eventOrProject}
                            </span>
                          </div>

                          <h4 className={`text-xs sm:text-sm font-semibold ${
                            isDone ? 'line-through text-slate-400' : 'text-slate-200'
                          }`}>
                            {task.title}
                          </h4>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-[11px] text-amber-400 font-medium flex items-center gap-1 justify-end">
                            <Clock className="w-3 h-3" /> {task.deadline}
                          </span>
                        </div>
                      </div>

                      {task.description && (
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {task.description}
                        </p>
                      )}

                      {/* Status toggle actions */}
                      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                        <span className="text-[11px] text-slate-500">
                          Assigned: {task.assignedToName}
                        </span>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => updateTaskStatus(task.id, 'todo')}
                            className={`px-2.5 py-1 rounded-lg text-[10px] font-medium transition-colors ${
                              task.status === 'todo'
                                ? 'bg-slate-700 text-slate-200 font-bold'
                                : 'text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            To Do
                          </button>
                          <button
                            onClick={() => updateTaskStatus(task.id, 'in-progress')}
                            className={`px-2.5 py-1 rounded-lg text-[10px] font-medium transition-colors ${
                              task.status === 'in-progress'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                                : 'text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            In Progress
                          </button>
                          <button
                            onClick={() => updateTaskStatus(task.id, 'completed')}
                            className={`px-2.5 py-1 rounded-lg text-[10px] font-medium transition-colors ${
                              task.status === 'completed'
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold'
                                : 'text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            Completed ✓
                          </button>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* My Registered Passes Section */}
          <div className="rounded-3xl border border-slate-800 bg-[#0a0f1d] p-6 space-y-4">
            <h3 className="font-regal text-base font-bold text-slate-100 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>My Conclave Delegate Badges</span>
            </h3>

            {myRegisteredEvents.length === 0 ? (
              <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 text-center space-y-2">
                <p className="text-xs text-slate-400">You have not registered for any upcoming student conclaves yet.</p>
                <button
                  onClick={() => setCurrentPage('events')}
                  className="text-xs text-amber-400 hover:text-amber-300 font-semibold"
                >
                  Browse open event conclaves →
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {myRegisteredEvents.map(ev => (
                  <div 
                    key={ev.id}
                    onClick={() => setSelectedEventId(ev.id)}
                    className="p-3.5 rounded-2xl bg-[#070b14] border border-slate-800 hover:border-amber-500/40 cursor-pointer transition-all space-y-2"
                  >
                    <div className="flex items-center justify-between text-[11px] text-amber-400">
                      <span>{ev.date}</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">Confirmed Pass</span>
                    </div>
                    <h4 className="font-regal text-sm font-bold text-slate-100 line-clamp-1">{ev.title}</h4>
                    <p className="text-[11px] text-slate-400 truncate">{ev.venue}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Right 5 Columns: Submit Event Proposal + Announcements */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Submit Event Idea Form */}
          <div className="rounded-3xl border border-amber-500/30 bg-[#090f1d] p-6 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-regal text-base font-bold text-slate-100">
                  Pitch New Event Proposal
                </h3>
                <p className="text-xs text-slate-400">
                  Submissions are reviewed in weekly committee council
                </p>
              </div>
            </div>

            <form onSubmit={handleIdeaSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                  Proposed Event Title *
                </label>
                <input
                  type="text"
                  required
                  value={ideaTitle}
                  onChange={(e) => setIdeaTitle(e.target.value)}
                  placeholder="e.g. NextGen Web3 & AI Builders Conclave"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Category</label>
                  <select
                    value={ideaCategory}
                    onChange={(e) => setIdeaCategory(e.target.value as EventCategory)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                  >
                    <option value="Technical">Technical</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Social">Social</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Competition">Competition</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Est. Budget</label>
                  <input
                    type="text"
                    value={ideaBudget}
                    onChange={(e) => setIdeaBudget(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Description & Key Highlights *</label>
                <textarea
                  required
                  rows={3}
                  value={ideaDesc}
                  onChange={(e) => setIdeaDesc(e.target.value)}
                  placeholder="Outline purpose, chief guest ideas, venue requirements, and expected impact..."
                  className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-950/40 hover:brightness-110 flex items-center justify-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5 text-slate-950" />
                <span>Submit to Executive Review Queue</span>
              </button>
            </form>

            {/* Previously pitched list */}
            {ideas.length > 0 && (
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Previously Submitted Proposals ({ideas.length})
                </span>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {ideas.map(idea => (
                    <div key={idea.id} className="p-2.5 rounded-xl bg-[#070b14] border border-slate-800 text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-200 truncate max-w-[170px]">{idea.title}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 capitalize">{idea.status}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{idea.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Internal Council Circulars */}
          <div className="rounded-3xl border border-slate-800 bg-[#0a0f1d] p-6 space-y-4">
            <h3 className="font-regal text-base font-bold text-slate-100 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span>Council Notice Board</span>
            </h3>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between text-[11px] text-amber-400 font-semibold">
                  <span>General Body Meeting</span>
                  <span>April 18, 5:00 PM</span>
                </div>
                <p className="text-slate-300 font-medium">Seminar Hall 401 — Mandatory attendance for all junior coordinators.</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between text-[11px] text-blue-400 font-semibold">
                  <span>HackPillai Logistics Review</span>
                  <span>April 20, 2:30 PM</span>
                </div>
                <p className="text-slate-300 font-medium">WiFi load testing and power backup inspection with IT infrastructure team.</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
