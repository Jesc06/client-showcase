import { motion } from 'framer-motion';
import { Instagram, Facebook, MapPin, Heart } from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/renier.magsipoc.1' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/itsz_renier?igsh=enFrdDZvYjI5bDVy' },
  ];

  return (
    <footer className="relative overflow-hidden bg-white/95 dark:bg-[#000000]/95 backdrop-blur-xl border-t border-gray-200/60 dark:border-white/[0.08]">
      <div className="absolute inset-0 bg-linear-to-b from-white/50 via-transparent to-gray-50/30 dark:from-transparent dark:via-transparent dark:to-white/[0.02]" />

      <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-12 gap-8 lg:gap-16 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-12 lg:col-span-5"
          >
            <motion.div
              whileHover={{ x: 2 }}
              transition={{ duration: 0.4, ease: [0.28, 0.11, 0.32, 1] }}
              className="inline-block mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                <span className="text-[#1d1d1f] dark:text-[#f5f5f7]">
                  Renier Magsipoc
                </span>
              </h2>
            </motion.div>
            
            <p className="text-gray-600 dark:text-gray-400 text-base leading-[1.6] mb-10 max-w-md font-normal">
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
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring", stiffness: 400, damping: 17 }}
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.92 }}
                    className="relative group w-11 h-11 rounded-full bg-gray-100/80 dark:bg-white/10 hover:bg-gray-200/90 dark:hover:bg-white/15 backdrop-blur-sm flex items-center justify-center text-gray-700 dark:text-gray-300 transition-all duration-300 shadow-sm hover:shadow-md"
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                    {/* Tooltip */}
                    <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      {social.label}
                    </span>
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
            className="col-span-6 lg:col-span-3"
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
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.4, ease: [0.28, 0.11, 0.32, 1] }}
                    onClick={() =>
                      document
                        .getElementById(link.toLowerCase())
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="text-gray-700 dark:text-gray-300 hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors duration-300 ease-out text-sm font-normal group"
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
            className="col-span-6 lg:col-span-4"
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
                  whileHover={{ x: 3, transition: { duration: 0.4, ease: [0.28, 0.11, 0.32, 1] } }}
                  className="text-gray-600 dark:text-gray-400 text-sm font-normal cursor-pointer hover:text-[#0071e3] dark:hover:text-[#2997ff] transition-colors duration-300"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-10 border-t border-gray-200/60 dark:border-white/[0.08] flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-sm text-gray-500 dark:text-gray-500 text-center md:text-left font-normal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          >
            © {new Date().getFullYear()} Renier Magsipoc. All rights reserved.
          </motion.p>
          
          <motion.div 
            className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 font-normal"
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
