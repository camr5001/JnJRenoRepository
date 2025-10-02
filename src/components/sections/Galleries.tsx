import { useState, useEffect } from 'react';
import { Bath, Home as HomeIcon, ChefHat } from 'lucide-react';
import { ProjectCard } from '../gallery/ProjectCard';
import { GalleryFilter } from '../gallery/GalleryFilter';
import { ImageModal } from '../gallery/ImageModal';
import { supabase, PortfolioProject } from '../../lib/supabase';
import { Button } from '../ui/Button';

type GalleryType = 'bathroom' | 'basement' | 'kitchen';

export function Galleries() {
  const [activeGallery, setActiveGallery] = useState<GalleryType>('kitchen');
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [activeStyle, setActiveStyle] = useState('all');
  const [activeBudget, setActiveBudget] = useState('all');
  const [activeTimeline, setActiveTimeline] = useState('all');

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
    }
  };

  const mockProjects: PortfolioProject[] = projects.length === 0 ? [
    {
      id: '1',
      title: 'Modern Spa Bathroom',
      service_type: 'bathroom',
      description: 'Luxury master bathroom featuring walk-in shower with rain head, freestanding soaking tub, heated marble floors, and custom double vanity.',
      location: 'Toronto, ON',
      project_duration: '4 weeks',
      budget_range: '$35,000 - $40,000',
      before_images: ['https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800'],
      after_images: ['https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800'],
      featured: true,
      testimonial: 'Our bathroom feels like a luxury spa. The team was professional and the quality is outstanding!',
      client_name: 'Sarah & Michael R.',
      display_order: 0,
      style: 'modern',
      completion_date: 'March 2024'
    },
    {
      id: '2',
      title: 'Classic Bathroom Renovation',
      service_type: 'bathroom',
      description: 'Traditional style bathroom with clawfoot tub, pedestal sink, subway tile walls, and vintage fixtures.',
      location: 'Toronto, ON',
      project_duration: '3 weeks',
      budget_range: '$25,000 - $30,000',
      before_images: ['https://images.pexels.com/photos/2598024/pexels-photo-2598024.jpeg?auto=compress&cs=tinysrgb&w=800'],
      after_images: ['https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800'],
      featured: false,
      display_order: 1,
      style: 'traditional',
      completion_date: 'February 2024'
    },
    {
      id: '3',
      title: 'Contemporary Bathroom Suite',
      service_type: 'bathroom',
      description: 'Sleek contemporary design with frameless glass shower, floating vanity, LED mirrors, and minimalist fixtures.',
      location: 'Toronto, ON',
      project_duration: '5 weeks',
      budget_range: '$40,000 - $45,000',
      before_images: ['https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=800'],
      after_images: ['https://images.pexels.com/photos/1358912/pexels-photo-1358912.jpeg?auto=compress&cs=tinysrgb&w=800'],
      featured: true,
      testimonial: 'The attention to detail was incredible. Every element was perfectly executed!',
      client_name: 'Jennifer L.',
      display_order: 2,
      style: 'contemporary',
      completion_date: 'January 2024'
    },
    {
      id: '4',
      title: 'Entertainment Basement',
      service_type: 'basement',
      description: 'Complete basement transformation with home theater, wet bar, game area, and custom lighting throughout.',
      location: 'Toronto, ON',
      project_duration: '8 weeks',
      budget_range: '$60,000 - $70,000',
      before_images: ['https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'],
      after_images: ['https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg?auto=compress&cs=tinysrgb&w=800'],
      featured: true,
      testimonial: 'This basement exceeded all our expectations. It\'s now our favorite space in the house!',
      client_name: 'David & Lisa K.',
      display_order: 0,
      style: 'modern',
      completion_date: 'April 2024'
    },
    {
      id: '5',
      title: 'Cozy Family Basement',
      service_type: 'basement',
      description: 'Warm and inviting basement with family room, kids play area, laundry room, and ample storage solutions.',
      location: 'Toronto, ON',
      project_duration: '7 weeks',
      budget_range: '$45,000 - $50,000',
      before_images: ['https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800'],
      after_images: ['https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800'],
      featured: false,
      display_order: 1,
      style: 'transitional',
      completion_date: 'March 2024'
    },
    {
      id: '6',
      title: 'Luxury Basement Suite',
      service_type: 'basement',
      description: 'High-end basement with guest suite, full bathroom, kitchenette, and separate entrance for rental income.',
      location: 'Toronto, ON',
      project_duration: '10 weeks',
      budget_range: '$80,000 - $90,000',
      before_images: ['https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=800'],
      after_images: ['https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'],
      featured: true,
      display_order: 2,
      style: 'contemporary',
      completion_date: 'February 2024'
    },
    {
      id: '7',
      title: 'Chef\'s Dream Kitchen',
      service_type: 'kitchen',
      description: 'Professional-grade kitchen with custom cabinetry, quartz countertops, high-end appliances, and large island with seating.',
      location: 'Toronto, ON',
      project_duration: '6 weeks',
      budget_range: '$55,000 - $65,000',
      before_images: ['https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800'],
      after_images: ['https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800'],
      featured: true,
      testimonial: 'This kitchen is everything we dreamed of. The functionality and beauty are perfect!',
      client_name: 'Amanda F.',
      display_order: 0,
      style: 'modern',
      completion_date: 'May 2024'
    },
    {
      id: '8',
      title: 'Classic Country Kitchen',
      service_type: 'kitchen',
      description: 'Warm traditional kitchen with shaker cabinets, granite countertops, farmhouse sink, and vintage-style fixtures.',
      location: 'Toronto, ON',
      project_duration: '5 weeks',
      budget_range: '$40,000 - $48,000',
      before_images: ['https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800'],
      after_images: ['https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800'],
      featured: false,
      display_order: 1,
      style: 'traditional',
      completion_date: 'April 2024'
    },
    {
      id: '9',
      title: 'Contemporary Open Kitchen',
      service_type: 'kitchen',
      description: 'Sleek open-concept kitchen with handleless cabinets, waterfall island, smart appliances, and integrated lighting.',
      location: 'Toronto, ON',
      project_duration: '7 weeks',
      budget_range: '$70,000 - $80,000',
      before_images: ['https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800'],
      after_images: ['https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800'],
      featured: true,
      testimonial: 'The design is stunning and so functional. We love entertaining in this space!',
      client_name: 'Robert & Emily C.',
      display_order: 2,
      style: 'contemporary',
      completion_date: 'March 2024'
    }
  ] : [];

  const displayProjects = projects.length > 0 ? projects : mockProjects;

  const filteredProjects = displayProjects
    .filter(p => p.service_type === activeGallery)
    .filter(p => activeStyle === 'all' || p.style === activeStyle)
    .filter(p => {
      if (activeBudget === 'all') return true;

      const budget = p.budget_range || '';
      const value = parseInt(budget.replace(/[^0-9]/g, ''));

      switch (activeBudget) {
        case 'under-30k': return value < 30000;
        case '30k-50k': return value >= 30000 && value < 50000;
        case '50k-75k': return value >= 50000 && value < 75000;
        case '75k-100k': return value >= 75000 && value < 100000;
        case 'over-100k': return value >= 100000;
        default: return true;
      }
    })
    .filter(p => {
      if (activeTimeline === 'all') return true;

      const duration = p.project_duration || '';
      const weeks = parseInt(duration.replace(/[^0-9]/g, ''));

      switch (activeTimeline) {
        case 'under-4weeks': return weeks < 4;
        case '4-8weeks': return weeks >= 4 && weeks <= 8;
        case '8-12weeks': return weeks > 8 && weeks <= 12;
        case 'over-12weeks': return weeks > 12;
        default: return true;
      }
    });

  const galleries = [
    {
      type: 'kitchen' as GalleryType,
      icon: ChefHat,
      title: 'Kitchen Renovations',
      description: 'Stunning kitchen transformations featuring custom cabinetry, premium appliances, and beautiful designs.'
    },
    {
      type: 'bathroom' as GalleryType,
      icon: Bath,
      title: 'Bathroom Renovations',
      description: 'Luxurious bathroom upgrades from spa-like retreats to modern, functional spaces.'
    },
    {
      type: 'basement' as GalleryType,
      icon: HomeIcon,
      title: 'Basement Renovations',
      description: 'Complete basement transformations creating valuable living space for your family.'
    }
  ];

  const activeGalleryInfo = galleries.find(g => g.type === activeGallery);
  const Icon = activeGalleryInfo?.icon || ChefHat;

  const handleProjectClick = (project: PortfolioProject) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const resetFilters = () => {
    setActiveStyle('all');
    setActiveBudget('all');
    setActiveTimeline('all');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="galleries" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">
            Our <span className="text-primary-900">Project Galleries</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Explore our portfolio of completed renovations. Each project showcases our commitment to quality, craftsmanship, and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {galleries.map((gallery) => {
            const GalleryIcon = gallery.icon;
            return (
              <button
                key={gallery.type}
                onClick={() => {
                  setActiveGallery(gallery.type);
                  resetFilters();
                }}
                className={`group p-6 rounded-2xl transition-all duration-300 ${
                  activeGallery === gallery.type
                    ? 'bg-primary-900 text-white shadow-xl scale-105'
                    : 'bg-white text-neutral-700 hover:bg-primary-50 hover:shadow-lg'
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${
                  activeGallery === gallery.type
                    ? 'bg-white/20'
                    : 'bg-primary-100 group-hover:bg-primary-200'
                }`}>
                  <GalleryIcon className={`w-8 h-8 ${
                    activeGallery === gallery.type ? 'text-white' : 'text-primary-900'
                  }`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{gallery.title}</h3>
                <p className={`text-sm ${
                  activeGallery === gallery.type ? 'text-primary-100' : 'text-neutral-600'
                }`}>
                  {gallery.description}
                </p>
              </button>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-2xl p-8 mb-8 text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">{activeGalleryInfo?.title}</h3>
              <p className="text-primary-100">{activeGalleryInfo?.description}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-primary-100">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
            </p>
            <Button onClick={scrollToContact} className="bg-white text-primary-900 hover:bg-primary-50">
              Start Your Project
            </Button>
          </div>
        </div>

        <GalleryFilter
          activeStyle={activeStyle}
          activeBudget={activeBudget}
          activeTimeline={activeTimeline}
          onStyleChange={setActiveStyle}
          onBudgetChange={setActiveBudget}
          onTimelineChange={setActiveTimeline}
          onReset={resetFilters}
        />

        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                beforeImage={project.before_images[0]}
                afterImage={project.after_images[0]}
                description={project.description}
                location={project.location}
                duration={project.project_duration}
                completionDate={project.completion_date}
                budgetRange={project.budget_range}
                style={project.style}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl">
            <p className="text-neutral-500 text-lg mb-4">
              No projects match your current filters
            </p>
            <Button onClick={resetFilters} variant="outline">
              Reset All Filters
            </Button>
          </div>
        )}

        {selectedProject && (
          <ImageModal
            isOpen={modalOpen}
            onClose={() => {
              setModalOpen(false);
              setSelectedProject(null);
            }}
            projectTitle={selectedProject.title}
            images={[
              ...selectedProject.before_images.map(url => ({ url, type: 'before' as const })),
              ...selectedProject.after_images.map(url => ({ url, type: 'after' as const }))
            ]}
            description={selectedProject.description}
            location={selectedProject.location}
            duration={selectedProject.project_duration}
            budgetRange={selectedProject.budget_range}
            style={selectedProject.style}
            testimonial={selectedProject.testimonial}
            clientName={selectedProject.client_name}
          />
        )}
      </div>
    </section>
  );
}
