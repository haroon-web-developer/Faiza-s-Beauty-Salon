import { Helmet } from 'react-helmet-async';
import ServicesSection from '../components/ServicesSection';
import PackagesSection from '../components/PackagesSection';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Salon Services & Pricing | Faiza's Beauty Salon Islamabad</title>
        <meta name="description" content="View our premium salon services and prices including bridal makeup, party makeup, keratin treatments, luxury facials, and full body waxing in Islamabad." />
        <link rel="canonical" href="https://faizasbeautysalon.com/services" />
      </Helmet>
      <div className="flex-1">
        <ServicesSection />
        <PackagesSection />
      </div>
    </>
  );
}
