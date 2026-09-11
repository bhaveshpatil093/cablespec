import React from 'react';
import { ShieldAlert, AlertTriangle, XCircle, CheckCircle2, Sliders, Users, Clock, Compass, FileX, Scissors, ShieldCheck, ArrowRight } from 'lucide-react';
import { PanelCard, DashboardCard, StatusBadge } from './ui';

export default function ProblemStatement() {
  const challenges = [
    {
      id: "PROB-01",
      title: "Operator Dependency",
      icon: Users,
      problem: "High variation in specimen quality depending on technician skill level, leading to non-repeatable tensile test results.",
      impact: "Test result variance > 25%"
    },
    {
      id: "PROB-02",
      title: "Repetitive Manual Operations",
      icon: Clock,
      problem: "Preparing a batch of 10 dumbbell specimens manually takes 45–60 minutes, causing severe operator fatigue.",
      impact: "High cycle time (8 min/sample)"
    },
    {
      id: "PROB-03",
      title: "Preparation Variability",
      icon: Scissors,
      problem: "Hand-guided razor blades create gouges and uneven wall thickness along the narrow parallel section.",
      impact: "Violates IEC 60811 ±0.1mm"
    },
    {
      id: "PROB-04",
      title: "Cable Alignment Issues",
      icon: Compass,
      problem: "Residual spool curvature causes cables to twist, resulting in spiraled or off-center longitudinal sheath cuts.",
      impact: "Asymmetric sample cross-section"
    },
    {
      id: "PROB-05",
      title: "Dimensional Inconsistencies",
      icon: Sliders,
      problem: "Thickness d measured across gauge length varies unpredictably, corrupting cross-sectional area calculation A = b * d.",
      impact: "Inaccurate stress calculations"
    },
    {
      id: "PROB-06",
      title: "Manual Handling Hazards",
      icon: AlertTriangle,
      problem: "Laboratory technicians use exposed razor blades to strip tough HDPE/XLPE sheaths, posing severe laceration risks.",
      impact: "High safety hazard in lab"
    },
    {
      id: "PROB-07",
      title: "Limited Traceability",
      icon: FileX,
      problem: "Manual dimension logging in paper logbooks leads to transcription errors and zero digital audit trail.",
      impact: "Non-compliant LIMS records"
    },
    {
      id: "PROB-08",
      title: "Difficult Multi-Gauge Operation",
      icon: Sliders,
      problem: "Changing between cable outer diameters (4mm to 28mm) requires tedious manual collet & jig replacements.",
      impact: "15+ min tool changeover"
    },
    {
      id: "PROB-09",
      title: "Errors Before Irreversible Punching",
      icon: ShieldAlert,
      problem: "Flaws in flattened insulation are discovered only AFTER irreversible die punching, wasting limited sample stock.",
      impact: "Up to 32% invalid test rate"
    }
  ];

  return (
    <section id="problem" className="py-20 bg-[#080d16] border-t border-[#1d2e45] relative bg-grid-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#121e2d] border border-[#1d2e45] text-red-400 typo-tech-label">
            <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
            <span>Problem Statement & Industry Analysis</span>
          </div>
          <h2 className="typo-section-title">
            The Critical Bottleneck in Cable Testing Labs
          </h2>
          <p className="typo-body text-slate-400">
            Manual cable specimen preparation causes stress concentration notches, high invalid test rates, operator injuries, and zero digital audit trail.
          </p>
        </div>

        {/* 9 Technical Challenge Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {challenges.map((c) => {
            const IconComp = c.icon;
            return (
              <DashboardCard key={c.id} className="p-5 space-y-3 border-l-2 border-l-red-500/60 relative">
                <div className="flex items-center justify-between border-b border-[#1d2e45] pb-2">
                  <span className="typo-metadata text-[9px] text-red-400 font-bold">{c.id}</span>
                  <IconComp className="w-4 h-4 text-red-400" />
                </div>

                <h3 className="font-mono font-bold text-sm text-white">
                  {c.title}
                </h3>

                <p className="typo-body text-xs text-slate-300 font-sans leading-relaxed">
                  {c.problem}
                </p>

                <div className="p-2 rounded bg-red-950/30 border border-red-800/40 text-[10px] font-mono text-red-400 font-bold">
                  IMPACT: {c.impact}
                </div>
              </DashboardCard>
            );
          })}
        </div>

        {/* SIDE-BY-SIDE VISUAL COMPARISON DIAGRAM: MANUAL VS AUTOMATED */}
        <PanelCard className="p-6 sm:p-8 space-y-6">
          
          <div className="flex items-center justify-between border-b border-[#1d2e45] pb-4">
            <div>
              <span className="typo-tech-label text-cyan-400 block mb-1">VISUAL COMPARISON MATRIX</span>
              <h3 className="typo-subsection-title text-xl text-white">
                Manual Razor Preparation vs. CableSpec Closed-Loop Automation
              </h3>
            </div>
            <StatusBadge variant="pass">
              BENCHMARK VALIDATED
            </StatusBadge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-mono text-xs">
            
            {/* Left Column: Manual Razor Method (RED TRACE) */}
            <div className="lg:col-span-6 p-6 rounded-xl bg-red-950/20 border border-red-500/40 space-y-4">
              <div className="flex items-center justify-between border-b border-red-500/30 pb-3">
                <div className="flex items-center space-x-2">
                  <XCircle className="w-5 h-5 text-red-400" />
                  <span className="font-bold text-sm text-red-400 uppercase tracking-wider">
                    TRADITIONAL MANUAL METHOD
                  </span>
                </div>
                <span className="text-[10px] text-red-400 font-bold bg-red-950 px-2 py-0.5 rounded border border-red-800">
                  HIGH DEFECT RATE
                </span>
              </div>

              <div className="space-y-3 pt-1">
                <div className="p-3 rounded bg-[#0d1624] border border-red-900/40 space-y-1">
                  <span className="text-red-400 font-bold block">1. Manual Razor Stripping</span>
                  <p className="text-slate-400 text-[11px]">Exposed blade, high risk of razor gouges along inner core insulation.</p>
                </div>

                <div className="p-3 rounded bg-[#0d1624] border border-red-900/40 space-y-1">
                  <span className="text-red-400 font-bold block">2. Manual Dial Caliper Reading</span>
                  <p className="text-slate-400 text-[11px]">Subjective pressure on dial gauge distorts soft XLPE/PVC thickness values.</p>
                </div>

                <div className="p-3 rounded bg-[#0d1624] border border-red-900/40 space-y-1">
                  <span className="text-red-400 font-bold block">3. Blind Hand Die Punching</span>
                  <p className="text-slate-400 text-[11px]">Die punched over undetected razor gouges, creating stress concentration notches.</p>
                </div>

                <div className="p-3 rounded bg-red-950/60 border border-red-500/60 text-red-300 font-bold flex justify-between items-center text-xs">
                  <span>Invalid Tensile Test Rate:</span>
                  <span className="text-base text-red-400 font-extrabold">28.4% – 32.0%</span>
                </div>
              </div>
            </div>

            {/* Right Column: CableSpec Automated Method (EMERALD TRACE) */}
            <div className="lg:col-span-6 p-6 rounded-xl bg-emerald-950/20 border border-emerald-500/40 space-y-4">
              <div className="flex items-center justify-between border-b border-emerald-500/30 pb-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="font-bold text-sm text-emerald-400 uppercase tracking-wider">
                    CABLESPEC AUTOMATED SYSTEM
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  IEC 60811 COMPLIANT
                </span>
              </div>

              <div className="space-y-3 pt-1">
                <div className="p-3 rounded bg-[#0d1624] border border-emerald-900/40 space-y-1">
                  <span className="text-emerald-400 font-bold block">1. Adaptive 3-Jaw Rotary Slitter</span>
                  <p className="text-slate-300 text-[11px]">Motorized depth calculation (±0.02mm) eliminates conductor gouging.</p>
                </div>

                <div className="p-3 rounded bg-[#0d1624] border border-emerald-900/40 space-y-1">
                  <span className="text-emerald-400 font-bold block">2. 12MP Telecentric Vision Gating</span>
                  <p className="text-slate-300 text-[11px]">Sub-pixel optical verification checks width b & thickness d before die punching.</p>
                </div>

                <div className="p-3 rounded bg-[#0d1624] border border-emerald-900/40 space-y-1">
                  <span className="text-emerald-400 font-bold block">3. 20 kN SKD11 Tool Steel Punch</span>
                  <p className="text-slate-300 text-[11px]">Pristine burr-free edges (Rz &lt; 1.6 µm) ejected directly with QR digital passport.</p>
                </div>

                <div className="p-3 rounded bg-emerald-950/60 border border-emerald-500/60 text-emerald-300 font-bold flex justify-between items-center text-xs">
                  <span>Invalid Tensile Test Rate:</span>
                  <span className="text-base text-emerald-400 font-extrabold">&lt; 1.2%</span>
                </div>
              </div>
            </div>

          </div>

        </PanelCard>

      </div>
    </section>
  );
}
