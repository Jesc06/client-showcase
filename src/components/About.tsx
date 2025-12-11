import { motion } from 'framer-motion';
import { Award, Target, Zap, GraduationCap, Laptop, School } from 'lucide-react';
import profileImage from '../assets/profileniBOss.png';

export const About = () => {
  const stats = [
    { icon: Award, value: '100+', label: 'VIDEOS EDITED', color: '#FF634A' },
    { icon: Target, value: '50+', label: 'HAPPY CLIENTS', color: '#FF634A' },
    { icon: Zap, value: '5+', label: 'YEARS', color: '#FF634A' },
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
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-transparent via-white/40 to-transparent dark:via-[#0a0a14]/40 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40 dark:opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-accent/15 to-transparent dark:from-accent/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-400/15 to-transparent dark:from-purple-500/10 rounded-full blur-[160px]" />
      </div>

      <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span 
              className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-[0.35em] font-bold mb-6 block"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Who I Am
            </motion.span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-1.5 w-24 bg-gradient-to-r from-[#FF634A] to-[#ff7a5c] rounded-full shadow-sm shadow-[#FF634A]/30 mb-10"
            />
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-12 tracking-tighter leading-[0.95]">
              RENIER MAGSIPOC
            </h2>

            <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
              <p>
                I'm a <span className="text-[#FF634A] font-bold">Student Editor</span> and Information Technology student 
                passionate about transforming raw footage into captivating stories. I use my laptop as my creative weapon 
                to deliver high-quality edits.
              </p>

              <p>
                Currently studying at <span className="text-[#FF634A] font-bold">Mindoro State University</span>, 
                I balance my academic life with my passion for video editing, offering budget-friendly services 
                perfect for school projects and more.
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-8">
                <div className="px-4 md:px-6 py-2.5 md:py-3 glass rounded-xl flex items-center gap-2 md:gap-3 hover:shadow-lg transition-all duration-300">
                  <Laptop size={18} className="text-accent" />
                  <span className="font-bold text-xs md:text-sm">Premiere Pro</span>
                </div>
                <div className="px-4 md:px-6 py-2.5 md:py-3 glass rounded-xl flex items-center gap-2 md:gap-3 hover:shadow-lg transition-all duration-300">
                  <Laptop size={18} className="text-accent" />
                  <span className="font-bold text-xs md:text-sm">CapCut Pro</span>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="space-y-5 md:space-y-6 mb-10 md:mb-12">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6 md:mb-8 tracking-tight">EDUCATION</h3>
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
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                      <edu.icon size={18} className="text-accent group-hover:text-white transition-colors" />
                    </div>
                    {index !== education.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 dark:bg-white/10 my-2" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white">{edu.school}</h4>
                    <p className="text-accent font-bold text-xs md:text-sm uppercase tracking-wider mb-1">{edu.level}</p>
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
                  <div className="p-5 sm:p-6 md:p-8 glass group-hover:shadow-2xl group-hover:shadow-accent/15 transition-all duration-300 rounded-xl md:rounded-2xl">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon 
                        size={24} 
                        className="text-gray-600 dark:text-gray-400 group-hover:text-accent transition-colors mb-3 md:mb-4" 
                        strokeWidth={2}
                      />
                    </motion.div>
                    <motion.div 
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-1.5 md:mb-2"
                      whileHover={{ scale: 1.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-[9px] md:text-[10px] lg:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest font-bold">{stat.label}</div>
                  </div>
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-1 rounded-b-xl"
                    style={{ backgroundColor: stat.color }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />
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
              <div className="absolute inset-0 border-8 border-black pointer-events-none" />
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#FF634A]" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#FF634A]" />

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
                className="absolute top-8 right-8 bg-[#FF634A] text-white p-6 font-black rounded-xl shadow-xl"
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
