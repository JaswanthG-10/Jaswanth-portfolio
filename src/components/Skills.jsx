import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Hammer, Rocket } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoriesList = ['All', ...skillsData.categories.map(c => c.name)];

  return (
    <section id="skills" className="py-16 sm:py-24 relative z-10">
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
            <Cpu className="w-3.5 h-3.5 text-indigo-500" />
            <span>Technical Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-fluid-heading font-extrabold text-slate-900 tracking-tight"
          >
            Floating <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 bg-clip-text text-transparent">Orbit Clusters</span> of Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-fluid-body text-slate-500 max-w-lg mx-auto"
          >
            Demonstrated engineering competencies verified across production codebases and application builds.
          </motion.p>
        </div>

        {/* Category Filter Pills (Responsive Wrap & Minimum 44px tap targets) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12 max-w-full overflow-x-auto pb-2">
          {categoriesList.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`glass-pill px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 min-h-[40px] flex items-center justify-center ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md border-transparent scale-105'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Orbit Clusters Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {skillsData.categories
            .filter(cat => selectedCategory === 'All' || cat.name === selectedCategory)
            .map((catGroup, index) => (
              <motion.div
                key={catGroup.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <GlassCard className="p-5 sm:p-6 rounded-3xl h-full shadow-glass border-white/80 hover:border-indigo-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${catGroup.color} flex items-center justify-center text-white text-xs font-bold shadow-xs shrink-0`}>
                      <Code2 className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{catGroup.name}</h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {catGroup.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="glass-pill px-3 py-1 rounded-xl text-xs font-semibold text-slate-700 bg-white/80 border-white/90 shadow-2xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
        </div>

        {/* DISTINCT "Currently Building" GLASS TRAY */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass-tray-building p-6 sm:p-8 lg:p-10 rounded-3xl relative overflow-hidden">
            
            {/* Header Badge */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-indigo-200/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-100/80 border border-amber-200 flex items-center justify-center text-amber-600 font-bold shadow-xs shrink-0">
                  <Hammer className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-extrabold text-slate-900">Currently Building & Refining</h3>
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-200">
                      In Progress
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Skills currently being mastered in active learning loops & technical explorations.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 bg-white/70 px-3.5 py-1.5 rounded-full border border-indigo-100 shadow-2xs shrink-0">
                <Rocket className="w-3.5 h-3.5" />
                <span>Active Direction</span>
              </div>
            </div>

            {/* In-Progress Tray Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {skillsData.currentlyBuilding.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-dashed border-indigo-300/60 shadow-2xs flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">{item.name}</span>
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  </div>
                  <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
