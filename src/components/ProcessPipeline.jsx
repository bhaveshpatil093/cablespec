import React, { useState } from 'react';
import { 
  Cable, Scissors, GitFork, Layers, Eye, ShieldCheck, 
  BoxSelect, CheckCircle2, QrCode, ArrowRight, Activity, Check
} from 'lucide-react';
import { CABLESPEC_PROJECT } from '../data/cablespecData';

const STAGE_ICONS = {
  Cable: Cable,
  Scissors: Scissors,
  GitFork: GitFork,
  Layers: Layers,
  Eye: Eye,
  ShieldCheck: ShieldCheck,
  BoxSelect: BoxSelect,
  CheckCircle2: CheckCircle2,
  QrCode: QrCode
};

export default function ProcessPipeline() {
  const [selectedStageId, setSelectedStageId] = useState(1);

  const stages = CABLESPEC_PROJECT.processStages;
  const currentStage = stages.find(s => s.id === selectedStageId) || stages[0];

  return (
    <section id="pipeline" className="py-20 bg-[#080d16] border-t border-[#1d2e45] relative bg-grid-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#121e2d] border border-[#1d2e45] text-cyan-400 font-mono text-xs uppercase tracking-wider mb-4">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>Process History & Automation Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            9-Stage Automated Mechanical Sequence
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 font-mono">
            Complete Cable Input → Feed → Strip → Flatten → Inspect → Pass/Fail Gate → Punch → Ready Specimen → Digital Passport
          </p>
        </div>

        {/* Pipeline Horizontal Flow Selector Bar */}
        <div className="mb-10 overflow-x-auto pb-4">
          <div className="flex items-center min-w-max space-x-2 px-2">
            {stages.map((stage, idx) => {
              const IconComp = STAGE_ICONS[stage.icon] || Cable;
              const isSelected = stage.id === selectedStageId;
              
              return (
                <React.Fragment key={stage.id}>
                  <button
                    onClick={() => setSelectedStageId(stage.id)}
                    className={`flex flex-col items-center p-3 rounded-lg transition-all duration-200 min-w-[125px] border ${
                      isSelected
                        ? 'bg-[#121e2d] border-cyan-400 text-cyan-400 shadow-md scale-105'
                        : 'bg-[#0d1624] border-[#1d2e45] text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1.5 font-mono text-xs font-bold ${
                      isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-[#1e2d42] text-slate-300'
                    }`}>
                      {stage.id}
                    </div>
                    
                    <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">
                      STAGE 0{stage.id}
                    </span>
                    <span className="text-xs font-semibold font-mono text-center truncate max-w-[110px] mt-0.5">
                      {stage.shortName}
                    </span>
                  </button>

                  {idx < stages.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-700 flex-shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Process History Layout matching Phone App */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Process History Timeline Card matching Phone Screenshot */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl bg-[#121e2d] p-6 border border-[#1d2e45] space-y-4">
              
              <div className="flex items-center justify-between border-b border-[#1d2e45] pb-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                    PROCESS HISTORY
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                  AUTOMATED SPECIMEN PREPARATION
                </span>
              </div>

              {/* Step List Timeline */}
              <div className="space-y-3 font-mono text-xs">
                {stages.map((st) => {
                  const isSelected = st.id === selectedStageId;
                  return (
                    <div 
                      key={st.id}
                      onClick={() => setSelectedStageId(st.id)}
                      className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                        isSelected 
                          ? 'bg-[#162436] border-cyan-400 text-white' 
                          : 'bg-[#0d1624] border-[#1d2e45] text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                          isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-[#2563eb] text-white'
                        }`}>
                          {st.id}
                        </div>
                        <span className="font-bold">{st.name}</span>
                      </div>

                      <div className="flex items-center space-x-4">
                        <span className="text-emerald-400 font-bold text-[11px]">
                          {st.id === 5 ? 'PASS' : 'Completed'}
                        </span>
                        <span className="text-[10px] text-slate-400 hidden sm:inline">
                          10 Sep 2026 09:{10 + st.id}
                        </span>
                        <div className="w-5 h-5 rounded-full border border-emerald-500/60 bg-emerald-950/40 flex items-center justify-center text-emerald-400">
                          <Check className="w-3 h-3 text-emerald-400" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Right: Selected Stage Technical Specs Panel */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl bg-[#121e2d] p-6 sm:p-8 border border-[#1d2e45] space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#1d2e45] pb-4">
                <div>
                  <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest bg-[#0d1624] px-2.5 py-1 rounded border border-[#1d2e45]">
                    STAGE 0{currentStage.id} OF 09 • {currentStage.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2 font-display">
                    {currentStage.name}
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-xl bg-[#0d1624] border border-[#1d2e45] flex items-center justify-center text-cyan-400">
                  {React.createElement(STAGE_ICONS[currentStage.icon] || Cable, { className: "w-6 h-6" })}
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                {currentStage.description}
              </p>

              {/* Hardware Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#0d1624] border border-[#1d2e45]">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block mb-1">
                    Primary Actuator
                  </span>
                  <p className="text-xs text-white font-mono font-semibold">
                    {currentStage.details.actuator}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#0d1624] border border-[#1d2e45]">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase font-bold block mb-1">
                    Feedback Sensor
                  </span>
                  <p className="text-xs text-white font-mono font-semibold">
                    {currentStage.details.sensor}
                  </p>
                </div>
              </div>

              {/* Parameters */}
              <div className="space-y-2 font-mono text-xs">
                <div className="p-3 rounded bg-[#0d1624] border border-[#1d2e45] flex justify-between items-center">
                  <span className="text-slate-400">PARAMETERS:</span>
                  <span className="text-amber-400 font-bold">{currentStage.details.parameters}</span>
                </div>

                <div className="p-3 rounded bg-emerald-950/20 border border-emerald-800/40 flex justify-between items-center">
                  <span className="text-emerald-400 font-bold">COMPLIANCE SPEC:</span>
                  <span className="text-white font-medium">{currentStage.details.keySpec}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
