import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  // Optional: distinct styles based on tag (e.g. video, view)
  const [hoverType, setHoverType] = useState(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    // Identify interactive elements
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, input, [data-cursor]');
      if (target) {
        setIsHovering(true);
        setHoverType(target.getAttribute('data-cursor') || null);
      } else {
        setIsHovering(false);
        setHoverType(null);
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Variants for Framer Motion cursor
  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      width: 12,
      height: 12,
      backgroundColor: '#111111', // brand-dark
      mixBlendMode: 'normal'
    },
    hover: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
      width: 60,
      height: 60,
      backgroundColor: 'rgba(17, 17, 17, 0.1)',
      border: '1px solid #111111',
      mixBlendMode: 'normal'
    },
    play: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      width: 80,
      height: 80,
      backgroundColor: '#111111', // Dark corporate
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mixBlendMode: 'normal'
    },
    talk: {
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      width: 100,
      height: 100,
      backgroundColor: '#0EA5E9', // Sky Blue
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      mixBlendMode: 'normal'
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        variants={variants}
        animate={hoverType && variants[hoverType] ? hoverType : isHovering ? 'hover' : 'default'}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      >
        {hoverType === 'play' && (
          <span className="text-white text-xs font-heading font-bold uppercase tracking-widest">
            Play
          </span>
        )}
        {hoverType === 'talk' && (
          <span className="text-white text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-center leading-[1.2]">
            Let's<br/>Talk
          </span>
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;
