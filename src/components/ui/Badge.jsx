import React from 'react';
import { CheckCircle2, XCircle, Check } from 'lucide-react';

/**
 * Status Badge Component
 */
export function StatusBadge({ children, variant = 'pass', className = '' }) {
  const variantStyles = {
    pass: "bg-emerald-950/60 text-emerald-400 border border-emerald-500/60",
    fail: "bg-red-950/60 text-red-400 border border-red-500/60",
    warning: "bg-amber-950/60 text-amber-400 border border-amber-500/60",
    info: "bg-[#0d1624] text-cyan-400 border border-[#1d2e45]"
  };

  return (
    <span className={`typo-status-badge ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
}

/**
 * PASS/FAIL Indicator Tag
 */
export function PassFailIndicator({ status = 'PASS', label = null }) {
  const isPass = status === 'PASS' || status === 'COMPLETED' || status === true;
  return (
    <div className="flex items-center justify-between font-mono text-xs">
      {label && <span className="text-slate-400">{label}:</span>}
      <span className={`font-bold flex items-center gap-1 ${
        isPass ? 'text-emerald-400' : 'text-red-400'
      }`}>
        {isPass ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <XCircle className="w-3.5 h-3.5 text-red-400" />}
        <span>{isPass ? 'PASS' : 'FAIL'}</span>
      </span>
    </div>
  );
}

/**
 * Circular Verification Gauge Ring
 */
export function VerificationRing({ status = 'PASS', label = 'PASS VERIFIED' }) {
  const isPass = status === 'PASS';
  return (
    <div className="w-14 h-14 rounded-full border-2 border-emerald-500 bg-emerald-950/40 flex flex-col items-center justify-center text-center">
      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
      <span className="typo-status-badge border-0 bg-transparent text-emerald-400 px-0 text-[10px]">{status}</span>
    </div>
  );
}
