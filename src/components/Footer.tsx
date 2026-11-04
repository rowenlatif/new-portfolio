"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HoverLabel, navLinks, scrollToTop } from "@/components/Nav";

const LIGHT_FOOTER_ROUTES = ["/about", "/creative"];

// Big script "Rowen Latif" in the bottom right. Hidden for now; flip to bring it back.
const SHOW_SCRIPT_NAME = false;

export default function Footer() {
  const pathname = usePathname();
  const isLight = LIGHT_FOOTER_ROUTES.includes(pathname);

  return (
    <footer className={`relative w-full mt-auto isolate ${isLight ? "bg-white" : "bg-olive"}`}>
      <div className={isLight ? "pt-28 sm:pt-32" : "pt-10 sm:pt-12"} aria-hidden />
      <div
        aria-hidden
        className={`dot-field -z-10 ${isLight ? "" : "dot-field-light"}`}
        style={{ "--dot-fade": "radial-gradient(ellipse 90% 100% at 50% 100%, black 15%, transparent 80%)" } as CSSProperties}
      />
      <div
        className={[
          "relative w-full px-10 sm:px-12 lg:px-16 pb-12 overflow-hidden",
          isLight ? "text-neutral-900" : "text-white",
        ].join(" ")}
      >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
      <div>
      {isLight && (
        <p className="font-sans not-italic font-normal text-2xl sm:text-3xl tracking-wide mb-3 text-neutral-900">
          ─────── *ੈ✩‧₊˚✧˖*°࿐
        </p>
      )}
      <p className="font-serif text-2xl sm:text-3xl mb-2">
        Let&apos;s keep in
        <span className="font-script font-normal text-[30px] sm:text-[38px] ml-6">touch</span>!
      </p>
      <div className="flex items-center gap-2.5 text-lg mb-10">
        <a
          href="mailto:latif.f@northeastern.edu"
          className={`group inline-flex items-center transition-colors ${isLight ? "hover:text-olive" : ""}`}
        >
          <span>Email</span>
          <span className="inline-block overflow-hidden w-0 opacity-0 ml-0 group-hover:w-5 group-hover:opacity-100 group-hover:ml-1 transition-all duration-200">
            ↗
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/rowen-latif/"
          target="_blank"
          rel="noopener noreferrer"
          className={`group inline-flex items-center transition-colors ${isLight ? "hover:text-olive" : ""}`}
        >
          <span>LinkedIn</span>
          <span className="inline-block w-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            ↗
          </span>
        </a>
      </div>
      <div className={["text-base space-y-0.5", isLight ? "text-neutral-500" : "text-white"].join(" ")}>
        <p>Rowen Latif © 2026</p>
        <p>Built with love and iced coffee</p>
      </div>
      </div>
      {/* Top-aligned with "Let's keep in touch"; on light pages that line sits below the ornament (3rem tall from sm up). */}
      <nav aria-label="Footer" className={`md:mr-6 md:self-start ${isLight ? "md:mt-12" : ""}`}>
        <p className={["text-xs tracking-wide mb-3", isLight ? "text-neutral-400" : "text-white/60"].join(" ")}>
          NAVIGATION
        </p>
        <ul className="space-y-1 text-lg">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={scrollToTop} aria-label={link.label} className="group inline-block">
                <HoverLabel text={link.label} scriptClassName={isLight ? "text-olive" : "text-white"} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {SHOW_SCRIPT_NAME && (
      <p
        aria-hidden
        className={[
          "font-script font-normal leading-[0.8] whitespace-nowrap text-[clamp(3rem,12vw,11rem)] self-end -mr-4 -mb-[calc(3rem+0.06em)]",
          isLight ? "text-neutral-900" : "text-white",
        ].join(" ")}
      >
        Rowen Latif
      </p>
      )}
      </div>
      </div>
    </footer>
  );
}
