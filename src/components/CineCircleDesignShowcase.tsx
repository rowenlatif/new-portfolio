"use client";

import { useEffect, useRef, useState } from "react";

type Mode = "video" | "interactive";

const MODES: { id: Mode; label: string }[] = [
  { id: "video", label: "Video" },
  { id: "interactive", label: "Interactive" },
];

/* Where the phone sits inside a recording, in any consistent unit (measured
   off a frame). The recordings carry Figma's presentation backdrop around the
   phone; the stage crops straight to the screen so it sits on the white page. */
export type PhoneCrop = {
  frameW: number;
  frameH: number;
  x: number;
  y: number;
  w: number;
  h: number;
};

/* Turns a figma.com/proto share link into its chrome-free embed URL. */
function toEmbedUrl(protoUrl: string) {
  const url = new URL(protoUrl);
  url.hostname = "embed.figma.com";
  const p = url.searchParams;
  p.set("embed-host", "share");
  p.set("hide-ui", "1");
  p.set("hotspot-hints", "0");
  /* Fit width, not fit-whole-frame: screens fill the phone edge to edge and
     frames taller than the device (the review article) scroll instead of
     shrinking to fit. */
  p.set("scaling", "scale-down-width");
  p.set("content-scaling", "fixed");
  p.set("bg-color", "ffffff");
  return url.toString();
}

export default function CineCircleDesignShowcase({
  videoSrc,
  crop,
  prototypeUrl,
  label,
}: {
  videoSrc: string;
  crop: PhoneCrop;
  prototypeUrl?: string;
  label: string;
}) {
  const [mode, setMode] = useState<Mode>("video");
  /* The embed is heavy, so it only mounts once someone asks for it and then
     stays mounted to keep their place in the flow if they flip back. */
  const [embedRequested, setEmbedRequested] = useState(false);
  const [embedLoaded, setEmbedLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  /* Play only while on screen and in video mode. */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (mode !== "video") {
      video.pause();
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [mode]);

  const choose = (next: Mode) => {
    setMode(next);
    if (next === "interactive") setEmbedRequested(true);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Both views share one phone-sized box so the page doesn't jump on toggle */}
      <div
        className="relative h-[520px] sm:h-[600px] max-w-full rounded-[14px] overflow-hidden bg-white shadow-[0_24px_60px_-24px_rgba(0,0,0,0.35)] ring-1 ring-black/5"
        style={{ aspectRatio: `${crop.w} / ${crop.h}` }}
      >
        {/* Video, scaled so only the phone screen shows through the box */}
        <video
          ref={videoRef}
          src={videoSrc}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${label} walkthrough`}
          className={`absolute max-w-none transition-opacity duration-500 ${
            mode === "video" ? "opacity-100" : "opacity-0"
          }`}
          style={{
            width: `${(crop.frameW / crop.w) * 100}%`,
            height: `${(crop.frameH / crop.h) * 100}%`,
            left: `${(-crop.x / crop.w) * 100}%`,
            top: `${(-crop.y / crop.h) * 100}%`,
          }}
        />

        {/* Interactive prototype */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            mode === "interactive" ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={mode !== "interactive"}
        >
          {embedRequested && prototypeUrl && (
            <iframe
              title={`${label} interactive prototype`}
              src={toEmbedUrl(prototypeUrl)}
              onLoad={() => setEmbedLoaded(true)}
              allowFullScreen
              className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-500 ${
                embedLoaded ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
          {!embedLoaded && (
            <div className="absolute inset-0 flex items-center justify-center text-xs text-neutral-400">
              {prototypeUrl ? "Loading prototype…" : "Prototype coming soon"}
            </div>
          )}
        </div>
      </div>

      <div
        role="tablist"
        aria-label={`${label} preview`}
        className="inline-flex rounded-full border border-neutral-200 bg-white p-1 mt-6"
      >
        {MODES.map((m) => (
          <button
            key={m.id}
            role="tab"
            type="button"
            aria-selected={mode === m.id}
            onClick={() => choose(m.id)}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              mode === m.id ? "bg-rose-600 text-white" : "text-neutral-600 hover:text-rose-700"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>
    </div>
  );
}
