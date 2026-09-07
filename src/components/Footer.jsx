import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/audioEffects';

export const Footer = () => {
  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 relative z-10 border-t border-white/10 bg-[#0A0A0C] text-[#F1F5F9] select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="w-full flex flex-col items-center justify-center text-center gap-4">
          
          {/* Designed & Built by */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm sm:text-base font-medium tracking-tight text-white/90">
            <span>Designed & built by</span>
            <span className="text-white font-bold tracking-normal bg-gradient-to-r from-white via-[#F43F5E] to-[#06B6D4] bg-clip-text text-transparent">
              Jaswanth G
            </span>
            <span className="text-white/30">•</span>
            <span className="text-white/70 text-xs sm:text-sm font-normal">
              Chennai, India
            </span>
          </div>

          {/* Quote Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 shadow-[0_0_15px_rgba(6,182,212,0.08)]">
            <Sparkles className="h-3.5 w-3.5 text-[#06B6D4] shrink-0" />
            <p className="text-xs sm:text-[13px] font-sans italic text-white/80 tracking-wide">
              “Where curiosity meets creativity and ideas become code.”
            </p>
          </div>

          {/* Back to Top button */}
          <div className="flex items-center gap-3 mt-2">
            <button
              onClick={scrollToTop}
              onMouseEnter={playHoverSound}
              className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white border border-white/20 bg-white/5 hover:bg-white/15 transition-all flex items-center gap-1.5 min-h-[44px] cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#06B6D4]" />
            </button>
          </div>

          {/* Copyright */}
          <p className="text-[11px] sm:text-xs font-mono text-slate-500 tracking-wider pt-2">
            © {new Date().getFullYear()} Jaswanth G. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};
