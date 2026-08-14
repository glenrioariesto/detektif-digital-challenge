import { useState } from 'react';
import { GameState, UserAnswer } from '../types';
import { CASES_DATA } from '../data/questions';
import { playSynthesizerNote } from '../utils/audio';

const getRank = (score: number) => {
  if (score === 10) return { title: "Mata Elang (Detektif Legendaris)", desc: "Sempurna! Tidak ada satu pun manipulasi KA yang lolos dari pandangan Anda.", color: "text-[#FA6E00] border-[#FA6E00] bg-[#FA6E00]/10" };
  if (score >= 7) return { title: "Detektif Senior", desc: "Sangat jeli melihat keganjilan anatomi, pencahayaan, dan detail buatan.", color: "text-[#FA7500] border-[#FA6E00] bg-[#FA7500]/10" };
  if (score >= 4) return { title: "Detektif Magang", desc: "Cukup jeli, namun Anda masih sering terkecoh oleh KA tingkat lanjut.", color: "text-[#38455B] border-[#FA6E00] bg-[#38455B]/10" };
  return { title: "Mata Blur (Detektif Amatir)", desc: "Anda masih perlu banyak belajar membedakan distorsi piksel dari kamera nyata.", color: "text-[#38455B] border-[#FA6E00] bg-[#38455B]/5" };
};

export const useGameState = () => {
  const [state, setState] = useState<GameState>({
    pageView: 'splash',
    currentCaseIndex: 0,
    answers: [],
    score: 0,
    selectedAiChoice: null,
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
      selectedAiChoice: null,
      showFeedback: false,
    });
  };

  const selectAiChoice = (choice: 'A' | 'B') => {
    if (state.showFeedback) return; // Prevent changing after submission
    playSynthesizerNote('btn');
    setState(prev => ({
      ...prev,
      selectedAiChoice: choice
    }));
  };

  const submitGuess = () => {
    if (state.selectedAiChoice === null || state.showFeedback) return;

    const isCorrect = state.selectedAiChoice === activeCase.aiImage;
    const newAnswer: UserAnswer = {
      caseId: activeCase.id,
      selectedAi: state.selectedAiChoice,
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
        selectedAiChoice: null
      }));
    } else {
      setState(prev => ({
        ...prev,
        currentCaseIndex: prev.currentCaseIndex + 1,
        selectedAiChoice: null,
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
      selectedAiChoice: null,
      showFeedback: false,
    });
  };

  return {
    pageView: state.pageView,
    currentCaseIndex: state.currentCaseIndex,
    activeCase,
    totalCases: CASES_DATA.length,
    selectedAiChoice: state.selectedAiChoice,
    showFeedback: state.showFeedback,
    answers: state.answers,
    score: state.score,
    currentAnswerFeedback: state.answers.find(a => a.caseId === activeCase.id),
    startInvestigation,
    selectAiChoice,
    submitGuess,
    advanceCase,
    restartGame,
    getRank,
  };
};
