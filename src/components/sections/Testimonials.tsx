import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardBody } from '../ui/Card';
import { supabase, Testimonial } from '../../lib/supabase';

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('approved', true)
      .order('featured', { ascending: false })
      .order('display_order', { ascending: true });

    if (!error && data) {
      setTestimonials(data as Testimonial[]);
    }
  };

  const mockTestimonials: Testimonial[] = testimonials.length === 0 ? [
    {
      id: '1',
      client_name: 'Sarah Mitchell',
      service_type: 'kitchen',
      rating: 5,
      testimonial_text: 'JNJ Renovations transformed our outdated kitchen into a stunning modern space. The team was professional, punctual, and meticulous. They stayed within budget and timeline. We couldn\'t be happier with the results!',
      location: 'Toronto, ON',
      project_value: '$45,000',
      featured: true,
      approved: true
    },
    {
      id: '2',
      client_name: 'Michael Rodriguez',
      service_type: 'bathroom',
      rating: 5,
      testimonial_text: 'The attention to detail in our master bathroom renovation was incredible. From the initial consultation to the final walkthrough, everything was handled with utmost professionalism. Our bathroom now feels like a luxury spa!',
      location: 'Toronto, ON',
      project_value: '$32,000',
      featured: true,
      approved: true
    },
    {
      id: '3',
      client_name: 'Jennifer Lee',
      service_type: 'basement',
      rating: 5,
      testimonial_text: 'We gained so much valuable living space with our basement renovation. The team was respectful of our home, kept everything clean, and the craftsmanship is outstanding. Highly recommend!',
      location: 'Toronto, ON',
      project_value: '$58,000',
      featured: true,
      approved: true
    },
    {
      id: '4',
      client_name: 'David & Lisa Thompson',
      service_type: 'whole-home',
      rating: 5,
      testimonial_text: 'Our whole-home renovation exceeded all expectations. The project manager kept us informed every step of the way. The quality of work and materials used is exceptional. Worth every penny!',
      location: 'Toronto, ON',
      project_value: '$165,000',
      featured: true,
      approved: true
    },
    {
      id: '5',
      client_name: 'Robert Chen',
      service_type: 'kitchen',
      rating: 5,
      testimonial_text: 'Best decision we made was choosing JNJ Renovations for our kitchen remodel. They helped us maximize our space and created a design that perfectly fits our lifestyle. The team was fantastic!',
      location: 'Toronto, ON',
      featured: false,
      approved: true
    },
    {
      id: '6',
      client_name: 'Amanda Foster',
      service_type: 'bathroom',
      rating: 5,
      testimonial_text: 'From design to completion, the entire process was smooth and stress-free. Our new bathroom is beautiful and functional. The team truly listened to what we wanted and delivered beyond our expectations.',
      location: 'Toronto, ON',
      featured: false,
      approved: true
    }
  ] : [];

  const displayTestimonials = testimonials.length > 0 ? testimonials : mockTestimonials;

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${index < rating ? 'fill-primary-500 text-primary-500' : 'text-neutral-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">
            What Our <span className="text-primary-900">Clients Say</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from homeowners who have experienced the JNJ Renovations difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial) => (
            <Card key={testimonial.id} hoverable>
              <CardBody className="relative">
                <Quote className="w-12 h-12 text-primary-100 absolute top-0 right-4 opacity-50" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    {renderStars(testimonial.rating)}
                    {testimonial.featured && (
                      <span className="text-xs bg-primary-100 text-primary-900 px-2 py-1 rounded-full font-semibold">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-neutral-700 leading-relaxed italic">
                    "{testimonial.testimonial_text}"
                  </p>

                  <div className="pt-4 border-t border-neutral-100">
                    <p className="font-bold text-neutral-800">{testimonial.client_name}</p>
                    <div className="flex flex-wrap gap-2 mt-2 text-sm text-neutral-600">
                      {testimonial.location && (
                        <span className="bg-neutral-100 px-2 py-1 rounded">
                          {testimonial.location}
                        </span>
                      )}
                      <span className="bg-primary-100 text-primary-900 px-2 py-1 rounded capitalize">
                        {testimonial.service_type === 'whole-home' ? 'Whole Home' : testimonial.service_type}
                      </span>
                      {testimonial.project_value && (
                        <span className="bg-neutral-100 px-2 py-1 rounded">
                          {testimonial.project_value}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              {renderStars(5)}
            </div>
            <h3 className="text-3xl font-bold mb-4">Join Hundreds of Satisfied Homeowners</h3>
            <p className="text-xl mb-6 text-primary-100">
              We're proud to maintain a 5-star rating based on quality, professionalism, and customer satisfaction.
            </p>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-8">
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-primary-100">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9</div>
                <div className="text-primary-100">Average Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-primary-100">Would Recommend</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
