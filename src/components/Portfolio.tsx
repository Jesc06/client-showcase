import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { X, Play } from 'lucide-react';

/** Video data structure */
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

/** Convert Google Drive link to embed */
const convertToEmbedLink = (driveLink: string): string => {
  const fileIdMatch = driveLink.match(/\/d\/([^/]+)/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
  }
  return driveLink;
};

/** Extract thumbnail from Google Drive */
const getThumbnail = (driveLink: string): string => {
  const fileIdMatch = driveLink.match(/\/d\/([^/]+)/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/thumbnail?id=${fileIdMatch[1]}&sz=w800`;
  }
  return '';
};

/** Portfolio Items */
const portfolioItems: VideoItem[] = [
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

export const getAllVideos = (): VideoItem[] => portfolioItems;

export const getVideosByCategory = (category: VideoItem['category']): VideoItem[] =>
  portfolioItems.filter(item => item.category === category);

export const playVideo = (driveLink: string): void => {
  window.open(driveLink, '_blank');
};

/** Portfolio Component */
export const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<VideoItem | null>(null);
  const [filter, setFilter] = useState<'All' | 'Wedding' | 'Advertisement' | 'Blog' | 'Short Film' | 'Documentary'>('All');
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  const filteredItems = portfolioItems.filter(
    item => filter === 'All' || item.category === filter
  );

  const handleVideoSelect = (item: VideoItem) => {
    setIsVideoLoading(true);
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setIsVideoLoading(true);
  };

  /** Close on ESC */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseModal();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedItem]);

  /** Disable scroll when modal open */
  useEffect(() => {
    document.body.style.overflow = selectedItem ? 'hidden' : 'unset';
  }, [selectedItem]);

  return (
    <section className="py-24 md:py-32 bg-[#fafafa] dark:bg-[#000000] relative">
      <div className="container max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* HEADER */}
        <motion.div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold">Portfolio</h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400">A curated selection of my finest video editing work</p>
        </motion.div>

        {/* FILTER */}
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {['All', 'Wedding', 'Advertisement', 'Blog', 'Short Film', 'Documentary'].map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c as typeof filter)}
              className={`px-6 py-2.5 rounded-full border-2 text-sm ${filter === c ? 'bg-[#0071e3] text-white' : 'border-gray-300'}`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              onClick={() => handleVideoSelect(item)}
            >
              <img src={item.thumbnail} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <Play size={40} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="
              fixed inset-0 bg-black z-50 
              flex items-center justify-center 
              p-0 
              overflow-hidden        /* FIX: no more long scroll */
              md:p-4 lg:p-6 
              md:overflow-auto
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-50 bg-white/10 p-3 rounded-full backdrop-blur-md"
            >
              <X className="text-white" size={24} />
            </button>

            {/* VIDEO CONTAINER */}
            <motion.div
              className="relative w-full h-full md:max-w-6xl md:h-auto rounded-none md:rounded-3xl overflow-hidden bg-black"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >

              {/* FIX: FULLSCREEN MOBILE HEIGHT */}
              <div
                className="
                  relative 
                  w-full 
                  h-[100vh]          /* 👍 Full height mobile */
                  md:h-auto 
                  md:aspect-video 
                  bg-black
                "
              >
                {isVideoLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black">
                    <div className="animate-spin w-12 h-12 border-4 border-white/20 border-t-white rounded-full" />
                  </div>
                )}

                <iframe
                  src={selectedItem.embedLink}
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  onLoad={() => setIsVideoLoading(false)}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
