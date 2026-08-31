import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Cpu, Code2, Database, ShieldCheck } from 'lucide-react';
import { Hero3DScene } from './Hero3DScene';
import { personalInfo } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left pt-4 lg:pt-0">
            
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 glass-pill px-4 py-2 rounded-full mb-6 text-xs font-bold text-indigo-700 border border-indigo-200/80 shadow-sm animate-float-2"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Seeking AI/ML & Backend Internships & Collaborations</span>
              <Sparkles className="w-3.5 h-3.5 text-indigo-500 ml-1" />
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]"
            >
              Weightless Intelligence. <br />
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Subtitle / Role */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 text-lg sm:text-xl font-medium text-slate-600 max-w-2xl leading-relaxed"
            >
              {personalInfo.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl"
            >
              Building end-to-end intelligent platforms—combining Retrieval-Augmented Generation (RAG), vector embeddings, production FastAPI REST backends, and modern React interfaces.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group glass-pill px-7 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 hover:from-indigo-700 hover:to-sky-600 shadow-[0_10px_25px_rgba(99,102,241,0.3)] hover:shadow-[0_15px_35px_rgba(99,102,241,0.45)] transition-all duration-300 flex items-center gap-2 hover:-translate-y-1 animate-pulse-subtle"
              >
                <span>Explore Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="glass-pill px-6 py-3.5 rounded-full font-semibold text-sm text-slate-700 bg-white/70 hover:bg-white hover:text-indigo-600 border border-white/90 shadow-glass transition-all duration-300 hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Floating Quick Badges */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 flex flex-wrap items-center gap-3 pt-6 border-t border-slate-200/50"
            >
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 shadow-sm animate-float-1">
                <Cpu className="w-3.5 h-3.5 text-purple-600" />
                <span>RAG & Vector Embeddings</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 shadow-sm animate-float-3">
                <Database className="w-3.5 h-3.5 text-indigo-600" />
                <span>FastAPI & ChromaDB</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/80 shadow-sm animate-float-2">
                <Code2 className="w-3.5 h-3.5 text-sky-600" />
                <span>Next.js & React</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: 3D Centerpiece Canvas & Overlay Floating Glass Cards */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Pastel Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200/40 via-purple-200/30 to-sky-200/40 rounded-full blur-3xl -z-10 transform scale-110" />

            {/* Three.js Canvas */}
            <Hero3DScene />

            {/* Floating Glass Badge Overlay - Top Right */}
            <div className="absolute top-4 right-2 sm:right-6 z-20 pointer-events-auto animate-float-1">
              <GlassCard className="p-3.5 rounded-2xl shadow-glass flex items-center gap-3 border-indigo-100 max-w-[210px]">
                <div className="w-10 h-10 rounded-xl bg-indigo-100/80 flex items-center justify-center text-indigo-600 font-bold shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-800 leading-tight">Iris AI Flagship</div>
                  <div className="text-[10px] text-slate-500 font-medium mt-0.5">RAG & Citations</div>
                </div>
              </GlassCard>
            </div>

            {/* Floating Glass Badge Overlay - Bottom Left */}
            <div className="absolute bottom-6 left-2 sm:left-6 z-20 pointer-events-auto animate-float-3">
              <GlassCard className="p-3.5 rounded-2xl shadow-glass flex items-center gap-3 border-purple-100 max-w-[220px]">
                <div className="w-10 h-10 rounded-xl bg-purple-100/80 flex items-center justify-center text-purple-600 font-bold shrink-0">
                  ⚡
                </div>
                <div>
                  <div className="text-[11px] font-bold text-slate-800 leading-tight">B.E. CSE (2025–2029)</div>
                  <div className="text-[10px] text-slate-500 font-medium mt-0.5">Rajalakshmi Eng. College</div>
                </div>
              </GlassCard>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
