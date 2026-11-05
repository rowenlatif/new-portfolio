"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

/* A row of books, spines out. Once it scrolls into view the Tufte book lifts
   off the shelf, slides forward, turns to show its cover while its neighbours
   make room, then sets back down. Plays once. A few of the book's ideas float
   above it. */

// Stage, in px; scaled to the column's width
const W = 720;
const H = 400;
const SHELF_Y = 390; // book bottoms sit here
const EDGE = 4; // breathing room at the stage's sides

// Tufte book, sized from the cover image (407x491)
const BOOK_H = 250;
const COVER_W = Math.round((BOOK_H * 407) / 491);
const DEPTH = 32; // spine width
const CREAM = "#f6ecc8";
const INK = "#4a3f35";
const RED = "#9b3b2c";

const GAP = 6; // between spines
const OPEN_GAP = 16; // between the open cover and its neighbours
const TILT = 6; // degrees the two neighbours lean out
const LIFT = 36; // how high the book rises off the shelf

// IBM Carbon palette
const colours = ["#0f62fe", "#161616", "#78a9ff", "#002d9c", "#009d9a", "#525252", "#a6c8ff", "#8a3ffc", "#1192e8", "#c6c6c6", "#005d5d"];
const widths = [26, 34, 24, 30, 28, 36, 24, 32, 26, 30, 28];
const heights = [214, 236, 206, 228, 198, 232, 210, 222, 204, 230, 216];

type Spine = { w: number; h: number; c: string; side: -1 | 1; near: boolean; shelvedX: number; openX: number };

/* Lay books out from the centre on each side until the open row reaches the
   stage edge; record where each sits both shelved and once the cover is out. */
function layout(): Spine[] {
  const cx = W / 2;
  const out: Spine[] = [];
  for (const side of [-1, 1] as const) {
    const row: Spine[] = [];
    let shelved = cx + side * (DEPTH / 2 + GAP);
    let open = cx + side * (COVER_W / 2 + OPEN_GAP);
    for (let k = 0; ; k++) {
      const i = (k * 2 + (side > 0 ? 1 : 0)) % widths.length;
      const w = widths[i];
      const h = heights[(i + k) % heights.length];
      const near = k === 0;
      // The leaning neighbour's top swings outward; leave room for it
      const lean = near ? h * Math.sin((TILT * Math.PI) / 180) : 0;
      const openLeft = side < 0 ? open - w : open;
      const reach = side < 0 ? openLeft - (near ? lean : 0) : openLeft + w + (near ? lean : 0);
      if (reach < EDGE || reach > W - EDGE) break;
      row.push({
        w,
        h,
        c: colours[i % colours.length],
        side,
        near,
        shelvedX: side < 0 ? shelved - w : shelved,
        openX: openLeft,
      });
      shelved += side * (w + GAP);
      open += side * (w + GAP + lean);
    }
    // Spread whatever room is left over the open gaps so the row meets the edge
    const last = row[row.length - 1];
    const slack = side < 0 ? last.openX - EDGE : W - EDGE - (last.openX + last.w);
    row.forEach((b, k) => (b.openX += side * slack * ((k + 1) / row.length)));
    out.push(...row);
  }
  return out;
}

const spines = layout();

// Two staggered rows above the books (x is each word's centre, in % of W)
const words = [
  { t: "Data-ink ratio", x: 14, y: 3, d: 0 },
  { t: "Chartjunk", x: 47, y: 1, d: 1.2 },
  { t: "Small multiples", x: 81, y: 4, d: 2.1 },
  { t: "Lie factor", x: 26, y: 13, d: 0.6 },
  { t: "Data density", x: 60, y: 14, d: 1.6 },
  { t: "Graphical integrity", x: 86, y: 15, d: 2.6 },
];

type Stage = "shelved" | "lifted" | "pulled" | "turned" | "settled";

/* When each stage starts after the shelf comes into view, and how long its
   move takes. */
const TIMELINE: { stage: Stage; at: number; dur: number }[] = [
  { stage: "lifted", at: 500, dur: 800 },
  { stage: "pulled", at: 1300, dur: 900 },
  { stage: "turned", at: 2200, dur: 1500 },
  { stage: "settled", at: 3700, dur: 900 },
];
const dur = (s: Stage) => TIMELINE.find((t) => t.stage === s)?.dur ?? 0;

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

/* Book box transform. Turned 90° it shows its spine (the left face), pushed
   back so the spine sits flush with the others. Every stage uses the same
   function list so the browser can interpolate between them. */
const BOOK: Record<Stage, string> = {
  shelved: `translateZ(${-COVER_W / 2}px) translateY(0px) rotateY(90deg)`,
  lifted: `translateZ(${-COVER_W / 2}px) translateY(${-LIFT}px) rotateY(90deg)`,
  pulled: `translateZ(${-COVER_W / 2 + 80}px) translateY(${-LIFT}px) rotateY(90deg)`,
  turned: `translateZ(40px) translateY(${-LIFT}px) rotateY(12deg)`,
  settled: `translateZ(40px) translateY(0px) rotateY(12deg)`,
};

