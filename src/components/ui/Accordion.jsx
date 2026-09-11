import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Standardized Expandable Accordion Panel Component
 */
export function Accordion({ items = [], className = '' }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className={`space-y-2 font-mono text-xs ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="rounded-lg bg-[#121e2d] border border-[#1d2e45] overflow-hidden">
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between p-4 text-left font-bold text-white hover:bg-[#162436] transition-colors"
            >
              <span>{item.title}</span>
              <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`} />
            </button>
            {isOpen && (
              <div className="p-4 border-t border-[#1d2e45] bg-[#0d1624] typo-body text-slate-300">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
