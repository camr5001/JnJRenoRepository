import { Award, Shield, Users, Heart } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We pursue perfection in every detail, using premium materials and expert craftsmanship.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparent pricing, honest communication, and a commitment to doing what\'s right.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work closely with you throughout the entire process, ensuring your vision becomes reality.'
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Your home and satisfaction are our top priorities. We treat every project with respect.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-neutral-800 mb-6">
              About <span className="text-primary-900">JNJ Renovations</span>
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
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

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="bg-primary-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary-900 mb-2">15+</div>
                <div className="text-neutral-700 font-medium">Years Serving Ontario</div>
              </div>
              <div className="bg-primary-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary-900 mb-2">12+</div>
                <div className="text-neutral-700 font-medium">Expert Team Members</div>
              </div>
              <div className="bg-primary-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary-900 mb-2">$8M+</div>
                <div className="text-neutral-700 font-medium">Projects Completed</div>
              </div>
              <div className="bg-primary-50 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary-900 mb-2">A+</div>
                <div className="text-neutral-700 font-medium">BBB Rating</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Northern Edge Construction team"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="bg-neutral-50 rounded-xl p-6 hover:bg-primary-50 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary-900 mb-3" />
                    <h4 className="font-bold text-neutral-800 mb-2">{value.title}</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
