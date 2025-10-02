import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ContactFormPage } from './pages/ContactFormPage';
import { SEO } from './components/SEO';

function App() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'JNJ Renovations',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    '@id': 'https://jnjrenovations.com',
    url: 'https://jnjrenovations.com',
    telephone: '(647) 780-4433',
    email: 'jnjrenovation@yahoo.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.6532,
      longitude: -79.3832
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00'
      }
    ],
    priceRange: '$$$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '500'
    },
    description: 'JNJ Renovations - Premier home renovation company serving the Greater Toronto Area for over 15 years. Specializing in kitchen remodeling, bathroom renovation, basement finishing, and whole-home transformations.'
  };

  return (
    <Router>
      <SEO
        title="JNJ Renovations | Home Renovation Experts Greater Toronto Area"
        description="JNJ Renovations - Expert home renovation company in the Greater Toronto Area. Professional kitchen remodeling, bathroom renovations, basement finishing, and whole-home transformations. 15+ years experience, licensed & insured. Free consultation."
        keywords="home renovation Toronto, kitchen remodeling Greater Toronto Area, bathroom renovation Toronto, basement finishing Ontario, home remodeling contractor, whole home renovation, Toronto contractor, GTA renovations"
        schema={localBusinessSchema}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
