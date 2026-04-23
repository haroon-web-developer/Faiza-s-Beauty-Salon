import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-[60px] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center overflow-hidden">
      <motion.div 
        className="relative h-[350px] sm:h-[450px] lg:h-[500px] w-full max-w-[500px] mx-auto lg:max-w-none"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div 
          className="absolute left-0 top-10 w-[65%] h-[75%] lg:h-[400px] rounded-t-full overflow-hidden shadow-lg z-10"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            src="https://images.pexels.com/photos/29189919/pexels-photo-29189919.jpeg" alt="Salon service" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>
        <motion.div 
          className="absolute right-0 bottom-0 w-[65%] h-[75%] lg:h-[400px] rounded-t-full overflow-hidden shadow-lg"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            src="https://bloomandblossom.ae/wp-content/uploads/2026/03/Nano-Banana-2-A-professional-salon-scene-featuring-a-beautiful-woman-with-flawless_-glowing-skin-rec_2-1.png" alt="Happy client" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </motion.div>
      </motion.div>
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={fadeUp} className="text-[11px] uppercase tracking-[2px] text-salon-muted mb-4">About Us</motion.div>
        <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-salon-dark mb-6 leading-tight">
          Welcome to Faiza's Salon
        </motion.h2>
        <motion.p variants={fadeUp} className="text-salon-muted leading-relaxed mb-6">
          Confidence starts with taking care of yourself, and looking and feeling great. Our team, with a combined <strong>7+ years of experience</strong> and <strong>3,000+ happy clients</strong> is ready to offer you a very comfortable, accurate, and luxurious time. We are more than a salon—we are the place where all your beauty needs are met.
        </motion.p>
        <motion.div variants={fadeUp}>
          <Link to="/about" className="inline-block bg-[#2A2A2A] text-white px-8 py-4 text-[12px] uppercase tracking-widest hover:bg-black transition-colors mt-4">
            About Us
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}