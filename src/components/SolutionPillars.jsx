import React from 'react';
import { Cog, Eye, ShieldCheck, QrCode, ArrowRight, Activity } from 'lucide-react';
import { PanelCard, DashboardCard, StatusBadge, Button } from './ui';

export default function SolutionPillars() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const pillars = [
    {
      id: "PIL-01",
      title: "Adaptive Machine",
      icon: Cog,
      targetId: "architecture",
      actionLabel: "EXPLORE ADAPTIVE TOOLING",
      color: "text-cyan-400",
      borderColor: "border-cyan-500/40",
      explanation: "Self-centering concentric 3-jaw motorized iris chuck automatically adjusts to outer cable diameters from 4.0mm to 28.0mm without manual collet changeovers.",
      visualSvg: (
        <svg className="w-full h-24 text-cyan-400" viewBox="0 0 200 100" fill="none">
          <circle cx="100" cy="50" r="38" stroke="#1d2e45" strokeWidth="3" />
          <circle cx="100" cy="50" r="28" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
          {/* 3 Jaws */}
          <path d="M100 12 V28 M68 68 L80 58 M132 68 L120 58" stroke="#38bdf8" strokeWidth="3" />
          <circle cx="100" cy="50" r="10" fill="#0d1624" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="100" y="92" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle">4.0 mm – 28.0 mm IRIS</text>
        </svg>
      )
    },
    {
      id: "PIL-02",
      title: "Vision-Guided Preparation",
      icon: Eye,
      targetId: "vision",
      actionLabel: "OPEN VISION SIMULATOR",
      color: "text-emerald-400",
      borderColor: "border-emerald-500/40",
      explanation: "12MP telecentric global shutter camera with diffuse LED backlight table measures wall profile, edge roughness, and thickness uniformity at sub-pixel resolution.",
      visualSvg: (
        <svg className="w-full h-24 text-emerald-400" viewBox="0 0 200 100" fill="none">
          <rect x="50" y="70" width="100" height="15" rx="3" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
          <rect x="80" y="15" width="40" height="25" rx="4" fill="#121e2d" stroke="#10b981" strokeWidth="1.5" />
          <circle cx="100" cy="27" r="6" stroke="#38bdf8" strokeWidth="1.5" />
          <polygon points="85,40 115,40 135,70 65,70" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeDasharray="2 2" />
          <text x="100" y="95" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle">12MP TELECENTRIC 8µm/PX</text>
        </svg>
      )
    },
    {
      id: "PIL-03",
      title: "Closed-Loop Verification",
      icon: ShieldCheck,
      targetId: "standards",
      actionLabel: "VIEW COMPLIANCE STANDARDS",
      color: "text-amber-400",
      borderColor: "border-amber-500/40",
      explanation: "Real-time decision gate evaluates width b and thickness d against IEC 60811 limits, rejecting non-compliant samples before irreversible dumbbell punching.",
      visualSvg: (
        <svg className="w-full h-24 text-amber-400" viewBox="0 0 200 100" fill="none">
          <path d="M30 50 H80 L100 30 H170" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M80 50 L100 70 H170" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="2 2" />
          <circle cx="80" cy="50" r="5" fill="#f59e0b" />
          <rect x="110" y="20" width="55" height="20" rx="3" fill="#065f46" stroke="#10b981" strokeWidth="1" />
          <text x="137" y="33" fill="#10b981" fontSize="7" fontFamily="monospace" textAnchor="middle">PASS GATE</text>
          <rect x="110" y="60" width="55" height="20" rx="3" fill="#7f1d1d" stroke="#ef4444" strokeWidth="1" />
          <text x="137" y="73" fill="#ef4444" fontSize="7" fontFamily="monospace" textAnchor="middle">REJECTED</text>
        </svg>
      )
    },
    {
      id: "PIL-04",
      title: "Digital Specimen Passport",
      icon: QrCode,
      targetId: "passport",
      actionLabel: "GENERATE PASSPORT",
      color: "text-purple-400",
      borderColor: "border-purple-500/40",
      explanation: "Generates an encrypted QR code specimen tag linking sample batch, exact vision dimensions, operator ID, and UTM cross-sectional area A = b * d.",
      visualSvg: (
        <svg className="w-full h-24 text-purple-400" viewBox="0 0 200 100" fill="none">
          <rect x="70" y="15" width="60" height="60" rx="4" fill="#ffffff" stroke="#a855f7" strokeWidth="1.5" />
          <rect x="78" y="23" width="16" height="16" fill="#0f172a" />
          <rect x="106" y="23" width="16" height="16" fill="#0f172a" />
          <rect x="78" y="51" width="16" height="16" fill="#0f172a" />
          <rect x="100" y="45" width="8" height="8" fill="#a855f7" />
          <text x="100" y="92" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle">QR PASSPORT TAG & LIMS API</text>
        </svg>
      )
    }
  ];

  return (
    <section id="solution" className="py-20 bg-[#080d16] border-t border-[#1d2e45] relative bg-grid-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#121e2d] border border-[#1d2e45] text-cyan-400 typo-tech-label">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>The Core Solution Philosophy</span>
          </div>

          <h2 className="typo-section-title text-cyan-400 leading-tight">
            "A machine that adapts to the cable, not a cable that adapts to the machine."
          </h2>

          <p className="typo-body text-slate-300 max-w-2xl mx-auto">
            CableSpec breaks the manual preparation bottleneck through four integrated engineering pillars designed specifically for compliance testing laboratories.
          </p>
        </div>

        {/* 4 Innovation Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => {
            const IconComp = p.icon;
            return (
              <PanelCard key={p.id} className="p-6 space-y-4 flex flex-col justify-between hover:border-cyan-500/60 transition-all duration-300">
                
                <div className="space-y-3">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between border-b border-[#1d2e45] pb-3">
                    <span className="typo-metadata text-[9px]">{p.id}</span>
                    <div className="w-9 h-9 rounded-lg bg-[#0d1624] border border-[#1d2e45] flex items-center justify-center text-cyan-400">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Explanation */}
                  <h3 className={`typo-subsection-title text-lg ${p.color}`}>
                    {p.title}
                  </h3>

                  <p className="typo-body text-xs text-slate-300 font-sans leading-relaxed">
                    {p.explanation}
                  </p>
                </div>

                {/* Relevant Machine Graphic SVG */}
                <div className="p-2 rounded-xl bg-[#0d1624] border border-[#1d2e45]">
                  {p.visualSvg}
                </div>

                {/* Action Link Button */}
                <div className="pt-2">
                  <Button 
                    onClick={() => handleScroll(p.targetId)} 
                    variant="outline" 
                    size="sm" 
                    icon={ArrowRight}
                    className="w-full text-[10px]"
                  >
                    {p.actionLabel}
                  </Button>
                </div>

              </PanelCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
