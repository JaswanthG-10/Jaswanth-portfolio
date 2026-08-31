import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({
  children,
  className = '',
  enableTilt = true,
  floatAnimation = true,
  floatClass = 'animate-float-1',
  onClick,
  ...props
}) => {
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');

  const handleMouseMove = (e) => {
    if (!enableTilt) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Max tilt 6 degrees
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    if (!enableTilt) return;
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <motion.div
      className={`glass-panel rounded-2xl md:rounded-3xl transition-transform duration-300 ease-out ${floatAnimation ? floatClass : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: transform,
        transformStyle: 'preserve-3d',
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
