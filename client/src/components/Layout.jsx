import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BookingModal from './BookingModal';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const { pathname, hash } = useLocation();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar onOpenBooking={() => setIsBookingModalOpen(true)} />
      <main className="flex-1 flex flex-col">
        <Outlet context={{ openBooking: () => setIsBookingModalOpen(true) }} />
      </main>
      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
}
