import { useState, useEffect } from 'react';
import { supabase } from '../supabase';
import { ArrowLeft, Briefcase, MapPin, DollarSign, ExternalLink } from 'lucide-react';

export default function InternshipsPage({ navigateTo }) {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInternships();
  }, []);

  const fetchInternships = async () => {
    const { data, error } = await supabase
      .from('assessments')
      .select('*')
      .eq('category', 'internship');
    if (error) console.error(error);
    else setInternships(data);
    setLoading(false);
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <nav className="sticky top-0 bg-white/90 backdrop-blur border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">Z</div>
          <span className="text-xl font-bold">Zynaut</span>
        </div>
        <button onClick={() => navigateTo('home')} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600">
          <ArrowLeft size={16} /> Back
        </button>
      </nav>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-black mb-2">All Internships</h1>
        <p className="text-slate-500 mb-8">Found {internships.length} opportunities</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internships.map((item) => (
            <div
              key={item.id}
              onClick={() => navigateTo('details', item)}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold text-lg">
                  {item.title?.charAt(0) || '?'}
                </div>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded">
                  {item.industry || 'Internship'}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">{item.title || 'Untitled'}</h3>
              <p className="text-sm text-slate-500 mb-2">{item.host || 'Unknown'}</p>
              <p className="text-xs text-slate-600 mb-4 line-clamp-2">{item.role || item.description?.substring(0,100) || ''}</p>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1"><Briefcase size={12} /> {item.duration || 'Not specified'}</span>
                <span className="flex items-center gap-1"><MapPin size={12} /> {item.location || 'Remote'}</span>
                <span className="flex items-center gap-1"><span className="text-green-600 font-bold">₹</span> {item.stipend || 'Not specified'}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}