import { motion } from 'motion/react';

export default function VisitUsSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-[60px] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center overflow-hidden">
      <motion.div 
        className="relative h-[350px] md:h-[500px]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="w-full h-full rounded-t-full rounded-br-full overflow-hidden shadow-lg">
          <motion.img 
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop" 
            alt="Salon interior" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }} 
          />
        </div>
      </motion.div>
      
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={fadeUp} className="text-[11px] uppercase tracking-[2px] text-salon-muted mb-4">Appointment</motion.div>
        <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-salon-dark mb-6 leading-tight">
          Visit Us
        </motion.h2>
        <motion.p variants={fadeUp} className="text-salon-muted leading-relaxed mb-6">
          If you come to our <strong>ladies salon</strong> and go out with the feeling of shine, confidence, and beauty. Faiza's Salon is your beauty sanctuary for a daily glow or a special occasion glam.
        </motion.p>
        <motion.div variants={fadeUp} className="space-y-4 mb-8">
          <p className="text-salon-dark"><strong>Call/WhatsApp:</strong> 
(051) 2726761</p>
          <p className="text-salon-dark"><strong>Visit Us:</strong> G10 Markaz, Islamabad, Pakistan</p>
        </motion.div>
        <motion.a 
          variants={fadeUp}
          href="https://wa.me/923137386619?text=Hello%20Faiza's%20Beauty%20Salon!%20I%20would%20like%20to%20book.%0A%0A*Name:*%20%0A*Phone:*%20%0A*Service:*%20%0A*Date/Time:*%20%0A%0A(Please%20fill%20in%20your%20details%20above)" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex bg-[#2A2A2A] text-white px-8 py-4 text-[12px] uppercase tracking-widest hover:bg-[#128C7E] shadow-lg hover:shadow-xl transition-all items-center gap-2 rounded-full font-bold"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
          Book Appointment Now
        </motion.a>
      </motion.div>
    </section>
  );
}
