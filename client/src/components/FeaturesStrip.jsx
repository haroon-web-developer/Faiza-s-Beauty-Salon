import { Sparkles, Leaf, Gem, Award, Droplets } from 'lucide-react';

export default function FeaturesStrip() {
  const features = [
    { icon: <Sparkles strokeWidth={1} size={40} />, label: "Facial" },
    { icon: <Leaf strokeWidth={1} size={40} />, label: "Natural Makeup" },
    { icon: <Gem strokeWidth={1} size={40} />, label: "Luxury Skincare" },
    { icon: <Award strokeWidth={1} size={40} />, label: "Top-quality Brand" },
    { icon: <Droplets strokeWidth={1} size={40} />, label: "Hydration Boost" },
  ];

  return (
    <div className="bg-[#EBE5E0] py-12 px-6 md:px-[60px]">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-8 text-center">
        {features.map((feat, idx) => (
          <div key={idx} className="flex flex-col items-center gap-4 flex-1 min-w-[120px]">
            <div className="text-salon-dark">
              {feat.icon}
            </div>
            <span className="text-[13px] uppercase tracking-wider text-salon-dark font-medium">{feat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}