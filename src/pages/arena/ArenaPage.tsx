import React from 'react';
import { ArrowLeft, CheckCircle2, XCircle, Search, HelpCircle, ArrowRight } from 'lucide-react';
import { Case } from '../../types';
import { MagnifiedImage } from '../../components/MagnifiedImage';

interface ArenaPageProps {
  currentCaseIndex: number;
  activeCase: Case;
  totalCases: number;
  selectedRealChoice: 'A' | 'B' | null;
  showFeedback: boolean;
  score: number;
  onSelectChoice: (choice: 'A' | 'B') => void;
  onSubmit: () => void;
  onAdvance: () => void;
  onBack: () => void;
}

export function ArenaPage({
  currentCaseIndex,
  activeCase,
  totalCases,
  selectedRealChoice,
  showFeedback,
  score,
  onSelectChoice,
  onSubmit,
  onAdvance,
  onBack
}: ArenaPageProps) {
  const progressPercentage = ((currentCaseIndex) / totalCases) * 100;
  const isCorrect = selectedRealChoice === activeCase.realImage;

  return (
    <div className="min-h-screen w-screen bg-[#020617] text-slate-100 flex flex-col font-sans scanlines">
      {/* Upper Navigation / Status Header */}
      <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md px-6 py-4 flex items-center justify-between z-10 shrink-0">
        <button
          type="button"
          onClick={onBack}
          className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 hover:text-white transition-colors uppercase cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Keluar</span>
        </button>

        <div className="flex flex-col items-center">
          <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
            Kasus {currentCaseIndex + 1} dari {totalCases}
          </span>
          <h3 className="text-sm font-bold font-display text-white mt-0.5">
            {activeCase.title}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-400">Skor Benar:</span>
          <span className="font-mono text-sm font-black text-cyan-400 bg-cyan-950/30 border border-cyan-800/50 px-2 py-0.5 rounded">
            {score}
          </span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-slate-900 relative z-10 shrink-0">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Main Split Layout */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden p-6 gap-6 relative max-h-[calc(100vh-68px)]">
        {/* Left Side: Images & Choice Panel */}
        <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
          {/* Instructions Box */}
          <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-4">
            <span className="text-[9px] font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-900/30">
              {activeCase.category}
            </span>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              {activeCase.description}
            </p>
          </div>

          {/* Side-by-side Images container */}
          <div className="flex justify-between items-center gap-4 py-2 shrink-0">
            <MagnifiedImage
              src={activeCase.imageA}
              alt="Gambar Bukti A"
              label="A"
              isSelected={selectedRealChoice === 'A'}
              onSelect={() => onSelectChoice('A')}
              disabled={showFeedback}
            />

            <MagnifiedImage
              src={activeCase.imageB}
              alt="Gambar Bukti B"
              label="B"
              isSelected={selectedRealChoice === 'B'}
              onSelect={() => onSelectChoice('B')}
              disabled={showFeedback}
            />
          </div>

          {/* Prompt Selection & Submit Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-950/30 border border-slate-900 p-4 rounded-xl shrink-0">
            <div className="text-center sm:text-left">
              <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                Manakah gambar yang merupakan FOTO ASLI?
              </p>
              <p className="text-[10px] text-slate-500 mt-0.5">
                (Gambar yang lain adalah hasil rekayasa KA)
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                disabled={selectedRealChoice === null || showFeedback}
                onClick={onSubmit}
                className={`flex-1 sm:flex-none px-6 py-2.5 font-mono text-xs font-bold uppercase rounded-lg border transition-all duration-300 cursor-pointer ${
                  selectedRealChoice === null || showFeedback
                    ? 'border-slate-800 text-slate-600 bg-slate-950/50 cursor-not-allowed'
                    : 'border-cyan-400 text-cyan-400 bg-cyan-950/10 hover:bg-cyan-400 hover:text-slate-950 glow-cyan hover:scale-[1.02]'
                }`}
              >
                Kirim Analisis
              </button>
            </div>
          </div>
        </div>

        {/* Right Side / Bottom Panel: Clues & Explanations */}
        <div className="w-full lg:w-[320px] flex flex-col gap-4 overflow-y-auto shrink-0">
          {/* Detective Clues Board */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 flex flex-col gap-3">
            <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
              <Search className="w-4 h-4 text-cyan-400" />
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                Petunjuk Penyelidikan
              </h4>
            </div>
            
            <ul className="flex flex-col gap-2.5">
              {activeCase.clues.map((clue, idx) => (
                <li key={clue} className="flex gap-2 text-xs text-slate-400 leading-relaxed">
                  <span className="text-cyan-500 select-none font-mono">0{idx + 1}.</span>
                  <span>{clue}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Feedback Section (Visible after Submit) */}
          {showFeedback && (
            <div
              className={`border rounded-xl p-4 flex flex-col gap-3 transition-all duration-300 animate-fadeIn ${
                isCorrect
                  ? 'border-emerald-500/30 bg-emerald-950/10 glow-emerald'
                  : 'border-rose-500/30 bg-rose-950/10 glow-rose'
              }`}
            >
              {/* Correctness Header */}
              <div className="flex items-center gap-2 border-b pb-2 border-slate-800/60">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 animate-pulse" />
                    <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest">
                      ANALISIS BENAR (+1)
                    </span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    <span className="font-mono text-xs font-bold text-rose-400 uppercase tracking-widest">
                      ANALISIS KELIRU (0)
                    </span>
                  </>
                )}
              </div>

              {/* Reveal details */}
              <div className="text-xs">
                <p className="font-mono text-white mb-2">
                  Jawaban: <span className="text-cyan-400 font-bold">Gambar {activeCase.realImage}</span> adalah Asli,{' '}
                  <span className="text-indigo-400 font-bold">Gambar {activeCase.aiImage}</span> adalah KA.
                </p>
                <p className="text-slate-300 leading-relaxed font-sans mb-3 text-justify">
                  {activeCase.explanation}
                </p>
                <button
                  type="button"
                  onClick={onAdvance}
                  className="w-full py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white rounded-lg text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>{currentCaseIndex === totalCases - 1 ? 'Lihat Hasil Akhir' : 'Lanjut ke Kasus Berikutnya'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
