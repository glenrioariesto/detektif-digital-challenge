import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioToggleProps {
  isMuted: boolean;
  onToggle: () => void;
  className?: string;
  id?: string;
  variant?: 'default' | 'footer';
}

export function AudioToggle({
  isMuted,
  onToggle,
  className = '',
  id = 'audio-toggle-button',
  variant = 'default',
}: AudioToggleProps) {
  if (variant === 'footer') {
    return (
      <button
        id={id}
        type="button"
        onClick={onToggle}
        aria-label={isMuted ? 'Nyalakan Musik' : 'Matikan Musik'}
        title={isMuted ? 'Nyalakan Musik (Unmute)' : 'Matikan Musik (Mute)'}
        className={`shrink-0 w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full border-2 border-[#FA6E00] bg-white text-[#FA6E00] hover:bg-[#FA6E00] hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-none ${className}`}
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 stroke-[2.5]" />
        ) : (
          <Volume2 className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 stroke-[2.5]" />
        )}
      </button>
    );
  }

  return (
    <button
      id={id}
      type="button"
      onClick={onToggle}
      aria-label={isMuted ? 'Nyalakan Musik' : 'Matikan Musik'}
      title={isMuted ? 'Nyalakan Musik (Unmute)' : 'Matikan Musik (Mute)'}
      className={`relative group rounded-full card-ui flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FA6E00] focus-visible:ring-offset-2 w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 lg:w-14 lg:h-14 drop-shadow-[0_6px_12px_rgba(56,69,91,0.45)] ${className}`}
    >
      {isMuted ? (
        <div className="relative flex items-center justify-center text-[#38455B] group-hover:text-[#FA6E00] transition-colors">
          <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 stroke-[2.5]" />
        </div>
      ) : (
        <div className="relative flex items-center justify-center text-[#FA6E00]">
          {/* Subtle ambient soundwave animation ring */}
          <span className="absolute -inset-1 rounded-full bg-[#FA6E00]/15 animate-ping opacity-75 pointer-events-none" />
          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 stroke-[2.5]" />
        </div>
      )}
    </button>
  );
}
