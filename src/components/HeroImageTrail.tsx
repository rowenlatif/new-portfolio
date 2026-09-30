"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { introPhotos } from "@/components/AboutIntro";

// Small cards that pop in along the cursor path and fade away. Attaches to its
// parent element, so drop it inside the area that should have the effect, and
// mark anything that should be left alone (like the hero text) with
// data-trail-exclude. Uses the About intro photos, picked at random.
const SHAPES = [
  { w: 88, h: 112 },
  { w: 120, h: 84 },
  { w: 96, h: 96 },
  { w: 76, h: 104 },
  { w: 112, h: 76 },
];

const SPAWN_DISTANCE = 170; // px of cursor travel between cards
const TOP_CLEARANCE = 112; // keep cards clear of the fixed nav bar (80px) with some room
const LIFETIME_MS = 1100;
const MAX_CARDS = 10;

const PHOTOS = introPhotos.filter((p): p is typeof p & { src: string } => Boolean(p.src));

type Card = { id: number; x: number; y: number; w: number; h: number; rotate: number; photo: number };

export default function HeroImageTrail() {
  const layerRef = useRef<HTMLDivElement>(null);
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const area = layerRef.current?.parentElement;
    if (!area) return;
    // Touch devices don't have a hover path to follow.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let last: { x: number; y: number } | null = null;
    let nextId = 0;
    let shapeIndex = 0;
    let lastPhoto = -1;

    const onMove = (e: PointerEvent) => {
      if ((e.target as Element).closest("[data-trail-exclude]")) {
        last = null;
        return;
      }
      const rect = area.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (last && Math.hypot(x - last.x, y - last.y) < SPAWN_DISTANCE) return;
      const shape = SHAPES[shapeIndex % SHAPES.length];
      if (y - shape.h / 2 < TOP_CLEARANCE) return;
      last = { x, y };
      shapeIndex++;

      // Random photo, never the same one twice in a row.
      let photo = Math.floor(Math.random() * PHOTOS.length);
      if (PHOTOS.length > 1 && photo === lastPhoto) photo = (photo + 1) % PHOTOS.length;
      lastPhoto = photo;

      const card = { id: nextId++, x, y, ...shape, rotate: Math.random() * 16 - 8, photo };
      setCards((prev) => [...prev.slice(-(MAX_CARDS - 1)), card]);
      window.setTimeout(() => setCards((prev) => prev.filter((c) => c.id !== card.id)), LIFETIME_MS);
    };
    const onLeave = () => {
      last = null;
    };

    area.addEventListener("pointermove", onMove);
    area.addEventListener("pointerleave", onLeave);
    return () => {
      area.removeEventListener("pointermove", onMove);
      area.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={layerRef} aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {cards.map((card) => (
        <div
          key={card.id}
          className="hero-trail-card absolute rounded-sm overflow-hidden bg-neutral-200 shadow-md"
          style={{
            left: card.x - card.w / 2,
            top: card.y - card.h / 2,
            width: card.w,
            height: card.h,
            rotate: `${card.rotate}deg`,
            animationDuration: `${LIFETIME_MS}ms`,
          }}
        >
          <Image
            src={PHOTOS[card.photo].src}
            alt=""
            fill
            sizes="128px"
            className={`object-cover ${PHOTOS[card.photo].position ?? "object-center"}`}
          />
        </div>
      ))}
    </div>
  );
}
