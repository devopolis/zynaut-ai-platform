import { Clock, ChevronRight } from 'lucide-react';

export default function GradeBSection({ items, navigateTo }) {
  if (items.length === 0) return null;
  return (
    <div>
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-lg font-bold text-slate-900">Grade B - College Rounds</h2>
        <button className="text-sm font-bold text-green-600 hover:text-green-800 transition-colors flex items-center gap-1">View All <ChevronRight size={14}/></button>
      </div>
      <div className="space-y-6">
        {items.map((item, i) => (
          <div key={i} onClick={() => navigateTo('details', item)} className="bg-white border border-slate-200 p-5 rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 flex items-center justify-between group">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">{item.host}</span>
              <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
            </div>
            <div className="text-right">
              <span className="block text-green-600 font-bold text-sm">{item.points} XP</span>
              <span className="text-[10px] text-slate-400 flex items-center justify-end gap-1"><Clock size={10}/> {item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}