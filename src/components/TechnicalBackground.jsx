import React from 'react';

/**
 * Subtle Global Technical Blueprint Background Component
 */
export default function TechnicalBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#080d16]">
      {/* 1. Fine Orthogonal Blueprint Grid */}
      <div className="absolute inset-0 bg-grid-blueprint opacity-60"></div>

      {/* 2. Slow Restrained Vertical Laser Scanline */}
      <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent shadow-[0_0_15px_rgba(56,189,248,0.2)] animate-scanline-slow"></div>

      {/* 3. SVG Technical Traces, Coordinate Ticks, and Watermarks */}
      <svg className="absolute inset-0 w-full h-full text-cyan-500/10" fill="none" xmlns="http://www.w3.org/2000/svg">
        
        {/* Top-Left Circuit Trace */}
        <g stroke="currentColor" strokeWidth="1">
          <path d="M0 120 H200 L260 180 H450" strokeDasharray="4 4" />
          <circle cx="200" cy="120" r="3" fill="currentColor" />
          <circle cx="260" cy="180" r="3" fill="currentColor" />
          <circle cx="450" cy="180" r="4" fill="#38bdf8" className="animate-pulse" />
        </g>

        {/* Top-Right Technical Coordinates */}
        <g textAnchor="end" className="font-mono text-[9px] fill-slate-700">
          <text x="98%" y="40">CAD-SPEC-LAYER: 01</text>
          <text x="98%" y="54">X: +142.85mm  Y: -088.20mm</text>
          <text x="98%" y="68">TOL: ±0.015mm  IEC-60811</text>
        </g>

        {/* Top-Right Crosshair Mark */}
        <g stroke="#1d2e45" strokeWidth="1">
          <line x1="95%" y1="90" x2="95%" y2="120" />
          <line x1="94%" y1="105" x2="96%" y2="105" />
          <circle cx="95%" cy="105" r="8" strokeDasharray="2 2" />
        </g>

        {/* Left Side Watermark: Cable Cross-Section Outline */}
        <g transform="translate(60, 420)" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4">
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="70" />
          <circle cx="65" cy="65" r="28" />
          <circle cx="135" cy="65" r="28" />
          <circle cx="65" cy="135" r="28" />
          <circle cx="135" cy="135" r="28" />
        </g>

        {/* Right Side Watermark: Dumbbell Specimen Outline */}
        <g transform="translate(1100, 320)" stroke="currentColor" strokeWidth="1" opacity="0.3">
          <path d="M10 25 H50 C55 25, 60 33, 70 33 H170 C180 33, 185 25, 190 25 H230 V55 H190 C185 55, 180 47, 170 47 H70 C60 47, 55 55, 50 55 H10 Z" fill="none" strokeDasharray="4 4" />
          <line x1="70" y1="40" x2="170" y2="40" strokeDasharray="2 2" />
          <text x="120" y="70" fill="#475569" fontSize="9" fontFamily="monospace" textAnchor="middle">IEC TYPE 2 SILHOUETTE</text>
        </g>

        {/* Bottom-Left Cable Routing Lines */}
        <g stroke="currentColor" strokeWidth="1">
          <path d="M-50 850 L120 850 L180 790 H350 L410 850 H600" />
          <circle cx="180" cy="790" r="3" fill="#38bdf8" />
          <circle cx="350" cy="790" r="3" fill="#38bdf8" />
          <circle cx="410" cy="850" r="3" fill="#10b981" />
        </g>

        {/* Bottom-Right Crosshair */}
        <g stroke="#1d2e45" strokeWidth="1">
          <line x1="5%" y1="92%" x2="5%" y2="96%" />
          <line x1="4%" y1="94%" x2="6%" y2="94%" />
        </g>

      </svg>
    </div>
  );
}
