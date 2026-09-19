"use client";

import { useEffect, useRef } from "react";

const SPACING = 22;
const RADIUS_PX = 4;
const EFFECT_RADIUS = 130;

export default function MatrixDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef<{ x: number; y: number } | null>(null);
  const raf = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(parent);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onLeave = () => {
      mouse.current = null;
    };
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const cols = Math.ceil(width / SPACING);
      const rows = Math.ceil(height / SPACING);
      const m = mouse.current;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * SPACING;
          const y = j * SPACING;
          let dx = 0;
          let dy = 0;
          let alpha = 0.16;
          let r = RADIUS_PX;

          if (m) {
            const distX = x - m.x;
            const distY = y - m.y;
            const dist = Math.sqrt(distX * distX + distY * distY);
            if (dist < EFFECT_RADIUS) {
              const falloff = 1 - dist / EFFECT_RADIUS;
              const seed = i * 31.7 + j * 17.3;
              dx = Math.sin(time / 90 + seed) * 6 * falloff;
              dy = Math.cos(time / 110 + seed * 1.3) * 6 * falloff;
              alpha = 0.16 + falloff * 0.55;
              r = RADIUS_PX + falloff * 1.5;
            }
          }

          ctx.beginPath();
          ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,0,0,${alpha})`;
          ctx.fill();
        }
      }
      raf.current = requestAnimationFrame(draw);
    };
    raf.current = requestAnimationFrame(draw);

    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
      ro.disconnect();
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
      }}
    />
  );
}
