import React, { useState } from 'react';
import { Cog, Eye, Smartphone, Layers, Scissors, CheckCircle2, Sliders, Activity } from 'lucide-react';

/**
 * Detailed Physical Mechatronic Machine Rendering SVG
 * Demonstrates raw cable entering, 5-stage mechanical processing,
 * and smartphone vision camera module mounted above verification stage.
 */
export default function PhysicalMachineRender({ className = "w-full h-auto" }) {
  const [activeHoverStage, setActiveHoverStage] = useState(null);

  const stages = [
    { id: 1, name: "1. FEED & STRAIGHTEN", spec: "NEMA 34 Stepper • 4-28mm Iris Feed", color: "#38bdf8" },
    { id: 2, name: "2. ROTARY SHEATH SLIT", spec: "Concentric Jaw • Depth ±0.02mm", color: "#f59e0b" },
    { id: 3, name: "3. THERMAL FLATTEN", spec: "PTC Heater 63°C • LVDT Gauge", color: "#06b6d4" },
    { id: 4, name: "4. VISION VERIFY", spec: "12MP Camera Mounted Overhead", color: "#10b981" },
    { id: 5, name: "5. DIE PUNCH", spec: "20 kN Servo-Hydraulic SKD11", color: "#a855f7" }
  ];

  return (
    <div className={`dashboard-panel p-6 space-y-4 shadow-2xl relative overflow-hidden ${className}`}>
      
      {/* Top Telemetry Header */}
      <div className="flex items-center justify-between border-b border-[#1d2e45] pb-3 font-mono text-xs">
        <div className="flex items-center space-x-2">
          <Cog className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '12s' }} />
          <span className="font-bold text-white uppercase tracking-wider">
            PHYSICAL MACHINE CAD RENDERING
          </span>
        </div>
        <div className="flex items-center space-x-3 typo-metadata">
          <span className="text-emerald-400 flex items-center gap-1 font-bold">
            <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
            ACTUATORS ONLINE
          </span>
          <span className="hidden sm:inline text-slate-400">FRAME: 850x550mm</span>
        </div>
      </div>

      {/* Main Machine Illustration SVG */}
      <div className="relative w-full h-72 sm:h-80 bg-[#0d1624] rounded-xl border border-[#1d2e45] p-4 flex flex-col justify-between overflow-hidden">
        
        {/* Background CAD Blueprint Grid */}
        <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none"></div>

        <svg className="w-full h-full relative z-10" viewBox="0 0 750 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          
          {/* Main Aluminum Structural Frame (4080 Profile) */}
          <rect x="20" y="40" width="710" height="240" rx="8" stroke="#1d2e45" strokeWidth="3" fill="#080d16" fillOpacity="0.8" />
          <rect x="30" y="50" width="690" height="220" rx="4" stroke="#283f5e" strokeWidth="1" strokeDasharray="4 4" />

          {/* Machine Structural Mounting Rails */}
          <line x1="30" y1="210" x2="720" y2="210" stroke="#334155" strokeWidth="4" />
          <line x1="30" y1="90" x2="720" y2="90" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />

          {/* RAW CABLE FEED (ENTERING FROM LEFT) */}
          <g transform="translate(0, 150)">
            <rect x="0" y="10" width="80" height="20" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
            {/* Cable Conductor Core Visible */}
            <circle cx="10" cy="20" r="6" fill="#ea580c" />
            <circle cx="25" cy="20" r="6" fill="#3b82f6" />
            <path d="M0 20 H80" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2" />
            <text x="5" y="0" fill="#38bdf8" fontSize="10" fontFamily="monospace" fontWeight="bold">RAW CABLE INPUT →</text>
          </g>

          {/* STAGE 1: MOTORIZED FEED & STRAIGHTENER ROLLERS */}
          <g 
            onMouseEnter={() => setActiveHoverStage(1)}
            onMouseLeave={() => setActiveHoverStage(null)}
            className="cursor-pointer"
          >
            <rect x="80" y="110" width="70" height="100" rx="6" fill="#121e2d" stroke={activeHoverStage === 1 ? '#38bdf8' : '#1d2e45'} strokeWidth="2" />
            {/* Roller Wheels */}
            <circle cx="115" cy="130" r="16" fill="#1e2d42" stroke="#38bdf8" strokeWidth="2" />
            <circle cx="115" cy="190" r="16" fill="#1e2d42" stroke="#38bdf8" strokeWidth="2" />
            <line x1="115" y1="130" x2="115" y2="190" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="2 2" />
            <text x="85" y="100" fill="#94a3b8" fontSize="9" fontFamily="monospace">1. FEED</text>
          </g>

          {/* Connecting Track 1-2 */}
          <path d="M150 160 H180" stroke="#38bdf8" strokeWidth="3" strokeDasharray="3 3" />

          {/* STAGE 2: ADAPTIVE ROTARY SHEATH SLITTING RING */}
          <g 
            onMouseEnter={() => setActiveHoverStage(2)}
            onMouseLeave={() => setActiveHoverStage(null)}
            className="cursor-pointer"
          >
            <rect x="180" y="110" width="80" height="100" rx="6" fill="#121e2d" stroke={activeHoverStage === 2 ? '#f59e0b' : '#1d2e45'} strokeWidth="2" />
            <circle cx="220" cy="160" r="28" fill="#0d1624" stroke="#f59e0b" strokeWidth="2" />
            <path d="M220 132 V142 M220 178 V188 M192 160 H202 M238 160 H248" stroke="#f59e0b" strokeWidth="2" />
            <text x="185" y="100" fill="#f59e0b" fontSize="9" fontFamily="monospace">2. STRIP</text>
          </g>

          {/* Connecting Track 2-3 */}
          <path d="M260 160 H290" stroke="#38bdf8" strokeWidth="3" strokeDasharray="3 3" />

          {/* STAGE 3: HEATED INSULATION FLATTENING PRESS */}
          <g 
            onMouseEnter={() => setActiveHoverStage(3)}
            onMouseLeave={() => setActiveHoverStage(null)}
            className="cursor-pointer"
          >
            <rect x="290" y="110" width="80" height="100" rx="6" fill="#121e2d" stroke={activeHoverStage === 3 ? '#06b6d4' : '#1d2e45'} strokeWidth="2" />
            <rect x="305" y="130" width="50" height="18" rx="3" fill="#1e2d42" stroke="#06b6d4" strokeWidth="2" />
            <rect x="305" y="172" width="50" height="18" rx="3" fill="#1e2d42" stroke="#06b6d4" strokeWidth="2" />
            {/* Heat Waves Indicator */}
            <path d="M315 152 Q325 148 335 152 T355 152" stroke="#f59e0b" strokeWidth="1.5" />
            <text x="295" y="100" fill="#06b6d4" fontSize="9" fontFamily="monospace">3. FLATTEN</text>
          </g>

          {/* Connecting Track 3-4 */}
          <path d="M370 160 H400" stroke="#38bdf8" strokeWidth="3" strokeDasharray="3 3" />

          {/* STAGE 4: VISION VERIFICATION TABLE + OVERHEAD CAMERA MOUNTED MODULE */}
          <g 
            onMouseEnter={() => setActiveHoverStage(4)}
            onMouseLeave={() => setActiveHoverStage(null)}
            className="cursor-pointer"
          >
            {/* Backlight Stage Table */}
            <rect x="400" y="140" width="100" height="70" rx="4" fill="#064e3b" fillOpacity="0.3" stroke="#10b981" strokeWidth="2" />
            
            {/* Overhead Mounting Gantry Arm */}
            <path d="M450 140 V60 H480" stroke="#10b981" strokeWidth="3" />

            {/* Vision Camera / Smartphone Vision Module Mounted Above Verification Stage */}
            <g transform="translate(425, 60)">
              <rect x="0" y="0" width="50" height="28" rx="6" fill="#121e2d" stroke="#10b981" strokeWidth="2" />
              {/* Camera Lens */}
              <circle cx="25" cy="14" r="8" fill="#0d1624" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="25" cy="14" r="3" fill="#38bdf8" />
              {/* Optical Inspection Light Beam Cone */}
              <polygon points="10,28 40,28 48,80 2,80" fill="url(#visionLight)" opacity="0.4" />
            </g>

            <text x="405" y="48" fill="#10b981" fontSize="9" fontFamily="monospace" fontWeight="bold">
              4. VISION CAMERA (MOUNTED OVERHEAD)
            </text>
          </g>

          {/* Connecting Track 4-5 */}
          <path d="M500 160 H530" stroke="#38bdf8" strokeWidth="3" strokeDasharray="3 3" />

          {/* STAGE 5: 20 kN SERVO-HYDRAULIC DIE PUNCH PRESS */}
          <g 
            onMouseEnter={() => setActiveHoverStage(5)}
            onMouseLeave={() => setActiveHoverStage(null)}
            className="cursor-pointer"
          >
            <rect x="530" y="90" width="100" height="130" rx="8" fill="#121e2d" stroke={activeHoverStage === 5 ? '#a855f7' : '#1d2e45'} strokeWidth="2" />
            {/* Press Hydraulic Cylinder */}
            <rect x="560" y="60" width="40" height="40" rx="4" fill="#1e2d42" stroke="#a855f7" strokeWidth="2" />
            {/* SKD11 Tool Die Punch Head */}
            <path d="M555 140 H605 V170 H555 Z" fill="#0d1624" stroke="#a855f7" strokeWidth="2" />
            <text x="540" y="50" fill="#a855f7" fontSize="9" fontFamily="monospace">5. DIE PUNCH (20 kN)</text>
          </g>

          {/* FINISHED DUMBBELL SPECIMEN EJECTING TO OUTPUT TRAY */}
          <g transform="translate(640, 150)">
            <rect x="0" y="0" width="85" height="45" rx="4" fill="#121e2d" stroke="#10b981" strokeWidth="2" />
            {/* Finished Specimen Outline */}
            <path d="M10 22 H25 C28 22, 30 18, 35 18 H50 C55 18, 57 22, 60 22 H75 V26 H60 C57 26, 55 30, 50 30 H35 C30 30, 28 26, 25 26 H10 Z" fill="#10b981" />
            <text x="5" y="-8" fill="#10b981" fontSize="9" fontFamily="monospace" fontWeight="bold">READY SPECIMEN →</text>
          </g>

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="visionLight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
          </defs>

        </svg>

      </div>

      {/* Live Stage Info Footer Bar */}
      <div className="p-3 rounded-lg bg-[#0d1624] border border-[#1d2e45] flex items-center justify-between font-mono text-xs">
        <span className="text-slate-400">
          HOVERED STAGE: <strong className="text-cyan-400">
            {activeHoverStage ? stages.find(s => s.id === activeHoverStage)?.name : 'PHYSICAL HARDWARE MACHINE (ALL STAGES ACTIVE)'}
          </strong>
        </span>

        <span className="text-emerald-400 text-[11px] font-bold hidden sm:inline">
          {activeHoverStage ? stages.find(s => s.id === activeHoverStage)?.spec : 'CYCLE TIME: 35 SECONDS'}
        </span>
      </div>

    </div>
  );
}
