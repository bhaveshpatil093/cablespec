import React from 'react';

/**
 * Multi-strand Concentric Cable Logo Emblem
 * Matching top-left logo of the Digital Specimen Passport app
 */
export function CableLogo({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer Armor Sheath */}
      <circle cx="50" cy="50" r="46" stroke="#38bdf8" strokeWidth="3" fill="#0d1624" />
      <circle cx="50" cy="50" r="41" stroke="#1d2e45" strokeWidth="2" strokeDasharray="3 3" />
      
      {/* 4 Conductor Cores */}
      {/* Core 1 (Top Left) */}
      <circle cx="35" cy="35" r="12" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="2.5" fill="#e2e8f0" />
      <circle cx="38" cy="32" r="2.5" fill="#e2e8f0" />
      <circle cx="32" cy="38" r="2.5" fill="#e2e8f0" />
      <circle cx="38" cy="38" r="2.5" fill="#e2e8f0" />
      <circle cx="35" cy="35" r="2.5" fill="#cbd5e1" />

      {/* Core 2 (Top Right) */}
      <circle cx="65" cy="35" r="12" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
      <circle cx="62" cy="32" r="2.5" fill="#e2e8f0" />
      <circle cx="68" cy="32" r="2.5" fill="#e2e8f0" />
      <circle cx="62" cy="38" r="2.5" fill="#e2e8f0" />
      <circle cx="68" cy="38" r="2.5" fill="#e2e8f0" />
      <circle cx="65" cy="35" r="2.5" fill="#cbd5e1" />

      {/* Core 3 (Bottom Left) */}
      <circle cx="35" cy="65" r="12" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
      <circle cx="32" cy="62" r="2.5" fill="#e2e8f0" />
      <circle cx="38" cy="62" r="2.5" fill="#e2e8f0" />
      <circle cx="32" cy="68" r="2.5" fill="#e2e8f0" />
      <circle cx="38" cy="68" r="2.5" fill="#e2e8f0" />
      <circle cx="35" cy="65" r="2.5" fill="#cbd5e1" />

      {/* Core 4 (Bottom Right) */}
      <circle cx="65" cy="65" r="12" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
      <circle cx="62" cy="62" r="2.5" fill="#e2e8f0" />
      <circle cx="68" cy="62" r="2.5" fill="#e2e8f0" />
      <circle cx="62" cy="68" r="2.5" fill="#e2e8f0" />
      <circle cx="68" cy="68" r="2.5" fill="#e2e8f0" />
      <circle cx="65" cy="65" r="2.5" fill="#cbd5e1" />

      {/* Central Filler Strand */}
      <circle cx="50" cy="50" r="5" fill="#38bdf8" opacity="0.6" />
    </svg>
  );
}

/**
 * Macro Cable Cross-Section Graphic with Millimeter Scale Ruler
 * Exactly matching the passport phone UI screen
 */
