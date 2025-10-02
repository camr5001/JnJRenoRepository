import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { TrustSignals } from '../components/sections/TrustSignals';
import { Services } from '../components/sections/Services';
import { AssetGallery } from '../components/sections/AssetGallery';
import { Process } from '../components/sections/Process';
import { Testimonials } from '../components/sections/Testimonials';
import { About } from '../components/sections/About';
import { Contact } from '../components/sections/Contact';

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustSignals />
        <Services />
        <AssetGallery />
        <Process />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
