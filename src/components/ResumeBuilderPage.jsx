import { useState } from 'react';
import { ArrowLeft, Upload, Sparkles, AlertCircle, CheckCircle, Star, Zap } from 'lucide-react';

export default function ResumeBuilderPage({ navigateTo }) {
  const [file, setFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleAnalyze = () => {
    if (!file) return;
    setAnalyzing(true);
    // Simulate AI analysis after 2 seconds
    setTimeout(() => {
      setAnalyzing(false);
      setResults({
        score: 78,
        flaws: [
          "Missing quantifiable achievements",
          "Weak action verbs in experience section",
          "No links to projects or portfolio",
          "Summary too generic"
        ],
        suggestions: [
          "Add numbers: 'Increased sales by 20%' instead of 'Responsible for sales'",
          "Use strong verbs: 'Developed', 'Led', 'Engineered'",
          "Include a link to your GitHub or portfolio",
          "Tailor summary to the job you're applying for"
        ],
        strengths: [
          "Clear formatting",
          "Relevant skills listed",
          "Education section complete"
        ]
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-10">
      {/* Navigation bar */}
      <nav className="sticky top-0 bg-white/90 backdrop-blur border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigateTo('home')}>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">Z</div>
          <span className="text-xl font-bold">Zynaut</span>
        </div>
        <button onClick={() => navigateTo('home')} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-blue-600">
          <ArrowLeft size={16} /> Back
        </button>
      </nav>

      <main className="max-w-4xl mx-auto px-6 mt-8">
        <div className="flex items-center gap-3 mb-6">
          <Sparkles size={32} className="text-purple-500" />
          <h1 className="text-3xl font-black">AI Resume Builder</h1>
        </div>
        <p className="text-slate-600 mb-8">Upload your resume and let our AI analyze it for free. Get instant feedback, score, and suggestions to improve your chances.</p>

        {/* Upload area */}
        <div className="bg-white border-2 border-dashed border-slate-300 rounded-xl p-8 mb-8 text-center hover:border-blue-400 transition-colors">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="hidden"
            id="resume-upload"
          />
          <label htmlFor="resume-upload" className="cursor-pointer">
            <Upload size={48} className="mx-auto text-slate-400 mb-4" />
            <p className="text-lg font-bold text-slate-700 mb-2">
              {file ? file.name : "Click to upload your resume"}
            </p>
            <p className="text-sm text-slate-500">Supports PDF, DOC, DOCX (max 5MB)</p>
          </label>
        </div>

        {/* Analyze button */}
        {file && !analyzing && !results && (
          <button
            onClick={handleAnalyze}
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 text-lg"
          >
            <Sparkles size={20} /> Analyze with AI
          </button>
        )}

        {/* Loading animation */}
        {analyzing && (
          <div className="text-center py-12">
            <div className="animate-spin w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-slate-600">AI is analyzing your resume...</p>
          </div>
        )}

        {/* Results */}
        {results && (
          <div className="mt-8 space-y-6">
            {/* Score card */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Resume Score</h3>
                <p className="text-sm text-slate-500">Based on ATS compatibility and content</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-4xl font-black text-blue-600">{results.score}</div>
                <div className="text-slate-400">/100</div>
              </div>
            </div>

            {/* Strengths */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="font-bold text-green-700 mb-3 flex items-center gap-2"><CheckCircle size={20} /> Strengths</h3>
              <ul className="list-disc list-inside space-y-1 text-green-600">
                {results.strengths.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            {/* Flaws */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-bold text-red-700 mb-3 flex items-center gap-2"><AlertCircle size={20} /> Areas to Improve</h3>
              <ul className="list-disc list-inside space-y-1 text-red-600">
                {results.flaws.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            {/* Suggestions */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-blue-700 mb-3 flex items-center gap-2"><Zap size={20} /> AI Suggestions</h3>
              <ul className="list-disc list-inside space-y-1 text-blue-600">
                {results.suggestions.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>

            {/* Action button */}
            <button className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all">
              Download Improved Resume (Coming Soon)
            </button>
          </div>
        )}
      </main>
    </div>
  );
}