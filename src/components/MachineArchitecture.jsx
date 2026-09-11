import React, { useState } from 'react';
import { Cpu } from 'lucide-react';
import InteractiveMachineDiagram from './InteractiveMachineDiagram';
import ModuleSideInspector from './ModuleSideInspector';
import { MACHINE_MODULES_DETAILS } from '../data/machineModuleDetails';

export default function MachineArchitecture() {
  const [selectedModuleId, setSelectedModuleId] = useState(1);

  return (
    <section id="architecture" className="py-20 bg-[#080d16] border-t border-[#1d2e45] relative bg-grid-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#121e2d] border border-[#1d2e45] text-cyan-400 typo-tech-label">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Deep Engineering Specifications</span>
          </div>
          <h2 className="typo-section-title">
            Machine System Architecture & 9 Physical Modules
          </h2>
          <p className="typo-body text-slate-400">
            Interactive CAD schematic of CableSpec mechatronic modules. Select any module on the machine diagram to inspect its technical purpose, mechanical principles, actuators, sensors, failure conditions, and safety interlocks.
          </p>
        </div>

        {/* DOMINANT VISUAL HIERARCHY: LARGE HORIZONTAL INTERACTIVE MACHINE DIAGRAM */}
        <InteractiveMachineDiagram 
          selectedModuleId={selectedModuleId}
          onSelectModule={(id) => setSelectedModuleId(id)}
        />

        {/* Module Selection Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 bg-[#0d1624] p-3 rounded-xl border border-[#1d2e45]">
          {Object.values(MACHINE_MODULES_DETAILS).map((mod) => (
            <button
              key={mod.id}
              onClick={() => setSelectedModuleId(mod.id)}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all border ${
                selectedModuleId === mod.id
                  ? 'bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-lg shadow-cyan-500/20'
                  : 'bg-[#121e2d] text-slate-300 border-[#1d2e45] hover:border-cyan-500/50 hover:text-white'
              }`}
            >
              0{mod.id}. {mod.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* TECHNICAL SIDE PANEL INSPECTOR (Prompt 16) */}
        <div className="grid grid-cols-1 gap-6">
          <ModuleSideInspector 
            moduleId={selectedModuleId} 
          />
        </div>

      </div>
    </section>
  );
}

