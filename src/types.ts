export interface Case {
  id: number;
  title: string;
  category: string;
  description: string;
  imageA: string;
  imageB: string;
  realImage: 'A' | 'B'; // Which image is the actual human photo
  aiImage: 'A' | 'B';   // Which image is AI generated
  locationOfArtifacts: string; // The area where AI artifacts are found (e.g. "Kerutan & Telinga", "Jari Tangan")
  clues: string[]; // Detective clues for looking under the magnifying glass
  explanation: string; // Detailed educational breakdown of the AI errors
}

export interface UserAnswer {
  caseId: number;
  selectedReal: 'A' | 'B';
  isCorrect: boolean;
}

export interface GameState {
  pageView: 'splash' | 'game' | 'result';
  currentCaseIndex: number;
  answers: UserAnswer[];
  score: number;
  selectedRealChoice: 'A' | 'B' | null;
  showFeedback: boolean;
}
