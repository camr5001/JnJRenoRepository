import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessSection } from '../components/ProcessSection';
import { AboutSection } from '../components/AboutSection';
import { CTASection } from '../components/CTASection';
import { ClientPhotosSection } from '../components/ClientPhotosSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export function NewHomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <div className="max-w-7xl mx-auto">
        <CTASection />
      </div>
      <ClientPhotosSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
