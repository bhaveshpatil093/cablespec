import React, { useState, useEffect } from 'react';
import { Activity, Terminal, Menu, X, ChevronDown } from 'lucide-react';
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
    { id: 'hero', label: 'Overview' },
    { id: 'research', label: 'Problem' },
    { id: 'research', label: 'Solution' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'pipeline', label: 'Machine' },
    { id: 'vision', label: 'Vision' },
    { id: 'passport', label: 'Passport' },
    { id: 'standards', label: 'Standards' },
    { id: 'research', label: 'Validation' },
    { id: 'research', label: 'Research' },
    { id: 'research', label: 'Market' },
    { id: 'architecture', label: 'Prototype' },
    { id: 'architecture', label: 'Resources' },
    { id: 'team', label: 'Team' },
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
          
          {/* CableSpec Logo with Cross-Section Emblem */}
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

          {/* Desktop Compact Horizontal Navigation Bar */}
          <nav className="hidden xl:flex items-center space-x-1 overflow-x-auto max-w-xl scrollbar-none py-1">
            {navItems.map((item, idx) => (
              <button
                key={`${item.id}-${idx}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-2.5 py-1 typo-tech-label text-[10px] rounded transition-all duration-200 ${
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
              className="flex items-center space-x-2 px-3 py-1.5 typo-tech-label text-slate-950 text-[10px] rounded bg-cyan-500 hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/20 active:scale-95"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>PASSPORT</span>
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

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0d1624] border-b border-[#1d2e45] px-4 pt-3 pb-6 space-y-2 mt-2 max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-2 border-b border-[#1d2e45] mb-2 typo-metadata">
            <span>SYSTEM STATUS — <strong className="text-emerald-400">PROTOTYPE</strong></span>
            <span>14 SECTIONS</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item, idx) => (
              <button
                key={`mob-${item.id}-${idx}`}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2 typo-tech-label text-[11px] rounded-md ${
                  activeSection === item.id ? 'bg-[#121e2d] text-cyan-300 font-bold border border-[#1d2e45]' : 'text-slate-300 hover:bg-[#121e2d]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
