import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Hair Care',
    date: '',
    time: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    "Bridal Full Package", 
    "Party Makeup", 
    "Hair Styling & Keratin", 
    "Luxury Whitening Facial", 
    "Manicure & Pedicure", 
    "Full Body Waxing",
    "Other Services"
  ];
  
  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", 
    "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
  ];

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setIsSuccess(false);
      setFormData(prev => ({...prev, date: '', time: ''}));
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep(2);
  const handleBack = () => setStep(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for online booking on Vercel deployment prototype
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Save locally to show persistence in demo
      const existingBookings = JSON.parse(localStorage.getItem('salon_bookings') || '[]');
      localStorage.setItem('salon_bookings', JSON.stringify([{
        ...formData,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date().toISOString(),
        status: 'pending' // Initial status
      }, ...existingBookings]));
      
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />
        
        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="bg-salon-dark p-6 text-white text-center relative">
            <button 
              onClick={onClose}
              className="absolute right-4 top-4 text-white/70 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <h2 className="font-serif text-2xl">Book an Appointment</h2>
            <p className="text-[12px] uppercase tracking-wider text-salon-gold mt-2">Secure your spot online</p>
          </div>

          <div className="p-6 md:p-8">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="font-serif text-2xl text-salon-dark mb-4">Booking Confirmed!</h3>
                <p className="text-salon-muted mb-8 leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>!<br/> 
                  Your <strong>{formData.service}</strong> appointment is set for <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
                </p>
                <button 
                  onClick={onClose}
                  className="w-full bg-salon-dark text-white py-4 rounded-lg font-medium text-[13px] uppercase tracking-widest hover:bg-black transition-colors"
                >
                  Done
                </button>
              </motion.div>
            ) : (
              <form onSubmit={step === 2 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
                
                {/* Step 1: Personal Info & Service */}
                {step === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-5"
                  >
                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-salon-dark mb-2 font-bold">Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-salon-gold focus:ring-1 focus:ring-salon-gold transition-all"
                        placeholder="e.g. Aisha Khan"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-salon-dark mb-2 font-bold">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-salon-gold focus:ring-1 focus:ring-salon-gold transition-all"
                        placeholder="e.g. 0300 1234567"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-salon-dark mb-2 font-bold">Select Service</label>
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-salon-gold focus:ring-1 focus:ring-salon-gold transition-all appearance-none bg-white"
                      >
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit"
                        className="w-full bg-salon-gold text-white py-4 rounded-lg font-bold text-[13px] uppercase tracking-widest hover:bg-[#b59565] transition-colors flex items-center justify-center gap-2"
                      >
                        Choose Date & Time
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Date and Time */}
                {step === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-salon-dark mb-2 font-bold">Choose Date</label>
                      <input 
                        required
                        type="date" 
                        name="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-salon-gold focus:ring-1 focus:ring-salon-gold transition-all uppercase text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-[12px] uppercase tracking-wider text-salon-dark mb-3 font-bold">Available Slots</label>
                      <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map(time => (
                          <div 
                            key={time}
                            onClick={() => setFormData({...formData, time})}
                            className={`p-3 text-center rounded-lg border cursor-pointer font-medium text-sm transition-all ${formData.time === time ? 'border-salon-gold bg-salon-gold/10 text-salon-dark' : 'border-gray-200 hover:border-salon-gold/50 text-gray-500'}`}
                          >
                            {time}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 flex gap-3">
                      <button 
                        type="button"
                        onClick={handleBack}
                        disabled={isSubmitting}
                        className="w-1/3 bg-gray-100 text-salon-dark py-4 rounded-lg font-medium text-[13px] uppercase tracking-widest hover:bg-gray-200 transition-colors"
                      >
                        Back
                      </button>
                      <button 
                        type="submit"
                        disabled={isSubmitting || !formData.date || !formData.time}
                        className="w-2/3 bg-salon-dark text-white py-4 rounded-lg font-bold text-[13px] uppercase tracking-widest hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : 'Confirm Booking'}
                      </button>
                    </div>
                  </motion.div>
                )}

              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
