import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-[60px] pb-10 items-center">
      <div className="mt-10 lg:mt-0">
        <h1 className="font-serif text-5xl md:text-[64px] leading-[1.1] font-normal mb-6">
          Redefining Elegance for the Modern Woman
        </h1>
        <p className="text-[18px] text-salon-muted leading-relaxed mb-8 max-w-[400px]">
          A premium sanctuary for hair, skin, and nails. Expert stylists dedicated to enhancing your natural beauty.
        </p>
        <Link 
          to="/contact" 
          className="bg-salon-accent text-salon-text px-8 py-4 rounded-full font-semibold text-[14px] uppercase tracking-[1px] inline-block shadow-[0_4px_15px_rgba(250,218,221,0.4)] hover:opacity-90 transition-opacity"
        >
          Book Appointment
        </Link>
      </div>
      <div className="relative h-[400px] md:h-[500px] w-full mt-8 lg:mt-0">
        <div className="w-full h-full bg-gradient-to-br from-[#FADADD] to-[#EEDBD7] rounded-[32px] shadow-[0_10px_30px_rgba(74,62,62,0.05)] flex items-center justify-center overflow-hidden">
          <span className="text-[80px] md:text-[120px] text-white/50 font-serif">✨</span>
        </div>
        <div className="absolute -bottom-5 -right-2 md:-right-5 bg-salon-white p-4 md:p-6 rounded-[20px] shadow-[0_10px_30px_rgba(74,62,62,0.05)] flex flex-col gap-1 md:gap-2">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[1px] text-salon-muted">Instagram Rating</span>
          <span className="font-serif text-[16px] md:text-[20px]">4.9/5 Stars ★</span>
        </div>
      </div>
    </div>
  );
}
