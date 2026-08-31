import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative z-10 border-t border-slate-200/50 bg-white/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Copyright & Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white font-black text-xs shadow-sm">
              JG
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800">
                Jaswanth G — Antigravity 3D Portfolio
              </div>
              <div className="text-[10px] text-slate-500 font-medium">
                © {new Date().getFullYear()} Jaswanth G. Built with React, Tailwind & Three.js.
              </div>
            </div>
          </div>

          {/* Floating Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="glass-pill px-4 py-2 rounded-full text-xs font-bold text-slate-700 hover:text-indigo-600 bg-white/80 border border-white shadow-sm flex items-center gap-2"
          >
            <span>Back to Zero Gravity</span>
            <ArrowUp className="w-3.5 h-3.5 text-indigo-600" />
          </motion.button>

        </div>

      </div>
    </footer>
  );
};
