import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, Maximize2, Play } from 'lucide-react';

/**
 * Video data structure
 * Each video contains:
 * - id: Unique identifier
 * - title: Display name for the video
 * - category: Classification (Wedding, Advertisement, Blog, Short Film, Documentary)
 * - year: Production year
 * - driveLink: Original Google Drive sharing link
 * - embedLink: Converted link for embedding video players
 * - thumbnail: Preview image extracted from Google Drive
 * - description: Brief description of the video content
 */
interface VideoItem {
  id: number;
  title: string;
  category: 'Wedding' | 'Advertisement' | 'Blog' | 'Short Film' | 'Documentary';
  year: string;
  driveLink: string;
  embedLink: string;
  thumbnail: string;
  description: string;
}

/**
 * Utility function to convert Google Drive share link to embeddable format
 * Converts: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * To: https://drive.google.com/file/d/FILE_ID/preview
 */
const convertToEmbedLink = (driveLink: string): string => {
  const fileIdMatch = driveLink.match(/\/d\/([^/]+)/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
  }
  return driveLink;
};

/**
 * Utility function to get thumbnail from Google Drive
 * Uses Google Drive's thumbnail API
 */
const getThumbnail = (driveLink: string): string => {
  const fileIdMatch = driveLink.match(/\/d\/([^/]+)/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/thumbnail?id=${fileIdMatch[1]}&sz=w800`;
  }
  return '';
};

/**
 * Portfolio video collection
 * All videos are organized by category with metadata
 */
const portfolioItems: VideoItem[] = [
  // Wedding Category
  {
    id: 1,
    title: 'Cinematic Wedding Film',
    category: 'Wedding',
    year: '2024',
    driveLink: 'https://drive.google.com/file/d/1c8WStMKnZKbRb6loHOR47JWRjALhgGwp/view?usp=sharing',
    embedLink: convertToEmbedLink('https://drive.google.com/file/d/1c8WStMKnZKbRb6loHOR47JWRjALhgGwp/view?usp=sharing'),
    thumbnail: getThumbnail('https://drive.google.com/file/d/1c8WStMKnZKbRb6loHOR47JWRjALhgGwp/view?usp=sharing'),
    description: 'Multi-cam edit with emotional storytelling and color grading',
  },
  
  // Advertisement Category
  {
    id: 2,
    title: 'Corporate Promo',
    category: 'Advertisement',
    year: '2024',
    driveLink: 'https://drive.google.com/file/d/1O1OPbm78nWRdutHbF0xZJFiR5rW-i3vY/view?usp=sharing',
    embedLink: convertToEmbedLink('https://drive.google.com/file/d/1O1OPbm78nWRdutHbF0xZJFiR5rW-i3vY/view?usp=sharing'),
    thumbnail: getThumbnail('https://drive.google.com/file/d/1O1OPbm78nWRdutHbF0xZJFiR5rW-i3vY/view?usp=sharing'),
    description: 'Dynamic motion graphics with brand integration',
  },
  
  // Blog Category
  {
    id: 3,
    title: 'Travel Vlog Series',
    category: 'Blog',
    year: '2024',
    driveLink: 'https://drive.google.com/file/d/1jedD7o6EZBQWdRg-ha2Nqy-HtG3fRzvl/view?usp=sharing',
    embedLink: convertToEmbedLink('https://drive.google.com/file/d/1jedD7o6EZBQWdRg-ha2Nqy-HtG3fRzvl/view?usp=sharing'),
    thumbnail: getThumbnail('https://drive.google.com/file/d/1jedD7o6EZBQWdRg-ha2Nqy-HtG3fRzvl/view?usp=sharing'),
    description: 'Fast-paced editing with smooth transitions',
  },
  
  // Short Film Category
  {
    id: 4,
    title: 'Short Film',
    category: 'Short Film',
    year: '2024',
    driveLink: 'https://drive.google.com/file/d/1T0FNi_lSlMzgqXtW1_UEWTXS5diqFg7Q/view?usp=sharing',
    embedLink: convertToEmbedLink('https://drive.google.com/file/d/1T0FNi_lSlMzgqXtW1_UEWTXS5diqFg7Q/view?usp=sharing'),
    thumbnail: getThumbnail('https://drive.google.com/file/d/1T0FNi_lSlMzgqXtW1_UEWTXS5diqFg7Q/view?usp=sharing'),
    description: 'Moody color grade with creative transitions',
  },
  {
    id: 5,
    title: 'Event Highlight Reel',
    category: 'Short Film',
    year: '2023',
    driveLink: 'https://drive.google.com/file/d/1PeZgUAh4s5AYgh4_ROodk2qY5jd3dplA/view?usp=sharing',
    embedLink: convertToEmbedLink('https://drive.google.com/file/d/1PeZgUAh4s5AYgh4_ROodk2qY5jd3dplA/view?usp=sharing'),
    thumbnail: getThumbnail('https://drive.google.com/file/d/1PeZgUAh4s5AYgh4_ROodk2qY5jd3dplA/view?usp=sharing'),
    description: 'Energetic cuts with cinematic color treatment',
  },
  
  // Documentary Category

  {
    id: 7,
    title: 'Historical Documentary',
    category: 'Documentary',
    year: '2024',
    driveLink: 'https://drive.google.com/file/d/17q4RVF7uaHxxskKJfRVrL0A9cnTJHqIT/view?usp=sharing',
    embedLink: convertToEmbedLink('https://drive.google.com/file/d/17q4RVF7uaHxxskKJfRVrL0A9cnTJHqIT/view?usp=sharing'),
    thumbnail: getThumbnail('https://drive.google.com/file/d/17q4RVF7uaHxxskKJfRVrL0A9cnTJHqIT/view?usp=sharing'),
    description: 'In-depth storytelling with archival footage',
  },
];

/**
 * Function to get all videos
 * @returns Array of all video items
 */
export const getAllVideos = (): VideoItem[] => {
  return portfolioItems;
};

/**
 * Function to get videos by category
 * @param category - The category to filter by
 * @returns Array of videos in the specified category
 */
export const getVideosByCategory = (category: VideoItem['category']): VideoItem[] => {
  return portfolioItems.filter(item => item.category === category);
};

/**
 * Function to open video in new tab
 * @param driveLink - The Google Drive link to open
 */
export const playVideo = (driveLink: string): void => {
  window.open(driveLink, '_blank');
};

/**
 * Portfolio Component
 * Displays video portfolio with category filtering and premium modal preview
 */
export const Portfolio = () => {
  // State for selected video modal
  const [selectedItem, setSelectedItem] = useState<VideoItem | null>(null);
  
  // State for category filter
  const [filter, setFilter] = useState<'All' | 'Wedding' | 'Advertisement' | 'Blog' | 'Short Film' | 'Documentary'>('All');
  
  // State for hover effects
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // State for video loading
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  /**
   * Filter videos based on selected category
   * Returns all videos if 'All' is selected, otherwise filters by category
   */
  const filteredItems = portfolioItems.filter(
    item => filter === 'All' || item.category === filter
  );

  /**
   * Handle video selection - reset loading state
   */
  const handleVideoSelect = (item: VideoItem) => {
    setIsVideoLoading(true);
    setSelectedItem(item);
  };

  /**
   * Handle modal close - reset states
   */
  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsVideoLoading(true);
  };

  /**
   * Handle ESC key to close modal
   */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedItem) {
        handleCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  /**
   * Prevent body scroll when modal is open
   */
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedItem]);

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
          {['All', 'Wedding', 'Advertisement', 'Blog', 'Short Film', 'Documentary'].map((category, index) => (
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
                y: -16, 
                scale: 1.03
              }}
              className="group relative overflow-hidden cursor-pointer aspect-4/5 glass-card rounded-3xl transition-all shadow-lg hover:shadow-2xl"
              onClick={() => handleVideoSelect(item)}
              style={{ perspective: 1000 }}
            >
              {/* Enhanced shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 dark:via-white/10 to-transparent -translate-x-full z-20"
                animate={hoveredId === item.id ? { x: ['100%', '200%'] } : {}}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
              
              {/* Video Thumbnail */}
              <motion.div
                className="w-full h-full relative bg-gradient-to-br from-gray-900 via-black to-gray-900"
                animate={{
                  scale: hoveredId === item.id ? 1.1 : 1,
                }}
                transition={{ duration: 0.7, ease: [0.28, 0.11, 0.32, 1] }}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Premium fallback with gradient background
                    (e.target as HTMLImageElement).src = `https://via.placeholder.com/800x1000/0a0a0a/ffffff?text=${encodeURIComponent(item.title)}`;
                  }}
                />
                
                {/* Premium Play Button Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[2px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === item.id ? 1 : 0.6 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.15 }}
                    animate={{
                      scale: hoveredId === item.id ? 1.1 : 0.9,
                    }}
                    transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                  >
                    {/* Glow effect behind play button */}
                    <div className="absolute inset-0 bg-white/30 dark:bg-blue-500/30 rounded-full blur-xl" />
                    
                    {/* Play button */}
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 dark:bg-white/90 backdrop-blur-md flex items-center justify-center border-2 border-white/50 shadow-2xl">
                      <Play className="text-black dark:text-black ml-1" size={28} fill="currentColor" />
                    </div>
                  </motion.div>
                </motion.div>

                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              </motion.div>

              {/* Enhanced Overlay */}
              <motion.div
                className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent"
                initial={{ opacity: 0.7 }}
                animate={{ opacity: hoveredId === item.id ? 0.9 : 0.7 }}
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

      {/* Premium Video Player Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center p-0 md:p-4 lg:p-6"
            onClick={handleCloseModal}
          >
            {/* Close Button - Premium Style */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.2 }}
              onClick={handleCloseModal}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all group"
            >
              <X className="text-white group-hover:rotate-90 transition-transform duration-300" size={20} />
            </motion.button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="relative w-full h-full md:h-auto md:max-w-7xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Premium Video Container */}
              <div className="relative w-full h-full md:h-auto md:rounded-3xl overflow-hidden bg-black shadow-2xl">
                {/* Video Player - Full Screen on Mobile, Responsive on Desktop */}
                <div className="relative w-full h-full md:h-auto md:aspect-video bg-black">
                  {/* Loading Spinner - Premium Style */}
                  {isVideoLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center bg-black z-10"
                    >
                      <div className="relative">
                        {/* Spinning ring */}
                        <div className="w-16 h-16 border-4 border-white/10 border-t-white rounded-full animate-spin" />
                        {/* Inner glow */}
                        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-white/50 rounded-full animate-spin blur-sm" />
                      </div>
                    </motion.div>
                  )}

                  <iframe
                    src={selectedItem.embedLink}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                    title={selectedItem.title}
                    style={{ border: 'none' }}
                    onLoad={() => setIsVideoLoading(false)}
                  />
                  
                  {/* Subtle gradient overlay on edges for premium feel */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 md:rounded-3xl" />
                </div>
                
                {/* Premium Video Info Overlay - Hidden on Mobile, Shown on Desktop */}
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="hidden md:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent p-6 md:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase rounded-full tracking-wider">
                          {selectedItem.category}
                        </span>
                        <span className="text-white/60 text-sm font-medium">{selectedItem.year}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight">
                        {selectedItem.title}
                      </h3>
                      <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl">
                        {selectedItem.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Mobile Info Panel - Shown below video on mobile */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="md:hidden bg-black p-6 border-t border-white/10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase rounded-full tracking-wider">
                    {selectedItem.category}
                  </span>
                  <span className="text-white/60 text-sm font-medium">{selectedItem.year}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                  {selectedItem.title}
                </h3>
                <p className="text-base text-white/80 leading-relaxed">
                  {selectedItem.description}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
