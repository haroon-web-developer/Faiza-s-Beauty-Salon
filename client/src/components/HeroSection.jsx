import { Link, useOutletContext } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

function AnimatedNumber({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      let startTime;
      const duration = 2000;
      
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3); // cubic ease out
        const current = Math.floor(easeOut * value);
        
        if (ref.current) {
          ref.current.textContent = current.toLocaleString() + suffix;
        }
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          if (ref.current) {
            ref.current.textContent = value.toLocaleString() + suffix;
          }
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [inView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

export default function HeroSection() {
  const context = useOutletContext();
  const openBooking = context?.openBooking || (() => {});

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:px-[60px] py-12 md:py-20 items-center overflow-hidden">
      <motion.div 
        className="max-w-xl"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-[64px] leading-[1.1] text-salon-dark mb-6">
          Discover the New You with Faiza's Beauty Salon
        </motion.h1>
        <motion.p variants={fadeUp} className="text-[16px] text-salon-muted leading-relaxed mb-8">
          Step into a realm where beauty meets luxury and each detail is accomplished with accuracy and love. At <strong>Faiza's Salon</strong>, the most reliable <strong>ladies salon</strong>, we combine the two elements (science & art) to reveal your authentic beauty.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-12">
          <button 
            onClick={openBooking}
            className="bg-salon-gold text-white px-8 py-4 text-[12px] uppercase tracking-widest hover:bg-[#b59565] transition-colors flex items-center gap-2"
          >
            <span>✨</span> Book Online
          </button>
          <a href="https://wa.me/923214576734?text=Hello%20Faiza's%20Beauty%20Salon!%20I%20would%20like%20to%20book.%0A%0A*Name:*%20%0A*Phone:*%20%0A*Service:*%20%0A*Date/Time:*%20%0A%0A(Please%20fill%20in%20your%20details%20above)" target="_blank" rel="noopener noreferrer" className="bg-[#2A2A2A] text-white px-8 py-4 text-[12px] uppercase tracking-widest hover:bg-black transition-colors flex items-center gap-2">
            <span>💬</span> WhatsApp Info
          </a>
        </motion.div>
        <motion.div variants={fadeUp} className="flex gap-12 border-t border-black/10 pt-8">
          <div>
            <div className="font-serif text-3xl text-salon-dark mb-1">
              <AnimatedNumber value={7} suffix="+" />
            </div>
            <div className="text-[13px] text-salon-muted">Year experience</div>
          </div>
          <div>
            <div className="font-serif text-3xl text-salon-dark mb-1">
              <AnimatedNumber value={3000} suffix="+" />
            </div>
            <div className="text-[13px] text-salon-muted">Happy customer</div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div 
        className="relative h-[500px] md:h-[700px] w-full flex justify-end"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Organic shape image */}
        <div className="w-[90%] h-full rounded-t-full rounded-bl-full overflow-hidden shadow-2xl">
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            src="https://bloomandblossom.ae/wp-content/uploads/2026/04/Nano-Banana-2-A-professional-salon-scene-featuring-a-beautiful-woman-with-flawless_-glowing-skin_-dr_2-4-1024x682.png" 
            alt="Beautiful woman smiling" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer" 
          />
        </div>
        {/* Floating product element */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute bottom-20 left-0 bg-white p-4 shadow-xl rounded-lg w-48 hidden md:block"
        >
          <img src="https://bloomandblossom.ae/wp-content/uploads/2026/03/young-beautiful-stylish-woman-wedding-dress-1-scaled.jpg" alt="Product" className="w-full h-auto mb-2" referrerPolicy="no-referrer" />
          <div className="text-[10px] uppercase tracking-wider text-center text-salon-muted">Minimal makeup, maximum impact</div>
        </motion.div>
      </motion.div>
    </div>
  );
}
