import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TeamMember } from '../../types';
import { AUTHENTIC_TESTIMONIALS } from '../../data/mockData';
import { 
  Users, 
  Linkedin, 
  Mail, 
  Instagram, 
  Github, 
  Award, 
  Layers, 
  Grid, 
  Sparkles, 
  GraduationCap, 
  ShieldCheck,
  Heart,
  Quote
} from 'lucide-react';

export const TeamPage: React.FC = () => {
  const { teamMembers, setIsJoinModalOpen } = useApp();

  const [viewMode, setViewMode] = useState<'hierarchy' | 'grid'>('hierarchy');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { label: 'All Council', value: 'all' },
    { label: 'Executive & Faculty', value: 'Executive' },
    { label: 'Creative & Media', value: 'Creative & Media' },
    { label: 'Public Relations & Socials', value: 'Public Relations' },
    { label: 'Operations & Logistics', value: 'Operations' },
  ];

  const filteredMembers = teamMembers.filter(member => {
    const matchesCategory = selectedCategory === 'all' || member.teamCategory === selectedCategory;
    const matchesSearch = 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Hierarchy groupings
  const faculty = teamMembers.filter(m => m.role === 'Faculty Coordinator' || m.role === 'Faculty Mentor');
  const executiveCouncil = teamMembers.filter(m => m.role === 'President' || m.role === 'Vice President' || m.role === 'Secretary');
  const wingLeads = teamMembers.filter(m => m.role === 'Team Leader');

  const renderMemberCard = (member: TeamMember, compact = false) => {
    const isExecutive = member.role === 'Faculty Coordinator' || member.role === 'Faculty Mentor' || member.role === 'President' || member.role === 'Secretary';

    return (
      <div
        key={member.id}
        className={`group relative rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl ${
          isExecutive
            ? 'border-amber-500/40 bg-gradient-to-b from-[#0f172a] to-[#0a0f1d] hover:border-amber-400 hover:shadow-amber-500/10'
            : 'border-slate-800 bg-[#0a0f1d] hover:border-slate-700'
        } ${compact ? 'p-4 space-y-3' : 'p-5 space-y-4'}`}
      >
        <div className="space-y-3">
          {/* Photo & Badge */}
          <div className="flex items-start gap-4">
            <div className="relative shrink-0">
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden p-[1.5px] ${
                isExecutive
                  ? 'bg-gradient-to-tr from-amber-400 via-amber-600 to-amber-300'
                  : 'bg-slate-700'
              }`}>
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-[14px] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {member.role === 'President' && (
                <div className="absolute -bottom-1 -right-1 p-1 bg-amber-500 rounded-full text-slate-950 shadow-md">
                  <Sparkles className="w-3 h-3" />
                </div>
              )}
            </div>

            <div className="min-w-0 flex-1 space-y-1">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                  member.role === 'Faculty Mentor' || member.role === 'Faculty Coordinator' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' :
                  member.role === 'President' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold' :
                  member.role === 'Secretary' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold' :
                  member.role === 'Team Leader' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' :
                  'bg-slate-800 text-slate-300'
                }`}>
                  {member.role}
                </span>
                <span className="text-[10px] text-slate-400 font-medium truncate">
                  {member.teamCategory}
                </span>
              </div>

              <h4 className="font-regal text-base sm:text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                {member.name}
              </h4>

              <p className="text-[11px] text-slate-400 font-medium">
                {member.department} {member.year ? `• ${member.year}` : ''}
              </p>
            </div>
          </div>

          {/* Short Bio */}
          <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
            {member.bio}
          </p>

          {/* Key Achievements tag */}
          {member.achievements && member.achievements.length > 0 && (
            <div className="pt-1 space-y-1">
              <div className="flex items-center gap-1 text-[10px] text-amber-400 font-semibold uppercase tracking-wider">
                <Award className="w-3 h-3" />
                <span>Distinctions</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {member.achievements.slice(0, 2).map((ach, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                  >
                    {ach}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer & Social Contacts */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <a
            href={`mailto:${member.email}`}
            className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-amber-300 transition-colors"
          >
            <Mail className="w-3 h-3" />
            <span className="truncate max-w-[150px]">{member.email}</span>
          </a>

          <div className="flex items-center gap-2 text-slate-400">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            )}
            {member.instagram && (
              <a
                href={member.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            )}
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-400 transition-colors"
                title="GitHub"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      {/* 1. Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 border border-amber-500/25 text-amber-300">
            <Users className="w-3.5 h-3.5" />
            <span>Official Student Leadership Structure</span>
          </div>
          <h1 className="font-regal text-3xl sm:text-5xl font-bold text-slate-100">
            The TAPAS Committee
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Faculty mentors, elected council leaders, and wing heads steering mindfulness, student wellness, and peace initiatives at Pillai University.
          </p>
        </div>

        {/* View Toggle: Hierarchy vs Grid */}
        <div className="flex items-center gap-3 self-start md:self-end">
          <div className="flex items-center gap-1 p-1 rounded-xl bg-[#0a0f1d] border border-slate-800">
            <button
              onClick={() => setViewMode('hierarchy')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                viewMode === 'hierarchy'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Leadership Hierarchy</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                viewMode === 'grid'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Council Directory</span>
            </button>
          </div>

          <button
            onClick={() => setIsJoinModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-amber-500/15 border border-amber-500/30 hover:bg-amber-500/25 text-amber-300 text-xs font-semibold flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Join Council</span>
          </button>
        </div>
      </div>

      {/* 2. Hierarchy View Mode */}
      {viewMode === 'hierarchy' ? (
        <div className="space-y-14">
          
          {/* Level 1: Faculty Mentors */}
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Tier I • Faculty Advisory & Spiritual Mentorship</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
              {faculty.map(f => renderMemberCard(f))}
            </div>
            {/* Connector vertical line */}
            <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500/60 to-amber-500/60 mx-auto" />
          </div>

          {/* Level 2: Executive Council (President & Secretary) */}
          <div className="space-y-4">
            <div className="text-center space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Tier II • Executive Council</span>
              </div>
              <p className="text-xs text-slate-400">Spearheading annual fests, campus meditation drives, and institutional liaison</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {executiveCouncil.map(exec => renderMemberCard(exec))}
            </div>

            {/* Connector vertical line */}
            <div className="w-0.5 h-8 bg-amber-500/40 mx-auto" />
          </div>

          {/* Level 3: Specialized Wing Heads */}
          <div className="space-y-4">
            <div className="text-center space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>Tier III • Specialized Wing Heads</span>
              </div>
              <p className="text-xs text-slate-400">Heads of Social Media, Creative Art, Publicity, Coverage, Graphics, Events, and Content</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wingLeads.map(lead => renderMemberCard(lead))}
            </div>
          </div>

          {/* Level 4: Founding Leaders & Alumni Voices */}
          <div className="pt-8 border-t border-slate-800/80 space-y-6">
            <div className="text-center space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Quote className="w-3.5 h-3.5" />
                <span>Founding Leaders & Alumni Hall of Fame</span>
              </div>
              <p className="text-xs text-slate-400">The visionary pioneers who laid the cornerstone of TAPAS at Pillai</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {AUTHENTIC_TESTIMONIALS.map((alumnus) => (
                <div
                  key={alumnus.id}
                  className="p-6 rounded-2xl border border-slate-800 bg-[#090e1c] flex flex-col justify-between space-y-4"
                >
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    {alumnus.text}
                  </p>
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-800">
                    <img
                      src={alumnus.avatar}
                      alt={alumnus.name}
                      className="w-10 h-10 rounded-full object-cover border border-amber-500/30"
                    />
                    <div>
                      <h4 className="font-regal text-sm font-bold text-slate-100">{alumnus.name}</h4>
                      <p className="text-[11px] text-amber-400">{alumnus.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      ) : (
        /* 3. Grid / Directory View Mode with Category Filtering */
        <div className="space-y-6">
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 text-xs">
              {categories.map(cat => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3 py-1.5 rounded-lg border transition-all ${
                    selectedCategory === cat.value
                      ? 'border-amber-400 bg-amber-500/20 text-amber-200 font-semibold shadow-sm'
                      : 'border-slate-800 bg-[#0a0f1d] text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="w-full sm:w-64">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search member or role..."
                className="w-full px-3 py-2 text-xs rounded-xl bg-[#0a0f1d] border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map(member => renderMemberCard(member))}
          </div>

        </div>
      )}

      {/* Join Callout */}
      <div className="rounded-2xl border border-slate-800 bg-[#070b14] p-8 text-center space-y-4">
        <h3 className="font-regal text-xl sm:text-2xl font-bold text-slate-100">
          Want to Join the TAPAS Student Council?
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          Volunteer applications for campus coordinators, creative anchors, and session leads open at the beginning of each semester.
        </p>
        <button
          onClick={() => setIsJoinModalOpen(true)}
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-950/40 hover:brightness-110 transition-all inline-flex items-center gap-2"
        >
          <Sparkles className="w-3.5 h-3.5 text-slate-950" />
          <span>Apply to Join TAPAS</span>
        </button>
      </div>

    </div>
  );
};
