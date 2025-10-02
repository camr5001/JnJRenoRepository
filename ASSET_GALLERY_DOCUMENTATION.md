# Asset Gallery Documentation

## Overview
The Asset Gallery is a responsive, accessible image gallery component designed to showcase renovation project photos from the local assets folder. It features three distinct room categories: Bathroom, Basement, and Kitchen.

---

## Technical Implementation

### Component Location
**File:** `src/components/sections/AssetGallery.tsx`

### Key Features

#### 1. **Responsive Grid Layout**
- **Mobile (< 640px):** 1 column
- **Tablet (640px - 1023px):** 2 columns
- **Desktop (1024px - 1279px):** 3 columns
- **Large Desktop (≥ 1280px):** 4 columns

Implemented using CSS Grid with Tailwind CSS classes:
```tsx
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
```

#### 2. **Category Filtering System**
Four filter options available:
- **All Photos** (40 images total)
- **Bathroom** (13 images: image1-13)
- **Basement** (13 images: image14-27, excluding image25)
- **Kitchen** (13 images: image28-40)

**Navigation Design:**
- Tab-style buttons with icons
- Active state indication with navy blue background
- Item count badges for each category
- Smooth transitions and hover effects

#### 3. **Lazy Loading Implementation**
Performance optimization through native lazy loading:
```tsx
<img
  src={image.src}
  alt={image.alt}
  loading="lazy"  // Native browser lazy loading
  onLoad={() => handleImageLoad(image.src)}
  onError={() => handleImageError(image.src)}
/>
```

**Benefits:**
- Images load only when entering viewport
- Reduces initial page load time
- Saves bandwidth for users
- Loading spinners show during image fetch

#### 4. **Accessibility Features (WCAG 2.1 Compliant)**

**Semantic HTML:**
```tsx
<section id="asset-gallery">
  <header>
    <h2>...</h2>
  </header>
  <nav aria-label="Gallery categories">
    <button aria-pressed={selectedCategory === cat.value}>
  </nav>
  <div role="list">
    <figure role="listitem">
      <img alt="Descriptive alt text" />
      <figcaption>...</figcaption>
    </figure>
  </div>
</section>
```

**Keyboard Navigation:**
- Tab to navigate between images
- Enter/Space to open modal
- Focus indicators visible
- Escape key to close modal

**Screen Reader Support:**
- ARIA labels on all interactive elements
- Role attributes for proper semantics
- Alt text for every image
- Modal dialog announcements

#### 5. **Modal Lightbox**
Full-screen image viewer with:
- Click outside to close
- Close button (top-right)
- Image metadata display
- Smooth animations
- Backdrop blur effect
- Responsive image sizing

**Design Details:**
```tsx
className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm"
```

#### 6. **Hover Effects & Transitions**

**Image Cards:**
- Scale transform on hover (110%)
- Gradient overlay appears
- Zoom icon indicator
- Caption slide-up animation
- Smooth 300-500ms transitions

**CSS Implementation:**
```tsx
className="transition-transform duration-500 group-hover:scale-110"
className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
```

---

## Image Organization Structure

### Directory Structure
```
/project
  /assets
    image1.jpeg   → Bathroom
    image2.jpeg   → Bathroom
    ...
    image13.jpeg  → Bathroom
    image14.jpeg  → Basement
    ...
    image27.jpeg  → Basement
    image28.jpeg  → Kitchen
    ...
    image40.jpeg  → Kitchen
```

### Image Categorization Logic
```typescript
const images: GalleryImage[] = [
  // Bathroom: images 1-13
  { src: '/assets/image1.jpeg', alt: 'Modern bathroom...', category: 'bathroom' },

  // Basement: images 14-27
  { src: '/assets/image14.jpeg', alt: 'Finished basement...', category: 'basement' },

  // Kitchen: images 28-40
  { src: '/assets/image28.jpeg', alt: 'Modern kitchen...', category: 'kitchen' }
];
```

---

## Performance Optimizations

### 1. **Image Loading Strategy**
- Native lazy loading attribute
- Loading state management
- Error handling with fallbacks
- Aspect ratio preservation (1:1)

### 2. **CSS Optimizations**
- Hardware-accelerated transforms
- Will-change hints (implicit via transforms)
- Efficient hover state triggers
- Minimal repaints/reflows

### 3. **Bundle Size**
- Component code splitting
- Tree-shakeable imports
- Optimized with Vite build

### 4. **Loading Indicators**
```tsx
{imageLoading[image.src] !== false && (
  <div className="animate-pulse">
    <div className="animate-spin"></div>
  </div>
)}
```

---

## Design Decisions

