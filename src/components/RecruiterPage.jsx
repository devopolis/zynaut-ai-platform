import { BarChart3, FileText, LogIn, UserPlus, Users, Check, X, Filter } from 'lucide-react';
import { CANDIDATE_DATA } from '../data/mockData';

export default function RecruiterPage({ setIsAuthenticated, setCurrentPage }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 flex">
      <aside className="w-64 bg-[#0f172a] text-white flex flex-col p-6">
        <div className="flex items-center gap-2 mb-12">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">Z</div>
          <span className="text-xl font-bold tracking-tight">Zynaut <span className="text-blue-400 text-xs">Biz</span></span>
        </div>
        <nav className="space-y-2">
          {['Dashboard', 'Post Challenge', 'Candidate Pipeline', 'Analytics', 'Settings'].map((item) => (
            <button key={item} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${item === 'Dashboard' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}>
              {item === 'Dashboard' ? <BarChart3 size={18}/> : item === 'Candidate Pipeline' ? <Users size={18}/> : <FileText size={18}/>} {item}
            </button>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-slate-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold">AC</div>
            <div>
              <h4 className="text-sm font-bold">Acme Corp</h4>
              <p className="text-xs text-slate-400">Enterprise Plan</p>
            </div>
          </div>
          <button onClick={() => { setIsAuthenticated(false); setCurrentPage('home'); }} className="text-xs text-red-400 hover:text-red-300 font-bold flex items-center gap-2">
            <LogIn size={14}/> Sign Out
          </button>
        </div>
      </aside>
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Recruiter Cockpit</h1>
            <p className="text-slate-500">Manage your hiring pipeline and challenges.</p>
          </div>
          <button className="px-6 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2 shadow-lg">
            <UserPlus size={18}/> Post New Job
          </button>
        </header>
        <div className="grid grid-cols-4 gap-6 mb-10">
          {[
            { l: 'Active Jobs', v: '12', c: 'blue' },
            { l: 'Total Applicants', v: '1,450', c: 'purple' },
            { l: 'Shortlisted', v: '45', c: 'green' },
            { l: 'Avg Score', v: '88%', c: 'yellow' }
          ].map((stat) => (
            <div key={stat.l} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{stat.l}</p>
              <h3 className={`text-3xl font-black text-${stat.c}-600`}>{stat.v}</h3>
            </div>
          ))}
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h3 className="font-bold text-slate-900">Recent Candidates</h3>
            <button className="text-blue-600 text-sm font-bold flex items-center gap-1">
              <Filter size={16}/> Filter by Gold Tier
            </button>
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-xs font-bold text-slate-500 uppercase">
                <th className="p-5">Candidate</th>
                <th className="p-5">Role Applied</th>
                <th className="p-5">Tier</th>
                <th className="p-5">Match Score</th>
                <th className="p-5">Status</th>
                <th className="p-5">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {CANDIDATE_DATA.map((c) => (
                <tr key={c.id} className="hover:bg-slate-50/50">
                  <td className="p-5 font-bold text-slate-900 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${c.name}`} />
                    </div>
                    {c.name}
                  </td>
                  <td className="p-5 text-sm text-slate-600">{c.role}</td>
                  <td className="p-5">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${c.tier === 'Gold' ? 'bg-yellow-100 text-yellow-700' : c.tier === 'Silver' ? 'bg-slate-100 text-slate-600' : 'bg-orange-100 text-orange-700'}`}>{c.tier}</span>
                  </td>
                  <td className="p-5 font-bold text-slate-900">{c.score}</td>
                  <td className="p-5">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${c.status === 'Shortlisted' ? 'bg-green-100 text-green-700' : c.status === 'Rejected' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-600'}`}>{c.status}</span>
                  </td>
                  <td className="p-5 flex gap-2">
                    <button className="p-2 bg-green-50 text-green-600 rounded hover:bg-green-100"><Check size={16}/></button>
                    <button className="p-2 bg-red-50 text-red-600 rounded hover:bg-red-100"><X size={16}/></button>
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