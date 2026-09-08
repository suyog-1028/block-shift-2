import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { EventItem, EventCategory, EventStatus, EventAgendaItem } from '../../types';
import { X, Sparkles, Plus, Trash2, Image as ImageIcon, Save, Send } from 'lucide-react';

interface EventFormModalProps {
  initialEvent?: EventItem | null;
  onClose: () => void;
}

const PRESET_IMAGES = [
  { label: 'Technology / Hackathon', url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1000&auto=format&fit=crop&q=80' },
  { label: 'Auditorium Conclave', url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&auto=format&fit=crop&q=80' },
  { label: 'Acoustic / Cultural Stage', url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1000&auto=format&fit=crop&q=80' },
  { label: 'Robotics & Masterclass', url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&auto=format&fit=crop&q=80' },
  { label: 'Community & Social Drive', url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1000&auto=format&fit=crop&q=80' },
  { label: 'Leadership Colloquium', url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1000&auto=format&fit=crop&q=80' }
];

export const EventFormModal: React.FC<EventFormModalProps> = ({ initialEvent, onClose }) => {
  const { currentUser, createEvent, updateEvent, addToast } = useApp();

  const [title, setTitle] = useState(initialEvent?.title || '');
  const [category, setCategory] = useState<EventCategory>(initialEvent?.category || 'Technical');
  const [status, setStatus] = useState<EventStatus>(initialEvent?.status || 'upcoming');
  const [date, setDate] = useState(initialEvent?.date || 'April 25, 2026');
  const [time, setTime] = useState(initialEvent?.time || '10:00 AM – 4:00 PM IST');
  const [venue, setVenue] = useState(initialEvent?.venue || 'Dr. K. M. Vasudevan Pillai Auditorium, New Panvel');
  const [coverImage, setCoverImage] = useState(initialEvent?.coverImage || PRESET_IMAGES[0].url);
  const [description, setDescription] = useState(initialEvent?.description || '');
  const [fullDetails, setFullDetails] = useState(initialEvent?.fullDetails || '');
  const [coordinator, setCoordinator] = useState(initialEvent?.coordinator || currentUser.name);
  const [coordinatorContact, setCoordinatorContact] = useState(initialEvent?.coordinatorContact || 'tapas@pillai.edu');
  const [registrationLink, setRegistrationLink] = useState(initialEvent?.registrationLink || 'https://tapas-pillai.org/register/event');
  const [capacity, setCapacity] = useState<number>(initialEvent?.capacity || 200);
  const [perksText, setPerksText] = useState<string>(initialEvent?.perks ? initialEvent.perks.join(', ') : 'Certificate of Participation, Delegate Badge, Refreshments');
  const [agenda, setAgenda] = useState<EventAgendaItem[]>(
    initialEvent?.agenda || [
      { time: '10:00 AM', title: 'Inauguration & Keynote Address', speakerOrLead: 'Faculty Advisor' },
      { time: '11:30 AM', title: 'Core Challenge & Sprint Session', speakerOrLead: 'Track Leads' },
      { time: '03:30 PM', title: 'Valedictory & Awards Distribution', speakerOrLead: 'Executive Council' }
    ]
  );

  const handleAddAgendaItem = () => {
    setAgenda([...agenda, { time: '01:00 PM', title: 'Interactive Segment', speakerOrLead: '' }]);
  };

  const handleUpdateAgendaItem = (index: number, field: keyof EventAgendaItem, val: string) => {
    const updated = [...agenda];
    updated[index] = { ...updated[index], [field]: val };
    setAgenda(updated);
  };

  const handleRemoveAgendaItem = (index: number) => {
    setAgenda(agenda.filter((_, i) => i !== index));
  };

  const handleSubmit = (finalStatus: EventStatus) => {
    if (!title.trim() || !venue.trim() || !description.trim()) {
      addToast('error', 'Missing Information', 'Please provide a title, venue, and description for the event.');
      return;
    }

    const parsedPerks = perksText.split(',').map(s => s.trim()).filter(Boolean);

    const eventPayload = {
      title,
      category,
      status: finalStatus,
      date,
      time,
      venue,
      coverImage,
      description,
      fullDetails: fullDetails || description,
      coordinator,
      coordinatorContact,
      registrationLink,
      capacity: Number(capacity) || 100,
      agenda,
      perks: parsedPerks,
      isFeatured: false
    };

    if (initialEvent) {
      updateEvent(initialEvent.id, eventPayload);
    } else {
      createEvent(eventPayload);
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#090f1d] border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-[#070b14]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-regal text-lg font-bold text-slate-100">
                {initialEvent ? 'Edit Event Details' : 'Create New Conclave or Event'}
              </h3>
              <p className="text-xs text-amber-400/80">
                Authoring as {currentUser.name} ({currentUser.role === 'leader' ? 'Team Leader' : 'Core Member'})
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form */}
        <div className="p-6 overflow-y-auto flex-1 text-sm text-slate-300 space-y-5">
          
          {/* Title & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-300 mb-1">Event Title *</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. INNOVENTURE: National Student Pitch Conclave"
                className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as EventCategory)}
                className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
              >
                <option value="Technical">Technical</option>
                <option value="Cultural">Cultural</option>
                <option value="Social">Social</option>
                <option value="Workshop">Workshop</option>
                <option value="Competition">Competition</option>
              </select>
            </div>
          </div>

          {/* Date, Time & Venue */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Date</label>
              <input
                type="text"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="e.g. April 20, 2026"
                className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Timing</label>
              <input
                type="text"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                placeholder="e.g. 10:00 AM – 5:00 PM"
                className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Capacity (Max Delegates)</label>
              <input
                type="number"
                value={capacity}
                onChange={(e) => setCapacity(Number(e.target.value))}
                min={10}
                max={2000}
                className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          {/* Venue & Link */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Venue *</label>
              <input
                type="text"
                required
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                placeholder="Dr. K. M. Vasudevan Pillai Auditorium / Quadrangle"
                className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Registration Link / Portal URL</label>
              <input
                type="text"
                value={registrationLink}
                onChange={(e) => setRegistrationLink(e.target.value)}
                placeholder="https://tapas-pillai.org/register/..."
                className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          {/* Cover Image Selector */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-semibold text-slate-300">Cover Image URL</label>
              <span className="text-[11px] text-amber-400">Click a preset below or paste custom URL</span>
            </div>
            <div className="flex gap-2">
              <input
                type="url"
                value={coverImage}
                onChange={(e) => setCoverImage(e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className="flex-1 px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {PRESET_IMAGES.map((preset, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCoverImage(preset.url)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] border transition-colors flex items-center gap-1 ${
                    coverImage === preset.url
                      ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-semibold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <ImageIcon className="w-3 h-3 text-amber-400" />
                  <span>{preset.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Description & Full Details */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Short Description (for card) *</label>
            <textarea
              required
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="A concise summary highlighting the event goals, target audience, and scale..."
              className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Comprehensive Details & Schedule Notes</label>
            <textarea
              rows={3}
              value={fullDetails}
              onChange={(e) => setFullDetails(e.target.value)}
              placeholder="In-depth explanation of rounds, prerequisites, judging criteria, and mentors..."
              className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Coordinator details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Coordinator Name & Wing</label>
              <input
                type="text"
                value={coordinator}
                onChange={(e) => setCoordinator(e.target.value)}
                placeholder="e.g. Dev Mehta (Technical Wing Lead)"
                className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Contact Email / Helpline</label>
              <input
                type="text"
                value={coordinatorContact}
                onChange={(e) => setCoordinatorContact(e.target.value)}
                placeholder="e.g. tapas.tech@pillai.edu | +91 98201 00000"
                className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          {/* Perks */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Delegate Perks (comma-separated)</label>
            <input
              type="text"
              value={perksText}
              onChange={(e) => setPerksText(e.target.value)}
              placeholder="Certificate of Excellence, Lunch Box, Goodie Bag, Cash Prizes"
              className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Dynamic Agenda Builder */}
          <div className="space-y-3 pt-2 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-semibold text-slate-200">
                Agenda & Itinerary Timings ({agenda.length} items)
              </label>
              <button
                type="button"
                onClick={handleAddAgendaItem}
                className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1 font-medium"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Agenda Slot</span>
              </button>
            </div>

            <div className="space-y-2">
              {agenda.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-[#070b14] border border-slate-800">
                  <input
                    type="text"
                    value={item.time}
                    onChange={(e) => handleUpdateAgendaItem(idx, 'time', e.target.value)}
                    placeholder="10:00 AM"
                    className="w-24 px-2 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-amber-300"
                  />
                  <input
                    type="text"
                    value={item.title}
                    onChange={(e) => handleUpdateAgendaItem(idx, 'title', e.target.value)}
                    placeholder="Session Title"
                    className="flex-1 px-2 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-slate-200"
                  />
                  <input
                    type="text"
                    value={item.speakerOrLead || ''}
                    onChange={(e) => handleUpdateAgendaItem(idx, 'speakerOrLead', e.target.value)}
                    placeholder="Speaker / Lead"
                    className="w-32 px-2 py-1 text-xs rounded bg-slate-900 border border-slate-700 text-slate-400"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveAgendaItem(idx)}
                    className="p-1 text-slate-500 hover:text-rose-400"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="p-4 border-t border-slate-800 bg-[#070b14] flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-medium"
          >
            Cancel
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleSubmit('draft')}
              className="px-4 py-2 rounded-xl border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-semibold flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save as Draft</span>
            </button>

            <button
              type="button"
              onClick={() => handleSubmit('upcoming')}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-950/40 hover:brightness-110 flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5 text-slate-950" />
              <span>{initialEvent ? 'Publish Updates' : 'Publish Conclave'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
