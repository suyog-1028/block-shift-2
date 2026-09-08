import React from 'react';
import { useApp } from '../../context/AppContext';
import { CORE_OBJECTIVES, HEARTFULNESS_PRACTICES } from '../../data/mockData';
import { 
  Sparkles, 
  Target, 
  Compass, 
  ShieldCheck, 
  Award, 
  Users, 
  Heart, 
  CheckCircle2, 
  BookOpen, 
  Building2, 
  ArrowRight,
  Wind,
  Sun,
  Flame,
  FileText,
  ExternalLink
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { setCurrentPage, setIsJoinModalOpen } = useApp();

  const timelineEvents = [
    {
      year: '16 October 2019',
      title: 'Foundation of TAPAS & Heartfulness Collaboration',
      description: 'Formed on 16 October 2019 at Pillai Campus. A passionate group of students and visionary faculty established TAPAS under the umbrella of Heartfulness, dedicated to creating an environment of meditation, stress relief, and inner equilibrium.'
    },
    {
      year: '2020 – 2021',
      title: 'Inaugural Dhyanotsav Fest & Virtual Morning Circles',
      description: 'Pioneered the flagship 3-day Dhyanotsav campus fest, introducing hundreds of first-year engineering students to relaxation and cleaning methods. Transitioned to virtual morning meditation circles during lockdown to support student mental health.'
    },
    {
      year: '2022 – 2023',
      title: 'Formal Institutional MOU & Dhyanratri Launch',
      description: 'TAPAS-PCE and Pillai officially signed an institutional MOU to promote regular mindfulness. Launched Dhyanratri—a signature 9-day meditative journey during Navratri connecting inner mindfulness with cultural celebration.'
    },
    {
      year: '2024',
      title: 'National Youth Ambassador Award Distinction',
      description: 'TAPAS student delegates and faculty advisors Dr. Nivedita Shreyans and Prof. Madhura Vyavahare were honored with the prestigious National Youth Ambassador Award by the Heartfulness Institute at Kanha Shanti Vanam.'
    },
    {
      year: '2025 – 2026 & Beyond',
      title: 'Har Dil Dhyan Challenge & International Delegations',
      description: 'Over 1,200 participants completed the 21 Days Meditation Challenge. Represented Pillai University at the International Youth Conference on "Rising with Kindness" alongside global delegates from over 30 countries.'
    }
  ];

  return (
    <div className="space-y-24 pb-24">
      
      {/* 1. HERO HEADER */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 border-b border-slate-800/80 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-xs font-semibold text-amber-300">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>Formed 16 October 2019 • Pillai University</span>
          </div>

          <h1 className="font-regal text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
            About TAPAS Committee <br />
            <span className="font-editorial italic font-normal bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              In Collaboration with Heartfulness
            </span>
          </h1>

          <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
            <strong className="text-amber-300 font-semibold">TAPAS-PCE</strong> is a wellness and meditation club at Pillai University emphasizing the mental health and inner peace of students. Under the umbrella of Heartfulness, we are dedicated towards creating an environment of contemplation, self-improvement, and stress-free academic excellence.
          </p>
        </div>
      </section>

      {/* 2. THE OFFICIAL INSTITUTIONAL MOU SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-r from-[#0d1629] via-[#101b33] to-[#0d1629] p-8 sm:p-12 shadow-2xl space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-slate-800 pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/15 text-amber-300 border border-amber-500/30">
                <FileText className="w-3.5 h-3.5" />
                <span>Formal Partnership</span>
              </div>
              <h2 className="font-regal text-2xl sm:text-3xl font-bold text-slate-100">
                Institutional MOU with Pillai University
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                TAPAS-PCE and Pillai have signed an official Memorandum of Understanding (MOU) to actively promote meditation, mental wellness, and student balance throughout the university calendar.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#080d19] border border-amber-500/20 text-center space-y-1 shrink-0 w-full md:w-auto">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Governing Framework</span>
              <div className="font-regal text-base font-bold text-slate-100">Heartfulness & MES</div>
              <span className="text-[11px] text-slate-400">NAAC A+ Accredited Campus</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="space-y-1.5">
              <h4 className="font-regal text-sm font-bold text-amber-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Regular Guided Sessions
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Certified Heartfulness trainers conduct daily evening cleaning and morning relaxation across campus hostels and meditation halls.
              </p>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-regal text-sm font-bold text-amber-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Stress Management Modules
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Masterclasses tailored for exam pressure, project burnout, and emotional resilience embedded into semester induction weeks.
              </p>
            </div>

            <div className="space-y-1.5">
              <h4 className="font-regal text-sm font-bold text-amber-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" /> Kanha Ashram Immersion
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct sponsorship and delegate entry for Pillai students to attend global retreats at Kanha Shanti Vanam, Hyderabad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HEARTFULNESS PHILOSOPHY & THE 4 PRACTICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
            Raja Yoga Tradition
          </span>
          <h2 className="font-regal text-3xl sm:text-4xl font-bold text-slate-100">
            What is Heartfulness?
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Heartfulness is an approach to the Raja Yoga system of meditation. It is a simple and subtle practice that connects each of us with the light and love in our hearts. Through daily practice, the mind centers and shifts to deeper levels of feeling, intuition, and consciousness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {HEARTFULNESS_PRACTICES.map((practice, index) => (
            <div
              key={practice.id}
              className="rounded-2xl border border-slate-800 bg-[#090f1d] hover:border-amber-500/40 p-6 space-y-4 flex flex-col justify-between transition-all group shadow-lg hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-regal font-bold">
                  0{index + 1}
                </div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                  {practice.subtitle}
                </span>
                <h3 className="font-regal text-lg font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                  {practice.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {practice.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[11px] text-amber-400/90 font-medium">
                Time: {practice.duration}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. OUR THREE CORE OBJECTIVES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
            Institutional Pillars
          </span>
          <h2 className="font-regal text-3xl sm:text-4xl font-bold text-slate-100">
            Our Core Objectives
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Guiding our commitment to collegiate health and community harmony.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORE_OBJECTIVES.map((obj, i) => (
            <div 
              key={i} 
              className="p-8 rounded-3xl border border-slate-800 bg-gradient-to-b from-[#0a0f1e] to-[#070b16] space-y-4 hover:border-amber-500/40 transition-colors shadow-xl"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center font-regal font-bold text-lg">
                0{i + 1}
              </div>
              <h3 className="font-regal text-xl font-bold text-slate-100">{obj.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {obj.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. HISTORICAL TIMELINE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
            Our Journey
          </span>
          <h2 className="font-regal text-3xl sm:text-4xl font-bold text-slate-100">
            The TAPAS Journey at Pillai University
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            From an inspired cohort in 2019 to a national award-winning youth wellness movement.
          </p>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-10">
          {timelineEvents.map((evt, idx) => (
            <div key={idx} className="relative group space-y-2">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-slate-900 border-2 border-amber-400 group-hover:bg-amber-400 group-hover:scale-125 transition-all shadow-md shadow-amber-950/50" />
              
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/25">
                  {evt.year}
                </span>
                <h3 className="font-regal text-lg sm:text-xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                  {evt.title}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl pt-1">
                {evt.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FACULTY LEADERSHIP & GUIDANCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-[#080d1a] p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              Institutional Mentorship
            </span>
            <h2 className="font-regal text-2xl sm:text-3xl font-bold text-slate-100">
              Guided by Dedicated Faculty Mentors
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              TAPAS flourishes under the gracious leadership, counseling, and spiritual mentorship of our university faculty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl border border-slate-800/80 bg-[#0a0f1e] flex gap-4 items-center">
              <img
                src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?w=300&auto=format&fit=crop&q=80"
                alt="Dr. Nivedita Shreyans"
                className="w-16 h-16 rounded-full object-cover border border-amber-500/30 shrink-0"
              />
              <div className="space-y-1">
                <h4 className="font-regal text-base font-bold text-slate-100">Dr. Nivedita Shreyans</h4>
                <p className="text-xs text-amber-400 font-medium">Faculty Mentor & Chief Advisor</p>
                <p className="text-[11px] text-slate-400">
                  Instrumental in establishing the Heartfulness MOU and guiding our student leaders to national recognition.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-slate-800/80 bg-[#0a0f1e] flex gap-4 items-center">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80"
                alt="Prof. Madhura Vyavahare"
                className="w-16 h-16 rounded-full object-cover border border-amber-500/30 shrink-0"
              />
              <div className="space-y-1">
                <h4 className="font-regal text-base font-bold text-slate-100">Prof. Madhura Vyavahare</h4>
                <p className="text-xs text-amber-400 font-medium">Faculty Coordinator</p>
                <p className="text-[11px] text-slate-400">
                  Overseeing student affairs, daily meditation routines, and collaborative programs across engineering departments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA / JOIN BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-r from-[#0d1629] via-[#101b34] to-[#0d1629] p-8 sm:p-12 space-y-6 shadow-2xl">
          <h2 className="font-regal text-2xl sm:text-4xl font-bold text-slate-100">
            Be Part of Our Mindful Campus Movement
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Join hands with fellow students in spreading peace, emotional well-being, and compassionate leadership across Pillai University.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsJoinModalOpen(true)}
              className="px-7 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-lg hover:brightness-110 transition-all flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apply for Committee</span>
            </button>
            <button
              onClick={() => {
                setCurrentPage('team');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-7 py-3 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 font-semibold text-xs transition-all"
            >
              Meet the Council
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
