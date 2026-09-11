import React, { useState } from 'react';

/**
 * Standardized Tooltip Hover Component
 */
export function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded bg-[#0d1624] border border-[#1d2e45] text-cyan-300 typo-metadata text-[10px] whitespace-nowrap shadow-xl z-30">
          {text}
        </div>
      )}
    </div>
  );
}
