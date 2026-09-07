import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';
import { useIntersectionAnimation } from '../hooks/useIntersectionAnimation';

export const Education = () => {
  const { ref: sectionRef, isVisible } = useIntersectionAnimation({ threshold: 0.05 });

  return (
    <section id="education" ref={sectionRef} className="py-16 sm:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-bold text-[#06B6D4] mb-3 border border-[#06B6D4]/30 shadow-cinematic-cyan uppercase tracking-wider"
          >
            <GraduationCap className="w-3.5 h-3.5 text-[#06B6D4]" />
            <span>Academic Background</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-fluid-heading font-extrabold text-white tracking-tight hero-heading"
          >
            Computer Science <span className="bg-gradient-to-r from-white via-[#F43F5E] to-[#06B6D4] bg-clip-text text-transparent">Education</span>
          </motion.h2>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          <GlassCard className="p-6 sm:p-8 lg:p-10 rounded-3xl shadow-cinematic-card border-white/15 bg-[#121218]/90 relative overflow-hidden animate-float-1">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/15">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#E11D48] via-[#F43F5E] to-[#06B6D4] p-0.5 shadow-cinematic-red shrink-0">
                  <div className="w-full h-full rounded-2xl bg-[#0A0A0C] flex items-center justify-center text-[#06B6D4] font-bold border border-white/20">
                    <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight hero-heading leading-tight">
                    {educationData.degree}
                  </h3>
                  <div className="text-sm sm:text-base font-bold text-[#06B6D4] mt-0.5">
                    {educationData.institution}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start sm:items-end text-xs font-semibold text-slate-400 gap-1 shrink-0">
                <span className="px-3 py-1 rounded-full text-[#E11D48] font-bold uppercase tracking-wider bg-[#E11D48]/15 border border-[#E11D48]/30 flex items-center gap-1.5 min-h-[32px]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{educationData.period}</span>
                </span>
                <span className="flex items-center gap-1 text-slate-400 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#06B6D4]" />
                  <span>{educationData.location}</span>
                </span>
              </div>
            </div>

            {/* Highlights */}
            <div className="pt-6">
              <h4 className="text-xs font-extrabold uppercase text-slate-400 tracking-wider mb-3">
                Academic Highlights & Coursework
              </h4>

              <div className="space-y-2.5">
                {educationData.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-[#0A0A0C] p-3.5 rounded-2xl border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-[#06B6D4] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

          </GlassCard>
        </div>

      </div>
    </section>
  );
};
