import { useState, useEffect } from 'react';
import {
  getAudioMuted,
  toggleAudioMute,
  setAudioMuted,
  subscribeAudioState,
  startBgm,
  stopBgm,
  setupAutoplayUnlock,
  playSynthesizerNote,
} from '../utils/audio';

export function useAudio() {
  const [isMuted, setIsMuted] = useState<boolean>(getAudioMuted);

  useEffect(() => {
    // Subscribe to global mute changes
    const unsubscribe = subscribeAudioState((muted) => {
      setIsMuted(muted);
    });

    // Setup browser user gesture autoplay unlock
    setupAutoplayUnlock();

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    isMuted,
    toggleMute: toggleAudioMute,
    setMuted: setAudioMuted,
    startBgm,
    stopBgm,
    playSFX: playSynthesizerNote,
  };
}
