import React from 'react';
import { Cpu, ShieldCheck, Zap, Cog, Smartphone, ChevronRight, Activity, Award, CheckCircle2, ArrowRight, Layers } from 'lucide-react';
import { CABLESPEC_PROJECT } from '../data/cablespecData';

export default function Hero({ onExplorePipeline }) {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden bg-grid-pattern bg-radial-glow">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Important Vision Callout Banner */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 mb-8 backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="text-xs font-mono font-medium text-cyan-300">
            SIH 2026 Innovation Candidate: Automated Mechanical Hardware Machine
          </span>
          <span className="text-xs text-slate-500">|</span>
          <span className="text-[11px] font-mono text-slate-400">
            IEC 60811 & IS 10810 Compliant
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Cable<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Spec</span>
            </h1>
            
            <p className="text-lg sm:text-xl font-mono text-cyan-300/90 font-medium">
              {CABLESPEC_PROJECT.subtitle}
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              An end-to-end physical mechatronic automation machine engineered for cable compliance laboratories. Automatically feeds raw cables, strips outer sheaths, flattens insulation, inspects sub-pixel optical quality, and punches standardized dumbbell test specimens for tensile testing.
            </p>

            {/* Core Innovation Clarification Card */}
            <div className="p-4 rounded-xl glass-panel border border-cyan-500/30 bg-slate-900/60 shadow-xl space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                <Cog className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
                <span>Primary Focus: Physical Hardware Machine</span>
              </div>
              <p className="text-xs text-slate-300 leading-normal">
                The core engineering solution lies in the physical multi-axis mechanical feed, thermal press, self-centering adaptive iris cutter, and 20 kN die punch. The smartphone app functions strictly as a supporting <strong className="text-cyan-300">Digital Specimen Passport</strong> & LIMS traceability layer.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExplorePipeline}
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-mono text-xs sm:text-sm font-bold tracking-wider hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all transform active:scale-95"
              >
                <span>EXPLORE MACHINE PIPELINE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#architecture"
                className="flex items-center gap-2 px-6 py-3 rounded-lg glass-card text-xs sm:text-sm font-mono font-semibold text-slate-200 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>TECHNICAL DOSSIER</span>
              </a>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80">
              <div>
                <span className="text-2xl sm:text-3xl font-mono font-bold text-white">35s</span>
                <p className="text-[11px] text-slate-400 font-mono mt-0.5">Cycle Time (vs 8m manual)</p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-mono font-bold text-cyan-400">±0.015mm</span>
                <p className="text-[11px] text-slate-400 font-mono mt-0.5">Vision Tolerancing</p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-mono font-bold text-emerald-400">&lt; 1.2%</span>
                <p className="text-[11px] text-slate-400 font-mono mt-0.5">Invalid Test Rate</p>
              </div>
            </div>

          </div>

          {/* Right Visual: Hardware Blueprint & Live Simulated Telemetry */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl glass-panel p-6 border border-cyan-500/30 shadow-2xl scanline-effect bg-slate-900/90">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
                  <span className="font-mono text-xs font-bold text-slate-200 uppercase tracking-wider">
                    HARDWARE TELEMETRY DASHBOARD
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                  STM32 RTOS v4.2
                </span>
              </div>

              {/* Hardware Machine Concept Visualizer (SVG CAD Representation) */}
              <div className="relative w-full h-56 bg-slate-950 rounded-xl border border-slate-800 p-4 flex flex-col items-center justify-center overflow-hidden">
                <svg className="w-full h-full text-cyan-400/80" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Grid Lines */}
                  <path d="M0 50H400M0 100H400M0 150H400M100 0V200M200 0V200M300 0V200" stroke="rgba(56, 189, 248, 0.08)" strokeDasharray="4 4" />

                  {/* Raw Cable Input */}
                  <rect x="20" y="90" width="70" height="20" rx="10" fill="#1e293b" stroke="#0ea5e9" strokeWidth="2" />
                  <circle cx="55" cy="100" r="6" fill="#0ea5e9" />
                  <text x="30" y="80" fill="#94a3b8" fontSize="10" fontFamily="monospace">1. FEED</text>

                  {/* Arrow 1 */}
                  <path d="M95 100H115" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />

                  {/* Adaptive Cutter Ring */}
                  <circle cx="140" cy="100" r="24" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
                  <path d="M140 76V84M140 116V124M116 100H124M156 100H164" stroke="#f59e0b" strokeWidth="2" />
                  <text x="115" y="65" fill="#f59e0b" fontSize="10" fontFamily="monospace">2. STRIP</text>

                  {/* Arrow 2 */}
                  <path d="M168 100H188" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />

                  {/* Thermal Press Rollers */}
                  <rect x="190" y="75" width="35" height="15" rx="3" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" />
                  <rect x="190" y="110" width="35" height="15" rx="3" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" />
                  <path d="M207 90V110" stroke="#06b6d4" strokeWidth="2" strokeDasharray="2 2" />
                  <text x="180" y="65" fill="#06b6d4" fontSize="10" fontFamily="monospace">3. FLATTEN</text>

                  {/* Arrow 3 */}
                  <path d="M230 100H250" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />

                  {/* Vision Camera */}
                  <path d="M270 60L285 75H255L270 60Z" fill="#10b981" />
                  <rect x="255" y="75" width="30" height="12" fill="#064e3b" stroke="#10b981" />
                  <path d="M270 87L250 120H290L270 87Z" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeDasharray="2 2" />
                  <text x="245" y="50" fill="#10b981" fontSize="10" fontFamily="monospace">4. VISION</text>

                  {/* Arrow 4 */}
                  <path d="M295 100H315" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />

                  {/* Die Press */}
                  <rect x="320" y="70" width="50" height="60" rx="4" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
                  <path d="M335 90H355M345 80V120" stroke="#a855f7" strokeWidth="2" />
                  <text x="320" y="60" fill="#a855f7" fontSize="10" fontFamily="monospace">5. PUNCH</text>
                </svg>

                <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-slate-400 bg-slate-900/90 px-3 py-1 rounded border border-slate-800">
                  <span className="text-cyan-400 font-bold">STATE: FEEDING & CALIBRATING</span>
                  <span>MOTOR TEMP: 38.4°C</span>
                  <span>LOAD: 14.2 kN</span>
                </div>
              </div>

              {/* Live Simulated Sensor Telemetry Grid */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Cable Outer Diameter</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="text-base font-mono font-bold text-white">16.42 mm</span>
                    <span className="text-[10px] font-mono text-emerald-400">±0.02 mm</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Flattening Temp PID</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="text-base font-mono font-bold text-amber-400">62.5 °C</span>
                    <span className="text-[10px] font-mono text-slate-400">SET: 63°C</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Punch Force Transducer</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="text-base font-mono font-bold text-purple-400">18.4 kN</span>
                    <span className="text-[10px] font-mono text-purple-300">MAX: 20 kN</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Companion App Passport</span>
                  <div className="flex items-baseline justify-between mt-1">
                    <span className="text-xs font-mono font-bold text-cyan-400 truncate">QR-PASSPORT-904</span>
                    <span className="text-[10px] font-mono text-emerald-400">SYNCED</span>
                  </div>
                </div>
              </div>

              {/* Supporting Companion Layer Badge */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Companion Layer:</span>
                </span>
                <span className="text-cyan-300 font-semibold bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                  Digital Passport Tag Reader Active
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
