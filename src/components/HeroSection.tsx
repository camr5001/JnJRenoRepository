import { ArrowRight, Award, Users, Clock } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-[#1a2332] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Comfort, <span className="text-[#6b9bd1]">Our Happiness!</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Home renovation specialists serving homeowners for over 15 years. From kitchens to whole-home transformations, we bring your vision to life with exceptional craftsmanship.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <a
                href="#contact"
                className="bg-[#2b4a8c] text-white px-8 py-4 rounded-lg hover:bg-[#1e3870] transition-all inline-flex items-center gap-2 font-medium text-lg shadow-lg hover:shadow-xl"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="border-2 border-gray-500 text-white px-8 py-4 rounded-lg hover:border-gray-400 hover:bg-white/5 transition-all font-medium text-lg"
              >
                View Our Work
              </a>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <Award className="w-8 h-8 text-[#6b9bd1] mx-auto mb-2" />
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-[#6b9bd1] mx-auto mb-2" />
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-[#6b9bd1] mx-auto mb-2" />
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-gray-400">On Time</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4 max-w-lg ml-auto">
              <div className="space-y-4">
                <img
                  src="/assets/other/jnjflooring1.jpeg"
                  alt="Professional flooring installation"
                  className="w-full h-64 object-cover rounded-lg shadow-xl"
                />
                <img
                  src="/assets/other/jnjbasement2.jpeg"
                  alt="Basement finishing"
                  className="w-full h-48 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="/assets/other/jnjbathroom1.jpeg"
                  alt="Luxury bathroom renovation"
                  className="w-full h-48 object-cover rounded-lg shadow-xl"
                />
                <img
                  src="/assets/other/jnjkitchen1.jpeg"
                  alt="Kitchen renovation"
                  className="w-full h-64 object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
