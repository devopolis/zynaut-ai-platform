import { Crown, ChevronRight, Lock } from 'lucide-react';

export default function GoldSection({ items, navigateTo, isAuthenticated }) {
  if (items.length === 0) return null;
  return (
    <section className="mb-16">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
          <Crown className="text-yellow-500" fill="currentColor"/> Gold Tier - Exclusive PPI Challenges
        </h2>
        <button className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1">View All <ChevronRight size={14}/></button>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {items.map((item, i) => (
          <div key={i} onClick={() => navigateTo('details', item)} className="h-80 rounded-[2rem] relative overflow-hidden shadow-2xl flex flex-col justify-center px-12 group cursor-pointer transition-transform hover:-translate-y-1">
            {item.locked && !isAuthenticated && (
              <div className="absolute inset-0 z-50 backdrop-blur-md bg-black/40 flex flex-col items-center justify-center text-center p-6 border-2 border-yellow-500/30 transition-all hover:bg-black/50">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(234,179,8,0.5)] animate-pulse">
                  <Lock size={32} className="text-black"/>
                </div>
                <h3 className="text-2xl font-black text-white mb-1 uppercase tracking-widest">Locked</h3>
                <p className="text-yellow-400 font-bold text-sm mb-6">Gold Member Access Only</p>
                <button className="px-8 py-3 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors shadow-xl">Unlock Now</button>
              </div>
            )}
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" style={{ backgroundImage: `url(${item.img})` }}></div>
            <div className={`absolute inset-0 ${item.bg} opacity-90`}></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-yellow-500 text-black rounded-full text-xs font-black uppercase tracking-widest shadow-lg">PPI Offer</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur text-white border border-white/30 rounded-full text-xs font-bold uppercase tracking-widest">{item.host}</span>
              </div>
              <h3 className="text-4xl font-black text-white mb-4 leading-tight">{item.title}</h3>
              <p className="text-white/70 font-bold text-sm">Direct Interview Opportunity • {item.points} XP</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}