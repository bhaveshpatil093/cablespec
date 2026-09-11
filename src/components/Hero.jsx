import React from 'react';
import { Cpu, Cog, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CableCrossSection } from './CableGraphics';

export default function Hero({ onExplorePipeline }) {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-[#080d16] bg-grid-blueprint">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tagline Banner */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#121e2d] border border-[#1d2e45] mb-8">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
          <span className="typo-tech-label text-cyan-300">
            SPECIMEN PASSPORT SYSTEM • SP-2026-00127
          </span>
          <span className="text-xs text-slate-600">|</span>
          <span className="typo-metadata text-slate-400">
            PREPARE VERIFY TRACE TRUST
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="typo-tech-label text-cyan-400 block">
                AUTOMATED CABLE SPECIMEN PREPARATION SYSTEM
              </span>
              <h1 className="typo-page-title">
                CABLE<span className="text-cyan-400">SPEC</span>
              </h1>
            </div>
            
            <p className="text-lg font-mono text-slate-300 font-medium leading-snug">
              Precision mechanical hardware automation for cable compliance testing (IEC 60811 / IS 10810 / ASTM).
            </p>

            <p className="typo-body">
              Replaces manual razor cutting with an end-to-end physical mechatronic machine. Automatically feeds raw cable, strips outer sheath, flattens insulation, inspects sub-pixel optical quality, and punches standard dumbbell test specimens.
            </p>

            {/* Core Innovation Hardware Callout Card */}
            <div className="dashboard-panel p-4 space-y-2 relative">
              <div className="flex items-center gap-2 typo-tech-label text-amber-400">
                <Cog className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '10s' }} />
                <span>HARDWARE MACHINE PRIMARY INNOVATION</span>
              </div>
              <p className="typo-body text-xs text-slate-300">
                The core physical machine performs multi-axis mechanical feeding, thermal flattening, and 20 kN die punching. The smartphone application serves as the supporting <strong className="text-cyan-400">Digital Specimen Passport</strong> & LIMS traceability layer.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExplorePipeline}
                className="flex items-center gap-2 px-6 py-3 rounded bg-cyan-500 text-slate-950 typo-tech-label text-xs sm:text-sm font-bold tracking-wider hover:bg-cyan-400 shadow-md shadow-cyan-500/20 transition-all active:scale-95"
              >
                <span>EXPLORE MACHINE PIPELINE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#architecture"
                className="flex items-center gap-2 px-6 py-3 rounded bg-[#121e2d] border border-[#1d2e45] typo-tech-label text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>TECHNICAL DOSSIER</span>
              </a>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1d2e45]">
              <div>
                <span className="typo-metric text-white">35s</span>
                <p className="typo-metadata mt-0.5">Cycle Time (vs 8m manual)</p>
              </div>
              <div>
                <span className="typo-metric text-cyan-400">±0.015mm</span>
                <p className="typo-metadata mt-0.5">Vision Tolerancing</p>
              </div>
              <div>
                <span className="typo-metric text-emerald-400">100%</span>
                <p className="typo-metadata mt-0.5">Digital Traceability</p>
              </div>
            </div>

          </div>

          {/* Right Visual: Cable Specimen Passport Screen Graphic matching Phone App */}
          <div className="lg:col-span-5">
            <div className="dashboard-panel p-6 shadow-2xl space-y-5">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#1d2e45] pb-4">
                <div>
                  <span className="typo-tech-label text-slate-400 block">SPECIMEN PASSPORT</span>
                  <span className="typo-subsection-title text-white">SP-2026-00127</span>
                </div>

                <div className="text-right typo-metadata">
                  <span className="text-slate-300 font-bold block uppercase">CABLESPEC</span>
                  <span className="text-cyan-400 font-bold">PREPARE VERIFY TRACE TRUST</span>
                </div>
              </div>

              {/* Cable Cross-Section SVG Graphic & Measurement Scale Ruler */}
              <CableCrossSection cableLabel="4-CORE ALUMINIUM CABLE (16 mm²)" />

              {/* Status & Vision Verification Gauge Block matching Phone App */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                
                {/* Left Specs */}
                <div className="space-y-3 font-mono text-xs">
                  <div>
                    <span className="typo-tech-label text-slate-400 block">CABLE TYPE</span>
                    <span className="font-bold text-white">4-Core Aluminium Cable</span>
                  </div>

                  <div>
                    <span className="typo-tech-label text-slate-400 block">SIZE / BATCH</span>
                    <span className="font-bold text-white">16 mm² • B-0426</span>
                  </div>

                  <div>
                    <span className="typo-tech-label text-slate-400 block">PREPARATION STATUS</span>
                    <span className="typo-status-badge inline-block mt-1">
                      STANDARD-READY
                    </span>
                  </div>
                </div>

                {/* Right PASS Badge Gauge */}
                <div className="dashboard-card p-3 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full border-2 border-emerald-500 bg-emerald-950/40 flex items-center justify-center mb-1 text-emerald-400">
                    <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                  </div>
                  <span className="typo-status-badge border-0 bg-transparent text-emerald-400 px-0">PASS VERIFIED</span>
                  <span className="typo-metadata text-[9px] mt-0.5">Alignment • Geometry • Surface</span>
                </div>

              </div>

              {/* Supporting Companion Layer Badge */}
              <div className="pt-3 border-t border-[#1d2e45] flex items-center justify-between typo-metadata">
                <span className="flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Companion Layer:</span>
                </span>
                <span className="text-cyan-300 font-semibold bg-[#0d1624] px-2 py-0.5 rounded border border-[#1d2e45]">
                  Digital Passport Reader Active
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
