import React, { useState, useEffect } from 'react';
import { XCircle, Lightbulb, HelpCircle, ArrowRight, X, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Case, UserAnswer } from '../../types';
import { CASES_DATA } from '../../data/questions';
import { MagnifiedImage } from '../../components/MagnifiedImage';
import { AudioToggle } from '../../components/AudioToggle';
import bgGameplay from '../../../assets/background gameplay.webp';
import tagImg from '../../../assets/tag.webp';
import logoPusbuk from '../../../assets/logo-jenama.webp?v2';

interface ArenaPageProps {
  currentCaseIndex: number;
  activeCase: Case;
  totalCases: number;
  selectedAiChoice: 'A' | 'B' | null;
  showFeedback: boolean;
  onSelectChoice: (choice: 'A' | 'B') => void;
  onSubmit: () => void;
  onAdvance: () => void;
  isMuted: boolean;
  onToggleAudio: () => void;
  answers: UserAnswer[];
  onJumpToCase: (caseIndex: number) => void;
  onOpenObjectives?: () => void;
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
  isMuted,
  onToggleAudio,
  answers,
  onJumpToCase,
  onOpenObjectives,
}: ArenaPageProps) {
  const [isClueOpen, setIsClueOpen] = useState(false);
  const [isHudVisible, setIsHudVisible] = useState(true);
  const [isFeedbackDismissed, setIsFeedbackDismissed] = useState(false);
  const progressPercentage = ((currentCaseIndex) / totalCases) * 100;
  const isCorrect = selectedAiChoice === activeCase.aiImage;

  // Reset feedback dismissal when active case changes
  useEffect(() => {
    setIsFeedbackDismissed(false);
  }, [currentCaseIndex]);

  // When new feedback is triggered, ensure it's visible
  useEffect(() => {
    if (showFeedback) {
      setIsFeedbackDismissed(false);
    }
  }, [showFeedback]);

  // Optional keyboard navigation with Left and Right arrow keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isClueOpen || (showFeedback && !isFeedbackDismissed)) return;
      if (e.key === 'ArrowLeft' && currentCaseIndex > 0) {
        onJumpToCase(currentCaseIndex - 1);
      } else if (e.key === 'ArrowRight' && currentCaseIndex < totalCases - 1) {
        onJumpToCase(currentCaseIndex + 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentCaseIndex, totalCases, isClueOpen, showFeedback, isFeedbackDismissed, onJumpToCase]);

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

        {/* Top Left: Logo Pusbuk */}
        <div id="arena-logo" className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-5 z-30 shrink-0">
          <img
            src={logoPusbuk}
            alt="Logo Pusbuk"
            className="h-5 sm:h-7 md:h-11 lg:h-16 2xl:h-24 w-auto object-contain drop-shadow-[0_6px_12px_rgba(56,69,91,0.45)]"
          />
        </div>

        {/* Right Side: Level Selector in Red Brand Area (Level 1 - 10) - Compact for mobile */}
        <div
          id="arena-level-selector"
          className="absolute right-1 sm:right-2.5 md:right-3.5 xl:right-5 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-0.5 sm:gap-1 md:gap-1.5 bg-gradient-to-b from-[#FA6E00] via-[#E85D00] to-[#C93B00] border sm:border-2 border-white/80 shadow-[0_8px_24px_rgba(0,0,0,0.45)] rounded-xl sm:rounded-2xl md:rounded-3xl p-0.5 sm:p-1 md:p-1.5 select-none"
        >
          {Array.from({ length: totalCases }, (_, i) => {
            const caseNum = i + 1;
            const isCurrent = i === currentCaseIndex;
            const answer = answers.find(a => a.caseId === caseNum);
            const isAnswered = !!answer;
            const isCorrect = answer?.isCorrect;

            return (
              <button
                key={caseNum}
                type="button"
                onClick={() => onJumpToCase(i)}
                className={`relative w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-[4px] sm:rounded-lg md:rounded-xl font-display text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-bold flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  isCurrent
                    ? 'bg-white text-[#FA6E00] ring-1.5 sm:ring-2 md:ring-3 ring-white scale-110 shadow-lg font-black z-10'
                    : isAnswered
                    ? isCorrect
                      ? 'bg-emerald-600 text-white hover:bg-emerald-500 hover:scale-105 border border-emerald-300 shadow-xs'
                      : 'bg-[#1e2633]/90 text-white/90 hover:bg-[#2a3344] hover:scale-105 border border-white/30 shadow-xs'
                    : 'bg-white/20 text-white hover:bg-white/40 hover:scale-105 border border-white/25 shadow-xs'
                }`}
                title={`Kasus ${caseNum}: ${CASES_DATA[i]?.title || ''}${
                  isAnswered ? (isCorrect ? ' (Terjawab Benar)' : ' (Terjawab Salah)') : ' (Klik untuk pindah level)'
                }`}
              >
                <span>{caseNum}</span>
                {/* Status Indicator Badge */}
                {isAnswered && (
                  <span
                    className={`absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full border border-white ${
                      isCorrect ? 'bg-emerald-400' : 'bg-rose-500'
                    }`}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div
          id="arena-case-tag"
          className={`absolute top-2 sm:top-3 md:top-5 lg:top-6 left-1/2 -translate-x-1/2 z-30 ${
            isHudVisible ? 'block' : 'hidden'
          } lg:block`}
        >
          <div className="relative shrink-0 w-[min(24vw,7.5rem)] sm:w-[min(24vw,9.5rem)] md:w-[min(26vw,12rem)] xl:w-[min(30vw,15rem)]">
            <img
              src={tagImg}
              alt=""
              className="w-full h-auto object-contain drop-shadow-[0_6px_14px_rgba(56,69,91,0.4)]"
            />
            <span className="absolute inset-0 flex items-center justify-center font-display text-white text-[9px] mt-0.5 sm:mt-1 sm:text-xs md:text-sm xl:text-2xl tracking-wide uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]">
              Kasus {currentCaseIndex + 1}
            </span>
          </div>
        </div>

        <div id="arena-images" className="flex-1 flex items-center justify-center px-1 sm:px-3 md:px-6 min-h-0 relative select-none pt-7 sm:pt-9 md:pt-11 pb-14 sm:pb-16 md:pb-20">
          <div className="flex justify-center items-center gap-1.5 sm:gap-3 md:gap-4 w-full min-h-0">
            {/* Tombol Sebelumnya di Samping Kiri Gambar */}
            <button
              id="arena-prev-button"
              type="button"
              disabled={currentCaseIndex === 0}
              onClick={() => onJumpToCase(currentCaseIndex - 1)}
              className="shrink-0 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full border sm:border-2 border-[#FA6E00] bg-white text-[#FA6E00] hover:bg-[#FA6E00] hover:text-white flex items-center justify-center transition-all cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#FA6E00] active:scale-95 shadow-md z-20"
              title="Kasus Sebelumnya"
              aria-label="Kasus Sebelumnya"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 stroke-[2.5]" />
            </button>

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

            {/* Tombol Berikutnya di Samping Kanan Gambar */}
            <button
              id="arena-next-button"
              type="button"
              disabled={currentCaseIndex === totalCases - 1}
              onClick={() => onJumpToCase(currentCaseIndex + 1)}
              className="shrink-0 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full border sm:border-2 border-[#FA6E00] bg-white text-[#FA6E00] hover:bg-[#FA6E00] hover:text-white flex items-center justify-center transition-all cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-[#FA6E00] active:scale-95 shadow-md z-20"
              title="Kasus Berikutnya"
              aria-label="Kasus Berikutnya"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 stroke-[2.5]" />
            </button>
          </div>
        </div>

        <div
          id="arena-control-bar-wrap"
          className={`absolute bottom-2 sm:bottom-3 md:bottom-5 lg:bottom-6 left-1/2 -translate-x-1/2 z-20 w-full max-w-lg lg:max-w-2xl px-2 sm:px-0 ${
            isHudVisible ? '' : 'min-h-6'
          }`}
        >
          <div
            id="arena-control-bar"
            className={`${isHudVisible ? 'flex' : 'hidden'} lg:flex card-ui rounded-2xl sm:rounded-full items-center justify-between gap-1.5 sm:gap-2.5 md:gap-3 px-2.5 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5`}
          >
            {/* Left Action Buttons: Clue (Lampu), Objectives (Tanda Tanya), & Mute Button (Samakan & Jangan Ada Shadow) */}
            <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 shrink-0">
              <button
                id="arena-clue-button"
                type="button"
                onClick={() => setIsClueOpen(true)}
                className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border-2 border-[#FA6E00] bg-white text-[#FA6E00] hover:bg-[#FA6E00] hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-none"
                title="Petunjuk Penyelidikan"
                aria-label="Petunjuk Penyelidikan"
              >
                <Lightbulb className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 stroke-[2.5]" />
              </button>

              {onOpenObjectives && (
                <button
                  id="arena-objectives-button"
                  type="button"
                  onClick={onOpenObjectives}
                  className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border-2 border-[#FA6E00] bg-white text-[#FA6E00] hover:bg-[#FA6E00] hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-none"
                  title="Tujuan Pembelajaran"
                  aria-label="Tujuan Pembelajaran"
                >
                  <HelpCircle className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 stroke-[2.5]" />
                </button>
              )}

              {/* Mute Button di samping icon tanda tanya */}
              <AudioToggle
                id="arena-audio-button"
                isMuted={isMuted}
                onToggle={onToggleAudio}
                variant="footer"
              />
            </div>
            
            {/* Center Area: Non-Truncated Question Text */}
            <div id="arena-question" className="text-center flex-1 px-2 sm:px-4 min-w-0">
              <p className="text-[10px] sm:text-xs md:text-sm font-display text-[#FA6E00] uppercase tracking-wider leading-tight">
                Manakah GAMBAR KA?
              </p>
              <p className="text-[9px] sm:text-[11px] md:text-xs card-muted font-mono mt-0.5 leading-tight">
                {activeCase.title}
              </p>
            </div>

            {/* Right: Submit Button / Action Button */}
            {showFeedback ? (
              <button
                id="arena-submit-button"
                type="button"
                onClick={() => {
                  if (isFeedbackDismissed) {
                    setIsFeedbackDismissed(false);
                  } else {
                    onAdvance();
                  }
                }}
                aria-label={isFeedbackDismissed ? "Lihat Hasil Analisis" : "Lanjut ke Kasus Berikutnya"}
                className="relative shrink-0 w-[78px] sm:w-[105px] md:w-[125px] lg:w-[145px] bg-transparent border-0 p-0 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                <img
                  src={tagImg}
                  alt=""
                  className="w-full h-auto object-contain drop-shadow-[0_6px_12px_rgba(56,69,91,0.35)]"
                />
                <span className="absolute inset-0 flex items-center justify-center font-display text-white text-[8px] sm:text-[10px] md:text-xs tracking-wide uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] whitespace-nowrap">
                  {isFeedbackDismissed ? 'Lihat Hasil' : 'Lanjut'}
                </span>
              </button>
            ) : (
              <button
                id="arena-submit-button"
                type="button"
                disabled={selectedAiChoice === null}
                onClick={onSubmit}
                aria-label="Kirim Analisis"
                className="relative shrink-0 w-[78px] sm:w-[105px] md:w-[125px] lg:w-[145px] bg-transparent border-0 p-0 cursor-pointer transition-transform duration-200 hover:scale-105 active:scale-95 disabled:opacity-45 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <img
                  src={tagImg}
                  alt=""
                  className="w-full h-auto object-contain drop-shadow-[0_6px_12px_rgba(56,69,91,0.35)]"
                />
                <span className="absolute inset-0 flex items-center justify-center font-display text-white text-[8px] sm:text-[10px] md:text-xs tracking-wide uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] whitespace-nowrap">
                  Kirim Analisis
                </span>
              </button>
            )}
          </div>

          <button
            id="arena-hud-toggle"
            type="button"
            onClick={() => setIsHudVisible((visible) => !visible)}
            aria-label={isHudVisible ? 'Sembunyikan HUD' : 'Tampilkan HUD'}
            className="lg:hidden absolute left-1/2 -translate-x-1/2 -top-3 z-30 w-6 h-6 rounded-full card-ui flex items-center justify-center text-[#FA6E00] cursor-pointer active:scale-95 shadow-md"
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

        {showFeedback && !isFeedbackDismissed && (
          <div id="arena-feedback-modal" className="absolute inset-0 card-overlay z-45 flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
            <div id="arena-feedback-card" className="w-full max-w-md card-ui rounded-2xl p-4 sm:p-5 relative text-center max-h-[92vh] overflow-hidden flex flex-col">
              <button
                type="button"
                onClick={() => setIsFeedbackDismissed(true)}
                className="absolute top-3 right-3 text-[#FA6E00] hover:text-[#FA7500] transition-colors cursor-pointer z-10 p-1"
                title="Tutup & Lihat Gambar Bukti"
                aria-label="Tutup & Lihat Gambar Bukti"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="overflow-y-auto min-h-0 flex-1 pr-1">
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
