import { ChefHat, Droplet, Home, Wrench } from 'lucide-react';

const services = [
  {
    title: 'Kitchen Remodeling',
    icon: ChefHat,
    image: '/assets/other/jnjkitchen1.jpeg',
    description: 'Transform the heart of your home with custom cabinetry, premium countertops, and modern appliances. We specialize in creating functional, beautiful kitchens that increase home value.',
  },
  {
    title: 'Bathroom Renovation',
    icon: Droplet,
    image: '/assets/other/jnjbathroom1.jpeg',
    description: 'Create your personal spa retreat with luxury fixtures, custom tile work, and smart storage solutions. From powder rooms to master suites, we deliver stunning results.',
  },
  {
    title: 'Basement Finishing',
    icon: Home,
    image: '/assets/other/jnjbasement2.jpeg',
    description: 'Unlock valuable living space with professional basement finishing. Whether you want a home theater, office, or extra bedroom, we make it happen.',
    features: [
      'Waterproofing & moisture control',
      'Framing & insulation',
      'Full bathrooms & wet bars',
      'Home theaters & media rooms',
      'Home gyms & game rooms',
    ],
  },
  {
    title: 'Whole-Home Renovation',
    icon: Wrench,
    image: '/assets/other/jnjphoto1.jpeg',
    description: 'Comprehensive home transformations that reimagine your entire living space. Our team manages every detail from concept to completion.',
    features: [
      'Complete interior redesign',
      'Structural modifications',
      'Open concept conversions',
      'New flooring throughout',
      'Complete electrical & plumbing',
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#2b4a8c]">Renovation Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From single rooms to whole-home transformations, we deliver exceptional craftsmanship and attention to detail in every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-[#2b4a8c]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  {service.features && (
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="text-[#2b4a8c] mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
