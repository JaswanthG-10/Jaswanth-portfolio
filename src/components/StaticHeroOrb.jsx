import React from 'react';

export const StaticHeroOrb = () => {
  return (
    <div className="w-full h-[220px] xs:h-[260px] sm:h-[340px] md:h-[420px] relative z-10 flex items-center justify-center pointer-events-none my-4">
      {/* Outer Glowing Ring */}
      <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-indigo-300/60 bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-sky-400/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)]">
        {/* Core Glowing Orb */}
        <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-sky-400 p-1 shadow-lg flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-white/90 backdrop-blur-md flex flex-col items-center justify-center p-2 text-center">
            <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              JG
            </span>
            <span className="text-[10px] font-bold text-slate-500 tracking-wider mt-0.5">
              AI / ML
            </span>
          </div>
        </div>

        {/* Orbiting Satellite Badges */}
        <div className="absolute -top-2 right-2 glass-pill px-2.5 py-1 rounded-full text-[10px] font-bold text-indigo-700 border-indigo-200 shadow-2xs">
          RAG Core
        </div>
        <div className="absolute -bottom-2 left-2 glass-pill px-2.5 py-1 rounded-full text-[10px] font-bold text-purple-700 border-purple-200 shadow-2xs">
          FastAPI
        </div>
      </div>
    </div>
  );
};
