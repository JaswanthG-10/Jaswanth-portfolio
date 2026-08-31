import { useState, useEffect } from 'react';

export function useViewportSize() {
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
    aspectRatio: typeof window !== 'undefined' ? window.innerWidth / window.innerHeight : 1.5,
    isPortrait: typeof window !== 'undefined' ? window.innerHeight > window.innerWidth : false,
    breakpoint: 'desktop', // 'xs', 'mobile', 'tablet', 'laptop', 'desktop', 'ultrawide'
  });

  useEffect(() => {
    let timeoutId = null;

    const getBreakpoint = (w) => {
      if (w < 480) return 'xs';
      if (w < 768) return 'mobile';
      if (w < 1024) return 'tablet';
      if (w < 1440) return 'laptop';
      if (w < 1920) return 'desktop';
      return 'ultrawide';
    };

    const handleResize = () => {
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        setViewport({
          width: w,
          height: h,
          aspectRatio: w / h,
          isPortrait: h > w,
          breakpoint: getBreakpoint(w),
        });
      }, 100);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });
    handleResize();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return viewport;
}
