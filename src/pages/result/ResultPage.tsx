import React, { useState } from 'react';
import { Award, RotateCcw, Check, X, BookOpen } from 'lucide-react';
import { UserAnswer } from '../../types';
import { CASES_DATA } from '../../data/questions';

interface ResultPageProps {
  score: number;
  answers: UserAnswer[];
  onRestart: () => void;
  getRank: (score: number) => { title: string; desc: string; color: string };
}

export function ResultPage({ score, answers, onRestart, getRank }: ResultPageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const rank = getRank(score);
  const accuracy = Math.round((score / CASES_DATA.length) * 100);

  return (
    <div className="h-screen w-screen bg-[#020617] bg-grid-cyber relative flex flex-col items-center justify-center p-4 text-slate-100 scanlines overflow-hidden">
      {/* Glow ambient background elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="z-10 max-w-3xl w-full flex flex-col items-center select-none animate-fadeIn max-h-[95vh] overflow-y-auto pr-1">
        {/* Victory/Shield Icon */}
        <div className="w-12 h-12 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center mb-3 glow-cyan shrink-0">
          <Award className="w-6 h-6 text-cyan-400" />
        </div>

        {/* Headings */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-display mb-0.5 text-center shrink-0">
          Laporan Hasil Penyelidikan
        </h2>
        <p className="text-[9px] font-mono text-slate-400 uppercase tracking-widest mb-4 shrink-0">
          Berkas Misi #DET-101 Selesai Evaluasi
        </p>

        {/* Score & Rank Dashboard Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full mb-6 shrink-0">
          {/* Circular Score Circle */}
          <div className="md:col-span-4 bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center backdrop-blur-md">
            <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-3">
              Nilai Akurasi
            </span>
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
              <div 
                className="absolute inset-0 rounded-full border-4 border-cyan-400"
                style={{
                  clipPath: `polygon(50% 50%, -50% -50%, ${accuracy >= 25 ? '150% -50%' : '50% -50%'}, ${accuracy >= 50 ? '150% 150%' : '50% -50%'}, ${accuracy >= 75 ? '-50% 150%' : '50% -50%'}, ${accuracy >= 100 ? '-50% -50%' : '50% -50%'})`,
                  transform: 'rotate(45deg)'
                }}
              ></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black font-mono text-white">{accuracy}%</span>
                <span className="text-[8px] font-mono text-cyan-400 uppercase font-semibold">{score} / {CASES_DATA.length} Benar</span>
              </div>
            </div>
          </div>

          {/* Rank description badge */}
          <div className="md:col-span-8 bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex flex-col justify-center backdrop-blur-md relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-xl pointer-events-none"></div>
            
            <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
              Pangkat Detektif
            </span>
            
            <div className={`inline-flex self-start border px-2.5 py-1 rounded-lg text-[10px] sm:text-xs font-mono font-bold mb-2 ${rank.color}`}>
              {rank.title}
            </div>

            <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed mb-3 font-medium">
              {rank.desc}
            </p>
            
            <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400 font-bold">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <span>Benar: {score}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                <span>Salah: {CASES_DATA.length - score}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md shrink-0">
          {/* Toggle Modal Table Button */}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="w-full py-2.5 sm:py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-cyan-400 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-[1.02] active:scale-98"
          >
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <span>Lihat Detail Pemeriksaan</span>
          </button>

          {/* Restart Button */}
          <button
            type="button"
            onClick={onRestart}
            className="w-full py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-indigo-600 border border-cyan-500 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all cursor-pointer hover:scale-[1.02] active:scale-98"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Mulai Ulang Penyelidikan</span>
          </button>
        </div>

        {/* MODAL WINDOW FOR CASE LOG TABLE */}
        {isModalOpen && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fadeIn">
            <div className="w-full max-w-3xl bg-[#020617]/95 border-2 border-slate-800 rounded-2xl p-4 sm:p-5 shadow-2xl relative max-h-[85vh] overflow-y-auto flex flex-col font-sans">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-cyan-500 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 border-b border-slate-800 pb-2 mb-4 shrink-0">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  Lembar Detail Pemeriksaan Kasus
                </h3>
              </div>

              <div className="overflow-x-auto overflow-y-auto max-h-[50vh] pr-1 mb-2">
                <table className="w-full text-left font-mono text-[11px] sm:text-xs">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-500 pb-2">
                      <th className="pb-2 font-bold uppercase tracking-wider w-12 text-center">Kasus</th>
                      <th className="pb-2 font-bold uppercase tracking-wider">Topik/Kategori</th>
                      <th className="pb-2 font-bold uppercase tracking-wider text-center w-24">Pilihan Anda</th>
                      <th className="pb-2 font-bold uppercase tracking-wider text-center w-24">Hasil</th>
                      <th className="pb-2 font-bold uppercase tracking-wider text-center w-20">Kunci</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/40">
                    {CASES_DATA.map((c) => {
                      const ans = answers.find(a => a.caseId === c.id);
                      const isUserCorrect = ans?.isCorrect ?? false;
                      return (
                        <tr key={c.id} className="hover:bg-slate-950/20">
                          <td className="py-2.5 text-center text-slate-400">#0{c.id}</td>
                          <td className="py-2.5 font-sans">
                            <div className="font-bold text-slate-200">{c.title}</div>
                            <div className="text-[9px] text-slate-500">{c.category}</div>
                          </td>
                          <td className="py-2.5 text-center">
                            <span className={`px-2 py-0.5 rounded text-[9px] font-bold ${
                              ans?.selectedReal === 'A' ? 'bg-cyan-950/40 text-cyan-400 border border-cyan-900/30' : 'bg-indigo-950/40 text-indigo-400 border border-indigo-900/30'
                            }`}>
                              Gambar {ans?.selectedReal ?? '-'}
                            </span>
                          </td>
                          <td className="py-2.5 text-center">
                            {isUserCorrect ? (
                              <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-950/30 border border-emerald-900/40 px-2 py-0.5 rounded text-[9px] font-bold">
                                <Check className="w-3 h-3" /> Benar
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-rose-400 bg-rose-950/30 border border-rose-900/40 px-2 py-0.5 rounded text-[9px] font-bold">
                                <X className="w-3 h-3" /> Salah
                              </span>
                            )}
                          </td>
                          <td className="py-2.5 text-center text-slate-300 font-bold">
                            Gambar {c.realImage}
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
