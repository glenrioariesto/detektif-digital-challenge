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

      // Spawn burst of digital binary particles
      for (let i = 0; i < 20; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 5;
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
      // Dark cyber background matching body #020617
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const mouse = mouseRef.current;
      if (mouse.x === -1000) {
        mouse.x = mouse.targetX;
        mouse.y = mouse.targetY;
      } else {
        mouse.x += (mouse.targetX - mouse.x) * 0.15;
        mouse.y += (mouse.targetY - mouse.y) * 0.15;
      }

      // 1. Draw hacker grid lines (very faint cyan grid)
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.025)';
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // 2. Draw Target Tracker HUD centered on cursor (Cyan theme)
      if (mouse.x > 0 && mouse.x < canvas.width) {
        rotationRef.current.r1 += 0.015;
        rotationRef.current.r2 -= 0.008;

        const rx = mouse.x;
        const ry = mouse.y;

        ctx.save();
        ctx.translate(rx, ry);

        // Outer segmented compass ring
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
        ctx.lineWidth = 1;
        ctx.setLineDash([8, 12]);
        ctx.rotate(rotationRef.current.r2);
        ctx.beginPath();
        ctx.arc(0, 0, 75, 0, Math.PI * 2);
        ctx.stroke();

        // Inner solid rotating ring
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.35)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([]);
        ctx.rotate(rotationRef.current.r1);
        ctx.beginPath();
        ctx.arc(0, 0, 45, 0, Math.PI * 0.4);
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, 45, Math.PI, Math.PI * 1.4);
        ctx.stroke();

        // Inner target reticle
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        // Crosshair hairs
        ctx.moveTo(-15, 0); ctx.lineTo(-6, 0);
        ctx.moveTo(6, 0); ctx.lineTo(15, 0);
        ctx.moveTo(0, -15); ctx.lineTo(0, -6);
        ctx.moveTo(0, 6); ctx.lineTo(0, 15);
        ctx.stroke();

        // Small center dot
        ctx.fillStyle = 'rgba(6, 182, 212, 0.8)';
        ctx.beginPath();
        ctx.arc(0, 0, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // 3. HUD status text data offset from cursor
        ctx.fillStyle = 'rgba(6, 182, 212, 0.4)';
        ctx.font = 'bold 9px monospace';
        ctx.textAlign = 'left';
        ctx.fillText(`SYS_LOC: [${Math.round(rx)}, ${Math.round(ry)}]`, rx + 85, ry - 15);
        ctx.fillText('STATUS: TRACKING_ACTIVE', rx + 85, ry - 3);
        ctx.fillText('FREQ: 5.8GHZ // CH: 12', rx + 85, ry + 9);

        // Draw dotted line connecting cursor to info text
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.25)';
        ctx.lineWidth = 0.75;
        ctx.beginPath();
        ctx.moveTo(rx + 55, ry - 10);
        ctx.lineTo(rx + 80, ry - 10);
        ctx.stroke();
      }

      // 4. Update and draw binary burst particles (Cyan)
      const particles = particlesRef.current;
      ctx.textAlign = 'center';
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.02;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.fillStyle = `rgba(6, 182, 212, ${p.alpha})`;
        ctx.font = `bold ${p.size}px monospace`;
        ctx.fillText(p.text, p.x, p.y);
      }

      // 5. Draw a scanning vertical laser line sweeping across the screen (Cyan)
      const sweepY = (Date.now() / 25) % (canvas.height + 200) - 100;
      const sweepGrad = ctx.createLinearGradient(0, sweepY - 40, 0, sweepY + 4);
      sweepGrad.addColorStop(0, 'rgba(6, 182, 212, 0)');
      sweepGrad.addColorStop(0.9, 'rgba(6, 182, 212, 0.08)');
      sweepGrad.addColorStop(1, 'rgba(6, 182, 212, 0.25)');

      ctx.fillStyle = sweepGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height); // We use vertical sweep

      // Horizontal scanner laser line
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, sweepY);
      ctx.lineTo(canvas.width, sweepY);
      ctx.stroke();

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

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block z-0" style={{ pointerEvents: 'none' }} />;
}
