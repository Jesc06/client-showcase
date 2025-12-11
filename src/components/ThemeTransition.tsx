import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const ThemeTransition = () => {
  const { isTransitioning } = useTheme();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <>
          {/* Fast Ripple Effect - Optimized */}
          <motion.div
            initial={{ scale: 0, opacity: 0.8 }}
            animate={{ scale: 3, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 pointer-events-none z-[9998] flex items-center justify-center"
          >
            <div className="w-64 h-64 rounded-full bg-[#0071e3] dark:bg-[#2997ff] blur-3xl" />
          </motion.div>

          {/* Quick Color Flash */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.15, 0] }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-[#0071e3] dark:bg-[#2997ff] pointer-events-none z-[9997]"
          />
        </>
      )}
    </AnimatePresence>
  );
};
