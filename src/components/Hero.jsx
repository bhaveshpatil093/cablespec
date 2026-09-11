import React from 'react';
import { Cpu, Cog, ArrowRight, ShieldCheck, Camera, RefreshCw, QrCode } from 'lucide-react';
import PhysicalMachineRender from './PhysicalMachineRender';
import { Button, MetricCard, DashboardCard } from './ui';

export default function Hero({ onExplorePipeline }) {
  const handleViewPrototype = () => {
    const el = document.getElementById('architecture');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const techIndicators = [
    {
      code: "SYS-LAB-01",
      label: "ADAPTIVE",
      desc: "Multi-gauge preparation concept",
      icon: Cog,
      color: "text-cyan-400"
    },
    {
      code: "SYS-LAB-02",
      label: "VISION-GUIDED",
      desc: "Camera-assisted verification",
      icon: Camera,
      color: "text-emerald-400"
    },
    {
      code: "SYS-LAB-03",
      label: "CLOSED-LOOP",
      desc: "Verify before irreversible punching",
      icon: RefreshCw,
      color: "text-amber-400"
    },
    {
      code: "SYS-LAB-04",
      label: "TRACEABLE",
      desc: "Digital specimen passport",
      icon: QrCode,
      color: "text-purple-400"
    }
  ];

  return (
    <section id="hero" className="relative pt-24 pb-20 overflow-hidden bg-[#080d16] bg-grid-blueprint">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Top Tagline Banner */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#121e2d] border border-[#1d2e45]">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
          <span className="typo-tech-label text-cyan-300">
            SPECIMEN PASSPORT SYSTEM • HARDWARE PRIMARY
          </span>
          <span className="text-xs text-slate-600">|</span>
          <span className="typo-metadata text-slate-400">
            PREPARE VERIFY TRACE TRUST
          </span>
        </div>

        {/* Hero Title & Main Statement */}
        <div className="max-w-4xl space-y-4">
          <h1 className="typo-page-title">
            CABLE<span className="text-cyan-400">SPEC</span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-mono text-cyan-300 font-extrabold tracking-wide">
            Adaptive Automated Cable Specimen Preparation System
          </h2>

          <p className="typo-body text-base text-slate-300 leading-relaxed max-w-3xl">
            CableSpec automates cable specimen preparation, verifies the specimen using vision, and creates a traceable digital specimen record for compliance laboratories adhering to IEC 60811, IS 10810, and ASTM standards.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button onClick={onExplorePipeline} variant="primary" size="lg" icon={ArrowRight}>
              EXPLORE THE SYSTEM
            </Button>

            <Button onClick={handleViewPrototype} variant="secondary" size="lg" icon={Cpu}>
              VIEW PROTOTYPE
            </Button>
          </div>
        </div>

        {/* DOMINANT VISUAL HIERARCHY: PHYSICAL AUTOMATED MACHINE RENDERING */}
        <div className="space-y-4">
          <div className="flex items-center justify-between typo-tech-label text-slate-400">
            <span className="flex items-center gap-2">
              <Cog className="w-4 h-4 text-cyan-400" />
              PHYSICAL HARDWARE MACHINE SCHEMATIC
            </span>
            <span className="text-emerald-400 font-bold">
              OVERHEAD VISION CAMERA MOUNTED ABOVE VERIFICATION STAGE
            </span>
          </div>

          {/* Machine Rendering Visual Component */}
          <PhysicalMachineRender />
        </div>

        {/* Core Metrics Ribbon */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <MetricCard label="Specimen Cycle Time" value="35s" subtext="vs 8 minutes manual prep" color="white" />
          <MetricCard label="Vision Tolerancing" value="±0.015mm" subtext="Telecentric sub-pixel inspection" color="cyan" />
          <MetricCard label="Digital Traceability" value="100%" subtext="QR passport & LIMS JSON sync" color="emerald" />
        </div>

        {/* TECHNICAL SYSTEM INDICATORS (ENGINEERING LABELS UNDER HERO) */}
        <div className="pt-6 border-t border-[#1d2e45]">
          <span className="typo-tech-label text-slate-400 block mb-3">
            TECHNICAL ARCHITECTURE INDICATORS
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techIndicators.map((ind, idx) => {
              const IconComp = ind.icon;
              return (
                <DashboardCard key={idx} className="p-4 space-y-2 relative border-l-2 border-l-cyan-400">
                  <div className="flex items-center justify-between">
                    <span className="typo-metadata text-[9px]">{ind.code}</span>
                    <IconComp className={`w-4 h-4 ${ind.color}`} />
                  </div>

                  <div>
                    <h4 className={`font-mono font-extrabold text-xs tracking-wider uppercase ${ind.color}`}>
                      {ind.label}
                    </h4>
                    <p className="typo-body text-xs text-slate-300 mt-0.5">
                      {ind.desc}
                    </p>
                  </div>
                </DashboardCard>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
