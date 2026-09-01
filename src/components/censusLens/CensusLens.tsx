import React, { useState } from 'react';
import { DEMO_CENSUS_LENS_DATA, CENSUS_LENS_CATEGORIES } from '../../data/sampleCensusData';
import { useLanguage } from '../../context/LanguageContext';
import { InteractiveChart } from './InteractiveChart';
import { CivicImpactCards } from './CivicImpactCards';
import { BarChart3, AlertCircle, MapPin, Lightbulb } from 'lucide-react';

export const CensusLens: React.FC = () => {
  const { t } = useLanguage();
  const [selectedStateId, setSelectedStateId] = useState<string>('all-india');
  const [selectedCategory, setSelectedCategory] = useState<string>('clean_cooking_fuel');

  const availableStates = Object.keys(DEMO_CENSUS_LENS_DATA);
  const stateData = DEMO_CENSUS_LENS_DATA[selectedStateId] || DEMO_CENSUS_LENS_DATA['all-india'];
  const currentMetric = stateData.metrics[selectedCategory] || stateData.metrics['clean_cooking_fuel'];

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-civic-teal-500/10 text-civic-teal-300 text-xs font-bold uppercase tracking-wider border border-civic-teal-500/20">
          <BarChart3 className="w-3.5 h-3.5" />
          <span>{t.lens.tag}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {t.lens.heading}
        </h2>
        <p className="text-sm sm:text-base text-slate-300">
          {t.lens.subheading}
        </p>

        {/* Mandatory Explicit Sample Data Label */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy-900 border border-amber-500/30 text-amber-300 text-xs font-semibold">
          <AlertCircle className="w-4 h-4 text-amber-400" />
          <span>{t.lens.disclaimer}</span>
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="rounded-3xl bg-navy-900/90 border border-navy-700 p-6 shadow-xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* State Dropdown */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-civic-saffron-400" />
              <span>{t.lens.selectState}</span>
            </label>
            <select
              value={selectedStateId}
              onChange={(e) => setSelectedStateId(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-navy-950/90 border border-navy-700 text-white font-semibold text-sm focus:outline-none focus:border-civic-teal-500 transition-colors"
            >
              {availableStates.map((stId) => (
                <option key={stId} value={stId} className="bg-navy-950 text-white">
                  {DEMO_CENSUS_LENS_DATA[stId].stateName}
                </option>
              ))}
            </select>
          </div>

          {/* Region Quick Info */}
          <div className="p-3.5 rounded-2xl bg-navy-950/60 border border-navy-800 text-xs text-slate-400">
            {t.lens.comparingWith}
          </div>
        </div>

        {/* Category Pills */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            {t.lens.selectCategory}
          </div>
          <div className="flex flex-wrap gap-2">
            {CENSUS_LENS_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-150 ${
                    isSelected
                      ? 'bg-gradient-to-r from-civic-teal-600 to-civic-blue-600 text-white shadow-md shadow-civic-teal-600/20 scale-[1.02]'
                      : 'bg-navy-950 text-slate-300 hover:text-white border border-navy-800 hover:border-navy-700'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Visual Section: Interactive Chart + Dynamic Insight Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left: Interactive SVG Chart (7 cols) */}
        <div className="lg:col-span-7">
          <InteractiveChart metric={currentMetric} stateName={stateData.stateName} />
        </div>

        {/* Right: Dynamic Insight & Use Case Card (5 cols) */}
        <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-navy-900 via-navy-900 to-navy-950 border border-navy-700 p-6 sm:p-7 flex flex-col justify-between shadow-2xl space-y-6">
          <div className="space-y-4">
            {/* Dynamic Local Insight */}
            <div className="p-4 rounded-2xl bg-civic-teal-950/40 border border-civic-teal-500/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-extrabold text-civic-teal-300 uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 text-civic-teal-400" />
                <span>{t.lens.dynamicInsightTitle}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {currentMetric.civicInsight}
              </p>
            </div>

            {/* Civic Use Case */}
            <div className="p-4 rounded-2xl bg-navy-950/80 border border-navy-800 space-y-2">
              <div className="text-xs font-extrabold text-civic-saffron-300 uppercase tracking-wider">
                {t.lens.civicUseTitle}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentMetric.civicUseCase}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-navy-800/80 text-[11px] text-slate-400">
            {t.lens.footnote}
          </div>
        </div>
      </div>

      {/* 4 Civic Impact Superpower Cards */}
      <CivicImpactCards />
    </section>
  );
};
