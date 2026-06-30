import React from 'react';
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

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#020617] flex flex-col antialiased text-slate-100 relative">
      {/* Warning layout overlay for portrait phones */}
      <PortraitWarning />

      {/* Screen switcher */}
      {pageView === 'splash' && (
        <SplashPage onStart={startInvestigation} />
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
