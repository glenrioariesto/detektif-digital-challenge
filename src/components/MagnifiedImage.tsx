import React, { useState, useRef } from 'react';

interface MagnifiedImageProps {
  id?: string;
  src: string;
  alt: string;
  label: 'A' | 'B';
  isSelected: boolean;
  onSelect: () => void;
  disabled: boolean;
}

/** Hitung area gambar yang benar-benar tergambar saat object-fit: cover. */
function getCoverLayout(
  elW: number,
  elH: number,
  naturalW: number,
  naturalH: number,
) {
  const scale = Math.max(elW / naturalW, elH / naturalH);
  const drawnW = naturalW * scale;
  const drawnH = naturalH * scale;
  const offsetX = (elW - drawnW) / 2;
  const offsetY = (elH - drawnH) / 2;
  return { drawnW, drawnH, offsetX, offsetY };
}

export function MagnifiedImage({
  id,
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
    const { naturalWidth, naturalHeight } = imgRef.current;
    if (!naturalWidth || !naturalHeight) return;

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

    const xButton = clientX - buttonRect.left;
    const yButton = clientY - buttonRect.top;

    const xImage = clientX - imageRect.left;
    const yImage = clientY - imageRect.top;

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
    const lensRadius = 70;

    // Sinkronkan dengan object-cover: lens memakai full asset yang di-scale sama,
    // lalu digeser sesuai crop/offset yang sama dengan <img>.
    const { drawnW, drawnH, offsetX, offsetY } = getCoverLayout(
      imageRect.width,
      imageRect.height,
      naturalWidth,
      naturalHeight,
    );

    const drawnX = xImage - offsetX;
    const drawnY = yImage - offsetY;

    const bgWidth = drawnW * zoom;
    const bgHeight = drawnH * zoom;
    const bgX = -(drawnX * zoom - lensRadius);
    const bgY = -(drawnY * zoom - lensRadius);

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
      id={id ?? `magnified-image-${label.toLowerCase()}`}
      ref={containerRef}
      type="button"
      className={`relative group overflow-hidden rounded-2xl transition-all duration-300 cursor-crosshair aspect-square w-[min(48%,calc(100dvh-5.5rem))] lg:w-[min(45%,calc(100dvh-9rem))] xl:w-[min(42%,calc(100dvh-10.5rem))] 2xl:w-[min(40%,calc(100dvh-11rem))] max-w-[36rem] shrink-0 bg-white flex items-center justify-center text-left ${
        isSelected
          ? 'card-ui ring-2 ring-[#FA7500]'
          : 'border-4 border-[#FA6E00] shadow-ink hover:scale-[1.01]'
      }`}
      onMouseMove={handleMouseMove as any}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleMouseMove as any}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      onClick={onSelect}
      aria-label={`Pilih Gambar ${label} sebagai hasil AI`}
    >
      <div className={`absolute top-2 left-2 sm:top-4 sm:left-4 z-10 font-mono font-bold px-2 py-1 sm:px-3 sm:py-1.5 rounded-full border-2 transition-all duration-300 flex items-center gap-1 sm:gap-1.5 ${
        isSelected
          ? 'border-[#FA6E00] bg-[#FA6E00] text-white'
          : 'bg-white border-[#FA6E00] text-[#FA6E00]'
      }`}>
        <span className="text-[9px] sm:text-xs uppercase tracking-wider">Gambar</span>
        <span className="text-xs sm:text-sm font-black">{label}</span>
      </div>

      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-center transition-opacity duration-300"
        onLoad={() => setImgLoaded(true)}
        style={{ opacity: imgLoaded ? 1 : 0 }}
      />

      {!imgLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center card-muted font-mono gap-2 text-xs">
          <div className="w-8 h-8 border-4 border-[#FA6E00]/20 border-t-[#FA6E00] rounded-full animate-spin"></div>
          Memuat Bukti...
        </div>
      )}

      {isSelected && (
        <div className="absolute inset-0 bg-[#FA6E00]/10 pointer-events-none transition-colors"></div>
      )}

      {lensState.show && imgLoaded && !disabled && (
        <div
          className="absolute pointer-events-none rounded-full border-2 border-[#FA6E00] shadow-ink w-[140px] h-[140px] bg-no-repeat z-40"
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
