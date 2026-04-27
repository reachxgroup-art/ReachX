import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Hold the loading screen to play the video intro
    const delayTimeout = setTimeout(() => {
      setIsLoaded(true);
      if (onComplete) onComplete();
    }, 3500); // 3.5 seconds delay

    return () => clearTimeout(delayTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black text-white"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 1.0, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src="videos/reachx.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 z-[1] bg-black/50" />

          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Visual elements have been fully cleared for a clean video intro */}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
