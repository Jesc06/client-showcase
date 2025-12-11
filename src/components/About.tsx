import { motion } from 'framer-motion';
import { Award, Target, Zap, GraduationCap, Laptop, School } from 'lucide-react';
import profileImage from '../assets/profileniBOss.png';

export const About = () => {
  const stats = [
    { icon: Award, value: '100+', label: 'VIDEOS EDITED' },
    { icon: Target, value: '50+', label: 'HAPPY CLIENTS' },
    { icon: Zap, value: '5+', label: 'YEARS' },
  ];

  const education = [
    {
      school: "Mindoro State University",
      level: "College",
      detail: "Information Technology Student",
      icon: GraduationCap
    },
    {
      school: "Fe Del Mundo National High School",
      level: "High School",
      detail: "Secondary Education",
      icon: School
    },
    {
      school: "Mansalay Central School",
      level: "Elementary",
      detail: "Primary Education",
      icon: School
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white dark:bg-[#000000] relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-gray-50/30 dark:to-white/2" />

      <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight leading-tight mb-8">
              About Me
            </h2>

            <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-12">
              <p>
                I'm a <span className="text-[#0071e3] dark:text-[#2997ff] font-semibold">Student Editor</span> and Information Technology student 
                passionate about transforming raw footage into captivating stories. I use my laptop as my creative weapon 
                to deliver high-quality edits.
              </p>

              <p>
                Currently studying at <span className="text-[#0071e3] dark:text-[#2997ff] font-semibold">Mindoro State University</span>, 
                I balance my academic life with my passion for video editing, offering budget-friendly services 
                perfect for school projects and more.
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-8">
                <div className="px-4 md:px-6 py-2.5 md:py-3 bg-gray-100 dark:bg-white/10 rounded-full flex items-center gap-2 md:gap-3 hover:bg-gray-200 dark:hover:bg-white/15 transition-all duration-200">
                  <Laptop size={18} className="text-[#0071e3] dark:text-[#2997ff]" />
                  <span className="font-medium text-xs md:text-sm text-[#1d1d1f] dark:text-[#f5f5f7]">Premiere Pro</span>
                </div>
                <div className="px-4 md:px-6 py-2.5 md:py-3 bg-gray-100 dark:bg-white/10 rounded-full flex items-center gap-2 md:gap-3 hover:bg-gray-200 dark:hover:bg-white/15 transition-all duration-200">
                  <Laptop size={18} className="text-[#0071e3] dark:text-[#2997ff]" />
                  <span className="font-medium text-xs md:text-sm text-[#1d1d1f] dark:text-[#f5f5f7]">CapCut Pro</span>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-5 md:space-y-6 mb-10 md:mb-12">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-6 md:mb-8 tracking-tight">Education</h3>
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-4 md:gap-6 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0071e3]/10 dark:bg-[#2997ff]/10 flex items-center justify-center group-hover:bg-[#0071e3] dark:group-hover:bg-[#2997ff] transition-colors duration-200">
                      <edu.icon size={18} className="text-[#0071e3] dark:text-[#2997ff] group-hover:text-white transition-colors" />
                    </div>
                    {index !== education.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 dark:bg-white/10 my-2" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">{edu.school}</h4>
                    <p className="text-[#0071e3] dark:text-[#2997ff] font-semibold text-xs md:text-sm uppercase tracking-wider mb-1">{edu.level}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm">{edu.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6, type: "spring" }}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                  }}
                  className="relative group"
                >
                  <div className="p-5 sm:p-6 md:p-8 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-200 rounded-xl md:rounded-2xl">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon 
                        size={24} 
                        className="text-[#0071e3] dark:text-[#2997ff] mb-3 md:mb-4" 
                        strokeWidth={2}
                      />
                    </motion.div>
                    <motion.div 
                      className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] mb-1.5 md:mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-4/5 overflow-hidden">
              <img
                src={profileImage}
                alt="Renier Magsipoc"
                className="w-full h-full object-cover"
              />
              
              {/* Border Frame */}
              <div className="absolute inset-0 border-4 border-gray-200 dark:border-white/10 pointer-events-none rounded-2xl" />
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-3 border-l-3 border-[#0071e3] dark:border-[#2997ff] rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-3 border-r-3 border-[#0071e3] dark:border-[#2997ff] rounded-br-2xl" />

              {/* Overlay Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)"
                }}
                className="absolute top-8 right-8 bg-[#0071e3] dark:bg-[#2997ff] text-white p-6 font-semibold rounded-xl shadow-lg"
              >
                <motion.div 
                  className="text-2xl"
                  animate={{ 
                    textShadow: [
                      "0 0 0px rgba(255,255,255,0)",
                      "0 0 10px rgba(255,255,255,0.8)",
                      "0 0 0px rgba(255,255,255,0)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  VIDEO
                </motion.div>
                <div className="text-sm tracking-widest">EDITOR</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
