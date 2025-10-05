import { ChefHat, Droplet, Home, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardBody } from '../ui/Card';
import { Button } from '../ui/Button';

export function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: ChefHat,
      title: 'Kitchen Remodeling',
      description: 'Transform the heart of your home with custom cabinetry, premium countertops, and modern appliances. We specialize in creating functional, beautiful kitchens that increase home value.',
      features: [
        'Custom cabinet design & installation',
        'Granite, quartz & marble countertops',
        'High-end appliance integration',
        'Kitchen island & peninsula designs',
        'Lighting & electrical upgrades',
        'Flooring & backsplash installation'
      ],
      priceRange: '$25,000 - $80,000',
      timeline: '4-8 weeks',
      image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Droplet,
      title: 'Bathroom Renovation',
      description: 'Create your personal spa retreat with luxury fixtures, custom tile work, and smart storage solutions. From powder rooms to master suites, we deliver stunning results.',
      features: [
        'Walk-in showers & soaking tubs',
        'Custom vanities & storage',
        'Heated floors & towel warmers',
        'Designer tile & stone work',
        'Water-efficient fixtures',
        'Accessibility modifications'
      ],
      priceRange: '$15,000 - $50,000',
      timeline: '3-6 weeks',
      image: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Home,
      title: 'Basement Finishing',
      description: 'Unlock valuable living space with professional basement finishing. Whether you want a home theater, office, or extra bedroom, we make it happen.',
      features: [
        'Waterproofing & moisture control',
        'Framing & insulation',
        'Full bathrooms & wet bars',
        'Home theaters & media rooms',
        'Home gyms & game rooms',
        'Egress windows & safety codes'
      ],
      priceRange: '$30,000 - $75,000',
      timeline: '6-10 weeks',
      image: '/assets/other/jnjphoto1.jpeg'
    },
    {
      icon: Sparkles,
      title: 'Whole-Home Renovation',
      description: 'Comprehensive home transformations that reimagine your entire living space. Our team manages every detail from concept to completion.',
      features: [
        'Complete interior redesign',
        'Structural modifications',
        'Open concept conversions',
        'New flooring throughout',
        'Complete electrical & plumbing',
        'Smart home integration'
      ],
      priceRange: '$100,000 - $300,000+',
      timeline: '12-20 weeks',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const goToContactForm = () => {
    navigate('/contact');
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">
            Our <span className="text-primary-900">Renovation Services</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From single rooms to whole-home transformations, we deliver exceptional craftsmanship and attention to detail in every project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} hoverable>
                <div className="h-64 overflow-hidden rounded-t-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardBody className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary-900" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-neutral-800 mb-2">{service.title}</h3>
                      <p className="text-neutral-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  <div className="bg-neutral-50 rounded-lg p-4 space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary-900 rounded-full"></div>
                        <span className="text-sm text-neutral-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-neutral-100">
                    <div className="space-y-1">
                      <div className="text-sm text-neutral-500">Investment Range</div>
                      <div className="text-lg font-bold text-neutral-800">{service.priceRange}</div>
                      <div className="text-sm text-neutral-500">Timeline: {service.timeline}</div>
                    </div>
                    <Button onClick={goToContactForm} size="sm">
                      Get Quote
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </Button>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Not Sure Which Service You Need?</h3>
          <p className="text-xl mb-6 text-primary-50">
            Schedule a free consultation and we'll help you determine the best approach for your home renovation goals.
          </p>
          <Button onClick={goToContactForm} size="lg">
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
