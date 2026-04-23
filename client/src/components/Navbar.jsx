import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ onOpenBooking }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="bg-[#2A2A2A] text-white text-center py-2 text-[10px] md:text-xs tracking-widest uppercase">
        Special offer! Get 20% off on all services this month.
      </div>
      <nav className="h-24 flex justify-between items-center px-6 md:px-[60px] bg-transparent border-b border-black/5 relative z-50">
        <div className="font-serif text-3xl font-bold tracking-wider">
          <Link to="/" onClick={closeMenu}>Faiza's</Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 text-[13px] uppercase tracking-wider font-medium items-center">
          <Link to="/" className="text-salon-text hover:text-salon-gold transition-colors">Home</Link>
          <Link to="/about" className="text-salon-text hover:text-salon-gold transition-colors">About Us</Link>
          <Link to="/services" className="text-salon-text hover:text-salon-gold transition-colors">Our Services</Link>
          <a href="https://wa.me/923137386619?text=Hello%20Faiza's%20Beauty%20Salon!%20I%20would%20like%20to%20book.%0A%0A*Name:*%20%0A*Phone:*%20%0A*Service:*%20%0A*Date/Time:*%20%0A%0A(Please%20fill%20in%20your%20details%20above)" target="_blank" rel="noopener noreferrer" className="text-salon-text hover:text-salon-gold transition-colors">Contact Us</a>
        </div>
        
        <div className="hidden lg:block">
          <button 
            onClick={onOpenBooking}
            className="bg-[#2A2A2A] text-white px-6 py-3 text-[12px] uppercase tracking-widest hover:bg-black transition-colors inline-block"
          >
            Online Booking
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div 
          className="lg:hidden text-salon-text text-3xl cursor-pointer" 
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out flex flex-col pt-32 px-6 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-8 text-lg uppercase tracking-widest font-medium">
          <Link to="/" onClick={closeMenu} className="border-b border-gray-100 pb-4 text-salon-dark hover:text-salon-gold">Home</Link>
          <Link to="/about" onClick={closeMenu} className="border-b border-gray-100 pb-4 text-salon-dark hover:text-salon-gold">About Us</Link>
          <Link to="/services" onClick={closeMenu} className="border-b border-gray-100 pb-4 text-salon-dark hover:text-salon-gold">Our Services</Link>
          <a 
            href="https://wa.me/923137386619?text=Hello%20Faiza's%20Beauty%20Salon!%20I%20would%20like%20to%20book.%0A%0A*Name:*%20%0A*Phone:*%20%0A*Service:*%20%0A*Date/Time:*%20%0A%0A(Please%20fill%20in%20your%20details%20above)" 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={closeMenu}
            className="border-b border-gray-100 pb-4 text-salon-dark hover:text-salon-gold"
          >
            Contact Us
          </a>
          
          <button 
            onClick={() => { closeMenu(); onOpenBooking(); }}
            className="bg-[#2A2A2A] text-white px-6 py-4 text-center mt-4 text-[13px] uppercase tracking-widest hover:bg-black transition-colors w-full"
          >
            Online Booking
          </button>
        </div>
      </div>
    </>
  );
}
