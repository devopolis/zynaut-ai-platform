import { useState } from 'react';
import { ArrowLeft, Building2, CheckCircle, Code, MapPin, Trophy, Users, X, ExternalLink } from 'lucide-react';

export default function DetailsPage({ selectedComp, navigateTo, goBack, isAuthenticated, checkAuthAndRegister, isApplied }) {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const isInternship = selectedComp?.category === 'internship';
  const isDrill = selectedComp?.category === 'drill';

  const handleRegistration = (e) => {
    e.preventDefault();
    const newApp = {
      id: selectedComp.id,
      title: selectedComp.title,
      role: isInternship ? selectedComp.role : 'Participant',
      status: isInternship ? 'Applied' : 'Registered',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      color: 'text-green-600 bg-green-50 border-green-200'
    };
    setShowRegisterModal(false);
    alert(`Success! Check "My Applications".`);
  };

  if (!selectedComp) return null;

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 pb-20 relative">
      {showRegisterModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-[fadeIn_0.2s_ease-out]">
            <button onClick={() => setShowRegisterModal(false)} className="absolute right-4 top-4 text-slate-400 hover:text-slate-900"><X size={24}/></button>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{isInternship ? 'Apply for Role' : 'Register Team'}</h2>
              <p className="text-sm text-slate-500 mb-6">You are applying for <span className="font-bold text-slate-900">{selectedComp.title}</span></p>
              <form className="space-y-4" onSubmit={handleRegistration}>
                {!isInternship && (
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Team Name</label>
                    <input type="text" placeholder="e.g. Code Blasters" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none font-bold" required />
                  </div>
                )}
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name</label>
                  <input type="text" defaultValue={isAuthenticated ? "Rohan Sharma" : ""} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" required />
                </div>
                {isInternship && (
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Resume Link</label>
                    <input type="text" placeholder="Drive/Notion Link" className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" required />
                  </div>
                )}
                <div className="pt-2">
                  <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all">
                    Confirm {isInternship ? 'Application' : 'Registration'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-blue-200 shadow-lg">Z</div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Zynaut.</span>
        </div>
        <button onClick={goBack} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
          <ArrowLeft size={16} /> Back
        </button>
      </nav>
      <main className="max-w-6xl mx-auto mt-8 px-6">
        <div className="relative w-full h-80 rounded-[2rem] overflow-hidden shadow-2xl mb-10 group">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${selectedComp.img})` }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-10 w-full z-10 flex items-end justify-between">
            <div>
              <div className="flex gap-3 mb-4">
                {selectedComp.tag && <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full text-xs font-bold uppercase tracking-widest">{selectedComp.tag}</span>}
                <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">{selectedComp.points || 'Job'}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-2">{selectedComp.title}</h1>
              <p className="text-slate-300 font-medium text-lg flex items-center gap-2">
                <Building2 size={18} className="text-blue-400"/> Hosted by: <span className="text-white font-bold">{selectedComp.host || 'Zynaut'}</span>
              </p>
            </div>
            {/* Action button area */}
            {isInternship ? (
              selectedComp.external_url ? (
                <a
                  href={selectedComp.external_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 mb-4 flex items-center justify-center gap-2"
                >
                  Apply Externally <ExternalLink size={18} />
                </a>
              ) : (
                <button disabled className="w-full py-4 bg-gray-400 text-white font-bold rounded-xl mb-4 cursor-not-allowed">
                  No Application Link
                </button>
              )
            ) : isDrill ? (
              <button onClick={() => navigateTo('arena', selectedComp)} className="w-full py-4 bg-yellow-500 text-black font-bold rounded-xl mb-4 flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all shadow-lg">
                <Code size={20}/> Start Challenge
              </button>
            ) : (
              isApplied ? (
                <button disabled className="w-full py-4 bg-green-50 border-2 border-green-200 text-green-700 font-bold rounded-xl mb-4 flex items-center justify-center gap-2 cursor-default">
                  <CheckCircle size={20}/> Already Registered
                </button>
              ) : (
                <button onClick={checkAuthAndRegister} className="w-full py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 mb-4 flex items-center justify-center gap-2">
                  Register Now
                </button>
              )
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-white border border-slate-200 p-8 rounded-[2rem] shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{isInternship ? 'Job Description' : 'About the Competition'}</h2>
              <p className="text-slate-600 leading-relaxed mb-6 whitespace-pre-line">
                {selectedComp.description || (isInternship ? "No description provided." : `This is a ${selectedComp.tag} level competition hosted by ${selectedComp.host || 'a partner'}. Prove your mettle against the best.`)}
              </p>
              <div className="flex gap-6">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl w-full border border-slate-100">
                  {/* Changed from DollarSign to a rupee symbol */}
                  <span className="text-green-600 font-bold text-2xl">₹</span>
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase">{isInternship ? 'Stipend' : 'Rewards'}</span>
                    <span className="block text-slate-900 font-bold">{isInternship ? (selectedComp.stipend || 'Not specified') : (selectedComp.tag === 'Scholarship' ? 'Full Scholarship' : 'PPI + Cash')}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl w-full border border-slate-100">
                  {isInternship ? <MapPin className="text-red-500" size={28}/> : <Users className="text-blue-500" size={28} />}
                  <div>
                    <span className="block text-xs font-bold text-slate-400 uppercase">{isInternship ? 'Location' : 'Participation'}</span>
                    <span className="block text-slate-900 font-bold">{isInternship ? (selectedComp.location || 'Remote') : '1,200+ Teams'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white border border-slate-200 p-6 rounded-[2rem] shadow-xl">
              <div className="text-center mb-6">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">{isInternship ? 'Duration' : 'Deadline'}</span>
                <h3 className="text-3xl font-black text-slate-900">{isInternship ? (selectedComp.duration || 'Not specified') : selectedComp.deadline}</h3>
              </div>
              {isInternship ? (
                selectedComp.external_url ? (
                  <a
                    href={selectedComp.external_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 mb-4 flex items-center justify-center gap-2"
                  >
                    Apply Externally <ExternalLink size={18} />
                  </a>
                ) : (
                  <button disabled className="w-full py-4 bg-gray-400 text-white font-bold rounded-xl mb-4 cursor-not-allowed">
                    No Application Link
                  </button>
                )
              ) : isDrill ? (
                <button onClick={() => navigateTo('arena', selectedComp)} className="w-full py-4 bg-yellow-500 text-black font-bold rounded-xl mb-4 flex items-center justify-center gap-2 hover:bg-yellow-400 transition-all shadow-lg">
                  <Code size={20}/> Start Challenge
                </button>
              ) : (
                isApplied ? (
                  <button disabled className="w-full py-4 bg-green-50 border-2 border-green-200 text-green-700 font-bold rounded-xl mb-4 flex items-center justify-center gap-2 cursor-default">
                    <CheckCircle size={20}/> Already Registered
                  </button>
                ) : (
                  <button onClick={checkAuthAndRegister} className="w-full py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 mb-4 flex items-center justify-center gap-2">
                    Register Now
                  </button>
                )
              )}
              <div className="border-t border-slate-100 pt-6">
                <h4 className="text-sm font-bold text-slate-900 mb-3">Requirements</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle size={16} className="text-green-500"/> Verified Student</li>
                  <li className="flex items-center gap-2 text-sm text-slate-600"><CheckCircle size={16} className="text-green-500"/> Resume Required</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}