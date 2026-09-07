import React, { useEffect, useRef } from 'react';

export const CinematicHeroVideo = ({ mouseRef }) => {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const lastFrameTimeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });

    let isIntersecting = true;
    let isTabVisible = true;

    // IntersectionObserver to pause rendering loop when Hero section is off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting && isTabVisible && !frameRef.current) {
          lastFrameTimeRef.current = performance.now();
          render(performance.now());
        } else if (!isIntersecting && frameRef.current) {
          cancelAnimationFrame(frameRef.current);
          frameRef.current = null;
        }
      },
      { threshold: 0.01 }
    );
    observer.observe(canvas);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Floating 3D Embers & Cyber Grid
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 18 : 38;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      z: Math.random() * 1000 + 1,
      size: Math.random() * 1.8 + 1,
      speed: Math.random() * 1.2 + 0.4,
      hue: Math.random() > 0.4 ? 350 : 190, // Red or Cyan
    }));

    const onVis = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && isIntersecting && !frameRef.current) {
        lastFrameTimeRef.current = performance.now();
        render(performance.now());
      } else if (!isTabVisible && frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
    document.addEventListener('visibilitychange', onVis, { passive: true });

    const render = (now) => {
      if (!isTabVisible || !isIntersecting) {
        frameRef.current = null;
        return;
      }

      // Throttle render loop to ~60fps target (min 14ms frame interval)
      const delta = now - lastFrameTimeRef.current;
      if (delta < 14) {
        frameRef.current = requestAnimationFrame(render);
        return;
      }
      lastFrameTimeRef.current = now;

      const W = canvas.width;
      const H = canvas.height;

      // Clear Canvas
      ctx.clearRect(0, 0, W, H);

      const mp = mouseRef?.current || { x: 0, y: 0 };
      const mx = mp.x * 35;
      const my = mp.y * 35;

      // Perspective Grid Floor Lines
      ctx.strokeStyle = 'rgba(225, 29, 72, 0.12)';
      ctx.lineWidth = 1;

      const horizon = H * 0.38;

      for (let i = -W; i < W * 2; i += 90) {
        ctx.beginPath();
        ctx.moveTo(W / 2 + mx * 0.4, horizon);
        ctx.lineTo(i, H);
        ctx.stroke();
      }

      for (let y = horizon; y < H; y += (y - horizon) * 0.18 + 12) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      // Floating 3D Embers & Particles
      for (const p of particles) {
        p.z -= p.speed * 2.2;
        if (p.z <= 0) {
          p.z = 1000;
          p.x = Math.random() * W;
          p.y = Math.random() * H;
        }

        const k = 400 / p.z;
        const px = (p.x - W / 2) * k + W / 2 + mx * (1 - p.z / 1000);
        const py = (p.y - H / 2) * k + H / 2 + my * (1 - p.z / 1000);
        const alpha = Math.min(1, (1000 - p.z) / 400) * 0.6;

        if (px >= 0 && px <= W && py >= 0 && py <= H) {
          ctx.beginPath();
          ctx.arc(px, py, p.size * k * 0.65, 0, Math.PI * 2);
          ctx.fillStyle = p.hue === 350
            ? `rgba(225, 29, 72, ${alpha})`
            : `rgba(6, 182, 212, ${alpha})`;
          ctx.fill();
        }
      }

      frameRef.current = requestAnimationFrame(render);
    };

    render(performance.now());

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVis);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [mouseRef]);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none -z-20 overflow-hidden bg-[#0A0A0C]">
      {/* High-Performance Hardware-Accelerated Radial Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E11D48]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-[#06B6D4]/12 rounded-full blur-[120px] pointer-events-none" />

      <canvas
        ref={canvasRef}
        className="w-full h-full pointer-events-none opacity-90"
      />
    </div>
  );
};
