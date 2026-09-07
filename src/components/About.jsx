import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, GitPullRequest, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { aboutData, personalInfo } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';

export const About = () => {
  const { ref: sectionRef, isVisible } = useIntersectionAnimation({ threshold: 0.05 });

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-24 relative z-10">
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
            <span>Behind the Engineering</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-fluid-heading font-extrabold text-white tracking-tight hero-heading"
          >
            Computer Science <span className="bg-gradient-to-r from-white via-[#F43F5E] to-[#06B6D4] bg-clip-text text-transparent">Developer Background</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Portrait & Highlights */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <GlassCard className="p-4 sm:p-5 rounded-3xl border border-white/20 bg-[#121218]/90 shadow-cinematic-card relative overflow-hidden group w-full max-w-sm">
              <div className="relative rounded-2xl overflow-hidden aspect-square border border-white/20 shadow-xl bg-slate-900">
                <img
                  src={personalInfo.photoUrl}
                  alt={personalInfo.fullName}
                  className="w-full h-full object-cover object-top filter brightness-105 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-70" />
              </div>
              <div className="pt-4 text-center">
                <div className="text-lg font-extrabold text-white hero-heading">{personalInfo.fullName}</div>
                <div className="text-xs font-semibold text-[#06B6D4] mt-0.5">{personalInfo.institution}</div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Bio Paragraphs & Highlights */}
          <div className="lg:col-span-7 space-y-5">
            <GlassCard className="p-6 sm:p-8 rounded-3xl shadow-cinematic-card border-white/15 bg-[#121218]/90 space-y-4">
              <div className="flex items-center gap-2 text-xs font-extrabold text-[#E11D48] uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>{aboutData.headline}</span>
              </div>

              {aboutData.bio.map((paragraph, idx) => (
                <p key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {aboutData.stats.map((stat, sIdx) => (
                  <div key={sIdx} className="p-3 rounded-2xl bg-[#0A0A0C] border border-white/10 text-center">
                    <div className="text-lg sm:text-xl font-extrabold text-white hero-heading">{stat.value}</div>
                    <div className="text-[10px] font-semibold text-slate-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};
