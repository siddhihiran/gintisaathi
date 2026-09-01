import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Sparkles } from 'lucide-react';

interface PromptPillsProps {
  onSelectPrompt: (promptText: string) => void;
  disabled?: boolean;
}

export const PromptPills: React.FC<PromptPillsProps> = ({ onSelectPrompt, disabled }) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-2">
      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 text-civic-saffron-400" />
        <span>{t.chat.suggestedHeading}</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {t.chat.prompts.map((prompt, idx) => (
          <button
            key={idx}
            disabled={disabled}
            onClick={() => onSelectPrompt(prompt)}
            className="px-3.5 py-2 rounded-xl bg-navy-950/80 hover:bg-navy-900 border border-navy-700/80 hover:border-civic-teal-500/60 text-xs text-slate-200 hover:text-white transition-all text-left shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99]"
          >
            "{prompt}"
          </button>
        ))}
      </div>
    </div>
  );
};
