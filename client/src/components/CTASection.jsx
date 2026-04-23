import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="px-6 md:px-[60px] py-16 md:py-24 bg-salon-accent text-center flex flex-col items-center justify-center">
      <h2 className="font-serif text-4xl md:text-5xl mb-6 max-w-2xl text-salon-text leading-tight">
        Ready to experience the ultimate beauty transformation?
      </h2>
      <p className="text-salon-text/80 mb-10 max-w-md text-[16px] leading-relaxed">
        Book your appointment today and let our expert stylists pamper you from head to toe in our luxury sanctuary.
      </p>
      <Link 
        to="/contact" 
        className="bg-salon-white text-salon-text px-10 py-4 rounded-full font-semibold text-[14px] uppercase tracking-[1px] inline-block shadow-[0_10px_30px_rgba(74,62,62,0.1)] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(74,62,62,0.15)] transition-all duration-300"
      >
        Book Your Visit
      </Link>
    </section>
  );
}
