import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | Faiza's Beauty Salon, G10 Markaz Islamabad</title>
        <meta name="description" content="Book your beauty appointment or contact Faiza's Beauty Salon. Located in G10 Markaz, Islamabad. Call or WhatsApp us at 0313 7386619." />
        <link rel="canonical" href="https://faizasbeautysalon.com/contact" />
      </Helmet>
      <div className="px-6 md:px-[60px] py-10 flex-1">
        <h1 className="font-serif text-4xl md:text-5xl mb-6">Contact Us</h1>
        <p className="text-salon-muted text-lg">Contact form and details coming soon...</p>
      </div>
    </>
  );
}
