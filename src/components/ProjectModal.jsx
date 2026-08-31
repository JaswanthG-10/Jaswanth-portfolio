import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, CheckCircle2, Cpu, Layers, Sparkles } from 'lucide-react';
import { GlassCard } from './UI/GlassCard';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto w-full h-full">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          className="relative w-full max-w-3xl z-10 my-auto"
        >
          <GlassCard className="p-4 sm:p-8 rounded-3xl shadow-[0_20px_60px_rgba(99,102,241,0.22)] border-white bg-white/95 max-h-[85dvh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-3 pb-4 sm:pb-6 border-b border-slate-200/60">
              <div>
                <div className="flex flex-wrap items-center gap-1.5 mb-2">
                  <span className="glass-pill px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold text-indigo-700 bg-indigo-50 border-indigo-200">
                    {project.category}
                  </span>
                  {project.isFlagship && (
                    <span className="glass-pill px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold text-amber-700 bg-amber-50 border-amber-200 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-500" /> Flagship Platform
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-indigo-600 mt-1">
                  {project.tagline}
                </p>
              </div>

              <button
                onClick={onClose}
                className="glass-pill min-w-[44px] min-h-[44px] p-2.5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-white flex items-center justify-center focus:outline-none shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-4 sm:py-6 space-y-4 sm:space-y-6">
              
              {/* 4-Part Structure */}
              <div className="space-y-3 sm:space-y-4">
                
                {/* 1. Problem */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <h4 className="text-[10px] sm:text-xs font-extrabold uppercase text-slate-500 tracking-wider mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0" /> Problem Statement
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {project.problem}
                  </p>
                </div>

                {/* 2. Engineering Approach */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100">
                  <h4 className="text-[10px] sm:text-xs font-extrabold uppercase text-indigo-700 tracking-wider mb-1 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 shrink-0" /> Engineering Approach
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {project.engineeringApproach}
                  </p>
                </div>

                {/* 3. Capability Demonstrated */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-purple-50/70 border border-purple-100">
                  <h4 className="text-[10px] sm:text-xs font-extrabold uppercase text-purple-700 tracking-wider mb-1 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 shrink-0" /> Capability Demonstrated
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {project.capabilityDemonstrated}
                  </p>
                </div>

              </div>

              {/* Technical Highlights */}
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-2.5">Key Technical Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-white p-2.5 sm:p-3 rounded-xl border border-slate-100 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div>
                <h4 className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="glass-pill px-2.5 py-0.5 rounded-xl text-[10px] sm:text-xs font-bold text-slate-700 bg-slate-100 border-slate-200 min-h-[30px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-3">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto glass-pill px-5 py-2.5 rounded-full text-xs font-bold text-slate-800 bg-white hover:text-indigo-600 border border-slate-200 flex items-center justify-center gap-2 shadow-2xs min-h-[44px]"
              >
                <Github className="w-4 h-4" /> View GitHub Repository
              </a>
              
              <button
                onClick={onClose}
                className="w-full sm:w-auto glass-pill px-5 py-2.5 rounded-full text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs min-h-[44px] flex items-center justify-center"
              >
                Close Details
              </button>
            </div>

          </GlassCard>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
