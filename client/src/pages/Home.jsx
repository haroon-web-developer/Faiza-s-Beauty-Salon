import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import FeaturesStrip from '../components/FeaturesStrip';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import GoogleReviewsSection from '../components/GoogleReviewsSection';
import PackagesSection from '../components/PackagesSection';
import FAQSection from '../components/FAQSection';
import VisitUsSection from '../components/VisitUsSection';

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Faiza's Beauty Salon",
    "image": "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
    "@id": "https://faizasbeautysalon.com/",
    "url": "https://faizasbeautysalon.com/",
    "telephone": "03137386619",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "G10 Markaz",
      "addressLocality": "Islamabad",
      "addressRegion": "ICT",
      "postalCode": "44000",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.6823,
      "longitude": 73.0116
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    }
  };

  return (
    <>
      <Helmet>
        <title>Faiza's Beauty Salon | Premium Ladies Salon in Islamabad</title>
        <meta name="description" content="A premium sanctuary for bridal makeup, hair styling, skin polishing, and nail artistry located in G10 Markaz, Islamabad." />
        <link rel="canonical" href="https://faizasbeautysalon.com/" />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      
      <div className="flex-1 flex flex-col">
        <HeroSection />
        <FeaturesStrip />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <GoogleReviewsSection />
        <PackagesSection />
        <FAQSection />
        <VisitUsSection />
      </div>
    </>
  );
}
