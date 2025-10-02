import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, MapPin, Clock, DollarSign } from 'lucide-react';
import { Card, CardBody } from '../ui/Card';
import { supabase, PortfolioProject } from '../../lib/supabase';

export function Portfolio() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<string, number>>({});

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const { data, error } = await supabase
      .from('portfolio_projects')
      .select('*')
      .order('display_order', { ascending: true })
      .order('created_at', { ascending: false });

    if (!error && data) {
      setProjects(data as PortfolioProject[]);
      const initialIndices: Record<string, number> = {};
      data.forEach(project => {
        initialIndices[project.id] = 0;
      });
      setCurrentImageIndex(initialIndices);
    }
  };

  const filteredProjects = selectedFilter === 'all'
    ? projects
    : projects.filter(p => p.service_type === selectedFilter);

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'kitchen', label: 'Kitchens' },
    { value: 'bathroom', label: 'Bathrooms' },
    { value: 'basement', label: 'Basements' },
    { value: 'whole-home', label: 'Whole Home' }
  ];

  const nextImage = (projectId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }));
  };

  const prevImage = (projectId: string, totalImages: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const mockProjects: PortfolioProject[] = projects.length === 0 ? [
    {
      id: '1',
      title: 'Modern Kitchen Transformation',
      service_type: 'kitchen',
      description: 'Complete kitchen renovation featuring custom white shaker cabinets, quartz countertops, and stainless steel appliances. Open concept design with large island and pendant lighting.',
      location: 'Toronto, ON',
      project_duration: '6 weeks',
      budget_range: '$45,000 - $50,000',
      before_images: ['https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800'],
      after_images: ['https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800'],
      featured: true,
      testimonial: 'JNJ Renovations exceeded our expectations. The attention to detail was incredible!',
      client_name: 'Sarah M.',
      display_order: 0
    },
    {
      id: '2',
      title: 'Luxury Spa Bathroom',
      service_type: 'bathroom',
      description: 'Master bathroom renovation with walk-in shower, freestanding soaking tub, heated floors, and custom double vanity with marble countertops.',
      location: 'Toronto, ON',
      project_duration: '4 weeks',
      budget_range: '$30,000 - $35,000',
      before_images: ['https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800'],
      after_images: ['https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800'],
      featured: true,
      testimonial: 'Our bathroom feels like a luxury spa. Best investment we\'ve made in our home!',
      client_name: 'Michael R.',
      display_order: 1
    },
    {
      id: '3',
      title: 'Entertainment Basement',
      service_type: 'basement',
      description: 'Full basement finishing with home theater, wet bar, and recreation area. Includes soundproofing, custom lighting, and built-in storage.',
      location: 'Toronto, ON',
      project_duration: '8 weeks',
      budget_range: '$55,000 - $60,000',
      before_images: ['https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'],
      after_images: ['https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=800'],
      featured: true,
      client_name: 'Jennifer L.',
      display_order: 2
    },
    {
      id: '4',
      title: 'Complete Home Makeover',
      service_type: 'whole-home',
      description: 'Whole home renovation including kitchen, three bathrooms, new flooring throughout, and interior paint. Modern open concept with smart home features.',
      location: 'Toronto, ON',
      project_duration: '16 weeks',
      budget_range: '$150,000 - $175,000',
      before_images: ['https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800'],
      after_images: ['https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'],
      featured: true,
      testimonial: 'The entire process was seamless. They truly transformed our house into our dream home!',
      client_name: 'David & Lisa K.',
      display_order: 3
    }
  ] : [];

  const displayProjects = projects.length > 0 ? filteredProjects : mockProjects.filter(p => selectedFilter === 'all' || p.service_type === selectedFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">
            Our <span className="text-primary-900">Portfolio</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            Explore our recent projects and see the quality craftsmanship that sets us apart.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {filters.map(filter => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedFilter === filter.value
                    ? 'bg-primary-900 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {displayProjects.map(project => {
            const allImages = [...project.before_images, ...project.after_images];
            const currentIndex = currentImageIndex[project.id] || 0;
            const isBeforeImage = currentIndex < project.before_images.length;

            return (
              <Card key={project.id} hoverable>
                <div className="relative h-80 overflow-hidden rounded-t-xl bg-neutral-100">
                  <img
                    src={allImages[currentIndex]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className="text-sm font-bold text-neutral-800">
                      {isBeforeImage ? 'Before' : 'After'}
                    </span>
                  </div>

                  {allImages.length > 1 && (
                    <>
                      <button
                        onClick={() => prevImage(project.id, allImages.length)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                      >
                        <ArrowLeft className="w-5 h-5 text-neutral-800" />
                      </button>
                      <button
                        onClick={() => nextImage(project.id, allImages.length)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                      >
                        <ArrowRight className="w-5 h-5 text-neutral-800" />
                      </button>

                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {allImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(prev => ({ ...prev, [project.id]: index }))}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <CardBody className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-800 mb-2">{project.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{project.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-neutral-100">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-primary-900 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-neutral-500 font-medium">Location</div>
                        <div className="text-sm text-neutral-700">{project.location}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-primary-900 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs text-neutral-500 font-medium">Duration</div>
                        <div className="text-sm text-neutral-700">{project.project_duration}</div>
                      </div>
                    </div>
                    {project.budget_range && (
                      <div className="flex items-start gap-2 col-span-2">
                        <DollarSign className="w-5 h-5 text-primary-900 flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="text-xs text-neutral-500 font-medium">Investment Range</div>
                          <div className="text-sm text-neutral-700">{project.budget_range}</div>
                        </div>
                      </div>
                    )}
                  </div>

                  {project.testimonial && (
                    <div className="bg-primary-50 rounded-lg p-4 border-l-4 border-primary-900">
                      <p className="text-neutral-700 italic mb-2">"{project.testimonial}"</p>
                      {project.client_name && (
                        <p className="text-sm text-neutral-600 font-semibold">— {project.client_name}</p>
                      )}
                    </div>
                  )}
                </CardBody>
              </Card>
            );
          })}
        </div>

        {displayProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-500 text-lg">No projects found for this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
