import React from 'react';
import { X } from 'lucide-react';

/**
 * Standardized Engineering Modal Window Component
 */
export function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#121e2d] border border-[#1d2e45] rounded-2xl shadow-2xl overflow-hidden space-y-4 p-6">
        <div className="flex items-center justify-between border-b border-[#1d2e45] pb-3">
          <h3 className="typo-subsection-title text-white">{title}</h3>
          <button 
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-[#0d1624]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
