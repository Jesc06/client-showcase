import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Camera } from 'lucide-react';

export const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-[#fafafa] dark:bg-[#000000]"
        >
          {/* Main Content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Minimal Camera Icon */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ 
                duration: 0.8,
                ease: [0.28, 0.11, 0.32, 1]
              }}
              className="relative"
            >
              {/* Enhanced Glow with Pulse */}
              <motion.div
                className="absolute inset-0 rounded-full blur-3xl"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{
                  background: 'radial-gradient(circle, rgba(0,113,227,0.4), transparent 70%)',
                }}
              />

              {/* Camera Icon with Multiple Animations */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <Camera 
                    size={72} 
                    className="text-[#0071e3] dark:text-[#2997ff]" 
                    strokeWidth={1.5}
                  />
                </motion.div>
              </motion.div>

              {/* Orbiting Dots */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    marginLeft: '-3px',
                    marginTop: '-3px',
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.4,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-[#0071e3] dark:bg-[#2997ff]"
                    style={{
                      position: 'absolute',
                      left: `${35 * Math.cos((i * 120 * Math.PI) / 180)}px`,
                      top: `${35 * Math.sin((i * 120 * Math.PI) / 180)}px`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
