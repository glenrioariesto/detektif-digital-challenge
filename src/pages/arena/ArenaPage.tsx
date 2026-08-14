import React, { useState } from 'react';
import { XCircle, Search, HelpCircle, ArrowRight, X, ChevronUp, ChevronDown } from 'lucide-react';
import { Case } from '../../types';
import { MagnifiedImage } from '../../components/MagnifiedImage';
import bgGameplay from '../../../assets/background gameplay.webp';
import tagImg from '../../../assets/tag.webp';
import logoPusbuk from '../../../assets/logo-pusbuk.webp';

interface ArenaPageProps {
  currentCaseIndex: number;
  activeCase: Case;
  totalCases: number;
  selectedAiChoice: 'A' | 'B' | null;
  showFeedback: boolean;
  onSelectChoice: (choice: 'A' | 'B') => void;
  onSubmit: () => void;
  onAdvance: () => void;
}

export function ArenaPage({
  currentCaseIndex,
  activeCase,
  totalCases,
  selectedAiChoice,
  showFeedback,
  onSelectChoice,
  onSubmit,
  onAdvance,
}: ArenaPageProps) {
  const [isClueOpen, setIsClueOpen] = useState(false);
  const [isHudVisible, setIsHudVisible] = useState(true);
  const progressPercentage = ((currentCaseIndex) / totalCases) * 100;
  const isCorrect = selectedAiChoice === activeCase.aiImage;

  return (
    <div id="arena-page" className="h-screen w-screen text-[#38455B] flex items-center justify-center overflow-hidden relative select-none font-sans">
      <img
        id="arena-background"
        src={bgGameplay}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      <div className="relative w-full h-full z-10 flex flex-col">
        
        <div id="arena-progress" className="absolute top-0 left-0 w-full h-1 bg-white/40 z-30">
          <div
            className="h-full bg-gradient-to-r from-[#FA6E00] to-[#FA7500] transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        <div id="arena-logo" className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-5 md:left-5 z-30 shrink-0">
          <img
            src={logoPusbuk}
            alt="Logo Pusbuk"
            className="h-8 sm:h-11 md:h-14 lg:h-16 xl:h-20 w-auto object-contain drop-shadow-[0_6px_12px_rgba(56,69,91,0.45)]"
          />
        </div>

        <div
          id="arena-case-tag"
          className={`absolute top-4 md:top-7 lg:top-8 left-1/2 -translate-x-1/2 z-30 ${
            isHudVisible ? 'block' : 'hidden'
          } lg:block`}
        >
          <div className="relative shrink-0 w-[min(28vw,9rem)] sm:w-[min(24vw,11rem)] md:w-[min(28vw,13rem)] xl:w-[min(34vw,18rem)] ">
            <img
              src={tagImg}
              alt=""
              className="w-full h-auto object-contain drop-shadow-[0_6px_14px_rgba(56,69,91,0.4)]"
            />
            <span className="absolute inset-0 flex items-center justify-center font-display text-white text-[9px] mt-1 sm:text-sm md:text-base xl:text-3xl tracking-wide uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
              Kasus {currentCaseIndex + 1}
            </span>
          </div>
        </div>

        <div id="arena-images" className="flex-1 flex items-center justify-center px-3 py-2 sm:p-4 md:p-6 min-h-0 relative select-none">
          <div className="flex justify-center items-center gap-2 sm:gap-4 w-full min-h-0">
            <MagnifiedImage
              id="magnified-image-a"
              src={activeCase.imageA}
              alt="Gambar Bukti A"
              label="A"
              isSelected={selectedAiChoice === 'A'}
              onSelect={() => onSelectChoice('A')}
              disabled={showFeedback}
            />

            <MagnifiedImage
              id="magnified-image-b"
              src={activeCase.imageB}
              alt="Gambar Bukti B"
              label="B"
              isSelected={selectedAiChoice === 'B'}
              onSelect={() => onSelectChoice('B')}
              disabled={showFeedback}
            />
          </div>
        </div>

        <div
          id="arena-control-bar-wrap"
          className={`absolute bottom-[26px] left-1/2 -translate-x-1/2 z-20 w-[95%] sm:w-[90%] max-w-lg ${
            isHudVisible ? '' : 'min-h-6'
          }`}
        >
          <div
            id="arena-control-bar"
            className={`${isHudVisible ? 'flex' : 'hidden'} lg:flex card-ui rounded-full items-center justify-between gap-3 px-4 py-2.5`}
          >
            <button
              id="arena-clue-button"
              type="button"
              onClick={() => setIsClueOpen(true)}
              className="shrink-0 flex items-center justify-center text-[#FA6E00] transition-all cursor-pointer hover:scale-110 active:scale-95 bg-transparent border-0 p-1"
              title="Petunjuk Penyelidikan"
            >
              <Search className="w-8 h-8 sm:w-9 sm:h-9 stroke-[2.75]" />
            </button>
            
            <div id="arena-question" className="text-center sm:text-left flex-1 px-2 min-w-0">
              <p className="text-[10px] sm:text-xs font-display text-[#FA6E00] uppercase tracking-wider truncate">
                Manakah GAMBAR KA?
              </p>
              <p className="text-[8px] sm:text-[9px] card-muted font-mono mt-0.5 truncate">
                {activeCase.title}
              </p>
            </div>

            <button
              id="arena-submit-button"
              type="button"
              disabled={selectedAiChoice === null || showFeedback}
              onClick={onSubmit}
              aria-label="Kirim Analisis"
              className="relative shrink-0 w-[min(38vw,11rem)] sm:w-[12rem] bg-transparent border-0 p-0 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95 disabled:opacity-45 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <img
                src={tagImg}
                alt=""
                className="w-full h-auto object-contain drop-shadow-[0_6px_12px_rgba(56,69,91,0.35)]"
              />
              <span className="absolute inset-0 flex items-center justify-center font-display text-white text-[10px] sm:text-xs tracking-wide uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
                Kirim Analisis
              </span>
            </button>
          </div>

          <button
            id="arena-hud-toggle"
            type="button"
            onClick={() => setIsHudVisible((visible) => !visible)}
            aria-label={isHudVisible ? 'Sembunyikan HUD' : 'Tampilkan HUD'}
            className="lg:hidden absolute left-1/2 -translate-x-1/2 top-full -translate-y-1/2 z-30 w-6 h-6 rounded-full card-ui flex items-center justify-center text-[#FA6E00] cursor-pointer active:scale-95"
          >
            {isHudVisible ? (
              <ChevronDown className="w-3.5 h-3.5 stroke-[2.75]" />
            ) : (
              <ChevronUp className="w-3.5 h-3.5 stroke-[2.75]" />
            )}
          </button>
        </div>

        {isClueOpen && (
          <div id="arena-clue-modal" className="absolute inset-0 card-overlay z-40 flex items-center justify-center p-4 animate-fadeIn">
            <div id="arena-clue-card" className="w-full max-w-md card-ui rounded-2xl p-4 sm:p-5 relative font-sans max-h-[90vh] overflow-y-auto flex flex-col">
              <button
                type="button"
                onClick={() => setIsClueOpen(false)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#FA6E00] hover:text-[#FA7500] transition-colors cursor-pointer z-10"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="flex items-center gap-2 border-b card-divider pb-1.5 sm:pb-2 mb-3 sm:mb-4 font-mono shrink-0">
                <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FA6E00]" />
                <h4 className="text-[10px] sm:text-xs font-bold card-title uppercase tracking-wider">
                  Petunjuk Penyelidikan
                </h4>
              </div>

              <div className="mb-3 sm:mb-4 overflow-y-auto pr-1">
                <div className="mb-3 shrink-0">
                  <span className="text-[8px] sm:text-[9px] font-mono font-bold text-[#FA6E00] uppercase tracking-widest bg-[#FA6E00]/10 px-2 py-0.5 rounded border-2 border-[#FA6E00]">
                    {activeCase.category}
                  </span>
                  <p className="text-[11px] sm:text-xs card-text mt-2 sm:mt-3 leading-relaxed text-justify">
                    {activeCase.description}
                  </p>
                </div>

                <div className="card-inset rounded-xl p-2.5 sm:p-3.5">
                  <span className="text-[8px] sm:text-[9px] font-mono font-bold text-[#FA6E00] uppercase tracking-wider block mb-1.5 sm:mb-2 border-b card-divider pb-1">
                    Petunjuk Detail:
                  </span>
                  <ul className="flex flex-col gap-2 sm:gap-2.5">
                    {activeCase.clues.map((clue, idx) => (
                      <li key={clue} className="flex gap-1.5 sm:gap-2 text-[11px] sm:text-xs card-text leading-relaxed">
                        <span className="text-[#FA6E00] select-none font-mono">0{idx + 1}.</span>
                        <span>{clue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsClueOpen(false)}
                className="btn-card w-full py-2 rounded-lg text-[10px] sm:text-xs font-mono text-center shrink-0 cursor-pointer active:scale-95"
              >
                Kembali ke Arena
              </button>
            </div>
          </div>
        )}

        {showFeedback && (
          <div id="arena-feedback-modal" className="absolute inset-0 card-overlay z-45 flex items-center justify-center p-4 animate-fadeIn">
            <div id="arena-feedback-card" className="w-full max-w-md card-ui rounded-2xl p-4 sm:p-5 relative text-center max-h-[90vh] overflow-hidden flex flex-col">
              <div className="overflow-y-auto min-h-0 flex-1">
                {isCorrect ? (
                  <div className="mx-auto mt-2 md:mt-3 shrink-0 text-4xl sm:text-5xl leading-none animate-bounce">
                    🏆
                  </div>
                ) : (
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shrink-0 border-2 border-[#FA6E00] bg-[#38455B]/10">
                    <XCircle className="w-4 h-4 sm:w-6 sm:h-6 text-[#38455B]" />
                  </div>
                )}

                <h3 className={`text-xs sm:text-sm font-display uppercase tracking-widest mb-0.5 sm:mb-1 shrink-0 ${
                  isCorrect ? 'text-[#FA6E00]' : 'text-[#38455B]'
                }`}>
                  {isCorrect ? 'ANALISIS BENAR!' : 'ANALISIS KELIRU!'}
                </h3>
                <p className="text-[8px] sm:text-[9px] font-mono card-muted uppercase tracking-wider mb-2.5 sm:mb-4 shrink-0">
                  Kasus ke-{currentCaseIndex + 1}
                </p>

                <div className="card-inset rounded-xl p-3 sm:p-4 text-left">
                  <p className="font-mono text-[10px] sm:text-xs card-text mb-1.5 sm:mb-2 border-b card-divider pb-1">
                    Jawaban: <span className="text-[#FA6E00] font-bold">Gambar {activeCase.aiImage}</span> adalah KA,{' '}
                    <span className="font-bold">Gambar {activeCase.realImage}</span> adalah Asli.
                  </p>
                  <p className="text-[11px] sm:text-xs card-text leading-relaxed font-sans text-justify">
                    {activeCase.explanation}
                  </p>
                </div>
              </div>

              <button
                id="arena-advance-button"
                type="button"
                onClick={onAdvance}
                className="btn-card w-full py-2.5 sm:py-3 rounded-xl text-[10px] sm:text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.02] active:scale-98 shrink-0 mt-3 sm:mt-5"
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
