import React from 'react';
import { 
  ArrowRight, ArrowDown, XCircle, CheckCircle2, 
  Scissors, Cog, Eye, QrCode, Sliders, AlertTriangle, Layers, Activity
} from 'lucide-react';
import { PanelCard, DashboardCard, StatusBadge } from './ui';

export default function WorkflowComparison() {
  const comparisonStages = [
    {
      step: 1,
      manual: "Manual feeding",
      manualDesc: "Operator pulls cable off spool by hand, causing non-uniform tension & residual curvature.",
      automated: "Automated feeding",
      autoDesc: "Motorized dual-groove rubberized feed rollers with dynamic 5-roller curvature correction.",
      manualIcon: Scissors,
      autoIcon: Cog
    },
    {
      step: 2,
      manual: "Manual cutting",
      manualDesc: "Hand-guided utility knife circumferential score around outer sheath jacket.",
      automated: "Controlled cutting",
      autoDesc: "Adaptive 3-jaw rotary ring slits sheath at calculated radius without core contact.",
      manualIcon: AlertTriangle,
      autoIcon: Sliders
    },
    {
      step: 3,
      manual: "Manual sheath removal",
      manualDesc: "Pliers and manual force used to peel off tough HDPE/XLPE sheath jacket.",
      automated: "Automated removal",
      autoDesc: "Pneumatic axial stripper head pulls off sheath section automatically in < 2 seconds.",
      manualIcon: Scissors,
      autoIcon: Cog
    },
    {
      step: 4,
      manual: "Manual flattening",
      manualDesc: "Tube pressed flat manually under hand lever, causing elastic springback curl.",
      automated: "Controlled flattening",
      autoDesc: "PTC thermal roller press flattens insulation at 63°C, eliminating internal stress.",
      manualIcon: Layers,
      autoIcon: Layers
    },
    {
      step: 5,
      manual: "Manual slitting",
      manualDesc: "Razor blade sliced down tubular length by hand, introducing edge notch flaws.",
      automated: "Controlled slitting",
      autoDesc: "Precision linear guide blade produces burr-free longitudinal edge (Rz < 1.6 µm).",
      manualIcon: Scissors,
      autoIcon: Sliders
    },
    {
      step: 6,
      manual: "Manual inspection",
      manualDesc: "Visual check with handheld dial caliper; subjective & prone to misreading.",
      automated: "Vision verification",
      autoDesc: "12MP telecentric camera verifies width b & thickness d at sub-pixel resolution (±0.015mm).",
      manualIcon: AlertTriangle,
      autoIcon: Eye
    },
    {
      step: 7,
      manual: "Manual punching",
      manualDesc: "Hand arbor press punches die; un-detected edge notches turned into scrap specimens.",
      automated: "Automated punching",
      autoDesc: "20 kN servo-hydraulic RAM punches SKD11 tool steel die only after vision PASS gate.",
      manualIcon: AlertTriangle,
      autoIcon: Cog
    },
    {
      step: 8,
      manual: "Manual recording",
      manualDesc: "Dimensions written by hand in paper logbooks; transcription errors & no LIMS audit.",
      automated: "Digital passport",
      autoDesc: "Generates QR specimen passport, uploads LIMS JSON payload, & syncs to UTM tensile software.",
      manualIcon: XCircle,
      autoIcon: QrCode
    }
  ];

  return (
    <section id="workflow" className="py-20 bg-[#080d16] border-t border-[#1d2e45] relative bg-grid-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#121e2d] border border-[#1d2e45] text-cyan-400 typo-tech-label">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>Workflow Transformation Architecture</span>
          </div>
          <h2 className="typo-section-title">
            Conventional Manual vs. CableSpec Automated Workflow
          </h2>
          <p className="typo-body text-slate-400">
            Compare each stage of traditional lab preparation against CableSpec closed-loop mechatronic automation.
          </p>
        </div>

        {/* 8-Stage Comparison Container */}
        <PanelCard className="p-6 sm:p-8 space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#1d2e45] pb-4">
            
            {/* Left Header */}
            <div className="lg:col-span-6 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <XCircle className="w-5 h-5 text-red-400" />
                <h3 className="typo-subsection-title text-base text-red-400 uppercase tracking-wider">
                  CONVENTIONAL WORKFLOW
                </h3>
              </div>
              <span className="text-[10px] font-mono text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-800 font-bold">
                MANUAL / HIGH FRICTION
              </span>
            </div>

            {/* Right Header */}
            <div className="lg:col-span-6 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <h3 className="typo-subsection-title text-base text-emerald-400 uppercase tracking-wider">
                  CABLESPEC WORKFLOW
                </h3>
              </div>
              <StatusBadge variant="pass">
                MECHATRONIC / CLOSED-LOOP
              </StatusBadge>
            </div>

          </div>

          {/* 8 Stage Row Comparisons */}
          <div className="space-y-4">
            {comparisonStages.map((st) => {
              return (
                <div key={st.step} className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center relative">
                  
                  {/* Left: Conventional Stage */}
                  <div className="lg:col-span-5 p-4 rounded-xl bg-red-950/20 border border-red-500/30 space-y-1 font-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-red-400 font-bold">STAGE 0{st.step} • MANUAL</span>
                      <XCircle className="w-4 h-4 text-red-400" />
                    </div>
                    <h4 className="font-bold text-sm text-white">{st.manual}</h4>
                    <p className="typo-body text-xs text-slate-400 font-sans">{st.manualDesc}</p>
                  </div>

                  {/* Center: Stage Equivalence Transition Arrow */}
                  <div className="lg:col-span-2 flex flex-col items-center justify-center py-2 lg:py-0">
                    <div className="w-8 h-8 rounded-full bg-[#0d1624] border border-[#1d2e45] flex items-center justify-center text-cyan-400">
                      <ArrowRight className="w-4 h-4 hidden lg:block text-cyan-400" />
                      <ArrowDown className="w-4 h-4 lg:hidden text-cyan-400" />
                    </div>
                    <span className="typo-metadata text-[9px] mt-1 text-slate-500">STAGE 0{st.step}</span>
                  </div>

                  {/* Right: CableSpec Automated Stage */}
                  <div className="lg:col-span-5 p-4 rounded-xl bg-[#121e2d] border border-cyan-500/40 space-y-1 font-mono shadow-md">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-cyan-400 font-bold">STAGE 0{st.step} • AUTOMATED</span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <h4 className="font-bold text-sm text-cyan-300">{st.automated}</h4>
                    <p className="typo-body text-xs text-slate-300 font-sans">{st.autoDesc}</p>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom Summary Bar */}
          <div className="pt-4 border-t border-[#1d2e45] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="text-slate-400">
              Total Workflow Automation Level: <strong className="text-emerald-400 font-bold">8 / 8 STAGES AUTOMATED</strong>
            </div>

            <div className="flex items-center gap-2">
              <span className="typo-status-badge">
                PREPARE • VERIFY • TRACE • TRUST
              </span>
            </div>
          </div>

        </PanelCard>

      </div>
    </section>
  );
}
