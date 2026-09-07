import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Database, Cpu, Terminal, ShieldCheck, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';
import { useDeviceCapabilities } from '../hooks/useDeviceCapabilities';

export const Hero = ({ onContactClick }) => {
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
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden z-10"
    >
      {/* ── Scene 1: Cinematic Wordmark Materializing Behind Subject ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 select-none overflow-hidden">
        <h1
          className="wordmark-behind text-[16vw] font-black text-[#16161E]/90 tracking-tighter transition-transform duration-300 opacity-30 blur-[1px]"
          style={{
            transform: `translate3d(${mousePos.x * -35}px, ${mousePos.y * -35}px, 0)`,
          }}
        >
          JASWANTH
        </h1>
      </div>

      {/* Ambient Crimson & Cyan Rim Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#E11D48]/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#06B6D4]/15 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Position Statement */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            
            {/* HUD Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-[#E11D48] bg-[#E11D48]/10 border border-[#E11D48]/30 shadow-cinematic-red uppercase tracking-widest"
            >
              <Terminal className="w-3.5 h-3.5 text-[#E11D48] animate-pulse" />
              <span>SYSTEM ONLINE • 2021 — 2026</span>
            </motion.div>

            {/* Name Header */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-fluid-hero font-extrabold text-white tracking-tight hero-heading"
            >
              Hi, I'm <span className="bg-gradient-to-r from-white via-[#F43F5E] to-[#06B6D4] bg-clip-text text-transparent">{personalInfo.fullName}</span>
            </motion.h1>

            {/* Portfolio Positioning Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-slate-200 tracking-tight leading-snug">
                {personalInfo.headline}
              </h2>
              <div className="inline-block px-3 py-1 rounded-lg bg-[#121218] border border-white/10 text-xs sm:text-sm font-mono text-[#06B6D4] font-semibold">
                {personalInfo.subheadline}
              </div>
            </motion.div>

            {/* Concise Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-fluid-body text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              {personalInfo.shortBio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <a
                href="#projects"
                className="group px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E11D48] via-[#F43F5E] to-[#06B6D4] hover:opacity-95 shadow-cinematic-red flex items-center gap-2 transition-all min-h-[46px]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-300 hover:text-white bg-[#121218] border border-white/15 hover:border-[#E11D48]/50 flex items-center gap-2 transition-all min-h-[46px]"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-300 hover:text-white bg-[#121218] border border-white/15 hover:border-[#06B6D4]/50 flex items-center gap-2 transition-all min-h-[46px]"
              >
                <Linkedin className="w-4 h-4 text-[#06B6D4]" />
                <span>LinkedIn</span>
              </a>
            </motion.div>

            {/* Tech Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-4 max-w-lg mx-auto lg:mx-0"
            >
              <div className="p-3 rounded-xl bg-[#121218]/90 border border-white/10 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E11D48] shrink-0" />
                <div className="text-[11px] font-bold text-slate-300">ClaimProof AI</div>
              </div>
              <div className="p-3 rounded-xl bg-[#121218]/90 border border-white/10 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#06B6D4] shrink-0" />
                <div className="text-[11px] font-bold text-slate-300">RAG Pipelines</div>
              </div>
              <div className="p-3 rounded-xl bg-[#121218]/90 border border-white/10 flex items-center gap-2">
                <Database className="w-4 h-4 text-[#6366F1] shrink-0" />
                <div className="text-[11px] font-bold text-slate-300">FastAPI & SQL</div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Cinematic 3D Glass Frame with Jaswanth's Portrait Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: 'outExpo' }}
              className="relative w-full max-w-sm sm:max-w-md"
            >
              <GlassCard className="p-4 sm:p-5 rounded-3xl border-2 border-white/20 bg-[#121218]/90 shadow-cinematic-card relative overflow-hidden group">
                
                {/* SVG HUD Orbital Rings */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
                  <div className="w-full h-full rounded-full border border-dashed border-[#E11D48] animate-spin-slow" />
                </div>

                {/* Portrait Image Frame with Rim Glow */}
                <div className="relative rounded-2xl overflow-hidden aspect-square border border-white/20 shadow-2xl bg-slate-900">
                  <img
                    src={personalInfo.photoUrl}
                    alt={personalInfo.fullName}
                    className="w-full h-full object-cover object-top filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Crimson & Cyan Rim Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-80" />
                  
                  {/* Photo Caption Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0A0A0C]/90 backdrop-blur-md border border-white/15 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white hero-heading">{personalInfo.fullName}</div>
                      <div className="text-[10px] font-semibold text-[#06B6D4]">CSE @ Rajalakshmi Eng. College</div>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E11D48] animate-ping" />
                  </div>
                </div>

              </GlassCard>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
