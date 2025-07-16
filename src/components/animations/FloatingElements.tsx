import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  intensity?: number;
  className?: string;
  style?: React.CSSProperties;
}

const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  delay = 0,
  duration = 6,
  intensity = 20,
  className = "",
  style
}) => {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{
        y: [-intensity, intensity, -intensity],
        x: [-intensity/2, intensity/2, -intensity/2],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    >
      {children}
    </motion.div>
  );
};

interface FloatingGeometryProps {
  shapes?: number;
  className?: string;
}

const FloatingGeometry: React.FC<FloatingGeometryProps> = ({ 
  shapes = 5, 
  className = "" 
}) => {
  const geometryShapes = Array.from({ length: shapes }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 8 + Math.random() * 4,
    shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)],
    color: ['primary', 'secondary', 'accent'][Math.floor(Math.random() * 3)]
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {geometryShapes.map((shape) => (
        <FloatingElement
          key={shape.id}
          delay={shape.delay}
          duration={shape.duration}
          intensity={30}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
          }}
        >
          <div
            className={`w-full h-full bg-gradient-to-br from-${shape.color}/10 to-${shape.color}/20 blur-xl ${
              shape.shape === 'circle' ? 'rounded-full' : 
              shape.shape === 'square' ? 'rounded-lg' : 
              'rounded-full'
            }`}
          />
        </FloatingElement>
      ))}
    </div>
  );
};

export { FloatingElement, FloatingGeometry };