import { ArrowLeft } from 'lucide-react';

export default function ApplicationsPage({ navigateTo, myApplications }) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 pb-20 relative">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-blue-200 shadow-lg">Z</div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Zynaut.</span>
        </div>
        <button onClick={() => navigateTo('home')} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
          <ArrowLeft size={16} /> Dashboard
        </button>
      </nav>
      <main className="max-w-5xl mx-auto mt-12 px-6">
        <h1 className="text-3xl font-black text-slate-900 mb-2">My Applications</h1>
        <p className="text-slate-500 mb-10">Track the status of your internships and competitions.</p>
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                <th className="p-6">Opportunity</th>
                <th className="p-6">Role / Type</th>
                <th className="p-6">Applied On</th>
                <th className="p-6">Status</th>
                <th className="p-6">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {myApplications.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-10 text-center text-slate-400">No applications yet.</td>
                </tr>
              ) : (
                myApplications.map((app) => (
                  <tr key={app.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 font-bold text-slate-900">{app.title}</td>
                    <td className="p-6 text-sm text-slate-600">{app.role}</td>
                    <td className="p-6 text-sm text-slate-500">{app.date}</td>
                    <td className="p-6">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${app.color}`}>{app.status}</span>
                    </td>
                    <td className="p-6">
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-bold hover:underline">View</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}