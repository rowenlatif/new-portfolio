"use client";

import { usePathname } from "next/navigation";

const LIGHT_FOOTER_ROUTES = ["/about", "/creative"];

export default function Footer() {
  const pathname = usePathname();
  const isLight = LIGHT_FOOTER_ROUTES.includes(pathname);

  return (
    <footer
      className={[
        "w-full px-10 py-12 mt-auto",
        isLight ? "bg-white text-neutral-900" : "bg-olive text-white",
      ].join(" ")}
    >
      <p
        className={[
          "font-sans not-italic font-normal text-2xl sm:text-3xl tracking-wide mb-3",
          isLight ? "text-neutral-900" : "text-white",
        ].join(" ")}
      >
        ─────── *ੈ✩‧₊˚✧˖*°࿐
      </p>
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
    </footer>
  );
}
