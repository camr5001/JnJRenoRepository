import { Phone, Mail, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Our Process' },
    { href: '#about', label: 'About Us' },
    { href: '#gallery', label: 'Gallery' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="bg-[#2b4a8c] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between sm:justify-end items-center gap-4 sm:gap-6 text-xs sm:text-sm">
          <a href="tel:6477804433" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>(647) 780-4433</span>
          </a>
          <a href="mailto:jnjrenovation@yahoo.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="hidden sm:inline">jnjrenovation@yahoo.com</span>
            <span className="sm:hidden">Email</span>
          </a>
        </div>
      </div>

      <header className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link to="/" className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              JnJ RENOVATION
            </Link>

            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[#2b4a8c] transition-colors font-medium relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2b4a8c] transition-all group-hover:w-full"></span>
                </a>
              ))}
              <a
                href="#contact"
                className="bg-[#2b4a8c] text-white px-6 py-2.5 rounded-lg hover:bg-[#1e3870] transition-all font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Free Consultation
              </a>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[112px] bg-white z-40 overflow-y-auto">
            <nav className="flex flex-col p-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-gray-700 hover:text-[#2b4a8c] hover:bg-gray-50 transition-colors font-medium py-4 px-4 rounded-lg text-lg"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleNavClick}
                className="bg-[#2b4a8c] text-white px-6 py-4 rounded-lg hover:bg-[#1e3870] transition-colors font-medium text-center text-lg mt-4"
              >
                Free Consultation
              </a>
              <div className="pt-6 mt-6 border-t border-gray-200 space-y-4">
                <a href="tel:6477804433" className="flex items-center gap-3 text-gray-600 hover:text-[#2b4a8c] py-2">
                  <Phone className="w-5 h-5" />
                  <span>(647) 780-4433</span>
                </a>
                <a href="mailto:jnjrenovation@yahoo.com" className="flex items-center gap-3 text-gray-600 hover:text-[#2b4a8c] py-2">
                  <Mail className="w-5 h-5" />
                  <span>jnjrenovation@yahoo.com</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
