import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { EventItem, TaskPriority } from '../../types';
import { EventFormModal } from '../events/EventFormModal';
import { AddAchievementModal } from '../achievements/AddAchievementModal';
import { 
  ShieldCheck, 
  Calendar, 
  Users, 
  CheckSquare, 
  Trophy, 
  Plus, 
  Edit3, 
  Trash2, 
  Search, 
  Download, 
  Sparkles, 
  Check, 
  Clock 
} from 'lucide-react';

export const LeaderDashboard: React.FC = () => {
  const { 
    currentUser, 
    events, 
    deleteEvent, 
    updateEvent, 
    tasks, 
    addTask, 
    ideas, 
    updateIdeaStatus, 
    registrations, 
    toggleAttendance, 
    addToast 
  } = useApp();

  const [activeTab, setActiveTab] = useState<'events' | 'participants' | 'tasks' | 'proposals'>('events');

  // Modals
  const [isEventFormOpen, setIsEventFormOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<EventItem | null>(null);
  const [isAchievementModalOpen, setIsAchievementModalOpen] = useState(false);

  // Participant Filter
  const [selectedEventForRoster, setSelectedEventForRoster] = useState<string>(events[0]?.id || '');
  const [rosterSearch, setRosterSearch] = useState('');

  // Task Creation State
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskAssignee, setNewTaskAssignee] = useState('Aarav Sharma');
  const [newTaskPriority, setNewTaskPriority] = useState<TaskPriority>('High');
  const [newTaskDeadline, setNewTaskDeadline] = useState('April 22, 2026');
  const [newTaskProject, setNewTaskProject] = useState('HackPillai 2026');
  const [newTaskDesc, setNewTaskDesc] = useState('');

  // Metrics
  const totalRegistrations = registrations.length;
  const activeEventsCount = events.filter(e => e.status === 'upcoming').length;
  const pendingTasksCount = tasks.filter(t => t.status !== 'completed').length;
  const pendingProposalsCount = ideas.filter(i => i.status === 'Under Review').length;

  // Filter roster for selected event
  const currentEventRegistrations = registrations.filter(r => {
    const matchesEvent = !selectedEventForRoster || r.eventId === selectedEventForRoster;
    const matchesSearch = 
      r.studentName.toLowerCase().includes(rosterSearch.toLowerCase()) ||
      r.studentEmail.toLowerCase().includes(rosterSearch.toLowerCase()) ||
      r.studentCollegeId.toLowerCase().includes(rosterSearch.toLowerCase());
    return matchesEvent && matchesSearch;
  });

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim() || !newTaskDesc.trim()) return;

    addTask({
      title: newTaskTitle,
      assignedToName: newTaskAssignee,
      assignedToId: 'user-member-1',
      priority: newTaskPriority,
      deadline: newTaskDeadline,
      eventOrProject: newTaskProject,
      status: 'todo',
      description: newTaskDesc
    });

    setNewTaskTitle('');
    setNewTaskDesc('');
    addToast('success', 'Task Delegated', `Directive issued to ${newTaskAssignee}.`);
  };

  const handleExportCSV = () => {
    const activeEv = events.find(e => e.id === selectedEventForRoster);
    const headers = ['Student Name', 'Email', 'College ID', 'Department', 'Year', 'Registered Date', 'Attended'];
    const rows = currentEventRegistrations.map(r => [
      `"${r.studentName}"`,
      `"${r.studentEmail}"`,
      `"${r.studentCollegeId}"`,
      `"${r.department || ''}"`,
      `"${r.year || ''}"`,
      `"${r.registeredAt}"`,
      `"${r.attended ? 'Yes' : 'No'}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${activeEv ? activeEv.title.replace(/[^a-zA-Z0-9]/g, '_') : 'attendees'}_roster.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    addToast('success', 'Roster Exported', 'Participant list downloaded as CSV.');
  };

  const togglePublishStatus = (ev: EventItem) => {
    const newStatus = ev.status === 'upcoming' ? 'draft' : 'upcoming';
    updateEvent(ev.id, { status: newStatus });
  };

  return (
    <div className="space-y-8 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      {/* 1. Executive Banner */}
      <div className="relative rounded-3xl border border-amber-500/40 bg-gradient-to-r from-[#0c1427] via-[#101b36] to-[#0c1427] p-6 sm:p-8 shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="relative shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden p-1 bg-gradient-to-tr from-amber-300 via-amber-500 to-amber-600 shadow-xl">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 p-1 bg-amber-500 text-slate-950 rounded-full shadow-md" title="President / Team Leader">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  President & Executive Council Lead
                </span>
                <span className="text-xs text-slate-400">Pillai University</span>
              </div>
              <h1 className="font-regal text-2xl sm:text-3xl font-bold text-slate-100">
                Command Console: {currentUser.name}
              </h1>
              <p className="text-xs text-slate-400 max-w-xl">
                Supervise university conclaves, delegate tasks across core wings, examine live attendee registrations, and award official distinctions.
              </p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 shrink-0 self-center md:self-auto">
            <button
              onClick={() => { setEditingEvent(null); setIsEventFormOpen(true); }}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-950/40 hover:brightness-110 flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4 text-slate-950" />
              <span>New Conclave</span>
            </button>

            <button
              onClick={() => setIsAchievementModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-amber-300 text-xs font-semibold flex items-center gap-1.5"
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Add Achievement</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. Executive KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl border border-slate-800 bg-[#0a0f1d] space-y-1">
          <span className="text-xs text-slate-400 font-medium">Active Upcoming Conclaves</span>
          <div className="font-regal text-2xl font-bold text-amber-300">{activeEventsCount}</div>
          <span className="text-[11px] text-slate-400">{events.length} total events on record</span>
        </div>

        <div className="p-5 rounded-2xl border border-slate-800 bg-[#0a0f1d] space-y-1">
          <span className="text-xs text-slate-400 font-medium">Live Delegate RSVPs</span>
          <div className="font-regal text-2xl font-bold text-emerald-400">{totalRegistrations}</div>
          <span className="text-[11px] text-slate-400">Across all registered students</span>
        </div>

        <div className="p-5 rounded-2xl border border-slate-800 bg-[#0a0f1d] space-y-1">
          <span className="text-xs text-slate-400 font-medium">Pending Tasks Underway</span>
          <div className="font-regal text-2xl font-bold text-blue-400">{pendingTasksCount}</div>
          <span className="text-[11px] text-slate-400">Assigned across committee</span>
        </div>

        <div className="p-5 rounded-2xl border border-slate-800 bg-[#0a0f1d] space-y-1">
          <span className="text-xs text-slate-400 font-medium">Member Proposals Pending</span>
          <div className="font-regal text-2xl font-bold text-purple-400">{pendingProposalsCount}</div>
          <span className="text-[11px] text-slate-400">Awaiting executive review</span>
        </div>
      </div>

      {/* 3. Executive Tab Navigation Bar */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3 overflow-x-auto text-xs">
        <button
          onClick={() => setActiveTab('events')}
          className={`px-4 py-2 rounded-xl font-medium flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === 'events'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Manage Conclaves ({events.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('participants')}
          className={`px-4 py-2 rounded-xl font-medium flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === 'participants'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Attendee Rosters ({totalRegistrations})</span>
        </button>

        <button
          onClick={() => setActiveTab('tasks')}
          className={`px-4 py-2 rounded-xl font-medium flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === 'tasks'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <CheckSquare className="w-4 h-4" />
          <span>Task Delegation & Wings</span>
        </button>

        <button
          onClick={() => setActiveTab('proposals')}
          className={`px-4 py-2 rounded-xl font-medium flex items-center gap-2 transition-all whitespace-nowrap ${
            activeTab === 'proposals'
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Submitted Proposals ({ideas.length})</span>
        </button>
      </div>

      {/* 4. Tab 1: Event Management Console */}
      {activeTab === 'events' && (
        <div className="rounded-3xl border border-slate-800 bg-[#0a0f1d] p-6 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="font-regal text-lg font-bold text-slate-100">
                All Committee Conclaves & Programs
              </h3>
              <p className="text-xs text-slate-400">
                Publish, edit dates, revise agendas, or withdraw event listings
              </p>
            </div>

            <button
              onClick={() => { setEditingEvent(null); setIsEventFormOpen(true); }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-md shadow-amber-950/40 hover:brightness-110 flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5 text-slate-950" />
              <span>Create Conclave</span>
            </button>
          </div>

          <div className="divide-y divide-slate-800/80">
            {events.map((ev) => (
              <div key={ev.id} className="py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <img
                    src={ev.coverImage}
                    alt={ev.title}
                    className="w-20 h-14 rounded-xl object-cover border border-slate-800 shrink-0"
                  />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-amber-300">
                        {ev.category}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                        ev.status === 'upcoming' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' :
                        ev.status === 'draft' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' :
                        'bg-slate-800 text-slate-400'
                      }`}>
                        {ev.status}
                      </span>
                      <span className="text-xs text-slate-400">
                        {ev.date} • {ev.time}
                      </span>
                    </div>

                    <h4 className="font-regal text-base font-bold text-slate-100">
                      {ev.title}
                    </h4>

                    <p className="text-xs text-slate-400 truncate max-w-lg">
                      {ev.venue} • Coordinator: {ev.coordinator}
                    </p>
                  </div>
                </div>

                {/* Right: Capacity & Actions */}
                <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
                  <div className="text-right text-xs">
                    <span className="text-slate-400 block text-[11px]">RSVPs</span>
                    <span className="font-bold text-slate-200">{ev.registeredCount} / {ev.capacity}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => togglePublishStatus(ev)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                        ev.status === 'upcoming'
                          ? 'border-amber-500/40 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20'
                          : 'border-emerald-500/40 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20'
                      }`}
                    >
                      {ev.status === 'upcoming' ? 'Unpublish (Draft)' : 'Publish Live'}
                    </button>

                    <button
                      onClick={() => { setEditingEvent(ev); setIsEventFormOpen(true); }}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                      title="Edit event"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => {
                        if (window.confirm(`Delete event "${ev.title}"?`)) {
                          deleteEvent(ev.id);
                        }
                      }}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-rose-950 text-rose-300 transition-colors"
                      title="Delete event"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

      {/* 5. Tab 2: Participant & Delegate Roster */}
      {activeTab === 'participants' && (
        <div className="rounded-3xl border border-slate-800 bg-[#0a0f1d] p-6 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="font-regal text-lg font-bold text-slate-100">
                Official Delegate & Attendee Registry
              </h3>
              <p className="text-xs text-slate-400">
                Review verified student registrations, check-in arrivals, and download CSV roll sheets
              </p>
            </div>

            <button
              onClick={handleExportCSV}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Roster CSV</span>
            </button>
          </div>

          {/* Filter by event & search query */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="w-full sm:w-72">
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">Select Conclave</label>
              <select
                value={selectedEventForRoster}
                onChange={(e) => setSelectedEventForRoster(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
              >
                <option value="">All Conclaves Combined</option>
                {events.map(e => (
                  <option key={e.id} value={e.id}>{e.title}</option>
                ))}
              </select>
            </div>

            <div className="flex-1 w-full pt-4 sm:pt-0">
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">Search Student</label>
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={rosterSearch}
                  onChange={(e) => setRosterSearch(e.target.value)}
                  placeholder="Filter by name, email, or PRN..."
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-[#070b14] text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-3 font-semibold">Student Name</th>
                  <th className="p-3 font-semibold">College ID / PRN</th>
                  <th className="p-3 font-semibold">Department & Year</th>
                  <th className="p-3 font-semibold">Email</th>
                  <th className="p-3 font-semibold">Registered Date</th>
                  <th className="p-3 font-semibold text-right">Attendance Check-In</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {currentEventRegistrations.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-slate-500">
                      No registrations found for this query.
                    </td>
                  </tr>
                ) : (
                  currentEventRegistrations.map((reg) => (
                    <tr key={reg.id} className="hover:bg-slate-900/40">
                      <td className="p-3 font-semibold text-slate-100 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-[10px]">
                          {reg.studentName.charAt(0)}
                        </div>
                        <span>{reg.studentName}</span>
                      </td>
                      <td className="p-3 font-mono text-amber-300">{reg.studentCollegeId}</td>
                      <td className="p-3 text-slate-400">
                        {reg.department || 'Engineering'} • {reg.year || '3rd Year'}
                      </td>
                      <td className="p-3 text-slate-400 font-mono">{reg.studentEmail}</td>
                      <td className="p-3 text-slate-500">{reg.registeredAt}</td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => toggleAttendance(reg.id)}
                          className={`px-3 py-1 rounded-lg text-[10px] font-semibold transition-colors ${
                            reg.attended
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                          }`}
                        >
                          {reg.attended ? 'Checked In ✓' : 'Mark Present'}
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 6. Tab 3: Task Delegation Center */}
      {activeTab === 'tasks' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left 5 cols: Assign New Task */}
          <div className="lg:col-span-5 rounded-3xl border border-amber-500/30 bg-[#090f1d] p-6 space-y-4 shadow-xl">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="font-regal text-base font-bold text-slate-100">
                Delegate Committee Assignment
              </h3>
              <p className="text-xs text-slate-400">
                Issue directives to core coordinators and track delivery
              </p>
            </div>

            <form onSubmit={handleCreateTask} className="space-y-3 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Task Title *</label>
                <input
                  type="text"
                  required
                  value={newTaskTitle}
                  onChange={(e) => setNewTaskTitle(e.target.value)}
                  placeholder="e.g. Audit auditorium sound board & wireless mics"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Assignee</label>
                  <select
                    value={newTaskAssignee}
                    onChange={(e) => setNewTaskAssignee(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                  >
                    <option>Aarav Sharma (Core Member)</option>
                    <option>Priya Deshmukh (Cultural Lead)</option>
                    <option>Dev Mehta (Technical Lead)</option>
                    <option>Rohan Iyer (Operations Lead)</option>
                    <option>Ananya Nair (President)</option>
                    <option>Core Committee</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Priority</label>
                  <select
                    value={newTaskPriority}
                    onChange={(e) => setNewTaskPriority(e.target.value as TaskPriority)}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                  >
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                    <option value="Urgent">Urgent Priority</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Target Conclave / Wing</label>
                  <input
                    type="text"
                    value={newTaskProject}
                    onChange={(e) => setNewTaskProject(e.target.value)}
                    placeholder="HackPillai / Cultural Fest"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Deadline</label>
                  <input
                    type="text"
                    value={newTaskDeadline}
                    onChange={(e) => setNewTaskDeadline(e.target.value)}
                    placeholder="April 22, 2026"
                    className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-300 mb-1">Execution Brief *</label>
                <textarea
                  required
                  rows={3}
                  value={newTaskDesc}
                  onChange={(e) => setNewTaskDesc(e.target.value)}
                  placeholder="Detailed guidelines, vendor contacts, or submission links..."
                  className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-950/40 hover:brightness-110 flex items-center justify-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5 text-slate-950" />
                <span>Issue Directive</span>
              </button>
            </form>
          </div>

          {/* Right 7 cols: Tasks Roster */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-800 bg-[#0a0f1d] p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-regal text-base font-bold text-slate-100">
                Active Committee Directives ({tasks.length})
              </h3>
              <span className="text-xs text-slate-400">
                {tasks.filter(t => t.status === 'completed').length} completed
              </span>
            </div>

            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
              {tasks.map(t => (
                <div key={t.id} className="p-4 rounded-2xl bg-[#070b14] border border-slate-800 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                          t.priority === 'High' || t.priority === 'Urgent' ? 'bg-rose-500/20 text-rose-300' : 'bg-amber-500/20 text-amber-300'
                        }`}>
                          {t.priority}
                        </span>
                        <span className="text-xs font-semibold text-slate-200">{t.title}</span>
                      </div>
                      <span className="text-[11px] text-amber-400/90 block mt-0.5">
                        Assigned to: {t.assignedToName} • {t.eventOrProject}
                      </span>
                    </div>

                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold capitalize ${
                      t.status === 'completed' ? 'bg-emerald-500/20 text-emerald-300' :
                      t.status === 'in-progress' ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {t.status}
                    </span>
                  </div>

                  {t.description && (
                    <p className="text-xs text-slate-400">{t.description}</p>
                  )}

                  <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Deadline: {t.deadline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* 7. Tab 4: Submitted Event Proposals */}
      {activeTab === 'proposals' && (
        <div className="rounded-3xl border border-slate-800 bg-[#0a0f1d] p-6 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h3 className="font-regal text-lg font-bold text-slate-100">
              Student & Member Event Proposals
            </h3>
            <p className="text-xs text-slate-400">
              Review event ideas pitched by committee coordinators and student delegates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ideas.map(idea => (
              <div key={idea.id} className="p-5 rounded-2xl bg-[#070b14] border border-slate-800 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-amber-300">
                      {idea.category}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold capitalize ${
                      idea.status === 'Approved' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' :
                      idea.status === 'Scheduled' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' :
                      'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    }`}>
                      {idea.status}
                    </span>
                  </div>

                  <h4 className="font-regal text-base font-bold text-slate-100">{idea.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{idea.description}</p>

                  <div className="space-y-1 text-[11px] text-slate-400 pt-1">
                    <div>Pitched by: <span className="text-slate-200 font-medium">{idea.submittedByName}</span> ({idea.submittedByEmail}) on {idea.dateSubmitted}</div>
                    {idea.estimatedBudget && <div>Budget: <span className="text-amber-400">{idea.estimatedBudget}</span></div>}
                  </div>
                </div>

                {/* Review Decision Buttons */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-2 text-xs">
                  {idea.status === 'Under Review' ? (
                    <>
                      <button
                        onClick={() => updateIdeaStatus(idea.id, 'Scheduled')}
                        className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold"
                      >
                        Approve & Schedule
                      </button>
                    </>
                  ) : (
                    <span className="text-[11px] text-slate-500">Status: {idea.status}</span>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modals */}
      {isEventFormOpen && (
        <EventFormModal
          initialEvent={editingEvent}
          onClose={() => {
            setIsEventFormOpen(false);
            setEditingEvent(null);
          }}
        />
      )}

      {isAchievementModalOpen && (
        <AddAchievementModal
          onClose={() => setIsAchievementModalOpen(false)}
        />
      )}

    </div>
  );
};
