import { useState } from 'react';
import { ArrowLeft, Play, Check, Terminal } from 'lucide-react';

export default function ArenaPage({ selectedComp, goBack }) {
  const [code, setCode] = useState(`def solve(arr):\n    # Write your code here\n    return 0`);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setOutput("Compiling...");
    setTimeout(() => {
        setIsRunning(false);
        setOutput("Test Case 1: Passed ✅\nTest Case 2: Passed ✅\nTest Case 3: Failed ❌\n\nOutput: 15\nExpected: 20");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans flex flex-col">
      <header className="h-16 border-b border-slate-700 flex items-center justify-between px-6 bg-[#1e293b]">
        <div className="flex items-center gap-4">
          <button onClick={goBack} className="p-2 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-all">
            <ArrowLeft size={18}/>
          </button>
          <div>
            <h1 className="font-bold text-sm text-slate-200">{selectedComp?.title}</h1>
            <span className="text-xs text-slate-500 font-mono">Time Remaining: 00:44:20</span>
          </div>
        </div>
        <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-colors">End Test</button>
      </header>
      <div className="flex-1 flex overflow-hidden">
        <div className="w-1/3 bg-[#0f172a] border-r border-slate-700 p-6 overflow-y-auto">
          <h2 className="text-xl font-bold text-white mb-4">Problem 1: Array Sum</h2>
          <p className="text-sm text-slate-400 mb-6 leading-relaxed">Given an array of integers, find the sum of its elements.</p>
          <div className="bg-slate-800/50 rounded-lg p-4 mb-6 border border-slate-700">
            <h3 className="text-xs font-bold text-slate-500 uppercase mb-2">Input</h3>
            <p className="text-xs text-slate-300 font-mono">Integer n, then n integers.</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 mb-6 border border-slate-700">
            <h3 className="text-xs font-bold text-slate-500 uppercase mb-2">Example</h3>
            <p className="text-xs text-slate-300 font-mono">Input: [1, 2, 3] -&gt; Output: 6</p>
          </div>
        </div>
        <div className="w-2/3 flex flex-col bg-[#1e293b]">
          <div className="h-10 border-b border-slate-700 flex items-center justify-between px-4 bg-[#1e293b]">
            <div className="flex gap-2">
              <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded">main.py</span>
            </div>
          </div>
          <textarea
            className="flex-1 w-full bg-[#0f172a] text-slate-300 font-mono text-sm p-4 outline-none resize-none leading-6"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck="false"
          />
          <div className="h-48 border-t border-slate-700 bg-[#020617] flex flex-col">
            <div className="h-10 border-b border-slate-800 flex items-center justify-between px-4 bg-[#0f172a]">
              <div className="flex items-center gap-2 text-slate-400 text-xs font-bold">
                <Terminal size={14}/> Console
              </div>
              <div className="flex gap-2">
                <button onClick={runCode} className="flex items-center gap-2 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold rounded transition-colors">
                  {isRunning ? 'Running...' : <><Play size={12}/> Run Code</>}
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded transition-colors">
                  <Check size={12}/> Submit
                </button>
              </div>
            </div>
            <div className="p-4 font-mono text-xs text-slate-300 whitespace-pre-line">
              {output || "Run code to see output..."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}