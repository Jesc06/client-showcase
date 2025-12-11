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
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/80 dark:from-[#0a0a14] dark:via-[#050508] dark:to-[#0a0a14] relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle, black 1.5px, transparent 1.5px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center">
          <motion.span 
            className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-[0.35em] font-bold mb-6 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Let's Work
          </motion.span>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1.5 w-24 bg-gradient-to-r from-[#FF634A] to-[#ff7a5c] rounded-full shadow-sm shadow-[#FF634A]/30 mb-8 mx-auto"
          />

          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tighter leading-none"
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ perspective: 1000 }}
          >
            GET IN TOUCH
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Ready to bring your vision to life? Accepting Rush Orders! PM NOW!
          </motion.p>
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
                className="group relative p-6 sm:p-8 md:p-10 glass hover:shadow-2xl hover:shadow-accent/15 transition-all rounded-xl md:rounded-2xl overflow-hidden"
                style={{ perspective: 1000 }}
              >
                <div className="flex items-start gap-4 md:gap-5">
                  <motion.div 
                    className="p-3 md:p-4 bg-linear-to-br from-accent to-accent-hover rounded-xl shadow-lg shadow-accent/25"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon size={22} className="text-white" strokeWidth={2} />
                  </motion.div>
                  <div>
                    <div className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-[0.25em] mb-2 md:mb-3 font-bold">
                      {item.label}
                    </div>
                    <motion.div 
                      className="text-lg sm:text-xl md:text-xl text-gray-900 dark:text-white font-black"
                      whileHover={{ x: 5 }}
                    >
                      {item.value}
                    </motion.div>
                  </div>
                </div>
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1.5 bg-linear-to-r from-accent to-accent-hover rounded-b-xl md:rounded-b-2xl shadow-sm shadow-accent/30"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
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
              <div className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-[0.25em] mb-4 md:mb-6 font-black">Follow Me</div>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {['Instagram', 'YouTube', 'Vimeo'].map((platform, i) => (
                  <motion.button
                    key={platform}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                    whileHover={{ 
                      y: -5, 
                      scale: 1.08,
                      backgroundColor: "#FF634A",
                      color: "#ffffff",
                      borderColor: "#FF634A",
                      boxShadow: "0 15px 40px rgba(255, 99, 74, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 md:px-7 py-3 md:py-4 glass text-gray-700 dark:text-gray-300 hover:border-accent transition-all uppercase text-xs md:text-sm font-black tracking-wider rounded-xl hover:shadow-xl"
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
                    whileFocus={{ 
                      scale: 1.01
                    }}
                    className="w-full px-5 md:px-7 py-4 md:py-5 glass-premium focus:border-accent outline-none transition-all text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 font-semibold text-sm md:text-base rounded-xl focus:shadow-2xl hover:border-accent/30"
                    placeholder={field.placeholder}
                    style={{
                      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                    }}
                    required
                  />
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-1.5 bg-linear-to-r from-accent to-accent-hover rounded-b-xl pointer-events-none shadow-sm shadow-accent/30"
                    initial={{ scaleX: 0 }}
                    whileFocus={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
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
                  whileFocus={{ 
                    scale: 1.01
                  }}
                  className="w-full px-5 md:px-7 py-4 md:py-5 glass-premium focus:border-accent outline-none transition-all resize-none text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-500 font-semibold text-sm md:text-base rounded-xl focus:shadow-2xl hover:border-accent/30"
                  placeholder="YOUR MESSAGE"
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                  }}
                  required
                />
                <motion.div 
                  className="absolute bottom-0 left-0 w-full h-1.5 bg-linear-to-r from-accent to-accent-hover rounded-b-xl pointer-events-none shadow-sm shadow-accent/30"
                  initial={{ scaleX: 0 }}
                  whileFocus={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="group relative w-full px-8 md:px-10 py-5 md:py-6 bg-linear-to-r from-accent to-accent-hover text-white font-black uppercase tracking-[0.15em] overflow-hidden rounded-xl transition-all"
                style={{
                  boxShadow: '0 20px 60px rgba(255, 99, 74, 0.4), 0 0 30px rgba(255, 99, 74, 0.2)'
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
                <motion.span 
                  className="relative z-10 flex items-center justify-center gap-3 md:gap-4 text-sm md:text-base"
                  whileHover={{ x: 5 }}
                >
                  Send Message
                  <motion.div
                    animate={{ 
                      x: [0, 5, 0],
                      rotate: [0, 45, 0]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send size={20} strokeWidth={2.5} />
                  </motion.div>
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gray-900 dark:bg-white opacity-0 group-hover:opacity-10"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
