import { Search, ChevronDown } from 'lucide-react';

export default function SearchHeader({ searchQuery, setSearchQuery }) {
  return (
    <header className="flex items-center justify-between mb-12 sticky top-0 bg-[#F8FAFC]/90 backdrop-blur z-30 py-4">
      <div className="relative w-[400px]">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search competitions, internships..."
          className="w-full pl-11 pr-4 py-3 bg-[#1e293b] text-white placeholder-slate-400 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <nav className="flex items-center gap-8">
        <a href="#" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Competitions</a>
        <div className="relative group">
          <button className="flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors py-2">
            Internships <ChevronDown size={14} />
          </button>
          <div className="absolute top-full left-0 w-48 bg-white border border-slate-200 shadow-xl rounded-xl p-2 hidden group-hover:block animate-[fadeIn_0.1s_ease-out]">
            <div className="px-4 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Categories</div>
            {['Tech', 'Marketing', 'Stock', 'Finance'].map((sub) => (
              <a key={sub} href="#" className="block px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 hover:text-blue-600 rounded-lg transition-colors">
                {sub}
              </a>
            ))}
          </div>
        </div>
        <a href="#" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Quizzes</a>
        <a href="#" className="text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors">Courses</a>
      </nav>
      <div className="w-10 h-10 rounded-full bg-slate-900 overflow-hidden border-2 border-slate-100 shadow-sm cursor-pointer hover:border-blue-200 transition-colors">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan" alt="Profile" />
      </div>
    </header>
  );
}