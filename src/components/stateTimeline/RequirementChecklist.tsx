import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { CheckSquare, Square, Smartphone, Home, Clock, QrCode, ShieldCheck } from 'lucide-react';

export const RequirementChecklist: React.FC = () => {
  const { t } = useLanguage();
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: false,
    3: false,
  });

  const toggleCheck = (idx: number) => {
    setCheckedItems(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const checklist = [
    {
      icon: Smartphone,
      title: t.timeline.checklistItem1,
      sub: t.timeline.checklistItem1Sub,
    },
    {
      icon: Home,
      title: t.timeline.checklistItem2,
      sub: t.timeline.checklistItem2Sub,
    },
    {
      icon: Clock,
      title: t.timeline.checklistItem3,
      sub: t.timeline.checklistItem3Sub,
    },
    {
      icon: ShieldCheck,
      title: t.timeline.checklistItem4,
      sub: t.timeline.checklistItem4Sub,
    },
  ];

  const totalChecked = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div className="rounded-3xl bg-navy-900/80 border border-navy-800 p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
            <CheckSquare className="w-5 h-5 text-civic-teal-400" />
            <span>{t.timeline.checklistTitle}</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {t.timeline.checklistSub}
          </p>
        </div>

        <div className="px-3.5 py-1.5 rounded-full bg-navy-950 text-xs font-bold border border-navy-800 text-slate-300">
          {t.timeline.checklistReady}: <span className="text-civic-teal-400 font-extrabold">{totalChecked} of 4</span>
        </div>
      </div>

      {/* Interactive Checklist Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {checklist.map((item, idx) => {
          const isChecked = Boolean(checkedItems[idx]);
          return (
            <div
              key={idx}
              onClick={() => toggleCheck(idx)}
              className={`p-4 rounded-2xl border flex items-start gap-3.5 cursor-pointer transition-all duration-150 ${
                isChecked
                  ? 'bg-navy-950/90 border-civic-teal-500/50 shadow-sm'
                  : 'bg-navy-950/40 border-navy-800/80 opacity-75 hover:opacity-100'
              }`}
            >
              <button className="mt-0.5 text-civic-teal-400 shrink-0">
                {isChecked ? (
                  <CheckSquare className="w-5 h-5 text-civic-teal-400" />
                ) : (
                  <Square className="w-5 h-5 text-slate-500" />
                )}
              </button>

              <div className="space-y-0.5">
                <div className={`text-xs sm:text-sm font-bold ${isChecked ? 'text-white' : 'text-slate-300'}`}>
                  {item.title}
                </div>
                <div className="text-[11px] text-slate-400 leading-relaxed">
                  {item.sub}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Crucial SE ID Takeaway Banner */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-civic-blue-900/40 via-navy-900 to-civic-teal-900/40 border border-civic-blue-500/40 flex items-start gap-4">
        <div className="p-2.5 rounded-xl bg-civic-blue-500/20 text-civic-blue-400 shrink-0">
          <QrCode className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wide flex items-center gap-2">
            <span>{t.timeline.seIdGoldenRule}</span>
            <span className="px-2 py-0.5 rounded-full bg-civic-saffron-500/20 text-civic-saffron-300 text-[10px] border border-civic-saffron-500/30">
              {t.timeline.seIdCrucialTag}
            </span>
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed">
            {t.timeline.seIdNote}
          </p>
        </div>
      </div>
    </div>
  );
};
