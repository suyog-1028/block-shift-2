import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  Users, 
  Trophy, 
  Clock, 
  MapPin, 
  ChevronRight, 
  Target, 
  Compass, 
  GraduationCap, 
  Flame, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { 
    setCurrentPage, 
    setSelectedEventId, 
    events, 
    achievements, 
    setIsJoinModalOpen 
  } = useApp();

  // Animated counters on viewport arrival
  const [stats, setStats] = useState({
    eventsCount: 0,
    studentsCount: 0,
    awardsCount: 0,
    yearsCount: 0
  });

  useEffect(() => {
    const duration = 1600;
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setStats({
        eventsCount: Math.round(progress * 48),
        studentsCount: Math.round(progress * 14500),
        awardsCount: Math.round(progress * 32),
        yearsCount: Math.round(progress * 8)
      });

      if (step >= steps) {
        clearInterval(timer);
        setStats({
          eventsCount: 48,
          studentsCount: 14500,
          awardsCount: 32,
          yearsCount: 8
        });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const upcomingEvents = events.filter(e => e.status === 'upcoming').slice(0, 3);
  const featuredAchievements = achievements.slice(0, 3);

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
        
        {/* Subtle background radial glows */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
          
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-md text-xs font-semibold text-amber-300 shadow-md shadow-amber-950/20 animate-in fade-in slide-in-from-top-4 duration-500">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Official Student Executive Council • Pillai University</span>
            <span className="text-amber-500/60">•</span>
            <span className="text-slate-300">Autonomous Conclave Body</span>
          </div>

          {/* Editorial Headline */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="font-regal text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.15]">
              TAPAS Committee <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent font-editorial italic font-normal">
                Pillai University
              </span>
            </h1>

            <p className="font-body text-lg sm:text-2xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed pt-2">
              Inspiring leadership, creativity, and meaningful student impact.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-normal">
              Empowering 5,000+ collegiate minds through cutting-edge technology symposiums, acoustic cultural nights, and transformative grassroots social drives across Maharashtra.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              id="hero-explore-events-btn"
              onClick={() => {
                setCurrentPage('events');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-amber-950/50 hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Explore Events</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              id="hero-meet-team-btn"
              onClick={() => {
                setCurrentPage('team');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-xl border border-slate-700 hover:border-amber-500/50 bg-[#0d1424]/80 hover:bg-[#121c33] text-slate-200 font-semibold text-sm tracking-wide shadow-lg hover:text-amber-300 transition-all flex items-center gap-2"
            >
              <Users className="w-4 h-4 text-amber-400" />
              <span>Meet the Team</span>
            </button>

            <button
              id="hero-join-tapas-btn"
              onClick={() => setIsJoinModalOpen(true)}
              className="px-7 py-3.5 rounded-xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-semibold text-sm tracking-wide transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Join TAPAS</span>
            </button>
          </div>

          {/* Visual Trust Indicators */}
          <div className="pt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Pillai University Campus (New Panvel)</span>
            </div>
            <span className="hidden sm:inline text-slate-700">•</span>
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Lead Partner for Alegria Mega Fest</span>
            </div>
            <span className="hidden sm:inline text-slate-700">•</span>
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>NAAC A+ Institutional Governance</span>
            </div>
          </div>

        </div>

      </section>

      {/* 2. ANIMATED STATISTICS DISPLAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-amber-500/25 bg-gradient-to-b from-[#0e1629] to-[#070c17] p-8 sm:p-12 shadow-2xl shadow-black/60 overflow-hidden">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-800/80">
            
            {/* Stat 1 */}
            <div className="pt-4 lg:pt-0 px-4 space-y-2">
              <div className="font-regal text-3xl sm:text-5xl font-extrabold text-amber-300">
                {stats.eventsCount}+
              </div>
              <div className="font-semibold text-slate-200 text-sm sm:text-base">
                Events Conducted
              </div>
              <p className="text-xs text-slate-400">
                Hackathons, cultural fiestas & research conclaves
              </p>
            </div>

            {/* Stat 2 */}
            <div className="pt-4 lg:pt-0 px-4 space-y-2">
              <div className="font-regal text-3xl sm:text-5xl font-extrabold text-slate-100">
                {stats.studentsCount.toLocaleString()}+
              </div>
              <div className="font-semibold text-slate-200 text-sm sm:text-base">
                Student Participants
              </div>
              <p className="text-xs text-slate-400">
                Across Mumbai, Pune & Western India colleges
              </p>
            </div>

            {/* Stat 3 */}
            <div className="pt-4 lg:pt-0 px-4 space-y-2">
              <div className="font-regal text-3xl sm:text-5xl font-extrabold text-amber-400">
                {stats.awardsCount}+
              </div>
              <div className="font-semibold text-slate-200 text-sm sm:text-base">
                Honors & Laurels
              </div>
              <p className="text-xs text-slate-400">
                State & national distinctions in student governance
              </p>
            </div>

            {/* Stat 4 */}
            <div className="pt-4 lg:pt-0 px-4 space-y-2">
              <div className="font-regal text-3xl sm:text-5xl font-extrabold text-slate-100">
                {stats.yearsCount}+
              </div>
              <div className="font-semibold text-slate-200 text-sm sm:text-base">
                Years of Legacy
              </div>
              <p className="text-xs text-slate-400">
                Continuous excellence at Pillai Campus since 2018
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. UPCOMING EVENTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest">
              <Calendar className="w-3.5 h-3.5" />
              <span>Campus Calendar</span>
            </div>
            <h2 className="font-regal text-2xl sm:text-4xl font-bold text-slate-100 mt-1">
              Upcoming Flagship Conclaves
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Register early to secure official delegate access and workshop certificates.
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentPage('events');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>View All Events & Filters</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => {
            const percentFilled = Math.min(100, Math.round((event.registeredCount / event.capacity) * 100));
            return (
              <div
                key={event.id}
                className="group relative rounded-2xl border border-slate-800 bg-[#0a0f1d] hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col shadow-xl hover:-translate-y-1"
              >
                {/* Event Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={event.coverImage}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-amber-300 border border-amber-500/30">
                      {event.category}
                    </span>
                  </div>
                  {event.isFeatured && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500 text-slate-950 flex items-center gap-1 shadow-md">
                        <Sparkles className="w-3 h-3" /> Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Event Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1 text-amber-400/90 font-medium">
                        <Clock className="w-3.5 h-3.5" /> {event.date}
                      </span>
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

                  {/* Capacity meter */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Registrations</span>
                      <span className="text-slate-200 font-medium">{event.registeredCount} / {event.capacity} ({percentFilled}%)</span>
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

                  <button
                    onClick={() => {
                      setSelectedEventId(event.id);
                      setCurrentPage('events');
                    }}
                    className="w-full py-2.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-400 text-slate-200 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 group-hover:border-amber-500/50"
                  >
                    <span>View Itinerary & Register</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 4. COMMITTEE CORE PILLARS & HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-[#080d1a] p-8 sm:p-14 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              What Sets TAPAS Apart
            </span>
            <h2 className="font-regal text-3xl sm:text-4xl font-bold text-slate-100">
              The Four Pillars of Student Eminence
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Every initiative undertaken by TAPAS is grounded in rigorous execution standards and authentic student governance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-2xl border border-slate-800/80 bg-[#0a0f1d] space-y-3 hover:border-amber-500/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-regal text-base font-bold text-slate-100">Autonomous Leadership</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Complete student autonomy in budgeting, festival production, tech deployment, and corporate brand liaisons under faculty advisory.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800/80 bg-[#0a0f1d] space-y-3 hover:border-amber-500/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-regal text-base font-bold text-slate-100">Interdisciplinary Synergy</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Uniting engineers, designers, artists, and communicators across 8 specialized academic departments under one collective roof.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800/80 bg-[#0a0f1d] space-y-3 hover:border-amber-500/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                <Flame className="w-5 h-5" />
              </div>
              <h3 className="font-regal text-base font-bold text-slate-100">Community Consciousness</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Regular education outreach, digital literacy in rural Raigad schools, and environmentally sustainable campus operations.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800/80 bg-[#0a0f1d] space-y-3 hover:border-amber-500/30 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                <Trophy className="w-5 h-5" />
              </div>
              <h3 className="font-regal text-base font-bold text-slate-100">Proven Track Record</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Consistently ranked amongst the top collegiate organizing bodies in Maharashtra with zero institutional complaints.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. LATEST ACHIEVEMENTS REEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest">
              <Trophy className="w-3.5 h-3.5" />
              <span>National Laurels</span>
            </div>
            <h2 className="font-regal text-2xl sm:text-4xl font-bold text-slate-100 mt-1">
              Recognitions & Milestones
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Celebrating our students’ dedication, creativity, and representation of Pillai University.
            </p>
          </div>

          <button
            onClick={() => {
              setCurrentPage('achievements');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <span>Explore Full Honors Gallery</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredAchievements.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-800 bg-[#0a0f1d] hover:border-amber-500/40 p-5 space-y-4 flex flex-col justify-between transition-all group hover:-translate-y-1 shadow-lg"
            >
              <div className="space-y-3">
                <div className="relative h-44 rounded-xl overflow-hidden bg-slate-900">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-black/80 text-amber-300 border border-amber-500/30">
                      {item.category} • {item.year}
                    </span>
                  </div>
                </div>

                <h3 className="font-regal text-base font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-amber-400/90 font-medium text-[11px] truncate max-w-[200px]">
                  {item.highlightStats || item.organizationOrEvent}
                </span>
                <button
                  onClick={() => {
                    setCurrentPage('achievements');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-slate-400 group-hover:text-slate-200 transition-colors flex items-center gap-1 text-[11px]"
                >
                  <span>Story</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 6. CALL TO ACTION / JOIN TAPAS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-amber-500/30 bg-gradient-to-r from-[#0d1629] via-[#101b34] to-[#0d1629] p-8 sm:p-14 shadow-2xl overflow-hidden text-center space-y-6">
          
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              Recruitment Drive 2026–27 Open
            </span>
            <h2 className="font-regal text-3xl sm:text-5xl font-extrabold text-slate-100">
              Ready to Shape Pillai University’s Future?
            </h2>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
              Whether your passion lies in algorithmic challenges, stage design, festival operations, digital arts, or public discourse — TAPAS is where ambitious minds transform into extraordinary leaders.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 pt-2">
            <button
              onClick={() => setIsJoinModalOpen(true)}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-sm shadow-xl shadow-amber-950/50 hover:brightness-110 active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Apply for Committee Membership</span>
            </button>
            <button
              onClick={() => {
                setCurrentPage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-all"
            >
              Read Our Charter & Values
            </button>
          </div>

          <div className="pt-4 flex items-center justify-center gap-6 text-xs text-slate-400 relative z-10">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Open to All Years & Branches
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Official MES Credential
            </span>
          </div>

        </div>
      </section>

    </div>
  );
};
