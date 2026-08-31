import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useDeviceCapabilities } from '../../hooks/useDeviceCapabilities';
import { useIntersectionAnimation } from '../../hooks/useIntersectionAnimation';

export const GlassCard = ({
  children,
  className = '',
  enableTilt = true,
  floatAnimation = true,
  floatClass = 'animate-float-1',
  delay = 0,
  onClick,
  ...props
}) => {
  const { isTouch, tier, prefersReducedMotion } = useDeviceCapabilities();
  const { ref, isVisible } = useIntersectionAnimation({ threshold: 0.05 });
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');

  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  const handleMouseMove = (e) => {
    if (!enableTilt || isTouch || isMobile || tier === 'low' || prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`);
  };

  const handleMouseLeave = () => {
    if (!enableTilt || isTouch || isMobile || tier === 'low' || prefersReducedMotion) return;
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  // Entrance Roll-In Animation variants optimized per screen size
  const rollInVariants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 12 : 45,
      rotateX: isMobile ? 0 : 12,
      scale: isMobile ? 1 : 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: isMobile ? 0.3 : 0.6,
        delay: isMobile ? 0 : delay * 0.001,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={prefersReducedMotion ? {} : rollInVariants}
      whileTap={isTouch ? { scale: 0.985 } : {}}
      className={`glass-panel rounded-2xl md:rounded-3xl transition-transform duration-200 ${
        floatAnimation && !isMobile && !prefersReducedMotion ? floatClass : ''
      } ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: isMobile || isTouch ? 'none' : transform,
        transformStyle: 'preserve-3d',
        willChange: 'transform, opacity',
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
