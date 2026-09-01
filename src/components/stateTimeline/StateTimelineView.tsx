import React, { useState } from 'react';
import { DEMO_STATE_SCHEDULES } from '../../data/stateSchedule';
import { StateSelector } from './StateSelector';
import { TimelineCard } from './TimelineCard';
import { RequirementChecklist } from './RequirementChecklist';
import { useLanguage } from '../../context/LanguageContext';
import { Clock, MapPin } from 'lucide-react';

export const StateTimelineView: React.FC = () => {
  const { t } = useLanguage();
  const [selectedStateId, setSelectedStateId] = useState<string>('andhra-pradesh');

  const selectedState = DEMO_STATE_SCHEDULES.find((s) => s.id === selectedStateId) || DEMO_STATE_SCHEDULES[0];

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-civic-saffron-500/10 text-civic-saffron-300 text-xs font-bold uppercase tracking-wider border border-civic-saffron-500/20">
          <Clock className="w-3.5 h-3.5" />
          <span>{t.features.timelineTag}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t.nav.timeline}
        </h2>
        <p className="text-sm sm:text-base text-slate-300">
          {t.features.timelineDesc}
        </p>
      </div>

      {/* State Selector */}
      <div className="rounded-3xl bg-navy-900/80 border border-navy-800 p-6">
        <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-civic-saffron-400" />
          <span>{t.timeline.stateSelectorLabel}</span>
        </div>
        <StateSelector
          states={DEMO_STATE_SCHEDULES}
          selectedStateId={selectedStateId}
          onSelectState={setSelectedStateId}
        />
      </div>

      {/* State Details Timeline Card */}
      <TimelineCard stateItem={selectedState} />

      {/* Readiness Checklist */}
      <RequirementChecklist />
    </section>
  );
};
