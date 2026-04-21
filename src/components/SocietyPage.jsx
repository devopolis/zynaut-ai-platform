import { BarChart3, Flag, LogIn, UserPlus, Users, Filter } from 'lucide-react';
import { SOCIETY_PARTICIPANTS } from '../data/mockData';

export default function SocietyPage({ setIsAuthenticated, setCurrentPage }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 flex">
      <aside className="w-64 bg-[#2e1065] text-white flex flex-col p-6">
        <div className="flex items-center gap-2 mb-12">
          <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">Z</div>
          <span className="text-xl font-bold tracking-tight">Zynaut <span className="text-purple-300 text-xs">Campus</span></span>
        </div>
        <nav className="space-y-2">
          {['Society Hub', 'Publish Challenge', 'Submissions', 'Leaderboard', 'Settings'].map((item) => (
            <button key={item} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${item === 'Society Hub' ? 'bg-[#581c87] text-white' : 'text-purple-300 hover:bg-[#3b0764] hover:text-white'}`}>
              {item === 'Society Hub' ? <BarChart3 size={18}/> : item === 'Submissions' ? <Users size={18}/> : <Flag size={18}/>} {item}
            </button>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-purple-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-purple-800 flex items-center justify-center text-xs font-bold border border-purple-500">TS</div>
            <div>
              <h4 className="text-sm font-bold">Tech Society</h4>
              <p className="text-xs text-purple-300">DTU Delhi</p>
            </div>
          </div>
          <button onClick={() => { setIsAuthenticated(false); setCurrentPage('home'); }} className="text-xs text-red-300 hover:text-red-200 font-bold flex items-center gap-2">
            <LogIn size={14}/> Sign Out
          </button>
        </div>
      </aside>
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Society Hub</h1>
            <p className="text-slate-500">Manage your campus challenges, quizzes, and engagement.</p>
          </div>
          <button className="px-6 py-3 bg-[#581c87] text-white font-bold rounded-xl hover:bg-[#4c1d95] transition-all flex items-center gap-2 shadow-lg">
            <UserPlus size={18}/> Create Challenge
          </button>
        </header>
        <div className="grid grid-cols-4 gap-6 mb-10">
          {[
            { l: 'Active Challenges', v: '3', c: 'purple' },
            { l: 'Total Participants', v: '850', c: 'blue' },
            { l: 'Avg Completion', v: '76%', c: 'green' },
            { l: 'Total XP Awarded', v: '12.5k', c: 'yellow' }
          ].map((stat) => (
            <div key={stat.l} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{stat.l}</p>
              <h3 className={`text-3xl font-black text-${stat.c}-600`}>{stat.v}</h3>
            </div>
          ))}
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-900">Recent Submissions</h3>
            <button className="text-purple-600 text-sm font-bold flex items-center gap-1">
              <Filter size={16}/> Filter by Challenge
            </button>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-xs font-bold text-slate-500 uppercase">
                <th className="p-5">Participant</th>
                <th className="p-5">Challenge Name</th>
                <th className="p-5">Tier</th>
                <th className="p-5">Points Earned</th>
                <th className="p-5">Status</th>
                <th className="p-5">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {SOCIETY_PARTICIPANTS.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/50">
                  <td className="p-5 font-bold text-slate-900 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${c.name}`} />
                    </div>
                    {c.name}
                  </td>
                  <td className="p-5 text-sm text-slate-600 font-bold">{c.challenge}</td>
                  <td className="p-5">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${c.tier === 'Gold' ? 'bg-yellow-100 text-yellow-700' : c.tier === 'Silver' ? 'bg-slate-100 text-slate-600' : 'bg-orange-100 text-orange-700'}`}>{c.tier}</span>
                  </td>
                  <td className="p-5 font-bold text-slate-900">{c.points}</td>
                  <td className="p-5">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${c.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-blue-50 text-blue-600'}`}>{c.status}</span>
                  </td>
                  <td className="p-5 flex gap-2">
                    <button className="text-xs font-bold text-purple-600 hover:text-purple-800">View Code</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}