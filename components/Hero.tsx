import { motion } from 'framer-motion';

export const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#fafafa] dark:bg-[#000000] overflow-hidden">
      {/* Enhanced Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/40 dark:to-white/2"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 2, ease: [0.28, 0.11, 0.32, 1] }}
          className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#0071e3]/10 dark:bg-[#2997ff]/5 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2.5, delay: 0.3, ease: [0.28, 0.11, 0.32, 1] }}
          className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>
      
      <div className="relative z-10 w-full">
        <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.28, 0.11, 0.32, 1] }}
            className="flex flex-col items-center text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.28, 0.11, 0.32, 1] }}
              className="mb-8 md:mb-10"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-premium cursor-default"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Available for Projects</span>
              </motion.div>
            </motion.div>

            <div className="mb-6 md:mb-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.28, 0.11, 0.32, 1] }}
              >
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] leading-[1.05] mb-4">
                  Renier Magsipoc
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.28, 0.11, 0.32, 1] }}
                className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400"
              >
                Video Editor & Visual Storyteller
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.28, 0.11, 0.32, 1] }}
              className="max-w-2xl mb-10 md:mb-12"
            >
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Transforming raw footage into cinematic masterpieces. Specializing in high-impact edits for creators and brands.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.28, 0.11, 0.32, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            >
              <motion.button
                onClick={scrollToPortfolio}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="px-8 py-4 bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full font-medium text-base transition-all duration-300 shadow-lg shadow-[#0071e3]/20 hover:shadow-xl hover:shadow-[#0071e3]/30"
              >
                View Portfolio
              </motion.button>

              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="px-8 py-4 glass-premium text-[#0071e3] dark:text-[#2997ff] border border-gray-300/50 dark:border-white/20 rounded-full font-medium text-base"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex items-start justify-center p-1.5"
          >
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
