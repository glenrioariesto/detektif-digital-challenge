import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, XCircle, Search, HelpCircle, ArrowRight, X } from 'lucide-react';
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
  const [isClueOpen, setIsClueOpen] = useState(false);
  const progressPercentage = ((currentCaseIndex) / totalCases) * 100;
  const isCorrect = selectedRealChoice === activeCase.realImage;

  return (
    <div className="h-screen w-screen bg-[#070514] text-slate-100 flex items-center justify-center overflow-hidden relative select-none font-sans scanlines">
      {/* Immersive Game UI stretching to landscape screen bounds */}
      <div className="relative w-full h-full z-10 flex flex-col">
        
        {/* Thin Progress Bar at Very Top */}
        <div className="absolute top-0 left-0 w-full h-1 bg-slate-950 z-30">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-pink-500 transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        {/* HUD: Top-Left Exit Icon Button */}
        <button
          type="button"
          onClick={onBack}
          className="absolute top-4 left-4 z-30 w-10 h-10 bg-black/60 backdrop-blur-md border-2 border-cyan-900/60 rounded-full flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:border-cyan-500 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
          title="Keluar"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* HUD: Top-Right Score Badge */}
        <div className="absolute top-4 right-4 z-30 px-3.5 py-2 bg-black/60 backdrop-blur-md border-2 border-cyan-900/60 rounded-2xl flex items-center gap-2 text-xs font-bold text-cyan-300 shadow-md font-mono">
          <span className="text-cyan-400">Skor:</span>
          <span>{score}</span>
        </div>

        {/* Gameplay Area - Center Grid */}
        <div className="flex-1 flex items-center justify-center p-6 min-h-0 relative select-none">
          {/* Side-by-side Images container */}
          <div className="flex justify-between items-center gap-4 py-2 max-w-5xl w-full">
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
        </div>

        {/* Bottom Unified Control Center */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 w-[95%] sm:w-[90%] max-w-lg bg-black/85 backdrop-blur-md border-2 border-cyan-900/60 p-3 rounded-2xl flex items-center justify-between gap-3 shadow-2xl">
          {/* Integrated Clue Trigger Button */}
          <button
            type="button"
            onClick={() => setIsClueOpen(true)}
            className="w-10 h-10 bg-cyan-950/75 hover:bg-cyan-900/80 border border-cyan-600 rounded-xl flex items-center justify-center text-cyan-300 hover:text-white transition-all cursor-pointer shrink-0 shadow-md hover:scale-105 active:scale-95"
            title="Petunjuk Penyelidikan"
          >
            <Search className="w-5 h-5 text-cyan-400" />
          </button>
          
          {/* Integrated Level & Info Badge */}
          <div className="text-center sm:text-left flex-1 px-2 min-w-0">
            <p className="text-[10px] sm:text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider truncate">
              Manakah FOTO ASLI?
            </p>
            <p className="text-[8px] sm:text-[9px] text-slate-400 font-mono mt-0.5 truncate">
              Kasus {currentCaseIndex + 1}/{totalCases}: {activeCase.title}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            disabled={selectedRealChoice === null || showFeedback}
            onClick={onSubmit}
            className={`px-4 sm:px-6 py-2 sm:py-2.5 font-mono text-[10px] sm:text-xs font-bold uppercase rounded-xl border transition-all duration-300 cursor-pointer shrink-0 ${
              selectedRealChoice === null || showFeedback
                ? 'border-slate-800 text-slate-600 bg-slate-950/50 cursor-not-allowed'
                : 'border-cyan-400 text-cyan-400 bg-cyan-950/10 hover:bg-cyan-400 hover:text-slate-950 glow-cyan hover:scale-[1.02]'
            }`}
          >
            Kirim Analisis
          </button>
        </div>

        {/* MODAL 1: DETECTIVE CLUES BOARD */}
        {isClueOpen && (
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm z-40 flex items-center justify-center p-4 animate-fadeIn">
            <div className="w-full max-w-md bg-[#070514]/95 border-2 border-cyan-800 rounded-2xl p-4 sm:p-5 shadow-2xl relative font-sans max-h-[90vh] overflow-y-auto flex flex-col">
              <button
                type="button"
                onClick={() => setIsClueOpen(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-cyan-500 hover:text-white transition-colors cursor-pointer z-10"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="flex items-center gap-2 border-b border-cyan-950 pb-1.5 sm:pb-2 mb-3 sm:mb-4 font-mono shrink-0">
                <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                <h4 className="text-[10px] sm:text-xs font-bold text-slate-100 uppercase tracking-wider">
                  Petunjuk Penyelidikan
                </h4>
              </div>

              <div className="mb-3 sm:mb-4 overflow-y-auto pr-1">
                <div className="mb-3 shrink-0">
                  <span className="text-[8px] sm:text-[9px] font-mono font-bold text-cyan-400 uppercase tracking-widest bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-900/30">
                    {activeCase.category}
                  </span>
                  <p className="text-[11px] sm:text-xs text-slate-350 mt-2 sm:mt-3 leading-relaxed text-justify">
                    {activeCase.description}
                  </p>
                </div>

                <div className="bg-cyan-950/20 border border-cyan-900/40 rounded-xl p-2.5 sm:p-3.5">
                  <span className="text-[8px] sm:text-[9px] font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1.5 sm:mb-2 border-b border-cyan-950 pb-1">
                    Petunjuk Detail:
                  </span>
                  <ul className="flex flex-col gap-2 sm:gap-2.5">
                    {activeCase.clues.map((clue, idx) => (
                      <li key={clue} className="flex gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-350 leading-relaxed">
                        <span className="text-cyan-400 select-none font-mono">0{idx + 1}.</span>
                        <span>{clue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsClueOpen(false)}
                className="w-full py-2 bg-cyan-950 hover:bg-cyan-900 border border-cyan-700 text-cyan-100 rounded-lg text-[10px] sm:text-xs font-mono font-bold transition-colors cursor-pointer text-center shrink-0"
              >
                Kembali ke Arena
              </button>
            </div>
          </div>
        )}

        {/* MODAL 2: FEEDBACK / REVEAL OVERLAY */}
        {showFeedback && (
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md z-45 flex items-center justify-center p-4 animate-fadeIn">
            <div className="w-full max-w-md bg-[#070514]/95 border-2 border-cyan-500 rounded-2xl p-4 sm:p-5 shadow-2xl relative text-center max-h-[90vh] overflow-y-auto flex flex-col justify-center">
              
              {/* Correctness Header */}
              <div className={`w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg shrink-0 ${
                isCorrect 
                  ? 'bg-cyan-950/60 border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)]' 
                  : 'bg-rose-950/60 border-2 border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.3)]'
              }`}>
                {isCorrect ? (
                  <CheckCircle2 className="w-4 h-4 sm:w-6 sm:h-6 text-cyan-400 animate-pulse" />
                ) : (
                  <XCircle className="w-4 h-4 sm:w-6 sm:h-6 text-rose-500" />
                )}
              </div>

              <h3 className={`text-xs sm:text-sm font-black uppercase tracking-widest mb-0.5 sm:mb-1 shrink-0 ${
                isCorrect ? 'text-cyan-400' : 'text-rose-500'
              }`}>
                {isCorrect ? 'ANALISIS BENAR!' : 'ANALISIS KELIRU!'}
              </h3>
              <p className="text-[8px] sm:text-[9px] font-mono text-slate-400 uppercase tracking-wider mb-2.5 sm:mb-4 shrink-0">
                Kasus ke-{currentCaseIndex + 1}
              </p>

              {/* Reveal details */}
              <div className={`border rounded-xl p-3 sm:p-4 mb-3 sm:mb-5 text-left max-h-[100px] sm:max-h-[180px] overflow-y-auto shrink-0 ${
                isCorrect ? 'bg-cyan-950/20 border-cyan-900/40' : 'bg-rose-950/20 border-rose-900/40'
              }`}>
                <p className="font-mono text-[10px] sm:text-xs text-white mb-1.5 sm:mb-2 border-b border-slate-800 pb-1">
                  Jawaban: <span className="text-cyan-400 font-bold">Gambar {activeCase.realImage}</span> adalah Asli,{' '}
                  <span className="text-indigo-400 font-bold">Gambar {activeCase.aiImage}</span> adalah KA.
                </p>
                <p className="text-[11px] sm:text-xs text-slate-350 leading-relaxed font-sans text-justify">
                  {activeCase.explanation}
                </p>
              </div>

              <button
                type="button"
                onClick={onAdvance}
                className={`w-full py-2.5 sm:py-3 border text-black rounded-xl text-[10px] sm:text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer hover:scale-[1.02] active:scale-98 shrink-0 ${
                  isCorrect 
                    ? 'bg-cyan-400 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.25)] hover:bg-cyan-300' 
                    : 'bg-rose-500 border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.25)] hover:bg-rose-450 text-white'
                }`}
              >
                <span>{currentCaseIndex === totalCases - 1 ? 'Lihat Hasil Akhir' : 'Lanjut ke Kasus Berikutnya'}</span>
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 stroke-[2.5px]" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
