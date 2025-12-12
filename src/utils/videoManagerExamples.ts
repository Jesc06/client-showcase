/**
 * Video Manager Usage Examples
 * 
 * This file demonstrates how to use the video management utilities
 * in different scenarios throughout your application.
 */

import {
  getAllVideos,
  getVideosByCategory,
  searchVideos,
  sortVideosByYear,
  getRandomVideos,
  getCategories,
  getVideoCounts,
  type VideoItem,
} from './videoManager';

// Sample video data (you would import this from your Portfolio component)
const sampleVideos: VideoItem[] = [
  {
    id: 1,
    title: 'Cinematic Wedding Film',
    category: 'Wedding',
    year: '2024',
    driveLink: 'https://drive.google.com/file/d/1c8WStMKnZKbRb6loHOR47JWRjALhgGwp/view?usp=sharing',
    embedLink: 'https://drive.google.com/file/d/1c8WStMKnZKbRb6loHOR47JWRjALhgGwp/preview',
    thumbnail: 'https://drive.google.com/thumbnail?id=1c8WStMKnZKbRb6loHOR47JWRjALhgGwp&sz=w800',
    description: 'Multi-cam edit with emotional storytelling and color grading',
  },
  // ... more videos
];

// ============================================================================
// EXAMPLE 1: Get All Videos
// ============================================================================
console.log('=== Example 1: Get All Videos ===');
const allVideos = getAllVideos(sampleVideos);
console.log(`Total videos in portfolio: ${allVideos.length}`);
console.log(allVideos);

// ============================================================================
// EXAMPLE 2: Filter Videos by Category
// ============================================================================
console.log('\n=== Example 2: Filter by Category ===');

// Get all wedding videos
const weddingVideos = getVideosByCategory(sampleVideos, 'Wedding');
console.log(`Wedding videos: ${weddingVideos.length}`);

// Get all documentaries
const documentaries = getVideosByCategory(sampleVideos, 'Documentary');
console.log(`Documentary videos: ${documentaries.length}`);

// Get all advertisements
const ads = getVideosByCategory(sampleVideos, 'Advertisement');
console.log(`Advertisement videos: ${ads.length}`);

// ============================================================================
// EXAMPLE 3: Search Videos
// ============================================================================
console.log('\n=== Example 3: Search Videos ===');

// Search for videos with "cinematic" in title or description
const cinematicVideos = searchVideos(sampleVideos, 'cinematic');
console.log(`Videos matching "cinematic": ${cinematicVideos.length}`);

// Search for videos about editing
const editingVideos = searchVideos(sampleVideos, 'edit');
console.log(`Videos about editing: ${editingVideos.length}`);

// ============================================================================
// EXAMPLE 4: Sort Videos by Year
// ============================================================================
console.log('\n=== Example 4: Sort Videos ===');

// Get newest videos first
const newestFirst = sortVideosByYear(sampleVideos, 'desc');
console.log('Newest videos first:');
newestFirst.forEach((v: VideoItem) => console.log(`- ${v.title} (${v.year})`));

// Get oldest videos first
const oldestFirst = sortVideosByYear(sampleVideos, 'asc');
console.log('\nOldest videos first:');
oldestFirst.forEach((v: VideoItem) => console.log(`- ${v.title} (${v.year})`));

// ============================================================================
// EXAMPLE 5: Get Random Videos (Featured Section)
// ============================================================================
console.log('\n=== Example 5: Featured/Random Videos ===');

// Get 3 random videos for a featured section
const featuredVideos = getRandomVideos(sampleVideos, 3);
console.log('Featured videos:');
featuredVideos.forEach((v: VideoItem) => console.log(`- ${v.title}`));

// ============================================================================
// EXAMPLE 6: Get All Categories
// ============================================================================
console.log('\n=== Example 6: Get Categories ===');

const categories = getCategories(sampleVideos);
console.log('Available categories:', categories);

// ============================================================================
// EXAMPLE 7: Get Video Counts by Category
// ============================================================================
console.log('\n=== Example 7: Video Counts ===');

const counts = getVideoCounts(sampleVideos);
console.log('Videos per category:');
Object.entries(counts).forEach(([category, count]) => {
  console.log(`- ${category}: ${count} video${count !== 1 ? 's' : ''}`);
});

// ============================================================================
// EXAMPLE 8: Open Video in New Tab
// ============================================================================
console.log('\n=== Example 8: Play Video ===');

// Example usage: call playVideo(driveLink) directly
console.log('Example: playVideo("https://drive.google.com/...") to open a video');

