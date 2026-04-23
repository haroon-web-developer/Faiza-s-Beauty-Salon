export default function GalleryGrid() {
  return (
    <section className="px-6 md:px-[60px] py-20 bg-salon-white">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl mb-2">Follow Our Journey</h2>
          <p className="text-salon-muted">@FaizaSalon</p>
        </div>
        <a href="https://www.facebook.com/FaizaSalon/" target="_blank" rel="noopener noreferrer" className="hidden md:inline-block text-[12px] uppercase tracking-[1px] font-semibold border-b border-salon-text pb-1 hover:text-salon-muted transition-colors">
          View Facebook
        </a>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        <div className="overflow-hidden rounded-[24px] shadow-sm hover:shadow-md transition-shadow">
          <img 
            src="https://picsum.photos/seed/bridalmakeup/400/500" 
            alt="Bridal Makeup" 
            className="w-full h-[250px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700 cursor-pointer" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="overflow-hidden rounded-[24px] shadow-sm hover:shadow-md transition-shadow mt-0 md:mt-8">
          <img 
            src="https://picsum.photos/seed/hairstyling/400/500" 
            alt="Hair Styling" 
            className="w-full h-[250px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700 cursor-pointer" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="overflow-hidden rounded-[24px] shadow-sm hover:shadow-md transition-shadow">
          <img 
            src="https://picsum.photos/seed/facialspa/400/500" 
            alt="Skin Care" 
            className="w-full h-[250px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700 cursor-pointer" 
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="overflow-hidden rounded-[24px] shadow-sm hover:shadow-md transition-shadow mt-0 md:mt-8">
          <img 
            src="https://picsum.photos/seed/nailart/400/500" 
            alt="Nail Art" 
            className="w-full h-[250px] md:h-[400px] object-cover hover:scale-105 transition-transform duration-700 cursor-pointer" 
            referrerPolicy="no-referrer" 
          />
        </div>
      </div>
      
      <div className="mt-8 text-center md:hidden">
        <a href="https://www.facebook.com/FaizaSalon/" target="_blank" rel="noopener noreferrer" className="inline-block text-[12px] uppercase tracking-[1px] font-semibold border-b border-salon-text pb-1">
          View Facebook
        </a>
      </div>
    </section>
  );
}
