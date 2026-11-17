"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { setCursorLabel } from "@/components/CustomCursor";

export type LightboxImage = { src: string; alt: string; width: number; height: number };

/* Click-to-enlarge for a set of images. Each set pages on its own:
   arrows (on screen or keyboard) step through it, Esc or a click outside closes. */
export function useLightbox(images: LightboxImage[]) {
  const [index, setIndex] = useState<number | null>(null);
  const opener = useRef<HTMLElement | null>(null);
  const count = images.length;

  const open = useCallback((i: number) => {
    opener.current = document.activeElement as HTMLElement | null;
    setCursorLabel(null);
    setIndex(i);
  }, []);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + count) % count)),
    [count],
  );

  const isOpen = index !== null;
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      opener.current?.focus({ preventScroll: true });
    };
  }, [isOpen, close, step]);

  const current = index === null ? null : images[index];

  const element =
    current &&
    createPortal(
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`${current.alt}, enlarged`}
        onClick={close}
        className="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-6 animate-[intro-fade_0.25s_ease-out]"
      >
        <button
          type="button"
          onClick={close}
          autoFocus
          aria-label="Close"
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-white/90 transition-colors hover:text-white"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <Image
          key={current.src}
          src={current.src}
          alt={current.alt}
          width={current.width}
          height={current.height}
          sizes="88vw"
          priority
          onClick={(e) => e.stopPropagation()}
          className="w-auto h-auto max-w-[min(88vw,1400px)] max-h-[80vh] rounded-[4px] object-contain animate-[intro-fade_0.25s_ease-out]"
        />

        {count > 1 && (
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full border border-white/30 text-xs text-white/90"
          >
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous image"
              className="h-9 w-10 flex items-center justify-center rounded-l-full transition-colors hover:text-white hover:bg-white/10"
            >
              ←
            </button>
            <span className="w-16 text-center tabular-nums border-x border-white/30 leading-9" aria-live="polite">
              {index! + 1} / {count}
            </span>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next image"
              className="h-9 w-10 flex items-center justify-center rounded-r-full transition-colors hover:text-white hover:bg-white/10"
            >
              →
            </button>
          </div>
        )}
      </div>,
      document.body,
    );

  return { open, element };
}

/* The clickable wrapper around a thumbnail: a real button (keyboard + screen readers)
   that shows "View" on the custom cursor. */
export function ZoomTrigger({
  onOpen,
  label,
  className = "",
  children,
}: {
  onOpen: () => void;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Enlarge: ${label}`}
      onMouseEnter={() => setCursorLabel("View")}
      onMouseLeave={() => setCursorLabel(null)}
      className={`block text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900 ${className}`}
    >
      {children}
    </button>
  );
}
