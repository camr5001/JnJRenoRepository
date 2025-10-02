import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Clock, DollarSign } from 'lucide-react';
import { Button } from '../ui/Button';

interface Image {
  url: string;
  type: 'before' | 'after';
}

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  images: Image[];
  description: string;
  location?: string;
  duration?: string;
  budgetRange?: string;
  style?: string;
  testimonial?: string;
  clientName?: string;
}

export function ImageModal({
  isOpen,
  onClose,
  projectTitle,
  images,
  description,
  location,
  duration,
  budgetRange,
  style,
  testimonial,
  clientName
}: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const scrollToContact = () => {
    onClose();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-screen p-4 md:p-8">
        <button
          onClick={onClose}
          className="fixed top-6 right-6 z-50 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative bg-neutral-900 rounded-2xl overflow-hidden">
                <img
                  src={currentImage.url}
                  alt={`${projectTitle} - ${currentImage.type}`}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />

                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-bold text-neutral-800 capitalize">
                    {currentImage.type}
                  </span>
                </div>

                {style && (
                  <div className="absolute top-6 right-6 bg-primary-900/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-semibold text-white capitalize">{style}</span>
                  </div>
                )}

                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                    >
                      <ChevronLeft className="w-6 h-6 text-neutral-800" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                    >
                      <ChevronRight className="w-6 h-6 text-neutral-800" />
                    </button>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndex(index)}
                          className={`h-2 rounded-full transition-all duration-200 ${
                            index === currentIndex ? 'bg-white w-8' : 'bg-white/50 w-2'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="mt-4 grid grid-cols-6 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`aspect-video rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                      index === currentIndex
                        ? 'border-primary-500 ring-2 ring-primary-500/50'
                        : 'border-transparent hover:border-neutral-600'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 h-fit lg:sticky lg:top-8">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">{projectTitle}</h2>

              <p className="text-neutral-600 leading-relaxed mb-6">{description}</p>

              <div className="space-y-4 mb-6 pb-6 border-b border-neutral-200">
                {location && (
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary-900 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-neutral-500 font-medium">Location</div>
                      <div className="text-sm text-neutral-700 font-semibold">{location}</div>
                    </div>
                  </div>
                )}
                {duration && (
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary-900 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-neutral-500 font-medium">Duration</div>
                      <div className="text-sm text-neutral-700 font-semibold">{duration}</div>
                    </div>
                  </div>
                )}
                {budgetRange && (
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-primary-900 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-neutral-500 font-medium">Investment Range</div>
                      <div className="text-sm text-neutral-700 font-semibold">{budgetRange}</div>
                    </div>
                  </div>
                )}
              </div>

              {testimonial && (
                <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-primary-900 mb-6">
                  <p className="text-neutral-700 italic text-sm mb-2">"{testimonial}"</p>
                  {clientName && (
                    <p className="text-xs text-neutral-600 font-semibold">— {clientName}</p>
                  )}
                </div>
              )}

              <Button onClick={scrollToContact} size="lg" fullWidth>
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
