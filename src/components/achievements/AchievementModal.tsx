import React from 'react';
import { Achievement } from '../../types';
import { X, Trophy, Calendar, Building, Sparkles, Share2, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface AchievementModalProps {
  achievement: Achievement;
  onClose: () => void;
}

export const AchievementModal: React.FC<AchievementModalProps> = ({ achievement, onClose }) => {
  const { addToast } = useApp();
  const [copied, setCopied] = React.useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${achievement.title} — ${achievement.description}`);
      setCopied(true);
      addToast('info', 'Copied to Clipboard', 'Achievement citation copied.');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#090f1d] border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Lightbox Image Preview */}
        <div className="relative h-64 sm:h-80 w-full bg-slate-950 overflow-hidden">
          <img
            src={achievement.imageUrl}
            alt={achievement.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090f1d] via-transparent to-black/50" />

          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/80 text-amber-300 border border-amber-500/40 backdrop-blur-md flex items-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>{achievement.category}</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="p-2 rounded-xl bg-black/60 border border-slate-700 text-slate-200 hover:text-amber-300 hover:bg-slate-900 transition-colors"
                title="Share citation"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-black/60 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-900 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 space-y-1">
            <span className="text-xs font-semibold text-amber-300 tracking-wide uppercase">
              Conferred Year {achievement.year}
            </span>
            <h3 className="font-regal text-xl sm:text-2xl font-bold text-slate-100 drop-shadow-md">
              {achievement.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-slate-300">
          
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3 text-xs">
            <Building className="w-4 h-4 text-amber-400 shrink-0" />
            <div>
              <span className="text-slate-400 block text-[11px]">Awarding Entity / Organization:</span>
              <span className="text-slate-200 font-semibold">{achievement.organizationOrEvent}</span>
            </div>
          </div>

          {achievement.highlightStats && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{achievement.highlightStats}</span>
            </div>
          )}

          {/* Official Citation */}
          <div className="space-y-2">
            <h4 className="font-regal text-sm font-bold text-slate-200 uppercase tracking-wider text-amber-400">
              Official Institutional Citation
            </h4>
            <div className="p-4 rounded-xl bg-[#0c1427] border border-amber-500/20 italic font-editorial text-slate-200 text-sm leading-relaxed">
              “{achievement.description}”
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Verified by Pillai University Internal Quality Assurance Cell (IQAC)</span>
            <span className="text-amber-400/80">Logged {achievement.dateAdded}</span>
          </div>

        </div>

        <div className="p-4 border-t border-slate-800 bg-[#070b14] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
