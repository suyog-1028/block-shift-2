import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { Achievement, AchievementCategory } from '../../types';
import { 
  X, 
  Trophy, 
  Sparkles, 
  Image as ImageIcon, 
  Upload, 
  Wand2, 
  CheckCircle2, 
  Plus 
} from 'lucide-react';

interface AddAchievementModalProps {
  onClose: () => void;
}

const PRESET_ACHIEVEMENT_IMAGES = [
  { label: 'Trophy & Stage Podium', url: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&auto=format&fit=crop&q=80' },
  { label: 'Hackathon Grand Prize', url: 'https://images.unsplash.com/photo-1579389083078-4e7018379f7e?w=800&auto=format&fit=crop&q=80' },
  { label: 'Community Service Citation', url: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop&q=80' },
  { label: 'Cultural Championship', url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=80' },
  { label: 'Media Newspaper Mention', url: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=80' },
  { label: 'Accreditation Certificate', url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80' }
];

export const AddAchievementModal: React.FC<AddAchievementModalProps> = ({ onClose }) => {
  const { addAchievement, addToast } = useApp();

  const [title, setTitle] = useState('');
  const [organization, setOrganization] = useState('');
  const [year, setYear] = useState('2026');
  const [category, setCategory] = useState<AchievementCategory>('Award');
  const [imageUrl, setImageUrl] = useState(PRESET_ACHIEVEMENT_IMAGES[0].url);
  const [highlightStats, setHighlightStats] = useState('');
  const [description, setDescription] = useState('');
  const [autoGenerate, setAutoGenerate] = useState(true);

  // Auto-generate description using the required formula whenever title or organization changes
  useEffect(() => {
    if (autoGenerate) {
      const achTitle = title.trim() || '[achievement]';
      const org = organization.trim() || '[event/organization]';
      setDescription(
        `TAPAS Committee proudly earned recognition for ${achTitle} at ${org}. This accomplishment reflects the team’s dedication, innovation, collaboration, and commitment to representing Pillai University with excellence.`
      );
    }
  }, [title, organization, autoGenerate]);

  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
        addToast('info', 'Image Attached', 'Local image file preview loaded.');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !organization.trim() || !description.trim()) {
      addToast('error', 'Incomplete Form', 'Please provide the achievement title and awarding organization.');
      return;
    }

    addAchievement({
      title,
      year,
      category,
      organizationOrEvent: organization,
      imageUrl,
      description,
      highlightStats: highlightStats.trim() || undefined,
      isFeatured: true
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#090f1d] border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-[#070b14]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-regal text-lg font-bold text-slate-100">
                Publish New Committee Achievement
              </h3>
              <p className="text-xs text-amber-400/80">
                Includes automated professional copy generator
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

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-sm text-slate-300">
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Achievement Title / Honor Name *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. 1st Place at National Smart Tech Forum"
                className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400 font-medium"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Year</label>
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="2026"
                className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Awarding Event / Organization *
              </label>
              <input
                type="text"
                required
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="e.g. Higher Education Directorate of Maharashtra"
                className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as AchievementCategory)}
                className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
              >
                <option value="Award">Award</option>
                <option value="Competition Win">Competition Win</option>
                <option value="Certification">Certification</option>
                <option value="Media Mention">Media Mention</option>
                <option value="Impact Milestone">Impact Milestone</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Highlight Metric / Tag (Optional)
            </label>
            <input
              type="text"
              value={highlightStats}
              onChange={(e) => setHighlightStats(e.target.value)}
              placeholder="e.g. ₹50,000 Cash Prize, 150+ colleges competed"
              className="w-full px-3 py-2 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
            />
          </div>

          {/* Image selection / Upload */}
          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-semibold text-slate-300">Achievement Photo</label>
              <label className="cursor-pointer text-[11px] text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1">
                <Upload className="w-3 h-3" />
                <span>Upload Custom Image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageFileUpload}
                  className="hidden"
                />
              </label>
            </div>

            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://..."
              className="w-full px-3 py-1.5 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400"
            />

            <div className="flex flex-wrap gap-2 pt-1">
              {PRESET_ACHIEVEMENT_IMAGES.map((p, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setImageUrl(p.url)}
                  className={`px-2 py-1 rounded-lg text-[10px] border flex items-center gap-1 transition-colors ${
                    imageUrl === p.url
                      ? 'bg-amber-500/20 border-amber-400 text-amber-200 font-semibold'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <ImageIcon className="w-3 h-3 text-amber-400" />
                  <span>{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Generated Copy Helper */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                <Wand2 className="w-3.5 h-3.5" />
                <span>Auto-Formatted Professional Copy:</span>
              </div>
              <label className="flex items-center gap-1.5 text-[11px] text-slate-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoGenerate}
                  onChange={(e) => setAutoGenerate(e.target.checked)}
                  className="rounded border-slate-700 text-amber-500 focus:ring-0"
                />
                <span>Sync with standard formula</span>
              </label>
            </div>

            <textarea
              rows={3}
              value={description}
              onChange={(e) => {
                setAutoGenerate(false);
                setDescription(e.target.value);
              }}
              className="w-full p-3 text-xs rounded-xl bg-[#070b14] border border-slate-700 text-slate-200 focus:outline-none focus:border-amber-400 font-editorial leading-relaxed"
            />

            <p className="text-[10px] text-slate-500">
              Matches official TAPAS Committee accreditation format: “TAPAS Committee proudly earned recognition for [achievement] at [event/organization]...”
            </p>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-700 hover:bg-slate-800 text-slate-300 text-xs font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs shadow-lg shadow-amber-950/40 hover:brightness-110 flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Publish to Achievement Gallery</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
