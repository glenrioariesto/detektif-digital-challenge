import React from 'react';
import { RotateCw, Smartphone } from 'lucide-react';

export function PortraitWarning() {
  return (
    <div id="portrait-warning" className="hidden portrait:flex fixed inset-0 z-[9999] bg-[#1e2633] text-white flex-col items-center justify-center text-center p-6 select-none">
      <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
        <div 
          className="w-12 h-20 border-2 border-[#FA6E00] rounded-xl bg-white flex items-center justify-center transition-transform shadow-ink" 
          style={{ 
            animation: 'portraitRotate 0.9s ease-in-out infinite' 
          }}
        >
          <Smartphone className="w-6 h-6 text-[#FA6E00]" />
        </div>
        
        <RotateCw className="w-8 h-8 text-[#FA7500] absolute -top-1 -right-1 animate-spin" />
      </div>

      <h2 className="text-sm font-display tracking-wider text-white mb-2 uppercase">
        Gunakan Orientasi Horizontal
      </h2>
      <p className="text-xs text-white/70 max-w-xs leading-relaxed font-sans">
        Silakan putar perangkat Anda ke **lanskap (horizontal)** untuk kenyamanan memeriksa bukti foto secara detail.
      </p>

      <style>{`
        @keyframes portraitRotate {
          0%, 20% { transform: rotate(0deg); }
          50%, 80% { transform: rotate(-90deg); }
          100% { transform: rotate(0deg); }
        }
      `}</style>
    </div>
  );
}
