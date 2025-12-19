import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Home, Briefcase, Zap, User, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar = () => {
  const { theme, toggleTheme, isTransitioning } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
     
      const sections = ['home', 'portfolio', 'services', 'about', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', Icon: Home },
    { name: 'Portfolio', Icon: Briefcase },
    { name: 'Services', Icon: Zap },
    { name: 'About', Icon: User },
    { name: 'Contact', Icon: Mail }
  ];

  const scrollToSection = (item: string) => {
    const element = document.getElementById(item.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Glassmorphic Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-4'}`}
      >
        {/* Premium glow effect */}
        {scrolled && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-linear-to-b from-gray-100/50 dark:from-white/5 to-transparent blur-xl"
          />
        )}
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center h-14 md:h-16">
            {/* Logo - Left Side */}
            <motion.div 
              className="hidden md:block"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#0071e3] dark:bg-[#2997ff] flex items-center justify-center">
                <span className="text-white font-semibold text-sm">RM</span>
              </div>
              </div>
            </motion.div>

            {/* Desktop Menu - Centered Apple Style */}
            <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: [0.28, 0.11, 0.32, 1] }}
                className="flex items-center gap-1 glass-premium rounded-full px-1.5 py-1.5"
                style={{
                  boxShadow: scrolled 
                    ? '0 8px 30px rgba(0, 0, 0, 0.12)' 
                    : '0 4px 20px rgba(0, 0, 0, 0.08)'
                }}
              >
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.name.toLowerCase();
                  const Icon = item.Icon;
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.name)}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 + 0.25, duration: 0.4, ease: [0.28, 0.11, 0.32, 1] }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`relative px-4 py-2 rounded-full text-sm font-normal tracking-tight transition-all duration-300 outline-none focus:outline-none ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-[#0071e3] dark:bg-[#0071e3] rounded-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-1.5">
                        <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : ''}`} strokeWidth={2} />
                        {item.name}
                      </span>
                    </motion.button>
                  );
                })}

                {/* Separator */}
                <div className="w-px h-5 bg-gray-200/60 dark:bg-gray-700/60 mx-1" />

                {/* Theme Toggle - Apple Style */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleTheme}
                  className="relative p-2 rounded-full hover:bg-gray-100/80 dark:hover:bg-white/10 text-gray-600 dark:text-gray-400 transition-all duration-400"
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={theme}
                      initial={{ y: -10, opacity: 0, rotate: -90 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      exit={{ y: 10, opacity: 0, rotate: 90 }}
                      transition={{ 
                        duration: 0.3,
                        ease: [0.28, 0.11, 0.32, 1]
                      }}
                    >
                      {theme === 'dark' ? 
                        <Sun className="w-4 h-4" strokeWidth={2} /> : 
                        <Moon className="w-4 h-4" strokeWidth={2} />
                      }
                    </motion.div>
                  </AnimatePresence>
                </motion.button>
              </motion.div>

            </div>



            {/* Mobile Menu Controls - Right Side on Mobile */}
            <div className="md:hidden flex items-center gap-2.5 md:gap-3">
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="relative p-2.5 rounded-full glass shadow-lg overflow-hidden group"
              >
                {/* Theme transition glow */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-amber-400/30 to-purple-500/30 dark:from-blue-400/30 dark:to-purple-500/30 opacity-0 group-active:opacity-100 blur-md transition-opacity duration-300"
                  animate={isTransitioning ? {
                    scale: [1, 1.8, 1],
                    opacity: [0, 0.8, 0]
                  } : {}}
                  transition={{ duration: 0.8 }}
                />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: 180, scale: 0 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {theme === 'dark' ? 
                      <Sun size={17} strokeWidth={2.5} className="text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.6)] relative z-10" /> : 
                      <Moon size={17} strokeWidth={2.5} className="text-[#0071e3] dark:text-[#2997ff] drop-shadow-[0_0_6px_rgba(0,113,227,0.4)] relative z-10" />
                    }
                  </motion.div>
                </AnimatePresence>
              </motion.button>
              
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-full glass shadow-lg"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isMobileMenuOpen ? 'close' : 'open'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMobileMenuOpen ? <X size={19} strokeWidth={2.5} /> : <Menu size={19} strokeWidth={2.5} />}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu - Sleek Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/30 dark:bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 md:top-20 left-3 right-3 md:left-4 md:right-4 z-50 md:hidden glass rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="p-4 md:p-6 space-y-1.5 md:space-y-2">
                {navItems.map((item, i) => {
                  const Icon = item.Icon;
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.name)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`relative px-6 md:px-8 py-2.5 md:py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                        activeSection === item.name.toLowerCase()
                          ? 'bg-[#0071e3] text-white'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-white/5'
                      }`}
                    >
                      <Icon className="w-4.5 h-4.5 md:w-5 md:h-5" strokeWidth={2.5} />
                      <span className="tracking-wide">{item.name}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
