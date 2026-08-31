import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useDeviceCapabilities } from '../hooks/useDeviceCapabilities';
import { personalInfo } from '../data/portfolioData';

export const WelcomeGateway = ({ onEnter }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isZooming, setIsZooming] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { isTouch, prefersReducedMotion } = useDeviceCapabilities();

  // Desktop Mouse Parallax
  const handleMouseMove = (e) => {
    if (isTouch || prefersReducedMotion) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / (innerWidth / 2);
    const y = (clientY - innerHeight / 2) / (innerHeight / 2);
    setMousePos({ x, y });
  };

  const handleEnterClick = () => {
    if (isTransitioning || isZooming) return;
    setIsZooming(true);

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

    // Single big cinematic transition sequence
    setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        onEnter();
      }, 1000);
    }, 450);
  };

  return (
    <AnimatePresence>
      {!isTransitioning ? (
        <div
          onMouseMove={handleMouseMove}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#F8FAFC] text-slate-900 overflow-hidden p-4 sm:p-6 w-full h-full select-none"
        >
          {/* Subtle Ambient Gradient Mesh Matching Portfolio Design Tokens */}
          <div className="absolute inset-0 bg-radial from-[#E8F1FF] via-[#F1EEFC] to-[#F8FAFC] pointer-events-none opacity-80" />
          
          {/* Volumetric Soft Aura */}
          <motion.div
            style={{
              x: mousePos.x * 20,
              y: mousePos.y * 20,
            }}
            transition={{ type: 'spring', damping: 25, stiffness: 90 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-200/40 via-purple-200/30 to-sky-200/40 rounded-full blur-3xl pointer-events-none"
          />

          {/* Quick Skip Option for Recruiters */}
          <button
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(onEnter, 400);
            }}
            className="absolute top-6 right-6 z-50 glass-pill px-4 py-2 rounded-full text-xs font-bold text-slate-600 hover:text-indigo-600 bg-white/80 border border-white shadow-2xs flex items-center gap-1.5 transition-all min-h-[40px]"
          >
            <span>Skip Intro</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* SINGLE HERO 3D CINEMAGRAPH & GATEWAY CARD */}
          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 0, scale: 0.95 }
                : {
                    rotateX: 45,
                    translateY: 60,
                    scale: 0.88,
                    opacity: 0,
                  }
            }
            animate={
              prefersReducedMotion
                ? { opacity: 1, scale: 1 }
                : {
                    rotateX: mousePos.y * -6,
                    rotateY: mousePos.x * 6,
                    translateY: 0,
                    scale: isZooming ? 1.4 : 1,
                    opacity: isZooming ? 0 : 1,
                  }
            }
            exit={{
              scale: 1.5,
              opacity: 0,
              filter: 'blur(16px)',
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            }}
            transition={{
              duration: isTouch ? 0.8 : 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full max-w-xl text-center pointer-events-auto z-10"
            style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
          >
            <div className="glass-panel p-8 sm:p-12 rounded-3xl shadow-glass border-white/90 bg-white/75 relative overflow-hidden">
              
              {/* Top Subtitle Badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="inline-flex items-center gap-2 glass-pill px-4 py-1.5 rounded-full text-xs font-bold text-indigo-700 mb-6 border border-indigo-100 shadow-2xs"
              >
                <Compass className="w-3.5 h-3.5 text-indigo-500 animate-spin-slow" />
                <span>WELCOME TO MY PORTFOLIO</span>
              </motion.div>

              {/* SINGLE HERO 3D CINEMAGRAPH: Rotating Monogram Orb Centerpiece */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-6 flex items-center justify-center pointer-events-none"
              >
                {/* Continuous Smooth Slow Rotation Outer Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-300/70 animate-spin-slow" />
                <div className="absolute inset-3 rounded-full border border-purple-300/60 animate-pulse-subtle" />

                {/* Core Monogram Orb */}
                <div className="w-24 sm:w-28 h-24 sm:h-28 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 p-1 shadow-[0_15px_35px_rgba(99,102,241,0.35)] flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-2 text-center">
                    <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-display">
                      JG
                    </span>
                    <span className="text-[10px] font-bold text-slate-500 tracking-wider">
                      AI / ML
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Bold Name Typography */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight"
              >
                {personalInfo.name}
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-2 text-xs sm:text-sm font-semibold text-indigo-600 uppercase tracking-wider"
              >
                AI/ML Engineer & Backend Developer
              </motion.p>

              {/* ONE SINGLE CLEAN CTA BUTTON */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-8"
              >
                <button
                  onClick={handleEnterClick}
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 hover:from-indigo-700 hover:to-sky-600 shadow-[0_10px_30px_rgba(99,102,241,0.35)] transition-all duration-300 hover:-translate-y-0.5 min-h-[48px] w-full sm:w-auto"
                >
                  <Sparkles className="w-4 h-4 text-indigo-200 group-hover:rotate-12 transition-transform" />
                  <span>View Portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

            </div>
          </motion.div>

        </div>
      ) : (
        /* Single Big Full-Screen Cinematic Zoom & Light Wipe Layer */
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: [0, 1, 0], scale: [0.9, 1.25, 1] }}
          transition={{ duration: 1.0, times: [0, 0.4, 1] }}
          className="fixed inset-0 z-50 bg-white pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
};
