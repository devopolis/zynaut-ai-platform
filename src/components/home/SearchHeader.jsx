import { useState } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';

export default function SearchHeader({ searchQuery, setSearchQuery }) {
  // This is the engine that controls if the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between mb-12 sticky top-0 bg-[#F8FAFC]/90 backdrop-blur z-30 py-4 gap-4">
      {/* 1. Search Bar */}
      <div className="relative w-full md:w-[400px]">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-11 pr-4 py-3 bg-[#1e293b] text-white placeholder-slate-400 border-none rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* 2. Desktop Navigation (Hidden on Mobile) */}
      <nav className="hidden md:flex items-center gap-8">
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

      {/* 3. Desktop Profile Picture (Hidden on Mobile) */}
      <div className="hidden md:block w-10 h-10 rounded-full bg-slate-900 overflow-hidden border-2 border-slate-100 shadow-sm cursor-pointer hover:border-blue-200 transition-colors flex-shrink-0">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan" alt="Profile" />
      </div>

      {/* 4. Mobile Hamburger Button (Hidden on Desktop) */}
      <button 
        className="md:hidden p-2 text-slate-600 bg-slate-200 rounded-lg flex-shrink-0"
        onClick={() => setIsMenuOpen(true)}
      >
        <Menu size={20} />
      </button>

      {/* ========================================= */}
      {/* 5. THE MOBILE SLIDE-OUT DRAWER */}
      {/* ========================================= */}
      
      {/* Dark background overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* The actual sliding panel */}
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#0f172a] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Drawer Header: Profile & Close Button */}
        <div className="flex justify-between items-center p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-800 overflow-hidden border-2 border-slate-500">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan" alt="Profile" />
            </div>
            <span className="text-white font-bold text-sm">Guest User</span>
          </div>
          <button onClick={() => setIsMenuOpen(false)} className="text-slate-400 hover:text-white p-2">
            <X size={24} />
          </button>
        </div>

        {/* Drawer Body: Sidebar Tools & Links */}
        <div className="flex flex-col p-6 gap-8 overflow-y-auto">
          
          {/* Missing Sidebar Tools */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Your Dashboard</p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors text-sm">
              + Create Player Card
            </button>
            <button className="w-full bg-[#1e293b] text-white font-bold py-3 rounded-xl transition-colors text-sm">
              My Applications
            </button>
            <button className="w-full bg-[#1e293b] text-purple-400 font-bold py-3 rounded-xl transition-colors text-sm border border-purple-500/20">
              AI Resume Builder
            </button>
            <button className="w-full bg-[#1e293b] text-yellow-500 font-bold py-3 rounded-xl transition-colors text-sm">
              Leaderboard
            </button>
          </div>

          <div className="h-px bg-slate-800 w-full"></div>

          {/* Main Navigation Links */}
          <div className="flex flex-col gap-5">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Explore Platform</p>
            <a href="#" className="text-white font-bold text-base hover:text-blue-400 transition-colors">Competitions</a>
            <a href="#" className="text-white font-bold text-base hover:text-blue-400 transition-colors">Internships</a>
            <a href="#" className="text-white font-bold text-base hover:text-blue-400 transition-colors">Quizzes</a>
            <a href="#" className="text-white font-bold text-base hover:text-blue-400 transition-colors">Courses</a>
          </div>

        </div>
      </div>
    </header>
  );
}