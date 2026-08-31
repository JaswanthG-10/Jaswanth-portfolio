import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Play } from 'lucide-react';

export const Footer = ({ onReplayIntro }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 relative z-10 border-t border-[#6C5CE7]/15 bg-[#EEF1F7]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Copyright & Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#6C5CE7] to-[#4C8DFF] flex items-center justify-center text-white font-black text-xs shadow-2xs">
              JG
            </div>
            <div className="text-xs text-[#58647A] font-medium">
              © {new Date().getFullYear()} Jaswanth G. All rights reserved.
            </div>
          </div>

          {/* Buttons: Replay Welcome & Back to Top */}
          <div className="flex items-center gap-2">
            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="glass-pill px-3.5 py-1.5 rounded-full text-xs font-bold text-[#58647A] hover:text-[#6C5CE7] bg-white/80 border border-white shadow-2xs flex items-center gap-1.5 min-h-[36px]"
              >
                <Play className="w-3 h-3 text-[#6C5CE7]" />
                <span>Replay 3D Welcome</span>
              </button>
            )}

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="glass-pill px-4 py-2 rounded-full text-xs font-bold text-[#172033] hover:text-[#6C5CE7] bg-white/80 border border-white shadow-2xs flex items-center gap-2 min-h-[40px]"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#6C5CE7]" />
            </motion.button>
          </div>

        </div>

      </div>
    </footer>
  );
};
