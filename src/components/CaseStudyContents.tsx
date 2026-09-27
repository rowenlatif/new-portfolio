"use client";

import { useEffect, useState } from "react";

export type ContentsItem = { id: string; label: string };

/* Sticky table of contents that highlights whichever section the reader is in.
   Shared by the case studies; each passes its own accent class. */
export default function CaseStudyContents({
  items,
  activeClassName,
}: {
  items: ContentsItem[];
  activeClassName: string;
}) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = items
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="sticky top-[var(--sidebar-top)] transition-[top] duration-300 ease-out text-xs tracking-wide text-neutral-400 space-y-3">
      <p className="text-neutral-900 mb-4">CONTENTS.</p>
      {items.map((c) => (
        <a
          key={c.id}
          href={`#${c.id}`}
          className={`block transition-colors hover:text-neutral-900 ${
            activeSection === c.id ? activeClassName : ""
          }`}
        >
          {c.label}
        </a>
      ))}
      <a href="#top" className="block pt-6 hover:text-neutral-900">
        Back to the Top
      </a>
    </nav>
  );
}
