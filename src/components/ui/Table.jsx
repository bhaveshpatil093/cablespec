import React from 'react';

/**
 * Standardized Engineering Table Component
 */
export function Table({ headers = [], data = [], renderRow, className = '' }) {
  return (
    <div className={`overflow-x-auto rounded-xl border border-[#1d2e45] ${className}`}>
      <table className="w-full text-left border-collapse font-mono text-xs">
        <thead>
          <tr className="border-b border-[#1d2e45] bg-[#0d1624] text-cyan-400">
            {headers.map((h, idx) => (
              <th key={idx} className="p-3 font-bold uppercase tracking-wider">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#1d2e45]/60 bg-[#121e2d]">
          {data.map((row, idx) => renderRow(row, idx))}
        </tbody>
      </table>
    </div>
  );
}
