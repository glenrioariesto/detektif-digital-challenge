import React from 'react';
import { Eye, ShieldAlert, Sparkles, HelpCircle, Play } from 'lucide-react';
import logoPusbuk from '../../../assets/logo-pusbuk.webp';
import logoTutWuri from '../../../assets/tut-wuri-handayani.png';

interface SplashPageProps {
  onStart: () => void;
}

export function SplashPage({ onStart }: SplashPageProps) {
  return (
    <div className="min-h-screen w-screen bg-[#020617] bg-grid-cyber relative flex flex-col items-center justify-center p-4 md:p-6 text-slate-100 scanlines select-none overflow-hidden">
      {/* Decorative Neon Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Logos on Top Left */}
      <div className="absolute top-4 left-4 z-50 flex items-center gap-2.5 md:gap-3.5 bg-slate-950/80 border border-slate-800/80 backdrop-blur-md px-3 py-2 rounded-2xl shadow-xl">
        <img 
          src={logoPusbuk} 
          alt="Logo Pusbuk" 
          className="h-8 md:h-11 w-auto object-contain"
        />
        <div className="w-[1px] h-6 bg-slate-800"></div>
        <img 
          src={logoTutWuri} 
          alt="Logo Tut Wuri" 
          className="h-8 md:h-11 w-auto object-contain"
        />
      </div>

      {/* Main Container */}
      <div className="z-10 max-w-2xl w-full flex flex-col items-center text-center mt-12 md:mt-0">
        {/* Top Mini Tag */}
        <div className="flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-700 text-cyan-400 rounded-full text-[10px] md:text-xs font-mono mb-6 uppercase tracking-widest glow-cyan">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Game Investigasi Komputasional</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight font-display mb-2 select-none uppercase">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500">
            DETEKTIF DIGITAL
          </span>
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-sm md:text-lg font-mono text-slate-400 mb-6 md:mb-8 uppercase tracking-widest font-bold">
          Foto Manusia atau Hasil KA?
        </h2>

        {/* Dossier Card */}
        <div className="w-full bg-slate-900/60 border border-slate-800 backdrop-blur-md rounded-2xl p-5 md:p-8 text-left mb-8 md:mb-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent pointer-events-none"></div>
          
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-4">
            <ShieldAlert className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
            <h3 className="font-mono text-xs md:text-sm font-bold text-white uppercase tracking-wider">
              BERKAS MISI: #DET-101
            </h3>
          </div>

          <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-4 font-sans font-medium">
            Perkembangan Kecerdasan Artifisial (KA) saat ini telah mampu merekayasa citra wajah dan lanskap yang hampir tidak bisa dibedakan dengan jepretan kamera asli. Banyak hoaks dan manipulasi visual beredar di dunia maya.
          </p>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 font-sans font-medium">
            Tugas Anda sebagai Detektif Digital adalah menyelidiki 10 pasang bukti foto. Pada setiap kasus, Anda harus mengidentifikasi mana gambar yang merupakan foto asli dan mana yang merupakan hasil rekayasa KA.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex gap-3 bg-slate-950/40 p-3 rounded-xl border border-slate-800/60">
              <Eye className="w-4.5 h-4.5 md:w-5 md:h-5 text-cyan-400 shrink-0" />
              <div>
                <h4 className="text-[10px] md:text-xs font-bold font-mono text-white mb-1 uppercase tracking-wider">Kaca Pembesar Interaktif</h4>
                <p className="text-[10px] md:text-xs text-slate-400 leading-normal font-medium">Arahkan kursor ke gambar untuk memperbesar piksel dan mencari keganjilan visual.</p>
              </div>
            </div>
            <div className="flex gap-3 bg-slate-950/40 p-3 rounded-xl border border-slate-800/60">
              <HelpCircle className="w-4.5 h-4.5 md:w-5 md:h-5 text-indigo-400 shrink-0" />
              <div>
                <h4 className="text-[10px] md:text-xs font-bold font-mono text-white mb-1 uppercase tracking-wider">Umpan Balik Edukatif</h4>
                <p className="text-[10px] md:text-xs text-slate-400 leading-normal font-medium">Pahami anomali di balik kegagalan anatomi AI (mata, jari tangan, tulisan, refleksi).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <button
          type="button"
          onClick={onStart}
          className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl font-bold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.03] active:scale-[0.98]"
        >
          {/* Inner Glow Border */}
          <span className="absolute inset-px bg-[#020617] rounded-[10px] group-hover:bg-transparent transition-colors duration-300"></span>
          
          {/* Label */}
          <span className="relative z-10 flex items-center gap-2 group-hover:text-white text-cyan-400 font-mono transition-colors">
            <Play className="w-4 h-4 text-cyan-400 group-hover:text-white fill-none" />
            <span>Mulai Penyelidikan</span>
          </span>
        </button>

        <p className="text-[10px] md:text-xs text-slate-500 font-mono mt-4">10 Kasus Penyelidikan Tersedia</p>
      </div>
    </div>
  );
}
