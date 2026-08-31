import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Lock, Key, ShieldCheck, Play } from 'lucide-react';
import confetti from 'canvas-confetti';

export const LoginIntro = ({ onComplete }) => {
  const [email, setEmail] = useState('guest.recruiter@jaswanth.ai');
  const [password, setPassword] = useState('••••••••••••');
  const [isRolling, setIsRolling] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [rippleActive, setRippleActive] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (isTransitioning) return;

    // Trigger Ripple Glow Pulse
    setRippleActive(true);

    // Confetti effect
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#6366f1', '#8b5cf6', '#0ea5e9', '#10b981'],
    });

    // Scene 2 Transition sequence after ripple pulse
    setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        onComplete();
      }, 1200);
    }, 400);
  };

  return (
    <AnimatePresence>
      {!isTransitioning ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#F8FAFC]/90 backdrop-blur-xl overflow-hidden p-4">
          
          {/* Subtle Parallax Background Glows */}
          <div className="absolute inset-0 bg-radial from-indigo-200/40 via-purple-100/30 to-transparent pointer-events-none animate-pulse-subtle" />

          {/* Quick Skip Intro Button */}
          <button
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(onComplete, 600);
            }}
            className="absolute top-6 right-6 z-50 glass-pill px-4 py-2 rounded-full text-xs font-bold text-slate-600 hover:text-indigo-600 bg-white/80 border border-white shadow-xs flex items-center gap-1.5 transition-all"
          >
            <span>Skip Intro & Enter</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Scene 1 — Rolling 3D Login Card */}
          <motion.div
            initial={{ x: '-120vw', rotateZ: -45, rotateY: -30, opacity: 0 }}
            animate={{ x: 0, rotateZ: 0, rotateY: 0, opacity: 1 }}
            exit={{
              scale: 1.4,
              opacity: 0,
              rotateY: 90,
              filter: 'blur(12px)',
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
            }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 18,
              mass: 1.2,
              duration: 1.4
            }}
            onAnimationComplete={() => setIsRolling(false)}
            className="relative w-full max-w-md pointer-events-auto"
            style={{ perspective: 1200 }}
          >
            <div
              className={`glass-panel p-8 sm:p-10 rounded-3xl shadow-[0_30px_70px_rgba(99,102,241,0.25)] border-white bg-white/90 relative overflow-hidden transition-all duration-500 ${
                rippleActive ? 'ring-4 ring-indigo-400/60 scale-[1.02]' : ''
              }`}
            >
              
              {/* Ripple Glow Pulse Overlay */}
              {rippleActive && (
                <motion.div
                  initial={{ scale: 0, opacity: 0.8 }}
                  animate={{ scale: 3, opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-sky-400/30 rounded-full pointer-events-none"
                />
              )}

              {/* Card Header & Rim Light */}
              <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 p-0.5 shadow-md">
                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center text-indigo-600 font-extrabold text-xs">
                      JG
                    </div>
                  </div>
                  <div>
                    <h2 className="text-lg font-extrabold text-slate-900 leading-tight">
                      Jaswanth G Portfolio Access
                    </h2>
                    <p className="text-[11px] font-semibold text-indigo-600">
                      AI / ML & Systems Engineer
                    </p>
                  </div>
                </div>

                <span className="glass-pill px-2.5 py-1 rounded-full text-[10px] font-bold text-emerald-700 bg-emerald-50 border-emerald-200 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Secure
                </span>
              </div>

              {/* Form Fields with Z-Depth Stagger */}
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                
                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, z: -20, y: 15 }}
                  animate={{ opacity: 1, z: 0, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Lock className="w-3 h-3 text-indigo-500" /> Recruiter / Visitor Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-2xs transition-all"
                  />
                </motion.div>

                {/* Passcode Field */}
                <motion.div
                  initial={{ opacity: 0, z: -20, y: 15 }}
                  animate={{ opacity: 1, z: 0, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center gap-1.5">
                    <Key className="w-3 h-3 text-purple-500" /> Access Key
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-slate-200 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 shadow-2xs transition-all"
                  />
                </motion.div>

                {/* Glowing Login CTA Button */}
                <motion.div
                  initial={{ opacity: 0, z: -20, y: 15 }}
                  animate={{ opacity: 1, z: 0, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="pt-2"
                >
                  <button
                    type="submit"
                    className="w-full glass-pill py-3.5 rounded-2xl text-xs font-extrabold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 hover:from-indigo-700 hover:to-sky-600 shadow-[0_10px_25px_rgba(99,102,241,0.35)] transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:scale-95"
                  >
                    <span>Authenticate & Reveal Portfolio</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                </motion.div>

              </form>

              <div className="mt-5 text-center text-[10px] text-slate-400 font-semibold">
                Click button to trigger 3D transition into Jaswanth G's full portfolio
              </div>

            </div>
          </motion.div>

        </div>
      ) : (
        /* Scene 2 & 3 Flash Transition Layer */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.0, times: [0, 0.4, 1] }}
          className="fixed inset-0 z-50 bg-white pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
};
