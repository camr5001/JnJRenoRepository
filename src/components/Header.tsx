import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <>
      <div className="bg-[#2b4a8c] text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center gap-6 text-sm">
          <a href="tel:6477804433" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone className="w-4 h-4" />
            <span>(647) 780-4433</span>
          </a>
          <a href="mailto:jnjrenovation@yahoo.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Mail className="w-4 h-4" />
            <span>jnjrenovation@yahoo.com</span>
          </a>
        </div>
      </div>

      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="text-2xl font-bold text-gray-900 tracking-tight">
              JnJ RENOVATION
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-700 hover:text-[#2b4a8c] transition-colors font-medium">
                Services
              </a>
              <a href="#process" className="text-gray-700 hover:text-[#2b4a8c] transition-colors font-medium">
                Our Process
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#2b4a8c] transition-colors font-medium">
                Testimonials
              </a>
              <a href="#about" className="text-gray-700 hover:text-[#2b4a8c] transition-colors font-medium">
                About Us
              </a>
              <a
                href="#contact"
                className="bg-[#2b4a8c] text-white px-6 py-2.5 rounded-md hover:bg-[#1e3870] transition-colors font-medium"
              >
                Free Consultation
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
