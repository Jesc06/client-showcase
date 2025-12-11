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
    <section className="py-24 md:py-32 bg-[#fafafa] dark:bg-[#000000] relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/40 dark:to-white/2" />

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
                  x: 8, 
                  scale: 1.015,
                }}
                className="group relative p-6 sm:p-8 md:p-10 glass hover:shadow-2xl hover:shadow-[#0071e3]/10 dark:hover:shadow-[#2997ff]/10 transition-all rounded-xl md:rounded-2xl overflow-hidden"
                style={{ perspective: 1000 }}
              >
                <div className="flex items-start gap-4 md:gap-5">
                  <motion.div 
                    className="p-3 md:p-4 bg-[#0071e3] dark:bg-[#2997ff] rounded-xl"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <item.icon size={22} className="text-white" strokeWidth={2} />
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
                    whileFocus={{ scale: 1.005 }}
                    className="w-full px-5 md:px-7 py-4 md:py-5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-[#0071e3] dark:focus:border-[#2997ff] outline-none transition-all text-[#1d1d1f] dark:text-[#f5f5f7] placeholder:text-gray-500 dark:placeholder:text-gray-500 font-normal text-sm md:text-base rounded-xl"
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
                  whileFocus={{ scale: 1.005 }}
                  className="w-full px-5 md:px-7 py-4 md:py-5 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 focus:border-[#0071e3] dark:focus:border-[#2997ff] outline-none transition-all resize-none text-[#1d1d1f] dark:text-[#f5f5f7] placeholder:text-gray-500 dark:placeholder:text-gray-500 font-normal text-sm md:text-base rounded-xl"
                  placeholder="YOUR MESSAGE"
                  required
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="group relative w-full px-8 md:px-10 py-4 md:py-5 bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
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
