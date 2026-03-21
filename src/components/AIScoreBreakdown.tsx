import React from 'react';
import { cn } from './UI';
import type { AIScoreMetric } from '../utils/aiScore';
import { formatPercent } from '../utils/aiScore';

function barColor(metricKey: AIScoreMetric['key']): string {
  switch (metricKey) {
    case 'village_confidence':
      return 'bg-emerald-500';
    case 'library_similarity':
      return 'bg-sky-500';
    case 'historical_match_coverage':
      return 'bg-violet-500';
    case 'award_fit':
      return 'bg-amber-500';
    default:
      return 'bg-emerald-500';
  }
}

export const AIScoreBreakdown: React.FC<{
  overall01: number;
  metrics: AIScoreMetric[];
  className?: string;
}> = ({ overall01, metrics, className }) => {
  return (
    <div className={cn('p-4 rounded-2xl bg-white/5 border border-white/10', className)}>
      <div className="flex items-end justify-between gap-4 mb-4">
        <div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Overall AI Score</div>
          <div className="text-2xl font-extrabold text-white">{formatPercent(overall01, 1)}</div>
        </div>
        <div className="text-xs text-slate-400 text-right leading-snug">
          Weighted composite from available signals.
        </div>
      </div>

      <div className="space-y-3">
        {metrics.map((m) => {
          const pct = m.value01 === null ? null : Math.max(0, Math.min(1, m.value01)) * 100;
          return (
            <div key={m.key} className="space-y-1">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs font-bold text-slate-200">{m.label}</div>
                <div className="text-[11px] font-semibold text-slate-300 tabular-nums">
                  {formatPercent(m.value01, 0)}
                </div>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className={cn('h-full rounded-full transition-all', barColor(m.key), m.value01 === null && 'opacity-0')}
                  style={{ width: `${pct ?? 0}%` }}
                />
              </div>
              {m.description && <div className="text-[11px] text-slate-500">{m.description}</div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

