import React from 'react';
import { Cpu, Cog, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CableCrossSection } from './CableGraphics';
import { Button, MetricCard, StatusBadge, PanelCard, DashboardCard } from './ui';

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
            <PanelCard className="p-4 space-y-2">
              <div className="flex items-center gap-2 typo-tech-label text-amber-400">
                <Cog className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '10s' }} />
                <span>HARDWARE MACHINE PRIMARY INNOVATION</span>
              </div>
              <p className="typo-body text-xs text-slate-300">
                The core physical machine performs multi-axis mechanical feeding, thermal flattening, and 20 kN die punching. The smartphone application serves as the supporting <strong className="text-cyan-400">Digital Specimen Passport</strong> & LIMS traceability layer.
              </p>
            </PanelCard>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button onClick={onExplorePipeline} variant="primary" size="md" icon={ArrowRight}>
                EXPLORE MACHINE PIPELINE
              </Button>

              <a href="#architecture">
                <Button variant="secondary" size="md" icon={Cpu}>
                  TECHNICAL DOSSIER
                </Button>
              </a>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#1d2e45]">
              <MetricCard label="Cycle Time" value="35s" subtext="vs 8m manual prep" color="white" />
              <MetricCard label="Vision Tolerancing" value="±0.015mm" subtext="Sub-pixel camera" color="cyan" />
              <MetricCard label="Digital Traceability" value="100%" subtext="QR passport tag" color="emerald" />
            </div>

          </div>

          {/* Right Visual: Cable Specimen Passport Screen Graphic matching Phone App */}
          <div className="lg:col-span-5">
            <PanelCard className="shadow-2xl space-y-5">
              
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
                    <StatusBadge variant="pass" className="inline-block mt-1">
                      STANDARD-READY
                    </StatusBadge>
                  </div>
                </div>

                {/* Right PASS Badge Gauge */}
                <DashboardCard className="flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 rounded-full border-2 border-emerald-500 bg-emerald-950/40 flex items-center justify-center mb-1 text-emerald-400">
                    <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                  </div>
                  <span className="typo-status-badge border-0 bg-transparent text-emerald-400 px-0">PASS VERIFIED</span>
                  <span className="typo-metadata text-[9px] mt-0.5">Alignment • Geometry • Surface</span>
                </DashboardCard>

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

            </PanelCard>
          </div>

        </div>

      </div>
    </section>
  );
}
