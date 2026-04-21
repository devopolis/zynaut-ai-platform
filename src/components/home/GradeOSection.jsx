import { ChevronRight } from 'lucide-react';

export default function GradeOSection({ items, navigateTo }) {
  if (items.length === 0) return null;
  return (
    <section className="mb-14">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-lg font-bold text-slate-900">Grade O - Elite Competitions</h2>
        <button className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1">View All <ChevronRight size={14}/></button>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div key={i} onClick={() => navigateTo('details', item)} className="col-span-4 h-64 bg-[#020617] rounded-[1.5rem] relative overflow-hidden flex flex-col justify-center px-12 group cursor-pointer border border-white/5 hover:border-purple-500/50 transition-all">
            <div className="absolute inset-0 opacity-40 bg-cover bg-center" style={{ backgroundImage: `url(${item.img})` }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent"></div>
            <div className="relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">Elite</span>
                <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-[10px] font-bold uppercase tracking-widest border border-slate-700">{item.host}</span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-6 leading-tight">{item.title}</h3>
              <button className="px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 text-sm transition-colors shadow-xl">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}