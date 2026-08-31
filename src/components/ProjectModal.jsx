import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Cpu, Layers, Sparkles } from 'lucide-react';
import { GlassCard } from './UI/GlassCard';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-3xl z-10 my-8"
        >
          <GlassCard className="p-6 sm:p-8 rounded-3xl shadow-[0_25px_70px_rgba(99,102,241,0.25)] border-white bg-white/90 max-h-[85vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-200/60">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="glass-pill px-3 py-1 rounded-full text-[11px] font-bold text-indigo-700 bg-indigo-50 border-indigo-200">
                    {project.category}
                  </span>
                  {project.isFlagship && (
                    <span className="glass-pill px-3 py-1 rounded-full text-[11px] font-bold text-amber-700 bg-amber-50 border-amber-200 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-500" /> Flagship Platform
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-indigo-600 mt-1">
                  {project.tagline}
                </p>
              </div>

              <button
                onClick={onClose}
                className="glass-pill p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-white focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-6 space-y-6">
              
              {/* 4-Part Structure Breakdown */}
              <div className="space-y-4">
                
                {/* 1. Problem */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                  <h4 className="text-xs font-extrabold uppercase text-slate-500 tracking-wider mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500" /> Problem Statement
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {project.problem}
                  </p>
                </div>

                {/* 2. Engineering Approach */}
                <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100">
                  <h4 className="text-xs font-extrabold uppercase text-indigo-700 tracking-wider mb-1 flex items-center gap-2">
                    <Cpu className="w-3.5 h-3.5" /> Engineering Approach
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {project.engineeringApproach}
                  </p>
                </div>

                {/* 3. Capability Demonstrated */}
                <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100">
                  <h4 className="text-xs font-extrabold uppercase text-purple-700 tracking-wider mb-1 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5" /> Capability Demonstrated
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">
                    {project.capabilityDemonstrated}
                  </p>
                </div>

              </div>

              {/* Technical Highlights */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-3">Key Technical Highlights</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div>
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="glass-pill px-3 py-1 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill px-5 py-2.5 rounded-full text-xs font-bold text-slate-800 bg-white hover:text-indigo-600 border border-slate-200 flex items-center gap-2 shadow-sm"
              >
                <Github className="w-4 h-4" /> View GitHub Repository
              </a>
              
              <button
                onClick={onClose}
                className="glass-pill px-5 py-2.5 rounded-full text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm"
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
