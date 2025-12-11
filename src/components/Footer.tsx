import { motion } from 'framer-motion';
import { Instagram, Youtube, Mail, MapPin, Heart } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:contact@example.com' },
  ];

  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-white via-gray-50/50 to-white dark:from-[#050508] dark:via-[#0a0a14] dark:to-[#050508] border-t border-gray-200 dark:border-gray-800">
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent to-transparent" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 99, 74, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 99, 74, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="inline-block mb-6"
            >
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
                <span className="bg-linear-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                  RENIER
                </span>
                <br />
                <span className="text-accent">MAGSIPOC</span>
              </h2>
            </motion.div>
            
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8 max-w-md">
              Transforming visions into cinematic reality through expert video editing, 
              color grading, and motion graphics.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-8">
              <MapPin className="w-4 h-4" />
              <span>Mindoro, Philippines</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, i) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                    whileHover={{ y: -4, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800/50 hover:bg-accent dark:hover:bg-accent flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-500 ease-out group backdrop-blur-sm"
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-500 ease-out" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <h4 className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-6 font-black">
              Navigation
            </h4>
            <ul className="space-y-3">
              {['Home', 'Portfolio', 'Services', 'About', 'Contact'].map((link, i) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.05, duration: 0.6, ease: "easeOut" }}
                >
                  <motion.button
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    onClick={() =>
                      document
                        .getElementById(link.toLowerCase())
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors duration-500 ease-out text-sm font-semibold group"
                  >
                    <span className="relative">
                      {link}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
                    </span>
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4"
          >
            <h4 className="text-xs uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400 mb-6 font-black">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Video Editing',
                'Color Grading',
                'Motion Graphics',
                'Post-Production',
                'Visual Effects',
                'Content Creation'
              ].map((service, i) => (
                <motion.li 
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.05, duration: 0.6, ease: "easeOut" }}
                  whileHover={{ x: 5 }}
                  className="text-gray-700 dark:text-gray-300 text-sm font-semibold cursor-pointer hover:text-accent transition-colors duration-500 ease-out"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full" />
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          >
            © {new Date().getFullYear()} Renier Magsipoc. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          >
            <span>Crafted with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart className="w-4 h-4 text-accent fill-accent" />
            </motion.div>
            <span>& passion</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
