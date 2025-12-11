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
      
      // Update active section based on scroll position
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
            className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent blur-xl"
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
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-accent to-accent-hover flex items-center justify-center">
                  <span className="text-white font-black text-sm">RM</span>
                </div>
              </div>
            </motion.div>

            {/* Desktop Menu - Centered */}
            <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-1.5 glass-premium rounded-full p-2.5 shadow-2xl"
                style={{
                  boxShadow: scrolled 
                    ? '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 40px rgba(255, 99, 74, 0.1)' 
                    : '0 10px 40px rgba(0, 0, 0, 0.1)'
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
                      transition={{ delay: index * 0.08 + 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-5 md:px-6 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-bold tracking-wide transition-all duration-300 outline-none focus:outline-none ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-accent rounded-full shadow-lg shadow-accent/25"
                          transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                        />
                      )}
                      <span className="relative z-10 flex items-center gap-2 md:gap-2.5">
                        <Icon className={`w-3.5 h-3.5 md:w-4 md:h-4 ${isActive ? 'text-white' : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white'}`} strokeWidth={2.5} />
                        {item.name}
                      </span>
                    </motion.button>
                  );
                })}

                {/* Divider */}
                <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 mx-2" />

                {/* Theme Toggle */}
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleTheme}
                  className="relative p-2.5 md:p-3 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-gray-600 dark:text-gray-400 transition-all duration-500 overflow-hidden group"
                >
                  {/* Premium background effect */}
                  <motion.div
                    className="absolute inset-0 bg-linear-to-br from-amber-400/20 to-purple-500/20 dark:from-blue-500/20 dark:to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    animate={isTransitioning ? {
                      scale: [1, 1.5, 1],
                      rotate: [0, 180, 360]
                    } : {}}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={theme}
                      initial={{ y: -20, opacity: 0, rotate: -180, scale: 0.5 }}
                      animate={{ y: 0, opacity: 1, rotate: 0, scale: 1 }}
                      exit={{ y: 20, opacity: 0, rotate: 180, scale: 0.5 }}
                      transition={{ 
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      className="relative z-10"
                    >
                      {theme === 'dark' ? 
                        <Sun className="w-4 h-4 md:w-5 md:h-5 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" strokeWidth={2.5} /> : 
                        <Moon className="w-4 h-4 md:w-5 md:h-5 text-accent drop-shadow-[0_0_8px_rgba(255,99,74,0.6)]" strokeWidth={2.5} />
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
                      <Moon size={17} strokeWidth={2.5} className="text-accent drop-shadow-[0_0_6px_rgba(255,99,74,0.6)] relative z-10" />
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
                      className={`w-full flex items-center gap-3.5 md:gap-4 px-4 md:px-5 py-3.5 md:py-4 rounded-xl md:rounded-xl font-bold text-sm md:text-base transition-all ${
                        activeSection === item.name.toLowerCase()
                          ? 'bg-linear-to-r from-accent to-[#ff7a5c] text-white shadow-lg shadow-accent/30'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-white/5 hover:shadow-md'
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
