import React from 'react';
import { Cpu, Github, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-900">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center font-bold text-slate-950">
                CS
              </div>
              <span className="font-display font-extrabold text-lg text-white">
                CABLE<span className="text-cyan-400">SPEC</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md font-sans">
              Adaptive Automated Cable Specimen Preparation System. An open engineering prototype developed for compliance laboratories, cable manufacturers, and Smart India Hackathon 2026.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-2">
            <span className="text-slate-200 font-bold uppercase block text-xs tracking-wider">
              COMPLIANCE STANDARDS
            </span>
            <ul className="space-y-1 text-slate-400">
              <li>IEC 60811-1-1 (International)</li>
              <li>IS 10810 Part 7 & 11 (BIS India)</li>
              <li>ASTM D638 / ISO 527-2 (Plastic Dumbbell)</li>
            </ul>
          </div>

          {/* GitHub & Repository */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-slate-200 font-bold uppercase block text-xs tracking-wider">
              PROJECT REPOSITORY
            </span>
            <a
              href="https://github.com/bhaveshpatil093/cablespec"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-cyan-400 font-bold"
            >
              <Github className="w-4 h-4 text-white" />
              <span>bhaveshpatil093/cablespec</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 CableSpec Project. All Rights Reserved. Built for SIH 2026.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              NABL / BIS Testing Laboratory Compliant
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
