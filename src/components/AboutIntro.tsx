"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const experience = [
  { logo: "/images/about/logo-ibm.png", name: "IBM", role: "Product Designer", year: "2026" },
  { logo: "/images/about/logo-blackrock.png", name: "BlackRock", role: "Visual Designer", year: "2025" },
  { logo: "/images/about/logo-perplexity.png", name: "Perplexity", role: "UX Researcher", year: "2025" },
];

// Portrait photos for the intro gallery. The first two sit in view, the third
// peeks in from the right, and the rest scroll across as the page scrolls.
// Entries without a src render as gray placeholders.
const introPhotos: { src?: string; alt: string; position?: string }[] = [
  { src: "/images/about/hero.png", alt: "Rowen by a window", position: "object-[80%_50%]" },
  { src: "/images/about/intro-2.jpg", alt: "Pizza slices with friends" },
  { src: "/images/about/intro-3.jpg", alt: "Rowen browsing a shop's shelves" },
  { src: "/images/about/intro-4.jpg", alt: "Photo booth strips" },
  { src: "/images/about/intro-5.jpg", alt: "Rowen taking an elevator mirror selfie", position: "object-[37%_50%]" },
];

export default function AboutIntro() {
  const outerRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [pinHeight, setPinHeight] = useState(0);

  // How far the track has to travel for the last photo to reach the right edge.
  // Pinning is desktop only; on small screens the row is a native horizontal scroll.
  useEffect(() => {
    const pin = pinRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!pin || !viewport || !track) return;
    const mq = window.matchMedia("(min-width: 768px)");
    const measure = () => {
      const last = track.lastElementChild as HTMLElement | null;
      if (!mq.matches || !last) return setDistance(0);
      setDistance(Math.max(0, last.offsetLeft + last.offsetWidth - viewport.clientWidth));
      setPinHeight(pin.offsetHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(viewport);
    ro.observe(pin);
    mq.addEventListener("change", measure);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", measure);
    };
  }, []);

  useEffect(() => {
    const outer = outerRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!outer || !pin || !track) return;
    if (!distance) {
      track.style.transform = "";
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      // While pinned, the gap between the sticky block and its container's top
      // is exactly how far we've scrolled through the pinned stretch.
      const scrolled = pin.getBoundingClientRect().top - outer.getBoundingClientRect().top;
      const progress = Math.min(1, Math.max(0, scrolled / distance));
      track.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [distance]);

  return (
    <section
      id="intro"
      ref={outerRef}
      className="relative mb-16 scroll-mt-24"
      style={distance ? { height: `calc(${pinHeight + distance}px + 25vh)` } : undefined}
    >
      <div
        ref={pinRef}
        className="md:sticky md:top-[8.5rem] flex flex-col md:flex-row md:items-start gap-10"
      >
        <div className="md:w-[340px] shrink-0">
          <h1 className="intro-slide-up font-serif text-3xl leading-none mb-2" style={{ animationDelay: "0.1s" }}>
            <span className="intro-reveal-x inline-block pr-[0.15em]" style={{ animationDelay: "0.15s" }}>
              Hi, I&apos;m Rowen<span className="italic">!</span>
            </span>
          </h1>
          <div className="intro-slide-up flex gap-6 text-xs tracking-wide text-neutral-500 mb-6" style={{ animationDelay: "0.35s" }}>
            <span>PHL / NYC</span>
            <span>CS AND DESIGN @ NEU</span>
          </div>
          <p className="intro-slide-up text-sm leading-relaxed text-neutral-700 max-w-[372px] mb-4" style={{ animationDelay: "0.45s" }}>
            I love making things!! You can find me designing products at{" "}
            <a
              href="https://generatenu.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-neutral-400 transition-colors"
            >
              Generate
            </a>, leading brand
            campaigns for <a href="#communities" className="underline underline-offset-2 hover:text-neutral-400 transition-colors">Kappa Theta Pi</a>,
            or hunting for the next best coffee spot in Boston.
          </p>
          <p className="intro-slide-up text-sm leading-relaxed text-neutral-700 max-w-[372px]" style={{ animationDelay: "0.55s" }}>
            When I&apos;m not spending hours on Figma, I enjoy fashion, reading, pottery, and finding hidden
            gem cafes!
          </p>

          <div id="experience" className="intro-slide-up mt-10 scroll-mt-24" style={{ animationDelay: "0.65s" }}>
            <h2 className="font-serif text-xl mb-4">Experience</h2>
            <div className="space-y-4">
              {experience.map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                    <Image src={item.logo} alt={item.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-serif text-lg leading-tight">{item.name}</p>
                    <div className="flex items-baseline gap-2 text-sm">
                      <span className="text-neutral-900">{item.role}</span>
                      <span className="text-neutral-500">{item.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={viewportRef} className="relative flex-1 min-w-0 overflow-x-auto md:overflow-hidden py-8 -my-8">
          <div ref={trackRef} className="flex items-center gap-[2%] will-change-transform">
            {introPhotos.map((photo, i) => (
              <div
                key={i}
                className="intro-slide-up relative shrink-0 w-[60%] md:w-[40%] aspect-[3/4] max-h-[75vh] overflow-hidden bg-neutral-200"
                style={{ animationDelay: `${0.2 + Math.min(i, 2) * 0.1}s` }}
              >
                {photo.src && (
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 60vw"
                    className={`object-cover ${photo.position ?? "object-center"}`}
                    priority={i === 0}
                  />
                )}
              </div>
            ))}
            <BusinessCard />
          </div>
        </div>
      </div>
    </section>
  );
}

// Last stop in the carousel. Fixed 3.5 × 2 in card ratio at any size, with the
// same pointer tilt and glow as the homepage clusters, minus the enlarge.
function BusinessCard() {
  const [tilt, setTilt] = useState<{ rx: number; ry: number; x: number; y: number } | null>(null);

  return (
    <div className="shrink-0 w-[calc(45%+2.5rem)] md:w-[calc(40%+2.5rem)] pr-10" style={{ perspective: "1400px" }}>
      <div
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width;
          const py = (e.clientY - rect.top) / rect.height;
          setTilt({ rx: (py - 0.5) * -24, ry: (px - 0.5) * 24, x: px * 100, y: py * 100 });
        }}
        onMouseLeave={() => setTilt(null)}
        className="relative w-full aspect-[7/4] overflow-hidden transition-[transform,filter] duration-250 ease-out"
        style={{
          transform: `rotateX(${tilt?.rx ?? 0}deg) rotateY(${tilt?.ry ?? 0}deg)`,
          filter: tilt
            ? "drop-shadow(0 0 10px rgba(255,255,255,0.6)) drop-shadow(0 16px 20px rgba(0,0,0,0.2))"
            : "drop-shadow(0 14px 18px rgba(0,0,0,0.09))",
        }}
      >
        <Image
          src="/images/about/business-card.png"
          alt="Rowen Latif business card: Product Designer, rowenlatif.com"
          fill
          sizes="(min-width: 768px) 25vw, 45vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 transition-opacity duration-250"
          style={{
            opacity: tilt ? 1 : 0,
            background: `radial-gradient(circle at ${tilt?.x ?? 50}% ${tilt?.y ?? 50}%, rgba(255,255,255,0.45), transparent 55%)`,
          }}
        />
      </div>
    </div>
  );
}
