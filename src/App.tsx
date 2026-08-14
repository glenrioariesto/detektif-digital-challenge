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
    <div id="app" className="h-screen w-screen overflow-hidden bg-[#1e2633] flex flex-col antialiased text-white relative">
      <PortraitWarning />

      {showFullscreenPrompt && (
        <div id="fullscreen-modal" className="fixed inset-0 z-[9999] card-overlay flex items-center justify-center p-4 select-none animate-fadeIn">
          <div id="fullscreen-card" className="relative max-w-sm w-full mx-auto card-ui rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center">
            <div className="relative flex items-center justify-center mb-6">
              <div className="absolute w-20 h-20 bg-[#FA6E00]/20 rounded-full animate-ping opacity-75" />
              <div className="w-16 h-16 bg-white border-2 border-[#FA6E00] rounded-2xl flex items-center justify-center text-3xl shadow-ink z-10">
                📺
              </div>
            </div>

            <h3 className="text-lg sm:text-xl font-display font-normal card-title tracking-wide mb-2 uppercase">
              Mode Layar Penuh
            </h3>
            
            <p className="text-xs sm:text-sm card-text font-sans font-medium leading-relaxed mb-6">
              Apakah Anda ingin masuk ke mode layar penuh?
            </p>

            <div className="flex items-center gap-3 w-full font-sans">
              <button
                id="fullscreen-yes-button"
                type="button"
                onClick={enterFullscreen}
                className="btn-card flex-1 py-2.5 rounded-xl transition-all active:scale-95 cursor-pointer"
              >
                Yes
              </button>
              
              <button
                id="fullscreen-no-button"
                type="button"
                onClick={() => {
                  setShowFullscreenPrompt(false);
                  startInvestigation();
                }}
                className="btn-card flex-1 py-2.5 rounded-xl transition-all active:scale-95 cursor-pointer"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

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
          onSelectChoice={selectRealChoice}
          onSubmit={submitGuess}
          onAdvance={advanceCase}
        />
      )}

      {pageView === 'result' && (
        <ResultPage
          score={score}
          answers={answers}
          onRestart={restartGame}
        />
      )}
    </div>
  );
}
