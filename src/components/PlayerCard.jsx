import { MapPin, Zap, Code, Trophy, Download, ExternalLink } from 'lucide-react';

export default function PlayerCard({ 
  user, 
  tier = 'Silver', 
  points = 1450, 
  rank = 1450, 
  progress = 75, 
  avatarUrl, 
  fullName, 
  location = 'Delhi, India' 
}) {
  // Tier-specific styles – metallic and premium
  const tierStyles = {
    Bronze: {
      primary: 'from-amber-800 to-amber-600',
      accent: 'border-amber-500/50',
      text: 'text-amber-200',
      glow: 'shadow-amber-500/20',
      foil: 'from-amber-500/20 to-transparent',
      badge: 'bg-gradient-to-br from-amber-700 to-amber-500 text-amber-100 border-amber-400/30',
      statBg: 'bg-amber-900/20',
    },
    Silver: {
      primary: 'from-slate-700 to-slate-500',
      accent: 'border-slate-400/50',
      text: 'text-slate-200',
      glow: 'shadow-slate-400/20',
      foil: 'from-slate-400/20 to-transparent',
      badge: 'bg-gradient-to-br from-slate-600 to-slate-400 text-slate-100 border-slate-300/30',
      statBg: 'bg-slate-800/20',
    },
    Gold: {
      primary: 'from-yellow-800 to-yellow-600',
      accent: 'border-yellow-500/50',
      text: 'text-yellow-200',
      glow: 'shadow-yellow-500/20',
      foil: 'from-yellow-400/30 to-transparent',
      badge: 'bg-gradient-to-br from-yellow-700 to-yellow-500 text-yellow-100 border-yellow-400/30',
      statBg: 'bg-yellow-900/20',
    },
  };

  const style = tierStyles[tier] || tierStyles.Silver;

  return (
    <div className={`relative max-w-sm mx-auto group perspective-1000`}>
      {/* 3D hover effect wrapper */}
      <div className="relative transform transition-all duration-500 group-hover:rotate-1 group-hover:scale-105" style={{ transformStyle: 'preserve-3d' }}>
        
        {/* Main card body – premium dark metallic */}
        <div className={`
          relative overflow-hidden rounded-3xl 
          bg-gradient-to-br from-[#0A0F1E] to-[#1A1F2E] 
          border-2 ${style.accent}
          shadow-2xl ${style.glow}
          backdrop-blur-sm
        `}>
          
          {/* Holographic/foil overlay – moves on hover */}
          <div className={`
            absolute inset-0 bg-gradient-to-br ${style.foil} 
            opacity-0 group-hover:opacity-30 transition-opacity duration-700
            pointer-events-none
          `}></div>
          
          {/* Subtle diagonal lines (like brushed metal) */}
          <div className="absolute inset-0 opacity-5" style={{ 
            backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 8px)'
          }}></div>

          {/* Card header with tier badge and card number */}
          <div className="relative px-6 pt-6 pb-4 flex justify-between items-start">
            <div>
              <span className={`
                inline-block px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider
                ${style.badge} backdrop-blur-sm border shadow-lg
              `}>
                {tier} TIER
              </span>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-500 font-mono">CARD #</div>
              <div className="text-3xl font-black text-white drop-shadow-lg">{rank}</div>
            </div>
          </div>

          {/* Avatar – like a hologram */}
          <div className="relative px-6 flex justify-center">
            <div className="relative w-32 h-32">
              {/* Avatar ring with metallic shine */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-sm"></div>
              <div className={`absolute inset-0 rounded-full border-2 ${style.accent} opacity-50`}></div>
              <div className="absolute inset-0 rounded-full bg-black/20"></div>
              <img
                src={avatarUrl || "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan"}
                alt={fullName || "Player"}
                className="relative w-full h-full rounded-full object-cover border-2 border-white/10"
              />
            </div>
          </div>

          {/* Player name and location */}
          <div className="relative px-6 mt-4 text-center">
            <h2 className="text-2xl font-black text-white tracking-tight drop-shadow-md">
              {fullName || "Rohan Sharma"}
            </h2>
            <div className="flex items-center justify-center gap-1 text-slate-400 text-sm mt-1">
              <MapPin size={14} /> {location}
            </div>
          </div>

          {/* Stats – like a premium dashboard */}
          <div className="relative px-6 mt-6 grid grid-cols-3 gap-3">
            <div className={`${style.statBg} backdrop-blur-sm rounded-xl p-3 text-center border border-white/5`}>
              <Zap size={20} className="mx-auto text-yellow-400" />
              <div className="text-xs text-slate-400 mt-1">Speed</div>
              <div className="text-xl font-black text-white">92</div>
            </div>
            <div className={`${style.statBg} backdrop-blur-sm rounded-xl p-3 text-center border border-white/5`}>
              <Code size={20} className="mx-auto text-blue-400" />
              <div className="text-xs text-slate-400 mt-1">Coding</div>
              <div className="text-xl font-black text-white">85</div>
            </div>
            <div className={`${style.statBg} backdrop-blur-sm rounded-xl p-3 text-center border border-white/5`}>
              <Trophy size={20} className="mx-auto text-amber-400" />
              <div className="text-xs text-slate-400 mt-1">Rank</div>
              <div className="text-xl font-black text-white">#{rank}</div>
            </div>
          </div>

          {/* Progress bar with metallic fill */}
          <div className="relative px-6 mt-6 pb-6">
            <div className="flex justify-between text-xs text-slate-400 mb-2">
              <span>Progress to {tier === 'Gold' ? 'Max' : tier === 'Silver' ? 'Gold' : 'Silver'}</span>
              <span className="font-bold text-white">{progress}%</span>
            </div>
            <div className="h-2 w-full bg-black/40 rounded-full overflow-hidden border border-white/5">
              <div 
                className={`h-full bg-gradient-to-r ${style.primary} rounded-full`} 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Card footer with actions – sleek buttons */}
          <div className="relative px-6 pb-6 grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 bg-white/5 backdrop-blur-sm text-white rounded-xl hover:bg-white/10 transition-all border border-white/10 text-sm font-bold">
              <Download size={14} /> Resume
            </button>
            <button className="flex items-center justify-center gap-2 py-3 bg-white/5 backdrop-blur-sm text-white rounded-xl hover:bg-white/10 transition-all border border-white/10 text-sm font-bold">
              <ExternalLink size={14} /> Certificates
            </button>
          </div>

          {/* Very bottom – card edition */}
          <div className="relative px-6 pb-4 text-center">
            <span className="text-[10px] text-slate-600 font-mono tracking-wider">
              ZYN • {tier.toUpperCase()} EDITION • #{rank}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}