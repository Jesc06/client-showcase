# Quick Reference Guide - Video Portfolio

## 🎯 Common Tasks

### Adding a New Video

1. **Get your Google Drive link**
   ```
   Right-click video in Google Drive → Share → Copy link
   Ensure: "Anyone with the link can view"
   ```

2. **Add to Portfolio.tsx** (around line 66-130)
   ```typescript
   {
     id: 8,
     title: 'My New Video',
     category: 'Wedding', // or Advertisement, Blog, Short Film, Documentary
     year: '2025',
     driveLink: 'YOUR_GOOGLE_DRIVE_LINK_HERE',
     embedLink: convertToEmbedLink('YOUR_GOOGLE_DRIVE_LINK_HERE'),
     thumbnail: getThumbnail('YOUR_GOOGLE_DRIVE_LINK_HERE'),
     description: 'What this video is about',
   }
   ```

3. **Save the file** - That's it! ✅

---

### Changing Video Details

**To change a title:**
```typescript
title: 'New Title Here',
```

**To change description:**
```typescript
description: 'New description here',
```

**To change year:**
```typescript
year: '2025',
```

**To change category:**
```typescript
category: 'Documentary', // Wedding, Advertisement, Blog, Short Film, Documentary
```

---

### Finding Your Videos in Code

All videos are in: `src/components/Portfolio.tsx`

Look for the `portfolioItems` array (starts around line 66)

Each video looks like:
```typescript
{
  id: 1,
  title: 'Video Title',
  category: 'Category',
  year: '2024',
  driveLink: 'https://...',
  embedLink: 'https://...',
  thumbnail: 'https://...',
  description: 'Description',
}
```

---

### Google Drive Link Format

**What you copy from Google Drive:**
```
https://drive.google.com/file/d/1c8WStMKnZKbRb6loHOR47JWRjALhgGwp/view?usp=sharing
```

**What to paste in the code:**
Use the SAME link in all three places:
- `driveLink:` - Paste directly
- `embedLink: convertToEmbedLink('PASTE_HERE')`
- `thumbnail: getThumbnail('PASTE_HERE')`

The functions automatically convert it to the right format!

---

### Categories Available

Choose one of these for each video:
- `'Wedding'`
- `'Advertisement'`
- `'Blog'`
- `'Short Film'`
- `'Documentary'`

**Want to add a new category?**
1. Update line 23 to include your new category
2. Add a button in the filter section (around line 207)

---

### Current Video List

| ID | Title | Category | Year |
|----|-------|----------|------|
| 1 | Cinematic Wedding Film | Wedding | 2024 |
| 2 | Corporate Promo | Advertisement | 2024 |
| 3 | Travel Vlog Series | Blog | 2024 |
| 4 | Music Video | Short Film | 2024 |
| 5 | Event Highlight Reel | Short Film | 2023 |
| 6 | Documentary Short | Documentary | 2023 |
| 7 | Historical Documentary | Documentary | 2024 |

**Next available ID: 8**

---

### Removing a Video

Simply delete the entire video object from the array, including the curly braces:

**Before:**
```typescript
{
  id: 5,
  title: 'Remove This',
  // ... rest of the video
},
{
  id: 6,
  title: 'Keep This',
  // ...
}
```

**After:**
```typescript
{
  id: 6,
  title: 'Keep This',
  // ...
}
```

---

### Troubleshooting

**Video not showing?**
- Check if Google Drive link has sharing enabled
- Verify the link format is correct
- Make sure you saved the file

**Thumbnail not loading?**
- Will show placeholder automatically
- Check if video file exists in Google Drive
- Ensure link is accessible

**Video won't play?**
- Click "Open in Google Drive" button as alternative
- Check browser console for errors
- Try the video link directly in browser

**Filter not working?**
- Make sure category name matches exactly (case-sensitive)
- Check spelling: 'Wedding', 'Advertisement', 'Blog', 'Short Film', 'Documentary'

---

### File Locations

```
client-showcase/
├── src/
│   ├── components/
│   │   └── Portfolio.tsx          ← Main file - add/edit videos here
│   └── utils/
│       ├── videoManager.ts        ← Utility functions
│       └── videoManagerExamples.ts ← Code examples
├── VIDEO_SYSTEM_DOCS.md           ← Full documentation
└── IMPLEMENTATION_SUMMARY.md      ← Overview
```

---

### Testing Your Changes

1. Save the file
2. Refresh your browser
3. Check if video appears in portfolio
4. Try clicking it to play
5. Test category filter

---

### Utility Functions (Optional)

Available in `videoManager.ts`:

```typescript
// Get all videos
getAllVideos(portfolioItems)

// Get videos by category
getVideosByCategory(portfolioItems, 'Wedding')

// Search videos
searchVideos(portfolioItems, 'cinematic')

// Sort by year
sortVideosByYear(portfolioItems, 'desc')

// Get random videos
getRandomVideos(portfolioItems, 3)
```

---

### Need Help?

1. Check [VIDEO_SYSTEM_DOCS.md](VIDEO_SYSTEM_DOCS.md) for detailed docs
2. Look at [videoManagerExamples.ts](src/utils/videoManagerExamples.ts) for code examples
3. Review existing videos in [Portfolio.tsx](src/components/Portfolio.tsx)

---

## 🎬 Quick Copy-Paste Template

```typescript
{
  id: 8, // Change to next number
  title: 'Video Title',
  category: 'Wedding',
  year: '2024',
  driveLink: 'https://drive.google.com/file/d/FILE_ID/view?usp=sharing',
  embedLink: convertToEmbedLink('https://drive.google.com/file/d/FILE_ID/view?usp=sharing'),
  thumbnail: getThumbnail('https://drive.google.com/file/d/FILE_ID/view?usp=sharing'),
  description: 'Brief description',
},
```

**Remember to:**
- ✅ Increment the ID number
- ✅ Replace FILE_ID in all three link places
- ✅ Change title, category, year, description
- ✅ Add comma at the end
- ✅ Save the file

---

**That's it! You're all set! 🎉**
