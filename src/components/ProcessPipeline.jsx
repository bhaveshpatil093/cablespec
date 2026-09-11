import React, { useState } from 'react';
import { Cable, Scissors, GitFork, Layers, Eye, ShieldCheck, BoxSelect, CheckCircle2, QrCode, ArrowRight, Activity } from 'lucide-react';
import { CABLESPEC_PROJECT } from '../data/cablespecData';
import { PanelCard, DashboardCard, StatusBadge, TimelineItem } from './ui';

const STAGE_ICONS = {
  Cable, Scissors, GitFork, Layers, Eye, ShieldCheck, BoxSelect, CheckCircle2, QrCode
};

export default function ProcessPipeline() {
  const [selectedStageId, setSelectedStageId] = useState(1);

  const stages = CABLESPEC_PROJECT.processStages;
  const currentStage = stages.find(s => s.id === selectedStageId) || stages[0];

  return (
    <section id="pipeline" className="py-20 bg-[#080d16] border-t border-[#1d2e45] relative bg-grid-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#121e2d] border border-[#1d2e45] text-cyan-400 typo-tech-label">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>Process History & Automation Timeline</span>
          </div>
          <h2 className="typo-section-title">
            9-Stage Automated Mechanical Sequence
          </h2>
          <p className="typo-body text-slate-400">
            Complete Cable Input → Feed → Strip → Flatten → Inspect → Pass/Fail Gate → Punch → Ready Specimen → Digital Passport
          </p>
        </div>

        {/* Pipeline Horizontal Selector */}
        <div className="mb-10 overflow-x-auto pb-4">
          <div className="flex items-center min-w-max space-x-2 px-2">
            {stages.map((stage, idx) => {
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
                    
                    <span className="typo-tech-label text-[10px] text-slate-500">
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

        {/* Process History Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Timeline */}
          <div className="lg:col-span-6 space-y-4">
            <PanelCard className="p-6 space-y-4">
              
              <div className="flex items-center justify-between border-b border-[#1d2e45] pb-3">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <h3 className="typo-tech-label text-white text-xs">
                    PROCESS HISTORY
                  </h3>
                </div>
                <span className="typo-metadata uppercase">
                  AUTOMATED SPECIMEN PREPARATION
                </span>
              </div>

              {/* Step List Timeline */}
              <div className="space-y-3">
                {stages.map((st) => (
                  <TimelineItem
                    key={st.id}
                    stepNumber={st.id}
                    name={st.name}
                    status={st.id === 5 ? 'PASS' : 'Completed'}
                    timestamp={`10 Sep 2026 09:${10 + st.id}`}
                    isSelected={st.id === selectedStageId}
                    onClick={() => setSelectedStageId(st.id)}
                  />
                ))}
              </div>

            </PanelCard>
          </div>

          {/* Right Selected Stage Specs */}
          <div className="lg:col-span-6 space-y-6">
            <PanelCard className="p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#1d2e45] pb-4">
                <div>
                  <StatusBadge variant="pass">
                    STAGE 0{currentStage.id} OF 09 • {currentStage.category}
                  </StatusBadge>
                  <h3 className="typo-subsection-title mt-2">
                    {currentStage.name}
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-xl bg-[#0d1624] border border-[#1d2e45] flex items-center justify-center text-cyan-400">
                  {React.createElement(STAGE_ICONS[currentStage.icon] || Cable, { className: "w-6 h-6" })}
                </div>
              </div>

              <p className="typo-body">
                {currentStage.description}
              </p>

              {/* Hardware Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <DashboardCard>
                  <span className="typo-tech-label text-cyan-400 block mb-1">
                    Primary Actuator
                  </span>
                  <p className="text-xs text-white font-mono font-semibold">
                    {currentStage.details.actuator}
                  </p>
                </DashboardCard>

                <DashboardCard>
                  <span className="typo-tech-label text-cyan-400 block mb-1">
                    Feedback Sensor
                  </span>
                  <p className="text-xs text-white font-mono font-semibold">
                    {currentStage.details.sensor}
                  </p>
                </DashboardCard>
              </div>

              {/* Operational Specs */}
              <div className="space-y-2 font-mono text-xs">
                <DashboardCard className="flex justify-between items-center">
                  <span className="typo-metadata uppercase">OPERATIONAL PARAMETERS:</span>
                  <span className="text-amber-400 font-bold">{currentStage.details.parameters}</span>
                </DashboardCard>

                <div className="p-3 rounded bg-emerald-950/20 border border-emerald-800/40 flex justify-between items-center">
                  <span className="text-emerald-400 font-bold text-xs">COMPLIANCE SPEC:</span>
                  <span className="text-white font-medium">{currentStage.details.keySpec}</span>
                </div>
              </div>

            </PanelCard>
          </div>

        </div>

      </div>
    </section>
  );
}
