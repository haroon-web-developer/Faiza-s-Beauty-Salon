import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function ServicesSection() {
  const services = [
    { title: "Hair Care", img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=400&auto=format&fit=crop" },
    { title: "Henna Designs", img: "https://images.pexels.com/photos/2689823/pexels-photo-2689823.jpeg" },
    { title: "Natural Makeup", img: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=400&auto=format&fit=crop" },
    { title: "Waxing Services", img: "https://images.pexels.com/photos/6763618/pexels-photo-6763618.jpeg" },
    { title: "Nail Care", img: "https://images.pexels.com/photos/22668317/pexels-photo-22668317.jpeg" },
    { title: "Facial", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=400&auto=format&fit=crop" },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section id="services" className="bg-[#2A2A2A] text-white py-16 md:py-24 px-6 md:px-[60px] relative">
      {/* Background Video for Mobile & Desktop */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="sticky top-0 w-full h-[100vh] md:h-full md:absolute md:inset-0 overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-80"
          >
            <source src="https://www.pexels.com/download/video/27433112/" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#2A2A2A]/50"></div>
        </div>
      </div>

      <motion.div 
        className="max-w-3xl mx-auto text-center mb-16 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp} className="text-[11px] uppercase tracking-[2px] text-white/60 mb-4">Our Services</motion.div>
        <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
          We're committed to your happiness.
        </motion.h2>
        <motion.p variants={fadeUp} className="text-white/70 leading-relaxed">
          In our beauty salon, we customise each of our services to bring out the individuality of the client. We guarantee that we will make sure that you are comfortable throughout the entire process.
        </motion.p>
      </motion.div>

      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        {services.map((svc, idx) => {
          const serviceId = svc.title.toLowerCase().replace(/\s+/g, '-').replace('&', 'and');
          return (
            <motion.div variants={fadeUp} id={serviceId} key={idx} className="flex flex-col items-center group cursor-pointer relative w-full h-[350px] rounded-t-full rounded-b-[20px] overflow-hidden shadow-lg">
              <img src={svc.img} alt={svc.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              
              <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-6 bg-white text-salon-dark w-[70%] py-2 px-5 text-center shadow-xl flex justify-between items-center rounded-[4px]">
                <span className="font-serif text-[15px] font-medium">{svc.title}</span>
                <span className="text-salon-gold text-base">→</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}