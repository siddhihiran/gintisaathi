import React, { useState } from 'react';
import { DemographicMetric } from '../../types/census';
import { useLanguage } from '../../context/LanguageContext';
import { BarChart3, PieChart } from 'lucide-react';

interface InteractiveChartProps {
  metric: DemographicMetric;
  stateName: string;
}

export const InteractiveChart: React.FC<InteractiveChartProps> = ({ metric, stateName }) => {
  const { t } = useLanguage();
  const [chartType, setChartType] = useState<'donut' | 'bar'>('donut');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const total = metric.dataPoints.reduce((sum, p) => sum + p.value, 0);

  // SVG Donut Calculations
  const size = 260;
  const strokeWidth = 36;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  let cumulativePercent = 0;

  return (
    <div className="rounded-3xl bg-navy-950/80 border border-navy-800 p-6 flex flex-col justify-between space-y-6">
      {/* Chart Top Controls */}
      <div className="flex items-center justify-between gap-4 pb-3 border-b border-navy-800">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-civic-teal-400">
            {metric.category}
          </span>
          <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
            {metric.name} ({stateName})
          </h4>
        </div>

        <div className="flex items-center gap-1 p-1 bg-navy-900 rounded-xl border border-navy-800">
          <button
            onClick={() => setChartType('donut')}
            className={`p-1.5 rounded-lg text-xs transition-colors ${
              chartType === 'donut' ? 'bg-civic-teal-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
            title="Donut Chart View"
          >
            <PieChart className="w-4 h-4" />
          </button>
          <button
            onClick={() => setChartType('bar')}
            className={`p-1.5 rounded-lg text-xs transition-colors ${
              chartType === 'bar' ? 'bg-civic-teal-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
            title="Bar Chart View"
          >
            <BarChart3 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Chart Graphic */}
      <div className="flex flex-col md:flex-row items-center justify-around gap-6 py-2">
        {chartType === 'donut' ? (
          <div className="relative flex items-center justify-center">
            <svg width={size} height={size} className="transform -rotate-90">
              {metric.dataPoints.map((dp, idx) => {
                const percent = (dp.value / total) * 100;
                const strokeDasharray = `${(percent / 100) * circumference} ${circumference}`;
                const strokeDashoffset = -((cumulativePercent / 100) * circumference);
                cumulativePercent += percent;
                const isHovered = hoveredIndex === idx;

                return (
                  <circle
                    key={idx}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="transparent"
                    stroke={dp.color || '#3b82f6'}
                    strokeWidth={isHovered ? strokeWidth + 6 : strokeWidth}
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    className="transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />
                );
              })}
            </svg>

            {/* Inner Center Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
              <span className="text-2xl font-black text-white">
                {hoveredIndex !== null ? `${metric.dataPoints[hoveredIndex].value}%` : `${metric.dataPoints[0].value}%`}
              </span>
              <span className="text-[11px] text-slate-400 max-w-[90px] truncate">
                {hoveredIndex !== null ? metric.dataPoints[hoveredIndex].label : metric.dataPoints[0].label}
              </span>
            </div>
          </div>
        ) : (
          <div className="w-full space-y-3">
            {metric.dataPoints.map((dp, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-semibold">{dp.label}</span>
                  <span className="font-mono font-bold text-white">{dp.value}%</span>
                </div>
                <div className="h-3 w-full bg-navy-900 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${dp.value}%`,
                      backgroundColor: dp.color || '#3b82f6',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Legend */}
        <div className="w-full md:w-56 space-y-2">
          <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pb-1">
            {t.lens.breakdownTitle}
          </div>
          {metric.dataPoints.map((dp, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`p-2 rounded-xl flex items-center justify-between text-xs transition-colors cursor-pointer ${
                hoveredIndex === idx ? 'bg-navy-900 border border-navy-700' : 'hover:bg-navy-900/50'
              }`}
            >
              <div className="flex items-center gap-2 truncate">
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: dp.color || '#3b82f6' }}
                />
                <span className="text-slate-300 truncate">{dp.label}</span>
              </div>
              <span className="font-mono font-bold text-white ml-2">{dp.value}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* National Average Comparison Badge */}
      <div className="p-3.5 rounded-2xl bg-navy-900 border border-navy-800 flex items-center justify-between text-xs text-slate-300">
        <span>{t.lens.nationalAvg}: <strong className="text-civic-saffron-400">{metric.nationalAverage}%</strong></span>
        <span>{t.lens.primaryIndicator}: <strong className="text-civic-teal-400">{metric.dataPoints[0].value}%</strong></span>
      </div>
    </div>
  );
};
