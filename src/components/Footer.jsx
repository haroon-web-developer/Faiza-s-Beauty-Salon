export default function Footer() {
  return (
    <footer className="py-6 md:h-[60px] md:py-0 px-6 md:px-[60px] flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-salon-muted border-t border-black/5 mt-auto">
      <div>&copy; 2026 Faiza’s Beauty Salon. All rights reserved.</div>
      <div className="flex gap-5">
        <span className="cursor-pointer hover:text-salon-text transition-colors">Instagram</span>
        <span className="cursor-pointer hover:text-salon-text transition-colors">Facebook</span>
        
      </div>
    </footer>
  );
}
