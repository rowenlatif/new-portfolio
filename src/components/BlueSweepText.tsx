"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/* Text whose colour sweeps from ink to IBM blue, left to right, the first
   time it scrolls into view. The gradient is clipped to the glyphs, and an
   inline background runs across line breaks as one strip, so a phrase that
   wraps fills its first line, then its second. */

const INK = "#171717"; // neutral-900, the page's text colour
const BLUE = "#0f62fe";

/* delay staggers several words so they fill one after another */
export default function BlueSweepText({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        timer = setTimeout(() => setShown(true), 300 + delay);
      },
      { threshold: 1 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <span
      ref={ref}
      className="bg-clip-text text-transparent motion-reduce:!transition-none"
      style={{
        backgroundImage: `linear-gradient(to right, ${BLUE} 50%, ${INK} 50%)`,
        backgroundSize: "200% 100%",
        backgroundPosition: shown ? "0% 0" : "100% 0",
        transition: "background-position 700ms cubic-bezier(0.65, 0, 0.35, 1)",
      }}
    >
      {children}
    </span>
  );
}
