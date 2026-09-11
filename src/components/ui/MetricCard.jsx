import React from 'react';

/**
 * CableSpec Metric Telemetry Card Component
 */
export function MetricCard({ label, value, unit = null, subtext = null, color = 'cyan', className = '' }) {
  const colorStyles = {
    white: "text-white",
    cyan: "text-cyan-400",
    emerald: "text-emerald-400",
    amber: "text-amber-400",
    purple: "text-purple-400"
  };

  return (
    <div className={`dashboard-card p-4 space-y-1 ${className}`}>
      <span className="typo-tech-label text-slate-400 block">{label}</span>
      <div className="flex items-baseline space-x-1">
        <span className={`typo-metric ${colorStyles[color]}`}>{value}</span>
        {unit && <span className="font-mono text-xs text-slate-400 font-normal">{unit}</span>}
      </div>
      {subtext && <p className="typo-metadata text-[10px]">{subtext}</p>}
    </div>
  );
}
