import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface CategoryPhotos {
  title: string;
  description: string;
  images: string[];
}

export function ClientPhotosSection() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const categories: Record<string, CategoryPhotos> = {
    bathroom: {
      title: 'Bathroom Renovations',
      description: 'Luxury bathroom transformations showcasing our attention to detail and quality craftsmanship.',
      images: [
        '/assets/Bathroom/image2.jpeg',
        '/assets/Bathroom/image3.jpeg',
        '/assets/Bathroom/image5.jpeg',
        '/assets/Bathroom/image6.jpeg',
        '/assets/Bathroom/image7.jpeg',
        '/assets/Bathroom/image13.jpeg',
        '/assets/Bathroom/image14.jpeg',
        '/assets/Bathroom/image16.jpeg',
        '/assets/Bathroom/image17.jpeg',
        '/assets/Bathroom/image18.jpeg',
        '/assets/Bathroom/image19.jpeg',
        '/assets/Bathroom/image27.jpeg',
        '/assets/Bathroom/image28.jpeg',
        '/assets/Bathroom/image32.jpeg',
        '/assets/Bathroom/image33.jpeg',
        '/assets/Bathroom/image34.jpeg',
        '/assets/Bathroom/image36.jpeg',
        '/assets/Bathroom/image37.jpeg',
        '/assets/Bathroom/image38.jpeg',
        '/assets/Bathroom/image39.jpeg',
        '/assets/Bathroom/image40.jpeg',
      ],
    },
    basement: {
      title: 'Basement Renovations',
      description: 'Complete basement finishing projects that add valuable living space to your home.',
      images: [
        '/assets/Basement/image8.jpeg',
        '/assets/Basement/image9.jpeg',
        '/assets/Basement/image10.jpeg',
        '/assets/Basement/image11.jpeg',
        '/assets/Basement/image23.jpeg',
        '/assets/Basement/image24.jpeg',
        '/assets/Basement/image26.jpeg',
        '/assets/Basement/image29.jpeg',
      ],
    },
    kitchen: {
      title: 'Kitchen Renovations',
      description: 'Modern kitchen remodels that combine style, functionality, and lasting value.',
      images: [
        '/assets/Kitchen/image21.jpeg',
      ],
    },
  };

  const toggleCategory = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Client <span className="text-[#2b4a8c]">Project Gallery</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our extensive portfolio of completed renovations. Click on any category to view detailed photos from real client projects.
          </p>
        </div>

        <div className="space-y-4">
          {Object.entries(categories).map(([key, category]) => (
            <div
              key={key}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#2b4a8c] transition-colors"
            >
              <button
                onClick={() => toggleCategory(key)}
                className="w-full px-6 py-5 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                aria-expanded={expandedCategory === key}
              >
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    {category.description}
                  </p>
                  <p className="text-sm text-[#2b4a8c] font-medium mt-2">
                    {category.images.length} Photos
                  </p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  {expandedCategory === key ? (
                    <ChevronUp className="w-6 h-6 sm:w-7 sm:h-7 text-[#2b4a8c]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400" />
                  )}
                </div>
              </button>

              {expandedCategory === key && (
                <div className="p-4 sm:p-6 bg-white animate-fade-in">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                    {category.images.map((image, index) => (
                      <div
                        key={index}
                        className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                      >
                        <img
                          src={image}
                          alt={`${category.title} - Photo ${index + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            Ready to start your renovation project?
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#2b4a8c] text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-[#1e3870] transition-all font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Get Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
