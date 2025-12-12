# Video Portfolio System Architecture

## System Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                      GOOGLE DRIVE STORAGE                       │
│  • Wedding Videos     • Advertisement Videos    • Blog Videos   │
│  • Short Films        • Documentaries                           │
└─────────────────────────────────────────────────┬───────────────┘
                                                  │
                                                  │ Share Links
                                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│                    PORTFOLIO.TSX COMPONENT                      │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐   │
│  │            portfolioItems Array (Video Data)           │   │
│  │  • id, title, category, year                          │   │
│  │  • driveLink, embedLink, thumbnail                    │   │
│  │  • description                                        │   │
│  └──────────────────┬─────────────────────────────────────┘   │
│                     │                                          │
│         ┌───────────┴──────────┬──────────────┐              │
│         │                      │              │              │
│         ▼                      ▼              ▼              │
│  ┌──────────┐          ┌──────────┐   ┌──────────┐         │
│  │  State   │          │  Utils   │   │   UI     │         │
│  │─────────│          │─────────│   │─────────│         │
│  │ • filter │          │ convert  │   │ • Grid   │         │
│  │ • hover  │          │ • get    │   │ • Cards  │         │
│  │ • modal  │          │ • search │   │ • Modal  │         │
│  └──────────┘          └──────────┘   └──────────┘         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                      USER INTERFACE                             │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │  CATEGORY FILTERS                                        │  │
│  │  [All] [Wedding] [Advertisement] [Blog] [Film] [Doc]    │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                    │
│  │  Video   │  │  Video   │  │  Video   │                    │
│  │  Card 1  │  │  Card 2  │  │  Card 3  │  ← Grid Layout     │
│  │ ┌──────┐ │  │ ┌──────┐ │  │ ┌──────┐ │                    │
│  │ │ IMG  │ │  │ │ IMG  │ │  │ │ IMG  │ │                    │
│  │ │ [▶]  │ │  │ │ [▶]  │ │  │ │ [▶]  │ │  ← Play Button     │
│  │ └──────┘ │  │ └──────┘ │  │ └──────┘ │                    │
│  │  Title   │  │  Title   │  │  Title   │                    │
│  └──────────┘  └──────────┘  └──────────┘                    │
│                                                                 │
│  On Click ───────────────────────┐                            │
│                                   ▼                            │
│                        ┌─────────────────────┐                │
│                        │   VIDEO MODAL       │                │
│                        │  ┌───────────────┐  │                │
│                        │  │   Embedded    │  │                │
│                        │  │   Player      │  │                │
│                        │  │  (Google      │  │                │
│                        │  │   Drive)      │  │                │
│                        │  └───────────────┘  │                │
│                        │  Title & Info       │                │
│                        │  [Open in Drive]    │                │
│                        └─────────────────────┘                │
└─────────────────────────────────────────────────────────────────┘
```

## Data Flow

```
User Action                     System Response
───────────                     ───────────────

1. Page Load
   │
   ├──▶ Load portfolioItems array
   │
   ├──▶ Generate thumbnails from Google Drive
   │
   ├──▶ Display video grid
   │
   └──▶ Show all categories (filter = "All")


2. Hover on Video Card
   │
   ├──▶ Trigger hover animation
   │
   ├──▶ Show play button overlay
   │
   ├──▶ Slightly enlarge video card
   │
   └──▶ Add corner accents


3. Click Category Filter
   │
   ├──▶ Update filter state
   │
   ├──▶ Filter portfolioItems array
   │
   └──▶ Re-render grid with filtered videos


4. Click Video Card
   │
   ├──▶ Set selectedItem state
   │
   ├──▶ Open modal overlay
   │
   ├──▶ Load embedded video player
   │
   └──▶ Display video information


5. Click "Open in Drive"
   │
   ├──▶ Call playVideo() function
   │
   └──▶ Open Google Drive in new tab


6. Close Modal
   │
   ├──▶ Clear selectedItem state
   │
   └──▶ Return to grid view
```

## File Structure

```
client-showcase/
│
├── src/
│   ├── components/
│   │   └── Portfolio.tsx          ◄─── MAIN COMPONENT
│   │       ├── VideoItem interface
│   │       ├── convertToEmbedLink()
│   │       ├── getThumbnail()
│   │       ├── portfolioItems[]
│   │       ├── getAllVideos()
│   │       ├── getVideosByCategory()
│   │       ├── playVideo()
│   │       └── Portfolio component
│   │
│   └── utils/
│       ├── videoManager.ts        ◄─── UTILITY FUNCTIONS
│       │   ├── Type definitions
│       │   ├── Link converters
│       │   ├── Video getters
│       │   ├── Search function
│       │   ├── Sort function
│       │   └── Random selection
│       │
│       └── videoManagerExamples.ts ◄─── CODE EXAMPLES
│
├── Documentation/
│   ├── README_VIDEO_PORTFOLIO.md  ◄─── Main README
│   ├── QUICK_REFERENCE.md         ◄─── Quick guide
│   ├── VIDEO_SYSTEM_DOCS.md       ◄─── Full docs
│   ├── IMPLEMENTATION_SUMMARY.md  ◄─── Summary
│   └── ARCHITECTURE.md            ◄─── This file
```

## Component Hierarchy

```
<Portfolio>
  │
  ├── Header Section
  │   ├── Title: "Portfolio"
  │   └── Description
  │
  ├── Filter Section
  │   ├── [All] Button
  │   ├── [Wedding] Button
  │   ├── [Advertisement] Button
  │   ├── [Blog] Button
  │   ├── [Short Film] Button
  │   └── [Documentary] Button
  │
  ├── Video Grid
  │   └── For each video in filteredItems:
  │       └── <VideoCard>
  │           ├── Thumbnail Image
  │           ├── Play Button Overlay
  │           ├── Category Badge
  │           ├── Year Label
  │           ├── Video Title
  │           ├── Description
  │           └── Decorative Accents
  │
  └── Video Modal (when video selected)
      ├── Close Button
      ├── Video Player (iframe)
      └── Video Info Panel
          ├── Category Badge
          ├── Year
          ├── "Open in Drive" Button
          ├── Title
          └── Description
