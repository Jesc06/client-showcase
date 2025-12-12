/**
 * Video Manager Utility
 * 
 * This module provides comprehensive video management functionality for the portfolio.
 * It includes utilities for organizing videos by category, converting Google Drive links,
 * and managing video playback.
 */

/**
 * Video data structure interface
 */
export interface VideoItem {
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
 * Video category type for filtering
 */
export type VideoCategory = VideoItem['category'] | 'All';

/**
 * Utility function to convert Google Drive share link to embeddable format
 * 
 * This function extracts the file ID from a Google Drive sharing link and
 * converts it to an embeddable preview URL that can be used in an iframe.
 * 
 * @param driveLink - The original Google Drive sharing link
 * @returns The converted embeddable link
 * 
 * @example
 * const shareLink = 'https://drive.google.com/file/d/ABC123/view?usp=sharing';
 * const embedLink = convertToEmbedLink(shareLink);
 * // Returns: 'https://drive.google.com/file/d/ABC123/preview'
 */
export const convertToEmbedLink = (driveLink: string): string => {
  const fileIdMatch = driveLink.match(/\/d\/([^/]+)/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
  }
  return driveLink;
};

/**
 * Utility function to get thumbnail image from Google Drive
 * 
 * Uses Google Drive's thumbnail API to generate a preview image.
 * The thumbnail size is set to 800px width for optimal quality.
 * 
 * @param driveLink - The original Google Drive sharing link
 * @returns The thumbnail image URL
 * 
 * @example
 * const shareLink = 'https://drive.google.com/file/d/ABC123/view?usp=sharing';
 * const thumbnail = getThumbnail(shareLink);
 * // Returns: 'https://drive.google.com/thumbnail?id=ABC123&sz=w800'
 */
export const getThumbnail = (driveLink: string): string => {
  const fileIdMatch = driveLink.match(/\/d\/([^/]+)/);
  if (fileIdMatch && fileIdMatch[1]) {
    return `https://drive.google.com/thumbnail?id=${fileIdMatch[1]}&sz=w800`;
  }
  return '';
};

/**
 * Function to open video in a new browser tab
 * 
 * Opens the original Google Drive link in a new tab, allowing users
 * to view the video directly in Google Drive with full controls.
 * 
 * @param driveLink - The Google Drive link to open
 * 
 * @example
 * playVideo('https://drive.google.com/file/d/ABC123/view?usp=sharing');
 */
export const playVideo = (driveLink: string): void => {
  window.open(driveLink, '_blank', 'noopener,noreferrer');
};

/**
 * Function to get all videos
 * 
 * Returns the complete collection of all videos in the portfolio,
 * regardless of category.
 * 
 * @param videos - Array of all video items
 * @returns Complete array of all videos
 * 
 * @example
 * const allVideos = getAllVideos(portfolioItems);
 * console.log(`Total videos: ${allVideos.length}`);
 */
export const getAllVideos = (videos: VideoItem[]): VideoItem[] => {
  return videos;
};

/**
 * Function to get videos filtered by category
 * 
 * Filters the video collection to return only videos matching
 * the specified category. Useful for category-specific displays.
 * 
 * @param videos - Array of all video items
 * @param category - The category to filter by
 * @returns Array of videos in the specified category
 * 
 * @example
 * const weddingVideos = getVideosByCategory(portfolioItems, 'Wedding');
 * const documentaries = getVideosByCategory(portfolioItems, 'Documentary');
 */
export const getVideosByCategory = (
  videos: VideoItem[],
  category: Exclude<VideoCategory, 'All'>
): VideoItem[] => {
  return videos.filter(item => item.category === category);
};

/**
 * Function to get unique categories from video collection
 * 
 * Extracts all unique categories present in the video collection.
 * Useful for dynamically generating category filters.
 * 
 * @param videos - Array of all video items
 * @returns Array of unique category names
 * 
 * @example
 * const categories = getCategories(portfolioItems);
 * // Returns: ['Wedding', 'Advertisement', 'Blog', 'Short Film', 'Documentary']
 */
export const getCategories = (videos: VideoItem[]): Array<Exclude<VideoCategory, 'All'>> => {
  const categories = new Set(videos.map(video => video.category));
  return Array.from(categories);
};

/**
 * Function to get video count by category
 * 
 * Returns an object with the count of videos in each category.
 * Useful for displaying statistics or category badges.
 * 
 * @param videos - Array of all video items
 * @returns Object mapping categories to their video counts
 * 
 * @example
 * const counts = getVideoCounts(portfolioItems);
 * // Returns: { Wedding: 1, Advertisement: 1, Blog: 1, ... }
 */
export const getVideoCounts = (videos: VideoItem[]): Record<string, number> => {
  return videos.reduce((acc, video) => {
    acc[video.category] = (acc[video.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
};

/**
 * Function to search videos by title or description
 * 
 * Performs a case-insensitive search across video titles and descriptions.
 * Returns all videos that match the search query.
 * 
 * @param videos - Array of all video items
 * @param searchQuery - The search term to look for
 * @returns Array of videos matching the search query
 * 
 * @example
 * const results = searchVideos(portfolioItems, 'cinematic');
 * // Returns all videos with 'cinematic' in title or description
 */
export const searchVideos = (videos: VideoItem[], searchQuery: string): VideoItem[] => {
  const query = searchQuery.toLowerCase();
  return videos.filter(
    video =>
      video.title.toLowerCase().includes(query) ||
      video.description.toLowerCase().includes(query)
  );
};

/**
 * Function to sort videos by year
 * 
 * Sorts videos by their production year in descending order (newest first)
 * or ascending order (oldest first).
 * 
 * @param videos - Array of all video items
 * @param order - Sort order: 'desc' for newest first, 'asc' for oldest first
 * @returns Sorted array of videos
 * 
 * @example
 * const newestFirst = sortVideosByYear(portfolioItems, 'desc');
 * const oldestFirst = sortVideosByYear(portfolioItems, 'asc');
 */
export const sortVideosByYear = (
  videos: VideoItem[],
  order: 'asc' | 'desc' = 'desc'
): VideoItem[] => {
  return [...videos].sort((a, b) => {
    const yearA = parseInt(a.year);
    const yearB = parseInt(b.year);
    return order === 'desc' ? yearB - yearA : yearA - yearB;
  });
};

/**
 * Function to get a random selection of videos
 * 
 * Returns a random subset of videos from the collection.
 * Useful for featured videos or random showcases.
 * 
 * @param videos - Array of all video items
 * @param count - Number of random videos to return
 * @returns Array of randomly selected videos
 * 
 * @example
 * const featuredVideos = getRandomVideos(portfolioItems, 3);
 * // Returns 3 random videos from the collection
 */
export const getRandomVideos = (videos: VideoItem[], count: number): VideoItem[] => {
  const shuffled = [...videos].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, videos.length));
};
