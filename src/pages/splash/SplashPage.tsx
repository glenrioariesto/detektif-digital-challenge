import React from 'react';
import { Eye, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';

interface SplashPageProps {
  onStart: () => void;
}

export function SplashPage({ onStart }: SplashPageProps) {
  return (
    <div className="min-h-screen w-screen bg-[#020617] bg-grid-cyber relative flex flex-col items-center justify-center p-6 text-slate-100 scanlines">
      {/* Decorative Neon Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Main Container */}
      <div className="z-10 max-w-2xl w-full flex flex-col items-center text-center">
        {/* Top Mini Tag */}
        <div className="flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-700 text-cyan-400 rounded-full text-xs font-mono mb-6 uppercase tracking-widest glow-cyan">
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Simulasi Game 3 - 101</span>
        </div>

        {/* Big Detective Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-display mb-2 select-none">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-500">
            DETEKTIF DIGITAL
          </span>
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-lg md:text-xl font-mono text-slate-400 mb-8 uppercase tracking-wide">
          Foto Manusia atau Hasil KA?
        </h2>

        {/* Dossier Card */}
        <div className="w-full bg-slate-900/60 border border-slate-800 backdrop-blur-md rounded-2xl p-6 md:p-8 text-left mb-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/10 to-transparent pointer-events-none"></div>
          
          <div className="flex items-center gap-3 border-b border-slate-800 pb-4 mb-4">
            <ShieldAlert className="w-6 h-6 text-cyan-400" />
            <h3 className="font-mono text-sm font-bold text-white uppercase tracking-wider">
              BERKAS MISI: #DET-101
            </h3>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            Perkembangan Kecerdasan Artifisial (KA) saat ini telah mampu merekayasa citra wajah dan lanskap yang hampir tidak bisa dibedakan dengan jepretan kamera asli. Banyak hoaks dan manipulasi visual beredar di dunia maya.
          </p>
          <p className="text-slate-300 text-sm leading-relaxed mb-6">
            Tugas Anda sebagai <strong>Detektif Digital</strong> adalah menyelidiki 10 pasang bukti foto. Pada setiap kasus, Anda harus mengidentifikasi mana gambar yang merupakan <strong>FOTO ASLI</strong> dan mana yang merupakan <strong>HASIL REKAYASA KA</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex gap-3 bg-slate-950/40 p-3 rounded-lg border border-slate-800">
              <Eye className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <h4 className="text-xs font-bold font-mono text-white mb-1 uppercase">Kaca Pembesar Interaktif</h4>
                <p className="text-xs text-slate-400">Arahkan kursor ke gambar untuk memperbesar piksel dan mencari keganjilan visual.</p>
              </div>
            </div>
            <div className="flex gap-3 bg-slate-950/40 p-3 rounded-lg border border-slate-800">
              <HelpCircle className="w-5 h-5 text-indigo-400 shrink-0" />
              <div>
                <h4 className="text-xs font-bold font-mono text-white mb-1 uppercase">Umpan Balik Edukatif</h4>
                <p className="text-xs text-slate-400">Pahami anomali di balik kegagalan anatomi AI (mata, jari tangan, tulisan, refleksi).</p>
              </div>
            </div>
          </div>
        </div>

        {/* Start Button */}
        <button
          type="button"
          onClick={onStart}
          className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.03] active:scale-[0.98]"
        >
          {/* Inner Glow Border */}
          <span className="absolute inset-px bg-[#020617] rounded-[10px] group-hover:bg-transparent transition-colors duration-300"></span>
          
          {/* Label */}
          <span className="relative z-10 flex items-center gap-2 group-hover:text-white text-cyan-400 font-mono transition-colors">
            Mulai Penyelidikan
            <span className="transition-transform group-hover:translate-x-1 font-sans">→</span>
          </span>
        </button>
      </div>
    </div>
  );
}
