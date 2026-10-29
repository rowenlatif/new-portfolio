"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/creative", label: "creative" },
];

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

// Hover: the sans word blurs away as the script version blurs into focus in the same spot.
// Both are stacked in one grid cell so the nav doesn't shift when the font changes.
const DISSOLVE =
  "col-start-1 row-start-1 transition-[opacity,filter,scale] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none";

function HoverLabel({ text }: { text: string }) {
  return (
    <span className="inline-grid place-items-center">
      <span aria-hidden className={`${DISSOLVE} group-hover:opacity-0 group-hover:blur-[3px] group-hover:scale-95`}>
        {text}
      </span>
      <span
        aria-hidden
        className={`${DISSOLVE} font-script font-normal text-olive opacity-0 blur-[3px] scale-105 group-hover:opacity-100 group-hover:blur-none group-hover:scale-100`}
      >
        {text}
      </span>
    </span>
  );
}

const LINK_DELAYS = ["0.5s", "0.56s", "0.62s"];

// Pages where the nav stays visible instead of hiding on scroll down.
const ALWAYS_SHOWN = ["/about"];

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();
  const alwaysShown = ALWAYS_SHOWN.includes(pathname);

  useEffect(() => {
    lastY.current = window.scrollY;
    if (alwaysShown) {
      setHidden(false);
      document.documentElement.style.setProperty("--sidebar-top", "6rem");
      return;
    }
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      const nextHidden = goingDown && y > 96;
      setHidden(nextHidden);
      document.documentElement.style.setProperty("--sidebar-top", nextHidden ? "2.5rem" : "6rem");
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysShown]);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 w-full px-10 py-4 flex items-center justify-between",
        "bg-white/60 backdrop-blur-md border-b border-white/70 shadow-[0_1px_0_rgba(255,255,255,0.8)]",
        "transition-[transform,opacity] duration-400 ease-out",
        !mounted ? "-translate-y-full opacity-0" : hidden ? "-translate-y-full opacity-100" : "translate-y-0 opacity-100",
      ].join(" ")}
    >
      <Link href="/" onClick={scrollToTop} className="shrink-0 intro-fade-up" style={{ animationDelay: "0.4s" }}>
        <Image src="/nav-mark.png" alt="Rowen Latif" width={56} height={45} className="opacity-80" />
      </Link>
      <nav className="flex items-center gap-6 sm:gap-10 text-base text-neutral-500">
        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={scrollToTop}
            aria-label={link.label}
            className="group intro-fade-up"
            style={{ animationDelay: LINK_DELAYS[i] }}
          >
            <HoverLabel text={link.label} />
          </Link>
        ))}
      </nav>
    </header>
  );
}
