import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Server, Layers, GraduationCap, MapPin, Target } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';

export const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-bold text-indigo-700 mb-3 border border-indigo-100"
          >
            <Brain className="w-3.5 h-3.5 text-indigo-500" />
            <span>About Me</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Floating Between <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 bg-clip-text text-transparent">AI Intelligence</span> & Systems Engineering
          </motion.h2>
        </div>

        {/* Floating Glass Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Abstract 3D Avatar Orbit Graphic Widget */}
          <motion.div
            initial={{ opacity: 0, x: -30, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <GlassCard className="p-8 rounded-3xl text-center relative overflow-hidden border-indigo-100/80 shadow-glass animate-float-2">
              
              {/* Soft background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/50 via-purple-50/30 to-sky-100/40 -z-10" />

              {/* Orbital Graphic Avatar */}
              <div className="relative w-48 h-48 mx-auto my-6 flex items-center justify-center">
                {/* Orbiting outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-300/70 animate-spin-slow" />
                
                {/* Inner floating ring */}
                <div className="absolute inset-3 rounded-full border border-purple-300/60 animate-pulse-subtle" />

                {/* Core Avatar Sphere */}
                <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 p-1 shadow-[0_15px_30px_rgba(99,102,241,0.35)] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-2">
                    <span className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      JG
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 tracking-wider">
                      AI / ML
                    </span>
                  </div>
                </div>

                {/* Satellite Pills floating around Avatar */}
                <div className="absolute -top-2 left-2 glass-pill px-2.5 py-1 rounded-full text-[10px] font-bold text-indigo-700 border-indigo-200 shadow-sm animate-float-1">
                  RAG Pipelines
                </div>
                <div className="absolute bottom-1 -right-2 glass-pill px-2.5 py-1 rounded-full text-[10px] font-bold text-purple-700 border-purple-200 shadow-sm animate-float-3">
                  FastAPI REST
                </div>
                <div className="absolute -bottom-3 left-4 glass-pill px-2.5 py-1 rounded-full text-[10px] font-bold text-sky-700 border-sky-200 shadow-sm animate-float-4">
                  ChromaDB
                </div>
              </div>

              {/* Bio Summary Badges */}
              <div className="mt-4 flex flex-col gap-2.5 text-left text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2.5 bg-white/60 p-2.5 rounded-xl border border-white/80">
                  <GraduationCap className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>B.E. CSE @ Rajalakshmi Eng. College (2025–2029)</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/60 p-2.5 rounded-xl border border-white/80">
                  <MapPin className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Based in Chennai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/60 p-2.5 rounded-xl border border-white/80">
                  <Target className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Technical Board Member @ InovX Club</span>
                </div>
              </div>

            </GlassCard>
          </motion.div>

          {/* Right Column: Detailed Profile Glass Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-8 sm:p-10 rounded-3xl shadow-glass border-white/90">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 leading-snug">
                {aboutData.headline}
              </h3>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                {aboutData.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Engineering Focus Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100/80">
                  <Brain className="w-6 h-6 text-indigo-600 mb-2" />
                  <h4 className="text-sm font-bold text-slate-900">RAG & Vector AI</h4>
                  <p className="text-xs text-slate-500 mt-1">Building document Q&A engines with source-level citation accuracy.</p>
                </div>
                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100/80">
                  <Server className="w-6 h-6 text-purple-600 mb-2" />
                  <h4 className="text-sm font-bold text-slate-900">Backend Systems</h4>
                  <p className="text-xs text-slate-500 mt-1">Designing Python & FastAPI REST APIs, SQLAlchemy schemas, and JWT security.</p>
                </div>
                <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100/80">
                  <Layers className="w-6 h-6 text-sky-600 mb-2" />
                  <h4 className="text-sm font-bold text-slate-900">End-to-End Apps</h4>
                  <p className="text-xs text-slate-500 mt-1">Connecting machine learning models smoothly into modern React frontends.</p>
                </div>
              </div>

              {/* Stats Footer */}
              <div className="mt-8 pt-6 border-t border-slate-200/60 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {aboutData.stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-lg sm:text-xl font-extrabold text-indigo-600">{stat.value}</div>
                    <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

            </GlassCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
