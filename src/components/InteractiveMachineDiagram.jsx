import React from 'react';
import { Cog } from 'lucide-react';

/**
 * Large Horizontal Interactive 9-Module Physical Machine Schematic Diagram
 * Shows Cable Input -> Feed -> Sheath Cut -> Sheath Removal -> Flatten -> Slit -> Vision -> Punch -> Collection
 */
export default function InteractiveMachineDiagram({ selectedModuleId, onSelectModule }) {
  const modules = [
    { id: 1, name: "1. Cable Input", x: 20, width: 70, color: "#38bdf8" },
    { id: 2, name: "2. Feed & Straighten", x: 95, width: 75, color: "#38bdf8" },
    { id: 3, name: "3. Sheath Cutting", x: 175, width: 75, color: "#f59e0b" },
    { id: 4, name: "4. Sheath Removal", x: 255, width: 75, color: "#f59e0b" },
    { id: 5, name: "5. Insulation Flattening", x: 335, width: 85, color: "#06b6d4" },
    { id: 6, name: "6. Longitudinal Slitting", x: 425, width: 85, color: "#06b6d4" },
    { id: 7, name: "7. Vision Verification", x: 515, width: 85, color: "#10b981" },
    { id: 8, name: "8. Dumbbell Punching", x: 605, width: 85, color: "#a855f7" },
    { id: 9, name: "9. Specimen Collection", x: 695, width: 85, color: "#10b981" },
  ];

  return (
    <div className="dashboard-panel p-6 space-y-4 shadow-2xl relative overflow-hidden">
      
      <div className="flex items-center justify-between border-b border-[#1d2e45] pb-3 font-mono text-xs">
        <div className="flex items-center space-x-2">
          <Cog className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
          <span className="font-bold text-white uppercase tracking-wider">
            9-MODULE PHYSICAL MACHINE ARCHITECTURE SCHEMATIC
          </span>
        </div>
        <span className="typo-metadata text-[10px] text-cyan-400 font-bold">
          CLICK MODULE TO INSPECT SPECS
        </span>
      </div>

      {/* SVG Diagram */}
      <div className="relative w-full h-80 bg-[#0d1624] rounded-xl border border-[#1d2e45] p-3 overflow-x-auto">
        <div className="min-w-[820px] h-full relative">
          <div className="absolute inset-0 bg-grid-blueprint opacity-40 pointer-events-none"></div>

          <svg className="w-full h-full relative z-10" viewBox="0 0 800 280" fill="none">
            
            {/* Outer Machine Aluminum Profile Frame */}
            <rect x="10" y="30" width="780" height="220" rx="8" stroke="#1d2e45" strokeWidth="3" fill="#080d16" fillOpacity="0.8" />
            <line x1="15" y1="180" x2="785" y2="180" stroke="#334155" strokeWidth="4" />

            {/* Continuous Cable Progression Guide Line */}
            <path d="M20 140 H780" stroke="#38bdf8" strokeWidth="2" strokeDasharray="4 2" />

            {/* 1. CABLE INPUT */}
            <g 
              onClick={() => onSelectModule(1)}
              className="cursor-pointer group"
            >
              <rect 
                x="20" y="70" width="65" height="130" rx="6" 
                fill={selectedModuleId === 1 ? '#162436' : '#121e2d'} 
                stroke={selectedModuleId === 1 ? '#38bdf8' : '#1d2e45'} 
                strokeWidth={selectedModuleId === 1 ? '2.5' : '1.5'} 
              />
              <circle cx="52" cy="140" r="14" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
              <circle cx="52" cy="140" r="6" fill="#ea580c" />
              <text x="52" y="55" fill="#38bdf8" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">1. INPUT</text>
            </g>

            {/* 2. FEED & STRAIGHTENING */}
            <g 
              onClick={() => onSelectModule(2)}
              className="cursor-pointer group"
            >
              <rect 
                x="95" y="70" width="70" height="130" rx="6" 
                fill={selectedModuleId === 2 ? '#162436' : '#121e2d'} 
                stroke={selectedModuleId === 2 ? '#38bdf8' : '#1d2e45'} 
                strokeWidth={selectedModuleId === 2 ? '2.5' : '1.5'} 
              />
              <circle cx="130" cy="115" r="12" fill="#1e2d42" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="130" cy="165" r="12" fill="#1e2d42" stroke="#38bdf8" strokeWidth="1.5" />
              <line x1="130" y1="115" x2="130" y2="165" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />
              <text x="130" y="55" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">2. FEED</text>
            </g>

            {/* 3. SHEATH CUTTING */}
            <g 
              onClick={() => onSelectModule(3)}
              className="cursor-pointer group"
            >
              <rect 
                x="175" y="70" width="70" height="130" rx="6" 
                fill={selectedModuleId === 3 ? '#162436' : '#121e2d'} 
                stroke={selectedModuleId === 3 ? '#f59e0b' : '#1d2e45'} 
                strokeWidth={selectedModuleId === 3 ? '2.5' : '1.5'} 
              />
              <circle cx="210" cy="140" r="22" fill="#0d1624" stroke="#f59e0b" strokeWidth="2" />
              <path d="M210 118 V126 M210 154 V162 M188 140 H196 M224 140 H232" stroke="#f59e0b" strokeWidth="1.5" />
              <text x="210" y="55" fill="#f59e0b" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">3. CUT</text>
            </g>

            {/* 4. SHEATH REMOVAL */}
            <g 
              onClick={() => onSelectModule(4)}
              className="cursor-pointer group"
            >
              <rect 
                x="255" y="70" width="70" height="130" rx="6" 
                fill={selectedModuleId === 4 ? '#162436' : '#121e2d'} 
                stroke={selectedModuleId === 4 ? '#f59e0b' : '#1d2e45'} 
                strokeWidth={selectedModuleId === 4 ? '2.5' : '1.5'} 
              />
              <rect x="270" y="125" width="40" height="30" rx="3" fill="#1e2d42" stroke="#f59e0b" strokeWidth="1.5" />
              <path d="M275 140 H305" stroke="#f59e0b" strokeWidth="2" />
              <text x="290" y="55" fill="#f59e0b" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">4. STRIP</text>
            </g>

            {/* 5. INSULATION FLATTENING */}
            <g 
              onClick={() => onSelectModule(5)}
              className="cursor-pointer group"
            >
              <rect 
                x="335" y="70" width="80" height="130" rx="6" 
                fill={selectedModuleId === 5 ? '#162436' : '#121e2d'} 
                stroke={selectedModuleId === 5 ? '#06b6d4' : '#1d2e45'} 
                strokeWidth={selectedModuleId === 5 ? '2.5' : '1.5'} 
              />
              <rect x="350" y="115" width="50" height="14" rx="2" fill="#1e2d42" stroke="#06b6d4" strokeWidth="1.5" />
              <rect x="350" y="151" width="50" height="14" rx="2" fill="#1e2d42" stroke="#06b6d4" strokeWidth="1.5" />
              <text x="375" y="55" fill="#06b6d4" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">5. FLATTEN</text>
            </g>

            {/* 6. LONGITUDINAL SLITTING */}
            <g 
              onClick={() => onSelectModule(6)}
              className="cursor-pointer group"
            >
              <rect 
                x="425" y="70" width="80" height="130" rx="6" 
                fill={selectedModuleId === 6 ? '#162436' : '#121e2d'} 
                stroke={selectedModuleId === 6 ? '#06b6d4' : '#1d2e45'} 
                strokeWidth={selectedModuleId === 6 ? '2.5' : '1.5'} 
              />
              <path d="M445 125 L485 155 M445 155 L485 125" stroke="#06b6d4" strokeWidth="1.5" />
              <text x="465" y="55" fill="#06b6d4" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">6. SLIT</text>
            </g>

            {/* 7. VISION VERIFICATION */}
            <g 
              onClick={() => onSelectModule(7)}
              className="cursor-pointer group"
            >
              <rect 
                x="515" y="70" width="80" height="130" rx="6" 
                fill={selectedModuleId === 7 ? '#162436' : '#121e2d'} 
                stroke={selectedModuleId === 7 ? '#10b981' : '#1d2e45'} 
                strokeWidth={selectedModuleId === 7 ? '2.5' : '1.5'} 
              />
              <rect x="535" y="125" width="40" height="30" rx="3" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
              <circle cx="555" cy="140" r="8" stroke="#38bdf8" strokeWidth="1.5" fill="#0d1624" />
              <text x="555" y="55" fill="#10b981" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">7. VISION</text>
            </g>

            {/* 8. DUMBBELL PUNCHING */}
            <g 
              onClick={() => onSelectModule(8)}
              className="cursor-pointer group"
            >
              <rect 
                x="605" y="70" width="80" height="130" rx="6" 
                fill={selectedModuleId === 8 ? '#162436' : '#121e2d'} 
                stroke={selectedModuleId === 8 ? '#a855f7' : '#1d2e45'} 
                strokeWidth={selectedModuleId === 8 ? '2.5' : '1.5'} 
              />
              <rect x="625" y="110" width="40" height="60" rx="4" fill="#1e2d42" stroke="#a855f7" strokeWidth="1.5" />
              <path d="M635 130 H655 M645 120 V150" stroke="#a855f7" strokeWidth="1.5" />
              <text x="645" y="55" fill="#a855f7" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">8. PUNCH</text>
            </g>

            {/* 9. SPECIMEN COLLECTION */}
            <g 
              onClick={() => onSelectModule(9)}
              className="cursor-pointer group"
            >
              <rect 
                x="695" y="70" width="80" height="130" rx="6" 
                fill={selectedModuleId === 9 ? '#162436' : '#121e2d'} 
                stroke={selectedModuleId === 9 ? '#10b981' : '#1d2e45'} 
                strokeWidth={selectedModuleId === 9 ? '2.5' : '1.5'} 
              />
              <rect x="715" y="125" width="40" height="30" rx="3" fill="#121e2d" stroke="#10b981" strokeWidth="1.5" />
              <path d="M720 140 H750" stroke="#10b981" strokeWidth="2" />
              <text x="735" y="55" fill="#10b981" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">9. PASSPORT</text>
            </g>

          </svg>

        </div>
      </div>

    </div>
  );
}
