import React, { useEffect, useRef } from 'react';

export const BackgroundParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle pool setup with pastel tones
    const particleCount = Math.min(Math.floor(window.innerWidth / 25), 45);
    const colors = [
      'rgba(99, 102, 241, 0.25)',   // periwinkle
      'rgba(139, 92, 246, 0.25)',  // soft violet
      'rgba(14, 165, 233, 0.25)',  // sky aqua
      'rgba(16, 185, 129, 0.2)',   // soft mint
    ];

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1.5,
      color: colors[Math.floor(Math.random() * colors.length)],
      vy: -(Math.random() * 0.4 + 0.1), // Slow float upward
      vx: (Math.random() - 0.5) * 0.2,   // Horizontal sway
      alpha: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * 0.02,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.vy;
        p.x += p.vx;
        p.alpha += Math.sin(Date.now() * 0.001) * p.pulse;

        // Wrap around top boundary
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

        // Soft ambient aura
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace('0.25', '0.08').replace('0.2', '0.06');
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
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.85 }}
    />
  );
};
