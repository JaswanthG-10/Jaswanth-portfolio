import React, { useEffect, useRef } from 'react';

export const CinematicHeroVideo = ({ mousePos }) => {
  const canvasRef = useRef(null);
  const frameRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Particle embers & cyber line mesh
    const particleCount = 80;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      z: Math.random() * 1000 + 1,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 1.5 + 0.5,
      hue: Math.random() > 0.4 ? 350 : 190, // Red or Cyan
    }));

    let visible = true;
    const onVis = () => {
      visible = !document.hidden;
      if (visible && !frameRef.current) render();
    };
    document.addEventListener('visibilitychange', onVis);

    const render = () => {
      if (!visible) {
        frameRef.current = null;
        return;
      }

      timeRef.current += 0.015;
      const t = timeRef.current;
      const W = canvas.width;
      const H = canvas.height;

      // Dark obsidian background with radial gradient
      ctx.fillStyle = '#0A0A0C';
      ctx.fillRect(0, 0, W, H);

      // Red & Cyan Rim Light Orbs
      const mx = (mousePos.x || 0) * 50;
      const my = (mousePos.y || 0) * 50;

      const gradRed = ctx.createRadialGradient(
        W * 0.25 + mx,
        H * 0.3 + my,
        10,
        W * 0.25 + mx,
        H * 0.3 + my,
        W * 0.45
      );
      gradRed.addColorStop(0, 'rgba(225, 29, 72, 0.25)');
      gradRed.addColorStop(0.6, 'rgba(225, 29, 72, 0.05)');
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
      gradCyan.addColorStop(0, 'rgba(6, 182, 212, 0.20)');
      gradCyan.addColorStop(0.6, 'rgba(6, 182, 212, 0.04)');
      gradCyan.addColorStop(1, 'transparent');
      ctx.fillStyle = gradCyan;
      ctx.fillRect(0, 0, W, H);

      // Perspective Grid Floor (Scene 3 / Time Machine style)
      ctx.save();
      ctx.strokeStyle = 'rgba(225, 29, 72, 0.12)';
      ctx.lineWidth = 1;

      const gridY = H * 0.65;
      const horizon = H * 0.35;

      for (let i = -W; i < W * 2; i += 60) {
        ctx.beginPath();
        ctx.moveTo(W / 2 + mx * 0.5, horizon);
        ctx.lineTo(i, H);
        ctx.stroke();
      }

      for (let y = horizon; y < H; y += (y - horizon) * 0.15 + 8) {
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
        const alpha = Math.min(1, (1000 - p.z) / 400) * 0.7;

        if (px >= 0 && px <= W && py >= 0 && py <= H) {
          ctx.beginPath();
          ctx.arc(px, py, p.size * k * 0.8, 0, Math.PI * 2);
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
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVis);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none -z-20 opacity-90"
    />
  );
};
