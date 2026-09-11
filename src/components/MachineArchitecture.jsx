import React, { useState } from 'react';
import { 
  Cog, Cpu, Sliders, Camera, Smartphone, Wrench, CheckCircle, 
  ShieldAlert, Binary
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
    <section id="architecture" className="py-20 bg-[#080d16] border-t border-[#1d2e45] relative bg-grid-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#121e2d] border border-[#1d2e45] text-cyan-400 font-mono text-xs uppercase tracking-wider mb-4">
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

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 font-mono text-xs">
          {tabs.map((t) => {
            const TIcon = t.icon;
            const isActive = t.id === activeTab;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded font-bold transition-all border ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md'
                    : 'bg-[#121e2d] text-slate-300 border-[#1d2e45] hover:bg-[#162436] hover:text-white'
                }`}
              >
                <TIcon className="w-3.5 h-3.5" />
                <span>{t.name}</span>
              </button>
            );
          })}
        </div>

        {/* Details Card */}
        <div className="rounded-2xl bg-[#121e2d] p-6 sm:p-10 border border-[#1d2e45] shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0d1624] border border-[#1d2e45] flex items-center justify-center text-cyan-400">
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-widest block">
                    SUBSYSTEM MODULE
                  </span>
                  <h3 className="text-xl font-bold text-white font-display">
                    {currentTab.data.name}
                  </h3>
                </div>
              </div>

              <p className="text-sm font-mono text-cyan-200 border-l-2 border-cyan-400 pl-3 py-0.5">
                {currentTab.data.headline}
              </p>

              {activeTab === 'mobileApp' && (
                <div className="p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono space-y-1">
                  <span className="font-bold flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-amber-400" />
                    CLARIFICATION FOR TECHNICAL REVIEWERS & JUDGES:
                  </span>
                  <p className="text-slate-300 font-sans">
                    The smartphone application is an auxiliary support layer for QR specimen passport generation, operator ID logging, and wireless sync to Universal Testing Machine (UTM) laboratory software.
                  </p>
                </div>
              )}

              {/* Engineering Highlights */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Key Technical Innovations & Implementations
                </h4>
                {currentTab.data.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded bg-[#0d1624] border border-[#1d2e45]">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-slate-300 leading-relaxed font-sans">
                      {h}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Specs Table */}
            <div className="lg:col-span-5 space-y-4 font-mono">
              <div className="p-5 rounded-xl bg-[#0d1624] border border-[#1d2e45] space-y-3">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest border-b border-[#1d2e45] pb-2 flex items-center justify-between">
                  <span>HARDWARE SPEC SHEET</span>
                  <Binary className="w-4 h-4 text-slate-500" />
                </h4>

                <div className="space-y-2">
                  {currentTab.data.specs.map((spec, i) => (
                    <div key={i} className="flex items-center justify-between text-xs py-1 border-b border-[#1d2e45]/50 last:border-0">
                      <span className="text-slate-400">{spec.label}</span>
                      <span className="text-white font-bold bg-[#121e2d] px-2 py-0.5 rounded border border-[#1d2e45] text-right">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
