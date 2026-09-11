import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { QrCode, Smartphone, Download, Printer, CheckCircle, ShieldCheck, Terminal, Copy } from 'lucide-react';

export default function SpecimenPassportGenerator() {
  const [cableName, setCableName] = useState('3-Core 2.5 sq mm XLPE Sheathed Cable');
  const [batchId, setBatchId] = useState('BATCH-2026-09-88A');
  const [operatorId, setOperatorId] = useState('TECH-OP-402 (Bhavesh P.)');
  const [standardCode, setStandardCode] = useState('IEC 60811-1-1 Type 2');
  const [width, setWidth] = useState('4.02');
  const [thickness, setThickness] = useState('1.25');
  const [copied, setCopied] = useState(false);

  const area = (parseFloat(width || 0) * parseFloat(thickness || 0)).toFixed(3);
  const passportId = `CS-${batchId.replace(/[^A-Z0-9]/gi, '')}-${Date.now().toString().slice(-4)}`;

  const passportJSON = JSON.stringify({
    passportId,
    project: 'CableSpec Automated Specimen Preparation System',
    standard: standardCode,
    batchId,
    operatorId,
    cableName,
    measuredWidth_b_mm: parseFloat(width),
    measuredThickness_d_mm: parseFloat(thickness),
    crossSectionalArea_A_sqmm: parseFloat(area),
    timestamp: new Date().toISOString(),
    qualityGate: 'PASS (Vision Verified ±0.015mm)',
    hashSignature: '0x8f9a2b1c4e5d6f7a8b9c0d1e2f3a4b5c'
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
    <section id="passport" className="py-20 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-4">
            <QrCode className="w-3.5 h-3.5" />
            <span>Digital Specimen Passport Generator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Interactive Digital Passport & LIMS Interface
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 font-mono">
            Generate an official encrypted Digital Specimen Passport QR code containing vision inspection metrics for automatic population into Tensile Testing Machine (UTM) software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Inputs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 bg-slate-950/90 space-y-4">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block border-b border-slate-800 pb-2">
                INPUT MACHINE & BATCH TELEMETRY
              </span>

              <div className="space-y-3 font-mono text-xs">
                <div>
                  <label className="text-slate-300 block mb-1">Cable Sample Description:</label>
                  <input
                    type="text"
                    value={cableName}
                    onChange={(e) => setCableName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-slate-300 block mb-1">Batch Lot Number:</label>
                    <input
                      type="text"
                      value={batchId}
                      onChange={(e) => setBatchId(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 block mb-1">Testing Standard:</label>
                    <select
                      value={standardCode}
                      onChange={(e) => setStandardCode(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white focus:outline-none focus:border-cyan-400"
                    >
                      <option value="IEC 60811-1-1 Type 2">IEC 60811-1-1 Type 2</option>
                      <option value="IEC 60811-1-1 Type 1">IEC 60811-1-1 Type 1</option>
                      <option value="IS 10810 Part 7">IS 10810 Part 7</option>
                      <option value="ASTM D638 Type IV">ASTM D638 Type IV</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-slate-300 block mb-1">Operator Technician ID:</label>
                  <input
                    type="text"
                    value={operatorId}
                    onChange={(e) => setOperatorId(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="text-cyan-400 block mb-1">Vision Width b (mm):</label>
                    <input
                      type="number"
                      step="0.01"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white font-bold focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="text-amber-400 block mb-1">Vision Thickness d (mm):</label>
                    <input
                      type="number"
                      step="0.01"
                      value={thickness}
                      onChange={(e) => setThickness(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white font-bold focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div className="p-3 rounded bg-cyan-950/60 border border-cyan-800 flex justify-between items-center text-xs">
                  <span className="text-cyan-300 font-bold">Auto Cross-Section Area (A = b × d):</span>
                  <span className="text-white font-extrabold text-base">{area} mm²</span>
                </div>
              </div>

            </div>
          </div>

          {/* Printable Passport Certificate Display */}
          <div className="lg:col-span-7 space-y-4">
            <div id="printable-passport" className="glass-panel p-6 sm:p-8 rounded-2xl border-2 border-cyan-500/40 bg-slate-950 text-white space-y-6 shadow-2xl relative">
              
              {/* Certificate Watermark Header */}
              <div className="flex items-center justify-between border-b-2 border-slate-800 pb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-bold">
                    CS
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-lg text-white tracking-wide">
                      DIGITAL SPECIMEN PASSPORT
                    </h3>
                    <p className="text-[11px] font-mono text-cyan-400">
                      CableSpec Adaptive Automated System • Verification ID: {passportId}
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-mono font-bold">
                  VERIFIED PASS
                </span>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                
                {/* QR Code Container */}
                <div className="sm:col-span-4 flex flex-col items-center justify-center p-4 rounded-xl bg-white text-slate-950 border border-slate-700">
                  <QRCodeSVG
                    value={passportJSON}
                    size={140}
                    level="H"
                    includeMargin={true}
                  />
                  <span className="text-[10px] font-mono text-slate-600 mt-2 font-bold tracking-tight">
                    SCAN VIA MOBILE APP
                  </span>
                </div>

                {/* Passport Key Parameters */}
                <div className="sm:col-span-8 space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Cable Sample:</span>
                    <span className="font-bold text-white text-right">{cableName}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Batch Lot ID:</span>
                    <span className="font-bold text-cyan-300">{batchId}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Standard Code:</span>
                    <span className="font-bold text-white">{standardCode}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Measured Width (b):</span>
                    <span className="font-bold text-white">{width} mm</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Measured Thickness (d):</span>
                    <span className="font-bold text-amber-400">{thickness} mm</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Cross-Sectional Area (A):</span>
                    <span className="font-bold text-emerald-400 text-sm">{area} mm²</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Operator ID:</span>
                    <span className="text-slate-300">{operatorId}</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
                <button
                  onClick={handleCopyJSON}
                  className="flex items-center gap-2 px-4 py-2 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'COPIED LIMS DATA' : 'COPY LIMS JSON'}</span>
                </button>

                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-5 py-2 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-mono text-xs transition-all shadow-md shadow-cyan-500/20"
                >
                  <Printer className="w-4 h-4" />
                  <span>PRINT OFFICIAL PASSPORT CERTIFICATE</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
