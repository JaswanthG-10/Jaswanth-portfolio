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
  const { ref, isVisible } = useIntersectionAnimation({ threshold: 0.1 });
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');

  const handleMouseMove = (e) => {
    if (!enableTilt || isTouch || tier === 'low' || prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Max tilt 5 degrees on desktop
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`);
  };

  const handleMouseLeave = () => {
    if (!enableTilt || isTouch || tier === 'low' || prefersReducedMotion) return;
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  // Entrance Roll-In Animation variants based on device capabilities
  const rollInVariants = {
    hidden: {
      opacity: 0,
      y: isTouch ? 24 : 45,
      rotateX: isTouch ? 3 : 12,
      scale: 0.96,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: isTouch ? 0.45 : 0.65,
        delay: delay * 0.001,
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
      className={`glass-panel rounded-2xl md:rounded-3xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        floatAnimation && !prefersReducedMotion ? floatClass : ''
      } ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: isTouch ? 'none' : transform,
        transformStyle: 'preserve-3d',
        willChange: 'transform, opacity',
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
