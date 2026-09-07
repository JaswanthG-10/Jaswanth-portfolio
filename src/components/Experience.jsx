import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Network, Sparkles, Clock, Calendar, CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';

export const Experience = () => {
  const [activeYear, setActiveYear] = useState('2025');
  const { ref: sectionRef, isVisible } = useIntersectionAnimation({ threshold: 0.05 });

  const years = ['2021', '2022', '2023', '2024', '2025', '2026'];

  return (
    <section id="experience" ref={sectionRef} className="py-16 sm:py-24 relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-bold text-[#E11D48] mb-3 border border-[#E11D48]/30 shadow-cinematic-red uppercase tracking-wider"
          >
            <Clock className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>Scene 3 — The Time Machine</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-fluid-heading font-extrabold text-white tracking-tight hero-heading"
          >
            Interactive <span className="bg-gradient-to-r from-white via-[#F43F5E] to-[#06B6D4] bg-clip-text text-transparent">Timeline Rail (2021 — 2026)</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-fluid-body text-slate-400 max-w-lg mx-auto"
          >
            Select or hover any year to swing the clock hand across milestones from computer science coursework to Technical Board leadership.
          </motion.p>
        </div>

        {/* ── Interactive Time Machine Clock Rail Controls ── */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 max-w-2xl mx-auto p-2 rounded-full bg-[#121218]/90 border border-white/15 shadow-2xl">
          {years.map((yr) => (
            <button
              key={yr}
              onClick={() => setActiveYear(yr)}
              onMouseEnter={() => setActiveYear(yr)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-extrabold font-mono transition-all duration-300 min-h-[44px] flex items-center justify-center cursor-pointer ${
                activeYear === yr
                  ? 'bg-gradient-to-r from-[#E11D48] to-[#06B6D4] text-white shadow-cinematic-red scale-105 border-transparent'
                  : 'text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {yr}
            </button>
          ))}
        </div>

        {/* Timeline Rail */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glowing Vertical Timeline Thread */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E11D48] via-[#06B6D4] to-[#6366F1] shadow-[0_0_15px_rgba(225,29,72,0.5)] transform -translate-x-1/2" />

          <div className="space-y-8 sm:space-y-12 relative">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-6">
                    <GlassCard
                      className="p-5 sm:p-7 rounded-3xl shadow-cinematic-card border-white/15 bg-[#121218]/90"
                      floatClass={isEven ? 'animate-float-1' : 'animate-float-2'}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#E11D48] bg-[#E11D48]/15 border border-[#E11D48]/30">
                          {item.badge}
                        </span>
                        <span className="text-xs font-semibold text-slate-400 font-mono">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide hero-heading leading-snug">
                        {item.role}
                      </h3>
                      
                      <div className="text-xs sm:text-sm font-bold text-[#06B6D4] mt-0.5">
                        {item.organization}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 font-medium mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    </GlassCard>
                  </div>

                  {/* Orbital Node Marker */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#0A0A0C] border-2 border-[#E11D48] shadow-cinematic-red flex items-center justify-center z-20">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-tr from-[#E11D48] to-[#06B6D4] animate-ping" />
                    </div>
                  </div>

                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
