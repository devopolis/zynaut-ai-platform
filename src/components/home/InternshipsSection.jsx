import { Briefcase, ChevronRight } from 'lucide-react';

export default function InternshipsSection({ items, navigateTo }) {
  if (items.length === 0) return null;
  return (
    <section className="mb-12">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-lg font-bold text-slate-900">Internships - Open for All</h2>
        <button className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1">View All <ChevronRight size={14}/></button>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div key={i} onClick={() => navigateTo('details', item)} className="col-span-1 bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-300 cursor-pointer group">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold text-lg">{item.title.charAt(0)}</div>
              <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded">{item.type}</span>
            </div>
            <h3 className="font-bold text-slate-900 text-sm mb-1 line-clamp-1">{item.title}</h3>
            <p className="text-xs text-slate-500 font-medium mb-4">{item.role}</p>
            <div className="flex items-center gap-3 text-[10px] text-slate-500 font-bold">
              <span className="flex items-center gap-1"><Briefcase size={10} /> Full Time</span>
              <span>{item.stipend}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}