### Color Scheme
- **Primary:** Navy Blue (#1e3a8a) - Buttons, accents
- **Background:** White (#ffffff) - Main container
- **Hover Overlays:** Black gradient with 70% opacity
- **Loading:** Neutral gray (#e5e5e5)

### Typography
- **Headings:** Bold, 2xl-4xl sizes
- **Body Text:** Regular weight, readable sizes
- **Captions:** Small, 14px, medium weight

### Spacing & Layout
- **Grid Gap:** 1.5rem (24px)
- **Container Padding:** 1-2rem responsive
- **Card Border Radius:** 12px (rounded-xl)
- **Modal Padding:** 1.5rem (24px)

### User Experience Decisions

**Why Grid Over Masonry?**
- Predictable layout across screen sizes
- Better performance (no JavaScript calculations)
- Consistent aspect ratios prevent layout shift
- Easier to implement responsive breakpoints

**Why Modal Instead of Inline Expansion?**
- Better focus on single image
- Prevents layout reflow
- Provides immersive viewing experience
- Easier to implement keyboard navigation

**Why Categories Over Tags?**
- Simpler mental model for users
- Clear organization structure
- Better performance (single filter)
- Matches existing site architecture

---

## Browser Compatibility

### Supported Browsers
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### CSS Features Used
- CSS Grid (full support)
- Flexbox (full support)
- CSS Transforms (full support)
- CSS Transitions (full support)
- Backdrop filter (95%+ support)

### Fallbacks Implemented
- Loading state for slow connections
- Error handling for failed images
- Graceful degradation for older browsers

---

## Integration Guide

### Adding the Gallery to Your Site

1. **Import the component:**
```tsx
import { AssetGallery } from './components/sections/AssetGallery';
```

2. **Add to your page:**
```tsx
<main>
  <AssetGallery />
</main>
```

3. **Ensure assets are accessible:**
```bash
/public/assets/image1.jpeg
/public/assets/image2.jpeg
...
```

### Adding New Images

1. **Add image to assets folder:**
```bash
cp new-image.jpeg /project/assets/
```

2. **Update the images array:**
```typescript
const images: GalleryImage[] = [
  // ...existing images
  {
    src: '/assets/new-image.jpeg',
    alt: 'Descriptive alt text',
    category: 'bathroom' | 'basement' | 'kitchen'
  }
];
```

---

## Maintenance & Best Practices

### Image Guidelines
- **Format:** JPEG or WebP recommended
- **Size:** 800-1200px width optimal
- **Quality:** 80-85% compression
- **Aspect Ratio:** Square (1:1) preferred
- **File Size:** < 300KB per image

### Alt Text Best Practices
- Descriptive, not generic
- Mention room type and key features
- 40-80 characters optimal
- Avoid "image of" or "picture of"

Example:
```tsx
// ❌ Bad
alt: "Bathroom image"

// ✅ Good
alt: "Modern bathroom with walk-in shower and marble countertop"
```

### Performance Monitoring
Monitor these metrics:
- Largest Contentful Paint (LCP) < 2.5s
- First Input Delay (FID) < 100ms
- Cumulative Layout Shift (CLS) < 0.1
- Time to Interactive (TTI) < 3.8s

---

## Code Architecture

### Component Structure
```
AssetGallery/
├── State Management
│   ├── selectedCategory (filter state)
│   ├── selectedImage (modal state)
│   └── imageLoading (loading states)
│
├── Data Structure
│   ├── images[] (40 items)
│   └── categories[] (4 items)
│
├── UI Sections
│   ├── Header (title + description)
│   ├── Navigation (category filters)
│   ├── Grid (image cards)
│   └── Modal (lightbox viewer)
│
└── Event Handlers
    ├── handleImageLoad()
    ├── handleImageError()
    ├── setSelectedCategory()
    └── setSelectedImage()
```

### State Flow
```
User clicks category
  ↓
setSelectedCategory()
  ↓
filteredImages updates
  ↓
Grid re-renders
  ↓
Lazy load triggers
  ↓
Images appear
```

---

## Testing Recommendations

### Manual Testing Checklist
- [ ] All 40 images load correctly
- [ ] Category filtering works
- [ ] Modal opens/closes properly
- [ ] Keyboard navigation works
- [ ] Hover effects smooth
- [ ] Responsive on mobile
- [ ] Alt text present
- [ ] Loading states show
- [ ] Error handling works

### Accessibility Testing
- [ ] Screen reader announces categories
- [ ] Focus indicators visible
- [ ] Tab order logical
- [ ] ARIA labels present
- [ ] Color contrast sufficient (4.5:1)
- [ ] Modal traps focus

### Performance Testing
- [ ] Lighthouse score > 90
- [ ] Images lazy load
- [ ] No layout shift
- [ ] Smooth animations
- [ ] Fast initial render

---

## Troubleshooting

### Images Not Loading?
1. Check file paths: `/assets/imageX.jpeg`
2. Verify files exist in assets folder
3. Check browser console for errors
4. Ensure public folder configured in Vite

### Layout Issues?
1. Clear browser cache
2. Check Tailwind CSS classes
3. Verify responsive breakpoints
4. Test in different browsers

### Performance Slow?
1. Optimize image file sizes
2. Enable compression
3. Check network tab
4. Verify lazy loading active

---

## Future Enhancements

### Potential Improvements
- [ ] Add image search functionality
- [ ] Implement infinite scroll
- [ ] Add before/after slider view
- [ ] Enable image sharing
- [ ] Add download option
- [ ] Implement favoriting system
- [ ] Add sorting options (date, name)
- [ ] Create admin upload interface

---

## Support & Credits

**Component Author:** Built for JNJ Renovations
**Framework:** React 18 + TypeScript
**Styling:** Tailwind CSS
**Build Tool:** Vite
**Icons:** Lucide React

**Last Updated:** October 2, 2024
**Version:** 1.0.0
