import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Sparkles, Cpu, Hammer, Rocket, ShieldAlert } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { GlassCard } from './UI/GlassCard';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoriesList = ['All', ...skillsData.categories.map(c => c.name)];

  return (
    <section id="skills" className="py-24 relative z-10">
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
            <Cpu className="w-3.5 h-3.5 text-indigo-500" />
            <span>Technical Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Floating <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 bg-clip-text text-transparent">Orbit Clusters</span> of Technical Competency
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-3 text-slate-500 text-sm sm:text-base"
          >
            Demonstrated engineering competencies verified across production codebase deployments.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categoriesList.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`glass-pill px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md border-transparent scale-105'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Orbit Clusters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillsData.categories
            .filter(cat => selectedCategory === 'All' || cat.name === selectedCategory)
            .map((catGroup, index) => (
              <motion.div
                key={catGroup.name}
                initial={{ opacity: 0, y: 30, rotateX: 15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <GlassCard className="p-6 rounded-3xl h-full shadow-glass border-white/80 hover:border-indigo-200">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-9 h-9 rounded-2xl bg-gradient-to-tr ${catGroup.color} flex items-center justify-center text-white text-sm font-bold shadow-md`}>
                      <Code2 className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{catGroup.name}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {catGroup.skills.map((skill, sIdx) => (
                      <motion.span
                        key={sIdx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="glass-pill px-3.5 py-1.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-indigo-600 hover:bg-white border-white/90 shadow-sm transition-all"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
        </div>

        {/* DISTINCT "Currently Building" GLASS TRAY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8"
        >
          <div className="glass-tray-building p-8 sm:p-10 rounded-3xl relative overflow-hidden">
            
            {/* Header Badge */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-indigo-200/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-100/80 border border-amber-200 flex items-center justify-center text-amber-600 font-bold shadow-sm">
                  <Hammer className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-extrabold text-slate-900">Currently Building & Refining</h3>
                    <span className="text-[10px] font-bold tracking-widest uppercase bg-amber-100 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-200">
                      In Progress
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Skills currently being mastered in active learning loops & deep-dive technical explorations.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 bg-white/70 px-3.5 py-1.5 rounded-full border border-indigo-100 shadow-sm">
                <Rocket className="w-3.5 h-3.5" />
                <span>Active Growth Direction</span>
              </div>
            </div>

            {/* In-Progress Tray Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skillsData.currentlyBuilding.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-white/60 backdrop-blur-md p-4 rounded-2xl border border-dashed border-indigo-300/60 shadow-sm flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900">{item.name}</span>
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                  </div>
                  <p className="text-xs text-slate-500 mt-2 font-medium leading-relaxed">
                    {item.detail}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
