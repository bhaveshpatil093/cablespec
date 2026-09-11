import React, { useState } from 'react';
import { 
  Cable, Scissors, GitFork, Layers, Eye, ShieldCheck, 
  BoxSelect, CheckCircle2, QrCode, ArrowRight, Play, Pause, RotateCcw,
  Sliders, Cpu, Activity, AlertCircle, Wrench
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
  const [simulating, setSimulating] = useState(false);
  const [simStep, setSimStep] = useState(1);

  const stages = CABLESPEC_PROJECT.processStages;
  const currentStage = stages.find(s => s.id === selectedStageId) || stages[0];

  const handleNextStage = () => {
    if (selectedStageId < stages.length) {
      setSelectedStageId(selectedStageId + 1);
    } else {
      setSelectedStageId(1);
    }
  };

  const handlePrevStage = () => {
    if (selectedStageId > 1) {
      setSelectedStageId(selectedStageId - 1);
    }
  };

  return (
    <section id="pipeline" className="py-20 bg-slate-950 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-4">
            <Activity className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>Core Hardware Workflow Pipeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            9-Stage Automated Mechanical Sequence
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 font-mono">
            Complete Cable Input → Feed → Strip → Flatten → Inspect → Pass/Fail Gate → Punch → Ready Specimen → Digital Passport
          </p>
        </div>

        {/* Pipeline Horizontal Flow Navigator */}
        <div className="mb-10 overflow-x-auto pb-4 scrollbar-thin">
          <div className="flex items-center min-w-max space-x-2 px-2">
            {stages.map((stage, idx) => {
              const IconComp = STAGE_ICONS[stage.icon] || Cable;
              const isSelected = stage.id === selectedStageId;
              
              return (
                <React.Fragment key={stage.id}>
                  <button
                    onClick={() => setSelectedStageId(stage.id)}
                    className={`flex flex-col items-center p-3 rounded-xl transition-all duration-200 min-w-[125px] border ${
                      isSelected
                        ? 'bg-slate-900 border-cyan-400/80 shadow-lg shadow-cyan-500/20 text-cyan-400 scale-105'
                        : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 font-bold ${
                      isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    
                    <span className="text-[10px] font-mono text-slate-500 uppercase font-bold">
                      STAGE 0{stage.id}
                    </span>
                    <span className="text-xs font-semibold font-mono text-center truncate max-w-[110px] mt-0.5">
                      {stage.shortName}
                    </span>
                  </button>

                  {idx < stages.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-slate-700 flex-shrink-0" />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Detailed Mechanics & Specifications */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30 relative">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950 px-2.5 py-1 rounded border border-cyan-800">
                    STAGE 0{currentStage.id} OF 09 • {currentStage.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2 font-display">
                    {currentStage.name}
                  </h3>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePrevStage}
                    disabled={selectedStageId === 1}
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNextStage}
                    disabled={selectedStageId === stages.length}
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Stage Description */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                {currentStage.description}
              </p>

              {/* Hardware Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase font-bold block mb-1">
                    Primary Actuator / Mechanism
                  </span>
                  <p className="text-xs text-white font-mono font-semibold">
                    {currentStage.details.actuator}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase font-bold block mb-1">
                    Feedback Sensor & Transducer
                  </span>
                  <p className="text-xs text-white font-mono font-semibold">
                    {currentStage.details.sensor}
                  </p>
                </div>
              </div>

              {/* Parameters & Key Specs */}
              <div className="space-y-3">
                <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">OPERATIONAL PARAMETERS:</span>
                  <span className="text-amber-400 font-bold">{currentStage.details.parameters}</span>
                </div>

                <div className="p-3.5 rounded-lg bg-cyan-950/40 border border-cyan-800/60 flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-300">CRITICAL COMPLIANCE SPEC:</span>
                  <span className="text-white font-medium">{currentStage.details.keySpec}</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right: Live Interactive Machine Stage Simulator Visual */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 h-full flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                  <span className="font-mono text-xs text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    Interactive Subsystem Visualizer
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                    REALTIME SIM
                  </span>
                </div>

                {/* Animated Stage Visual Box */}
                <div className="relative w-full h-64 bg-slate-950 rounded-xl border border-slate-800 p-6 flex flex-col items-center justify-center overflow-hidden">
                  
                  {/* Dynamic Graphic Rendering per Stage */}
                  <div className="w-24 h-24 rounded-full bg-cyan-500/10 border-2 border-cyan-500/40 flex items-center justify-center animate-pulse-slow mb-4">
                    {React.createElement(STAGE_ICONS[currentStage.icon] || Cable, {
                      className: "w-12 h-12 text-cyan-400"
                    })}
                  </div>

                  <span className="font-mono text-base font-bold text-white tracking-wider">
                    {currentStage.name}
                  </span>
                  <span className="text-xs font-mono text-slate-400 mt-1 text-center">
                    Subsystem Status: Fully Calibrated & Operational
                  </span>

                  {/* Stage-specific animated indicator line */}
                  <div className="w-full bg-slate-800 h-1.5 rounded-full mt-6 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all duration-500"
                      style={{ width: `${(currentStage.id / 9) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between w-full text-[10px] font-mono text-slate-500 mt-1">
                    <span>STAGE 01</span>
                    <span>STAGE 0{currentStage.id} ACTIVE</span>
                    <span>STAGE 09</span>
                  </div>
                </div>
              </div>

              {/* Stage Navigation Quick Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">
                  {currentStage.id === 9 ? 'Complete Digital Passport generated' : 'Proceed to next automated hardware stage'}
                </span>
                <button
                  onClick={handleNextStage}
                  className="px-4 py-2 rounded bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all"
                >
                  {currentStage.id === 9 ? 'Restart Cycle' : 'Next Stage →'}
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
