"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

/* A square-page book you can flip through. Pages are paired into leaves:
   leaf i shows pages[2i] on its front (right-hand side) and pages[2i + 1]
   on its back (left-hand side once turned). Closed (front or back), the book
   sits centred; open, the spread fills the frame. */

type Props = {
  pages: string[]; // in reading order: cover, inside cover, page 1, ...
  alt: string;
};

const FLIP_MS = 900;

export default function FlipBook({ pages, alt }: Props) {
  const leaves: [string, string | undefined][] = [];
  for (let i = 0; i < pages.length; i += 2) leaves.push([pages[i], pages[i + 1]]);
  const total = leaves.length;

  const [turned, setTurned] = useState(0); // how many leaves are on the left
  const [moving, setMoving] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [zoomed, setZoomed] = useState<string | null>(null);

  // Lightbox: Esc closes it, and the page behind doesn't scroll while open
  useEffect(() => {
    if (!zoomed) return;
    const root = rootRef.current;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setZoomed(null);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEsc);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onEsc);
      root?.focus({ preventScroll: true });
    };
  }, [zoomed]);

  const go = useCallback(
    (dir: 1 | -1) => {
      const next = Math.min(total, Math.max(0, turned + dir));
      if (next === turned) return;
      setMoving(dir > 0 ? turned : turned - 1);
      setTurned(next);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setMoving(null), FLIP_MS);
    },
    [total, turned],
  );

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    }
  };

  // Shift so a closed book (front or back) sits in the middle of the frame
  const shift = turned === 0 ? "-25%" : turned === total ? "25%" : "0%";

  const label =
    turned === 0 ? "Cover" : turned === total ? "The end" : `${turned} / ${total - 1}`;

  return (
    <div
      ref={rootRef}
      tabIndex={0}
      onKeyDown={onKey}
      aria-roledescription="flip book"
      aria-label={`${alt}. Use the arrow keys to turn pages.`}
      className="outline-none select-none"
    >
      <div className="relative mx-auto w-full max-w-[960px] [perspective:2400px]">
        <div
          className="relative w-full aspect-[2/1] transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
          style={{ transform: `translateX(${shift})` }}
        >
          {/* One shadow under whatever is showing (cover, spread or back),
              so white pages lift off the background. Outer box-shadows
              aren't drawn under the box, so it never tints the pages. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 rounded-[4px] shadow-[0_18px_40px_-12px_rgba(0,0,0,0.22),0_2px_8px_rgba(0,0,0,0.08)] transition-[left,right] duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
            style={{ left: turned === 0 ? "50%" : 0, right: turned === total ? "50%" : 0 }}
          />

          {leaves.map(([front, back], i) => {
            const isTurned = i < turned;
            const z = moving === i ? total + 2 : isTurned ? i + 1 : total - i;
            // Only the leaves either side of the open spread are drawn; the
            // rest of the stack would bleed a grey fringe around the edges.
            const near = i >= turned - 2 && i <= turned + 1;
            return (
              <div
                key={i}
                className="absolute top-0 right-0 w-1/2 h-full [transform-style:preserve-3d] origin-left transition-transform duration-[900ms] ease-[cubic-bezier(0.65,0,0.35,1)]"
                style={{
                  transform: `rotateY(${isTurned ? -180 : 0}deg)`,
                  zIndex: z,
                  visibility: near ? "visible" : "hidden",
                }}
              >
                {/* Front: right-hand page */}
                <button
                  type="button"
                  onClick={() => setZoomed(front)}
                  tabIndex={-1}
                  aria-label="Enlarge page"
                  className="absolute inset-0 overflow-hidden rounded-r-[4px] [backface-visibility:hidden]"
                >
                  <Image
                    src={front}
                    alt={i === 0 ? alt : ""}
                    fill
                    sizes="(max-width: 1024px) 50vw, 480px"
                    className="object-cover"
                    loading={i < 3 ? "eager" : "lazy"}
                  />
                  {i > 0 && (
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/10 to-transparent" />
                  )}
                </button>

                {/* Back: left-hand page once turned */}
                <button
                  type="button"
                  onClick={() => back && setZoomed(back)}
                  tabIndex={-1}
                  aria-label="Enlarge page"
                  className="absolute inset-0 overflow-hidden rounded-l-[4px] [backface-visibility:hidden] [transform:rotateY(180deg)]"
                >
                  {back && (
                    <Image
                      src={back}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 50vw, 480px"
                      className="object-cover"
                      loading={i < 3 ? "eager" : "lazy"}
                    />
                  )}
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black/10 to-transparent" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="inline-flex items-center rounded-full border border-neutral-200 text-xs text-neutral-500">
          <button
            type="button"
            onClick={() => go(-1)}
            disabled={turned === 0}
            className="h-9 w-10 flex items-center justify-center rounded-l-full transition-colors hover:text-neutral-900 disabled:opacity-30 disabled:hover:text-neutral-500"
            aria-label="Previous page"
          >
            ←
          </button>
          <span className="w-20 text-center tabular-nums border-x border-neutral-200 leading-9">{label}</span>
          <button
            type="button"
            onClick={() => go(1)}
            disabled={turned === total}
            className="h-9 w-10 flex items-center justify-center rounded-r-full transition-colors hover:text-neutral-900 disabled:opacity-30 disabled:hover:text-neutral-500"
            aria-label="Next page"
          >
            →
          </button>
        </div>
      </div>

      {zoomed &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${alt}, enlarged page`}
            onClick={() => setZoomed(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-6 animate-[intro-fade_0.25s_ease-out]"
          >
            <button
              type="button"
              onClick={() => setZoomed(null)}
              autoFocus
              aria-label="Close"
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-white/90 transition-colors hover:text-white"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-[min(88vw,88vh)] aspect-square rounded-[4px] overflow-hidden"
            >
              <Image src={zoomed} alt="" fill sizes="88vmin" className="object-cover" priority />
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
