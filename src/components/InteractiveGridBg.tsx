import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  text: string;
}

/** Overlay cursor HUD saja — tidak menutupi background splash. */
export function InteractiveGridBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });
  const particlesRef = useRef<Particle[]>([]);
  const rotationRef = useRef({ r1: 0, r2: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.targetX = e.touches[0].clientX;
        mouseRef.current.targetY = e.touches[0].clientY;
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button') || target.closest('a')) return;

      for (let i = 0; i < 16; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 4;
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 8 + Math.random() * 6,
          alpha: 1.0,
          text: Math.random() > 0.5 ? '1' : '0',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('click', handleClick);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      if (mouse.x === -1000) {
        mouse.x = mouse.targetX;
        mouse.y = mouse.targetY;
      } else {
        mouse.x += (mouse.targetX - mouse.x) * 0.15;
        mouse.y += (mouse.targetY - mouse.y) * 0.15;
      }

      if (mouse.x > 0 && mouse.x < canvas.width) {
        rotationRef.current.r1 += 0.015;
        rotationRef.current.r2 -= 0.008;

        const rx = mouse.x;
        const ry = mouse.y;

        ctx.save();
        ctx.translate(rx, ry);

        // Outer segmented ring — primary
        ctx.strokeStyle = 'rgba(250, 110, 0, 0.35)';
        ctx.lineWidth = 1.25;
        ctx.setLineDash([8, 12]);
        ctx.rotate(rotationRef.current.r2);
        ctx.beginPath();
        ctx.arc(0, 0, 72, 0, Math.PI * 2);
        ctx.stroke();

        // Inner rotating arcs — brand-hot
        ctx.strokeStyle = 'rgba(250, 117, 0, 0.55)';
        ctx.lineWidth = 1.75;
        ctx.setLineDash([]);
        ctx.rotate(rotationRef.current.r1);
        ctx.beginPath();
        ctx.arc(0, 0, 42, 0, Math.PI * 0.4);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, 42, Math.PI, Math.PI * 1.4);
        ctx.stroke();

        // Crosshair — white + primary
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
        ctx.lineWidth = 1.25;
        ctx.beginPath();
        ctx.moveTo(-16, 0);
        ctx.lineTo(-5, 0);
        ctx.moveTo(5, 0);
        ctx.lineTo(16, 0);
        ctx.moveTo(0, -16);
        ctx.lineTo(0, -5);
        ctx.moveTo(0, 5);
        ctx.lineTo(0, 16);
        ctx.stroke();

        ctx.fillStyle = '#FA6E00';
        ctx.beginPath();
        ctx.arc(0, 0, 2.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // HUD status — ink shadow for readability on light splash areas
        ctx.fillStyle = 'rgba(56, 69, 91, 0.55)';
        ctx.font = 'bold 9px "Noto Sans", monospace';
        ctx.textAlign = 'left';
        ctx.fillText(`SYS_LOC: [${Math.round(rx)}, ${Math.round(ry)}]`, rx + 86, ry - 14);
        ctx.fillText('STATUS: TRACKING_ACTIVE', rx + 86, ry - 2);
        ctx.fillText('FREQ: 5.8GHZ // CH: 12', rx + 86, ry + 10);

        ctx.fillStyle = 'rgba(250, 110, 0, 0.85)';
        ctx.fillText(`SYS_LOC: [${Math.round(rx)}, ${Math.round(ry)}]`, rx + 85, ry - 15);
        ctx.fillText('STATUS: TRACKING_ACTIVE', rx + 85, ry - 3);
        ctx.fillText('FREQ: 5.8GHZ // CH: 12', rx + 85, ry + 9);

        ctx.strokeStyle = 'rgba(250, 110, 0, 0.4)';
        ctx.lineWidth = 0.85;
        ctx.beginPath();
        ctx.moveTo(rx + 52, ry - 10);
        ctx.lineTo(rx + 80, ry - 10);
        ctx.stroke();
      }

      const particles = particlesRef.current;
      ctx.textAlign = 'center';
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.025;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `rgba(250, 110, 0, ${p.alpha})`;
        ctx.font = `bold ${p.size}px "Noto Sans", monospace`;
        ctx.fillText(p.text, p.x, p.y);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="interactive-grid-bg"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full block z-[60] pointer-events-none"
      aria-hidden="true"
    />
  );
}
