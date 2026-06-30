import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn } from 'lucide-react';

interface MagnifiedImageProps {
  src: string;
  alt: string;
  label: 'A' | 'B';
  isSelected: boolean;
  onSelect: () => void;
  disabled: boolean;
}

export function MagnifiedImage({
  src,
  alt,
  label,
  isSelected,
  onSelect,
  disabled
}: MagnifiedImageProps) {
  const [lensState, setLensState] = useState({
    show: false,
    x: 0,
    y: 0,
    bgPos: '0px 0px',
    bgSize: '0px 0px',
  });
  const containerRef = useRef<HTMLButtonElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    if (!containerRef.current || !imgRef.current || !imgLoaded) return;

    const buttonRect = containerRef.current.getBoundingClientRect();
    const imageRect = imgRef.current.getBoundingClientRect();
    
    let clientX = 0;
    let clientY = 0;

    if ('touches' in e) {
      if (e.touches.length === 0) return;
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    // Position of lens relative to container button (absolute parent)
    const xButton = clientX - buttonRect.left;
    const yButton = clientY - buttonRect.top;

    // Position relative to the actual visible image pixels
    const xImage = clientX - imageRect.left;
    const yImage = clientY - imageRect.top;

    // Only show lens if cursor is hovering over the actual visible image contents
    if (
      xImage < 0 ||
      yImage < 0 ||
      xImage > imageRect.width ||
      yImage > imageRect.height
    ) {
      setLensState(prev => ({ ...prev, show: false }));
      return;
    }

    const zoom = 2.5;
    const lensRadius = 70; // 140px / 2

    // Background size is scaled relative to the actual visible image size
    const bgWidth = imageRect.width * zoom;
    const bgHeight = imageRect.height * zoom;

    // Background position shifts the zoomed image so point under cursor is centered
    const bgX = -(xImage * zoom - lensRadius);
    const bgY = -(yImage * zoom - lensRadius);

    setLensState({
      show: true,
      x: xButton,
      y: yButton,
      bgSize: `${bgWidth}px ${bgHeight}px`,
      bgPos: `${bgX}px ${bgY}px`,
    });
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      setLensState(prev => ({ ...prev, show: true }));
    }
  };

  const handleMouseLeave = () => {
    setLensState(prev => ({ ...prev, show: false }));
  };

  return (
    <button
      ref={containerRef}
      type="button"
      className={`relative flex-1 group overflow-hidden rounded-2xl border-2 transition-all duration-300 cursor-crosshair max-w-[48%] h-[380px] md:h-[420px] bg-slate-950 flex items-center justify-center text-left ${
        isSelected
          ? 'border-cyan-400 glow-cyan ring-1 ring-cyan-400'
          : 'border-slate-800 hover:border-slate-700 hover:scale-[1.01]'
      }`}
      onMouseMove={handleMouseMove as any}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleMouseMove as any}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      onClick={onSelect}
      aria-label={`Pilih Gambar ${label} sebagai Asli`}
    >
      {/* Label indicator (Gambar A atau B) */}
      <div className={`absolute top-4 left-4 z-10 font-mono font-bold px-3 py-1.5 rounded-lg border transition-all duration-300 flex items-center gap-1.5 ${
        isSelected
          ? 'bg-cyan-950/80 border-cyan-400 text-cyan-400'
          : 'bg-slate-900/80 border-slate-700 text-slate-400 group-hover:border-slate-500'
      }`}>
        <span className="text-xs uppercase tracking-wider">Gambar</span>
        <span className="text-sm font-black">{label}</span>
      </div>

      {/* Hover Zoom-in Icon Indicator */}
      <div className="absolute top-4 right-4 z-10 bg-slate-900/60 backdrop-blur-md p-1.5 rounded-full border border-slate-700 text-slate-400 opacity-60 group-hover:opacity-100 transition-opacity">
        <ZoomIn className="w-4 h-4" />
      </div>

      {/* The main image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain transition-opacity duration-300"
        onLoad={() => setImgLoaded(true)}
        style={{ opacity: imgLoaded ? 1 : 0 }}
      />

      {/* Loading placeholder */}
      {!imgLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 font-mono gap-2 text-xs">
          <div className="w-8 h-8 border-4 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin"></div>
          Memuat Bukti...
        </div>
      )}

      {/* Selection Overlay */}
      {isSelected && (
        <div className="absolute inset-0 bg-cyan-500/5 pointer-events-none transition-colors"></div>
      )}

      {/* Magnifier Lens */}
      {lensState.show && imgLoaded && !disabled && (
        <div
          className="absolute pointer-events-none rounded-full border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)] w-[140px] h-[140px] bg-no-repeat z-40"
          style={{
            left: `${lensState.x - 70}px`,
            top: `${lensState.y - 70}px`,
            backgroundImage: `url(${src})`,
            backgroundSize: lensState.bgSize,
            backgroundPosition: lensState.bgPos,
          }}
        />
      )}
    </button>
  );
}
