import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Compass, Layers, Cpu } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useDeviceCapabilities } from '../hooks/useDeviceCapabilities';

export const WelcomeGateway = ({ onEnter }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const { isTouch, tier, prefersReducedMotion } = useDeviceCapabilities();

  const handleEnterClick = () => {
    if (isTransitioning) return;
    setIsPressed(true);

    // Particle burst celebration
    try {
      confetti({
        particleCount: isTouch ? 30 : 60,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#6366f1', '#8b5cf6', '#0ea5e9', '#10b981'],
      });
    } catch (e) {
      // fallback
    }

    // Camera dolly-in & portal roll-away transition
    setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        onEnter();
      }, 1200);
    }, 300);
  };

  return (
    <AnimatePresence>
      {!isTransitioning ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F8FAFC]/95 backdrop-blur-2xl overflow-hidden p-4 sm:p-6 w-full h-full">
          
          {/* Depth Background Glow Layers */}
          <div className="absolute inset-0 bg-radial from-indigo-200/40 via-purple-100/30 to-transparent pointer-events-none animate-pulse-subtle" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-300/30 to-purple-300/20 rounded-full blur-3xl pointer-events-none" />

          {/* Quick Skip Option for Recruiters */}
          <button
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(onEnter, 500);
            }}
            className="absolute top-6 right-6 z-50 glass-pill px-4 py-2 rounded-full text-xs font-bold text-slate-600 hover:text-indigo-600 bg-white/80 border border-white shadow-2xs flex items-center gap-1.5 transition-all min-h-[40px]"
          >
            <span>Skip Entrance</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* 3D ROLL-ON WELCOME INTERFACE CARD */}
          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 0, scale: 0.95 }
                : {
                    rotateX: 75,
                    translateY: 80,
                    translateZ: -100,
                    scale: 0.85,
                    opacity: 0,
                  }
            }
            animate={
              prefersReducedMotion
                ? { opacity: 1, scale: 1 }
                : {
                    rotateX: 0,
                    translateY: 0,
                    translateZ: 0,
                    scale: 1,
                    opacity: 1,
                  }
            }
            exit={{
              scale: 1.35,
              opacity: 0,
              rotateX: -30,
              translateZ: 200,
              filter: 'blur(16px)',
              transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            }}
            transition={{
              duration: isTouch ? 0.9 : 1.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full max-w-xl text-center pointer-events-auto"
            style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
          >
            <div
              className={`glass-panel p-8 sm:p-12 rounded-3xl shadow-[0_30px_80px_rgba(99,102,241,0.25)] border-white bg-white/90 relative overflow-hidden transition-all duration-300 ${
                isPressed ? 'scale-95 border-indigo-400' : ''
              }`}
            >
              {/* Subtle Inner Glow Border */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-indigo-100/30 pointer-events-none" />

              {/* Subtitle Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-extrabold text-indigo-700 mb-6 border border-indigo-200/80 shadow-2xs"
              >
                <Compass className="w-3.5 h-3.5 text-indigo-500 animate-spin-slow" />
                <span>WELCOME TO MY PORTFOLIO</span>
              </motion.div>

              {/* Main Headline Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"
              >
                JASWANTH G
              </motion.h1>

              {/* Specialization Subhead */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider"
              >
                <span>AI/ML</span>
                <span className="text-indigo-400">•</span>
                <span>SOFTWARE DEVELOPMENT</span>
                <span className="text-indigo-400">•</span>
                <span>CREATIVE TECHNOLOGY</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.5 }}
                className="mt-4 text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed"
              >
                Explore weightless 3D intelligence, RAG document platforms, production FastAPI backends, and modern React engineering.
              </motion.p>

              {/* 3D DIMENSIONAL CTA BUTTON OBJECT */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                className="mt-8 pt-4"
              >
                <button
                  onClick={handleEnterClick}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-extrabold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 hover:from-indigo-700 hover:to-sky-600 shadow-[0_15px_35px_rgba(99,102,241,0.4)] hover:shadow-[0_20px_45px_rgba(99,102,241,0.55)] transition-all duration-300 hover:-translate-y-1 active:translate-y-0 min-h-[52px] w-full sm:w-auto"
                >
                  <Sparkles className="w-4 h-4 text-indigo-200 group-hover:rotate-12 transition-transform" />
                  <span>ENTER PORTFOLIO</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </motion.div>

              <div className="mt-6 text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                Interactive Gateway • 3D Experience
              </div>

            </div>
          </motion.div>

        </div>
      ) : (
        /* Camera Dolly-In Flash Transition Layer */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: [0, 1, 0], scale: [0.95, 1.1, 1] }}
          transition={{ duration: 1.1, times: [0, 0.4, 1] }}
          className="fixed inset-0 z-50 bg-white pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
};
