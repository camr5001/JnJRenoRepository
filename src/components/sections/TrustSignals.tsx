import { Shield, Award, ThumbsUp, Clock } from 'lucide-react';

export function TrustSignals() {
  const signals = [
    {
      icon: Shield,
      title: 'Fully Licensed & Insured',
      description: 'Licensed contractors with comprehensive liability and workers compensation insurance'
    },
    {
      icon: Award,
      title: 'Quality Craftsmanship',
      description: 'Excellence in home renovation and customer service'
    },
    {
      icon: ThumbsUp,
      title: '5-Year Workmanship Guarantee',
      description: 'All work backed by our comprehensive 5-year quality guarantee'
    },
    {
      icon: Clock,
      title: 'On-Time Completion',
      description: '98% of projects completed on or ahead of schedule with no hidden costs'
    }
  ];

  return (
    <section className="py-16 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {signals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-900 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-neutral-800 mb-2">{signal.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{signal.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
