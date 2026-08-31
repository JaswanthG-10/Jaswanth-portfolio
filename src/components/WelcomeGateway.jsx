import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useDeviceCapabilities } from '../hooks/useDeviceCapabilities';

export const WelcomeGateway = ({ onEnter }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const { isTouch, tier, prefersReducedMotion } = useDeviceCapabilities();

  // Mouse Parallax & Magnetic Hover calculation
  const handleMouseMove = (e) => {
    if (isTouch || prefersReducedMotion) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / (innerWidth / 2);
    const y = (clientY - innerHeight / 2) / (innerHeight / 2);
    setMousePos({ x, y });
  };

  const handleEnterClick = () => {
    if (isTransitioning || isRolling) return;
    setIsRolling(true);

    // Particle acceleration burst
    try {
      confetti({
        particleCount: isTouch ? 35 : 75,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#8b5cf6', '#6366f1', '#0ea5e9', '#10b981'],
      });
    } catch (e) {
      // fallback
    }

    // Rolling physics & portal transition sequence
    setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        onEnter();
      }, 1200);
    }, 500);
  };

  return (
    <AnimatePresence>
      {!isTransitioning ? (
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#05060A] text-white overflow-hidden p-4 sm:p-6 w-full h-full select-none"
        >
          {/* Deep Space Background Gradient & Ambient Noise */}
          <div className="absolute inset-0 bg-radial from-indigo-950/40 via-purple-950/20 to-[#05060A] pointer-events-none" />
          
          {/* Parallax Volumetric Glow Layer */}
          <motion.div
            style={{
              x: mousePos.x * 25,
              y: mousePos.y * 25,
            }}
            transition={{ type: 'spring', damping: 30, stiffness: 100 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/20 rounded-full blur-[100px] pointer-events-none"
          />

          {/* Quick Skip Option for Recruiters */}
          <button
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(onEnter, 500);
            }}
            className="absolute top-6 right-6 z-50 glass-pill px-4 py-2 rounded-full text-xs font-bold text-slate-300 hover:text-white bg-white/10 border border-white/20 shadow-lg flex items-center gap-1.5 transition-all backdrop-blur-md min-h-[40px]"
          >
            <span>Skip Intro</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* 3D ROLL-ON WELCOME GATEWAY CARD */}
          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 0, scale: 0.95 }
                : {
                    rotateX: 65,
                    rotateY: -15,
                    translateY: 80,
                    translateZ: -120,
                    scale: 0.85,
                    opacity: 0,
                  }
            }
            animate={
              prefersReducedMotion
                ? { opacity: 1, scale: 1 }
                : {
                    rotateX: mousePos.y * -8,
                    rotateY: mousePos.x * 8,
                    translateY: 0,
                    translateZ: 0,
                    scale: 1,
                    opacity: 1,
                  }
            }
            exit={{
              scale: 1.4,
              opacity: 0,
              rotateX: -40,
              translateZ: 300,
              filter: 'blur(20px)',
              transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            }}
            transition={{
              duration: isTouch ? 0.9 : 1.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full max-w-xl text-center pointer-events-auto z-10"
            style={{ perspective: 1200, transformStyle: 'preserve-3d' }}
          >
            <div
              className={`p-8 sm:p-12 rounded-3xl backdrop-blur-2xl border border-white/15 bg-slate-950/70 shadow-[0_30px_90px_rgba(99,102,241,0.25)] relative overflow-hidden transition-all duration-300 ${
                isRolling ? 'ring-2 ring-cyan-400 scale-95' : ''
              }`}
            >
              {/* Top Subtle Status Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 mb-6 shadow-sm"
              >
                <Compass className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                <span>WELCOME TO MY PORTFOLIO</span>
              </motion.div>

              {/* Bold Kinetic Name Typography with 3D Depth */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight font-display drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
              >
                <span className="bg-gradient-to-r from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent">
                  JASWANTH G
                </span>
              </motion.h1>

              {/* Supporting Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-3 text-xs sm:text-sm font-bold text-slate-400 tracking-widest uppercase"
              >
                AI/ML Engineer & Backend Developer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="mt-4 text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed"
              >
                AI/ML engineering, RAG document pipelines, production FastAPI REST backends, and modern React systems.
              </motion.p>

              {/* 3D Rolling Physics CTA Button / Orb */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.65, duration: 0.5 }}
                className="mt-8 pt-4"
              >
                <motion.button
                  onClick={handleEnterClick}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  animate={
                    isRolling
                      ? {
                          rotate: [0, 360, 720],
                          x: [0, 150, 300],
                          opacity: [1, 0.8, 0],
                          transition: { duration: 0.6, ease: 'easeIn' },
                        }
                      : {}
                  }
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-sm font-extrabold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 shadow-[0_15px_40px_rgba(99,102,241,0.4)] hover:shadow-[0_20px_50px_rgba(14,165,233,0.6)] border border-white/20 transition-all duration-300 min-h-[52px] w-full sm:w-auto cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-cyan-200 group-hover:rotate-12 transition-transform" />
                  <span>ENTER PORTFOLIO</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </motion.button>
              </motion.div>

              <div className="mt-6 text-[10px] text-slate-500 font-semibold tracking-widest uppercase">
                Antigravity 3D Reveal • Click to Enter
              </div>

            </div>
          </motion.div>

        </div>
      ) : (
        /* Cinematic Portal Light Wipe Transition Layer */
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: [0, 1, 0], scale: [0.9, 1.2, 1] }}
          transition={{ duration: 1.1, times: [0, 0.4, 1] }}
          className="fixed inset-0 z-50 bg-gradient-to-tr from-indigo-950 via-white to-sky-100 pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
};
