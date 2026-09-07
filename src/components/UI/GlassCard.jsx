import React, { useRef } from 'react';
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
  const cardRef = useRef(null);
  const { isTouch, tier, prefersReducedMotion } = useDeviceCapabilities();
  const { ref: intersectionRef, isVisible } = useIntersectionAnimation({ threshold: 0.05 });

  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  const setRefs = (node) => {
    cardRef.current = node;
    intersectionRef(node);
  };

  const handleMouseMove = (e) => {
    if (!enableTilt || isTouch || isMobile || tier === 'low' || prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`;
  };

  const handleMouseLeave = () => {
    if (!enableTilt || isTouch || isMobile || tier === 'low' || prefersReducedMotion || !cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  // Entrance Roll-In Animation variants optimized per screen size
  const rollInVariants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 10 : 35,
      rotateX: isMobile ? 0 : 8,
      scale: isMobile ? 1 : 0.97,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: isMobile ? 0.25 : 0.5,
        delay: isMobile ? 0 : delay * 0.001,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      ref={setRefs}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={prefersReducedMotion ? {} : rollInVariants}
      whileTap={isTouch ? { scale: 0.985 } : {}}
      className={`glass-panel rounded-2xl md:rounded-3xl transition-transform duration-200 w-full max-w-full overflow-hidden ${
        floatAnimation && !isMobile && !prefersReducedMotion ? floatClass : ''
      } ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transformStyle: 'preserve-3d',
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
