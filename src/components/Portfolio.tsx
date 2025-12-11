import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

const portfolioItems = [
  {
    id: 1,
    title: 'Cinematic Wedding Film',
    category: 'Video Editing',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop',
    description: 'Multi-cam edit with emotional storytelling and color grading',
  },
  {
    id: 2,
    title: 'Corporate Promo',
    category: 'Motion Graphics',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=1000&fit=crop',
    description: 'Dynamic motion graphics with brand integration',
  },
  {
    id: 3,
    title: 'Music Video',
    category: 'Color Grading',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=1000&fit=crop',
    description: 'Moody color grade with creative transitions',
  },
  {
    id: 4,
    title: 'Travel Vlog Series',
    category: 'Video Editing',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=1000&fit=crop',
    description: 'Fast-paced editing with smooth transitions',
  },
  {
    id: 5,
    title: 'Documentary Short',
    category: 'Video Editing',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=1000&fit=crop',
    description: 'Narrative-driven edit with interview integration',
  },
  {
    id: 6,
    title: 'Product Showcase',
    category: 'Motion Graphics',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=1000&fit=crop',
    description: 'Sleek animations with product highlights',
  },
  {
    id: 7,
    title: 'Social Media Content',
    category: 'Video Editing',
    year: '2024',
    thumbnail: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=1000&fit=crop',
    description: 'Vertical format edits optimized for engagement',
  },
  {
    id: 8,
    title: 'Event Highlight Reel',
    category: 'Color Grading',
    year: '2023',
    thumbnail: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=1000&fit=crop',
    description: 'Energetic cuts with cinematic color treatment',
  },
];

export const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);
  const [filter, setFilter] = useState<'All' | 'Video Editing' | 'Motion Graphics' | 'Color Grading'>('All');
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredItems = portfolioItems.filter(
    item => filter === 'All' || item.category === filter
  );

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
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1d1d1f] dark:text-[#f5f5f7] tracking-tight leading-tight mb-4">
            Portfolio
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A curated selection of my finest video editing work
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {['All', 'Video Editing', 'Motion Graphics', 'Color Grading'].map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category as typeof filter)}
              className={`relative px-5 md:px-6 py-2.5 md:py-3 rounded-full border-2 transition-all overflow-hidden font-medium tracking-wide text-xs md:text-sm backdrop-blur-sm ${
                filter === category
                  ? 'bg-[#0071e3] dark:bg-[#2997ff] border-[#0071e3] dark:border-[#2997ff] text-white shadow-lg shadow-[#0071e3]/20 dark:shadow-[#2997ff]/20'
                  : 'glass border-gray-200/50 dark:border-white/10 hover:border-[#0071e3] dark:hover:border-[#2997ff] hover:text-[#0071e3] dark:hover:text-[#2997ff] hover:shadow-md'
              }`}
            >
              <span className="relative z-10 font-bold uppercase tracking-wider">{category}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08,
                ease: "easeOut"
              }}
              onHoverStart={() => setHoveredId(item.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ 
                y: -12, 
                scale: 1.02
              }}
              className="group relative overflow-hidden cursor-pointer aspect-4/5 bg-white dark:bg-white/5 rounded-2xl md:rounded-3xl border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all hover:shadow-lg"
              onClick={() => setSelectedItem(item)}
            >
              {/* Premium shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full"
                animate={hoveredId === item.id ? { x: ['100%', '200%'] } : {}}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
              />
              {/* Image */}
              <motion.img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover"
                animate={{
                  scale: hoveredId === item.id ? 1.15 : 1,
                }}
                transition={{ duration: 0.6 }}
              />

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-linear-to-t from-black/95 via-black/30 to-transparent"
                initial={{ opacity: 0.65 }}
                animate={{ opacity: hoveredId === item.id ? 0.85 : 0.65 }}
              />

              {/* Content */}
              <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <motion.span 
                    className="px-2.5 md:px-3 py-1 bg-white/10 dark:bg-white/20 text-white text-[9px] md:text-[10px] font-medium uppercase tracking-wider rounded-full backdrop-blur-md border border-white/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.category}
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoveredId === item.id ? 1 : 0,
                      scale: hoveredId === item.id ? 1 : 0.8,
                    }}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full glass flex items-center justify-center"
                  >
                    <Maximize2 className="text-white" size={14} />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ y: 10, opacity: 0.8 }}
                  animate={{
                    y: hoveredId === item.id ? 0 : 10,
                    opacity: 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-[9px] md:text-[10px] text-gray-300 uppercase tracking-widest mb-1.5 md:mb-2 font-medium">{item.year}</div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-xs md:text-sm text-gray-300 mt-1.5 md:mt-2 line-clamp-2">{item.description}</p>
                  <div className="w-10 md:w-12 h-0.5 bg-[#0071e3] dark:bg-[#2997ff] mt-2.5 md:mt-3" />
                </motion.div>
              </div>

              {/* Corner Lines */}
              <motion.div
                className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#0071e3] dark:border-[#2997ff] rounded-tl-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: hoveredId === item.id ? 1 : 0,
                  scale: hoveredId === item.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#0071e3] dark:border-[#2997ff] rounded-br-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: hoveredId === item.id ? 1 : 0,
                  scale: hoveredId === item.id ? 1 : 0,
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/98 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative max-w-7xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-16 right-0 p-3 bg-[#0071e3] dark:bg-[#2997ff] text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all rounded-xl shadow-lg hover:shadow-xl border-2 border-[#0071e3] dark:border-[#2997ff] hover:border-black dark:hover:border-white"
              >
                <X size={24} />
              </button>
              <img
                src={selectedItem.thumbnail}
                alt={selectedItem.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="mt-6 p-6 bg-white dark:bg-[#111] border-l-4 border-[#0071e3] dark:border-[#2997ff]">
                <div className="flex items-center gap-4 mb-2">
                  <span className="px-3 py-1 bg-[#0071e3] dark:bg-[#2997ff] text-white text-xs font-semibold uppercase">
                    {selectedItem.category}
                  </span>
                  <span className="text-gray-600 dark:text-gray-500 text-sm">{selectedItem.year}</span>
                </div>
                <h3 className="text-4xl font-black text-black dark:text-white mb-3">{selectedItem.title}</h3>
                <p className="text-lg text-gray-700 dark:text-gray-400">{selectedItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
