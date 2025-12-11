import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, MapPin, CheckCircle, X, Facebook, Instagram } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:magsipocrenier@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success modal
    setShowSuccessModal(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    
    // Auto close modal after 3 seconds
    setTimeout(() => {
      setShowSuccessModal(false);
    }, 3000);
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
              { icon: Mail, label: 'EMAIL', value: 'magsipocrenier@gmail.com' },
              { icon: MapPin, label: 'LOCATION', value: 'Mindoro, Philippines' },
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
              <div className="flex flex-wrap gap-4 md:gap-6">
                {[
                  { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/renier.magsipoc.1' },
                  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/itsz_renier?igsh=enFrdDZvYjI5bDVy' }
                ].map((platform, i) => {
                  const Icon = platform.icon;
                  return (
                    <motion.a
                      key={platform.name}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, type: "spring", stiffness: 400, damping: 17 }}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center gap-2 group"
                    >
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-100/80 dark:bg-white/10 group-hover:bg-gray-200/90 dark:group-hover:bg-white/15 backdrop-blur-sm flex items-center justify-center text-gray-700 dark:text-gray-300 transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-105">
                        <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400 font-medium">{platform.name}</span>
                    </motion.a>
                  );
                })}
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

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowSuccessModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative max-w-md w-full glass-card rounded-3xl p-8 md:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                <X size={20} className="text-gray-600 dark:text-gray-400" />
              </motion.button>

              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 400, damping: 15 }}
                className="flex justify-center mb-6"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/10 dark:bg-green-500/20 flex items-center justify-center">
                  <CheckCircle size={48} className="text-green-500" strokeWidth={2} />
                </div>
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-3">
                  Message Sent!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                  Your email client has been opened with your message. Please complete sending from there.
                </p>
              </motion.div>

              {/* Progress Bar */}
              <motion.div
                className="mt-6 h-1 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  className="h-full bg-[#0071e3] dark:bg-[#2997ff]"
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 3, ease: "linear" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
