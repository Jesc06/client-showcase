import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { ReactNode } from 'react';

interface SectionTransitionProps {
  children: ReactNode;
  id: string;
}

export const SectionTransition = ({ children, id }: SectionTransitionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.98, 1, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.1], [30, 0]);

  return (
    <motion.div
      ref={ref}
      id={id}
      style={{
        opacity,
        scale,
        y,
        willChange: 'transform, opacity'
      }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};
