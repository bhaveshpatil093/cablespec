import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { QrCode, Printer, CheckCircle2, Copy, FileText, Check } from 'lucide-react';
import { CableCrossSection, DumbbellBlueprint } from './CableGraphics';

export default function SpecimenPassportGenerator() {
  const [cableType, setCableType] = useState('4-Core Aluminium Cable');
  const [sizeSqMm, setSizeSqMm] = useState('16 mm²');
  const [batchId, setBatchId] = useState('B-0426');
  const [machineId, setMachineId] = useState('CSP-M01');
  const [operatorId, setOperatorId] = useState('LAB-01');
  const [copied, setCopied] = useState(false);

  const passportId = `SP-2026-00127`;

  const passportJSON = JSON.stringify({
    passportId,
    project: 'CableSpec Digital Specimen Passport',
    cableType,
    size: sizeSqMm,
    batch: batchId,
    preparationStatus: 'STANDARD-READY',
    visionVerification: {
      alignment: 'PASS',
      geometry: 'PASS',
      surface: 'PASS'
    },
    created: '10 Sep 2026',
    machineId,
    operator: operatorId,
    tagline: 'PREPARE VERIFY TRACE TRUST'
  }, null, 2);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(passportJSON);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="passport" className="py-20 bg-[#080d16] border-t border-[#1d2e45] relative bg-grid-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#121e2d] border border-[#1d2e45] text-cyan-400 typo-tech-label">
            <QrCode className="w-3.5 h-3.5" />
            <span>Digital Passport & Traceability Module</span>
          </div>
          <h2 className="typo-section-title">
            Digital Specimen Passport Visual Interface
          </h2>
          <p className="typo-body text-slate-400">
            Exact web replication of the CableSpec smartphone application passport card, LIMS JSON telemetry, and QR code verification.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form Controls */}
          <div className="lg:col-span-4 space-y-6">
            <div className="dashboard-panel p-6 space-y-4">
              <span className="typo-tech-label text-cyan-400 block border-b border-[#1d2e45] pb-2">
                PASSPORT TELEMETRY INPUTS
              </span>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <label className="text-slate-300 block mb-1">Cable Type & Core Spec:</label>
                  <input
                    type="text"
                    value={cableType}
                    onChange={(e) => setCableType(e.target.value)}
                    className="w-full bg-[#0d1624] border border-[#1d2e45] rounded p-2 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-300 block mb-1">Conductor Size:</label>
                    <input
                      type="text"
                      value={sizeSqMm}
                      onChange={(e) => setSizeSqMm(e.target.value)}
                      className="w-full bg-[#0d1624] border border-[#1d2e45] rounded p-2 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 block mb-1">Batch Code:</label>
                    <input
                      type="text"
                      value={batchId}
                      onChange={(e) => setBatchId(e.target.value)}
                      className="w-full bg-[#0d1624] border border-[#1d2e45] rounded p-2 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-300 block mb-1">Machine Serial:</label>
                    <input
                      type="text"
                      value={machineId}
                      onChange={(e) => setMachineId(e.target.value)}
                      className="w-full bg-[#0d1624] border border-[#1d2e45] rounded p-2 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 block mb-1">Operator Tag:</label>
                    <input
                      type="text"
                      value={operatorId}
                      onChange={(e) => setOperatorId(e.target.value)}
                      className="w-full bg-[#0d1624] border border-[#1d2e45] rounded p-2 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="p-3 rounded bg-emerald-950/30 border border-emerald-800/40 flex justify-between items-center text-xs">
                  <span className="text-emerald-400 font-bold">Preparation Status:</span>
                  <span className="typo-status-badge">STANDARD-READY</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Mobile Passport Card */}
          <div className="lg:col-span-8 space-y-4">
            <div id="printable-passport" className="dashboard-panel p-6 sm:p-8 space-y-6 shadow-2xl relative">
              
              {/* Passport Header */}
              <div className="flex items-center justify-between border-b border-[#1d2e45] pb-4">
                <div>
                  <span className="typo-tech-label text-slate-400 block">
                    SPECIMEN PASSPORT
                  </span>
                  <h3 className="typo-subsection-title text-2xl text-white">
                    {passportId}
                  </h3>
                </div>

                <div className="text-right typo-metadata">
                  <span className="text-slate-300 font-bold block uppercase">CABLESPEC</span>
                  <span className="text-slate-500 block">PREPARE VERIFY TRACE TRUST</span>
                </div>
              </div>

              {/* Cable Graphic + Specs */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Cable Graphic */}
                <div className="md:col-span-6">
                  <CableCrossSection cableLabel={cableType.toUpperCase()} />
                </div>

                {/* Specs Column */}
                <div className="md:col-span-6 space-y-4 font-mono">
                  <div>
                    <span className="typo-tech-label text-slate-400 block">CABLE TYPE</span>
                    <span className="text-base font-bold text-white">{cableType}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <span className="typo-tech-label text-slate-400 block">SIZE</span>
                      <span className="text-sm font-bold text-white">{sizeSqMm}</span>
                    </div>

                    <div>
                      <span className="typo-tech-label text-slate-400 block">BATCH</span>
                      <span className="text-sm font-bold text-white">{batchId}</span>
                    </div>
                  </div>

                  <div>
                    <span className="typo-tech-label text-slate-400 block">PREPARATION STATUS</span>
                    <div className="inline-block mt-1">
                      <span className="typo-status-badge">STANDARD-READY</span>
                    </div>
                  </div>

                  {/* Vision Verification Table */}
                  <div className="dashboard-card p-3 space-y-2">
                    <span className="typo-tech-label text-slate-400 block border-b border-[#1d2e45] pb-1">
                      VISION VERIFICATION
                    </span>

                    <div className="flex items-center justify-between text-xs">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400">Alignment</span>
                          <span className="text-emerald-400 font-bold text-[10px] flex items-center gap-1">
                            <Check className="w-3 h-3 text-emerald-400" /> PASS
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400">Geometry</span>
                          <span className="text-emerald-400 font-bold text-[10px] flex items-center gap-1">
                            <Check className="w-3 h-3 text-emerald-400" /> PASS
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400">Surface</span>
                          <span className="text-emerald-400 font-bold text-[10px] flex items-center gap-1">
                            <Check className="w-3 h-3 text-emerald-400" /> PASS
                          </span>
                        </div>
                      </div>

                      {/* PASS Circle Badge */}
                      <div className="w-14 h-14 rounded-full border-2 border-emerald-500 bg-emerald-950/40 flex flex-col items-center justify-center text-center">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span className="typo-status-badge border-0 bg-transparent text-emerald-400 px-0">PASS</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Traceability Block */}
              <div className="dashboard-card p-5 space-y-4">
                
                <div className="flex items-center justify-between border-b border-[#1d2e45] pb-2">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-cyan-400" />
                    <span className="typo-tech-label text-white">
                      TRACEABILITY
                    </span>
                  </div>
                  <span className="typo-metadata uppercase">
                    ONE SPECIMEN A COMPLETE STORY
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                  
                  {/* QR Code Block */}
                  <div className="sm:col-span-5 flex flex-col items-center justify-center p-3 rounded-lg bg-white text-slate-950 border border-slate-700">
                    <QRCodeSVG
                      value={passportJSON}
                      size={120}
                      level="H"
                      includeMargin={true}
                    />
                    <span className="typo-tech-label text-slate-800 mt-1">
                      SCAN FOR COMPLETE RECORD
                    </span>
                  </div>

                  {/* Metadata & Blueprint */}
                  <div className="sm:col-span-7 space-y-3 font-mono text-xs">
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <span className="typo-metadata block">Created:</span>
                        <span className="font-bold text-white">10 Sep 2026</span>
                      </div>
                      <div>
                        <span className="typo-metadata block">Machine ID:</span>
                        <span className="font-bold text-cyan-400">{machineId}</span>
                      </div>
                      <div>
                        <span className="typo-metadata block">Operator:</span>
                        <span className="font-bold text-white">{operatorId}</span>
                      </div>
                    </div>

                    <DumbbellBlueprint />
                  </div>

                </div>

              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                <button
                  onClick={handleCopyJSON}
                  className="flex items-center gap-2 px-4 py-2 rounded bg-[#0d1624] hover:bg-[#162436] border border-[#1d2e45] text-slate-300"
                >
                  <Copy className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{copied ? 'COPIED LIMS DATA' : 'COPY LIMS JSON'}</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-5 py-2 typo-tech-label text-slate-950 rounded bg-cyan-500 hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20"
                >
                  <Printer className="w-4 h-4" />
                  <span>PRINT DIGITAL PASSPORT CERTIFICATE</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
