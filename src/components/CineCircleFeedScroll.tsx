"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* Geometry, in the design pixels of the exported Figma frames. The stage is
   laid out at these coordinates and then scaled to fit the column.

   Every export is 413px wide with a 5px transparent bleed around a 393x855
   screen, so the feed, the frame chrome and the pulled-out posts all share one
   coordinate system — image y is the same number in all three files. */
const IMG_W = 413;
const BLEED = 5;
const SCREEN_W = 393;
const SCREEN_H = 855;
const SCREEN_RADIUS = "6px 6px 20px 20px"; // matches the export's corners

const FEED_IMG_H = 1724;
/* feed-long.png bakes its own tab bar in below this line; the screen never
   scrolls far enough to bring it into view. */
const FEED_CONTENT_BOTTOM = 1586;

const TAB_BAR_TOP = 780; // image y of the tab bar hairline
const CLEAR_H = TAB_BAR_TOP - BLEED; // feed visible above the frosted tab bar
const MAX_OFFSET = FEED_CONTENT_BOTTOM - BLEED - SCREEN_H;

const STAGE_W = 1340;
const STAGE_H = 920;
const PHONE_X = (STAGE_W - IMG_W) / 2;
const PHONE_Y = 20;
const CARD_GAP = 40;

/* The pin runs as a timeline rather than a straight scroll, so the feed can
   hold on each post and, crucially, open and close on the untouched screen:
     0.00–0.14  feed as designed, nothing dimmed
     0.22–0.40  opinion
     0.52–0.64  rating
     0.76–0.90  review
     0.97–1.00  back to the untouched screen */
const BEAT_WINDOWS = [
  { rise: [0.17, 0.24], fall: [0.4, 0.47] }, // opinion
  { rise: [0.47, 0.54], fall: [0.64, 0.71] }, // rating
  { rise: [0.71, 0.78], fall: [0.9, 0.97] }, // review
];

type Beat = {
  id: string;
  side: "left" | "right";
  src: string;
  w: number;
  h: number;
  top: number; // image y of the post within feed-long.png
  title: string;
  body: string;
};

const beats: Beat[] = [
  {
    id: "opinion",
    side: "left",
    src: "/images/cinecircle/post-opinion.png",
    w: SCREEN_W,
    h: 347,
    top: 264,
    title: "…forming an opinion?",
    body: "A gut reaction, thrown out the moment the credits roll. Short, unfiltered, and often carried by a still from the film itself.",
  },
  {
    id: "rating",
    side: "right",
    src: "/images/cinecircle/post-rating.png",
    w: SCREEN_W,
    h: 154,
    top: 756,
    title: "…rating a film?",
    body: "A verdict with a number attached. The score does the summarising, so the words underneath only need to justify it.",
  },
  {
    id: "review",
    side: "right",
    src: "/images/cinecircle/post-review.png",
    w: SCREEN_W,
    h: 314,
    top: 1020,
    title: "…writing reviews?",
    body: "A considered argument that earns its own headline. Long form needs structure, a title, and room to breathe.",
  },
];

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

const smoothstep = (t: number) => t * t * (3 - 2 * t);

/* Piecewise ease through a list of [progress, value] keyframes. */
function sampleTrack(p: number, track: [number, number][]) {
  if (p <= track[0][0]) return track[0][1];
  for (let i = 1; i < track.length; i++) {
    const [p0, v0] = track[i - 1];
    const [p1, v1] = track[i];
    if (p <= p1) {
      const t = p1 === p0 ? 1 : (p - p0) / (p1 - p0);
      return v0 + (v1 - v0) * smoothstep(t);
    }
  }
  return track[track.length - 1][1];
}

/* Scroll offset that parks each post in the middle of the clear screen area.
   The review sits past the end of the feed, so it settles as close as it can. */
const focusOf = (b: Beat) =>
  clamp(b.top + b.h / 2 - BLEED - CLEAR_H / 2, 0, MAX_OFFSET);

/* Feed position across the pin: hold on the untouched top, ease to each post
   in turn and dwell there, then hold on the last one to the end. */
const FEED_TRACK: [number, number][] = [
  [0, 0],
  [0.14, 0],
  [0.22, focusOf(beats[0])],
  [0.4, focusOf(beats[0])],
  [0.52, focusOf(beats[1])],
  [0.64, focusOf(beats[1])],
  [0.76, focusOf(beats[2])],
  [1, focusOf(beats[2])],
];

/* How called-out a post is: rises as it settles, falls as the timeline moves on. */
function activity(p: number, i: number) {
  const w = BEAT_WINDOWS[i];
  const rise = smoothstep(clamp((p - w.rise[0]) / (w.rise[1] - w.rise[0]), 0, 1));
  const fall =
    1 - smoothstep(clamp((p - w.fall[0]) / (w.fall[1] - w.fall[0]), 0, 1));
  return Math.min(rise, fall);
}

