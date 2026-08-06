import React, { useState } from 'react';
import { useGameState } from './hooks/useGameState';
import { SplashPage } from './pages/splash/SplashPage';
import { ArenaPage } from './pages/arena/ArenaPage';
import { ResultPage } from './pages/result/ResultPage';
import { PortraitWarning } from './components/PortraitWarning';

export default function App() {
  const {
    pageView,
    currentCaseIndex,
    activeCase,
    totalCases,
    selectedRealChoice,
    showFeedback,
    answers,
    score,
    startInvestigation,
    selectRealChoice,
    submitGuess,
    advanceCase,
    restartGame,
    getRank
  } = useGameState();

  const [showFullscreenPrompt, setShowFullscreenPrompt] = useState(false);

  const handleStartGame = () => {
    const isFullscreenSupported = typeof document !== 'undefined' && !!document.documentElement.requestFullscreen;
    const isCurrentlyFullscreen = typeof document !== 'undefined' && !!document.fullscreenElement;
    if (isFullscreenSupported && !isCurrentlyFullscreen) {
      setShowFullscreenPrompt(true);
    } else {
      startInvestigation();
    }
  };

  const enterFullscreen = async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
    } catch (err) {
      console.warn("Fullscreen permission denied or not supported by browser", err);
    }
    setShowFullscreenPrompt(false);
    startInvestigation();
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#020617] flex flex-col antialiased text-slate-100 relative">
      {/* Warning layout overlay for portrait phones */}
      <PortraitWarning />

      {/* Mode Layar Penuh Modal */}
      {showFullscreenPrompt && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 select-none animate-fadeIn">
          <div className="relative max-w-sm w-full mx-auto bg-[#070514] border border-purple-500/30 shadow-2xl shadow-purple-950/50 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center">
            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute w-20 h-20 bg-purple-500/20 rounded-full animate-ping opacity-75" />
              <div className="w-16 h-16 bg-purple-950/50 border border-purple-500/40 rounded-2xl flex items-center justify-center text-3xl shadow-sm z-10">
                📺
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-black text-purple-200 tracking-tight mb-2 uppercase font-mono">
              Mode Layar Penuh
            </h3>
            
            <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed mb-6">
              Apakah Anda ingin masuk ke mode layar penuh?
            </p>

            <div className="flex items-center gap-3 w-full font-mono">
              <button
                type="button"
                onClick={enterFullscreen}
                className="flex-1 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-extrabold py-2.5 rounded-xl transition-all shadow-md shadow-purple-500/20 active:scale-95 cursor-pointer border-none"
              >
                Yes
              </button>
              
              <button
                type="button"
                onClick={() => {
                  setShowFullscreenPrompt(false);
                  startInvestigation();
                }}
                className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-300 font-extrabold py-2.5 rounded-xl transition-all active:scale-95 cursor-pointer"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Screen switcher */}
      {pageView === 'splash' && (
        <SplashPage onStart={handleStartGame} />
      )}

      {pageView === 'game' && (
        <ArenaPage
          currentCaseIndex={currentCaseIndex}
          activeCase={activeCase}
          totalCases={totalCases}
          selectedRealChoice={selectedRealChoice}
          showFeedback={showFeedback}
          score={score}
          onSelectChoice={selectRealChoice}
          onSubmit={submitGuess}
          onAdvance={advanceCase}
          onBack={restartGame}
        />
      )}

      {pageView === 'result' && (
        <ResultPage
          score={score}
          answers={answers}
          onRestart={restartGame}
          getRank={getRank}
        />
      )}
    </div>
  );
}
