import { useOutletContext } from 'react-router-dom';
import { Sparkles, Check } from 'lucide-react';

export default function PackagesSection() {
  // If the component is used outside of an outlet context, provide a fallback
  const context = useOutletContext();
  const openBooking = context?.openBooking || (() => {});

  const services = [
    { name: "Bridal Full Package", price: "Rs. 35,000" },
    { name: "Party Makeup", price: "Rs. 12,000" },
    { name: "Hair Styling & Keratin", price: "Rs. 8,500" },
    { name: "Luxury Whitening Facial", price: "Rs. 6,000" },
    { name: "Manicure & Pedicure", price: "Rs. 4,500" },
    { name: "Full Body Waxing", price: "Rs. 3,500" }
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-[60px] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div className="order-2 lg:order-1">
        <div className="text-[11px] uppercase tracking-[2px] text-salon-muted mb-4">Our Pricing</div>
        <h2 className="font-serif text-3xl md:text-5xl text-salon-dark mb-6 leading-tight">
          Services & Packages
        </h2>
        
        {/* Discount Banner */}
        <div className="bg-[#F4EAE6] text-salon-dark p-4 rounded-xl border border-salon-gold/30 flex gap-3 items-start mb-8">
          <Sparkles className="w-5 h-5 text-salon-gold flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-sm">Special Bundle Discount!</p>
            <p className="text-sm text-salon-muted mt-1 leading-relaxed">
              Choose <strong className="text-salon-dark">more than 2 services</strong> (3 or more) during your visit and instantly receive a <strong className="text-salon-gold">20% discount</strong> on your total bill.
            </p>
          </div>
        </div>

        {/* Pricing List */}
        <div className="space-y-4 mb-8">
          {services.map((item, index) => (
            <div key={index} className="flex justify-between items-end border-b border-gray-200 pb-3">
              <div className="flex items-center gap-3">
                <Check className="w-4 h-4 text-salon-gold hidden sm:block" />
                <span className="font-medium text-salon-dark">{item.name}</span>
              </div>
              <span className="font-serif font-bold text-lg text-salon-gold">{item.price}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={openBooking}
          className="bg-salon-dark text-white px-8 py-4 text-[12px] uppercase tracking-widest hover:bg-black transition-colors w-full sm:w-auto"
        >
          Book Appointment
        </button>
      </div>

      <div className="relative h-[350px] sm:h-[450px] lg:h-[500px] order-1 lg:order-2 w-full max-w-[500px] mx-auto lg:max-w-none">
        <div className="absolute right-0 top-0 w-[65%] h-[75%] lg:h-[400px] rounded-t-full rounded-bl-full overflow-hidden shadow-lg z-10">
          <img src="https://bloomandblossom.ae/wp-content/uploads/2026/04/Nano-Banana-2-A-professional-salon-scene-featuring-a-beautiful-woman-with-flawless_-glowing-skin_-dr_2-4-1024x682.png" alt="Salon interior" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute left-0 bottom-0 w-[65%] h-[75%] lg:h-[400px] rounded-t-full rounded-br-full overflow-hidden shadow-lg">
          <img src="https://i.pinimg.com/736x/09/bf/fd/09bffda4a46ce565a188558ef4584cea.jpg" alt="Salon interior" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </div>
    </section>
  );
}
