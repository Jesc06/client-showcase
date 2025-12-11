import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Play, Sparkles, MousePointer2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const y3 = useTransform(scrollY, [0, 500], [0, 150]);
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 30, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-[#050508] dark:via-[#0a0a14] dark:to-[#050508] overflow-hidden selection:bg-accent/30"
    >
      {/* Ultra-Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Gradient Mesh */}
        <div className="absolute inset-0 opacity-25 dark:opacity-25">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,99,74,0.08),transparent_50%)] animate-pulse" style={{ animationDuration: '8s' }} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.06),transparent_50%)] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        </div>
        
        {/* Premium Border Lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        
        {/* Sophisticated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(120, 120, 120, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(120, 120, 120, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)'
          }}
        />
      </div>

      {/* Enhanced Dynamic Spotlight */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out hidden lg:block"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 99, 74, 0.08), transparent 60%)`
        }}
      />

      {/* Premium Floating Orbs - Cleaner */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[10%] left-[8%] w-[45vw] md:w-[35vw] h-[45vw] md:h-[35vw] bg-gradient-to-br from-[#FF634A] to-[#ff8f7a] rounded-full opacity-[0.04] dark:opacity-[0.1] blur-[120px] pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[10%] right-[8%] w-[50vw] md:w-[40vw] h-[50vw] md:h-[40vw] bg-gradient-to-tr from-indigo-400 via-purple-400 to-blue-400 rounded-full opacity-[0.03] dark:opacity-[0.08] blur-[130px] pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative z-10 w-full">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-20 md:py-32 lg:py-36">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-6xl mx-auto"
          >
            {/* Ultra-Premium Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8 md:mb-10 flex justify-center"
            >
              <motion.div 
                className="relative group cursor-default inline-flex items-center gap-3 px-5 md:px-6 py-2.5 md:py-3 rounded-full glass-premium overflow-hidden"
                whileHover={{ scale: 1.03 }}
                style={{
                  boxShadow: '0 0 25px rgba(255, 99, 74, 0.25), 0 8px 30px rgba(0, 0, 0, 0.08)'
                }}
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent shadow-lg shadow-accent/50"></span>
                </span>
                <span className="text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase text-gray-700 dark:text-gray-200">
                  Available for Projects
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            </motion.div>

            {/* Enhanced Main Typography */}
            <div className="relative mb-8 md:mb-10 select-none z-20 w-full">
              <motion.p
                 initial={{ opacity: 0, y: -10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                 className="text-sm md:text-base text-accent font-bold uppercase mb-5 md:mb-6 tracking-[0.25em]"
              >
                Video Editor & Visual Storyteller
              </motion.p>
              
              <div className="relative w-full">
                <div className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "100%", scale: 0.95 }}
                    animate={{ y: 0, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[10.5vw] xl:text-[9.5vw] leading-[0.95] font-black tracking-[-0.02em] text-gray-900 dark:text-white"
                  >
                    RENIER
                  </motion.h1>
                </div>
                
                <div className="overflow-hidden relative mt-[-0.02em]">
                  <motion.h1
                    initial={{ y: "100%", scale: 0.95 }}
                    animate={{ y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[18vw] sm:text-[15vw] md:text-[12vw] lg:text-[10.5vw] xl:text-[9.5vw] leading-[0.95] font-black tracking-[-0.02em] text-transparent bg-clip-text bg-gradient-to-br from-accent via-accent to-[#ff8f7a] relative z-10"
                  >
                    MAGSIPOC
                  </motion.h1>
                  
                  {/* Enhanced Text Glow Effect */}
                  <div className="absolute inset-0 blur-[70px] md:blur-[90px] bg-accent/20 z-0 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Enhanced Description */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl mb-12 md:mb-14"
            >
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed tracking-tight">
                Transforming raw footage into <span className="text-gray-900 dark:text-white font-semibold border-b-2 border-accent/50 hover:border-accent transition-colors inline-block">cinematic masterpieces</span>. 
                Specializing in high-impact edits for creators and brands.
              </p>
            </motion.div>

            {/* Ultra-Premium CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
            >
              <motion.button
                onClick={scrollToPortfolio}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setCursorVariant('button')}
                onHoverEnd={() => setCursorVariant('default')}
                className="group relative px-10 md:px-12 py-4 md:py-5 bg-linear-to-r from-accent to-accent-hover text-white rounded-full font-bold text-base md:text-lg tracking-wide overflow-hidden transition-all duration-500 shadow-lg hover:shadow-xl"
                style={{
                  boxShadow: '0 8px 30px rgba(255, 99, 74, 0.35)'
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
                <span className="relative flex items-center justify-center gap-3">
                  VIEW PORTFOLIO 
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  >
                    <Play size={18} fill="currentColor" className="group-hover:scale-110 transition-transform" />
                  </motion.div>
                </span>
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onHoverStart={() => setCursorVariant('button')}
                onHoverEnd={() => setCursorVariant('default')}
                className="group relative px-10 md:px-12 py-4 md:py-5 glass-premium text-gray-900 dark:text-white rounded-full font-bold text-base md:text-lg tracking-wide overflow-hidden transition-all duration-500 shadow-md hover:shadow-lg"
              >
                <motion.div
                  className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                />
                <span className="relative flex items-center justify-center gap-3">
                  GET IN TOUCH 
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Premium Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer group"
        >
          <div className="w-[1.5px] h-16 bg-linear-to-b from-transparent via-gray-300 dark:via-gray-600 to-transparent overflow-hidden rounded-full">
            <motion.div 
              animate={{ y: [-20, 40] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-full h-1/3 bg-accent rounded-full shadow-lg shadow-accent/50"
            />
          </div>
          <motion.span 
            className="text-[10px] uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 font-semibold group-hover:text-accent transition-colors"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll
          </motion.span>
        </motion.div>

        {/* Ultra-Premium Custom Cursor */}
        <motion.div
          className="hidden lg:block fixed pointer-events-none z-50 mix-blend-difference"
          style={{
            left: cursorXSpring,
            top: cursorYSpring,
          }}
        >
          <motion.div
            animate={{
              scale: cursorVariant === 'button' ? 1.5 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 rounded-full border-2 border-accent bg-accent/20 backdrop-blur-sm"
            style={{
              boxShadow: '0 0 20px rgba(255, 99, 74, 0.4)'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};
