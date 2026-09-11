import React, { useState } from 'react';
import { 
  FileText, TrendingUp, DollarSign, ShieldAlert, Award, 
  BarChart3, CheckCircle2, XCircle, ArrowUpRight, PieChart, Layers
} from 'lucide-react';
import { CABLESPEC_PROJECT } from '../data/cablespecData';

export default function ResearchMarketFeasibility() {
  const [activeSubTab, setActiveSubTab] = useState('problem');
  const res = CABLESPEC_PROJECT.research;

  return (
    <section id="research" className="py-20 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-4">
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
              className={`px-4 py-2 rounded-lg font-bold transition-all border ${
                activeSubTab === item.id
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md'
                  : 'bg-slate-950 text-slate-300 border-slate-800 hover:bg-slate-800'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Tab 1: Problem & Solution */}
        {activeSubTab === 'problem' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Problem Statement */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-red-500/30 bg-slate-950/80 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-400 uppercase tracking-widest border-b border-slate-800 pb-3">
                <ShieldAlert className="w-4 h-4 text-red-400" />
                <span>CURRENT INDUSTRY PAIN POINTS</span>
              </div>
              
              <h3 className="text-xl font-bold text-white font-display">
                {res.problemStatement.headline}
              </h3>

              <div className="space-y-3 pt-2">
                {res.problemStatement.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0"></span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Proposed CableSpec Solution */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-emerald-500/30 bg-slate-950/80 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest border-b border-slate-800 pb-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>CABLESPEC INNOVATION BREAKTHROUGH</span>
              </div>
              
              <h3 className="text-xl font-bold text-white font-display">
                {res.solutionSummary.headline}
              </h3>

              <div className="space-y-3 pt-2">
                {res.solutionSummary.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Prior Art Comparison Matrix */}
        {activeSubTab === 'matrix' && (
          <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 bg-slate-950 overflow-x-auto">
            <h3 className="text-lg font-bold text-white font-display mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-cyan-400" />
              Prior Art vs. CableSpec Innovation Matrix
            </h3>

            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="border-b border-slate-800 text-cyan-400 bg-slate-900/80">
                  <th className="p-3">EVALUATION METRIC</th>
                  <th className="p-3 text-slate-400">MANUAL UTILITY RAZOR</th>
                  <th className="p-3 text-slate-400">INDUSTRIAL CNC MILLING</th>
                  <th className="p-3 text-cyan-300 bg-cyan-950/60 border-l border-r border-cyan-800">CABLESPEC SYSTEM (OURS)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {res.priorArtMatrix.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-900/40">
                    <td className="p-3 font-bold text-white">{row.feature}</td>
                    <td className="p-3 text-slate-400">{row.manualRazor}</td>
                    <td className="p-3 text-slate-400">{row.cncMilling}</td>
                    <td className="p-3 text-cyan-300 font-bold bg-cyan-950/30 border-l border-r border-cyan-800/40">
                      {row.cableSpec}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 3: Bill of Materials (BOM) */}
        {activeSubTab === 'bom' && (
          <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 bg-slate-950 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  Prototype Engineering Bill of Materials (BOM)
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  Detailed component cost breakdown for physical prototype construction.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-cyan-950 border border-cyan-800 text-right">
                <span className="text-[10px] font-mono text-cyan-400 block uppercase">TOTAL PROTOTYPE COST</span>
                <span className="text-2xl font-mono font-extrabold text-white">
                  ₹2,27,000 INR <span className="text-xs text-slate-400 font-normal">(~$2,730 USD)</span>
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 bg-slate-900">
                    <th className="p-3">SUBSYSTEM CATEGORY</th>
                    <th className="p-3">SUPPLIER / SPECIFICATION</th>
                    <th className="p-3 text-right">ESTIMATED COST (INR)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {res.bom.map((item, i) => (
                    <tr key={i} className="hover:bg-slate-900/30">
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Target Audience & TAM/SAM/SOM */}
            <div className="lg:col-span-7 space-y-6">
              <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 bg-slate-950 space-y-4">
                <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-cyan-400" />
                  Target Customer Ecosystem & Market Size
                </h3>

                <div className="space-y-2 text-xs font-mono">
                  {res.marketSurvey.targetAudience.map((aud, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span>{aud}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Global TAM</span>
                    <span className="text-sm font-mono font-bold text-white">{res.marketSurvey.tamSamSom.tam}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-[10px] font-mono text-cyan-400 uppercase block">Indian SAM</span>
                    <span className="text-sm font-mono font-bold text-cyan-400">{res.marketSurvey.tamSamSom.sam}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-cyan-950 border border-cyan-800">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase block">Target SOM</span>
                    <span className="text-sm font-mono font-bold text-emerald-400">{res.marketSurvey.tamSamSom.som}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* ROI Analysis */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 bg-slate-950 space-y-4">
                <h3 className="text-lg font-bold text-white font-display flex items-center gap-2 text-emerald-400">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  Commercial ROI & Payback
                </h3>

                <div className="space-y-4 font-mono">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400 block uppercase">Est. Annual Lab Labor Savings:</span>
                    <span className="text-2xl font-bold text-emerald-400 mt-1 block">
                      {res.marketSurvey.roiAnalysis.labSavingsPerYear}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400 block uppercase">Full Equipment Payback Period:</span>
                    <span className="text-2xl font-bold text-cyan-400 mt-1 block">
                      {res.marketSurvey.roiAnalysis.paybackPeriodMonths}
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400 block uppercase">Invalid Test Rate Reduction:</span>
                    <span className="text-xl font-bold text-purple-400 mt-1 block">
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
