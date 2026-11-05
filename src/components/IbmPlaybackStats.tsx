"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

/* The Playback at a glance: three metric cards that swoop in from the sides
   of the screen once they scroll into view, and the team's reaction with a
   Bob stamped on either side like a seal of approval. Each plays once. */

const stats = [
  { value: "80+", label: "Attendees" },
  { value: "VPs", label: "In the room" },
  { value: "1", label: "Deck requested" },
];

// Where each card starts: left from the left, middle from below, right from the right
const FROM = [
  "translate3d(-60vw, 40px, 0) rotate(-6deg)",
  "translate3d(0, 120px, 0) rotate(0deg)",
  "translate3d(60vw, 40px, 0) rotate(6deg)",
];
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const STAMP_EASE = "cubic-bezier(0.34, 1.56, 0.64, 1)"; // overshoots, so it lands with a thud

/* Flips to true the first time the element is 30% on screen */
function useSeenOnce<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        timer = setTimeout(() => setShown(true), 0);
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return [ref, shown] as const;
}

export default function IbmPlaybackStats() {
  const [ref, shown] = useSeenOnce<HTMLDivElement>();

  const swoop = (i: number): CSSProperties => ({
    opacity: shown ? 1 : 0,
    transform: shown ? "translate3d(0, 0, 0) rotate(0deg)" : FROM[i % FROM.length],
    transition: `transform 1100ms ${EASE} ${i * 120}ms, opacity 600ms ease-out ${i * 120}ms`,
  });

  return (
    <div ref={ref} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {stats.map((m, i) => (
        <div
          key={m.label}
          style={swoop(i)}
          className="relative rounded-xl border border-[#e0e0e0] border-t-[3px] border-t-[#0f62fe] bg-white p-6 sm:p-8 will-change-transform motion-reduce:!transform-none motion-reduce:!opacity-100 motion-reduce:!transition-none"
        >
          <p className="font-serif text-4xl sm:text-5xl leading-none text-neutral-900 mb-4">{m.value}</p>
          <p className="text-sm text-neutral-900">{m.label}</p>
        </div>
      ))}
    </div>
  );
}

const STAMP_AT = 300; // ms after the reaction scrolls into view

/* The team's reaction, flanked by a Bob stamp on each side: same size, mirrored
   tilt, landing together */
export function TeamReaction({ children }: { children: ReactNode }) {
  const [ref, shown] = useSeenOnce<HTMLDivElement>();
  return (
    <div ref={ref} className="flex items-center justify-center gap-3 sm:gap-6">
      <Stamp shown={shown} delay={STAMP_AT} from={8} to={-12} />
      <div className="min-w-0 w-full max-w-[460px]">{children}</div>
      <Stamp shown={shown} delay={STAMP_AT} from={-8} to={12} />
    </div>
  );
}

/* Bob drops in from above, and a ring of ink spreads out from where he lands */
function Stamp({ shown, delay, from, to }: { shown: boolean; delay: number; from: number; to: number }) {
  return (
    <div aria-hidden className="relative shrink-0 w-14 sm:w-20 pointer-events-none">
      {shown && (
        <span
          className="stamp-ring absolute inset-[12%] rounded-full border-2 border-[#0f62fe]"
          style={{ animationDelay: `${delay + 200}ms` }}
        />
      )}
      <Image
        src="/images/ibm/bob-sticker.png"
        alt=""
        width={320}
        height={320}
        className="relative w-full h-auto drop-shadow-[0_6px_10px_rgba(0,0,0,0.12)] motion-reduce:!transform-none motion-reduce:!opacity-100 motion-reduce:!transition-none"
        style={{
          opacity: shown ? 1 : 0,
          transform: shown ? `scale(1) rotate(${to}deg)` : `scale(2.4) rotate(${from}deg)`,
          transition: `transform 450ms ${STAMP_EASE} ${delay}ms, opacity 200ms ease-out ${delay}ms`,
        }}
      />
    </div>
  );
}
