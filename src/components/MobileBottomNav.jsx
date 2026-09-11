import React from 'react';
import { Home, Cog, Eye, QrCode, FileText } from 'lucide-react';

/**
 * Mobile Bottom Quick-Access Bar Component
 * Replicating bottom tab bar from the CableSpec phone app screenshot
 */
export default function MobileBottomNav({ activeSection, setActiveSection }) {
  const navTabs = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'pipeline', label: 'Machine', icon: Cog },
    { id: 'vision', label: 'Vision', icon: Eye },
    { id: 'passport', label: 'Passport', icon: QrCode },
    { id: 'standards', label: 'Standards', icon: FileText },
  ];

  const handleTabClick = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0d1624]/95 backdrop-blur-lg border-t border-[#1d2e45] px-2 py-1.5 shadow-2xl">
      <div className="flex items-center justify-around">
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex flex-col items-center py-1 px-3 rounded transition-all font-mono text-[10px] ${
                isActive ? 'text-cyan-400 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 mb-0.5 ${isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