export function CableCrossSection({ className = "w-full h-auto", cableLabel = "4-CORE ALUMINIUM CABLE" }) {
  return (
    <div className={`relative flex flex-col items-center justify-center p-4 bg-[#0d1624] rounded-xl border border-[#1d2e45] ${className}`}>
      
      {/* Background Radial Grid */}
      <div className="relative w-64 h-64 flex items-center justify-center">
        
        {/* Fine Radial Degree Marking Overlay */}
        <svg className="absolute inset-0 w-full h-full text-slate-800 pointer-events-none" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" stroke="#1d2e45" strokeWidth="1" strokeDasharray="2 4" />
          <circle cx="100" cy="100" r="75" stroke="#1d2e45" strokeWidth="1" strokeDasharray="1 3" />
          <circle cx="100" cy="100" r="50" stroke="#1d2e45" strokeWidth="1" />
          <line x1="100" y1="0" x2="100" y2="200" stroke="#1d2e45" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="0" y1="100" x2="200" y2="100" stroke="#1d2e45" strokeWidth="1" strokeDasharray="2 2" />
        </svg>

        {/* Multi-Core Cable Cross Section SVG */}
        <svg className="w-52 h-52 relative z-10 shadow-2xl" viewBox="0 0 200 200" fill="none">
          {/* Outer Black Rubber Jacket */}
          <circle cx="100" cy="100" r="88" fill="#182232" stroke="#2a3f5a" strokeWidth="4" />
          <circle cx="100" cy="100" r="82" fill="#0f1926" stroke="#1b2a3c" strokeWidth="3" />

          {/* Inner Bedding / Filler Layer */}
          <circle cx="100" cy="100" r="76" fill="#141e2c" />

          {/* 4 Phase Core Insulations & Strands */}

          {/* Core 1 (Brown/Copper Phase - Top Left) */}
          <g transform="translate(68, 68)">
            <circle cx="0" cy="0" r="32" fill="#9a3412" stroke="#ea580c" strokeWidth="2" />
            {/* Stranded Aluminum Wires */}
            <circle cx="0" cy="0" r="6" fill="#cbd5e1" stroke="#475569" />
            <circle cx="-12" cy="0" r="5" fill="#cbd5e1" stroke="#475569" />
            <circle cx="12" cy="0" r="5" fill="#cbd5e1" stroke="#475569" />
            <circle cx="0" cy="-12" r="5" fill="#cbd5e1" stroke="#475569" />
            <circle cx="0" cy="12" r="5" fill="#cbd5e1" stroke="#475569" />
            <circle cx="-9" cy="-9" r="5" fill="#cbd5e1" stroke="#475569" />
            <circle cx="9" cy="-9" r="5" fill="#cbd5e1" stroke="#475569" />
            <circle cx="-9" cy="9" r="5" fill="#cbd5e1" stroke="#475569" />
            <circle cx="9" cy="9" r="5" fill="#cbd5e1" stroke="#475569" />
          </g>

          {/* Core 2 (Grey Phase - Top Right) */}
          <g transform="translate(132, 68)">
            <circle cx="0" cy="0" r="32" fill="#334155" stroke="#64748b" strokeWidth="2" />
            <circle cx="0" cy="0" r="6" fill="#e2e8f0" stroke="#475569" />
            <circle cx="-12" cy="0" r="5" fill="#e2e8f0" stroke="#475569" />
            <circle cx="12" cy="0" r="5" fill="#e2e8f0" stroke="#475569" />
            <circle cx="0" cy="-12" r="5" fill="#e2e8f0" stroke="#475569" />
            <circle cx="0" cy="12" r="5" fill="#e2e8f0" stroke="#475569" />
            <circle cx="-9" cy="-9" r="5" fill="#e2e8f0" stroke="#475569" />
            <circle cx="9" cy="-9" r="5" fill="#e2e8f0" stroke="#475569" />
            <circle cx="-9" cy="9" r="5" fill="#e2e8f0" stroke="#475569" />
            <circle cx="9" cy="9" r="5" fill="#e2e8f0" stroke="#475569" />
          </g>

          {/* Core 3 (Blue Neutral Phase - Bottom Left) */}
          <g transform="translate(68, 132)">
            <circle cx="0" cy="0" r="32" fill="#1e40af" stroke="#3b82f6" strokeWidth="2" />
            <circle cx="0" cy="0" r="6" fill="#cbd5e1" stroke="#475569" />
            <circle cx="-12" cy="0" r="5" fill="#cbd5e1" stroke="#475569" />
            <circle cx="12" cy="0" r="5" fill="#cbd5e1" stroke="#475569" />
            <circle cx="0" cy="-12" r="5" fill="#cbd5e1" stroke="#475569" />
            <circle cx="0" cy="12" r="5" fill="#cbd5e1" stroke="#475569" />
            <circle cx="-9" cy="-9" r="5" fill="#cbd5e1" stroke="#475569" />
            <circle cx="9" cy="-9" r="5" fill="#cbd5e1" stroke="#475569" />
            <circle cx="-9" cy="9" r="5" fill="#cbd5e1" stroke="#475569" />
            <circle cx="9" cy="9" r="5" fill="#cbd5e1" stroke="#475569" />
          </g>

          {/* Core 4 (Grey Phase - Bottom Right) */}
          <g transform="translate(132, 132)">
            <circle cx="0" cy="0" r="32" fill="#1e293b" stroke="#475569" strokeWidth="2" />
            <circle cx="0" cy="0" r="6" fill="#e2e8f0" stroke="#475569" />
            <circle cx="-12" cy="0" r="5" fill="#e2e8f0" stroke="#475569" />
            <circle cx="12" cy="0" r="5" fill="#e2e8f0" stroke="#475569" />
            <circle cx="0" cy="-12" r="5" fill="#e2e8f0" stroke="#475569" />
            <circle cx="0" cy="12" r="5" fill="#e2e8f0" stroke="#475569" />
            <circle cx="-9" cy="-9" r="5" fill="#e2e8f0" stroke="#475569" />
            <circle cx="9" cy="-9" r="5" fill="#e2e8f0" stroke="#475569" />
            <circle cx="-9" cy="9" r="5" fill="#e2e8f0" stroke="#475569" />
            <circle cx="9" cy="9" r="5" fill="#e2e8f0" stroke="#475569" />
          </g>

          {/* Central Polymer Filler Core */}
          <circle cx="100" cy="100" r="10" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
        </svg>

      </div>

      {/* Millimeter Measurement Ruler Scale (0 - 5 - 10 - 15 - 20 mm) */}
      <div className="w-full max-w-[220px] mt-2 pt-2 border-t border-[#1d2e45]">
        <div className="relative w-full h-6 flex flex-col justify-end">
          {/* Ticks */}
          <div className="flex justify-between items-end w-full px-1">
            {[0, 5, 10, 15, 20].map((val) => (
              <div key={val} className="flex flex-col items-center">
                <span className="text-[9px] font-mono text-slate-400 mb-1">{val}</span>
                <div className="w-[1px] h-2.5 bg-slate-500"></div>
              </div>
            ))}
          </div>
          {/* Main Ruler Line */}
          <div className="w-full h-[1px] bg-slate-600"></div>
        </div>

        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block text-center mt-1">
          {cableLabel} • mm SCALE
        </span>
      </div>

    </div>
  );
}

