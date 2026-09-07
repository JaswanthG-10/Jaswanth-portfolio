import React, { useEffect, useRef } from 'react';

export const CinematicHeroVideo = ({ mouseRef }) => {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let isIntersecting = true;
    let isTabVisible = true;

    // IntersectionObserver to pause rendering loop when Hero section is off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting && isTabVisible && !frameRef.current) {
          render();
        } else if (!isIntersecting && frameRef.current) {
          cancelAnimationFrame(frameRef.current);
          frameRef.current = null;
        }
      },
      { threshold: 0.01 }
    );
    observer.observe(canvas);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Particle embers & cyber line mesh
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 35 : 75;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      z: Math.random() * 1000 + 1,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 1.5 + 0.5,
      hue: Math.random() > 0.4 ? 350 : 190, // Red or Cyan
    }));

    const onVis = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && isIntersecting && !frameRef.current) {
        render();
      } else if (!isTabVisible && frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
    };
    document.addEventListener('visibilitychange', onVis, { passive: true });

    const render = () => {
      if (!isTabVisible || !isIntersecting) {
        frameRef.current = null;
        return;
      }

      timeRef.current += 0.015;
      const W = canvas.width;
      const H = canvas.height;

      // Dark obsidian background
      ctx.fillStyle = '#0A0A0C';
      ctx.fillRect(0, 0, W, H);

      // Red & Cyan Rim Light Orbs read directly from mouseRef (0 React re-renders)
      const mp = mouseRef?.current || { x: 0, y: 0 };
      const mx = mp.x * 50;
      const my = mp.y * 50;

      const gradRed = ctx.createRadialGradient(
        W * 0.25 + mx,
        H * 0.3 + my,
        10,
        W * 0.25 + mx,
        H * 0.3 + my,
        W * 0.45
      );
      gradRed.addColorStop(0, 'rgba(225, 29, 72, 0.22)');
      gradRed.addColorStop(0.6, 'rgba(225, 29, 72, 0.04)');
      gradRed.addColorStop(1, 'transparent');
      ctx.fillStyle = gradRed;
      ctx.fillRect(0, 0, W, H);

      const gradCyan = ctx.createRadialGradient(
        W * 0.75 - mx,
        H * 0.7 - my,
        10,
        W * 0.75 - mx,
        H * 0.7 - my,
        W * 0.45
      );
      gradCyan.addColorStop(0, 'rgba(6, 182, 212, 0.18)');
      gradCyan.addColorStop(0.6, 'rgba(6, 182, 212, 0.03)');
      gradCyan.addColorStop(1, 'transparent');
      ctx.fillStyle = gradCyan;
      ctx.fillRect(0, 0, W, H);

      // Perspective Grid Floor (Scene 3 / Time Machine style)
      ctx.save();
      ctx.strokeStyle = 'rgba(225, 29, 72, 0.10)';
      ctx.lineWidth = 1;

      const horizon = H * 0.35;

      for (let i = -W; i < W * 2; i += 70) {
        ctx.beginPath();
        ctx.moveTo(W / 2 + mx * 0.5, horizon);
        ctx.lineTo(i, H);
        ctx.stroke();
      }

      for (let y = horizon; y < H; y += (y - horizon) * 0.16 + 10) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
      ctx.restore();

      // Floating 3D Embers & Particles
      for (const p of particles) {
        p.z -= p.speed * 2;
        if (p.z <= 0) {
          p.z = 1000;
          p.x = Math.random() * W;
          p.y = Math.random() * H;
        }

        const k = 400 / p.z;
        const px = (p.x - W / 2) * k + W / 2 + mx * (1 - p.z / 1000);
        const py = (p.y - H / 2) * k + H / 2 + my * (1 - p.z / 1000);
        const alpha = Math.min(1, (1000 - p.z) / 400) * 0.65;

        if (px >= 0 && px <= W && py >= 0 && py <= H) {
          ctx.beginPath();
          ctx.arc(px, py, p.size * k * 0.7, 0, Math.PI * 2);
          ctx.fillStyle = p.hue === 350
            ? `rgba(225, 29, 72, ${alpha})`
            : `rgba(6, 182, 212, ${alpha})`;
          ctx.fill();
        }
      }

      frameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVis);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [mouseRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-20 opacity-90"
    />
  );
};