```

## State Management

```
Portfolio Component State
│
├── selectedItem: VideoItem | null
│   └── Purpose: Track which video is open in modal
│
├── filter: 'All' | VideoCategory
│   └── Purpose: Track active category filter
│
└── hoveredId: number | null
    └── Purpose: Track which video card is being hovered
```

## Google Drive Integration

```
Original Share Link:
https://drive.google.com/file/d/[FILE_ID]/view?usp=sharing
         │
         ├── convertToEmbedLink() ──▶ For iframe player
         │   https://drive.google.com/file/d/[FILE_ID]/preview
         │
         └── getThumbnail() ──▶ For thumbnail image
             https://drive.google.com/thumbnail?id=[FILE_ID]&sz=w800
```

## Video Categories

```
                    All Videos (7)
                         │
      ┌──────────┬───────┼───────┬──────────┐
      │          │       │       │          │
   Wedding   Advertisement Blog Short Film Documentary
    (1)          (1)     (1)     (2)        (2)
```

## Utility Functions Map

```
videoManager.ts
│
├── Link Utilities
│   ├── convertToEmbedLink()    Convert share → embed
│   └── getThumbnail()          Extract thumbnail URL
│
├── Retrieval Functions
│   ├── getAllVideos()          Get complete list
│   └── getVideosByCategory()   Filter by category
│
├── Search & Filter
│   └── searchVideos()          Search title/description
│
├── Sorting
│   └── sortVideosByYear()      Sort by year
│
├── Random Selection
│   └── getRandomVideos()       Get N random videos
│
└── Metadata Functions
    ├── getCategories()         List unique categories
    └── getVideoCounts()        Count per category
```

## Responsive Breakpoints

```
Screen Size          Layout          Columns
────────────────────────────────────────────
< 640px (Mobile)     Stack           1
640px - 1024px       Grid            2
> 1024px (Desktop)   Grid            3
```

## Animation Flow

```
Video Card Interaction
│
├── Initial State
│   └── Scale: 1.0, Opacity: normal
│
├── On Hover
│   ├── Card: Scale to 1.03, Move up 16px
│   ├── Thumbnail: Scale to 1.1
│   ├── Play Button: Fade in, Scale to 1.05
│   ├── Corner Accents: Fade in
│   └── Shimmer Effect: Slide across
│
└── On Click
    ├── Open Modal: Fade in background
    ├── Modal Content: Scale from 0.9 to 1.0
    └── Load Video: Embed iframe
```

## Performance Considerations

```
Optimization Strategy
│
├── Lazy Loading
│   └── Thumbnails load on-demand
│
├── State Management
│   └── Minimal re-renders with proper state
│
├── Image Fallbacks
│   └── Placeholder if thumbnail fails
│
└── Browser Caching
    └── Google Drive handles caching
```

## Extension Points

```
Future Enhancements
│
├── Search Bar
│   └── Add UI component using searchVideos()
│
├── Advanced Filtering
│   └── Combine category + year + search
│
├── Playlists
│   └── Group videos into collections
│
├── Analytics
│   └── Track views and interactions
│
└── Admin Panel
    └── CRUD interface for videos
```

---

**Understanding the Flow:**

1. **Videos stored in Google Drive** with sharing enabled
2. **Links added to Portfolio.tsx** in the portfolioItems array
3. **Component renders grid** with thumbnails and filters
4. **User interacts** by filtering, hovering, clicking
5. **Modal opens** with embedded player for selected video
6. **Video plays** directly in the interface
7. **Alternative option** to open full Google Drive page

---

**Key Integration Points:**

- **Data**: `portfolioItems` array in Portfolio.tsx
- **Display**: Portfolio component JSX
- **Utilities**: `videoManager.ts` functions
- **Styling**: Tailwind CSS + Framer Motion
- **External**: Google Drive API endpoints

---

**For Developers:**

- Start with `Portfolio.tsx` for UI changes
- Use `videoManager.ts` for logic extensions
- Reference `videoManagerExamples.ts` for patterns
- Check this file for architecture understanding
