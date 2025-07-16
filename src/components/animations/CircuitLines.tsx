import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface CircuitLinesProps {
  className?: string;
  animated?: boolean;
  density?: number;
  glowColor?: string;
}

const CircuitLines: React.FC<CircuitLinesProps> = ({
  className = "",
  animated = true,
  density = 20,
  glowColor = "#3b82f6"
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const generatePath = (width: number, height: number) => {
    const paths = [];
    const gridSize = Math.max(width, height) / density;
    
    for (let i = 0; i < density; i++) {
      const startX = Math.random() * width;
      const startY = Math.random() * height;
      
      let path = `M ${startX} ${startY}`;
      let currentX = startX;
      let currentY = startY;
      
      const segments = 3 + Math.floor(Math.random() * 4);
      
      for (let j = 0; j < segments; j++) {
        const direction = Math.floor(Math.random() * 4);
        const length = gridSize * (0.5 + Math.random() * 1.5);
        
        switch (direction) {
          case 0: // right
            currentX += length;
            break;
          case 1: // down
            currentY += length;
            break;
          case 2: // left
            currentX -= length;
            break;
          case 3: // up
            currentY -= length;
            break;
        }
        
        currentX = Math.max(0, Math.min(width, currentX));
        currentY = Math.max(0, Math.min(height, currentY));
        
        path += ` L ${currentX} ${currentY}`;
      }
      
      paths.push(path);
    }
    
    return paths;
  };

  const [paths, setPaths] = React.useState<string[]>([]);

  useEffect(() => {
    if (svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      setPaths(generatePath(rect.width || 800, rect.height || 600));
    }
  }, [density]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 800 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {paths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke={glowColor}
            strokeWidth="1"
            opacity="0.3"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: animated ? 1 : 1, 
              opacity: animated ? [0, 0.6, 0.3] : 0.3 
            }}
            transition={{
              pathLength: { duration: 2 + Math.random() * 3, delay: index * 0.1 },
              opacity: { 
                duration: 1, 
                delay: index * 0.1,
                repeat: animated ? Infinity : 0,
                repeatType: "reverse",
                repeatDelay: 3 + Math.random() * 2
              }
            }}
          />
        ))}
        
        {/* Connection nodes */}
        {paths.slice(0, 10).map((_, index) => (
          <motion.circle
            key={`node-${index}`}
            cx={Math.random() * 800}
            cy={Math.random() * 600}
            r="2"
            fill={glowColor}
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: [0, 1.5, 1], 
              opacity: animated ? [0, 1, 0.6] : 0.6 
            }}
            transition={{
              duration: 1,
              delay: index * 0.2,
              repeat: animated ? Infinity : 0,
              repeatType: "reverse",
              repeatDelay: 4 + Math.random() * 2
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default CircuitLines;