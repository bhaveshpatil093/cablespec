import React from 'react';
import { Award, Users, ShieldCheck } from 'lucide-react';
import { CABLESPEC_PROJECT } from '../data/cablespecData';

export default function TeamSih() {
  const team = CABLESPEC_PROJECT.team;
  const sih = CABLESPEC_PROJECT.sihDetails;

  return (
    <section id="team" className="py-20 bg-[#080d16] border-t border-[#1d2e45] relative bg-grid-blueprint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#121e2d] border border-[#1d2e45] text-cyan-400 font-mono text-xs uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Smart India Hackathon 2026 Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Team & SIH 2026 Project Details
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3 font-mono">
            Problem Statement ID: {sih.problemId} • Domain: {sih.domain}
          </p>
        </div>

        {/* SIH Banner Card */}
        <div className="rounded-2xl bg-[#121e2d] p-6 border border-[#1d2e45] mb-12 font-mono text-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="p-4 rounded-xl bg-[#0d1624] border border-[#1d2e45]">
              <span className="text-slate-400 block uppercase">HACKATHON TRACK</span>
              <span className="text-cyan-300 font-bold text-xs block mt-1">{sih.track}</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0d1624] border border-[#1d2e45]">
              <span className="text-slate-400 block uppercase">PROBLEM STATEMENT ID</span>
              <span className="text-amber-400 font-bold text-xs block mt-1">{sih.problemId}</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0d1624] border border-[#1d2e45]">
              <span className="text-slate-400 block uppercase">PRIMARY HARDWARE OBJECTIVE</span>
              <span className="text-emerald-400 font-bold text-xs block mt-1">Automated Specimen Prep Machine</span>
            </div>

          </div>
        </div>

        {/* Team Members Grid */}
        <div className="mb-12">
          <h3 className="text-xl font-bold text-white font-display mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-cyan-400" />
            Engineering Team Members
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
            {team.members.map((m, i) => (
              <div key={i} className="rounded-2xl bg-[#121e2d] p-5 border border-[#1d2e45] space-y-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center font-bold text-slate-950 font-display text-base">
                  {m.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white">{m.name}</h4>
                  <span className="text-xs text-cyan-400 font-semibold block mt-0.5">
                    {m.role}
                  </span>
                </div>

                <p className="text-xs text-slate-400 font-sans leading-relaxed pt-2 border-t border-[#1d2e45]">
                  {m.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mentors */}
        <div>
          <h3 className="text-xl font-bold text-white font-display mb-6 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            Academic & Industrial Mentors
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            {team.mentors.map((men, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#121e2d] border border-[#1d2e45] flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg bg-[#0d1624] border border-[#1d2e45] flex items-center justify-center text-cyan-400 font-bold">
                  M{i + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{men.name}</h4>
                  <span className="text-xs text-cyan-300 block">{men.role}</span>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Specialization: {men.specialization}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
