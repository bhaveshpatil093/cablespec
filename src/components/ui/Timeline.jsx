import React from 'react';
import { Check } from 'lucide-react';

/**
 * CableSpec Timeline Step Item Component
 */
export function TimelineItem({ stepNumber, name, status = 'Completed', timestamp, isSelected = false, onClick }) {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center justify-between p-3 rounded-lg border font-mono text-xs cursor-pointer transition-all ${
        isSelected 
          ? 'bg-[#162436] border-cyan-400 text-white shadow-sm' 
          : 'bg-[#0d1624] border-[#1d2e45] text-slate-300 hover:border-slate-700'
      }`}
    >
      <div className="flex items-center space-x-3">
        <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
          isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-[#2563eb] text-white'
        }`}>
          {stepNumber}
        </div>
        <span className="font-bold">{name}</span>
      </div>

      <div className="flex items-center space-x-4">
        <span className="text-emerald-400 font-bold text-[11px]">
          {status}
        </span>
        {timestamp && (
          <span className="typo-metadata text-[10px] hidden sm:inline">
            {timestamp}
          </span>
        )}
        <div className="w-5 h-5 rounded-full border border-emerald-500/60 bg-emerald-950/40 flex items-center justify-center text-emerald-400">
          <Check className="w-3 h-3 text-emerald-400" />
        </div>
      </div>
    </div>
  );
}
