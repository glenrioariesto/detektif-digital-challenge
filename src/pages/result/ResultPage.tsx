import React, { useState } from 'react';
import { RotateCcw, Check, X, BookOpen } from 'lucide-react';
import { UserAnswer } from '../../types';
import { CASES_DATA } from '../../data/questions';
import { AudioToggle } from '../../components/AudioToggle';
import logoPusbuk from '../../../assets/logo-pusbuk.webp';

interface ResultPageProps {
  score: number;
  answers: UserAnswer[];
  onRestart: () => void;
  isMuted: boolean;
  onToggleAudio: () => void;
}

export function ResultPage({ score, answers, onRestart, isMuted, onToggleAudio }: ResultPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const accuracy = Math.round((score / CASES_DATA.length) * 100);

  return (
    <div id="result-page" className="h-screen w-screen bg-[#1e2633] bg-grid-cyber relative flex flex-col items-center justify-center p-3 sm:p-4 scanlines overflow-hidden">
      {/* Top Left: Logo Pusbuk */}
      <div id="result-logo" className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-5 md:left-5 z-30 shrink-0">
        <img
          src={logoPusbuk}
          alt="Logo Pusbuk"
          className="h-8 sm:h-11 md:h-14 lg:h-16 xl:h-20 w-auto object-contain drop-shadow-[0_6px_12px_rgba(56,69,91,0.45)]"
        />
      </div>

      {/* Top Right: Mute / Unmute Button */}
      <div id="result-audio-toggle" className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 z-30 shrink-0">
        <AudioToggle
          id="result-audio-button"
          isMuted={isMuted}
          onToggle={onToggleAudio}
        />
      </div>

      <div className="absolute top-10 left-10 w-96 h-96 bg-[#FA6E00]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FA7500]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div id="result-content" className="z-10 max-w-md w-full flex flex-col items-center select-none animate-fadeIn">
        <div id="result-award-icon" className="text-3xl sm:text-5xl leading-none mb-1 sm:mb-2 animate-bounce">
          🏆
        </div>

        <h2 id="result-title" className="text-sm sm:text-xl md:text-2xl font-display text-[#FA6E00] mb-2 sm:mb-4 text-center shrink-0">
          Laporan Hasil Penyelidikan
        </h2>

        <div id="result-accuracy-card" className="card-ui rounded-2xl px-4 py-2 sm:px-6 sm:py-4 w-full mb-3 sm:mb-5 flex items-center justify-center gap-3 sm:gap-4">
          <div className="text-center">
            <span className="block text-[8px] sm:text-[9px] font-mono font-bold card-muted uppercase tracking-widest mb-0.5">
              Nilai Akurasi
            </span>
            <span className="block text-2xl sm:text-4xl font-black font-mono text-[#FA6E00] leading-none">
              {accuracy}%
            </span>
          </div>
          <div className="w-px h-8 sm:h-12 bg-[#FA6E00]/25"></div>
          <div className="text-center">
            <span className="block text-[8px] sm:text-[9px] font-mono font-bold card-muted uppercase tracking-widest mb-0.5">
              Benar
            </span>
            <span className="block text-lg sm:text-2xl font-black font-mono card-text leading-none">
              {score}/{CASES_DATA.length}
            </span>
          </div>
        </div>

        <div className="flex flex-row items-center gap-2 sm:gap-3 w-full shrink-0">
          <button
            id="result-detail-button"
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="btn-card flex-1 py-1.5 sm:py-3 rounded-xl text-[10px] sm:text-xs font-mono flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.02] active:scale-98"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Detail Kasus</span>
          </button>

          <button
            id="result-restart-button"
            type="button"
            onClick={onRestart}
            className="btn-card flex-1 py-1.5 sm:py-3 rounded-xl text-[10px] sm:text-xs font-mono flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.02] active:scale-98"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Mulai Ulang</span>
          </button>
        </div>

        {isModalOpen && (
          <div id="result-detail-modal" className="absolute inset-0 card-overlay z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div id="result-detail-card" className="w-full max-w-3xl card-ui rounded-2xl p-4 sm:p-5 relative max-h-[85vh] overflow-y-auto flex flex-col font-sans">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-[#FA6E00] hover:text-[#FA7500] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 border-b card-divider pb-2 mb-4 shrink-0">
                <BookOpen className="w-4 h-4 text-[#FA6E00]" />
                <h3 className="font-mono text-xs font-bold card-title uppercase tracking-wider">
                  Lembar Detail Pemeriksaan Kasus
                </h3>
              </div>

              <div className="overflow-x-auto overflow-y-auto max-h-[50vh] pr-1 mb-2">
                <table className="w-full text-left font-mono text-[11px] sm:text-xs">
                  <thead>
                    <tr className="border-b card-divider card-muted pb-2">
                      <th className="pb-2 font-bold uppercase tracking-wider w-12 text-center">Kasus</th>
                      <th className="pb-2 font-bold uppercase tracking-wider">Topik/Kategori</th>
                      <th className="pb-2 font-bold uppercase tracking-wider text-center w-24">Pilihan Anda</th>
                      <th className="pb-2 font-bold uppercase tracking-wider text-center w-24">Hasil</th>
                      <th className="pb-2 font-bold uppercase tracking-wider text-center w-20">Gambar AI</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#FA6E00]/15">
                    {CASES_DATA.map((c) => {
                      const ans = answers.find(a => a.caseId === c.id);
                      const isUserCorrect = ans?.isCorrect ?? false;
                      return (
                        <tr key={c.id} className="hover:bg-[#FA6E00]/5">
                          <td className="py-2.5 text-center card-muted">#0{c.id}</td>
                          <td className="py-2.5 font-sans">
                            <div className="font-bold card-text">{c.title}</div>
                            <div className="text-[9px] card-muted">{c.category}</div>
                          </td>
                          <td className="py-2.5 text-center">
                            <span className="px-2 py-0.5 rounded text-[9px] font-bold border-2 border-[#FA6E00] bg-[#FA6E00]/10 text-[#FA6E00]">
                              Gambar {ans?.selectedAi ?? '-'}
                            </span>
                          </td>
                          <td className="py-2.5 text-center">
                            {isUserCorrect ? (
                              <span className="inline-flex items-center gap-1 text-[#FA6E00] bg-[#FA6E00]/10 border-2 border-[#FA6E00] px-2 py-0.5 rounded text-[9px] font-bold">
                                <Check className="w-3 h-3" /> Benar
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 card-text bg-[#38455B]/10 border-2 border-[#FA6E00] px-2 py-0.5 rounded text-[9px] font-bold">
                                <X className="w-3 h-3" /> Salah
                              </span>
                            )}
                          </td>
                          <td className="py-2.5 text-center card-text font-bold">
                            Gambar {c.aiImage}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
