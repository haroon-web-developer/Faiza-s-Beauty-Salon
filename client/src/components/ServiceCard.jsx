export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-salon-white p-6 rounded-[24px] flex-1 flex items-center gap-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(74,62,62,0.05)] hover:-translate-y-1 transition-all cursor-pointer">
      <div className="w-12 h-12 bg-salon-bg rounded-full flex items-center justify-center text-[20px] shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-[14px] font-semibold mb-0.5">{title}</h3>
        <p className="text-[12px] text-salon-muted">{description}</p>
      </div>
    </div>
  );
}
