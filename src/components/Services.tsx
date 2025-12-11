import { motion } from 'framer-motion';
import { Video, Camera, Scissors, Sparkles, MonitorPlay, Presentation, Image as ImageIcon, Film } from 'lucide-react';

const services = [
  {
    icon: Film,
    number: '01',
    title: 'VIDEO EDITING',
    description: 'Cinematic edits for any occasion, from documentaries to school projects.',
    features: ['Cinematic Vid', 'Documentary', 'Film Video', 'Longform/Short Form'],
  },
  {
    icon: MonitorPlay,
    number: '02',
    title: 'CONTENT CREATION',
    description: 'Engaging content for social media and vlogs that captures attention.',
    features: ['Vlog Video', 'Vlog Gaming', 'UGC', 'Talking Head'],
  },
  {
    icon: Presentation,
    number: '03',
    title: 'EVENTS & CORPORATE',
    description: 'Professional presentations and event coverage for school or business.',
    features: ['Event Presentation', 'School Project', 'Campaign Vid', 'PowerPoint'],
  },
  {
    icon: ImageIcon,
    number: '04',
    title: 'VISUAL DESIGN',
    description: 'High-quality photo editing and motion graphics to enhance your brand.',
    features: ['Picture Edit', 'Advertisement Pic/Vid', 'Motion Graphics', 'VFX'],
  },
];

export const Services = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50/80 via-white to-gray-50/80 dark:from-[#0a0a14] dark:via-[#050508] dark:to-[#0a0a14] relative">
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
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center"
        >
          <motion.span 
            className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-[0.35em] font-bold mb-6 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            What I Do
          </motion.span>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1.5 w-24 bg-linear-to-r from-accent to-accent-hover rounded-full shadow-lg shadow-accent/40 mb-8 mx-auto"
          />

          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none"
            initial={{ opacity: 0, x: -50, rotateY: -20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            style={{ perspective: 1000 }}
          >
            SERVICES
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Professional video editing services tailored to bring your vision to life
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 100, rotateX: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.12,
                type: "spring",
                stiffness: 80
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.015,
                rotateY: 2,
              }}
              className="group relative p-6 sm:p-8 md:p-10 lg:p-12 glass-premium hover:shadow-2xl hover:shadow-accent/15 transition-all duration-500 rounded-2xl md:rounded-3xl overflow-hidden"
              style={{ 
                perspective: 1000,
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 99, 74, 0.05)'
              }}
            >
              {/* Premium gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-linear-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              {/* Number Badge */}
              <div className="absolute top-8 md:top-10 right-8 md:right-10 text-6xl sm:text-7xl md:text-8xl font-black text-gray-100 dark:text-white/5 select-none">
                {service.number}
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ 
                  scale: 1.15, 
                  rotate: [0, -8, 8, 0],
                  rotateY: 360,
                }}
                transition={{ 
                  rotate: { duration: 0.5 },
                  rotateY: { duration: 0.8 },
                }}
                className="w-16 h-16 sm:w-18 md:w-20 sm:h-18 md:h-20 bg-linear-to-br from-accent to-accent-hover flex items-center justify-center mb-6 md:mb-8 rounded-xl md:rounded-2xl shadow-lg shadow-accent/25 relative z-10"
                style={{ 
                  transformStyle: "preserve-3d",
                  boxShadow: '0 10px 30px rgba(255, 99, 74, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                }}
              >
                <motion.div
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  className="absolute inset-0 rounded-xl md:rounded-2xl"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
                  }}
                />
                <service.icon size={32} className="text-white relative z-10" strokeWidth={2} />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-4 md:mb-5 tracking-tight leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed font-medium text-sm sm:text-base md:text-lg">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {service.features.map((feature) => (
                    <span
                    key={feature}
                    className="px-3 md:px-4 py-1.5 md:py-2 glass text-gray-700 dark:text-gray-300 text-[10px] sm:text-xs uppercase tracking-wide font-bold rounded-lg hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
              </div>

              {/* Hover Accent */}
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-1.5 md:h-2 bg-linear-to-r from-accent to-accent-hover rounded-b-2xl md:rounded-b-3xl shadow-lg shadow-accent/30"
                initial={{ scaleX: 0, opacity: 0 }}
                whileHover={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
