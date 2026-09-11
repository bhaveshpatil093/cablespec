import React from 'react';
import { Search } from 'lucide-react';

/**
 * Standardized Search Component
 */
export function SearchInput({ value, onChange, placeholder = "Search technical parameters...", className = '' }) {
  return (
    <div className={`relative font-mono text-xs ${className}`}>
      <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-[#0d1624] border border-[#1d2e45] rounded-lg pl-9 pr-4 py-2 text-white focus:outline-none focus:border-cyan-400 placeholder:text-slate-500"
      />
    </div>
  );
}
