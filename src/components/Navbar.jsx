import React, { useState, useEffect } from 'react';
import { Cpu, ShieldCheck, Activity, Award, Download, Terminal, Menu, X } from 'lucide-react';
import { CABLESPEC_PROJECT } from '../data/cablespecData';

export default function Navbar({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [systemOnline, setSystemOnline] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'pipeline', label: 'Process Pipeline' },
    { id: 'architecture', label: 'System Architecture' },
    { id: 'vision', label: 'Vision Inspection' },
    { id: 'passport', label: 'Specimen Passport' },
    { id: 'standards', label: 'Compliance Standards' },
    { id: 'research', label: 'Feasibility & Market' },
    { id: 'team', label: 'SIH 2026 Team' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-panel border-b border-slate-800 shadow-2xl py-2.5' : 'bg-slate-950/80 backdrop-blur-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Telemetry Indicator */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 border border-cyan-400/40">
                <Cpu className="w-6 h-6 text-slate-950" />
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
            </div>
            
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-display font-extrabold text-xl tracking-wider text-white">
                  CABLE<span className="text-cyan-400">SPEC</span>
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono font-semibold uppercase tracking-widest bg-cyan-950 text-cyan-400 border border-cyan-800/60 rounded">
                  SIH 2026
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono tracking-tight flex items-center gap-1">
                <Activity className="w-3 h-3 text-emerald-400" />
                <span>SYSTEM STATUS: <strong className="text-emerald-400">READY (SIMULATED)</strong></span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA & Downloads */}
          <div className="hidden sm:flex items-center space-x-3">
            <button 
              onClick={() => {
                const el = document.getElementById('passport');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center space-x-2 px-3.5 py-1.5 text-xs font-mono font-medium rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20 active:scale-95"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>TEST SIMULATOR</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-slate-800 px-4 pt-2 pb-6 space-y-2 mt-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setMobileMenuOpen(false);
                const el = document.getElementById(item.id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`block w-full text-left px-3 py-2 text-sm rounded-md font-mono ${
                activeSection === item.id ? 'bg-cyan-500/20 text-cyan-300 font-bold' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