// ============================================================================
// EXAMPLE 9: Building a Custom Component
// ============================================================================
console.log('\n=== Example 9: Custom Component Example ===');

/**
 * Example: Featured Videos Component
 * 
 * This shows how you might use these utilities to build
 * a custom featured videos section
 */
function FeaturedVideosExample() {
  // Get 3 random videos
  const featured = getRandomVideos(sampleVideos, 3);
  
  // Sort by year to show newest
  const newest = sortVideosByYear(featured, 'desc');
  
  console.log('Featured section would display:');
  newest.forEach((video: VideoItem, index: number) => {
    console.log(`${index + 1}. ${video.title} (${video.year}) - ${video.category}`);
  });
  
  return newest;
}

FeaturedVideosExample();

// ============================================================================
// EXAMPLE 10: Category Statistics Dashboard
// ============================================================================
console.log('\n=== Example 10: Statistics Dashboard ===');

function displayStatistics() {
  const total = getAllVideos(sampleVideos).length;
  const counts = getVideoCounts(sampleVideos);
  const categories = getCategories(sampleVideos);
  
  console.log('📊 Portfolio Statistics:');
  console.log(`Total Videos: ${total}`);
  console.log(`Categories: ${categories.length}`);
  console.log('\nBreakdown:');
  
  Object.entries(counts)
    .sort(([, a]: [string, number], [, b]: [string, number]) => b - a) // Sort by count descending
    .forEach(([category, count]: [string, number]) => {
      const percentage = ((count / total) * 100).toFixed(1);
      console.log(`  ${category}: ${count} (${percentage}%)`);
    });
}

displayStatistics();

// ============================================================================
// EXAMPLE 11: Smart Search with Multiple Filters
// ============================================================================
console.log('\n=== Example 11: Advanced Search ===');

function advancedSearch(
  query: string,
  category?: VideoItem['category'],
  year?: string
) {
  let results = getAllVideos(sampleVideos);
  
  // Filter by search query
  if (query) {
    results = searchVideos(results, query);
  }
  
  // Filter by category
  if (category) {
    results = getVideosByCategory(results, category);
  }
  
  // Filter by year
  if (year) {
    results = results.filter((v: VideoItem) => v.year === year);
  }
  
  return results;
}

// Example searches
console.log('Search "edit" in Wedding category:');
const searchResults1 = advancedSearch('edit', 'Wedding');
console.log(`Found: ${searchResults1.length} video(s)`);

console.log('\nSearch videos from 2024:');
const searchResults2 = advancedSearch('', undefined, '2024');
console.log(`Found: ${searchResults2.length} video(s)`);

// ============================================================================
// EXAMPLE 12: React Component Integration
// ============================================================================
console.log('\n=== Example 12: React Component Pattern ===');

/**
 * Example React component showing how to integrate the utilities
 */
const ReactComponentExample = `
import { useState, useEffect } from 'react';
import {
  getAllVideos,
  getVideosByCategory,
  searchVideos,
  type VideoItem,
  type VideoCategory
} from './utils/videoManager';

export const VideoGallery = ({ videos }: { videos: VideoItem[] }) => {
  const [filter, setFilter] = useState<VideoCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayVideos, setDisplayVideos] = useState<VideoItem[]>(videos);

  useEffect(() => {
    let filtered = getAllVideos(videos);
    
    // Apply category filter
    if (filter !== 'All') {
      filtered = getVideosByCategory(filtered, filter);
    }
    
    // Apply search filter
    if (searchQuery) {
      filtered = searchVideos(filtered, searchQuery);
    }
    
    setDisplayVideos(filtered);
  }, [filter, searchQuery, videos]);

  return (
    <div>
      <input 
        type="text"
        placeholder="Search videos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
      <select value={filter} onChange={(e) => setFilter(e.target.value as VideoCategory)}>
        <option value="All">All Categories</option>
        <option value="Wedding">Wedding</option>
        <option value="Advertisement">Advertisement</option>
        <option value="Blog">Blog</option>
        <option value="Short Film">Short Film</option>
        <option value="Documentary">Documentary</option>
      </select>
      
      <div className="video-grid">
        {displayVideos.map(video => (
          <div key={video.id}>
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
`;

console.log('React Component Example:');
console.log(ReactComponentExample);

// ============================================================================
// Export examples for use in other files
// ============================================================================
export {
  // Re-export utilities
  getAllVideos,
  getVideosByCategory,
  searchVideos,
  sortVideosByYear,
  getRandomVideos,
  
  // Export example functions
  FeaturedVideosExample,
  displayStatistics,
  advancedSearch,
};
