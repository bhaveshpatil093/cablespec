import React, { useState, useEffect } from 'react';
import { Activity, Terminal, Menu, X, Cpu, BookOpen, BarChart3, Users } from 'lucide-react';
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

  const navCategories = [
    {
      title: "HARDWARE AUTOMATION",
      icon: Cpu,
      items: [
        { id: 'pipeline', label: 'Machine Pipeline' },
        { id: 'architecture', label: 'System Architecture' },
        { id: 'vision', label: 'Vision Inspection' },
        { id: 'passport', label: 'Digital Passport' },
      ]
    },
    {
      title: "COMPLIANCE & TESTING",
      icon: BookOpen,
      items: [
        { id: 'standards', label: 'IEC / IS Standards' },
        { id: 'research', label: 'Validation Methodology' },
        { id: 'architecture', label: 'Hardware Prototype' },
      ]
    },
    {
      title: "FEASIBILITY & R&D",
      icon: BarChart3,
      items: [
        { id: 'research', label: 'Problem & Solution' },
        { id: 'research', label: 'Prior Art Matrix' },
        { id: 'research', label: 'Bill of Materials' },
        { id: 'research', label: 'Market & ROI' },
      ]
    },
    {
      title: "PROJECT OVERVIEW",
      icon: Users,
      items: [
        { id: 'hero', label: 'Hero Overview' },
        { id: 'architecture', label: 'Resources & Dossier' },
        { id: 'team', label: 'SIH 2026 Team' },
      ]
    }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#080d16]/95 backdrop-blur-md border-b border-[#1d2e45] shadow-2xl py-2' 
        : 'bg-[#080d16]/85 backdrop-blur-sm border-b border-[#1d2e45]/60 py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* CableSpec Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group flex-shrink-0" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              <CableLogo className="w-8 h-8 sm:w-9 sm:h-9 transform group-hover:rotate-12 transition-transform duration-300" />
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
              </div>
              <p className="typo-metadata text-[9px] tracking-widest uppercase">
                FROM CABLE TO CERTAINTY
              </p>
            </div>
          </div>

          {/* Prototype Status Indicator */}
          <div className="hidden md:flex items-center space-x-2 px-2.5 py-1 rounded bg-[#0d1624] border border-[#1d2e45] typo-metadata text-[10px]">
            <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
            <span className="text-slate-400 font-mono">SYSTEM STATUS —</span>
            <span className="text-emerald-400 font-bold font-mono">PROTOTYPE</span>
          </div>

          {/* Desktop Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {[
              { id: 'hero', label: 'Overview' },
              { id: 'pipeline', label: 'Machine' },
              { id: 'architecture', label: 'Architecture' },
              { id: 'vision', label: 'Vision' },
              { id: 'passport', label: 'Passport' },
              { id: 'standards', label: 'Standards' },
              { id: 'research', label: 'Research & Market' },
              { id: 'team', label: 'SIH 2026 Team' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 typo-tech-label rounded transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-[#121e2d] text-cyan-400 border border-[#1d2e45] font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-[#121e2d]/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Quick CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <button 
              onClick={() => handleNavClick('passport')}
              className="flex items-center space-x-2 px-3.5 py-1.5 typo-tech-label text-slate-950 text-xs rounded bg-cyan-500 hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20 active:scale-95"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>PASSPORT SIMULATOR</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-[#121e2d] focus:outline-none border border-[#1d2e45]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Structured Categorized Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0d1624]/95 backdrop-blur-xl border-b border-[#1d2e45] px-4 pt-3 pb-6 space-y-4 mt-2 max-h-[85vh] overflow-y-auto font-mono text-xs">
          
          <div className="flex items-center justify-between pb-2 border-b border-[#1d2e45] typo-metadata">
            <span>STATUS: <strong className="text-emerald-400">PROTOTYPE READY</strong></span>
            <span className="text-cyan-400">CABLESPEC PASSPORT NAV</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {navCategories.map((cat, idx) => {
              const CatIcon = cat.icon;
              return (
                <div key={idx} className="p-3 rounded-xl bg-[#121e2d] border border-[#1d2e45] space-y-2">
                  <div className="flex items-center space-x-2 border-b border-[#1d2e45] pb-1.5 text-cyan-400">
                    <CatIcon className="w-3.5 h-3.5" />
                    <span className="typo-tech-label text-cyan-400 text-[10px]">{cat.title}</span>
                  </div>

                  <div className="space-y-1">
                    {cat.items.map((item, itemIdx) => (
                      <button
                        key={itemIdx}
                        onClick={() => handleNavClick(item.id)}
                        className={`block w-full text-left px-2.5 py-1.5 rounded transition-all text-xs ${
                          activeSection === item.id 
                            ? 'bg-cyan-500/10 text-cyan-300 font-bold border border-cyan-500/30' 
                            : 'text-slate-300 hover:bg-[#0d1624] hover:text-white'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#1d2e45]">
            <button
              onClick={() => handleNavClick('passport')}
              className="w-full py-2.5 rounded bg-cyan-500 text-slate-950 font-bold typo-tech-label text-center flex items-center justify-center gap-2"
            >
              <Terminal className="w-4 h-4" />
              <span>GENERATE DIGITAL SPECIMEN PASSPORT</span>
            </button>
          </div>

        </div>
      )}
    </header>
  );
}