export default function IbmBookshelf() {
  const ref = useRef<HTMLDivElement>(null);
  const [stage, setStage] = useState<Stage>("shelved");
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        if (reduced) {
          timers.push(setTimeout(() => setStage("settled"), 0));
          return;
        }
        for (const t of TIMELINE) timers.push(setTimeout(() => setStage(t.stage), t.at));
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fit = () => setScale(el.clientWidth / W);
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const open = stage === "turned" || stage === "settled";
  const face: CSSProperties = { position: "absolute", backfaceVisibility: "hidden" };

  return (
    <div ref={ref} className="relative w-full" style={{ height: H * scale }}>
      <div
        className="absolute left-0 top-0"
        style={{ width: W, height: H, transform: `scale(${scale})`, transformOrigin: "top left" }}
      >
        {/* Floating vocabulary, once the book has settled */}
        {words.map((w, i) => (
          <span
            key={w.t}
            className="absolute rounded-full border border-[#d0e2ff] bg-[#edf5ff] px-3 py-1 text-xs text-[#0f62fe] whitespace-nowrap tufte-float"
            style={{
              left: `${w.x}%`,
              top: `${w.y}%`,
              transform: "translateX(-50%)",
              opacity: stage === "settled" ? 1 : 0,
              transition: `opacity 700ms ease-out ${300 + i * 140}ms`,
              animationDelay: `${w.d}s`,
            }}
          >
            {w.t}
          </span>
        ))}

        <div className="absolute inset-0" style={{ perspective: "1100px", perspectiveOrigin: "50% 30%" }}>
          <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
            {/* Shelf */}
            <div className="absolute inset-x-0 h-[4px] rounded-full bg-[#e0e0e0]" style={{ top: SHELF_Y }} />

            {/* Neighbouring spines */}
            {spines.map((s, i) => (
              <div
                key={i}
                className="absolute rounded-[2px]"
                style={{
                  left: s.shelvedX,
                  top: SHELF_Y - s.h,
                  width: s.w,
                  height: s.h,
                  background: s.c,
                  transformOrigin: s.side < 0 ? "bottom left" : "bottom right",
                  transform: open
                    ? `translateX(${s.openX - s.shelvedX}px) rotate(${s.near ? s.side * TILT : 0}deg)`
                    : "translateX(0px) rotate(0deg)",
                  transition: `transform ${dur("turned")}ms ${EASE}`,
                }}
              />
            ))}

            {/* The Tufte book, as a 3D box */}
            <div
              className="absolute"
              style={{
                left: W / 2 - COVER_W / 2,
                top: SHELF_Y - BOOK_H,
                width: COVER_W,
                height: BOOK_H,
                transformStyle: "preserve-3d",
                transform: BOOK[stage],
                transition: `transform ${dur(stage)}ms ${EASE}`,
              }}
            >
              {/* Cover */}
              <div style={{ ...face, inset: 0, transform: `translateZ(${DEPTH / 2}px)` }} className="overflow-hidden rounded-[2px]">
                <Image
                  src="/images/ibm/tufte-cover.jpg"
                  alt="Cover of The Visual Display of Quantitative Information by Edward R. Tufte"
                  fill
                  sizes={`${COVER_W}px`}
                  className="object-cover"
                />
              </div>
              {/* Spine */}
              <div
                className="flex items-center justify-center rounded-[2px]"
                style={{
                  ...face,
                  top: 0,
                  left: (COVER_W - DEPTH) / 2,
                  width: DEPTH,
                  height: BOOK_H,
                  background: CREAM,
                  transform: `rotateY(-90deg) translateZ(${COVER_W / 2}px)`,
                }}
              >
                <span
                  className="font-serif whitespace-nowrap text-[8px] tracking-wide flex items-center gap-3"
                  style={{ writingMode: "vertical-rl", color: INK }}
                >
                  The Visual Display of Quantitative Information
                  <span style={{ color: RED }}>TUFTE</span>
                </span>
              </div>
              {/* Page edges */}
              <div
                style={{
                  ...face,
                  top: 2,
                  left: (COVER_W - DEPTH) / 2,
                  width: DEPTH - 2,
                  height: BOOK_H - 4,
                  background: "repeating-linear-gradient(90deg, #fbf8f0 0 2px, #ece6d6 2px 3px)",
                  transform: `rotateY(90deg) translateZ(${COVER_W / 2 - 2}px)`,
                }}
              />
              {/* Top edge */}
              <div
                style={{
                  ...face,
                  left: 0,
                  top: (BOOK_H - DEPTH) / 2,
                  width: COVER_W,
                  height: DEPTH,
                  background: "#f3efe4",
                  transform: `rotateX(90deg) translateZ(${BOOK_H / 2}px)`,
                }}
              />
              {/* Back */}
              <div style={{ ...face, inset: 0, background: CREAM, transform: `rotateY(180deg) translateZ(${DEPTH / 2}px)` }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
