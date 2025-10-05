import { Calendar, Ruler, Hammer, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Free Consultation',
    description: 'We meet with you to understand your vision, needs, and budget. Our expert designers will assess your space and provide initial recommendations.',
    duration: '1-2 hours',
    receive: 'Initial design concepts & budget estimate',
  },
  {
    number: '02',
    icon: Ruler,
    title: 'Design & Planning',
    description: 'Our team creates detailed designs, 3D renderings, and comprehensive project plans. We handle all permits and ensure compliance with local codes.',
    duration: '1-2 weeks',
    receive: 'Final designs, material selections & timeline',
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Construction',
    description: 'Our skilled craftsmen bring your vision to life. We maintain clean work sites, provide daily updates, and ensure quality at every stage.',
    duration: 'Varies by project',
    receive: 'Weekly progress photos & milestone inspections',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Final Walkthrough',
    description: 'We conduct a detailed walkthrough to ensure every detail meets our high standards and your expectations. Your satisfaction is our priority.',
    duration: '1 hour',
    receive: 'Project warranty & maintenance guide',
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Proven <span className="text-[#2b4a8c]">Renovation Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've perfected our process over 15 years to ensure smooth, stress-free renovations from start to finish.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-xl transition-shadow">
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-[#2b4a8c] w-16 h-16 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="bg-[#1a2332] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">{step.description}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-900">Duration:</span>
                      <span className="text-gray-600 ml-2">{step.duration}</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200">
                      <p className="font-semibold text-gray-900 mb-1">You Receive:</p>
                      <p className="text-[#2b4a8c] text-xs">{step.receive}</p>
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-3 w-6 h-1 bg-[#2b4a8c]"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
