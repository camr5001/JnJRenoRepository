import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const goToContactForm = () => {
    navigate('/contact');
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="bg-primary-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-6 text-sm">
          <a href="tel:(647) 780-4433" className="flex items-center gap-2 hover:text-primary-300 transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">(647) 780-4433</span>
          </a>
          <a href="mailto:jnjrenovation@yahoo.com" className="flex items-center gap-2 hover:text-primary-300 transition-colors">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">jnjrenovation@yahoo.com</span>
          </a>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl text-neutral-800 hover:text-primary-900 transition-colors"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            JnJ RENOVATION
          </button>

          <div className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-neutral-700 hover:text-primary-600 transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('process')} className="text-slate-700 hover:text-primary-600 transition-colors font-medium">
              Our Process
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-slate-700 hover:text-primary-600 transition-colors font-medium">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-primary-600 transition-colors font-medium">
              About Us
            </button>
            <Button onClick={goToContactForm} size="sm">
              Free Consultation
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-700 hover:text-primary-600 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-3 text-neutral-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="block w-full text-left px-4 py-3 text-neutral-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition-colors font-medium"
            >
              Our Process
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-left px-4 py-3 text-neutral-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition-colors font-medium"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 text-neutral-700 hover:bg-primary-50 hover:text-primary-700 rounded-lg transition-colors font-medium"
            >
              About Us
            </button>
            <Button onClick={goToContactForm} fullWidth>
              Free Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
