import { Award, Shield, Users, Heart } from 'lucide-react';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About <span className="text-[#2b4a8c]">JNJ Renovations</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                For over 15 years, JNJ Renovations has been transforming houses into dream homes across the Greater Toronto Area. What started as a small family business has grown into one of the region's most trusted renovation companies.
              </p>
              <p>
                Our team of skilled craftsmen, designers, and project managers brings decades of combined experience to every project. We're not just contractors—we're partners in bringing your vision to life.
              </p>
              <p>
                We believe that a home renovation should be an exciting journey, not a stressful ordeal. That's why we've perfected our process to ensure clear communication, transparent pricing, and exceptional results from start to finish.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/assets/other/jnjphoto1.jpeg"
              alt="JNJ Renovations team"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-blue-100 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-[#2b4a8c] mb-1">15+</div>
                  <div className="text-sm text-gray-700">Years Serving Ontario</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#2b4a8c] mb-1">12+</div>
                  <div className="text-sm text-gray-700">Expert Team Members</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-8 -right-8 bg-blue-100 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-[#2b4a8c] mb-1">$8M+</div>
                  <div className="text-sm text-gray-700">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#2b4a8c] mb-1">A+</div>
                  <div className="text-sm text-gray-700">BBB Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          <div className="text-center">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-[#2b4a8c]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
            <p className="text-gray-600">
              We pursue perfection in every detail, using premium materials and expert craftsmanship.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-[#2b4a8c]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
            <p className="text-gray-600">
              Transparent pricing, honest communication, and a commitment to doing what's right.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[#2b4a8c]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership</h3>
            <p className="text-gray-600">
              We work closely with you throughout the entire process, ensuring your vision becomes reality.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-[#2b4a8c]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Passion</h3>
            <p className="text-gray-600">
              We love what we do, and it shows in every project we complete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
