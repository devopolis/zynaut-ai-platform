import { ChevronRight } from 'lucide-react';

export default function GradeASection({ items, navigateTo }) {
  if (items.length === 0) return null;
  return (
    <div>
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-lg font-bold text-slate-900">Grade A - Premium</h2>
        <button className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1">View All <ChevronRight size={14}/></button>
      </div>
      <div className="space-y-6">
        {items.map((card, i) => (
          <div key={i} onClick={() => navigateTo('details', card)} className="bg-[#1e293b] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1 relative h-32 flex">
            <div className="w-32 relative">
              <div className={`absolute inset-0 ${card.color}/80 z-10 mix-blend-multiply`}></div>
              <img src={card.img} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 p-5 flex flex-col justify-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{card.host}</span>
              <h3 className="text-lg font-bold text-white leading-tight">{card.title}</h3>
              <span className="mt-2 inline-block px-2 py-0.5 bg-white/10 rounded text-[10px] text-white w-fit">{card.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}