export default function CineCircleFeedScroll() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [scale, setScale] = useState(1);

  /* Scroll position of the pinned wrapper, normalised to 0…1. */
  useEffect(() => {
    let frame = 0;
    const read = () => {
      frame = 0;
      const el = wrapRef.current;
      if (!el) return;
      const travel = el.offsetHeight - window.innerHeight;
      if (travel <= 0) return;
      setProgress(clamp(-el.getBoundingClientRect().top / travel, 0, 1));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* Fit the fixed-size stage to whatever width the column gives us. */
  useEffect(() => {
    const el = stageRef.current?.parentElement;
    if (!el) return;
    const fit = () => {
      const byWidth = el.clientWidth / STAGE_W;
      const byHeight = (window.innerHeight - 120) / STAGE_H;
      setScale(clamp(Math.min(byWidth, byHeight), 0.3, 1));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    window.addEventListener("resize", fit);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fit);
    };
  }, []);

  const offset = clamp(sampleTrack(progress, FEED_TRACK), 0, MAX_OFFSET);
  const acts = beats.map((_, i) => activity(progress, i));
  const focus = Math.max(...acts);
  /* While a post is called out it should be the only lit thing on the phone —
     the feed, the frosted tab bar and the status bar all recede together. */
  const dim = 1 - 0.68 * focus;

  return (
    <div ref={wrapRef} className="relative h-[340vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div
          ref={stageRef}
          className="relative shrink-0"
          style={{ width: STAGE_W, height: STAGE_H, transform: `scale(${scale})` }}
        >
          {/* Phone — no shell of its own, the exports already carry the shape */}
          <div
            className="absolute"
            style={{ left: PHONE_X, top: PHONE_Y, width: IMG_W, height: SCREEN_H + BLEED * 2 }}
          >
            {/* The screen: clips the feed to the export's exact rounded rect */}
            <div
              className="absolute overflow-hidden bg-white"
              style={{
                left: BLEED,
                top: BLEED,
                width: SCREEN_W,
                height: SCREEN_H,
                borderRadius: SCREEN_RADIUS,
                boxShadow: "0 18px 50px -20px rgba(0,0,0,0.35)",
              }}
            >
              {/* Scrolling feed, dimmed whenever a post is being called out.
                  Pulled back by the bleed so image y lines up with clip y. */}
              <div
                className="absolute"
                style={{
                  left: -BLEED,
                  top: -BLEED,
                  width: IMG_W,
                  height: FEED_IMG_H,
                  transform: `translateY(${-offset}px)`,
                  opacity: dim,
                  transition: "opacity 220ms ease-out",
                }}
              >
                <Image
                  src="/images/cinecircle/feed-long.png"
                  alt="CineCircle home feed"
                  width={IMG_W}
                  height={FEED_IMG_H}
                  priority
                />
              </div>

              {/* The post under discussion stays lit while the rest dims */}
              {beats.map((b, i) => (
                <div
                  key={b.id}
                  className="absolute"
                  style={{
                    left: 0,
                    top: b.top - BLEED - offset,
                    width: b.w,
                    height: b.h,
                    opacity: acts[i],
                    transition: "opacity 220ms ease-out",
                  }}
                >
                  <Image src={b.src} alt="" width={b.w} height={b.h} />
                </div>
              ))}

              {/* Frosted tab bar — feed scrolls under it */}
              <div
                className="absolute inset-x-0 bottom-0 bg-white/55"
                style={{
                  top: TAB_BAR_TOP - BLEED,
                  backdropFilter: "blur(16px) saturate(1.6)",
                  WebkitBackdropFilter: "blur(16px) saturate(1.6)",
                  opacity: dim,
                  transition: "opacity 220ms ease-out",
                }}
              />
            </div>

            {/* Status bar + tab bar glyphs */}
            <Image
              src="/images/cinecircle/phone-chrome.png"
              alt=""
              width={IMG_W}
              height={SCREEN_H + BLEED * 2}
              className="absolute inset-0 pointer-events-none"
              style={{ opacity: dim, transition: "opacity 220ms ease-out" }}
            />
          </div>

          {/* Pulled-out posts */}
          {beats.map((b, i) => {
            const act = acts[i];
            const left =
              b.side === "left"
                ? PHONE_X - CARD_GAP - b.w
                : PHONE_X + IMG_W + CARD_GAP;
            const drift = (1 - act) * (b.side === "left" ? 64 : -64);
            const top = clamp(PHONE_Y + b.top - offset, 24, STAGE_H - b.h - 150);

            return (
              <div
                key={b.id}
                aria-hidden={act < 0.5}
                className="absolute"
                style={{
                  left,
                  top,
                  width: b.w,
                  opacity: act,
                  transform: `translateX(${drift}px) scale(${0.96 + 0.04 * act})`,
                  pointerEvents: "none",
                }}
              >
                <div className="rounded-xl bg-white shadow-[0_16px_40px_-16px_rgba(0,0,0,0.3)] ring-1 ring-black/5 overflow-hidden">
                  <Image src={b.src} alt={b.title} width={b.w} height={b.h} />
                </div>
                <p className="font-serif text-lg text-neutral-900 mt-5">{b.title}</p>
                <p className="text-sm text-neutral-500 leading-relaxed mt-1">{b.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
