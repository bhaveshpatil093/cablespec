import React, { useState } from 'react';
import { 
  ShieldAlert, ShieldCheck, Cpu, Cog, Radio, Zap, 
  ArrowRightLeft, AlertTriangle, Layers, ChevronRight, X
} from 'lucide-react';
import { MACHINE_MODULES_DETAILS } from '../data/machineModuleDetails';
import { DashboardCard, StatusBadge, Button } from './ui';

/**
 * In-Place Technical Side Panel Inspector for Machine Modules
 * Displays Purpose, Principle, Components, Inputs, Outputs, Sensors, Actuators, Failure Modes, and Safety.
 */
export default function ModuleSideInspector({ moduleId = 1, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');
  const details = MACHINE_MODULES_DETAILS[moduleId] || MACHINE_MODULES_DETAILS[1];

  return (
    <div className="dashboard-panel p-6 space-y-6 shadow-2xl relative border-l-2 border-l-cyan-400 bg-[#121e2d] font-mono text-xs">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#1d2e45] pb-4">
        <div>
          <StatusBadge variant="pass">
            MODULE 0{details.id} • {details.category.toUpperCase()}
          </StatusBadge>
          <h3 className="typo-subsection-title text-xl text-white mt-1">
            {details.name}
          </h3>
        </div>

        {onClose && (
          <button 
            onClick={onClose}
            className="p-1 rounded bg-[#0d1624] text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Inspector Tab Selector */}
      <div className="flex flex-wrap gap-2 border-b border-[#1d2e45] pb-3 text-[11px]">
        {[
          { id: 'overview', name: 'Overview & Physics' },
          { id: 'hardware', name: 'Hardware & I/O' },
          { id: 'sensors', name: 'Sensors & Actuators' },
          { id: 'safety', name: 'Failures & Safety' }
        ].map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`px-3 py-1.5 rounded font-bold transition-all border ${
              activeTab === t.id
                ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                : 'bg-[#0d1624] text-slate-300 border-[#1d2e45] hover:bg-[#162436]'
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* TAB 1: OVERVIEW & MECHANICAL PRINCIPLE */}
      {activeTab === 'overview' && (
        <div className="space-y-4">
          <DashboardCard className="p-4 space-y-2">
            <span className="typo-tech-label text-cyan-400 block">1. PURPOSE & FUNCTIONAL OBJECTIVE</span>
            <p className="typo-body text-xs text-white font-sans leading-relaxed">
              {details.purpose}
            </p>
          </DashboardCard>

          <DashboardCard className="p-4 space-y-2 border-l-2 border-l-cyan-400">
            <span className="typo-tech-label text-cyan-400 block">2. MECHANICAL KINEMATIC PRINCIPLE</span>
            <p className="typo-body text-xs text-slate-300 font-sans leading-relaxed">
              {details.principle}
            </p>
          </DashboardCard>

          <div className="p-4 rounded-xl bg-[#0d1624] border border-[#1d2e45] space-y-2">
            <span className="typo-tech-label text-slate-400 block">3. MAIN COMPONENTS LIST</span>
            <div className="space-y-1.5">
              {details.mainComponents.map((comp, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0"></span>
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: INPUTS & OUTPUTS */}
      {activeTab === 'hardware' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DashboardCard className="p-4 space-y-3">
            <span className="typo-tech-label text-amber-400 block flex items-center gap-1.5">
              <ArrowRightLeft className="w-3.5 h-3.5" />
              4. INPUT SPECIFICATIONS
            </span>
            <div className="space-y-2 font-sans text-xs">
              {details.inputs.map((inp, i) => (
                <div key={i} className="p-2 rounded bg-[#080d16] border border-[#1d2e45] text-slate-300">
                  {inp}
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard className="p-4 space-y-3">
            <span className="typo-tech-label text-emerald-400 block flex items-center gap-1.5">
              <ArrowRightLeft className="w-3.5 h-3.5" />
              5. OUTPUT TELEMETRY & STREAM
            </span>
            <div className="space-y-2 font-sans text-xs">
              {details.outputs.map((out, i) => (
                <div key={i} className="p-2 rounded bg-[#080d16] border border-[#1d2e45] text-emerald-300 font-mono">
                  {out}
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>
      )}

      {/* TAB 3: SENSORS & ACTUATORS */}
      {activeTab === 'sensors' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DashboardCard className="p-4 space-y-3">
            <span className="typo-tech-label text-cyan-400 block flex items-center gap-1.5">
              <Radio className="w-3.5 h-3.5" />
              6. FEEDBACK SENSORS & TRANSDUCERS
            </span>
            <div className="space-y-2 font-sans text-xs">
              {details.sensors.map((s, i) => (
                <div key={i} className="p-2 rounded bg-[#080d16] border border-[#1d2e45] text-cyan-300">
                  {s}
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard className="p-4 space-y-3">
            <span className="typo-tech-label text-purple-400 block flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              7. ACTUATORS & DRIVES
            </span>
            <div className="space-y-2 font-sans text-xs">
              {details.actuators.map((a, i) => (
                <div key={i} className="p-2 rounded bg-[#080d16] border border-[#1d2e45] text-purple-300 font-mono">
                  {a}
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>
      )}

      {/* TAB 4: FAILURE MODES & SAFETY */}
      {activeTab === 'safety' && (
        <div className="space-y-4">
          <DashboardCard className="p-4 space-y-3 border-l-2 border-l-red-500">
            <span className="typo-tech-label text-red-400 block flex items-center gap-1.5">
              <AlertTriangle className="w-3.5 h-3.5" />
              8. POSSIBLE FAILURE CONDITIONS
            </span>
            <div className="space-y-2 font-sans text-xs">
              {details.failureConditions.map((fail, i) => (
                <div key={i} className="p-2.5 rounded bg-red-950/20 border border-red-800/40 text-red-300 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
                  <span>{fail}</span>
                </div>
              ))}
            </div>
          </DashboardCard>

          <DashboardCard className="p-4 space-y-3 border-l-2 border-l-emerald-500">
            <span className="typo-tech-label text-emerald-400 block flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              9. SAFETY CONSIDERATIONS & INTERLOCKS
            </span>
            <div className="space-y-2 font-sans text-xs">
              {details.safetyConsiderations.map((safe, i) => (
                <div key={i} className="p-2.5 rounded bg-emerald-950/20 border border-emerald-800/40 text-emerald-300 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></span>
                  <span>{safe}</span>
                </div>
              ))}
            </div>
          </DashboardCard>
        </div>
      )}

    </div>
  );
}
