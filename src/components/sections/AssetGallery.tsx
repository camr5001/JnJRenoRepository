import { useState } from 'react';
import { Bath, Home as HomeIcon, ChefHat, X, ZoomIn, ChevronDown, ChevronUp } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  category: 'bathroom' | 'basement' | 'kitchen';
}

type ExpandedCategories = {
  all: boolean;
  bathroom: boolean;
  basement: boolean;
  kitchen: boolean;
};

export function AssetGallery() {
  const [expandedCategories, setExpandedCategories] = useState<ExpandedCategories>({
    all: false,
    bathroom: false,
    basement: false,
    kitchen: false
  });
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [imageLoading, setImageLoading] = useState<Record<string, boolean>>({});

  const images: GalleryImage[] = [
    { src: '/assets/bathroom/image13.jpeg', alt: 'Modern bathroom renovation', category: 'bathroom' },
    { src: '/assets/bathroom/image14.jpeg', alt: 'Luxury bathroom vanity', category: 'bathroom' },
    { src: '/assets/bathroom/image16.jpeg', alt: 'Bathroom with custom fixtures', category: 'bathroom' },
    { src: '/assets/bathroom/image17.jpeg', alt: 'Contemporary bathroom design', category: 'bathroom' },
    { src: '/assets/bathroom/image18.jpeg', alt: 'Elegant bathroom remodel', category: 'bathroom' },
    { src: '/assets/bathroom/image19.jpeg', alt: 'Spa-style bathroom', category: 'bathroom' },
    { src: '/assets/bathroom/image2.jpeg', alt: 'Master bathroom suite', category: 'bathroom' },
    { src: '/assets/bathroom/image27.jpeg', alt: 'Modern bathroom with walk-in shower', category: 'bathroom' },
    { src: '/assets/bathroom/image28.jpeg', alt: 'Bathroom with double vanity', category: 'bathroom' },
    { src: '/assets/bathroom/image3.jpeg', alt: 'Luxury bathroom features', category: 'bathroom' },
    { src: '/assets/bathroom/image32.jpeg', alt: 'Contemporary bathroom renovation', category: 'bathroom' },
    { src: '/assets/bathroom/image33.jpeg', alt: 'Bathroom with custom tile work', category: 'bathroom' },
    { src: '/assets/bathroom/image34.jpeg', alt: 'Modern bathroom fixtures', category: 'bathroom' },
    { src: '/assets/bathroom/image36.jpeg', alt: 'Elegant bathroom upgrade', category: 'bathroom' },
    { src: '/assets/bathroom/image37.jpeg', alt: 'Bathroom with premium finishes', category: 'bathroom' },
    { src: '/assets/bathroom/image38.jpeg', alt: 'Full bathroom remodel', category: 'bathroom' },
    { src: '/assets/bathroom/image39.jpeg', alt: 'Bathroom with heated floors', category: 'bathroom' },
    { src: '/assets/bathroom/image40.jpeg', alt: 'Contemporary bathroom style', category: 'bathroom' },
    { src: '/assets/bathroom/image5.jpeg', alt: 'Modern bathroom design', category: 'bathroom' },
    { src: '/assets/bathroom/image6.jpeg', alt: 'Luxury bathroom renovation', category: 'bathroom' },
    { src: '/assets/bathroom/image7.jpeg', alt: 'Custom bathroom features', category: 'bathroom' },

    { src: '/assets/basement/image10.jpeg', alt: 'Finished basement renovation', category: 'basement' },
    { src: '/assets/basement/image11.jpeg', alt: 'Basement family room', category: 'basement' },
    { src: '/assets/basement/image23.jpeg', alt: 'Modern basement design', category: 'basement' },
    { src: '/assets/basement/image24.jpeg', alt: 'Basement entertainment area', category: 'basement' },
    { src: '/assets/basement/image26.jpeg', alt: 'Basement with custom features', category: 'basement' },
    { src: '/assets/basement/image29.jpeg', alt: 'Contemporary basement remodel', category: 'basement' },
    { src: '/assets/basement/image8.jpeg', alt: 'Basement living space', category: 'basement' },
    { src: '/assets/basement/image9.jpeg', alt: 'Luxury basement finish', category: 'basement' },

    { src: '/assets/kitchen/image21.jpeg', alt: 'Modern kitchen renovation', category: 'kitchen' },
    { src: '/assets/kitchen/image30.jpeg', alt: 'Contemporary kitchen design', category: 'kitchen' },
    { src: '/assets/kitchen/image31.jpeg', alt: 'Custom kitchen remodel', category: 'kitchen' }
  ];

  const categories = [
    { value: 'all' as const, label: 'All Photos', icon: null, count: images.length },
    { value: 'bathroom' as const, label: 'Bathroom', icon: Bath, count: images.filter(i => i.category === 'bathroom').length },
    { value: 'basement' as const, label: 'Basement', icon: HomeIcon, count: images.filter(i => i.category === 'basement').length },
    { value: 'kitchen' as const, label: 'Kitchen', icon: ChefHat, count: images.filter(i => i.category === 'kitchen').length }
  ];

  const toggleCategory = (category: keyof ExpandedCategories) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const getCategoryImages = (category: keyof ExpandedCategories) => {
    if (category === 'all') return images;
    return images.filter(img => img.category === category);
  };

  const handleImageLoad = (src: string) => {
    setImageLoading(prev => ({ ...prev, [src]: false }));
  };

  const handleImageError = (src: string) => {
    console.error(`Failed to load image: ${src}`);
    setImageLoading(prev => ({ ...prev, [src]: false }));
  };

  const renderGalleryGrid = (categoryImages: GalleryImage[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
      {categoryImages.map((image, index) => (
        <figure
          key={`${image.category}-${index}`}
          className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer bg-neutral-100"
          role="listitem"
          onClick={() => setSelectedImage(image)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setSelectedImage(image);
            }
          }}
          tabIndex={0}
          aria-label={`View ${image.alt} in full size`}
        >
          {imageLoading[image.src] !== false && (
            <div className="absolute inset-0 flex items-center justify-center bg-neutral-200 animate-pulse">
              <div className="w-12 h-12 border-4 border-primary-900 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          <img
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onLoad={() => handleImageLoad(image.src)}
            onError={() => handleImageError(image.src)}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <figcaption className="text-white text-sm font-medium mb-1">
                {image.alt}
              </figcaption>
              <div className="flex items-center gap-2 text-white/80 text-xs">
                <span className="capitalize">{image.category}</span>
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
              <ZoomIn className="w-5 h-5 text-primary-900" />
            </div>
          </div>
        </figure>
      ))}
    </div>
  );

  return (
    <section id="asset-gallery" className="pt-20 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">
            Our <span className="text-primary-900">Project Photos</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Browse through our collection of completed renovation projects. Each photo represents quality craftsmanship and attention to detail.
          </p>
        </header>

        <div className="space-y-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isExpanded = expandedCategories[cat.value];
            const categoryImages = getCategoryImages(cat.value);

            return (
              <div key={cat.value} className="border border-neutral-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleCategory(cat.value)}
                  className="w-full flex items-center justify-between p-6 bg-neutral-50 hover:bg-neutral-100 transition-colors"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3">
                    {Icon && <Icon className="w-6 h-6 text-primary-900" />}
                    <h3 className="text-2xl font-bold text-neutral-800">
                      {cat.label}
                    </h3>
                    <span className="px-3 py-1 bg-primary-900 text-white rounded-full text-sm font-semibold">
                      {cat.count}
                    </span>
                  </div>
                  <div>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-primary-900" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-primary-900" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="p-6 bg-white">
                    {renderGalleryGrid(categoryImages)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div
            className="max-w-6xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />

            <div className="mt-6 bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
              <h3 id="modal-title" className="text-2xl font-bold mb-2">{selectedImage.alt}</h3>
              <div className="flex items-center gap-4 text-sm text-white/80">
                <span className="capitalize px-3 py-1 bg-white/20 rounded-full">
                  {selectedImage.category}
                </span>
                <span>Click outside to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
