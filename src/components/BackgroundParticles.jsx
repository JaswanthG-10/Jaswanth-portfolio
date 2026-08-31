import React, { useEffect, useRef } from 'react';
import { useDeviceCapabilities } from '../hooks/useDeviceCapabilities';

export const BackgroundParticles = () => {
  const canvasRef = useRef(null);
  const { tier, particleLimit, prefersReducedMotion } = useDeviceCapabilities();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let isVisible = true;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas, { passive: true });

    // Calculate particles based on capability & screen area
    const width = window.innerWidth;
    let particleCount = Math.min(particleLimit, Math.floor(width / 25));
    if (prefersReducedMotion) particleCount = 8;

    const colors = [
      'rgba(99, 102, 241, 0.22)',   // periwinkle
      'rgba(139, 92, 246, 0.22)',  // soft violet
      'rgba(14, 165, 233, 0.22)',  // sky aqua
      'rgba(16, 185, 129, 0.18)',  // soft mint
    ];

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      vy: -(Math.random() * 0.25 + 0.08),
      vx: (Math.random() - 0.5) * 0.12,
      alpha: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * 0.015,
    }));

    // Visibility Listener to pause CPU rendering when tab is hidden
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible) {
        render();
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    const render = () => {
      if (!isVisible) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.vy;
        p.x += p.vx;
        p.alpha += Math.sin(Date.now() * 0.001) * p.pulse;

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }

        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [tier, particleLimit, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 max-w-full overflow-hidden"
      style={{ opacity: 0.8 }}
    />
  );
};
