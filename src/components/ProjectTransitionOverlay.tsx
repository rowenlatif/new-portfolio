"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type TransitionDetail = {
  rect: { top: number; left: number; width: number; height: number };
  color: string;
  radius: number;
  href: string;
};

const EXPAND_MS = 550;
const SETTLE_MS = 150;
const FADE_MS = 400;

export default function ProjectTransitionOverlay() {
  const router = useRouter();
  const overlayRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onTrigger = (e: Event) => {
      const detail = (e as CustomEvent<TransitionDetail>).detail;
      const el = overlayRef.current;
      if (!el || !detail) return;

      const { rect, color, radius, href } = detail;

      setVisible(true);
      el.style.transition = "none";
      el.style.backgroundColor = color;
      el.style.opacity = "1";
      el.style.transformOrigin = "0 0";
      el.style.borderRadius = `${radius}px`;
      el.style.transform = `translate(${rect.left}px, ${rect.top}px) scale(${rect.width / window.innerWidth}, ${rect.height / window.innerHeight})`;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!overlayRef.current) return;
          overlayRef.current.style.transition = `transform ${EXPAND_MS}ms cubic-bezier(0.65,0,0.35,1), border-radius ${EXPAND_MS}ms cubic-bezier(0.65,0,0.35,1)`;
          overlayRef.current.style.transform = "translate(0px, 0px) scale(1, 1)";
          overlayRef.current.style.borderRadius = "0px";
        });
      });

      window.setTimeout(() => {
        router.push(href);
      }, EXPAND_MS);

      window.setTimeout(() => {
        if (overlayRef.current) {
          overlayRef.current.style.transition = `opacity ${FADE_MS}ms ease-out`;
          overlayRef.current.style.opacity = "0";
        }
      }, EXPAND_MS + SETTLE_MS);

      window.setTimeout(() => {
        setVisible(false);
      }, EXPAND_MS + SETTLE_MS + FADE_MS);
    };

    window.addEventListener("project-transition", onTrigger);
    return () => window.removeEventListener("project-transition", onTrigger);
  }, [router]);

  return (
    <div
      ref={overlayRef}
      className="fixed top-0 left-0 z-[200] pointer-events-none"
      style={{ width: "100vw", height: "100vh", opacity: visible ? undefined : 0 }}
    />
  );
}

export function triggerProjectTransition(el: HTMLElement, color: string, href: string) {
  const rect = el.getBoundingClientRect();
  const radius = parseFloat(getComputedStyle(el).borderRadius) || 0;
  window.dispatchEvent(
    new CustomEvent<TransitionDetail>("project-transition", {
      detail: {
        rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
        color,
        radius,
        href,
      },
    })
  );
}
