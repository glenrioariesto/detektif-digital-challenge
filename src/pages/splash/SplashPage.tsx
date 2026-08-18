import React from 'react';
import logoPusbuk from '../../../assets/logo-pusbuk.webp';
import bgJudul from '../../../assets/background judul.webp';
import judulImg from '../../../assets/judul.webp';
import tombolMulai from '../../../assets/tombol mulai.webp';
import { InteractiveGridBg } from '../../components/InteractiveGridBg';
import { AudioToggle } from '../../components/AudioToggle';

interface SplashPageProps {
  onStart: () => void;
  isMuted: boolean;
  onToggleAudio: () => void;
}

export function SplashPage({ onStart, isMuted, onToggleAudio }: SplashPageProps) {
  return (
    <div id="splash-page" className="min-h-screen w-screen relative flex flex-col items-center justify-center overflow-hidden select-none animate-fadeIn cursor-none">
      <img
        id="splash-background"
        src={bgJudul}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />

      <InteractiveGridBg />

      {/* Top Left: Logo Pusbuk */}
      <div id="splash-logo" className="absolute top-3 left-3 sm:top-5 sm:left-5 z-40 shrink-0">
        <img
          src={logoPusbuk}
          alt="Logo Pusbuk"
          className="h-10 sm:h-14 md:h-16 lg:h-20 xl:h-24 2xl:h-28 w-auto object-contain drop-shadow-[0_8px_16px_rgba(56,69,91,0.55)]"
        />
      </div>

      {/* Top Right: Mute / Unmute Button */}
      <div id="splash-audio-toggle" className="absolute top-3 right-3 sm:top-5 sm:right-5 z-40 shrink-0">
        <AudioToggle
          id="splash-audio-button"
          isMuted={isMuted}
          onToggle={onToggleAudio}
        />
      </div>

      <div id="splash-content" className="relative z-40 w-full flex flex-col items-center px-4 pb-[16vh] md:pb-[18vh]  pt-[20vh] md:pt-[24vh]">
        <img
          id="splash-title"
          src={judulImg}
          alt="Detektif Digital"
          className="animate-float-title w-[min(80vw,52rem)] 2xl:w-[70rem] h-auto object-contain mb-20 md:mb-28 2xl:mb-60 drop-shadow-[0_10px_20px_rgba(56,69,91,0.55)]"
        />

        <button
          id="splash-start-button"
          type="button"
          onClick={onStart}
          aria-label="Mulai Penyelidikan"
          className="cursor-pointer bg-transparent border-0 p-0 transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FA6E00] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-full"
        >
          <img
            src={tombolMulai}
            alt=""
            className="animate-float-button w-[min(30vw,22rem)] 2xl:w-[30rem] h-auto object-contain drop-shadow-[0_10px_18px_rgba(56,69,91,0.55)]"
          />
        </button>
      </div>
    </div>
  );
}
