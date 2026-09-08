import React from 'react';
import { useApp } from '../../context/AppContext';
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
  ArrowRight 
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { setCurrentPage, setIsJoinModalOpen } = useApp();

  const timelineEvents = [
    {
      year: '2018',
      title: 'Foundation & Genesis',
      description: 'Conceived under the visionary patronage of Dr. K. M. Vasudevan Pillai and senior faculty to create an independent, student-led council bridging academic rigor with executive and cultural enterprise.'
    },
    {
      year: '2020',
      title: 'Digital Resilience & Virtual Conclaves',
      description: 'Pioneered Western India’s first student-run virtual hackathon during the pandemic, attracting over 2,200 participants across 14 states and launching the SAMARPAN rural digital literacy initiative.'
    },
    {
      year: '2022',
      title: 'Alegria Technical & Cultural Partnership',
      description: 'Formally integrated as core co-organizers for Pillai University’s signature national festival ‘Alegria: The Festival of Joy’, managing major tech stages, soundstages, and 8,000+ footfall conventions.'
    },
    {
      year: '2024',
      title: 'State Honors & Research Expansion',
      description: 'Recognized with the Best Student Institutional Body Citation by the Higher Education Forum of Maharashtra; established student research fellowships and incubator tracks.'
    },
    {
      year: '2026 & Beyond',
      title: 'National Collegiate Eminence',
      description: 'Now governing 7 specialized wings with over 60 active student leaders, continuous industry partnerships with top tech and media firms, and a legacy of transformative campus impact.'
    }
  ];

  const valuesList = [
    {
      icon: Target,
      title: 'Uncompromising Integrity',
      desc: 'Transparency in budgeting, open peer elections, and merit-based opportunity distribution across all collegiate wings.'
    },
    {
      icon: Compass,
      title: 'Creative Boldness',
      desc: 'Refusing cookie-cutter events. Every stage design, hackathon theme, and masterclass is envisioned from the ground up.'
    },
    {
      icon: Users,
      title: 'Inclusivity & Mentorship',
      desc: 'Senior-to-junior handshakes ensuring that first-year students step into high-responsibility leadership roles with seasoned guidance.'
    },
    {
      icon: Heart,
      title: 'Social Conscience',
      desc: 'Believing that true college excellence gives back directly to local schools, village communities, and underprivileged youth.'
    }
  ];

  return (
    <div className="space-y-24 pb-24">
      
      {/* 1. HERO HEADER */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 border-b border-slate-800/80 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-xs font-semibold text-amber-300">
            <Building2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Mahatma Education Society • Est. 1970</span>
          </div>

          <h1 className="font-regal text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
            The Spirit & Purpose of <br />
            <span className="font-editorial italic font-normal bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              TAPAS Committee
            </span>
          </h1>

          <p className="font-body text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
            Rooted in the Sanskrit ideal of disciplined dedication and perseverance, <strong className="text-amber-300 font-semibold">TAPAS</strong> is the apex student committee at Pillai University dedicated to cultivating leaders of substance, artists of vision, and innovators of impact.
          </p>
        </div>
      </section>

      {/* 2. OUR VISION & OUR MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Our Vision */}
          <div className="relative rounded-3xl border border-amber-500/30 bg-gradient-to-br from-[#0c1427] to-[#080d1a] p-8 sm:p-10 space-y-4 shadow-xl overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Institutional Horizon</span>
            <h2 className="font-regal text-2xl sm:text-3xl font-bold text-slate-100">
              Our Vision
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              To be nationally recognized as the gold standard of student-led collegiate governance—where academic curiosity transforms into executive mastery, creative freedom flourishes without boundaries, and every Pillai University graduate emerges as an ethical, resilient catalyst for global positive change.
            </p>
            <div className="pt-2 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Nurturing future founders, executives, and cultural luminaries</span>
            </div>
          </div>

          {/* Our Mission */}
          <div className="relative rounded-3xl border border-slate-700 bg-gradient-to-br from-[#0e162b] to-[#0a0f1e] p-8 sm:p-10 space-y-4 shadow-xl overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Daily Execution Mandate</span>
            <h2 className="font-regal text-2xl sm:text-3xl font-bold text-slate-100">
              Our Mission
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              To curate high-impact hackathons, symposia, masterclasses, and arts festivals; to maintain transparent, accountable student stewardship across all campus wings; and to extend educational outreach into surrounding communities, ensuring that innovation always serves societal wellbeing.
            </p>
            <div className="pt-2 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Bridging rigorous curriculum with real-world project stewardship</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. WHAT WE STAND FOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
            Core Creed & Ethics
          </span>
          <h2 className="font-regal text-3xl sm:text-4xl font-bold text-slate-100">
            What We Stand For
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Our guiding ethos shapes how we plan, collaborate, negotiate sponsorships, and support every peer on campus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valuesList.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-800 bg-[#0a0f1d] hover:border-amber-500/30 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-regal text-base font-bold text-slate-100">{val.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. TIMELINE & COMMITTEE JOURNEY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
            Our Trajectory
          </span>
          <h2 className="font-regal text-3xl sm:text-4xl font-bold text-slate-100">
            The TAPAS Journey Through Time
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            From a humble student initiative of 8 students to Maharashtra’s most revered collegiate organizing council.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l-2 border-amber-500/30 space-y-10">
          {timelineEvents.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-[#080d1a] border-2 border-amber-400 flex items-center justify-center shadow-md shadow-amber-950/40 group-hover:scale-125 transition-transform">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
              </div>

              <div className="bg-[#0a0f1d] border border-slate-800 group-hover:border-amber-500/40 rounded-2xl p-6 transition-all space-y-2 shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="font-regal text-amber-400 font-extrabold text-sm sm:text-base px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                    {item.year}
                  </span>
                  <h3 className="font-regal text-lg sm:text-xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY JOIN TAPAS? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-b from-[#0e162b] to-[#070c18] p-8 sm:p-14 space-y-10 shadow-2xl">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
              Student Growth & Opportunities
            </span>
            <h2 className="font-regal text-3xl sm:text-4xl font-bold text-slate-100">
              Why Join TAPAS?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Being a TAPAS member is not just an extracurricular bullet point—it is a crucible of genuine executive capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#090f1e] border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-regal text-base font-bold text-slate-100">Real Scale, Real Budgets</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Manage live budgets up to ₹15 Lakhs, negotiate directly with enterprise sponsors, and coordinate logistics for 5,000+ attendee audiences.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#090f1e] border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-regal text-base font-bold text-slate-100">Alumni & Industry Network</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct mentorship from TAPAS alumni currently engineering at Google, Microsoft, Morgan Stanley, TCS, and prominent venture startups.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#090f1e] border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-regal text-base font-bold text-slate-100">Verified Council Credentials</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Official institutional letters of recommendation signed by University Leadership, Faculty Deans, and MES Trust Directors that supercharge your postgraduate and job applications.
              </p>
            </div>

          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => setIsJoinModalOpen(true)}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm shadow-xl shadow-amber-950/40 hover:brightness-110 transition-all inline-flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Submit Membership Application</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};
