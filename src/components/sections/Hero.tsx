import { ArrowRight, Award, Users, Clock } from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();

  const goToContactForm = () => {
    navigate('/contact');
  };

  const scrollToGallery = () => {
    const gallerySection = document.getElementById('asset-gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 opacity-95"></div>
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Modern renovated kitchen"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Comfort, <span className="text-primary-300">Our Happiness!</span>
              </h1>
              <p className="text-xl text-neutral-100 mb-8 leading-relaxed">
                Home renovation specialists serving homeowners for over 15 years. From kitchens to whole-home transformations, we bring your vision to life with exceptional craftsmanship.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" onClick={goToContactForm}>
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </Button>
                <Button size="lg" variant="ghost" className="bg-neutral-700 border-2 border-neutral-500 text-white hover:bg-neutral-600" onClick={scrollToGallery}>
                  View Our Work
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div className="text-center">
                  <Award className="w-8 h-8 text-primary-300 mx-auto mb-2" />
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-neutral-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary-300 mx-auto mb-2" />
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm text-neutral-200">Happy Clients</div>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-primary-300 mx-auto mb-2" />
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-neutral-200">On Time</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="/assets/other/jnjflooring1.jpeg"
                      alt="Professional flooring installation"
                      className="w-full h-64 object-cover"
                    />
                    <div className="bg-white p-3">
                      <p className="text-sm font-semibold text-neutral-800">Flooring</p>
                      <p className="text-xs text-neutral-600">Premium Installation</p>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="/assets/other/jnjbathroom1.jpeg"
                      alt="Luxury bathroom renovation"
                      className="w-full h-64 object-cover"
                    />
                    <div className="bg-white p-3">
                      <p className="text-sm font-semibold text-neutral-800">Bathroom Upgrade</p>
                      <p className="text-xs text-neutral-600">Luxury Finish</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="/assets/other/jnjbasement2.jpeg"
                      alt="Basement finishing"
                      className="w-full h-64 object-cover"
                    />
                    <div className="bg-white p-3">
                      <p className="text-sm font-semibold text-neutral-800">Basement Finishing</p>
                      <p className="text-xs text-neutral-600">Complete Transform</p>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <img
                      src="/assets/other/jnjkitchen1.jpeg"
                      alt="Whole home renovation"
                      className="w-full h-64 object-cover"
                    />
                    <div className="bg-white p-3">
                      <p className="text-sm font-semibold text-neutral-800">Kitchen Remodel</p>
                      <p className="text-xs text-neutral-600">Modern Living</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

    </>
  );
}
