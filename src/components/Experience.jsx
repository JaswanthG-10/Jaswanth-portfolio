import React from 'react';
import { motion } from 'framer-motion';
import { Network } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';

export const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 relative z-10">
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
            <Network className="w-3.5 h-3.5 text-indigo-500" />
            <span>Activities & Direction</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-fluid-heading font-extrabold text-slate-900 tracking-tight"
          >
            Orbital <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 bg-clip-text text-transparent">Timeline Nodes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-fluid-body text-slate-500 max-w-lg mx-auto"
          >
            Technical community leadership and open-source activities connected along an orbital path.
          </motion.p>
        </div>

        {/* Floating Satellite Orbital Path Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Thin Glowing Orbital Thread Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 via-purple-400 to-sky-400 shadow-[0_0_10px_rgba(99,102,241,0.4)] transform -translate-x-1/2" />

          {/* Timeline Node Cards */}
          <div className="space-y-8 sm:space-y-12 relative">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex flex-col md:flex-row items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-10 md:pl-0 md:px-6">
                    <GlassCard
                      className="p-5 sm:p-7 rounded-3xl shadow-glass border-white/90 hover:border-indigo-200"
                      floatClass={isEven ? 'animate-float-1' : 'animate-float-2'}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="glass-pill px-2.5 py-0.5 rounded-full text-[10px] font-bold text-indigo-700 bg-indigo-50 border-indigo-200">
                          {item.badge}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug">
                        {item.role}
                      </h3>
                      
                      <div className="text-xs sm:text-sm font-bold text-indigo-600 mt-0.5">
                        {item.organization}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 font-medium mt-3 leading-relaxed">
                        {item.description}
                      </p>
                    </GlassCard>
                  </div>

                  {/* Node Marker */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.4)] flex items-center justify-center z-20">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 animate-pulse" />
                    </div>
                  </div>

                  {/* Empty Spacer Column */}
                  <div className="hidden md:block w-1/2" />

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
