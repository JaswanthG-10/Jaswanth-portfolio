import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';

export const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-24 relative z-10">
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
            <GraduationCap className="w-3.5 h-3.5 text-indigo-500" />
            <span>Academic Foundation</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-fluid-heading font-extrabold text-slate-900 tracking-tight"
          >
            Education & <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 bg-clip-text text-transparent">Engineering Degree</span>
          </motion.h2>
        </div>

        {/* Single Floating Glass Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          <GlassCard className="p-6 sm:p-8 lg:p-10 rounded-3xl shadow-glass border-white/90 relative overflow-hidden animate-float-1">
            
            {/* Background Pastel Aura */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-indigo-100/40 via-sky-100/30 to-transparent rounded-full blur-2xl -z-10" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/60">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 p-0.5 shadow-xs shrink-0">
                  <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center text-indigo-600 font-bold">
                    <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                    {educationData.degree}
                  </h3>
                  <div className="text-sm sm:text-base font-bold text-indigo-600 mt-0.5">
                    {educationData.institution}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start sm:items-end text-xs font-semibold text-slate-500 gap-1 shrink-0">
                <span className="glass-pill px-3 py-1 rounded-full text-indigo-700 font-bold bg-indigo-50 border-indigo-200 flex items-center gap-1.5 min-h-[32px]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{educationData.period}</span>
                </span>
                <span className="flex items-center gap-1 text-slate-600 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-purple-600" />
                  <span>{educationData.location}</span>
                </span>
              </div>
            </div>

            {/* Curriculum & Academic Focus Highlights */}
            <div className="pt-6">
              <h4 className="text-xs font-extrabold uppercase text-slate-500 tracking-wider mb-3">
                Academic Focus & Engineering Specialization
              </h4>

              <div className="space-y-2.5">
                {educationData.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-white/70 backdrop-blur-md p-3 rounded-2xl border border-white shadow-2xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
};
