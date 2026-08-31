import React, { useEffect, useRef } from 'react';

export const BackgroundParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Responsive particle count calculation
    const width = window.innerWidth;
    let particleCount = 35;
    if (width < 480) {
      particleCount = 12;
    } else if (width < 768) {
      particleCount = 20;
    } else if (width < 1024) {
      particleCount = 28;
    }

    const colors = [
      'rgba(99, 102, 241, 0.22)',   // periwinkle
      'rgba(139, 92, 246, 0.22)',  // soft violet
      'rgba(14, 165, 233, 0.22)',  // sky aqua
      'rgba(16, 185, 129, 0.18)',  // soft mint
    ];

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.5 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      vy: -(Math.random() * 0.3 + 0.08), // Gentle float upward
      vx: (Math.random() - 0.5) * 0.15,
      alpha: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * 0.015,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.vy;
        p.x += p.vx;
        p.alpha += Math.sin(Date.now() * 0.001) * p.pulse;

        // Wrap boundaries
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
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 max-w-full overflow-hidden"
      style={{ opacity: 0.8 }}
    />
  );
};
