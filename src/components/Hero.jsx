import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Database, Cpu, Terminal, ShieldCheck, Github, Linkedin, Play, Film, Layers } from 'lucide-react';
import { personalInfo, projectsData } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';
import { CinematicHeroVideo } from './CinematicHeroVideo';
import { useDeviceCapabilities } from '../hooks/useDeviceCapabilities';

export const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { isTouch, prefersReducedMotion } = useDeviceCapabilities();
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  const handleMouseMove = (e) => {
    if (isTouch || isMobile || prefersReducedMotion) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / (innerWidth / 2);
    const y = (clientY - innerHeight / 2) / (innerHeight / 2);
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden z-10 select-none"
    >
      {/* ── Scene 1: Procedural WebGL Video Canvas ── */}
      <CinematicHeroVideo mousePos={mousePos} />

      {/* ── Kinetic Wordmark Materializing Behind Content ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-hidden">
        <h1
          className="wordmark-behind text-[17vw] font-black text-[#14141E]/90 tracking-tighter transition-transform duration-300 opacity-40 blur-[1px]"
          style={{
            transform: `translate3d(${mousePos.x * -40}px, ${mousePos.y * -40}px, 0)`,
          }}
        >
          JASWANTH
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Position Statement */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* HUD Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-[#E11D48] bg-[#E11D48]/15 border border-[#E11D48]/35 shadow-cinematic-red uppercase tracking-widest"
            >
              <Terminal className="w-3.5 h-3.5 text-[#E11D48] animate-pulse" />
              <span>SYSTEM ONLINE • CINEMATIC EXPERIENCE • 2021 — 2026</span>
            </motion.div>

            {/* Name Header */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-fluid-hero font-extrabold text-white tracking-tight hero-heading"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Headline Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2.5"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-200 tracking-tight leading-snug">
                {personalInfo.headline}
              </h2>
              <div className="inline-block px-3.5 py-1.5 rounded-xl bg-[#121218]/90 border border-white/15 text-xs sm:text-sm font-mono text-[#06B6D4] font-bold shadow-xs">
                {personalInfo.subheadline}
              </div>
            </motion.div>

            {/* Concise Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-fluid-body text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              {personalInfo.shortBio}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <a
                href="#projects"
                className="group px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#06B6D4] hover:opacity-95 shadow-cinematic-red flex items-center gap-2 transition-all min-h-[48px]"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-300 hover:text-white bg-[#121218] border border-white/15 hover:border-[#E11D48]/50 flex items-center gap-2 transition-all min-h-[48px]"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-300 hover:text-white bg-[#121218] border border-white/15 hover:border-[#06B6D4]/50 flex items-center gap-2 transition-all min-h-[48px]"
              >
                <Linkedin className="w-4 h-4 text-[#06B6D4]" />
                <span>LinkedIn</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Cinematic 3D HUD Showcase (No Photo / Clean Design) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: 'outExpo' }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              <GlassCard className="p-6 sm:p-8 rounded-3xl border-2 border-white/20 bg-[#121218]/95 shadow-cinematic-card relative overflow-hidden space-y-4">
                
                {/* HUD Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/15 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2 text-[#E11D48] font-bold">
                    <Layers className="w-4 h-4 text-[#E11D48]" />
                    <span>FEATURED CASE STUDIES</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-bold">LIVE METRICS</span>
                </div>

                {/* 5 Project HUD Chips */}
                <div className="space-y-2.5">
                  <a
                    href="#projects"
                    className="p-3 rounded-2xl bg-[#0A0A0C] border border-white/15 flex items-center justify-between group hover:border-[#E11D48]/60 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#E11D48] shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#F43F5E] transition-colors">ClaimProof AI</div>
                        <div className="text-[10px] font-mono text-slate-400">Motor Claim Evidence Reviewer</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#06B6D4]">→</span>
                  </a>

                  <a
                    href="#projects"
                    className="p-3 rounded-2xl bg-[#0A0A0C] border border-white/15 flex items-center justify-between group hover:border-[#06B6D4]/60 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <Code2 className="w-5 h-5 text-[#06B6D4] shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#06B6D4] transition-colors">Iris AI / DocuMind</div>
                        <div className="text-[10px] font-mono text-slate-400">RAG Document Intelligence</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#06B6D4]">→</span>
                  </a>

                  <a
                    href="#projects"
                    className="p-3 rounded-2xl bg-[#0A0A0C] border border-white/15 flex items-center justify-between group hover:border-[#6366F1]/60 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <Film className="w-5 h-5 text-[#6366F1] shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-[#6366F1] transition-colors">Lumina AI</div>
                        <div className="text-[10px] font-mono text-slate-400">Movie Recommendation Engine</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#06B6D4]">→</span>
                  </a>
                </div>

                {/* Academic Tag */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/15 font-mono">
                  <span>CSE @ Rajalakshmi Eng. College</span>
                  <span className="text-[#06B6D4] font-bold">2021 — 2026</span>
                </div>

              </GlassCard>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
