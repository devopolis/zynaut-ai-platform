import { ArrowLeft, Crown } from 'lucide-react';
import { LEADERBOARD_DATA } from '../data/mockData';

export default function LeaderboardPage({ navigateTo }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 pb-20 relative">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-blue-200 shadow-lg">Z</div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Zynaut.</span>
        </div>
        <button onClick={() => navigateTo('home')} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
          <ArrowLeft size={16} /> Dashboard
        </button>
      </nav>
      <main className="max-w-4xl mx-auto mt-12 px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-slate-900 mb-2">Global Leaderboard</h1>
          <p className="text-slate-500">The top tech talent on Zynaut this week.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-12 items-end">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-4 border-slate-300 overflow-hidden shadow-lg mb-2 relative">
              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${LEADERBOARD_DATA[1].name}`} />
              <div className="absolute bottom-0 w-full bg-slate-400 text-white text-[10px] font-bold text-center py-0.5">2nd</div>
            </div>
            <h3 className="font-bold text-slate-700 text-sm">{LEADERBOARD_DATA[1].name}</h3>
            <span className="text-xs font-bold text-slate-400">{LEADERBOARD_DATA[1].points} XP</span>
            <div className="h-32 w-full bg-gradient-to-t from-slate-300 to-slate-100 rounded-t-2xl mt-4 border-x border-t border-slate-200"></div>
          </div>
          <div className="flex flex-col items-center z-10">
            <Crown className="text-yellow-500 mb-2 animate-bounce" fill="currentColor"/>
            <div className="w-24 h-24 rounded-full border-4 border-yellow-400 overflow-hidden shadow-xl mb-2 relative ring-4 ring-yellow-100">
              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${LEADERBOARD_DATA[0].name}`} />
              <div className="absolute bottom-0 w-full bg-yellow-500 text-white text-[10px] font-bold text-center py-0.5">1st</div>
            </div>
            <h3 className="font-bold text-slate-900 text-base">{LEADERBOARD_DATA[0].name}</h3>
            <span className="text-sm font-bold text-yellow-600">{LEADERBOARD_DATA[0].points} XP</span>
            <div className="h-40 w-full bg-gradient-to-t from-yellow-300 to-yellow-100 rounded-t-2xl mt-4 border-x border-t border-yellow-200 shadow-lg"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-4 border-orange-300 overflow-hidden shadow-lg mb-2 relative">
              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${LEADERBOARD_DATA[2].name}`} />
              <div className="absolute bottom-0 w-full bg-orange-400 text-white text-[10px] font-bold text-center py-0.5">3rd</div>
            </div>
            <h3 className="font-bold text-slate-700 text-sm">{LEADERBOARD_DATA[2].name}</h3>
            <span className="text-xs font-bold text-slate-400">{LEADERBOARD_DATA[2].points} XP</span>
            <div className="h-24 w-full bg-gradient-to-t from-orange-300 to-orange-100 rounded-t-2xl mt-4 border-x border-t border-orange-200"></div>
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          {LEADERBOARD_DATA.map((player, index) => (
            <div key={player.id} className={`flex items-center justify-between p-5 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors ${player.name === "Rohan Sharma" ? "bg-blue-50/50 border-l-4 border-l-blue-500" : ""}`}>
              <div className="flex items-center gap-4">
                <span className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold text-sm ${index < 3 ? 'bg-yellow-100 text-yellow-700' : 'bg-slate-100 text-slate-500'}`}>{index + 1}</span>
                <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${player.name}`} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{player.name} {player.name === "Rohan Sharma" && "(You)"}</h4>
                  <span className="text-xs text-slate-400 font-medium">{player.tier} Tier</span>
                </div>
              </div>
              <div className="font-bold text-slate-900">{player.points} <span className="text-slate-400 text-xs font-normal">XP</span></div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}