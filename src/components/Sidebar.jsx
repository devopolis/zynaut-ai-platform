import { Briefcase, LogIn, Trophy, UserCircle, UserPlus, Sparkles } from 'lucide-react';

export default function Sidebar({ isAuthenticated, myApplications, navigateTo, login, setIsAuthenticated }) {
  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-slate-200 z-20 flex flex-col p-6 overflow-y-auto">
      <div className="flex items-center gap-2 mb-10 cursor-pointer" onClick={() => navigateTo('home')}>
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30">Z</div>
        <span className="text-2xl font-bold tracking-tight text-slate-900">Zynaut.</span>
      </div>
      
      {isAuthenticated ? (
        <div className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col items-center text-center mb-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]">
          <div className="w-20 h-20 rounded-full bg-slate-100 mb-3 overflow-hidden ring-4 ring-slate-50">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan" alt="User" />
          </div>
          <h2 className="text-base font-bold text-slate-900">Rohan Sharma</h2>
          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mt-2 uppercase tracking-wider">Silver Tier</span>
          <button onClick={() => navigateTo('profile')} className="mt-5 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition-all shadow-lg shadow-blue-200">
            View My Player Card
          </button>
        </div>
      ) : (
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 flex flex-col items-center text-center mb-6 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
          <div className="w-16 h-16 rounded-full bg-slate-700/50 mb-3 flex items-center justify-center border border-slate-600 text-slate-400">
            <UserCircle size={32} />
          </div>
          <h2 className="text-base font-bold text-white">Guest User</h2>
          <p className="text-[10px] text-slate-400 mt-1 mb-4 leading-tight">Join the league to track your rank and win prizes.</p>
          <button onClick={login} className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-xs transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2">
            <UserPlus size={14} /> Create Player Card
          </button>
        </div>
      )}

      <button onClick={() => navigateTo('applications')} className="w-full py-3 mb-4 flex items-center gap-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold rounded-xl transition-all border border-slate-200 text-sm">
        <Briefcase size={18} className="text-blue-600" /> My Applications
        {isAuthenticated && <span className="ml-auto bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full">{myApplications.length}</span>}
      </button>

      {/* AI Resume Builder Button */}
      <button
        onClick={() => navigateTo('resume')}
        className="w-full py-3 mb-4 flex items-center gap-3 px-4 bg-gradient-to-r from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 text-purple-700 font-bold rounded-xl transition-all border border-purple-200 text-sm"
      >
        <Sparkles size={18} className="text-purple-600" /> AI Resume Builder
      </button>

      <button onClick={() => navigateTo('leaderboard')} className="w-full py-3 mb-10 flex items-center gap-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold rounded-xl transition-all border border-slate-200 text-sm">
        <Trophy size={18} className="text-yellow-500" /> Leaderboard
      </button>

      {isAuthenticated && (
        <button onClick={() => { setIsAuthenticated(false); /* setCurrentPage('home'); */ }} className="w-full py-2 text-xs font-bold text-slate-400 hover:text-red-500 flex items-center gap-2 justify-center transition-colors mt-4">
          <LogIn size={14} /> Sign Out
        </button>
      )}
    </aside>
  );
}