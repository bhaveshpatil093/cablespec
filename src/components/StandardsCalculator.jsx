import React, { useState } from 'react';
import { BookOpen, CheckCircle, FileText, Scale, Info, Layers } from 'lucide-react';
import { CABLESPEC_PROJECT } from '../data/cablespecData';

export default function StandardsCalculator() {
  const [selectedStandard, setSelectedStandard] = useState(0);
  const [inputWidth, setInputWidth] = useState(4.0);
  const [inputThick, setInputThick] = useState(1.5);

  const standards = CABLESPEC_PROJECT.standards;
  const currentStd = standards[selectedStandard];

  const calcArea = (parseFloat(inputWidth || 0) * parseFloat(inputThick || 0)).toFixed(3);

  return (
    <section id="standards" className="py-20 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>International Compliance Reference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Testing Standards & Specification Engine
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 font-mono">
            CableSpec compliance parameters mapped directly against IEC 60811-1-1, IS 10810, and ASTM D638 testing standards.
          </p>
        </div>

        {/* Standard Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {standards.map((std, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedStandard(idx)}
              className={`px-5 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all border ${
                selectedStandard === idx
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800'
              }`}
            >
              <span>{std.code}</span>
              <span className="text-[10px] block opacity-75 font-normal">{std.region}</span>
            </button>
          ))}
        </div>

        {/* Selected Standard Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Requirements & Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/30 bg-slate-900/80 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950 px-2.5 py-1 rounded border border-cyan-800">
                  {currentStd.region} STANDARD REFERENCE
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 font-display">
                  {currentStd.code}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-1 leading-relaxed">
                  {currentStd.title}
                </p>
              </div>

              {/* Key Requirements List */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                  Mandatory Specimen Preparation Criteria:
                </h4>
                {currentStd.keyRequirements.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-sans">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Dumbbell Dimensions & Calculator */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 bg-slate-950 space-y-6">
              
              <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest border-b border-slate-800 pb-3 flex items-center gap-2">
                <Scale className="w-4 h-4" />
                STANDARD DIE GEOMETRY SPECIFICATIONS
              </h4>

              {/* Dumbbell Types Table */}
              <div className="space-y-3 font-mono text-xs">
                {Object.entries(currentStd.dumbbellParams).map(([typeKey, params]) => (
                  <div key={typeKey} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                    <span className="text-cyan-300 font-bold uppercase block text-xs">
                      Die Profile: {typeKey.toUpperCase()}
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                      <div>Overall Length: <strong className="text-white">{params.totalLen}</strong></div>
                      <div>Gauge Length: <strong className="text-white">{params.gaugeLen}</strong></div>
                      <div>Parallel Width (b): <strong className="text-cyan-400">{params.width}</strong></div>
                      <div>Max Thickness (d): <strong className="text-amber-400">{params.maxThick}</strong></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Area Calculator Widget */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-cyan-500/30 space-y-3">
                <span className="text-xs font-mono font-bold text-white block uppercase">
                  Specimen Cross-Sectional Area Calculator
                </span>
                
                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div>
                    <label className="text-slate-400 block mb-1">Width b (mm):</label>
                    <input
                      type="number"
                      step="0.1"
                      value={inputWidth}
                      onChange={(e) => setInputWidth(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white font-bold"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">Thickness d (mm):</label>
                    <input
                      type="number"
                      step="0.1"
                      value={inputThick}
                      onChange={(e) => setInputThick(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded p-2 text-white font-bold"
                    />
                  </div>
                </div>

                <div className="p-3 rounded bg-cyan-950 border border-cyan-800 flex justify-between items-center text-xs font-mono">
                  <span className="text-cyan-300">Cross-Sectional Area (A = b × d):</span>
                  <span className="text-emerald-400 font-extrabold text-base">{calcArea} mm²</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
