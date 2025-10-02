import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              JNJ <span className="text-primary-300">Renovations</span>
            </h3>
            <p className="text-neutral-400 mb-4 leading-relaxed">
              Transforming homes across the Greater Toronto Area for over 15 years. Quality craftsmanship, transparent pricing, and exceptional service.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-primary-300 transition-colors">
                  Kitchen Remodeling
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-primary-300 transition-colors">
                  Bathroom Renovation
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-primary-300 transition-colors">
                  Basement Finishing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-primary-300 transition-colors">
                  Whole-Home Renovation
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-primary-300 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('process')} className="hover:text-primary-300 transition-colors">
                  Our Process
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary-300 transition-colors">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-primary-300 transition-colors">
                  Contact Us
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-primary-300 transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:(647) 780-4433" className="flex items-center gap-2 hover:text-primary-300 transition-colors">
                  <Phone className="w-4 h-4" />
                  (647) 780-4433
                </a>
              </li>
              <li>
                <a href="mailto:jnjrenovation@yahoo.com" className="flex items-center gap-2 hover:text-primary-300 transition-colors">
                  <Mail className="w-4 h-4" />
                  jnjrenovation@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <span>Greater Toronto Area<br />Ontario</span>
              </li>
            </ul>

            <div className="mt-6 bg-neutral-800 rounded-lg p-4">
              <p className="text-sm font-semibold text-white mb-1">Office Hours</p>
              <p className="text-xs text-neutral-400">Mon-Fri: 8am - 6pm</p>
              <p className="text-xs text-neutral-400">Sat: 9am - 4pm</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-sm text-neutral-400">
              <p>&copy; {currentYear} JNJ Renovations. All rights reserved.</p>
              <p className="mt-1">Licensed, Bonded & Insured | License #ON-123456</p>
            </div>
            <div className="flex flex-wrap gap-4 md:justify-end text-sm">
              <a href="#" className="hover:text-primary-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-300 transition-colors">Accessibility</a>
              <a href="#" className="hover:text-primary-300 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
