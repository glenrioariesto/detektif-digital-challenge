import bgmUrl from '../../assets/audio/bgm.mp3';

// Singleton BGM Audio Element
let bgmAudio: HTMLAudioElement | null = null;
let isMutedState = false;
let userInteractionListenerAttached = false;

// Initialize mute state from localStorage if available
if (typeof window !== 'undefined') {
  try {
    const stored = localStorage.getItem('detektif_audio_muted');
    isMutedState = stored === 'true';
  } catch (e) {
    isMutedState = false;
  }
}

type AudioListener = (isMuted: boolean) => void;
const listeners = new Set<AudioListener>();

const notifyListeners = () => {
  listeners.forEach((listener) => {
    try {
      listener(isMutedState);
    } catch (e) {
      // Ignore listener error
    }
  });
};

export const subscribeAudioState = (listener: AudioListener): (() => void) => {
  listeners.add(listener);
  listener(isMutedState);
  return () => {
    listeners.delete(listener);
  };
};

export const getAudioMuted = (): boolean => isMutedState;

const DEFAULT_BGM_VOLUME = 0.25;

const getBgmAudio = (): HTMLAudioElement | null => {
  if (typeof window === 'undefined') return null;
  if (!bgmAudio) {
    bgmAudio = new Audio(bgmUrl);
    bgmAudio.loop = true;
    bgmAudio.volume = DEFAULT_BGM_VOLUME;
    bgmAudio.preload = 'auto';
  } else {
    bgmAudio.volume = DEFAULT_BGM_VOLUME;
  }
  return bgmAudio;
};

// Set up one-time listener to start BGM as soon as user touches/clicks anywhere
export const setupAutoplayUnlock = () => {
  if (typeof window === 'undefined' || userInteractionListenerAttached) return;
  userInteractionListenerAttached = true;

  const handleFirstInteraction = () => {
    if (!isMutedState) {
      startBgm();
    }
    window.removeEventListener('pointerdown', handleFirstInteraction);
    window.removeEventListener('keydown', handleFirstInteraction);
    window.removeEventListener('touchstart', handleFirstInteraction);
  };

  window.addEventListener('pointerdown', handleFirstInteraction, { once: true });
  window.addEventListener('keydown', handleFirstInteraction, { once: true });
  window.addEventListener('touchstart', handleFirstInteraction, { once: true });
};

export const startBgm = () => {
  if (typeof window === 'undefined') return;
  if (isMutedState) return;

  const audio = getBgmAudio();
  if (!audio) return;

  const playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Autoplay blocked by browser policy; user gesture will start it via setupAutoplayUnlock
      setupAutoplayUnlock();
    });
  }
};

export const stopBgm = () => {
  if (bgmAudio) {
    bgmAudio.pause();
  }
};

export const toggleAudioMute = (): boolean => {
  setAudioMuted(!isMutedState);
  return isMutedState;
};

export const setAudioMuted = (muted: boolean) => {
  isMutedState = muted;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('detektif_audio_muted', String(muted));
    } catch (e) {}
  }

  if (muted) {
    stopBgm();
  } else {
    startBgm();
  }

  notifyListeners();
};

// Web Audio API Synthesizer for lightweight educational feedback
export const playSynthesizerNote = (type: 'success' | 'fail' | 'btn' | 'unlock') => {
  try {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'success') {
      // Sweet double ascending notes
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.12); // E5
      gain.gain.setValueAtTime(0.45, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    } else if (type === 'unlock') {
      // Majestic ascending perfect chord
      osc.type = 'sine';
      osc.frequency.setValueAtTime(392.00, ctx.currentTime); // G4
      osc.frequency.setValueAtTime(523.25, ctx.currentTime + 0.1); // C5
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.2); // E5
      osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.3); // G5
      gain.gain.setValueAtTime(0.5, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.6);
      osc.start();
      osc.stop(ctx.currentTime + 0.65);
    } else if (type === 'fail') {
      // Small descending buzz
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220.00, ctx.currentTime); // A3
      osc.frequency.exponentialRampToValueAtTime(130.81, ctx.currentTime + 0.25); // C3
      gain.gain.setValueAtTime(0.38, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.26);
      osc.start();
      osc.stop(ctx.currentTime + 0.3);
    } else if (type === 'btn') {
      // Short click
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      gain.gain.setValueAtTime(0.28, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + 0.08);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    }
  } catch (e) {
    // Audio synthesis fallback
  }
};
