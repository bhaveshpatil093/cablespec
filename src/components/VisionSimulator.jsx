import React, { useState } from 'react';
import { Eye, ShieldCheck, ShieldAlert, Camera, Sliders, CheckCircle2, XCircle, RefreshCw, Layers } from 'lucide-react';

export default function VisionSimulator() {
  const [cableType, setCableType] = useState('xlpe-2.5');
  const [hasDefect, setHasDefect] = useState(false);
  const [thicknessOffset, setThicknessOffset] = useState(0); // in mm
  const [scanning, setScanning] = useState(false);

  const CABLE_PRESETS = {
    'xlpe-2.5': {
      name: '2.5 sq mm XLPE Insulation Strip',
      standard: 'IEC 60811-1-1 Type 2',
      nominalWidth: 4.00,
      nominalThickness: 1.20,
      maxTolThickness: 0.05,
    },
    'pvc-10': {
      name: '10.0 sq mm PVC Outer Sheath',
      standard: 'IS 10810 Part 7',
      nominalWidth: 6.00,
      nominalThickness: 1.80,
      maxTolThickness: 0.08,
    },
    'hdpe-35': {
      name: '35.0 sq mm HDPE Heavy Sheath',
      standard: 'ASTM D638 Type IV',
      nominalWidth: 6.00,
      nominalThickness: 2.40,
      maxTolThickness: 0.10,
    }
  };

  const preset = CABLE_PRESETS[cableType];
  const actualThickness = (preset.nominalThickness + thicknessOffset).toFixed(3);
  const thickDiff = Math.abs(thicknessOffset);
  const thicknessPass = thickDiff <= preset.maxTolThickness;
  const overallPass = thicknessPass && !hasDefect;

  const runScanSim = () => {
    setScanning(true);
    setTimeout(() => {
      setScanning(false);
    }, 600);
  };

  return (
    <section id="vision" className="py-20 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-4">
            <Eye className="w-3.5 h-3.5" />
            <span>Interactive Quality Gate Simulation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Optical Vision Inspection Simulator
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 font-mono">
            Test how CableSpec's 12MP telecentric vision system evaluates sub-pixel edge contours and enforces IEC 60811 dimensional tolerances before dumbbell punching.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 space-y-6 bg-slate-900/80">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                  <Sliders className="w-4 h-4" />
                  SIMULATION PARAMETERS
                </span>
                <button
                  onClick={runScanSim}
                  disabled={scanning}
                  className="px-3 py-1 rounded bg-slate-800 text-xs font-mono text-cyan-400 border border-slate-700 hover:bg-slate-700 flex items-center gap-1.5"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${scanning ? 'animate-spin' : ''}`} />
                  <span>RE-SCAN</span>
                </button>
              </div>

              {/* Cable Specimen Selector */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-slate-300 font-bold uppercase">
                  Select Specimen Material & Size:
                </label>
                <select
                  value={cableType}
                  onChange={(e) => {
                    setCableType(e.target.value);
                    runScanSim();
                  }}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 font-mono text-xs text-white focus:outline-none focus:border-cyan-400"
                >
                  <option value="xlpe-2.5">2.5 sq mm XLPE (IEC 60811 Type 2)</option>
                  <option value="pvc-10">10.0 sq mm PVC (IS 10810 Part 7)</option>
                  <option value="hdpe-35">35.0 sq mm HDPE (ASTM D638 Type IV)</option>
                </select>
              </div>

              {/* Simulating Thickness Variation */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">Wall Thickness Variation (mm):</span>
                  <span className={thickDiff > preset.maxTolThickness ? 'text-red-400 font-bold' : 'text-emerald-400 font-bold'}>
                    {thicknessOffset > 0 ? `+${thicknessOffset.toFixed(2)}` : thicknessOffset.toFixed(2)} mm
                  </span>
                </div>
                <input
                  type="range"
                  min="-0.15"
                  max="0.15"
                  step="0.01"
                  value={thicknessOffset}
                  onChange={(e) => setThicknessOffset(parseFloat(e.target.value))}
                  className="w-full accent-cyan-400 bg-slate-950 rounded h-2"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>-0.15 mm (Thin)</span>
                  <span>Nominal: {preset.nominalThickness} mm</span>
                  <span>+0.15 mm (Thick)</span>
                </div>
              </div>

              {/* Inject Surface Defect Toggle */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-white block">Inject Edge Burr / Micro-Void</span>
                  <span className="text-[10px] font-mono text-slate-400">Simulate razor notch or extrusion bubble defect</span>
                </div>
                <button
                  onClick={() => {
                    setHasDefect(!hasDefect);
                    runScanSim();
                  }}
                  className={`px-3 py-1.5 rounded text-xs font-mono font-bold transition-all ${
                    hasDefect ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-slate-800 text-slate-400 border border-slate-700'
                  }`}
                >
                  {hasDefect ? 'DEFECT PRESENT' : 'CLEAN EDGE'}
                </button>
              </div>

            </div>
          </div>

          {/* Vision Display Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 rounded-2xl border border-cyan-500/30 bg-slate-900/90 relative overflow-hidden">
              
              {/* Top Status */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  12MP TELECENTRIC CAMERA FRAME
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  RESOLUTION: 8 µm/pixel • SHUTTER: 1/500s
                </span>
              </div>

              {/* Simulated Camera Viewfinder Frame */}
              <div className="relative w-full h-64 bg-slate-950 rounded-xl border border-slate-800 p-4 flex items-center justify-center overflow-hidden">
                
                {/* Backlight Diffuser Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/30 via-slate-950 to-cyan-950/20"></div>

                {/* Sub-Pixel Reticle Grid Overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>

                {/* Scanning Beam Animation */}
                {scanning && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-400 shadow-lg shadow-cyan-400 animate-pulse"></div>
                )}

                {/* Dumbbell / Insulation Strip Contour View */}
                <div className="relative z-10 w-full max-w-md h-36 border-2 border-dashed border-cyan-500/40 rounded-lg p-2 flex items-center justify-center">
                  
                  {/* Simulated Flattened Specimen Strip */}
                  <div 
                    className={`relative rounded transition-all duration-300 flex items-center justify-center ${
                      hasDefect ? 'bg-slate-800 border-2 border-red-500' : 'bg-slate-800 border-2 border-emerald-400'
                    }`}
                    style={{
                      width: '80%',
                      height: `${Math.min(90, Math.max(30, (actualThickness / 3.0) * 100))}%`,
                    }}
                  >
                    {/* Measurement Reticle Lines */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-cyan-400 bg-slate-950 px-2 py-0.5 rounded border border-cyan-800">
                      b = {preset.nominalWidth.toFixed(2)} mm
                    </div>

                    <div className="absolute -right-16 top-1/2 -translate-y-1/2 text-[10px] font-mono text-amber-400 bg-slate-950 px-2 py-0.5 rounded border border-amber-800">
                      d = {actualThickness} mm
                    </div>

                    {/* Defect Highlight if enabled */}
                    {hasDefect && (
                      <div className="absolute -top-2 left-1/4 w-4 h-4 rounded-full bg-red-500/40 border border-red-500 animate-ping flex items-center justify-center text-[8px] font-mono text-white font-bold">
                        !
                      </div>
                    )}

                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      SPECIMEN CONTOUR
                    </span>
                  </div>
                </div>

              </div>

              {/* Decision Gating Results Box */}
              <div className="mt-6 p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block uppercase">
                    COMPLIANCE DECISION GATE (IEC 60811):
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    {overallPass ? (
                      <div className="flex items-center gap-2 text-emerald-400 font-mono font-extrabold text-lg">
                        <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                        <span>PASS — PROCEED TO PUNCH</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-red-400 font-mono font-extrabold text-lg">
                        <XCircle className="w-6 h-6 text-red-400" />
                        <span>FAIL — REJECTED TO DIVERTER</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-right text-xs font-mono space-y-1">
                  <div className="text-slate-400">
                    Thickness Tol: <strong className={thicknessPass ? 'text-emerald-400' : 'text-red-400'}>
                      {thicknessPass ? 'WITHIN LIMIT' : 'EXCEEDED'}
                    </strong>
                  </div>
                  <div className="text-slate-400">
                    Surface Burrs: <strong className={!hasDefect ? 'text-emerald-400' : 'text-red-400'}>
                      {!hasDefect ? 'NONE DETECTED' : 'NOTCH DEFECT'}
                    </strong>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
