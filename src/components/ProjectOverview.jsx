import React, { useState } from 'react';
import { Eye, Cpu, Cog, ShieldCheck, QrCode, ArrowRight, Layers, Activity } from 'lucide-react';
import { PanelCard, DashboardCard, StatusBadge } from './ui';

export default function ProjectOverview() {
  const [selectedConcept, setSelectedConcept] = useState(1);

  const concepts = [
    {
      id: 1,
      code: "CONCEPT-01",
      title: "SENSE",
      tagline: "Sensor Data Collection",
      icon: Eye,
      color: "text-cyan-400",
      borderColor: "border-cyan-500/40",
      summary: "Camera and machine sensors collect information.",
      details: [
        "12MP industrial global shutter camera captures backlit macro frames.",
        "Ultrasonic wall-thickness transducer measures outer sheath depth.",
        "Dual LVDT contact gauges log insulation wall profile.",
        "25 kN load cell monitors punching force transducer feedback."
      ]
    },
    {
      id: 2,
      code: "CONCEPT-02",
      title: "DECIDE",
      tagline: "RTOS Deterministic Control",
      icon: Cpu,
      color: "text-blue-400",
      borderColor: "border-blue-500/40",
      summary: "Controller determines preparation and verification decisions.",
      details: [
        "STM32F407 168MHz ARM Cortex-M4 executes 1000Hz PID loop.",
        "Dynamic depth algorithm calculates blade position d_blade = R - t_nominal.",
        "OpenCV edge detection evaluates width b and thickness d against IEC limits.",
        "TMC StallGuard4 detects micro-jamming and initiates auto-retract."
      ]
    },
    {
      id: 3,
      code: "CONCEPT-03",
      title: "ACT",
      tagline: "Mechanical Automation",
      icon: Cog,
      color: "text-amber-400",
      borderColor: "border-amber-500/40",
      summary: "Mechanical actuators perform cable preparation.",
      details: [
        "NEMA 34 high-torque stepper feeds raw cable through 5-roller straightener.",
        "Adaptive concentric 3-jaw ring slits outer sheath without conductor touch.",
        "PTC cartridge heater flattens curved tubular insulation at 63°C.",
        "20 kN servo-hydraulic RAM punches SKD11 tool-steel dumbbell die."
      ]
    },
    {
      id: 4,
      code: "CONCEPT-04",
      title: "VERIFY",
      tagline: "Optical Quality Gating",
      icon: ShieldCheck,
      color: "text-emerald-400",
      borderColor: "border-emerald-500/40",
      summary: "Vision checks the prepared specimen before final punching.",
      details: [
        "Telecentric macro lens inspects edge roughness Rz < 1.6 µm.",
        "Sub-pixel contour algorithm validates parallel width b within ±0.015mm.",
        "Surface void classifier rejects specimens with air bubbles or notches.",
        "High-speed diverter gate ejects non-compliant specimens in < 20 ms."
      ]
    },
    {
      id: 5,
      code: "CONCEPT-05",
      title: "RECORD",
      tagline: "Digital Passport Traceability",
      icon: QrCode,
      color: "text-purple-400",
      borderColor: "border-purple-500/40",
      summary: "The specimen passport stores the complete traceability record.",
      details: [
        "Generates unique QR specimen passport tag with encrypted hash.",
        "Auto-populates UTM cross-sectional area A = b * d via Bluetooth / REST API.",
        "Stores batch ID, machine serial, operator ID, and vision snapshot.",
        "Syncs directly to laboratory LIMS database for audit compliance."
      ]
    }
  ];

  const currentConcept = concepts.find(c => c.id === selectedConcept) || concepts[0];

  return (
    <section id="overview" className="py-20 bg-[#080d16] border-t border-[#1d2e45] relative bg-grid-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#121e2d] border border-[#1d2e45] text-cyan-400 typo-tech-label">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>High-Level Project Concept Paradigm</span>
          </div>
          <h2 className="typo-section-title">
            Complete Closed-Loop System Architecture
          </h2>
          <p className="typo-body text-slate-400">
            SENSE → DECIDE → ACT → VERIFY → RECORD
          </p>
        </div>

        {/* Horizontal Technical Process Diagram Bar */}
        <div className="mb-10 overflow-x-auto pb-4">
          <div className="flex items-center min-w-max justify-between space-x-2 px-2">
            {concepts.map((c, idx) => {
              const IconComp = c.icon;
              const isSelected = c.id === selectedConcept;
              
              return (
                <React.Fragment key={c.id}>
                  <button
                    onClick={() => setSelectedConcept(c.id)}
                    className={`flex flex-col items-center p-4 rounded-xl transition-all duration-200 min-w-[150px] border ${
                      isSelected
                        ? `bg-[#121e2d] ${c.borderColor} shadow-lg scale-105`
                        : 'bg-[#0d1624] border-[#1d2e45] text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 font-mono text-xs font-bold ${
                      isSelected ? 'bg-cyan-500 text-slate-950' : 'bg-[#1e2d42] text-slate-300'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    
                    <span className="typo-tech-label text-[9px] text-slate-500">
                      {c.code}
                    </span>
                    <span className={`text-sm font-extrabold font-mono tracking-wider mt-0.5 ${c.color}`}>
                      {c.title}
                    </span>
                  </button>

                  {idx < concepts.length - 1 && (
                    <div className="flex items-center px-1">
                      <ArrowRight className="w-4 h-4 text-slate-700 flex-shrink-0 animate-pulse" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* 5 Compact Technical Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {concepts.map((c) => {
            const IconComp = c.icon;
            const isSelected = c.id === selectedConcept;
            return (
              <DashboardCard 
                key={c.id} 
                highlight={isSelected}
                className={`p-5 space-y-3 cursor-pointer transition-all ${
                  isSelected ? 'border-cyan-400 bg-[#162436]' : 'hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between border-b border-[#1d2e45] pb-2">
                  <span className="typo-metadata text-[9px]">{c.code}</span>
                  <IconComp className={`w-4 h-4 ${c.color}`} />
                </div>

                <div>
                  <h3 className={`font-mono font-extrabold text-base ${c.color}`}>
                    {c.title}
                  </h3>
                  <span className="typo-metadata text-[10px] block">{c.tagline}</span>
                </div>

                <p className="typo-body text-xs text-slate-300 font-sans leading-relaxed">
                  {c.summary}
                </p>
              </DashboardCard>
            );
          })}
        </div>

        {/* Selected Stage Deep Technical Detail Breakdown */}
        <PanelCard className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between border-b border-[#1d2e45] pb-3">
            <div className="flex items-center space-x-3">
              <StatusBadge variant="pass">
                STAGE 0{currentConcept.id} PARADIGM • {currentConcept.code}
              </StatusBadge>
              <h3 className={`typo-subsection-title text-xl ${currentConcept.color}`}>
                {currentConcept.title} MECHANISM BREAKDOWN
              </h3>
            </div>
            <span className="typo-metadata hidden sm:inline">
              AUTOMATED COMPLIANCE PREPARATION
            </span>
          </div>

          <p className="typo-body text-base text-white">
            {currentConcept.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {currentConcept.details.map((detail, idx) => (
              <div key={idx} className="dashboard-card p-3 flex items-start gap-2.5 text-xs font-mono text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0"></span>
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </PanelCard>

      </div>
    </section>
  );
}
