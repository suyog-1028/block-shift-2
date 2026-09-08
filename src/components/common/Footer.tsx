import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Sparkles, 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Github, 
  ArrowUp, 
  CheckCircle2, 
  Shield 
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentPage, setIsJoinModalOpen, addToast } = useApp();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !newsletterEmail.includes('@')) {
      addToast('error', 'Invalid Email', 'Please enter a valid university or personal email address.');
      return;
    }
    setSubscribed(true);
    addToast('success', 'Subscribed to TAPAS Bulletins', 'You will receive monthly event gazettes and conclave updates.');
    setNewsletterEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050810] border-t border-amber-500/20 text-slate-300 pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-amber-500/5 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-800/80">
          
          {/* Col 1 & 2: Branding & Heritage */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-700 p-[1.5px] flex items-center justify-center shadow-md shadow-amber-950/50">
                <div className="w-full h-full rounded-[10px] bg-[#0a0f1d] flex items-center justify-center">
                  <span className="font-regal text-lg font-bold text-amber-300">T</span>
                </div>
              </div>
              <div>
                <span className="font-regal text-xl font-bold tracking-wider text-slate-100">
                  TAPAS COMMITTEE
                </span>
                <p className="text-xs text-amber-400/90 font-medium">
                  Pillai University • In Collaboration with Heartfulness
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed pr-6">
              A wellness and meditation committee emphasizing student mental health and inner peace under the umbrella of Heartfulness. Formed on 16 October 2019 at Pillai University.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 border border-amber-500/30 text-amber-300">
                <Shield className="w-3 h-3 text-amber-400" />
                NAAC ‘A+’ Grade Institution
              </span>
              <span className="text-xs text-slate-400">Formal MOU Partner</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-3">
              <a 
                href="https://instagram.com/tapas.pce" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="Instagram (@tapas.pce)"
                title="Instagram @tapas.pce"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation Quick Links */}
          <div className="space-y-3">
            <h4 className="font-regal text-sm font-semibold tracking-wider text-slate-200 uppercase">
              Quick Portals
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => { setCurrentPage('home'); scrollToTop(); }}
                  className="text-slate-400 hover:text-amber-300 transition-colors"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setCurrentPage('about'); scrollToTop(); }}
                  className="text-slate-400 hover:text-amber-300 transition-colors"
                >
                  Vision & Timeline
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setCurrentPage('events'); scrollToTop(); }}
                  className="text-slate-400 hover:text-amber-300 transition-colors"
                >
                  Conclaves & Events
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setCurrentPage('team'); scrollToTop(); }}
                  className="text-slate-400 hover:text-amber-300 transition-colors"
                >
                  Committee Hierarchy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setCurrentPage('achievements'); scrollToTop(); }}
                  className="text-slate-400 hover:text-amber-300 transition-colors"
                >
                  Honors & Awards
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setIsJoinModalOpen(true)}
                  className="text-amber-400 hover:text-amber-300 font-medium transition-colors flex items-center gap-1"
                >
                  Apply to Join <Sparkles className="w-3 h-3 text-amber-400" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus & Institutional Details */}
          <div className="space-y-3">
            <h4 className="font-regal text-sm font-semibold tracking-wider text-slate-200 uppercase">
              Campus Location
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Dr. K. M. Vasudevan Pillai Campus, 10, Sector 16, New Panvel, Navi Mumbai, Maharashtra 410206
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:tapas.council@pillai.edu" className="hover:text-slate-200 transition-colors">
                  tapas.council@pillai.edu
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>+91 22 2745 6030 / 1700</span>
              </div>
              <div className="pt-2 flex flex-col gap-1.5">
                <a 
                  href="https://pillai.edu" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-medium"
                >
                  Pillai University Official Portal <ExternalLink className="w-3 h-3" />
                </a>
                <a 
                  href="https://heartfulness.org" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-300"
                >
                  Heartfulness Institute Global <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 5: Newsletter & Dispatch */}
          <div className="space-y-3">
            <h4 className="font-regal text-sm font-semibold tracking-wider text-slate-200 uppercase">
              TAPAS Gazette
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe for official announcements, Alegria fest updates, and national hackathon releases.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Subscribed successfully! You’re on the VIP campus dispatch list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter student / work email"
                    className="w-full px-3 py-2 text-xs rounded-lg bg-[#0a0f1d] border border-slate-700 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-3 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Subscribe to Bulletins</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} TAPAS Committee — Pillai University. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Mahatma Education Society</span>
            <span className="text-slate-600">•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-amber-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
