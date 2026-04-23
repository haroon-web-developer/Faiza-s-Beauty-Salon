import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Trash2, Clock, CalendarDays, Lock } from 'lucide-react';

export default function Admin() {
  const [bookings, setBookings] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  // Check if already authenticated in this session
  useEffect(() => {
    if (sessionStorage.getItem('admin_auth') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;
    
    // Load local storage bookings
    const loadBookings = () => {
      const stored = JSON.parse(localStorage.getItem('salon_bookings') || '[]');
      setBookings(stored);
    };
    
    loadBookings();
    
    // Auto refresh occasionally just in case tests happen in another tab
    const interval = setInterval(loadBookings, 5000);
    return () => clearInterval(interval);
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple hardcoded PIN for the prototype demo
    if (passcode === 'Faiza123' || passcode === '0000') {
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
      setError('');
    } else {
      setError('Incorrect passcode. Please try again.');
      setPasscode('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_auth');
  };

  const toggleStatus = (id) => {
    const updated = bookings.map(b => {
      if (b.id === id) {
        return { ...b, status: b.status === 'completed' ? 'pending' : 'completed' };
      }
      return b;
    });
    setBookings(updated);
    localStorage.setItem('salon_bookings', JSON.stringify(updated));
  };

  const deleteBooking = (id) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      const updated = bookings.filter(b => b.id !== id);
      setBookings(updated);
      localStorage.setItem('salon_bookings', JSON.stringify(updated));
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 font-sans">
        <Helmet>
          <title>Admin Login | Faiza's Beauty Salon</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 w-full max-w-md text-center"
        >
          <div className="w-16 h-16 bg-salon-dark text-salon-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <Lock className="w-8 h-8" />
          </div>
          <h1 className="font-serif text-3xl text-salon-dark mb-2">Admin Access</h1>
          <p className="text-gray-500 text-sm mb-8">Enter your secure passcode to view the booking dashboard.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input 
                type="password" 
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter Passcode..."
                className="w-full text-center border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-salon-gold focus:ring-1 focus:ring-salon-gold transition-all text-lg tracking-widest"
                autoFocus
              />
            </div>
            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
            <button 
              type="submit"
              className="w-full bg-salon-gold text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#b59565] transition-colors"
            >
              Unlock Dashboard
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Faiza's Beauty Salon</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="flex-1 bg-gray-50 font-sans min-h-screen pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 gap-4">
            <div>
              <h1 className="font-serif text-3xl md:text-5xl text-salon-dark mb-2">Bookings Dashboard</h1>
              <p className="text-gray-500">Track and manage your online appointments.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-end sm:items-center">
              <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 flex gap-4">
                 <div>
                   <span className="text-xs text-gray-400 uppercase tracking-wider block font-bold">Total</span>
                   <span className="text-xl font-medium">{bookings.length}</span>
                 </div>
                 <div className="w-px bg-gray-200"></div>
                 <div>
                   <span className="text-xs text-gray-400 uppercase tracking-wider block font-bold">Pending</span>
                   <span className="text-xl font-medium text-orange-500">
                     {bookings.filter(b => b.status !== 'completed').length}
                   </span>
                 </div>
              </div>
              <button 
                onClick={handleLogout}
                className="bg-gray-200 text-gray-600 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-gray-300 transition-colors h-full"
              >
                Lock App
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {bookings.length === 0 ? (
              <div className="p-12 text-center text-gray-500">
                <CalendarDays className="w-12 h-12 mx-auto text-gray-300 mb-4" />
                <p className="text-lg font-medium">No bookings yet</p>
                <p className="text-sm">When clients book online, their orders will appear here.</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50 border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500">
                      <th className="p-4 font-medium">Client</th>
                      <th className="p-4 font-medium">Contact</th>
                      <th className="p-4 font-medium">Service</th>
                      <th className="p-4 font-medium">Appointment Time</th>
                      <th className="p-4 font-medium">Status</th>
                      <th className="p-4 font-medium text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <AnimatePresence>
                      {bookings.map((booking) => (
                        <motion.tr 
                          key={booking.id}
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          className={`border-b border-gray-50 hover:bg-gray-50/50 transition-colors ${booking.status === 'completed' ? 'bg-gray-50/30' : ''}`}
                        >
                          <td className="p-4">
                            <div className="font-medium text-salon-dark">{booking.name}</div>
                            <div className="text-xs text-gray-400 mt-0.5">Booked: {new Date(booking.createdAt).toLocaleDateString()}</div>
                          </td>
                          <td className="p-4 text-salon-dark">{booking.phone}</td>
                          <td className="p-4">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#F4EAE6] text-salon-dark">
                              {booking.service}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2 text-salon-dark">
                              <CalendarDays className="w-4 h-4 text-gray-400" />
                              <span className="font-medium">{booking.date}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                              <Clock className="w-4 h-4 text-gray-300" />
                              <span>{booking.time}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            {booking.status === 'completed' ? (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span> Completed
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700 border border-orange-200">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse"></span> Pending
                              </span>
                            )}
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              {booking.status !== 'completed' && (
                                <button
                                  onClick={() => toggleStatus(booking.id)}
                                  title="Mark as Completed"
                                  className="p-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                                >
                                  <Check className="w-4 h-4" />
                                </button>
                              )}
                              <button
                                onClick={() => deleteBooking(booking.id)}
                                title="Delete Booking"
                                className="p-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
