import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

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
          className="fixed inset-0 z-9999 flex items-center justify-center bg-white dark:bg-[#0a0a0f] overflow-hidden"
        >
          {/* Subtle Animated Grid */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]">
            <motion.div 
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 99, 74, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 99, 74, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }}
              animate={{
                backgroundPosition: ['0px 0px', '60px 60px'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          </div>

          {/* Floating Gradient Orbs */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute w-96 h-96 rounded-full opacity-20 dark:opacity-30 blur-3xl"
              style={{
                background: 'radial-gradient(circle, #FF634A 0%, transparent 70%)',
                top: '20%',
                left: '10%',
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.div
              className="absolute w-80 h-80 rounded-full opacity-15 dark:opacity-25 blur-3xl"
              style={{
                background: 'radial-gradient(circle, #A855F7 0%, transparent 70%)',
                bottom: '20%',
                right: '10%',
              }}
              animate={{
                x: [0, -80, 0],
                y: [0, 60, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10">
            {/* Logo with Reveal Animation */}
            <div className="relative">
              {/* Glowing Background */}
              <motion.div
                className="absolute -inset-8 rounded-3xl opacity-0"
                animate={{
                  opacity: [0, 0.1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{
                  background: 'radial-gradient(circle, rgba(255,99,74,0.3), transparent 70%)',
                  filter: 'blur(30px)'
                }}
              />

              {/* Main Logo */}
              <motion.div
                className="relative text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {/* Split Text Animation - R */}
                <motion.span
                  className="inline-block text-8xl md:text-9xl font-black tracking-tighter text-gray-900 dark:text-white"
                  initial={{ x: -50, opacity: 0, rotate: -10 }}
                  animate={{ x: 0, opacity: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                >
                  R
                </motion.span>
                
                {/* Split Text Animation - M */}
                <motion.span
                  className="inline-block text-8xl md:text-9xl font-black tracking-tighter bg-linear-to-r from-accent via-purple-500 to-blue-500 bg-clip-text text-transparent"
                  initial={{ x: 50, opacity: 0, rotate: 10 }}
                  animate={{ x: 0, opacity: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  <motion.span
                    className="inline-block"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                  >
                    M
                  </motion.span>
                </motion.span>

                {/* Accent Dot */}
                <motion.span
                  className="inline-block w-3 h-3 md:w-4 md:h-4 rounded-full bg-accent ml-2 mb-8 md:mb-12"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    duration: 0.5,
                    delay: 0.6,
                    ease: [0.34, 1.56, 0.64, 1]
                  }}
                >
                  <motion.span
                    className="block w-full h-full rounded-full bg-accent"
                    animate={{
                      boxShadow: [
                        '0 0 0px rgba(255,99,74,0.5)',
                        '0 0 20px rgba(255,99,74,0.8)',
                        '0 0 0px rgba(255,99,74,0.5)',
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </motion.span>
              </motion.div>

              {/* Decorative Lines */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <motion.div
                  className="h-px bg-linear-to-r from-transparent via-gray-900 dark:via-white to-transparent"
                  initial={{ width: 0 }}
                  animate={{ width: 200 }}
                  transition={{ 
                    duration: 1,
                    delay: 0.7,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                />
              </div>

              {/* Minimal Subtitle */}
              <motion.p
                className="mt-6 text-sm md:text-base font-medium tracking-[0.2em] text-gray-600 dark:text-gray-400 uppercase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                Loading Portfolio
              </motion.p>

              {/* Animated Progress Dots */}
              <motion.div
                className="flex items-center justify-center gap-2 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-accent"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>

          {/* Corner Accents */}
          {[
            { corner: 'top-8 left-8', rotate: 0 },
            { corner: 'top-8 right-8', rotate: 90 },
            { corner: 'bottom-8 right-8', rotate: 180 },
            { corner: 'bottom-8 left-8', rotate: 270 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              className={`absolute ${pos.corner} w-12 h-12`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
            >
              <svg
                viewBox="0 0 40 40"
                className="w-full h-full text-accent"
                style={{ transform: `rotate(${pos.rotate}deg)` }}
              >
                <motion.path
                  d="M 0 12 L 0 0 L 12 0"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.6, ease: 'easeInOut' }}
                />
              </svg>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
