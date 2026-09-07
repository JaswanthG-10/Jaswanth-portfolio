import React from 'react';
import { motion } from 'framer-motion';
import { User, Sparkles, Terminal, Code2, Cpu, ShieldCheck } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';

export const About = () => {
  const { ref: sectionRef, isVisible } = useIntersectionAnimation({ threshold: 0.05 });

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-24 relative z-10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-bold text-[#E11D48] mb-3 border border-[#E11D48]/30 shadow-cinematic-red uppercase tracking-wider"
          >
            <User className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>Behind the Code</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-fluid-heading font-extrabold text-white tracking-tight hero-heading"
          >
            Computer Science <span className="bg-gradient-to-r from-white via-[#F43F5E] to-[#06B6D4] bg-clip-text text-transparent">Developer Story</span>
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          <GlassCard className="p-6 sm:p-10 rounded-3xl shadow-cinematic-card border-white/15 bg-[#121218]/90 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/15">
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#E11D48] uppercase tracking-wider">
                <Terminal className="w-4 h-4" />
                <span>{aboutData.headline}</span>
              </div>
              <div className="text-xs font-mono text-[#06B6D4] font-bold">
                {personalInfo.institution}
              </div>
            </div>

            <div className="space-y-4">
              {aboutData.bio.map((paragraph, idx) => (
                <p key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Metrics */}
            <div className="pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {aboutData.stats.map((stat, sIdx) => (
                <div key={sIdx} className="p-3.5 rounded-2xl bg-[#0A0A0C] border border-white/10 text-center">
                  <div className="text-lg sm:text-xl font-extrabold text-white hero-heading">{stat.value}</div>
                  <div className="text-[10px] font-semibold text-slate-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

          </GlassCard>
        </div>

      </div>
    </section>
  );
};
