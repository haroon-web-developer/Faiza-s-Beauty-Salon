export default function GoogleReviewsSection() {
  const reviews = [
    { name: "Bina Shrestha", time: "9h ago", text: "Highly recommended Faiza Salon professional team and quality service.", rating: 5 },
    { name: "Arya Sasidharanpanicker", time: "a day ago", text: "I recently visited Faiza Beauty Parlour and it was a really great experience. I went for a pedicure, clean-up, and a few other services, and I must...", rating: 5 },
    { name: "Jisa Chinnu", time: "3 days ago", text: "I had a wonderful experience at Faiza Salon. The salon is clean, well-maintained, and has a very relaxing...", rating: 5 }
  ];

  return (
    <section className="py-24 px-6 md:px-[60px] bg-[#FBF9F6] text-center">
      <h2 className="font-serif text-4xl md:text-5xl text-salon-dark mb-16 leading-tight">
        Our Google Reviews Speak for Us
      </h2>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-center">
        {/* Overall rating card */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-black/5 flex flex-col items-center min-w-[250px]">
          <div className="flex items-center gap-3 mb-2">
            <img src="https://picsum.photos/seed/faiza/50/50" alt="Faiza Salon" className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" />
            <div className="text-left">
              <div className="font-bold text-salon-dark text-sm">Faiza's Beauty Salon</div>
              <div className="flex items-center gap-1 text-sm">
                <span className="text-orange-500 font-bold">5.0</span>
                <span className="text-orange-500">★★★★★</span>
              </div>
            </div>
          </div>
          <div className="text-xs text-salon-muted">Based on 343 reviews</div>
          <div className="text-xs text-salon-muted mt-1 flex items-center gap-1">powered by <span className="font-bold text-blue-500">Google</span></div>
        </div>

        {/* Individual reviews */}
        <div className="flex gap-6 overflow-x-auto pb-4 w-full md:w-auto">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-black/5 min-w-[300px] text-left flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-salon-dark text-sm">{review.name}</div>
                  <div className="text-xs text-salon-muted">{review.time}</div>
                </div>
                <div className="ml-auto text-blue-500 font-bold">G</div>
              </div>
              <div className="text-orange-500 text-sm mb-3">★★★★★</div>
              <p className="text-salon-muted text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
