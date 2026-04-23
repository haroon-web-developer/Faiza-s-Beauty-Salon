import { Check } from 'lucide-react';
import { motion } from 'motion/react';
import { useOutletContext } from 'react-router-dom';

export default function WhyChooseUsSection() {
  const context = useOutletContext();
  const openBooking = context?.openBooking || (() => {});

  const reasons = [
    { title: "Personalized Beauty Experience", desc: "Soothing, Luxurious Ambiance" },
    { title: "Top-Quality Products", desc: "Affordable Pampering for Every Woman" }
  ];

  const points = [
    "Personalized Beauty Experience",
    "Skilled hands, professional techniques and a love for beauty.",
    "A restful refuge where you can relax — and even blossom.",
    "Pampering, adjusted to your budget — because you're worth it."
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const imageFade = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-[60px] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={fadeUp} className="text-[11px] uppercase tracking-[2px] text-salon-muted mb-4">The Faiza's Difference</motion.div>
        <motion.h2 variants={fadeUp} className="font-serif text-3xl md:text-5xl text-salon-dark mb-6 leading-tight">
          Why Choose Us?
        </motion.h2>
        <motion.p variants={fadeUp} className="text-salon-muted leading-relaxed mb-8">
          We believe in the fact that beauty is a personal thing, and this is why we make every experience personal to you. Our qualified practitioners will help you to flourish with confidence by combining the old and the new, and all that is trending.
        </motion.p>
        
        <motion.div variants={fadeUp} className="space-y-6 mb-8">
          {reasons.map((reason, idx) => (
            <div key={idx}>
              <h4 className="font-bold text-salon-dark mb-1">{reason.title}</h4>
              <p className="text-salon-muted">{reason.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.p variants={fadeUp} className="text-salon-muted leading-relaxed mb-8">
          Book your appointment today and discover why we're a top-rated <strong>ladies salon</strong> trusted by women across the Islamabad.
        </motion.p>

        <motion.div variants={fadeUp} className="space-y-4 mb-8">
          {points.map((point, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="mt-1 text-salon-gold">
                <Check size={20} />
              </div>
              <p className="text-salon-dark">{point}</p>
            </div>
          ))}
        </motion.div>

        <motion.button 
          variants={fadeUp}
          onClick={openBooking}
          className="inline-block bg-[#2A2A2A] text-white px-8 py-4 text-[12px] uppercase tracking-widest hover:bg-black transition-colors"
        >
          Book Online
        </motion.button>
      </motion.div>

      <motion.div 
        className="relative h-[400px] md:h-[600px] grid grid-cols-2 gap-4 -order-1 lg:order-none"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Staggered Image Grid */}
        <div className="flex flex-col gap-4 mt-8 md:mt-16">
          <motion.div variants={imageFade} className="h-[200px] md:h-[280px] rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.pexels.com/photos/33945859/pexels-photo-33945859.jpeg" alt="Spa environment" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div variants={imageFade} className="h-[150px] md:h-[200px] rounded-2xl overflow-hidden shadow-lg">
            <img src="https://scontent.fisb7-1.fna.fbcdn.net/v/t51.82787-15/659372169_18581745469015015_8833833143629070402_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=13d280&_nc_ohc=iEE7sF0BTvoQ7kNvwFs5eBM&_nc_oc=Adpz3A0ycdzrrrVRMf_ggm-bDPNgExmQUqWjTrkzDd6zVnslX-DErlJI9-6XANh5kA8&_nc_zt=23&_nc_ht=scontent.fisb7-1.fna&_nc_gid=ehFqw5jb7GfPHJzh9NTasQ&_nc_ss=7a389&oh=00_Af0SpaUE6uS2tYQ4ZWO2FbzDEsFzjeC9XRLy4x-2AB0DBA&oe=69EE5BDB" alt="Facial treatment" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
        <div className="flex flex-col gap-4">
          <motion.div variants={imageFade} className="h-[150px] md:h-[200px] rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.pexels.com/photos/11742213/pexels-photo-11742213.jpeg" alt="Makeup" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
          <motion.div variants={imageFade} className="h-[200px] md:h-[280px] rounded-2xl overflow-hidden shadow-lg">
            <img src="https://images.pexels.com/photos/4006699/pexels-photo-4006699.jpeg" alt="Bridal makeup" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>
        </div>
        {/* Floating badge */}
        <motion.div 
          initial={{ scale: 0, x: "-50%", y: "-50%" }}
          whileInView={{ scale: 1, x: "-50%", y: "-50%" }}
          transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-1/2 bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-full shadow-2xl flex flex-col items-center justify-center w-28 h-28 md:w-36 md:h-36 text-center border-4 border-white"
        >
          <span className="font-serif text-2xl md:text-3xl text-salon-gold font-bold">100%</span>
          <span className="text-[10px] md:text-xs uppercase tracking-widest text-salon-dark font-medium mt-1">Quality</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
