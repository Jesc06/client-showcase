import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-24 md:py-32 bg-[#fafafa] dark:bg-[#000000] relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-[#0071e3]/10 dark:bg-[#2997ff]/5 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, delay: 0.3 }}
          className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.28, 0.11, 0.32, 1] }}
          className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight leading-tight mb-4">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to bring your vision to life? Accepting Rush Orders! PM NOW!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            {[
              { icon: Mail, label: 'EMAIL', value: 'hello@studio.com' },
              { icon: MapPin, label: 'LOCATION', value: 'Los Angeles, CA' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, type: "spring" }}
                whileHover={{ 
                  x: 12, 
                  scale: 1.02,
                }}
                className="group relative p-6 sm:p-8 md:p-10 glass-card rounded-2xl overflow-hidden cursor-pointer"
                style={{ perspective: 1000 }}
              >
                <div className="flex items-start gap-4 md:gap-5">
                  <motion.div 
                    className="p-3 md:p-4 bg-[#0071e3] dark:bg-[#2997ff] rounded-2xl shadow-lg shadow-[#0071e3]/20 dark:shadow-[#2997ff]/20"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <item.icon size={24} className="text-white" strokeWidth={2} />
                  </motion.div>
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 md:mb-3 font-medium">
                      {item.label}
                    </div>
                    <div className="text-lg sm:text-xl md:text-xl text-[#1d1d1f] dark:text-[#f5f5f7] font-semibold">
                      {item.value}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div 
              className="pt-6 md:pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4 md:mb-6 font-medium">Follow Me</div>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {['Instagram', 'YouTube', 'Vimeo'].map((platform, i) => (
                  <motion.button
                    key={platform}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-5 md:px-7 py-3 md:py-4 bg-gray-100 dark:bg-white/10 text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-gray-200 dark:hover:bg-white/15 transition-all text-xs md:text-sm font-medium rounded-full"
                  >
                    {platform}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              {[
                { name: 'name', type: 'text', placeholder: 'YOUR NAME', value: formData.name },
                { name: 'email', type: 'email', placeholder: 'EMAIL ADDRESS', value: formData.email },
              ].map((field, i) => (
                <motion.div 
                  key={field.name}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  <motion.input
                    type={field.type}
                    value={field.value}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-full px-5 md:px-7 py-4 md:py-5 glass-premium focus:border-[#0071e3] dark:focus:border-[#2997ff] outline-none transition-all text-[#1d1d1f] dark:text-[#f5f5f7] placeholder:text-gray-500 dark:placeholder:text-gray-500 font-normal text-sm md:text-base rounded-2xl focus:shadow-lg focus:shadow-[#0071e3]/10 dark:focus:shadow-[#2997ff]/10"
                    placeholder={field.placeholder}
                    required
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative group"
              >
                <motion.textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-full px-5 md:px-7 py-4 md:py-5 glass-premium focus:border-[#0071e3] dark:focus:border-[#2997ff] outline-none transition-all resize-none text-[#1d1d1f] dark:text-[#f5f5f7] placeholder:text-gray-500 dark:placeholder:text-gray-500 font-normal text-sm md:text-base rounded-2xl focus:shadow-lg focus:shadow-[#0071e3]/10 dark:focus:shadow-[#2997ff]/10"
                  placeholder="YOUR MESSAGE"
                  required
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="group relative w-full px-8 md:px-10 py-4 md:py-5 bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-[#0071e3]/20 hover:shadow-xl hover:shadow-[#0071e3]/30"
              >
                <span className="flex items-center justify-center gap-3 text-base md:text-lg">
                  Send Message
                  <Send size={18} strokeWidth={2} />
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
