"use client";

import { useEffect, useRef, useState } from "react";

type CursorDetail = { label: string | null };

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
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
      const el = dotRef.current;
      if (el) el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
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
    <div
      ref={dotRef}
      className={[
        "fixed top-0 left-0 z-[100] pointer-events-none flex items-center justify-center",
        "bg-black text-white whitespace-nowrap",
        "transition-[width,height,border-radius,padding] duration-200 ease-out",
        label
          ? "h-10 rounded-lg px-4 text-base font-sans"
          : "h-2.5 w-2.5 rounded-full",
      ].join(" ")}
    >
      {label}
    </div>
  );
}

export function setCursorLabel(label: string | null) {
  window.dispatchEvent(new CustomEvent<CursorDetail>("cursor:set", { detail: { label } }));
}
