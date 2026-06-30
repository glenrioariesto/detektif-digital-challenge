import React from 'react';
import { Play } from 'lucide-react';
import logoPusbuk from '../../../assets/logo-pusbuk.webp';

interface SplashPageProps {
  onStart: () => void;
}

export function SplashPage({ onStart }: SplashPageProps) {
  return (
    <div className="min-h-screen w-screen bg-[#070514] bg-grid-cyber relative flex flex-col items-center justify-center p-4 md:p-6 text-slate-100 scanlines select-none overflow-hidden animate-fadeIn">
      {/* Decorative Cyber Neon Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Container */}
      <div className="z-10 max-w-xl w-full flex flex-col items-center text-center p-4">
        {/* Pusbuk Logo Centered */}
        <div className="flex items-center justify-center bg-slate-950/80 border border-purple-955 px-3 py-1.5 rounded-2xl shadow-xl mb-6 shrink-0">
          <img 
            src={logoPusbuk} 
            alt="Logo Pusbuk" 
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>

        {/* Title (h1) */}
        <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight font-display mb-3 select-none uppercase">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">
            DETEKTIF DIGITAL
          </span>
        </h1>
        
        {/* Subtitle (h2) */}
        <h2 className="text-xs md:text-sm font-mono text-fuchsia-300/80 mb-8 uppercase tracking-widest font-black">
          Foto Manusia atau Hasil KA?
        </h2>

        {/* Start Button */}
        <button
          type="button"
          onClick={onStart}
          className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 rounded-xl font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-lg hover:shadow-purple-500/20 hover:scale-[1.03] active:scale-[0.98]"
        >
          {/* Inner Glow Border */}
          <span className="absolute inset-px bg-[#070514] rounded-[10px] group-hover:bg-transparent transition-colors duration-300"></span>
          
          {/* Label */}
          <span className="relative z-10 flex items-center gap-2 group-hover:text-white text-fuchsia-400 font-mono transition-colors">
            <Play className="w-4 h-4 text-fuchsia-400 group-hover:text-white fill-none" />
            <span>Mulai Penyelidikan</span>
          </span>
        </button>
      </div>
    </div>
  );
}
