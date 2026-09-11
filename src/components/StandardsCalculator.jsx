import React, { useState } from 'react';
import { BookOpen, CheckCircle, Scale } from 'lucide-react';
import { CABLESPEC_PROJECT } from '../data/cablespecData';

export default function StandardsCalculator() {
  const [selectedStandard, setSelectedStandard] = useState(0);
  const [inputWidth, setInputWidth] = useState(4.0);
  const [inputThick, setInputThick] = useState(1.5);

  const standards = CABLESPEC_PROJECT.standards;
  const currentStd = standards[selectedStandard];

  const calcArea = (parseFloat(inputWidth || 0) * parseFloat(inputThick || 0)).toFixed(3);

  return (
    <section id="standards" className="py-20 bg-[#080d16] border-t border-[#1d2e45] relative bg-grid-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#121e2d] border border-[#1d2e45] text-cyan-400 font-mono text-xs uppercase tracking-wider mb-4">
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
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 font-mono text-xs">
          {standards.map((std, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedStandard(idx)}
              className={`px-5 py-2.5 rounded font-bold transition-all border ${
                selectedStandard === idx
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md'
                  : 'bg-[#121e2d] text-slate-300 border-[#1d2e45] hover:bg-[#162436]'
              }`}
            >
              <span>{std.code}</span>
              <span className="text-[9px] block opacity-75 font-normal">{std.region}</span>
            </button>
          ))}
        </div>

        {/* Selected Standard Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-mono">
          
          {/* Requirements */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl bg-[#121e2d] p-6 sm:p-8 border border-[#1d2e45] space-y-6">
              <div>
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest bg-[#0d1624] px-2.5 py-1 rounded border border-[#1d2e45]">
                  {currentStd.region} STANDARD REFERENCE
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 font-display">
                  {currentStd.code}
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {currentStd.title}
                </p>
              </div>

              <div className="space-y-2.5">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Mandatory Specimen Preparation Criteria:
                </h4>
                {currentStd.keyRequirements.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded bg-[#0d1624] border border-[#1d2e45] text-xs text-slate-300 font-sans">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Dumbbell Dimensions & Calculator */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-[#121e2d] p-6 border border-[#1d2e45] space-y-6">
              
              <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest border-b border-[#1d2e45] pb-3 flex items-center gap-2">
                <Scale className="w-4 h-4" />
                STANDARD DIE GEOMETRY SPECIFICATIONS
              </h4>

              <div className="space-y-3 text-xs">
                {Object.entries(currentStd.dumbbellParams).map(([typeKey, params]) => (
                  <div key={typeKey} className="p-3 rounded-lg bg-[#0d1624] border border-[#1d2e45] space-y-2">
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

              {/* Calculator */}
              <div className="p-4 rounded-xl bg-[#0d1624] border border-[#1d2e45] space-y-3">
                <span className="text-xs font-bold text-white block uppercase">
                  Specimen Cross-Section Area Calculator
                </span>
                
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="text-slate-400 block mb-1">Width b (mm):</label>
                    <input
                      type="number"
                      step="0.1"
                      value={inputWidth}
                      onChange={(e) => setInputWidth(e.target.value)}
                      className="w-full bg-[#121e2d] border border-[#1d2e45] rounded p-2 text-white font-bold"
                    />
                  </div>

                  <div>
                    <label className="text-slate-400 block mb-1">Thickness d (mm):</label>
                    <input
                      type="number"
                      step="0.1"
                      value={inputThick}
                      onChange={(e) => setInputThick(e.target.value)}
                      className="w-full bg-[#121e2d] border border-[#1d2e45] rounded p-2 text-white font-bold"
                    />
                  </div>
                </div>

                <div className="p-3 rounded bg-emerald-950/40 border border-emerald-800/40 flex justify-between items-center text-xs">
                  <span className="text-emerald-400 font-bold">Cross-Sectional Area (A = b × d):</span>
                  <span className="text-white font-extrabold text-base">{calcArea} mm²</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
