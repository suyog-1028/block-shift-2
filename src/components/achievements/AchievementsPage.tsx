import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Achievement, AchievementCategory } from '../../types';
import { AchievementModal } from './AchievementModal';
import { AddAchievementModal } from './AddAchievementModal';
import { 
  Trophy, 
  Award, 
  Sparkles, 
  Plus, 
  Filter, 
  Search, 
  Calendar, 
  Building, 
  ExternalLink, 
  CheckCircle2, 
  Maximize2 
} from 'lucide-react';

export const AchievementsPage: React.FC = () => {
  const { achievements, currentUser } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const categories = [
    { label: 'All Laurels', value: 'all' },
    { label: 'Awards', value: 'Award' },
    { label: 'Competition Wins', value: 'Competition Win' },
    { label: 'Certifications', value: 'Certification' },
    { label: 'Media Mentions', value: 'Media Mention' },
    { label: 'Impact Milestones', value: 'Impact Milestone' }
  ];

  const filteredAchievements = achievements.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.organizationOrEvent.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = achievements.filter(a => a.isFeatured);
  const canAdd = currentUser.role === 'leader' || currentUser.role === 'member';

  return (
    <div className="space-y-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      {/* 1. Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/25 text-amber-300">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Institutional Distinctions</span>
          </div>
          <h1 className="font-regal text-3xl sm:text-5xl font-bold text-slate-100">
            Hall of Achievements
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Celebrating awards, competition podium finishes, citations, and media recognitions earned by the TAPAS Committee on behalf of Pillai University.
          </p>
        </div>

        {/* Add Achievement button */}
        {canAdd ? (
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-950/40 hover:brightness-110 transition-all flex items-center gap-2 shrink-0 self-start md:self-end"
          >
            <Plus className="w-4 h-4 text-slate-950" />
            <span>Add New Achievement</span>
          </button>
        ) : (
          <div className="text-right self-start md:self-end text-xs text-slate-400 bg-[#0a0f1d] px-4 py-2 rounded-xl border border-slate-800">
            <span className="text-slate-200 font-medium">Public Gallery View</span>
            <p className="text-[11px] text-slate-400">Log in as Team Leader to publish honors</p>
          </div>
        )}
      </div>

      {/* 2. Featured Highlight Card */}
      {featured.length > 0 && (
        <div className="relative rounded-3xl border border-amber-500/30 bg-gradient-to-r from-[#0d162b] via-[#111c38] to-[#0d162b] p-6 sm:p-8 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5 h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-950 relative group cursor-pointer"
                 onClick={() => setSelectedAchievement(featured[0])}>
              <img
                src={featured[0].imageUrl}
                alt={featured[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-semibold bg-black/60 px-3 py-1 rounded-lg backdrop-blur-md">
                  <Maximize2 className="w-3.5 h-3.5" /> View Photo Lightbox
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  ★ Premier Institutional Honor
                </span>
                <span className="text-xs text-slate-400 font-medium">Conferred {featured[0].year}</span>
              </div>

              <h3 className="font-regal text-2xl sm:text-3xl font-bold text-slate-100">
                {featured[0].title}
              </h3>

              <p className="font-editorial text-slate-200 text-sm sm:text-base italic leading-relaxed bg-[#070b14]/60 p-4 rounded-2xl border border-amber-500/20">
                “{featured[0].description}”
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                  <Building className="w-4 h-4 text-amber-400" />
                  {featured[0].organizationOrEvent}
                </span>
                {featured[0].highlightStats && (
                  <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/25 text-amber-300 font-medium">
                    {featured[0].highlightStats}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. Filter and Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search achievements, conferences, competitions, or awards..."
              className="w-full pl-10 pr-4 py-2.5 text-xs rounded-xl bg-[#0a0f1d] border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto self-stretch sm:self-auto pb-1 text-xs">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3 py-2 rounded-xl text-xs whitespace-nowrap border transition-all ${
                  selectedCategory === cat.value
                    ? 'border-amber-400 bg-amber-500/20 text-amber-200 font-semibold shadow-sm'
                    : 'border-slate-800 bg-[#0a0f1d] text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* 4. Gallery Grid */}
      {filteredAchievements.length === 0 ? (
        <div className="p-12 text-center rounded-3xl border border-slate-800 bg-[#0a0f1d] space-y-4">
          <Trophy className="w-12 h-12 text-slate-500 mx-auto" />
          <h3 className="font-regal text-lg font-bold text-slate-200">No Achievements Found</h3>
          <p className="text-xs text-slate-400">Try modifying your search or resetting category filters.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedAchievement(item)}
              className="group relative rounded-2xl border border-slate-800 bg-[#0a0f1d] hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              <div>
                {/* Photo */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-[#0a0f1d]/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-300 border border-amber-500/30">
                      {item.category} • {item.year}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="p-1.5 rounded-lg bg-black/70 text-amber-300 backdrop-blur-md inline-flex items-center gap-1 text-[11px]">
                      <Maximize2 className="w-3.5 h-3.5" /> Lightbox
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400/90 font-medium">
                    <Building className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{item.organizationOrEvent}</span>
                  </div>

                  <h3 className="font-regal text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed font-editorial italic">
                    “{item.description}”
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 pt-0 border-t border-slate-800/80 mt-2 flex items-center justify-between text-xs">
                {item.highlightStats ? (
                  <span className="text-amber-400 font-medium text-[11px] truncate max-w-[180px]">
                    {item.highlightStats}
                  </span>
                ) : (
                  <span className="text-slate-500 text-[11px]">Pillai University Conclave</span>
                )}

                <span className="text-slate-400 group-hover:text-amber-300 font-semibold flex items-center gap-1 text-[11px]">
                  <span>Citation Details</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox / Modal */}
      {selectedAchievement && (
        <AchievementModal
          achievement={selectedAchievement}
          onClose={() => setSelectedAchievement(null)}
        />
      )}

      {/* Add Modal */}
      {isAddModalOpen && (
        <AddAchievementModal
          onClose={() => setIsAddModalOpen(false)}
        />
      )}

    </div>
  );
};
