import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/HeroSection';
import ServiceCard from '../components/ServiceCard';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Faiza's Beauty Salon | Premium Hair & Skin Care</title>
        <meta name="description" content="A premium sanctuary for hair, skin, and nails. Expert stylists dedicated to enhancing your natural beauty." />
      </Helmet>
      
      <div className="flex-1 flex flex-col pt-4 md:pt-10">
        <HeroSection />
        
        <div className="flex flex-col md:flex-row gap-5 px-6 md:px-[60px] pb-10 mt-10 md:mt-0">
          <ServiceCard 
            icon="✂️" 
            title="Hair Styling" 
            description="Expert cuts & colors" 
          />
          <ServiceCard 
            icon="💅" 
            title="Nail Artistry" 
            description="Manicures & design" 
          />
          <ServiceCard 
            icon="🧖‍♀️" 
            title="Skin Therapy" 
            description="Revitalizing treatments" 
          />
        </div>
      </div>
    </>
  );
}
