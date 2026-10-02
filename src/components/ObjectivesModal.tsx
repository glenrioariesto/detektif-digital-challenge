import React, { useState } from 'react';
import { Target, Fingerprint, ShieldCheck, ChevronLeft, ChevronRight, X, Sparkles } from 'lucide-react';
import { playSynthesizerNote } from '../utils/audio';

interface ObjectivesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStart?: () => void;
}

interface SlideItem {
  keyword: string;
  text: string;
}

interface Slide {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  items: SlideItem[];
}

const slides: Slide[] = [
  {
    icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-[#FA6E00]" />,
    title: 'Tujuan Pembelajaran',
    subtitle: 'Simulasi Forensik Detektif Digital',
    items: [
      {
        keyword: 'Literasi Kecerdasan Artifisial & Berpikir Kritis',
        text: 'Melatih ketajaman investigasi siswa dalam membedakan citra sintetis buatan Kecerdasan Artifisial (KA/AI) dengan fotografi nyata melalui analisis forensik visual dan pengamatan detail bukti secara kritis.',
      },
    ],
  },
  {
    icon: <Fingerprint className="w-5 h-5 sm:w-6 sm:h-6 text-[#FA6E00]" />,
    title: 'Setelah Misi Ini, Kamu Mampu:',
    subtitle: 'Pilar Berpikir Komputasional (Bagian 1)',
    items: [
      {
        keyword: 'Dekomposisi (Decomposition)',
        text: 'Membedah citra menjadi elemen-elemen kecil yang spesifik (anatomi tangan/kaki, tekstur rambut/bulu, pencahayaan, refleksi, bayangan, dan teks mikro).',
      },
      {
        keyword: 'Pengenalan Pola (Pattern Recognition)',
        text: 'Mengenali pola kesalahan umum generator AI (artefak tekstur acak, jari berlebih/kurang, teks gibberish tidak terbaca, dan distorsi simetri buatan).',
      },
    ],
  },
  {
    icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#FA6E00]" />,
    title: 'Setelah Misi Ini, Kamu Mampu:',
    subtitle: 'Pilar Berpikir Komputasional (Bagian 2)',
    items: [
      {
        keyword: 'Abstraksi (Abstraction)',
        text: 'Menyaring ilusi visual yang sekilas tampak meyakinkan pada pandangan pertama untuk fokus pada konsistensi hukum fisika nyata di dunia nyata.',
      },
      {
        keyword: 'Algoritma Verifikasi (Verification Algorithm)',
        text: 'Menerapkan prosedur investigasi bertahap (perbesaran optik, perbandingan dua bukti secara berdampingan, dan penarikan kesimpulan berbasis fakta empiris).',
      },
    ],
  },
];

export function ObjectivesModal({ isOpen, onClose, onStart }: ObjectivesModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const slide = slides[currentSlide];
  const total = slides.length;
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === total - 1;

  const handleNext = () => {
    playSynthesizerNote('btn');
    if (isLast) {
      if (onStart) onStart();
      onClose();
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isFirst) {
      playSynthesizerNote('btn');
      setCurrentSlide(prev => prev - 1);
    }
  };

  const handleClose = () => {
    playSynthesizerNote('btn');
    onClose();
  };

  return (
    <div
      id="objectives-modal-backdrop"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 bg-[#1e2633]/85 backdrop-blur-md animate-fadeIn select-none font-sans"
    >
      <div
        id="objectives-modal-card"
        className="relative max-w-lg w-full card-ui rounded-3xl p-5 sm:p-7 shadow-2xl flex flex-col border-2 border-[#FA6E00]/40 overflow-hidden"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-[#FA6E00] transition-colors cursor-pointer z-10 p-1"
          title="Tutup"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 pb-3 border-b card-divider">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FA6E00]/10 border-2 border-[#FA6E00] flex items-center justify-center shrink-0 shadow-sm">
            {slide.icon}
          </div>
          <div className="min-w-0 pr-6">
            <h3 className="text-sm sm:text-base md:text-lg font-display text-[#FA6E00] uppercase tracking-wider truncate">
              {slide.title}
            </h3>
            <p className="text-[10px] sm:text-xs font-mono card-muted tracking-wide truncate">
              {slide.subtitle}
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="py-4 sm:py-5 flex flex-col gap-3 min-h-[170px] sm:min-h-[190px] justify-center">
          {slide.items.map((item, idx) => (
            <div
              key={idx}
              className="card-inset rounded-2xl p-3 sm:p-4 border border-[#FA6E00]/20 bg-white/60 shadow-xs flex flex-col gap-1 text-left"
            >
              <div className="flex items-center gap-1.5 font-bold text-xs sm:text-sm text-[#FA6E00]">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span>{item.keyword}</span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#38455B] font-medium leading-relaxed text-justify">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="pt-3 border-t card-divider flex items-center justify-between gap-2">
          {/* Previous Button */}
          <button
            type="button"
            disabled={isFirst}
            onClick={handlePrev}
            className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center gap-1 border border-[#38455B]/20 text-[#38455B] transition-all cursor-pointer ${
              isFirst ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#38455B]/10 active:scale-95'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Sebelumnya</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  playSynthesizerNote('btn');
                  setCurrentSlide(i);
                }}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === currentSlide
                    ? 'w-6 h-2 bg-[#FA6E00] shadow-xs'
                    : 'w-2 h-2 bg-[#38455B]/25 hover:bg-[#38455B]/50'
                }`}
                title={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Next / Start Button */}
          <button
            type="button"
            onClick={handleNext}
            className="btn-card px-4 sm:px-5 py-2 rounded-xl text-xs font-bold font-sans flex items-center gap-1 transition-all active:scale-95 cursor-pointer shadow-md"
          >
            <span>{isLast ? 'Mulai Investigasi!' : 'Selanjutnya'}</span>
            {!isLast && <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}
