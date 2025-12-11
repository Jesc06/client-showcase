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
    <section className="py-24 md:py-32 bg-white dark:bg-[#000000] relative">
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header - Apple Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.28, 0.11, 0.32, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight leading-tight mb-4">
            Services
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional video editing services tailored to bring your vision to life
          </p>
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
              className="group relative p-6 sm:p-8 md:p-10 bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/8 border border-gray-200 dark:border-white/10 transition-all duration-200 rounded-2xl overflow-hidden"
            >
              {/* Number Badge */}
              <div className="absolute top-8 md:top-10 right-8 md:right-10 text-6xl sm:text-7xl md:text-8xl font-semibold text-gray-100 dark:text-white/5 select-none">
                {service.number}
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="w-16 h-16 sm:w-18 md:w-20 sm:h-18 md:h-20 bg-[#0071e3] dark:bg-[#2997ff] flex items-center justify-center mb-6 md:mb-8 rounded-2xl relative z-10"
              >
                <service.icon size={32} className="text-white relative z-10" strokeWidth={2} />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-4 md:mb-5 tracking-tight leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 md:mb-8 leading-relaxed font-normal text-sm sm:text-base md:text-lg">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 dark:bg-white/10 text-[#1d1d1f] dark:text-[#f5f5f7] text-xs md:text-sm font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
