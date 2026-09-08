import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { TeamMember, TeamHierarchyLevel } from '../../types';
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
  ShieldCheck 
} from 'lucide-react';

export const TeamPage: React.FC = () => {
  const { teamMembers, setIsJoinModalOpen } = useApp();

  const [viewMode, setViewMode] = useState<'grid' | 'hierarchy'>('hierarchy');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { label: 'All Committee', value: 'all' },
    { label: 'Executive Council', value: 'Executive' },
    { label: 'Technical Wing', value: 'Technical' },
    { label: 'Cultural & Arts', value: 'Cultural & Arts' },
    { label: 'Operations & Logistics', value: 'Operations' },
    { label: 'Creative & Media', value: 'Creative & Media' },
    { label: 'Public Relations', value: 'Public Relations' },
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
  const faculty = teamMembers.filter(m => m.role === 'Faculty Coordinator');
  const executiveCouncil = teamMembers.filter(m => m.role === 'President' || m.role === 'Vice President' || m.role === 'Secretary');
  const teamLeads = teamMembers.filter(m => m.role === 'Team Leader');
  const coreAndVolunteers = teamMembers.filter(m => m.role === 'Core Member' || m.role === 'Volunteer');

  const renderMemberCard = (member: TeamMember, compact = false) => {
    const isExecutive = member.role === 'Faculty Coordinator' || member.role === 'President' || member.role === 'Vice President';

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
                  member.role === 'Faculty Coordinator' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' :
                  member.role === 'President' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold' :
                  member.role === 'Vice President' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
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
                {member.department} • {member.year}
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
            <span>Executive Governance Structure</span>
          </div>
          <h1 className="font-regal text-3xl sm:text-5xl font-bold text-slate-100">
            The TAPAS Committee
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Faculty coordinators, elected council leaders, and dedicated student stewards steering collegiate excellence at Pillai University.
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
              <span>Visual Hierarchy</span>
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
              <span>Full Directory</span>
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
          
          {/* Level 1: Faculty Coordinator */}
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Tier I • Institutional Advisory</span>
            </div>
            <div className="max-w-md mx-auto">
              {faculty.map(f => renderMemberCard(f))}
            </div>
            {/* Connector vertical line */}
            <div className="w-0.5 h-8 bg-gradient-to-b from-purple-500/60 to-amber-500/60 mx-auto" />
          </div>

          {/* Level 2: Executive Council (President, VP, Secretary) */}
          <div className="space-y-4">
            <div className="text-center space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Tier II • Executive Council</span>
              </div>
              <p className="text-xs text-slate-400">Overseeing all 7 committee wings, university relations, and annual charters</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {executiveCouncil.map(exec => renderMemberCard(exec))}
            </div>

            {/* Connector vertical line */}
            <div className="w-0.5 h-8 bg-amber-500/40 mx-auto" />
          </div>

          {/* Level 3: Team Leaders across Wings */}
          <div className="space-y-4">
            <div className="text-center space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>Tier III • Wing Team Leaders</span>
              </div>
              <p className="text-xs text-slate-400">Heads of Technical Architecture, Cultural Affairs, Operations, and PR</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamLeads.map(lead => renderMemberCard(lead))}
            </div>

            {/* Connector vertical line */}
            <div className="w-0.5 h-8 bg-slate-700 mx-auto" />
          </div>

          {/* Level 4: Core Members & Volunteers */}
          <div className="space-y-4">
            <div className="text-center space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider">
                <span>Tier IV • Core Members & Volunteers</span>
              </div>
              <p className="text-xs text-slate-400">Ground-level event engineers, stage anchors, media creators, and coordinators</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreAndVolunteers.map(m => renderMemberCard(m, true))}
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
          Want to Join the Committee Ranks?
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
          Elections and auditions for junior coordinators and volunteer roles occur at the onset of every academic term.
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
