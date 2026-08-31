import { useState, useEffect } from 'react';

export function useDeviceCapabilities() {
  const [capabilities, setCapabilities] = useState({
    tier: 'high', // 'low', 'medium', 'high'
    isTouch: false,
    prefersReducedMotion: false,
    hardwareConcurrency: 4,
    maxDpr: 2,
    blurLevel: '24px',
    particleLimit: 50,
  });

  useEffect(() => {
    const isTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const prefersReducedMotion = motionQuery.matches;

    const cores = navigator.hardwareConcurrency || 4;
    const width = window.innerWidth;

    let tier = 'high';
    let blurLevel = '24px';
    let particleLimit = 65;
    let maxDpr = 2;

    if (cores <= 2 || width < 480) {
      tier = 'low';
      blurLevel = '8px';
      particleLimit = 18;
      maxDpr = 1.25;
    } else if (cores <= 4 || width < 1024) {
      tier = 'medium';
      blurLevel = '14px';
      particleLimit = 35;
      maxDpr = 1.5;
    }

    if (prefersReducedMotion) {
      particleLimit = Math.min(particleLimit, 12);
    }

    setCapabilities({
      tier,
      isTouch,
      prefersReducedMotion,
      hardwareConcurrency: cores,
      maxDpr,
      blurLevel,
      particleLimit,
    });

    const handleMotionChange = (e) => {
      setCapabilities((prev) => ({ ...prev, prefersReducedMotion: e.matches }));
    };

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', handleMotionChange);
    }

    return () => {
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener('change', handleMotionChange);
      }
    };
  }, []);

  return capabilities;
}
