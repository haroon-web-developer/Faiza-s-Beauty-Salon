import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    { q: "Is the salon only for ladies?", a: "Yes, Faiza's Beauty Salon is exclusively for ladies." },
    { q: "Is your team skilled?", a: "Our team consists of highly trained professionals with years of experience." },
    { q: "Is the salon luxurious?", a: "We pride ourselves on providing a premium, relaxing, and luxurious environment." },
    { q: "What can we expect?", a: "Expect top-tier service, high-quality products, and a rejuvenating experience." },
    { q: "Are the Products safe?", a: "We use only premium, dermatologically tested, and safe products." }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-16 md:py-24 px-6 md:px-[60px] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="order-2 lg:order-1">
        <p className="text-salon-muted leading-relaxed mb-8">
          Providing high-quality, hygienic, and affordable beauty services. Whether you are looking for a relaxing Moroccan bath, advanced skincare facial, or professional hair treatment, our experienced team is here to deliver the best results.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-black/10 pb-4">
              <button 
                className="w-full flex justify-between items-center text-left font-serif text-lg text-salon-dark"
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              >
                {faq.q}
                <ChevronDown className={`transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
              </button>
              {openIdx === idx && (
                <p className="mt-4 text-salon-muted text-sm leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="relative h-[400px] md:h-[600px] order-1 lg:order-2">
        <img src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=600&auto=format&fit=crop" alt="Makeup brush" className="w-full h-full object-cover rounded-lg shadow-xl" referrerPolicy="no-referrer" />
        <div className="absolute bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-10 bg-black/50 backdrop-blur-md p-4 md:p-6 rounded-lg text-white flex items-center gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-black text-xl shrink-0">
            📞
          </div>
          <div>
            <div className="font-serif text-[15px] md:text-lg leading-tight md:leading-normal">Begin your glowie consultation</div>
            <div className="font-bold text-sm md:text-base">
(051) 2726761</div>
          </div>
        </div>
      </div>
    </section>
  );
}
