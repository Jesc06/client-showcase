import { motion } from 'framer-motion';
import { Instagram, Youtube, Mail, MapPin, Heart } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:contact@example.com' },
  ];

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-[#000000] border-t border-gray-200 dark:border-white/10">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-50/30 dark:to-white/2" />

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
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                <span className="text-[#1d1d1f] dark:text-[#f5f5f7]">
                  Renier Magsipoc
                </span>
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
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15 flex items-center justify-center text-gray-600 dark:text-gray-400 transition-all duration-200"
                  >
                    <Icon className="w-5 h-5" />
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
            <h4 className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-6 font-medium">
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
                    className="text-gray-700 dark:text-gray-300 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors duration-300 ease-out text-sm font-medium group"
                  >
                    <span className="relative">
                      {link}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#0071e3] dark:bg-[#2997ff] group-hover:w-full transition-all duration-300 ease-out" />
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
            <h4 className="text-xs uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-6 font-medium">
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
                  className="text-gray-600 dark:text-gray-400 text-sm font-normal cursor-pointer hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors duration-200"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
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
              <Heart className="w-4 h-4 text-[#0071e3] dark:text-[#2997ff] fill-[#0071e3] dark:fill-[#2997ff]" />
            </motion.div>
            <span>& passion</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
