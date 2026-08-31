import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Cpu, Code2, Database, Github, Linkedin, Mail } from 'lucide-react';
import { Hero3DScene } from './Hero3DScene';
import { personalInfo } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[100dvh] pt-24 sm:pt-28 pb-12 sm:pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Hero Text Content (Strict Mobile Order) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pt-2 lg:pt-0">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 glass-pill px-3.5 sm:px-4 py-1.5 rounded-full mb-4 text-xs font-bold text-indigo-700 border border-indigo-200/80 shadow-sm animate-float-2 max-w-full"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <span className="truncate">Seeking AI/ML & Backend Internships</span>
              <Sparkles className="w-3.5 h-3.5 text-indigo-500 shrink-0 ml-0.5" />
            </motion.div>

            {/* 1. Name & Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="text-fluid-hero font-extrabold tracking-tight text-slate-900 leading-[1.12] w-full"
            >
              Weightless Intelligence. <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* 2. Developer Title */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 sm:mt-4 text-fluid-subheading font-semibold text-slate-700 max-w-2xl"
            >
              {personalInfo.role}
            </motion.p>

            {/* 3. Short Introduction */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-3 text-fluid-body text-slate-500 max-w-xl leading-relaxed"
            >
              {personalInfo.shortBio} Combining core AI/ML concepts with REST APIs, databases, vector retrieval, authentication, and modern web interfaces into end-to-end intelligent applications.
            </motion.p>

            {/* 4. CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto"
            >
              <a
                href="#projects"
                className="w-full sm:w-auto glass-pill px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 hover:from-indigo-700 hover:to-sky-600 shadow-[0_8px_20px_rgba(99,102,241,0.3)] transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto glass-pill px-6 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm text-slate-700 bg-white/70 hover:bg-white hover:text-indigo-600 border border-white/90 shadow-sm transition-all duration-300 flex items-center justify-center"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* 5. Social Links (Mobile & Desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 flex items-center gap-3"
            >
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Connect:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="glass-pill p-2 rounded-full text-slate-600 hover:text-indigo-600 hover:bg-white shadow-2xs"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="glass-pill p-2 rounded-full text-slate-600 hover:text-indigo-600 hover:bg-white shadow-2xs"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
                className="glass-pill p-2 rounded-full text-slate-600 hover:text-indigo-600 hover:bg-white shadow-2xs"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Floating Technical Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200/50 w-full"
            >
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-600 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/80 shadow-2xs">
                <Cpu className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                <span>RAG & Vector AI</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-600 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/80 shadow-2xs">
                <Database className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                <span>FastAPI & ChromaDB</span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-600 bg-white/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/80 shadow-2xs">
                <Code2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>Next.js & React</span>
              </div>
            </motion.div>

          </div>

          {/* 6. Lightweight 3D Visual Centerpiece & Overlay Cards (Stacked below text on mobile) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center mt-6 lg:mt-0">
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200/30 via-purple-200/20 to-sky-200/30 rounded-full blur-3xl -z-10 transform scale-110 pointer-events-none" />

            {/* Three.js Responsive Canvas */}
            <Hero3DScene />

            {/* Desktop-only floating glass badge overlays */}
            <div className="hidden sm:block absolute top-2 right-4 z-20 pointer-events-auto animate-float-1">
              <GlassCard className="p-3 rounded-2xl shadow-glass flex items-center gap-2.5 border-indigo-100 max-w-[200px]">
                <div className="w-8 h-8 rounded-xl bg-indigo-100/80 flex items-center justify-center text-indigo-600 font-bold text-xs shrink-0">
                  ⚡
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-800 leading-tight">Iris AI Flagship</div>
                  <div className="text-[9px] text-slate-500 font-medium">RAG & Citations</div>
                </div>
              </GlassCard>
            </div>

            <div className="hidden sm:block absolute bottom-4 left-4 z-20 pointer-events-auto animate-float-3">
              <GlassCard className="p-3 rounded-2xl shadow-glass flex items-center gap-2.5 border-purple-100 max-w-[210px]">
                <div className="w-8 h-8 rounded-xl bg-purple-100/80 flex items-center justify-center text-purple-600 font-bold text-xs shrink-0">
                  🎓
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-800 leading-tight">B.E. CSE (2025–2029)</div>
                  <div className="text-[9px] text-slate-500 font-medium">Rajalakshmi Eng. College</div>
                </div>
              </GlassCard>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
