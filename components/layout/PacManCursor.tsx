'use client';

import React, { useEffect, useRef, useCallback, useState } from 'react';

/* ─────────────────────────────────────────────────────────────────────────────
 * PacManCursor — animated Pac-Man cursor with golden-dot trail
 * • Pure React + Canvas (no Framer Motion dependency required)
 * • Uses requestAnimationFrame for 60fps performance
 * • Tracks mouse direction, animates mouth open/close, generates pellet trail
 * • Gracefully disabled on touch devices
 * ─────────────────────────────────────────────────────────────────────────────*/

interface Pellet {
  x: number;
  y: number;
  opacity: number;
  size: number;
  id: number;
}

interface ClickBurst {
  x: number;
  y: number;
  particles: Array<{ dx: number; dy: number; opacity: number; size: number; color: string }>;
  id: number;
  age: number;
}

const PAC_SIZE = 28;           // Pac-Man diameter in px
const PELLET_INTERVAL = 22;    // px between pellets
const PELLET_FADE = 0.032;     // fade per frame
const PELLET_MAX = 40;         // max pellets in trail
const MOUTH_SPEED = 0.12;      // mouth animation speed (radians per frame)
const BURST_COLORS = ['#FF2A85', '#FF5CA2', '#D4FF00', '#FF1493', '#D8FF3F'];

let pelletIdCounter = 0;
let burstIdCounter = 0;

export function PacManCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);

  // State tracked via refs for RAF loop (no re-renders)
  const posRef = useRef({ x: -100, y: -100 });
  const prevPosRef = useRef({ x: -100, y: -100 });
  const angleRef = useRef(0);        // Pac-Man facing angle (radians)
  const targetAngleRef = useRef(0);  // smooth rotation target
  const mouthRef = useRef(0);        // 0 = closed, 1 = open (cycles)
  const mouthDirRef = useRef(1);     // 1 = opening, -1 = closing
  const pelletsRef = useRef<Pellet[]>([]);
  const lastPelletPosRef = useRef({ x: -100, y: -100 });
  const burstsRef = useRef<ClickBurst[]>([]);
  const isHoveringRef = useRef(false);
  const [visible, setVisible] = useState(false);

  // Detect touch device — disable on mobile
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    const prev = prevPosRef.current;

    // Update direction based on movement
    const dx = x - prev.x;
    const dy = y - prev.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist > 2) {
      targetAngleRef.current = Math.atan2(dy, dx);
    }

    prevPosRef.current = { x, y };
    posRef.current = { x, y };

    if (!visible) setVisible(true);

    // Spawn pellets along path
    const ldx = x - lastPelletPosRef.current.x;
    const ldy = y - lastPelletPosRef.current.y;
    const ldist = Math.sqrt(ldx * ldx + ldy * ldy);
    if (ldist >= PELLET_INTERVAL) {
      pelletsRef.current.push({
        x: lastPelletPosRef.current.x + ldx * 0.5,
        y: lastPelletPosRef.current.y + ldy * 0.5,
        opacity: 0.85,
        size: 3 + Math.random() * 2,
        id: ++pelletIdCounter,
      });
      if (pelletsRef.current.length > PELLET_MAX) {
        pelletsRef.current.shift();
      }
      lastPelletPosRef.current = { x, y };
    }
  }, [visible]);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    const particles = Array.from({ length: 12 }, (_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const speed = 2 + Math.random() * 3;
      return {
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        opacity: 1,
        size: 2 + Math.random() * 3,
        color: BURST_COLORS[Math.floor(Math.random() * BURST_COLORS.length)],
      };
    });
    burstsRef.current.push({
      x: e.clientX,
      y: e.clientY,
      particles,
      id: ++burstIdCounter,
      age: 0,
    });
  }, []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const interactive = target.closest('a, button, [role="button"], input, textarea, select, label');
    isHoveringRef.current = !!interactive;
  }, []);

  useEffect(() => {
    if (isTouch) return;

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isTouch, handleMouseMove, handleMouseDown, handleMouseOver]);

  useEffect(() => {
    if (isTouch) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Resize canvas to full viewport
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const HALF_PI = Math.PI / 2;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ── 1. Draw pellet trail ──────────────────────────────────────────────
      pelletsRef.current = pelletsRef.current.filter(p => p.opacity > 0.01);
      for (const p of pelletsRef.current) {
        p.opacity -= PELLET_FADE;
        if (p.opacity <= 0) continue;

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.opacity);

        // Soft glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2.5);
        gradient.addColorStop(0, '#FF5CA2');
        gradient.addColorStop(0.5, '#FF2A85');
        gradient.addColorStop(1, 'rgba(255, 42, 133, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Pellet core
        ctx.fillStyle = '#FF2A85';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      // ── 2. Draw click bursts ──────────────────────────────────────────────
      burstsRef.current = burstsRef.current.filter(b => b.age < 25);
      for (const burst of burstsRef.current) {
        burst.age++;
        for (const p of burst.particles) {
          p.opacity -= 0.045;
          p.dx *= 0.92;
          p.dy *= 0.92;
          const px = burst.x + p.dx * burst.age;
          const py = burst.y + p.dy * burst.age;

          ctx.save();
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.fillStyle = p.color;
          ctx.fillRect(Math.round(px), Math.round(py), Math.round(p.size), Math.round(p.size));
          ctx.restore();
        }
      }

      // ── 3. Animate mouth ─────────────────────────────────────────────────
      mouthRef.current += MOUTH_SPEED * mouthDirRef.current;
      if (mouthRef.current >= 1) { mouthRef.current = 1; mouthDirRef.current = -1; }
      if (mouthRef.current <= 0) { mouthRef.current = 0; mouthDirRef.current = 1; }
      const mouthOpen = mouthRef.current;
      const mouthAngle = mouthOpen * (Math.PI / 4); // max 45°

      // ── 4. Smooth angle ───────────────────────────────────────────────────
      const target = targetAngleRef.current;
      let current = angleRef.current;
      let diff = target - current;
      // Normalize diff to [-π, π]
      while (diff > Math.PI) diff -= 2 * Math.PI;
      while (diff < -Math.PI) diff += 2 * Math.PI;
      current += diff * 0.18;
      angleRef.current = current;

      // ── 5. Draw Pac-Man body ──────────────────────────────────────────────
      const { x, y } = posRef.current;
      const r = isHoveringRef.current ? PAC_SIZE / 2 * 1.25 : PAC_SIZE / 2;
      const startAngle = current + mouthAngle;
      const endAngle = current - mouthAngle;

      ctx.save();
      ctx.shadowColor = isHoveringRef.current ? 'rgba(255, 42, 133, 0.8)' : 'transparent';
      ctx.shadowBlur = isHoveringRef.current ? 16 : 0;

      // Body fill
      ctx.fillStyle = '#EAB308';
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(x, y, r, startAngle, endAngle, false);
      ctx.closePath();
      ctx.fill();

      // Body stroke for depth
      ctx.strokeStyle = '#B8860B';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Eye
      const eyeAngle = current - HALF_PI * 0.55;
      const eyeR = r * 0.14;
      const eyeX = x + Math.cos(eyeAngle) * r * 0.52;
      const eyeY = y + Math.sin(eyeAngle) * r * 0.52;
      ctx.fillStyle = '#1F1F1F';
      ctx.beginPath();
      ctx.arc(eyeX, eyeY, eyeR, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <canvas
      ref={canvasRef}
      id="pacman-cursor-canvas"
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
    />
  );
}
