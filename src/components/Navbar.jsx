import React, { useState, useEffect } from 'react';
import { Activity, Terminal, Menu, X, ShieldCheck } from 'lucide-react';
import { CableLogo } from './CableGraphics';

export default function Navbar({ activeSection, setActiveSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      scrolled 
        ? 'bg-[#080d16]/95 backdrop-blur-md border-b border-[#1d2e45] shadow-2xl py-2.5' 
        : 'bg-[#080d16]/80 backdrop-blur-sm border-b border-[#1d2e45]/50 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo matching Passport Header */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              <CableLogo className="w-9 h-9 transform group-hover:rotate-12 transition-transform duration-300" />
              <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
            </div>
            
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white">
                  CABLE<span className="text-cyan-400">SPEC</span>
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider bg-[#121e2d] text-cyan-400 border border-[#1d2e45] rounded">
                  PASSPORT AGENT
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase flex items-center gap-1.5">
                <span>FROM CABLE TO CERTAINTY</span>
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
                className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-[#121e2d] text-cyan-400 border border-[#1d2e45] font-bold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-[#121e2d]/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Tagline / Quick Action */}
          <div className="hidden sm:flex items-center space-x-3">
            <div className="text-right text-[10px] font-mono text-slate-400 hidden xl:block">
              <span className="block text-slate-300 font-bold">PREPARE • VERIFY • TRACE • TRUST</span>
              <span className="text-emerald-400 flex items-center justify-end gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                SIH 2026 CERTIFIED
              </span>
            </div>

            <button 
              onClick={() => {
                const el = document.getElementById('passport');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center space-x-2 px-3.5 py-1.5 text-xs font-mono font-bold rounded bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20 active:scale-95"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>PASSPORT SIMULATOR</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-[#121e2d] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d1624] border-b border-[#1d2e45] px-4 pt-2 pb-6 space-y-2 mt-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveSection(item.id);
                setMobileMenuOpen(false);
                const el = document.getElementById(item.id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`block w-full text-left px-3 py-2 text-xs font-mono rounded-md ${
                activeSection === item.id ? 'bg-[#121e2d] text-cyan-300 font-bold border border-[#1d2e45]' : 'text-slate-300 hover:bg-[#121e2d]'
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
