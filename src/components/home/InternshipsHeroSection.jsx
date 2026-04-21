import { Briefcase, ChevronRight, MapPin, DollarSign } from 'lucide-react';

export default function InternshipsHeroSection({ internships, navigateTo }) {
  // If no internships, don't show anything
  if (internships.length === 0) return null;

  // Take the first internship to feature (or you can modify to show a carousel)
  const featured = internships[0];

  return (
    <section className="mb-14">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-lg font-bold text-slate-900">Featured Internships</h2>
        <button
          onClick={() => navigateTo('internships')}
          className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
        >
          View all internships <ChevronRight size={14} />
        </button>
      </div>
      <div
        onClick={() => navigateTo('details', featured)}
        className="w-full h-64 bg-[#020617] rounded-[1.5rem] relative overflow-hidden flex flex-col justify-center px-12 group cursor-pointer border border-white/5 hover:border-blue-500/50 transition-all"
      >
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${featured.img})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
              {featured.type || 'Internship'}
            </span>
            <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-[10px] font-bold uppercase tracking-widest border border-slate-700">
              {featured.host}
            </span>
          </div>
          <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{featured.title}</h3>
          <p className="text-slate-300 text-sm mb-4">{featured.role}</p>
          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <span className="flex items-center gap-1"><DollarSign size={14} /> {featured.stipend}</span>
            <span className="flex items-center gap-1"><MapPin size={14} /> {featured.location}</span>
          </div>
          <button className="mt-6 px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 text-sm transition-colors shadow-xl">
            View Internship
          </button>
        </div>
      </div>
    </section>
  );
}