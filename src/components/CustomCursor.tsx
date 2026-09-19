"use client";

import { useEffect, useRef, useState } from "react";

type CursorDetail = { label: string | null };

export default function CustomCursor() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    const onChange = () => setEnabled(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      const el = wrapperRef.current;
      if (el) el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };
    const onCursorEvent = (e: Event) => {
      const detail = (e as CustomEvent<CursorDetail>).detail;
      setLabel(detail?.label ?? null);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("cursor:set", onCursorEvent);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("cursor:set", onCursorEvent);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={wrapperRef} className="fixed top-0 left-0 z-[100] pointer-events-none will-change-transform">
      <div
        className={[
          "absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-black",
          "transition-opacity duration-150 ease-out will-change-[opacity]",
          label ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />
      <div
        className={[
          "absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-10 rounded-xl bg-black text-white",
          "flex items-center justify-center whitespace-nowrap px-4 font-sans text-base",
          "transition-[opacity,transform] duration-150 ease-out will-change-[opacity,transform]",
          label ? "opacity-100 scale-100" : "opacity-0 scale-75",
        ].join(" ")}
      >
        {label}
      </div>
    </div>
  );
}

export function setCursorLabel(label: string | null) {
  window.dispatchEvent(new CustomEvent<CursorDetail>("cursor:set", { detail: { label } }));
}
