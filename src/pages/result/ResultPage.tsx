import React from 'react';
import { Award, RotateCcw, ShieldCheck, Check, X, BookOpen } from 'lucide-react';
import { UserAnswer, Case } from '../../types';
import { CASES_DATA } from '../../data/questions';

interface ResultPageProps {
  score: number;
  answers: UserAnswer[];
  onRestart: () => void;
  getRank: (score: number) => { title: string; desc: string; color: string };
}

export function ResultPage({ score, answers, onRestart, getRank }: ResultPageProps) {
  const rank = getRank(score);
  const accuracy = Math.round((score / CASES_DATA.length) * 100);

  return (
    <div className="min-h-screen w-screen bg-[#020617] bg-grid-cyber relative flex flex-col items-center justify-center p-6 text-slate-100 scanlines overflow-y-auto">
      {/* Glow ambient background elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="z-10 max-w-4xl w-full flex flex-col items-center py-8">
        {/* Victory/Shield Icon with custom animation */}
        <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center mb-4 glow-cyan">
          <Award className="w-8 h-8 text-cyan-400" />
        </div>

        {/* Headings */}
        <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-1 text-center">
          Laporan Hasil Penyelidikan
        </h2>
        <p className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-6">
          Berkas Misi #DET-101 Selesai Evaluasi
        </p>

        {/* Score & Rank Dashboard Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full mb-8">
          {/* Circular Score Circle */}
          <div className="md:col-span-4 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center backdrop-blur-md">
            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-4">
              Nilai Akurasi
            </span>
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Outer circular gradient border */}
              <div className="absolute inset-0 rounded-full border-4 border-slate-800"></div>
              <div 
                className="absolute inset-0 rounded-full border-4 border-cyan-400"
                style={{
                  clipPath: `polygon(50% 50%, -50% -50%, ${accuracy >= 25 ? '150% -50%' : '50% -50%'}, ${accuracy >= 50 ? '150% 150%' : '50% -50%'}, ${accuracy >= 75 ? '-50% 150%' : '50% -50%'}, ${accuracy >= 100 ? '-50% -50%' : '50% -50%'})`,
                  transform: 'rotate(45deg)'
                }}
              ></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black font-mono text-white">{accuracy}%</span>
                <span className="text-[9px] font-mono text-cyan-400 uppercase">{score} / {CASES_DATA.length} Benar</span>
              </div>
            </div>
          </div>

          {/* Rank description badge */}
          <div className="md:col-span-8 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-center backdrop-blur-md relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-xl pointer-events-none"></div>
            
            <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-2">
              Pangkat Detektif
            </span>
            
            <div className={`inline-flex self-start border px-3 py-1.5 rounded-lg text-xs font-mono font-bold mb-3 ${rank.color}`}>
              {rank.title}
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-lg mb-4">
              {rank.desc}
            </p>
            
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                <span>Benar: {score}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                <span>Salah: {CASES_DATA.length - score}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Case-by-case details log table */}
        <div className="w-full bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-md mb-8">
          <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-4">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Lembar Detail Pemeriksaan Kasus
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs">
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
                {CASES_DATA.map((c, index) => {
                  const ans = answers.find(a => a.caseId === c.id);
                  const isUserCorrect = ans?.isCorrect ?? false;
                  return (
                    <tr key={c.id} className="hover:bg-slate-950/20">
                      <td className="py-3 text-center text-slate-400">#0{c.id}</td>
                      <td className="py-3 font-sans">
                        <div className="font-bold text-slate-200">{c.title}</div>
                        <div className="text-[10px] text-slate-500">{c.category}</div>
                      </td>
                      <td className="py-3 text-center">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          ans?.selectedReal === 'A' ? 'bg-cyan-950/40 text-cyan-400 border border-cyan-900/30' : 'bg-indigo-950/40 text-indigo-400 border border-indigo-900/30'
                        }`}>
                          Gambar {ans?.selectedReal ?? '-'}
                        </span>
                      </td>
                      <td className="py-3 text-center">
                        {isUserCorrect ? (
                          <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-950/30 border border-emerald-900/40 px-2 py-0.5 rounded text-[10px] font-bold">
                            <Check className="w-3 h-3" /> Benar
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-rose-400 bg-rose-950/30 border border-rose-900/40 px-2 py-0.5 rounded text-[10px] font-bold">
                            <X className="w-3 h-3" /> Salah
                          </span>
                        )}
                      </td>
                      <td className="py-3 text-center text-slate-300 font-bold">
                        Gambar {c.realImage} (Asli)
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Button */}
        <button
          type="button"
          onClick={onRestart}
          className="group relative px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          {/* Inner border */}
          <span className="absolute inset-px bg-[#020617] rounded-[10px] group-hover:bg-transparent transition-colors duration-300"></span>
          
          {/* Button label */}
          <span className="relative z-10 flex items-center gap-2 group-hover:text-white text-cyan-400 font-mono transition-colors">
            <RotateCcw className="w-4 h-4" />
            Mulai Ulang Penyelidikan
          </span>
        </button>
      </div>
    </div>
  );
}
