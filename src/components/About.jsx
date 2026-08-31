import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Server, Layers, GraduationCap, MapPin, Target } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';

export const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-bold text-indigo-700 mb-3 border border-indigo-100"
          >
            <Brain className="w-3.5 h-3.5 text-indigo-500" />
            <span>About Me</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-fluid-heading font-extrabold text-slate-900 tracking-tight"
          >
            End-to-End <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 bg-clip-text text-transparent">AI/ML Engineering</span> & Architecture
          </motion.h2>
        </div>

        {/* Floating Glass Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Abstract 3D Avatar Orbit Graphic Widget */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <GlassCard className="p-6 sm:p-8 rounded-3xl text-center relative overflow-hidden border-indigo-100/80 shadow-glass animate-float-2">
              
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100/40 via-purple-50/20 to-sky-100/30 -z-10" />

              {/* Orbital Graphic Avatar */}
              <div className="relative w-40 sm:w-48 h-40 sm:h-48 mx-auto my-4 sm:my-6 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-300/70 animate-spin-slow" />
                <div className="absolute inset-3 rounded-full border border-purple-300/60 animate-pulse-subtle" />

                <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 p-1 shadow-md flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-2">
                    <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      JG
                    </span>
                    <span className="text-[9px] font-bold text-slate-500 tracking-wider">
                      AI / ML
                    </span>
                  </div>
                </div>

                <div className="absolute -top-1 left-1 glass-pill px-2.5 py-1 rounded-full text-[10px] font-bold text-indigo-700 border-indigo-200 shadow-2xs animate-float-1">
                  RAG Pipelines
                </div>
                <div className="absolute bottom-1 -right-1 glass-pill px-2.5 py-1 rounded-full text-[10px] font-bold text-purple-700 border-purple-200 shadow-2xs animate-float-3">
                  FastAPI REST
                </div>
              </div>

              {/* Bio Summary Badges */}
              <div className="mt-4 flex flex-col gap-2 text-left text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2 bg-white/60 p-2.5 rounded-xl border border-white/80">
                  <GraduationCap className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>B.E. CSE @ Rajalakshmi Eng. College (2025–2029)</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 p-2.5 rounded-xl border border-white/80">
                  <MapPin className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Based in Chennai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-2 bg-white/60 p-2.5 rounded-xl border border-white/80">
                  <Target className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Technical Board Member @ InovX Club</span>
                </div>
              </div>

            </GlassCard>
          </motion.div>

          {/* Right Column: Profile Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <GlassCard className="p-6 sm:p-8 lg:p-10 rounded-3xl shadow-glass border-white/90">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6 leading-snug">
                {aboutData.headline}
              </h3>

              <div className="space-y-4 text-slate-600 text-fluid-body leading-relaxed max-w-prose">
                {aboutData.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Focus Pillars */}
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-3.5 sm:p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100/80">
                  <Brain className="w-5 h-5 text-indigo-600 mb-2" />
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">RAG & Vector Search</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Building document Q&A pipelines with page/source citation retrieval.</p>
                </div>
                <div className="p-3.5 sm:p-4 rounded-2xl bg-purple-50/60 border border-purple-100/80">
                  <Server className="w-5 h-5 text-purple-600 mb-2" />
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Backend Systems</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Designing Python REST APIs, SQLAlchemy schemas & JWT security.</p>
                </div>
                <div className="p-3.5 sm:p-4 rounded-2xl bg-sky-50/60 border border-sky-100/80">
                  <Layers className="w-5 h-5 text-sky-600 mb-2" />
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">End-to-End Apps</h4>
                  <p className="text-[11px] text-slate-500 mt-1">Connecting machine learning models directly into modern React UIs.</p>
                </div>
              </div>

            </GlassCard>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
