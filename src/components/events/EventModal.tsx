import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { EventItem } from '../../types';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  Ticket, 
  Share2, 
  Edit3, 
  Trash2, 
  Check,
  ExternalLink 
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface EventModalProps {
  event: EventItem;
  onClose: () => void;
  onEdit?: (event: EventItem) => void;
}

export const EventModal: React.FC<EventModalProps> = ({ event, onClose, onEdit }) => {
  const { currentUser, registerForEvent, deleteEvent, addToast } = useApp();
  
  const [showRegForm, setShowRegForm] = useState(false);
  const [regSuccess, setRegSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: currentUser.role !== 'viewer' ? currentUser.name : '',
    email: currentUser.role !== 'viewer' ? currentUser.email : '',
    collegeId: 'PCE-2024-CS-101',
    department: 'Computer Engineering',
    year: 'TE (3rd Year)'
  });

  const percentFilled = Math.min(100, Math.round((event.registeredCount / event.capacity) * 100));
  const isFull = event.registeredCount >= event.capacity;
  const canManage = currentUser.role === 'leader' || currentUser.role === 'member';

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const success = registerForEvent(event.id, {
      name: formData.name,
      email: formData.email,
      collegeId: formData.collegeId,
      department: formData.department,
      year: formData.year
    });

    if (success) {
      setRegSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {
        // ignore
      }
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      addToast('info', 'Link Copied', 'Event link copied to clipboard.');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${event.title}"?`)) {
      deleteEvent(event.id);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#090f1d] border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="relative h-56 sm:h-72 w-full bg-slate-900 shrink-0">
          <img
            src={event.coverImage}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090f1d] via-[#090f1d]/40 to-black/60" />

          {/* Top Actions */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/80 text-amber-300 border border-amber-500/40 backdrop-blur-md">
                {event.category}
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold backdrop-blur-md ${
                event.status === 'upcoming' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' :
                event.status === 'draft' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' :
                'bg-slate-700/80 text-slate-300'
              }`}>
                {event.status === 'upcoming' ? 'Upcoming Conclave' : event.status === 'draft' ? 'Draft Mode' : 'Completed Event'}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 rounded-xl bg-black/60 border border-slate-700 text-slate-200 hover:text-amber-300 hover:bg-slate-900 transition-colors"
                title="Share event link"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              </button>

              {canManage && onEdit && (
                <button
                  onClick={() => { onClose(); onEdit(event); }}
                  className="p-2 rounded-xl bg-black/60 border border-slate-700 text-slate-200 hover:text-amber-300 hover:bg-slate-900 transition-colors"
                  title="Edit event"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
              )}

              {currentUser.role === 'leader' && (
                <button
                  onClick={handleDelete}
                  className="p-2 rounded-xl bg-black/60 border border-rose-900/50 text-rose-300 hover:bg-rose-950 transition-colors"
                  title="Delete event"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-black/60 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-900 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Event Title on Image */}
          <div className="absolute bottom-4 left-4 right-4 space-y-1">
            <h2 className="font-regal text-xl sm:text-2xl lg:text-3xl font-bold text-slate-100 drop-shadow-md">
              {event.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                <Calendar className="w-3.5 h-3.5" /> {event.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> {event.time}
              </span>
            </div>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-6 overflow-y-auto flex-1 text-sm text-slate-300 space-y-6">
          
          {/* Quick Metrics & Venue Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-[#0e1629] border border-slate-800 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-200 block">Campus Venue</span>
                <span className="text-slate-400 leading-relaxed">{event.venue}</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Users className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-200">Registered Delegates</span>
                  <span className="text-amber-300 font-bold">{event.registeredCount} / {event.capacity}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-800 mt-1.5 overflow-hidden">
                  <div 
                    className="h-full bg-amber-400 rounded-full"
                    style={{ width: `${percentFilled}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="font-regal text-base font-bold text-slate-100">About This Conclave</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {event.fullDetails || event.description}
            </p>
          </div>

          {/* Perks / Inclusions */}
          {event.perks && event.perks.length > 0 && (
            <div className="space-y-2.5">
              <h3 className="font-regal text-sm font-bold text-slate-100 uppercase tracking-wider text-amber-400">
                Delegate Inclusions & Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {event.perks.map((perk, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{perk}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Agenda & Timeline */}
          {event.agenda && event.agenda.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-regal text-base font-bold text-slate-100">Conclave Agenda & Itinerary</h3>
              <div className="space-y-2 border-l-2 border-amber-500/30 pl-4">
                {event.agenda.map((item, idx) => (
                  <div key={idx} className="relative space-y-0.5">
                    <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber-400" />
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-semibold text-amber-300">{item.time}</span>
                      <span className="text-slate-200 font-medium">— {item.title}</span>
                    </div>
                    {item.speakerOrLead && (
                      <p className="text-[11px] text-slate-400">Led by: {item.speakerOrLead}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Coordinator contact */}
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 flex items-center justify-between text-xs">
            <div>
              <span className="text-slate-400 block text-[11px]">Event Coordinator</span>
              <span className="text-slate-200 font-semibold">{event.coordinator}</span>
              {event.coordinatorContact && (
                <span className="text-slate-400 block text-[11px] mt-0.5">{event.coordinatorContact}</span>
              )}
            </div>
            <a 
              href={`mailto:tapas.council@pillai.edu?subject=Inquiry: ${encodeURIComponent(event.title)}`}
              className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3 h-3 text-amber-400" />
              <span>Contact Lead</span>
            </a>
          </div>

          {/* Registration Section */}
          {event.status === 'upcoming' && (
            <div className="pt-2 border-t border-slate-800 space-y-4">
              {regSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Ticket className="w-6 h-6" />
                  </div>
                  <h4 className="font-regal text-lg font-bold text-slate-100">
                    Registration Confirmed!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Your student pass for <span className="text-amber-300 font-semibold">{event.title}</span> has been confirmed. Please display your Pillai University ID card at the auditorium entrance.
                  </p>
                  <button
                    onClick={() => setShowRegForm(false)}
                    className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                  >
                    Close Registration View
                  </button>
                </div>
              ) : showRegForm ? (
                <form onSubmit={handleRegister} className="p-5 rounded-2xl bg-[#0c1427] border border-amber-500/30 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <h4 className="font-regal text-sm font-bold text-slate-100">
                      Reserve Your Delegate Seat
                    </h4>
                    <button
                      type="button"
                      onClick={() => setShowRegForm(false)}
                      className="text-xs text-slate-400 hover:text-slate-200"
                    >
                      Cancel
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">Student Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs rounded-lg bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">University Email ID *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs rounded-lg bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">Roll / PRN *</label>
                      <input
                        type="text"
                        required
                        value={formData.collegeId}
                        onChange={(e) => setFormData({ ...formData, collegeId: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs rounded-lg bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">Department</label>
                      <input
                        type="text"
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs rounded-lg bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">Year of Study</label>
                      <select
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        className="w-full px-3 py-1.5 text-xs rounded-lg bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
                      >
                        <option>FE (1st Year)</option>
                        <option>SE (2nd Year)</option>
                        <option>TE (3rd Year)</option>
                        <option>BE (Final Year)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      disabled={isFull}
                      className="px-6 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-950/40 hover:brightness-110 transition-all flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Confirm Free Delegate Registration</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                  <div className="space-y-0.5 text-left">
                    <span className="font-regal text-sm font-bold text-slate-100">
                      Attend as an Official Student Delegate
                    </span>
                    <p className="text-xs text-slate-400">
                      Complimentary for enrolled Pillai University students & Heartfulness participants.
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0 flex-wrap">
                    {event.registrationLink && (
                      <a
                        href={event.registrationLink}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2.5 rounded-xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-semibold text-xs transition-all flex items-center gap-1.5"
                      >
                        <span>Official Google Form</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <button
                      onClick={() => setShowRegForm(true)}
                      disabled={isFull}
                      className={`px-6 py-2.5 rounded-xl font-bold text-xs transition-all ${
                        isFull
                          ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                          : 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-950/40'
                      }`}
                    >
                      {isFull ? 'Capacity Reached' : 'Instant Campus RSVP'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-[#070b14] flex items-center justify-between text-xs text-slate-400">
          <span>Hosted by TAPAS Committee • Pillai University</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-slate-700 hover:bg-slate-800 text-slate-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
