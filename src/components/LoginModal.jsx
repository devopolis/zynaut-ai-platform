import { X, UserCircle, Mail, Lock, LogIn, Trophy, Briefcase } from 'lucide-react';

export default function LoginModal({ onClose, authMode, setAuthMode, userRole, setUserRole, handleAuth }) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/80 backdrop-blur-md p-4 animate-[fadeIn_0.2s_ease-out]">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 overflow-hidden relative">
        <button onClick={onClose} className="absolute right-4 top-4 z-50 p-2 bg-white/20 backdrop-blur rounded-full text-slate-500 hover:text-white md:hover:text-slate-900 transition-colors">
          <X size={20} />
        </button>
        <div className={`p-10 flex flex-col justify-between text-white relative overflow-hidden group transition-colors duration-500 ${userRole === 'student' ? 'bg-[#1e293b]' : userRole === 'company' ? 'bg-blue-900' : 'bg-[#2e1065]'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
          <div className="relative z-10">
            <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg mb-6">Z</div>
            <h1 className="text-3xl font-black mb-2 tracking-tight">Zynaut.</h1>
            <p className="text-white/70 text-sm font-medium">
              {userRole === 'student' && "Unlock your tech career."}
              {userRole === 'company' && "Hire the top 1% of talent."}
              {userRole === 'college' && "Manage your campus events."}
            </p>
          </div>
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><Trophy size={16} className="text-white"/></div>
              <div><h3 className="font-bold text-xs">{userRole === 'student' ? 'Compete' : 'Host Challenges'}</h3></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><Briefcase size={16} className="text-white"/></div>
              <div><h3 className="font-bold text-xs">{userRole === 'student' ? 'Get Hired' : 'Recruit'}</h3></div>
            </div>
          </div>
        </div>
        <div className="p-10 flex flex-col justify-center bg-white">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-slate-900">{authMode === 'login' ? 'Sign In' : 'Create Account'}</h2>
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button onClick={() => setAuthMode('login')} className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${authMode === 'login' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}>Login</button>
              <button onClick={() => setAuthMode('signup')} className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${authMode === 'signup' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'}`}>Register</button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-6">
            {['student', 'company', 'college'].map((r) => (
              <button key={r} onClick={() => setUserRole(r)} className={`py-2 text-[10px] font-bold uppercase tracking-wider rounded-lg border-2 transition-all ${userRole === r ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-100 text-slate-400 hover:border-slate-200'}`}>
                {r === 'college' ? 'Society' : r}
              </button>
            ))}
          </div>
          <form className="space-y-3" onSubmit={handleAuth}>
            {authMode === 'signup' && (
              <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">
                  {userRole === 'company' ? 'Company Name' : userRole === 'college' ? 'College/Society Name' : 'Full Name'}
                </label>
                <div className="relative">
                  <UserCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14}/>
                  <input type="text" placeholder={userRole === 'student' ? "Rohan Sharma" : userRole === 'college' ? "Tech Society DTU" : "Acme Corp"} className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" required />
                </div>
              </div>
            )}
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14}/>
                <input type="email" placeholder="email@domain.com" className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" required />
              </div>
            </div>
            <div>
              <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14}/>
                <input type="password" placeholder="••••••••" className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" required />
              </div>
            </div>
            <button type="submit" className={`w-full py-3 text-white font-bold rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 group text-sm mt-2 ${userRole === 'student' ? 'bg-slate-900 hover:bg-slate-800' : userRole === 'company' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-[#581c87] hover:bg-[#4c1d95]'}`}>
              <LogIn size={16} className="group-hover:translate-x-1 transition-transform"/> {authMode === 'login' ? 'Enter Dashboard' : 'Get Started'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}