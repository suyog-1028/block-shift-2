import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { EventItem, EventCategory, EventStatus } from '../../types';
import { EventModal } from './EventModal';
import { EventFormModal } from './EventFormModal';
import { 
  Calendar, 
  Search, 
  Filter, 
  Plus, 
  Clock, 
  MapPin, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  Tag, 
  ArrowUpRight 
} from 'lucide-react';

export const EventsPage: React.FC = () => {
  const { events, currentUser, selectedEventId, setSelectedEventId } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<EventItem | null>(null);

  const canCreate = currentUser.role === 'leader' || currentUser.role === 'member';

  const categories: { label: string; value: string }[] = [
    { label: 'All Categories', value: 'all' },
    { label: 'Technical', value: 'Technical' },
    { label: 'Cultural', value: 'Cultural' },
    { label: 'Social', value: 'Social' },
    { label: 'Workshop', value: 'Workshop' },
    { label: 'Competition', value: 'Competition' }
  ];

  const statuses = [
    { label: 'All Statuses', value: 'all' },
    { label: 'Upcoming', value: 'upcoming' },
    { label: 'Completed', value: 'completed' },
    ...(canCreate ? [{ label: 'Drafts', value: 'draft' }] : [])
  ];

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      // Don't show drafts to viewers unless author
      if (event.status === 'draft' && currentUser.role === 'viewer') {
        return false;
      }

      // Search match
      const matchesSearch = 
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.venue.toLowerCase().includes(searchQuery.toLowerCase());

      // Category match
      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;

      // Status match
      const matchesStatus = selectedStatus === 'all' || event.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [events, searchQuery, selectedCategory, selectedStatus, currentUser.role]);

  // Find currently opened event modal
  const activeEvent = useMemo(() => {
    if (!selectedEventId) return null;
    return events.find(e => e.id === selectedEventId) || null;
  }, [selectedEventId, events]);

  const handleOpenCreate = () => {
    setEditingEvent(null);
    setIsFormOpen(true);
  };

  const handleOpenEdit = (ev: EventItem) => {
    setEditingEvent(ev);
    setIsFormOpen(true);
  };

  return (
    <div className="space-y-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/25 text-amber-300">
            <Calendar className="w-3.5 h-3.5" />
            <span>Campus Programs & Symposiums</span>
          </div>
          <h1 className="font-regal text-3xl sm:text-5xl font-bold text-slate-100">
            Conclaves & Gatherings
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Discover student hackathons, acoustic music nights, tech bootcamps, and social drives curated by TAPAS Committee.
          </p>
        </div>

        {/* Action Button for Members & Leaders */}
        {canCreate ? (
          <button
            onClick={handleOpenCreate}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-950/40 hover:brightness-110 transition-all flex items-center gap-2 shrink-0 self-start md:self-end"
          >
            <Plus className="w-4 h-4 text-slate-950" />
            <span>Create New Conclave</span>
          </button>
        ) : (
          <div className="text-right self-start md:self-end text-xs text-slate-400 bg-[#0a0f1d] px-4 py-2 rounded-xl border border-slate-800">
            <span className="text-slate-200 font-medium">Public Viewer Mode</span>
            <p className="text-[11px] text-slate-400">Log in as Member or Team Leader to publish events</p>
          </div>
        )}
      </div>

      {/* 2. Search & Multi-Filter Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          
          {/* Search Input */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by conclave name, technology, or venue..."
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#0a0f1d] border border-slate-700/80 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-all"
            />
          </div>

          {/* Status Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0a0f1d] border border-slate-800 self-stretch sm:self-auto overflow-x-auto">
            {statuses.map(s => (
              <button
                key={s.value}
                onClick={() => setSelectedStatus(s.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedStatus === s.value
                    ? 'bg-amber-500/20 text-amber-300 font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 text-[11px] uppercase tracking-wider flex items-center gap-1 font-semibold pr-1">
            <Filter className="w-3 h-3 text-amber-400" /> Category:
          </span>
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-3 py-1.5 rounded-lg text-xs whitespace-nowrap border transition-all ${
                selectedCategory === cat.value
                  ? 'border-amber-400 bg-amber-500/20 text-amber-200 font-semibold shadow-sm'
                  : 'border-slate-800 bg-[#0a0f1d]/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Event Cards Grid */}
      {filteredEvents.length === 0 ? (
        <div className="p-12 text-center rounded-3xl border border-slate-800 bg-[#0a0f1d] space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 text-slate-400 flex items-center justify-center mx-auto">
            <Calendar className="w-6 h-6" />
          </div>
          <h3 className="font-regal text-lg font-bold text-slate-200">No Conclaves Found</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            No events match your current search query and filter criteria. Try clearing your filters or search keywords.
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setSelectedStatus('all'); }}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const percentFilled = Math.min(100, Math.round((event.registeredCount / event.capacity) * 100));
            const isCompleted = event.status === 'completed';
            const isDraft = event.status === 'draft';

            return (
              <div
                key={event.id}
                onClick={() => setSelectedEventId(event.id)}
                className="group relative rounded-2xl border border-slate-800 bg-[#0a0f1d] hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                {/* Event Image Banner */}
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={event.coverImage}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/20 to-black/50" />
                    
                    {/* Category badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-300 border border-amber-500/30">
                        {event.category}
                      </span>
                    </div>

                    {/* Status badge */}
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold backdrop-blur-md ${
                        isCompleted ? 'bg-slate-800/90 text-slate-300' :
                        isDraft ? 'bg-amber-500/30 text-amber-300 border border-amber-500/40' :
                        'bg-emerald-500/30 text-emerald-300 border border-emerald-500/40'
                      }`}>
                        {isCompleted ? 'Completed' : isDraft ? 'Draft' : 'Open for RSVP'}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{event.date}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 font-normal">{event.time}</span>
                    </div>

                    <h3 className="font-regal text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors line-clamp-2">
                      {event.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex items-start gap-1.5 text-xs text-slate-400 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{event.venue}</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer with capacity and action */}
                <div className="p-5 pt-0 space-y-3">
                  <div className="space-y-1.5 pt-3 border-t border-slate-800/80">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Capacity</span>
                      <span className="text-slate-200 font-medium">
                        {event.registeredCount} / {event.capacity} ({percentFilled}%)
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          percentFilled > 90 ? 'bg-rose-500' : percentFilled > 70 ? 'bg-amber-400' : 'bg-emerald-400'
                        }`}
                        style={{ width: `${percentFilled}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-slate-400 truncate max-w-[150px]">
                      Coord: {event.coordinator.split(' ')[0]}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                      <span>Event Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* Modals */}
      {activeEvent && (
        <EventModal
          event={activeEvent}
          onClose={() => setSelectedEventId(null)}
          onEdit={handleOpenEdit}
        />
      )}

      {isFormOpen && (
        <EventFormModal
          initialEvent={editingEvent}
          onClose={() => {
            setIsFormOpen(false);
            setEditingEvent(null);
          }}
        />
      )}

    </div>
  );
};
