import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#2A2A2A] text-white/80 pt-20 pb-6 px-6 md:px-[60px] text-[13px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="font-serif text-3xl font-bold tracking-wider text-white mb-6">
            Faiza's
          </div>
          <p className="leading-relaxed mb-6">
            Faiza's Beauty Salon LLC offers expert, personalized beauty care in a calming space to help you feel your best.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-serif text-xl mb-6">Quick links</h4>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-salon-gold transition-colors">› Home</Link></li>
            <li><Link to="/about" className="hover:text-salon-gold transition-colors">› About us</Link></li>
            <li><Link to="/services" className="hover:text-salon-gold transition-colors">› Services</Link></li>
            <li><Link to="/contact" className="hover:text-salon-gold transition-colors">› Contact us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif text-xl mb-6">Our Services</h4>
          <ul className="space-y-3">
            <li><Link to="/services#hair-care" className="hover:text-salon-gold transition-colors">› Hair Care</Link></li>
            <li><Link to="/services#henna-designs" className="hover:text-salon-gold transition-colors">› Henna Designs</Link></li>
            <li><Link to="/services#natural-makeup" className="hover:text-salon-gold transition-colors">› Makeup Services</Link></li>
            <li><Link to="/services#waxing-services" className="hover:text-salon-gold transition-colors">› Waxing Services </Link></li>
            <li><Link to="/services#nail-care" className="hover:text-salon-gold transition-colors">› Nail Care</Link></li>
            <li><Link to="/services#facial" className="hover:text-salon-gold transition-colors">› Facial & Skin Care</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-serif text-xl mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span>📍</span>
              <span>Islamabad, Pakistan</span>
            </li>
            <li className="flex gap-3">
              <span>📞</span>
              <span> 
(051) 2726761</span>
            </li>
            <li className="flex gap-3">
              <span>✉️</span>
              <span>info@faizasalon.com</span>
            </li>
          </ul>
          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/FaizaSalon/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-salon-gold hover:border-salon-gold transition-colors">f</a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-salon-gold hover:border-salon-gold transition-colors">in</a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center hover:bg-salon-gold hover:border-salon-gold transition-colors">ig</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>&copy; 2024 Faiza’s Beauty Salon. All rights reserved.</div>
        <div className="flex gap-2">
          <div className="bg-white text-black px-2 py-1 rounded text-[10px] font-bold">VISA</div>
          <div className="bg-white text-black px-2 py-1 rounded text-[10px] font-bold">MasterCard</div>
          <div className="bg-white text-black px-2 py-1 rounded text-[10px] font-bold">AMEX</div>
        </div>
      </div>
    </footer>
  );
}
