import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const imageFade = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } }
};

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Faiza's Beauty Salon Islamabad</title>
        <meta name="description" content="Discover the story behind Faiza's Beauty Salon, Islamabad's premier destination for luxury bridal makeup, hair care, and beauty treatments located in G10 Markaz." />
        <link rel="canonical" href="https://faizasbeautysalon.com/about" />
      </Helmet>
      <div className="flex-1 bg-white font-sans overflow-hidden">
        
        {/* The Philosophy / Introduction (Now acting as Hero) */}
        <section className="pt-18 pb-20 md:pt-28 md:pb-32 px-6 md:px-[60px] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
          <motion.div 
            className="relative h-[450px] md:h-[600px] flex items-center justify-center order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.img 
              src="https://makeidamidas.com/wp-content/uploads/2024/02/1000X1000-03.png" 
              alt="Salon styling" 
              className="w-full h-full object-contain drop-shadow-2xl" 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          
          <motion.div
            className="order-1 lg:order-2"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="text-[12px] uppercase tracking-[4px] text-salon-gold mb-6 font-medium">Faiza's Beauty Salon</motion.div>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl text-salon-dark mb-6 leading-tight">
              Unveiling Elegance in Islamabad
            </motion.h1>
            <motion.div variants={fadeUp} className="w-16 h-1 bg-salon-gold mb-8"></motion.div>
            <motion.p variants={fadeUp} className="text-[16px] md:text-lg text-salon-muted leading-relaxed mb-6">
              Founded with a passion for art and aesthetics, <strong>Faiza's Beauty Salon</strong> has been a trusted sanctuary for women in G10 Markaz, Islamabad for over 7 years. Our journey began with a simple vision: to create a space where every client feels empowered, relaxed, and radiantly beautiful.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[16px] md:text-lg text-salon-muted leading-relaxed mb-10">
              From flawless bridal transformations to rejuvenating skin therapies, our dedicated team of experts blends premium products with advanced techniques. We believe that true beauty shines from within, and our mission is to bring that inner glow to the surface.
            </motion.p>
            <motion.div variants={fadeUp} className="border-l-[3px] border-salon-gold pl-6">
               <div className="font-serif text-3xl italic text-salon-dark tracking-wider mb-1">Faiza</div>
               <p className="text-[11px] uppercase tracking-[2px] text-salon-muted">Founder & Lead Stylist</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Mission / Quote Section */}
        <section className="bg-[#F4EAE6] py-24 md:py-32 px-6 md:px-[60px] text-center relative overflow-hidden">
          <motion.div 
            className="max-w-4xl mx-auto relative z-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.div variants={fadeUp} className="text-salon-gold/50 mb-8 flex justify-center">
              <svg className="w-16 h-16 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            </motion.div>
            <motion.h3 variants={fadeUp} className="font-serif text-3xl md:text-5xl text-salon-dark leading-snug md:leading-tight mb-8">
              "Our philosophy is simple: Beauty is a personalized experience. We don't just transform your look; we elevate your confidence."
            </motion.h3>
            <motion.div variants={fadeUp} className="text-[11px] uppercase tracking-[2px] text-salon-dark font-bold">The Core Mission</motion.div>
          </motion.div>
        </section>

        {/* Staggered Gallery / Craftsmanship Section */}
        <section className="py-20 md:py-32 px-6 md:px-[60px] max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16 md:mb-24 max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
             <motion.div variants={fadeUp} className="text-[11px] uppercase tracking-[2px] text-salon-muted mb-4">Our Craft</motion.div>
             <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-salon-dark mb-6 leading-tight">
               Redefining Luxury Services
             </motion.h2>
             <motion.p variants={fadeUp} className="text-salon-muted text-[16px] leading-relaxed">
               With over 3,000 delighted clients, our reputation is built on trust, artistry, and an uncompromising commitment to quality. Every brushstroke, treatment, and consultation is a testament to our expertise.
             </motion.p>
          </motion.div>

          {/* Abstract Image Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center">
             <motion.div 
               className="md:col-span-5 h-[400px] md:h-[650px] rounded-t-full rounded-br-[50px] overflow-hidden shadow-2xl"
               variants={imageFade}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-50px" }}
             >
               <img src="https://scontent.fisb7-1.fna.fbcdn.net/v/t51.82787-15/658991260_18581057977015015_7518998019956421347_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=WIrqPtyGh4wQ7kNvwGlcJtM&_nc_oc=AdrIQJ26zEDveUU_6aFyiqpcXygqzXfJrE15DgIV6REpkBdZo1L5b7M365Nz2lulbNE&_nc_zt=23&_nc_ht=scontent.fisb7-1.fna&_nc_gid=PQGiAWTAFO1nxUiLSL30jg&_nc_ss=7a389&oh=00_Af00ViTzr54430k1BprBjWPCSYcfMWNGooH3W3Y-bBzSkg&oe=69EE9D03" alt="Makeup artistry" className="w-full h-full object-cover" />
             </motion.div>

             <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
                <motion.div 
                  className="h-[300px] md:h-[450px] rounded-tl-[50px] rounded-br-[50px] overflow-hidden shadow-xl sm:-mt-12"
                  variants={imageFade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <img src="https://images.pexels.com/photos/3993311/pexels-photo-3993311.jpeg" alt="Hair treatments" className="w-full h-full object-cover" />
                </motion.div>
                
                <motion.div 
                  className="h-[300px] md:h-[450px] rounded-tr-full rounded-bl-full overflow-hidden shadow-xl sm:mt-24"
                  variants={imageFade}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <img src="https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg" alt="Henna art" className="w-full h-full object-cover" />
                </motion.div>
             </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-salon-dark text-white py-24 md:py-32 px-6 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="max-w-2xl mx-auto"
          >
            <motion.div variants={fadeUp} className="text-[11px] uppercase tracking-[3px] text-salon-gold mb-6 font-medium">Join Our Family</motion.div>
            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl mb-6">Experience the Faiza's Touch</motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 mb-10 text-[16px] leading-relaxed">
              Ready to step into a realm where beauty meets luxury? Contact us to schedule your personalized session with our expert team in Islamabad.
            </motion.p>
            <motion.div variants={fadeUp}>
              <a 
                href="https://wa.me/923137386619?text=Hello%20Faiza's%20Beauty%20Salon!%20I%20would%20like%20to%20book.%0A%0A*Name:*%20%0A*Phone:*%20%0A*Service:*%20%0A*Date/Time:*%20%0A%0A(Please%20fill%20in%20your%20details%20above)" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex bg-salon-gold text-white px-10 py-5 text-[12px] uppercase tracking-widest hover:bg-[#b59565] transition-colors font-bold rounded-full shadow-lg"
              >
                Book via WhatsApp
              </a>
            </motion.div>
          </motion.div>
        </section>

      </div>
    </>
  );
}
