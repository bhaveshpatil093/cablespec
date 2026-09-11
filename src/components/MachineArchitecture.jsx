import React, { useState } from 'react';
import { 
  Cog, Cpu, Sliders, Camera, Smartphone, Wrench, CheckCircle, 
  Layers, Zap, ShieldAlert, ChevronRight, Binary, HardDrive, Compass
} from 'lucide-react';
import { CABLESPEC_PROJECT } from '../data/cablespecData';

export default function MachineArchitecture() {
  const [activeTab, setActiveTab] = useState('mechanical');

  const subsystems = CABLESPEC_PROJECT.subsystems;

  const tabs = [
    { id: 'mechanical', name: 'Mechanical System', icon: Cog, data: subsystems.mechanical },
    { id: 'electronics', name: 'Electronics & Hardware', icon: Cpu, data: subsystems.electronics },
    { id: 'control', name: 'Control Logic & RTOS', icon: Sliders, data: subsystems.control },
    { id: 'vision', name: 'Optical Vision System', icon: Camera, data: subsystems.vision },
    { id: 'mobileApp', name: 'Smartphone Companion', icon: Smartphone, data: subsystems.mobileApp },
    { id: 'adaptiveTooling', name: 'Adaptive Tooling Head', icon: Wrench, data: subsystems.adaptiveTooling },
  ];

  const currentTab = tabs.find(t => t.id === activeTab) || tabs[0];
  const IconComp = currentTab.icon;

  return (
    <section id="architecture" className="py-20 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Deep Engineering Specifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Machine System Architecture
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 font-mono">
            Modular engineering break-down across mechanical actuators, electronics, control algorithms, machine vision, and digital passport connectivity.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((t) => {
            const TIcon = t.icon;
            const isActive = t.id === activeTab;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/25 scale-105'
                    : 'bg-slate-950/60 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <TIcon className="w-4 h-4" />
                <span>{t.name}</span>
              </button>
            );
          })}
        </div>

        {/* Subsystem Details Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-cyan-500/30 shadow-2xl bg-slate-950/80">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
                    SUBSYSTEM MODULE
                  </span>
                  <h3 className="text-2xl font-bold text-white font-display">
                    {currentTab.data.name}
                  </h3>
                </div>
              </div>

              <p className="text-base text-cyan-200/90 font-mono font-medium border-l-2 border-cyan-400 pl-4 py-1">
                {currentTab.data.headline}
              </p>

              {/* Special Note for Mobile App tab clarifying primary physical hardware vs app */}
              {activeTab === 'mobileApp' && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-mono space-y-1">
                  <span className="font-bold flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-400" />
                    CLARIFICATION FOR TECHNICAL REVIEWERS & JUDGES:
                  </span>
                  <p className="text-slate-300">
                    The smartphone application is NOT the primary innovation. It is an auxiliary support layer for QR specimen passport generation, operator ID logging, and wireless sync to Universal Testing Machine (UTM) laboratory software.
                  </p>
                </div>
              )}

              {/* Technical Engineering Highlights */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Key Technical Innovations & Implementations
                </h4>
                {currentTab.data.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {h}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Hardware Specifications Table */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
                <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-3 flex items-center justify-between">
                  <span>HARDWARE SPEC SHEET</span>
                  <Binary className="w-4 h-4 text-slate-500" />
                </h4>

                <div className="space-y-3">
                  {currentTab.data.specs.map((spec, i) => (
                    <div key={i} className="flex items-center justify-between text-xs font-mono py-1.5 border-b border-slate-800/60 last:border-0">
                      <span className="text-slate-400">{spec.label}</span>
                      <span className="text-white font-bold bg-slate-950 px-2 py-1 rounded border border-slate-800 text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Blueprint Graphic Box */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center font-mono text-xs text-slate-400 space-y-2">
                <div className="flex justify-between items-center text-[10px] text-slate-500">
                  <span>SCHEMATIC REV 3.4</span>
                  <span className="text-emerald-400">PASSED CAD AUDIT</span>
                </div>
                <div className="h-28 rounded bg-slate-900 border border-cyan-500/20 flex flex-col items-center justify-center p-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                  <IconComp className="w-10 h-10 text-cyan-400/40 animate-pulse" />
                  <span className="text-[11px] font-bold text-slate-300 z-10 mt-1">
                    {currentTab.data.name} Schematic View
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
