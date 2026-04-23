import { motion } from 'motion/react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sana Tariq",
      title: "Best Bridal Makeup in Islamabad!",
      text: "I booked Faiza's Salon for my Walima, and it was the best decision! The makeup base was totally flawless, not cakey at all, and lasted all night. Highly recommend them for bridal services."
    },
    {
      name: "Zainab R.",
      title: "Incredible Hair Color & Styling",
      text: "The environment is so luxurious and the staff is incredibly professional. I got my keratin treatment and hair lowlights done here. Absolutely in love with the results! The best salon in Islamabad."
    }
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
    <section className="py-16 md:py-24 px-6 md:px-[60px] text-center overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={fadeUp} className="text-[11px] uppercase tracking-[2px] text-salon-muted mb-4">Testimonials</motion.div>
        <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-5xl text-salon-dark mb-4 leading-tight">
          Love hearing from you
        </motion.h2>
        <motion.p variants={fadeUp} className="text-salon-muted mb-12 md:mb-16">
          We value every opinion and look forward to hearing from you!
        </motion.p>
      </motion.div>

      <motion.div 
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {testimonials.map((t, idx) => (
          <motion.div variants={fadeUp} key={idx} className="bg-[#F4EAE6] p-8 md:p-10 text-left flex flex-col justify-center rounded-sm">
            <h4 className="font-bold text-salon-dark mb-3 text-lg">{t.title}</h4>
            <p className="text-salon-muted text-[15px] leading-relaxed mb-6 italic">"{t.text}"</p>
            <div className="text-salon-dark font-semibold text-[14px]">— {t.name}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.button 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-[#2A2A2A] text-white px-8 py-4 text-[12px] uppercase tracking-widest hover:bg-black transition-colors"
      >
        Read Testimonials
      </motion.button>
    </section>
  );
}
