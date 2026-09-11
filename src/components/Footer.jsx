import React from 'react';
import { Github, Youtube, ExternalLink, ShieldCheck, FolderGit2, Cpu, BarChart3, Terminal } from 'lucide-react';
import { CableLogo } from './CableGraphics';

export default function Footer() {
  return (
    <footer className="bg-[#080d16] border-t border-[#1d2e45] pt-14 pb-20 md:pb-12 text-slate-400 font-mono text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Row: Brand & Tagline Statement */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-[#1d2e45]">
          
          <div className="md:col-span-7 space-y-2">
            <div className="flex items-center space-x-3">
              <CableLogo className="w-8 h-8" />
              <span className="font-display font-extrabold text-xl text-white">
                CABLE<span className="text-cyan-400">SPEC</span>
              </span>
              <span className="typo-status-badge text-[9px]">
                SIH 2026
              </span>
            </div>

            <p className="text-slate-300 text-xs font-mono font-medium">
              Adaptive Automated Cable Specimen Preparation System
            </p>

            <p className="text-slate-400 text-xs leading-relaxed max-w-xl font-sans">
              Precision mechatronic automation machine replacing manual razor cutting for compliance testing laboratories (IEC 60811 / IS 10810 / ASTM).
            </p>
          </div>

          <div className="md:col-span-5 text-left md:text-right space-y-2">
            <span className="typo-tech-label text-cyan-400 block text-xs tracking-widest">
              TECHNICAL STATEMENT
            </span>
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-white tracking-wider">
              FROM CABLE TO CERTAINTY
            </h3>
            <span className="typo-metadata text-[10px]">
              Smart India Hackathon 2026 Innovation Candidate
            </span>
          </div>

        </div>

        {/* Middle Row: 5 Technical Resource Placeholders Bar */}
        <div className="p-4 rounded-xl bg-[#121e2d] border border-[#1d2e45] space-y-3">
          <span className="typo-tech-label text-slate-400 block border-b border-[#1d2e45] pb-2">
            ENGINEERING & MEDIA RESOURCE LINKS
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            
            {/* 1. YouTube Video Demo */}
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 rounded bg-[#0d1624] border border-[#1d2e45] hover:border-red-500/60 hover:text-red-400 transition-all flex items-center space-x-2 text-slate-300"
            >
              <Youtube className="w-4 h-4 text-red-500 flex-shrink-0" />
              <div>
                <span className="text-[10px] block font-bold">YouTube</span>
                <span className="typo-metadata text-[9px] block">Video Demo</span>
              </div>
            </a>

            {/* 2. GitHub Source Code */}
            <a 
              href="https://github.com/bhaveshpatil093/cablespec" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3 rounded bg-[#0d1624] border border-[#1d2e45] hover:border-cyan-400 hover:text-cyan-300 transition-all flex items-center space-x-2 text-slate-300"
            >
              <Github className="w-4 h-4 text-white flex-shrink-0" />
              <div>
                <span className="text-[10px] block font-bold">GitHub</span>
                <span className="typo-metadata text-[9px] block">Source Code</span>
              </div>
            </a>

            {/* 3. Live Prototype Platform */}
            <a 
              href="#pipeline" 
              className="p-3 rounded bg-[#0d1624] border border-[#1d2e45] hover:border-cyan-400 hover:text-cyan-300 transition-all flex items-center space-x-2 text-slate-300"
            >
              <Terminal className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <div>
                <span className="text-[10px] block font-bold">Prototype Platform</span>
                <span className="typo-metadata text-[9px] block">Interactive Web</span>
              </div>
            </a>

            {/* 4. CAD & Resource Drive */}
            <a 
              href="#architecture" 
              className="p-3 rounded bg-[#0d1624] border border-[#1d2e45] hover:border-amber-400 hover:text-amber-300 transition-all flex items-center space-x-2 text-slate-300"
            >
              <FolderGit2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
              <div>
                <span className="text-[10px] block font-bold">Resource Drive</span>
                <span className="typo-metadata text-[9px] block">CAD & PDF Dossier</span>
              </div>
            </a>

            {/* 5. Market Survey */}
            <a 
              href="#research" 
              className="p-3 rounded bg-[#0d1624] border border-[#1d2e45] hover:border-emerald-400 hover:text-emerald-300 transition-all flex items-center space-x-2 text-slate-300"
            >
              <BarChart3 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <div>
                <span className="text-[10px] block font-bold">Market Survey</span>
                <span className="typo-metadata text-[9px] block">Lab ROI Data</span>
              </div>
            </a>

          </div>
        </div>

        {/* Grid Row: 6 Section Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-4 text-[11px]">
          
          {/* Col 1: Project */}
          <div className="space-y-2">
            <span className="typo-tech-label text-slate-200 block">PROJECT</span>
            <ul className="space-y-1 text-slate-400">
              <li><a href="#hero" className="hover:text-cyan-400">Hero Overview</a></li>
              <li><a href="#pipeline" className="hover:text-cyan-400">Machine Pipeline</a></li>
              <li><a href="#vision" className="hover:text-cyan-400">Vision System</a></li>
              <li><a href="#passport" className="hover:text-cyan-400">Digital Passport</a></li>
            </ul>
          </div>

          {/* Col 2: Documentation */}
          <div className="space-y-2">
            <span className="typo-tech-label text-slate-200 block">DOCUMENTATION</span>
            <ul className="space-y-1 text-slate-400">
              <li><a href="#standards" className="hover:text-cyan-400">IEC 60811-1-1</a></li>
              <li><a href="#standards" className="hover:text-cyan-400">IS 10810 (BIS)</a></li>
              <li><a href="#standards" className="hover:text-cyan-400">ASTM D638 / ISO</a></li>
              <li><a href="#passport" className="hover:text-cyan-400">LIMS API Docs</a></li>
            </ul>
          </div>

          {/* Col 3: Research */}
          <div className="space-y-2">
            <span className="typo-tech-label text-slate-200 block">RESEARCH</span>
            <ul className="space-y-1 text-slate-400">
              <li><a href="#research" className="hover:text-cyan-400">Problem Statement</a></li>
              <li><a href="#research" className="hover:text-cyan-400">CableSpec Solution</a></li>
              <li><a href="#research" className="hover:text-cyan-400">Prior Art Matrix</a></li>
              <li><a href="#research" className="hover:text-cyan-400">Lab Validation</a></li>
            </ul>
          </div>

          {/* Col 4: Prototype */}
          <div className="space-y-2">
            <span className="typo-tech-label text-slate-200 block">PROTOTYPE</span>
            <ul className="space-y-1 text-slate-400">
              <li><a href="#architecture" className="hover:text-cyan-400">Mechanical Frame</a></li>
              <li><a href="#architecture" className="hover:text-cyan-400">STM32 RTOS Core</a></li>
              <li><a href="#architecture" className="hover:text-cyan-400">Iris Chuck Head</a></li>
              <li><a href="#architecture" className="hover:text-cyan-400">20 kN Die Press</a></li>
            </ul>
          </div>

          {/* Col 5: Resources */}
          <div className="space-y-2">
            <span className="typo-tech-label text-slate-200 block">RESOURCES</span>
            <ul className="space-y-1 text-slate-400">
              <li><a href="#research" className="hover:text-cyan-400">Bill of Materials</a></li>
              <li><a href="#research" className="hover:text-cyan-400">ROI Calculator</a></li>
              <li><a href="#research" className="hover:text-cyan-400">Market Data</a></li>
              <li><a href="#architecture" className="hover:text-cyan-400">CAD Blueprints</a></li>
            </ul>
          </div>

          {/* Col 6: Contact */}
          <div className="space-y-2">
            <span className="typo-tech-label text-slate-200 block">CONTACT</span>
            <ul className="space-y-1 text-slate-400">
              <li><a href="#team" className="hover:text-cyan-400">SIH 2026 Team</a></li>
              <li><a href="#team" className="hover:text-cyan-400">Academic Mentors</a></li>
              <li><a href="#team" className="hover:text-cyan-400">Lab Compliance</a></li>
              <li><a href="mailto:info@cablespec.org" className="hover:text-cyan-400">Lab Enquiries</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 border-t border-[#1d2e45] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 CableSpec Project. Developed for Smart India Hackathon 2026.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              NABL / BIS Compliance Testing Ready
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
