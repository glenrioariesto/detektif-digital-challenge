import { useState } from 'react';
import { GameState, UserAnswer } from '../types';
import { CASES_DATA } from '../data/questions';
import { playSynthesizerNote } from '../utils/audio';

const getRank = (score: number) => {
  if (score === 10) return { title: "Mata Elang (Detektif Legendaris)", desc: "Sempurna! Tidak ada satu pun manipulasi KA yang lolos dari pandangan Anda.", color: "text-emerald-400 border-emerald-400 bg-emerald-950/20" };
  if (score >= 7) return { title: "Detektif Senior", desc: "Sangat jeli melihat keganjilan anatomi, pencahayaan, dan detail buatan.", color: "text-cyan-400 border-cyan-400 bg-cyan-950/20" };
  if (score >= 4) return { title: "Detektif Magang", desc: "Cukup jeli, namun Anda masih sering terkecoh oleh KA tingkat lanjut.", color: "text-amber-400 border-amber-400 bg-amber-950/20" };
  return { title: "Mata Blur (Detektif Amatir)", desc: "Anda masih perlu banyak belajar membedakan distorsi piksel dari kamera nyata.", color: "text-rose-400 border-rose-400 bg-rose-950/20" };
};

export const useGameState = () => {
  const [state, setState] = useState<GameState>({
    pageView: 'splash',
    currentCaseIndex: 0,
    answers: [],
    score: 0,
    selectedRealChoice: null,
    showFeedback: false,
  });

  const activeCase = CASES_DATA[state.currentCaseIndex];

  const startInvestigation = () => {
    playSynthesizerNote('success');
    setState({
      pageView: 'game',
      currentCaseIndex: 0,
      answers: [],
      score: 0,
      selectedRealChoice: null,
      showFeedback: false,
    });
  };

  const selectRealChoice = (choice: 'A' | 'B') => {
    if (state.showFeedback) return; // Prevent changing after submission
    playSynthesizerNote('btn');
    setState(prev => ({
      ...prev,
      selectedRealChoice: choice
    }));
  };

  const submitGuess = () => {
    if (state.selectedRealChoice === null || state.showFeedback) return;

    const isCorrect = state.selectedRealChoice === activeCase.realImage;
    const newAnswer: UserAnswer = {
      caseId: activeCase.id,
      selectedReal: state.selectedRealChoice,
      isCorrect
    };

    if (isCorrect) {
      playSynthesizerNote('success');
    } else {
      playSynthesizerNote('fail');
    }

    setState(prev => ({
      ...prev,
      answers: [...prev.answers, newAnswer],
      score: isCorrect ? prev.score + 1 : prev.score,
      showFeedback: true
    }));
  };

  const advanceCase = () => {
    playSynthesizerNote('btn');
    const isLastCase = state.currentCaseIndex === CASES_DATA.length - 1;

    if (isLastCase) {
      playSynthesizerNote('unlock');
      setState(prev => ({
        ...prev,
        pageView: 'result',
        showFeedback: false,
        selectedRealChoice: null
      }));
    } else {
      setState(prev => ({
        ...prev,
        currentCaseIndex: prev.currentCaseIndex + 1,
        selectedRealChoice: null,
        showFeedback: false
      }));
    }
  };

  const restartGame = () => {
    playSynthesizerNote('success');
    setState({
      pageView: 'splash',
      currentCaseIndex: 0,
      answers: [],
      score: 0,
      selectedRealChoice: null,
      showFeedback: false,
    });
  };

  return {
    pageView: state.pageView,
    currentCaseIndex: state.currentCaseIndex,
    activeCase,
    totalCases: CASES_DATA.length,
    selectedRealChoice: state.selectedRealChoice,
    showFeedback: state.showFeedback,
    answers: state.answers,
    score: state.score,
    currentAnswerFeedback: state.answers.find(a => a.caseId === activeCase.id),
    startInvestigation,
    selectRealChoice,
    submitGuess,
    advanceCase,
    restartGame,
    getRank,
  };
};
