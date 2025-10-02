import { Calendar, Ruler, Hammer, CheckCircle } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: Calendar,
      number: '01',
      title: 'Free Consultation',
      description: 'We meet with you to understand your vision, needs, and budget. Our expert designers will assess your space and provide initial recommendations.',
      duration: '1-2 hours',
      deliverable: 'Initial design concepts & budget estimate'
    },
    {
      icon: Ruler,
      number: '02',
      title: 'Design & Planning',
      description: 'Our team creates detailed designs, 3D renderings, and comprehensive project plans. We handle all permits and ensure compliance with local codes.',
      duration: '1-2 weeks',
      deliverable: 'Final designs, material selections & fixed-price contract'
    },
    {
      icon: Hammer,
      number: '03',
      title: 'Construction',
      description: 'Our skilled craftsmen bring your vision to life. We maintain clean work sites, provide daily updates, and ensure quality at every stage.',
      duration: 'Varies by project',
      deliverable: 'Weekly progress photos & milestone inspections'
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Final Walkthrough',
      description: 'We conduct a detailed walkthrough to ensure every detail meets our high standards and your expectations. Your satisfaction is our priority.',
      duration: '1 hour',
      deliverable: 'Project warranty & maintenance guide'
    }
  ];

  return (
    <section id="process" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-800 mb-4">
            Our Proven <span className="text-primary-900">Renovation Process</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We've perfected our process over 15 years to ensure smooth, stress-free renovations from start to finish.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-600 to-primary-900" style={{ top: '80px' }}></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-700 to-primary-900 rounded-full flex items-center justify-center mx-auto shadow-lg">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{step.number}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-800 mb-3 text-center">{step.title}</h3>
                    <p className="text-neutral-600 mb-4 text-center leading-relaxed">{step.description}</p>

                    <div className="pt-4 border-t border-neutral-100 space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-neutral-500 font-medium">Duration:</span>
                        <span className="text-neutral-700 font-semibold">{step.duration}</span>
                      </div>
                      <div className="text-xs text-neutral-500">
                        <span className="font-medium">You Receive:</span> {step.deliverable}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-900 mb-2">100%</div>
              <div className="text-neutral-600">Transparent Pricing</div>
              <p className="text-sm text-neutral-500 mt-2">No hidden fees or surprise costs</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-900 mb-2">98%</div>
              <div className="text-neutral-600">On-Time Completion</div>
              <p className="text-sm text-neutral-500 mt-2">We respect your schedule</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-900 mb-2">5 Years</div>
              <div className="text-neutral-600">Workmanship Guarantee</div>
              <p className="text-sm text-neutral-500 mt-2">Peace of mind with every project</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
