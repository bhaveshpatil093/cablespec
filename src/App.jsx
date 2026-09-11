import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProcessPipeline from './components/ProcessPipeline';
import MachineArchitecture from './components/MachineArchitecture';
import VisionSimulator from './components/VisionSimulator';
import SpecimenPassportGenerator from './components/SpecimenPassportGenerator';
import StandardsCalculator from './components/StandardsCalculator';
import ResearchMarketFeasibility from './components/ResearchMarketFeasibility';
import TeamSih from './components/TeamSih';
import Footer from './components/Footer';
import TechnicalBackground from './components/TechnicalBackground';

export default function App() {
  const [activeSection, setActiveSection] = useState('pipeline');

  const scrollToPipeline = () => {
    setActiveSection('pipeline');
    const el = document.getElementById('pipeline');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#080d16] text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans overflow-x-hidden">
      {/* Global Blueprint Technical Background */}
      <TechnicalBackground />

      {/* Main Interactive Interface Layer */}
      <div className="relative z-10">
        <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main>
          <Hero onExplorePipeline={scrollToPipeline} />
          <ProcessPipeline />
          <MachineArchitecture />
          <VisionSimulator />
          <SpecimenPassportGenerator />
          <StandardsCalculator />
          <ResearchMarketFeasibility />
          <TeamSih />
        </main>

        <Footer />
      </div>
    </div>
  );
}
