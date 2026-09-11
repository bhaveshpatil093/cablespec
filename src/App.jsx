import React, { useState, useEffect } from 'react';
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

export default function App() {
  const [activeSection, setActiveSection] = useState('pipeline');

  const scrollToPipeline = () => {
    setActiveSection('pipeline');
    const el = document.getElementById('pipeline');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans">
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
  );
}
