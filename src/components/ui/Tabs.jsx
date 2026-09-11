import React from 'react';

/**
 * Standardized Tabs Control Component
 */
export function Tabs({ tabs = [], activeTab, onChange, className = '' }) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-2 font-mono text-xs ${className}`}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded font-bold transition-all border ${
              isActive
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md'
                : 'bg-[#121e2d] text-slate-300 border-[#1d2e45] hover:bg-[#162436] hover:text-white'
            }`}
          >
            {Icon && <Icon className="w-3.5 h-3.5" />}
            <span>{tab.label || tab.name}</span>
          </button>
        );
      })}
    </div>
  );
}
