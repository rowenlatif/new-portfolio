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

export default function Nav() {
  const [hidden, setHidden] = useState(false);
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

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 w-full px-10 py-4 flex items-center justify-between",
        "bg-white/60 backdrop-blur-md border-b border-white/70 shadow-[0_1px_0_rgba(255,255,255,0.8)]",
        "transition-transform duration-300 ease-out",
        hidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
    >
      <Link href="/" className="shrink-0">
        <Image src="/nav-mark.png" alt="Rowen Latif" width={56} height={45} className="opacity-80" />
      </Link>
      <nav className="flex items-center gap-6 sm:gap-10 text-base text-neutral-500">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition-all hover:font-script hover:font-normal hover:text-olive hover:text-xl"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
