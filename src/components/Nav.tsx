"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "home" },
  { href: "/#featured-works", label: "projects" },
  { href: "/about", label: "about" },
  { href: "/creative", label: "creative" },
];

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

const LINK_DELAYS = ["0.5s", "0.56s", "0.62s", "0.68s"];

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
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
  }, []);

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
            onClick={link.label === "projects" ? undefined : scrollToTop}
            className="intro-fade-up transition-colors hover:font-script hover:font-normal hover:text-olive duration-200"
            style={{ animationDelay: LINK_DELAYS[i] }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
