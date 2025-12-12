# Video Portfolio System Documentation

## Overview

This portfolio system manages and displays video content from Google Drive, organized by categories. The system includes automatic video organization, thumbnail generation, embedded playback, and external link opening.

## Features

✅ **Automatic Video Organization**
- Videos are categorized into: Wedding, Advertisement, Blog, Short Film, and Documentary
- Dynamic filtering by category with "All" option
- Easy to add or modify videos

✅ **Video Storage & Metadata**
- Each video includes: Category, Title, Year, Description, Google Drive Link
- Automatic conversion of Google Drive links to embeddable format
- Automatic thumbnail generation from Google Drive

✅ **Playback Functions**
- Embedded video player in modal (plays directly on the page)
- "Open in Google Drive" button for full Google Drive experience
- Responsive video player that works on all devices

✅ **User Interface**
- Hover effects with play button overlay
- Smooth animations and transitions
- Category filtering with visual feedback
- Dark mode support

## File Structure

```
src/
├── components/
│   └── Portfolio.tsx          # Main portfolio component with UI
└── utils/
    └── videoManager.ts        # Video management utilities
```

## How to Use

### Adding New Videos

1. **Get the Google Drive Link**
   - Upload your video to Google Drive
   - Right-click → Share → Copy link
   - Make sure link sharing is enabled (Anyone with the link can view)

2. **Add Video to Portfolio**
   
   Open `src/components/Portfolio.tsx` and add a new object to the `portfolioItems` array:

   ```typescript
   {
     id: 8, // Increment from last ID
     title: 'Your Video Title',
     category: 'Wedding', // or 'Advertisement', 'Blog', 'Short Film', 'Documentary'
     year: '2024',
     driveLink: 'https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing',
     embedLink: convertToEmbedLink('https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing'),
     thumbnail: getThumbnail('https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing'),
     description: 'Brief description of your video',
   }
   ```

### Available Functions

The `videoManager.ts` utility provides several helper functions:

#### 1. **getAllVideos(videos)**
Returns all videos in the portfolio.

```typescript
const allVideos = getAllVideos(portfolioItems);
console.log(`Total videos: ${allVideos.length}`);
```

#### 2. **getVideosByCategory(videos, category)**
Returns videos filtered by category.

```typescript
const weddingVideos = getVideosByCategory(portfolioItems, 'Wedding');
const documentaries = getVideosByCategory(portfolioItems, 'Documentary');
```

#### 3. **playVideo(driveLink)**
Opens the video in a new browser tab.

```typescript
playVideo('https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing');
```

#### 4. **convertToEmbedLink(driveLink)**
Converts a Google Drive sharing link to an embeddable format.

```typescript
const embedLink = convertToEmbedLink(shareLink);
// Input:  https://drive.google.com/file/d/ABC123/view?usp=sharing
// Output: https://drive.google.com/file/d/ABC123/preview
```

#### 5. **getThumbnail(driveLink)**
Generates a thumbnail URL from a Google Drive link.

```typescript
const thumbnail = getThumbnail(shareLink);
// Returns: https://drive.google.com/thumbnail?id=ABC123&sz=w800
```

#### 6. **searchVideos(videos, searchQuery)**
Search videos by title or description.

```typescript
const results = searchVideos(portfolioItems, 'wedding');
```

#### 7. **sortVideosByYear(videos, order)**
Sort videos by year.

```typescript
const newestFirst = sortVideosByYear(portfolioItems, 'desc');
const oldestFirst = sortVideosByYear(portfolioItems, 'asc');
```

#### 8. **getRandomVideos(videos, count)**
Get random videos for featured sections.

```typescript
const featured = getRandomVideos(portfolioItems, 3);
```

## Current Video Inventory

### Wedding (1 video)
- Cinematic Wedding Film (2024)

### Advertisement (1 video)
- Corporate Promo (2024)

### Blog (1 video)
- Travel Vlog Series (2024)

### Short Film (2 videos)
- Music Video (2024)
- Event Highlight Reel (2023)

### Documentary (2 videos)
- Documentary Short (2023)
- Historical Documentary (2024)

**Total: 7 videos**

## Technical Details

### Google Drive Integration

The system uses Google Drive's public API endpoints:

1. **Embed Format**: `/file/d/FILE_ID/preview`
   - Used for iframe embedding
   - Provides basic playback controls
   - Works on most browsers

2. **Thumbnail Format**: `/thumbnail?id=FILE_ID&sz=w800`
   - Generates preview image
   - Size set to 800px width for quality
   - Falls back to placeholder if unavailable

### Video Display Flow

1. User visits portfolio page
2. Thumbnails are loaded from Google Drive
3. User can filter by category
4. Clicking a video opens modal with embedded player
5. Video plays directly in the modal
6. "Open in Google Drive" button provides full access

### Responsive Design

- **Desktop**: Grid layout with 3 columns
- **Tablet**: Grid layout with 2 columns
- **Mobile**: Single column layout
- **All devices**: Responsive video player with 16:9 aspect ratio

## Customization

### Change Categories

To add or modify categories, update the `VideoItem` interface in `Portfolio.tsx`:

```typescript
category: 'Wedding' | 'Advertisement' | 'Blog' | 'Short Film' | 'Documentary' | 'YourNewCategory';
```

Then update the filter buttons array.

### Change Styling

The component uses Tailwind CSS classes. Key styling elements:

- **Colors**: Blue theme (`#0071e3` / `#2997ff`)
- **Animations**: Framer Motion for smooth transitions
- **Glass Effect**: Backdrop blur with transparency
- **Dark Mode**: Full dark mode support

### Add Search Functionality

Use the `searchVideos` function from `videoManager.ts`:

```typescript
import { searchVideos } from '../utils/videoManager';

const [searchQuery, setSearchQuery] = useState('');
const searchResults = searchVideos(portfolioItems, searchQuery);
```

## Troubleshooting

### Video Not Playing
- Ensure the Google Drive link has sharing enabled
- Check if the file is a video format (MP4, MOV, etc.)
- Verify the link follows the correct format

### Thumbnail Not Loading
- Google Drive may restrict thumbnail access
- The system will fallback to a placeholder image
- Ensure the file exists and is accessible

### Embed Not Working
- Some browsers block embedded content
- Check browser console for errors
- Try opening in Google Drive directly

## Performance Tips

1. **Optimize Video Files**: Keep file sizes reasonable (under 500MB recommended)
2. **Use Compression**: Compress videos before uploading to Google Drive
3. **Lazy Loading**: Thumbnails load on-demand as user scrolls
4. **Caching**: Browser caches thumbnails for faster subsequent loads

## Future Enhancements

Potential features to add:

- [ ] Advanced search with filters
- [ ] Video duration display
- [ ] View count tracking
- [ ] Related videos suggestions
- [ ] Video playlists
- [ ] Download option
- [ ] Share to social media
- [ ] Video comments/feedback
- [ ] Admin panel for easy video management
- [ ] Analytics dashboard

## Support

For questions or issues:
1. Check this documentation
2. Review the code comments in `Portfolio.tsx` and `videoManager.ts`
3. Inspect browser console for errors
4. Verify Google Drive links are accessible

---

**Last Updated**: December 12, 2025  
**Version**: 1.0.0
