import React from 'react';

/**
 * Panel Card (Outer Container Card)
 */
export function PanelCard({ children, className = '', title = null, subtitle = null, action = null }) {
  return (
    <div className={`dashboard-panel p-6 sm:p-8 space-y-4 ${className}`}>
      {(title || subtitle || action) && (
        <div className="flex items-center justify-between border-b border-[#1d2e45] pb-3 mb-2">
          <div>
            {subtitle && <span className="typo-tech-label text-slate-400 block mb-0.5">{subtitle}</span>}
            {title && <h3 className="typo-subsection-title text-white">{title}</h3>}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </div>
  );
}

/**
 * Dashboard Card (Inner Element Card)
 */
export function DashboardCard({ children, className = '', highlight = false }) {
  return (
    <div className={`dashboard-card p-4 transition-all duration-200 ${
      highlight ? 'border-cyan-500/60 bg-[#162436]' : ''
    } ${className}`}>
      {children}
    </div>
  );
}

/**
 * Machine Module Card
 */
export function MachineModuleCard({ title, icon: Icon, spec, description, className = '' }) {
  return (
    <div className={`dashboard-panel p-5 space-y-3 ${className}`}>
      <div className="flex items-center space-x-3 border-b border-[#1d2e45] pb-3">
        {Icon && (
          <div className="w-10 h-10 rounded-lg bg-[#0d1624] border border-[#1d2e45] flex items-center justify-center text-cyan-400">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <div>
          <span className="typo-tech-label text-cyan-400 block">MACHINE MODULE</span>
          <h4 className="font-mono font-bold text-sm text-white">{title}</h4>
        </div>
      </div>
      
      {description && <p className="typo-body text-xs text-slate-300">{description}</p>}
      
      {spec && (
        <div className="p-2.5 rounded bg-[#0d1624] border border-[#1d2e45] typo-metadata text-cyan-300">
          {spec}
        </div>
      )}
    </div>
  );
}

/**
 * Reference Card
 */
export function ReferenceCard({ code, region, title, requirements = [], className = '' }) {
  return (
    <div className={`dashboard-panel p-5 space-y-3 ${className}`}>
      <div className="flex justify-between items-center border-b border-[#1d2e45] pb-2">
        <span className="typo-status-badge">{region} STANDARD</span>
        <span className="typo-reference font-bold text-sm">{code}</span>
      </div>
      <p className="typo-body text-xs font-semibold text-slate-200">{title}</p>
      {requirements.length > 0 && (
        <ul className="space-y-1.5 pt-1">
          {requirements.map((req, i) => (
            <li key={i} className="typo-body text-[11px] text-slate-400 flex items-start gap-2">
              <span className="text-cyan-400 font-bold">•</span>
              <span>{req}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
