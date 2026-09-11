import React, { useState } from 'react';
import { 
  FileText, TrendingUp, ShieldAlert, 
  BarChart3, CheckCircle2, PieChart
} from 'lucide-react';
import { CABLESPEC_PROJECT } from '../data/cablespecData';

export default function ResearchMarketFeasibility() {
  const [activeSubTab, setActiveSubTab] = useState('problem');
  const res = CABLESPEC_PROJECT.research;

  return (
    <section id="research" className="py-20 bg-[#080d16] border-t border-[#1d2e45] relative bg-grid-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#121e2d] border border-[#1d2e45] text-cyan-400 font-mono text-xs uppercase tracking-wider mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Research & Business Dossier</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Problem Statement, Innovation & Market Survey
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 font-mono">
            Empirical justification, prior art benchmark matrix, Bill of Materials (BOM), and financial ROI analysis for laboratory deployment.
          </p>
        </div>

        {/* Sub Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 font-mono text-xs">
          {[
            { id: 'problem', name: 'Problem & Solution' },
            { id: 'matrix', name: 'Prior Art Comparison' },
            { id: 'bom', name: 'Bill of Materials (BOM)' },
            { id: 'market', name: 'Market & ROI Analysis' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSubTab(item.id)}
              className={`px-4 py-2 rounded font-bold transition-all border ${
                activeSubTab === item.id
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md'
                  : 'bg-[#121e2d] text-slate-300 border-[#1d2e45] hover:bg-[#162436]'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Tab 1: Problem & Solution */}
        {activeSubTab === 'problem' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl bg-[#121e2d] p-6 sm:p-8 border border-red-500/30 space-y-4 font-mono">
              <div className="flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-widest border-b border-[#1d2e45] pb-3">
                <ShieldAlert className="w-4 h-4 text-red-400" />
                <span>CURRENT INDUSTRY PAIN POINTS</span>
              </div>
              
              <h3 className="text-lg font-bold text-white font-display">
                {res.problemStatement.headline}
              </h3>

              <div className="space-y-2.5 pt-2">
                {res.problemStatement.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded bg-[#0d1624] border border-[#1d2e45] text-xs text-slate-300 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#121e2d] p-6 sm:p-8 border border-emerald-500/30 space-y-4 font-mono">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-widest border-b border-[#1d2e45] pb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>CABLESPEC INNOVATION BREAKTHROUGH</span>
              </div>
              
              <h3 className="text-lg font-bold text-white font-display">
                {res.solutionSummary.headline}
              </h3>

              <div className="space-y-2.5 pt-2">
                {res.solutionSummary.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded bg-[#0d1624] border border-[#1d2e45] text-xs text-slate-300 font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Prior Art Matrix */}
        {activeSubTab === 'matrix' && (
          <div className="rounded-2xl bg-[#121e2d] p-6 border border-[#1d2e45] overflow-x-auto font-mono text-xs">
            <h3 className="text-base font-bold text-white font-display mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              Prior Art vs. CableSpec Innovation Matrix
            </h3>

            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#1d2e45] text-cyan-400 bg-[#0d1624]">
                  <th className="p-3">EVALUATION METRIC</th>
                  <th className="p-3 text-slate-400">MANUAL UTILITY RAZOR</th>
                  <th className="p-3 text-slate-400">INDUSTRIAL CNC MILLING</th>
                  <th className="p-3 text-cyan-300 bg-[#162436] border-l border-r border-[#1d2e45]">CABLESPEC SYSTEM (OURS)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1d2e45]/60">
                {res.priorArtMatrix.map((row, i) => (
                  <tr key={i} className="hover:bg-[#0d1624]/60">
                    <td className="p-3 font-bold text-white">{row.feature}</td>
                    <td className="p-3 text-slate-400">{row.manualRazor}</td>
                    <td className="p-3 text-slate-400">{row.cncMilling}</td>
                    <td className="p-3 text-cyan-300 font-bold bg-[#162436]/40 border-l border-r border-[#1d2e45]">
                      {row.cableSpec}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 3: BOM */}
        {activeSubTab === 'bom' && (
          <div className="rounded-2xl bg-[#121e2d] p-6 border border-[#1d2e45] space-y-6 font-mono text-xs">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1d2e45] pb-4">
              <div>
                <h3 className="text-lg font-bold text-white font-display">
                  Prototype Engineering Bill of Materials (BOM)
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Detailed component cost breakdown for physical prototype construction.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-[#0d1624] border border-[#1d2e45] text-right">
                <span className="text-[10px] text-cyan-400 block uppercase">TOTAL PROTOTYPE COST</span>
                <span className="text-xl font-extrabold text-white">
                  ₹2,27,000 INR <span className="text-xs text-slate-400 font-normal">(~$2,730 USD)</span>
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-[#1d2e45] text-slate-400 bg-[#0d1624]">
                    <th className="p-3">SUBSYSTEM CATEGORY</th>
                    <th className="p-3">SUPPLIER / SPECIFICATION</th>
                    <th className="p-3 text-right">ESTIMATED COST (INR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1d2e45]/60">
                  {res.bom.map((item, i) => (
                    <tr key={i} className="hover:bg-[#0d1624]/40">
                      <td className="p-3 font-semibold text-white">{item.category}</td>
                      <td className="p-3 text-slate-400">{item.supplier}</td>
                      <td className="p-3 font-bold text-cyan-400 text-right">
                        ₹{item.cost.toLocaleString('en-IN')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Market & ROI */}
        {activeSubTab === 'market' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-mono text-xs">
            <div className="lg:col-span-7 space-y-6">
              <div className="rounded-2xl bg-[#121e2d] p-6 border border-[#1d2e45] space-y-4">
                <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
                  <PieChart className="w-4 h-4 text-cyan-400" />
                  Target Customer Ecosystem & Market Size
                </h3>

                <div className="space-y-2">
                  {res.marketSurvey.targetAudience.map((aud, i) => (
                    <div key={i} className="p-3 rounded bg-[#0d1624] border border-[#1d2e45] text-slate-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{aud}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded bg-[#0d1624] border border-[#1d2e45]">
                    <span className="text-[10px] text-slate-400 uppercase block">Global TAM</span>
                    <span className="text-xs font-bold text-white">{res.marketSurvey.tamSamSom.tam}</span>
                  </div>

                  <div className="p-3 rounded bg-[#0d1624] border border-[#1d2e45]">
                    <span className="text-[10px] text-cyan-400 uppercase block">Indian SAM</span>
                    <span className="text-xs font-bold text-cyan-400">{res.marketSurvey.tamSamSom.sam}</span>
                  </div>

                  <div className="p-3 rounded bg-emerald-950/40 border border-emerald-800/40">
                    <span className="text-[10px] text-emerald-400 uppercase block">Target SOM</span>
                    <span className="text-xs font-bold text-emerald-400">{res.marketSurvey.tamSamSom.som}</span>
                  </div>
                </div>

              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl bg-[#121e2d] p-6 border border-[#1d2e45] space-y-4">
                <h3 className="text-base font-bold text-white font-display flex items-center gap-2 text-emerald-400">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  Commercial ROI & Payback
                </h3>

                <div className="space-y-3">
                  <div className="p-3.5 rounded bg-[#0d1624] border border-[#1d2e45]">
                    <span className="text-[10px] text-slate-400 block uppercase">Est. Annual Lab Labor Savings:</span>
                    <span className="text-xl font-bold text-emerald-400 mt-0.5 block">
                      {res.marketSurvey.roiAnalysis.labSavingsPerYear}
                    </span>
                  </div>

                  <div className="p-3.5 rounded bg-[#0d1624] border border-[#1d2e45]">
                    <span className="text-[10px] text-slate-400 block uppercase">Full Equipment Payback Period:</span>
                    <span className="text-xl font-bold text-cyan-400 mt-0.5 block">
                      {res.marketSurvey.roiAnalysis.paybackPeriodMonths}
                    </span>
                  </div>

                  <div className="p-3.5 rounded bg-[#0d1624] border border-[#1d2e45]">
                    <span className="text-[10px] text-slate-400 block uppercase">Invalid Test Rate Reduction:</span>
                    <span className="text-lg font-bold text-purple-400 mt-0.5 block">
                      {res.marketSurvey.roiAnalysis.invalidTestReduction}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