/**
 * Dumbbell Specimen Technical Blueprint Line Drawing
 * Matching bottom right of traceability section on the phone app
 */
export function DumbbellBlueprint({ className = "w-full h-auto" }) {
  return (
    <div className={`p-4 bg-[#0d1624] rounded-xl border border-[#1d2e45] ${className}`}>
      <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-2">
        <span className="uppercase text-cyan-400 font-bold">IEC 60811 TYPE 2 DIE DRAFT</span>
        <span>DIM: mm</span>
      </div>

      <svg className="w-full h-20 text-cyan-400/90" viewBox="0 0 240 80" fill="none">
        {/* Fine grid background */}
        <path d="M0 20H240M0 40H240M0 60H240M60 0V80M120 0V80M180 0V80" stroke="#1d2e45" strokeWidth="0.5" strokeDasharray="2 2" />

        {/* Dumbbell Outline */}
        <path 
          d="M10 25 H50 C55 25, 60 33, 70 33 H170 C180 33, 185 25, 190 25 H230 V55 H190 C185 55, 180 47, 170 47 H70 C60 47, 55 55, 50 55 H10 Z" 
          stroke="#38bdf8" 
          strokeWidth="1.5" 
          fill="#121e2d" 
        />

        {/* Dimension Line - Overall Length L */}
        <line x1="10" y1="12" x2="230" y2="12" stroke="#64748b" strokeWidth="1" />
        <line x1="10" y1="8" x2="10" y2="16" stroke="#64748b" strokeWidth="1" />
        <line x1="230" y1="8" x2="230" y2="16" stroke="#64748b" strokeWidth="1" />
        <text x="120" y="9" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle">L = 115 mm</text>

        {/* Gauge Length Markers */}
        <line x1="70" y1="40" x2="170" y2="40" stroke="#10b981" strokeWidth="1" strokeDasharray="2 2" />
        <text x="120" y="38" fill="#10b981" fontSize="7" fontFamily="monospace" textAnchor="middle">GAUGE: 25 mm</text>
      </svg>

      <div className="flex justify-between items-center text-[9px] font-mono text-slate-500 mt-1">
        <span>PRECISE</span>
        <span>REPEATABLE</span>
        <span>TRACEABLE</span>
      </div>
    </div>
  );
}
