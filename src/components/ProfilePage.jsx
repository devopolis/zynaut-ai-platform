import { ArrowLeft, Download, ExternalLink, MapPin, Shield, Zap, Award, Star, Trophy, Code, Briefcase } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../supabase';

export default function ProfilePage({ navigateTo, isAuthenticated, setShowLoginModal }) {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      fetchProfile();
    }
  }, [isAuthenticated]);

  const fetchProfile = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single();
      setProfile(data);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 font-sans text-slate-900 relative overflow-hidden">
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">Z</div>
            <span className="text-xl font-bold tracking-tight text-slate-900">Zynaut.</span>
          </div>
          <button onClick={() => navigateTo('home')} className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors bg-slate-100 px-4 py-2 rounded-lg border border-slate-200">
            <ArrowLeft size={16} /> Back
          </button>
        </nav>
        <div className="flex flex-col items-center justify-center h-[80vh] text-center px-6">
          <h2 className="text-4xl font-black text-slate-800 mb-4">Unlock Your Player Card</h2>
          <p className="text-slate-600 mb-8 max-w-md">Track your progress, earn badges, and get discovered by top recruiters. Join Zynaut today.</p>
          <button onClick={() => setShowLoginModal(true)} className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30">
            Create Account / Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 font-sans text-slate-900 relative overflow-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">Z</div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Zynaut.</span>
        </div>
        <button onClick={() => navigateTo('home')} className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors bg-slate-100 px-4 py-2 rounded-lg border border-slate-200">
          <ArrowLeft size={16} /> Back
        </button>
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left column – stats and rank */}
          <div className="lg:col-span-4 space-y-6">
            {/* Rank card */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-xl text-slate-800">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                <Shield size={16} className="text-blue-500" /> Current Rank
              </h3>
              <div className="flex items-end gap-3">
                <span className="text-4xl font-black text-slate-900">#1,450</span>
                <span className="text-sm text-slate-500 mb-1">top 5%</span>
              </div>
              <div className="mt-4 h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* Skill stats */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-xl">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-5">Skill Stats</h3>
              <div className="space-y-5">
                {[
                  { name: 'React', val: '92%', col: 'bg-blue-500' },
                  { name: 'Python', val: '85%', col: 'bg-yellow-500' },
                  { name: 'System Design', val: '68%', col: 'bg-purple-500' },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <span className="font-bold text-slate-900">{skill.val}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                      <div className={`h-full ${skill.col} rounded-full`} style={{ width: skill.val }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center – Player Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 transform transition-all hover:shadow-3xl">
              {/* Card header with tier color */}
              <div className="h-3 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500"></div>
              
              <div className="p-8">
                {/* Avatar, name, location */}
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-100 ring-4 ring-slate-50">
                    <img
                      src={profile?.avatar_url || "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan"}
                      alt={profile?.full_name || "User"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-3xl font-black text-slate-900">{profile?.full_name || "Rohan Sharma"}</h1>
                    <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                      <MapPin size={14} /> Delhi, India
                    </div>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full uppercase tracking-wider border border-amber-200">
                        Silver Tier
                      </span>
                      <span className="text-xs text-slate-400">#1450</span>
                    </div>
                  </div>
                </div>

                {/* Progress bar to Gold */}
                <div className="mt-8">
                  <div className="flex justify-between text-sm text-slate-500 mb-2">
                    <span className="font-medium">Progress to Gold</span>
                    <span className="font-bold text-slate-900">75%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <button className="flex items-center justify-center gap-2 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all shadow-md hover:shadow-lg active:scale-95">
                    <Download size={16} /> <span className="text-sm font-bold">Resume</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-all shadow-sm hover:shadow-md active:scale-95">
                    <ExternalLink size={16} /> <span className="text-sm font-bold">Certificates</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right column – Achievements (badges) */}
          <div className="lg:col-span-3">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-xl h-full">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Award size={16} className="text-purple-500" /> Achievements
              </h3>
              <div className="space-y-4">
                {[
                  { icon: <Zap size={20} />, label: 'Fast Solver', desc: 'Solved 10 problems in under 2 min', color: 'text-yellow-600 bg-yellow-50 border-yellow-200' },
                  { icon: <Star size={20} />, label: 'Top 10%', desc: 'Ranked in top 10% this month', color: 'text-purple-600 bg-purple-50 border-purple-200' },
                  { icon: <Trophy size={20} />, label: 'Gold Week', desc: 'Earned 500+ XP in one week', color: 'text-amber-600 bg-amber-50 border-amber-200' },
                ].map((badge, i) => (
                  <div key={i} className={`flex items-start gap-3 p-3 rounded-xl border ${badge.color} transition-all hover:shadow-md`}>
                    <div className={`p-2 rounded-lg ${badge.color.replace('text-', 'bg-').replace('600', '100')}`}>
                      {badge.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{badge.label}</h4>
                      <p className="text-xs text-slate-500">{badge.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}