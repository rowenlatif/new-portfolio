"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ScrollProgress from "@/components/ScrollProgress";

const OLIVE = "#6a7040";

const contents = [
  { id: "problem", href: "#problem", label: "01 Problem" },
  { id: "solution", href: "#solution", label: "02 Solution" },
  { id: "features", href: "#features", label: "03 Features" },
  { id: "outcome", href: "#outcome", label: "04 Outcome" },
  { id: "reflection", href: "#reflection", label: "05 Reflection" },
];

const tags = ["Web / Mobile", "Case Study", "Shipped"];

const meta = [
  { label: "Role", value: ["Product Designer"] },
  { label: "Team", value: ["Project Manager", "Design & Tech Leads", "4 Designers"] },
  { label: "Timeline", value: ["Jan 2026 – Apr 2026"] },
  { label: "Skills", value: ["Figma", "FigmaMake", "Adobe AfterEffects"] },
];

const solutionTiles = [
  {
    title: "Cross-Platform Workflows",
    video: "/videos/selfserve/cross-platform-workflows.mp4",
    aspect: "1422/1584",
  },
  {
    title: "Search & Filtering",
    video: "/videos/selfserve/search-filtering.mp4",
    aspect: "1266/446",
  },
  {
    title: "AI Task Creation",
    video: "/videos/selfserve/ai-task-creation.mp4",
    aspect: "1430/962",
  },
];

const features = [
  {
    number: "01",
    title: "Smart Task Creation and Assignment",
    video: "https://framerusercontent.com/assets/UZjqm30TGWC36FPqD3WX4UEkHE.mp4",
    img: null as string | null,
    aspect: "656/418",
  },
  {
    number: "02",
    title: "Real-Time Staff Analytics",
    video: null as string | null,
    img: "https://framerusercontent.com/images/XVyT65B5av8rAvjYxtT8gTffI.png",
    aspect: "2880/2048",
  },
  {
    number: "03",
    title: "Simple Filtering",
    video: null as string | null,
    img: "https://framerusercontent.com/images/3T3y7NbgUDY0vOcKaZbCy7jPR3E.png",
    aspect: "1440/1024",
  },
];

const beforePoints = ["Placeholder issue one", "Placeholder issue two", "Placeholder issue three"];
const afterPoints = ["Placeholder improvement one", "Placeholder improvement two", "Placeholder improvement three"];

const reflections = [
  {
    number: "01",
    title: "Designing for non-tech users",
    body: "Hotel staff move fast. I learned to test with real employees, not just designers, and prioritize speed over features.",
  },
  {
    number: "02",
    title: "Too many options overwhelm users",
    body: "Too many customization options created decision paralysis. Finding the right defaults was harder than designing the features themselves.",
  },
  {
    number: "03",
    title: "With more time…",
    body: "I'd explore predictive scheduling, mobile staff views, and smarter analytics that drive real decisions.",
  },
];

export default function SelfServePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = contents
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
  }, []);

  return (
    <main className="flex-1 px-6 sm:px-10 lg:px-16 py-10 grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-10">
      <ScrollProgress color={OLIVE} />
      <aside className="hidden lg:block">
        <nav className="sticky top-[var(--sidebar-top)] transition-[top] duration-300 ease-out text-xs tracking-wide text-neutral-400 space-y-3">
          <p className="text-neutral-900 mb-4">CONTENTS.</p>
          {contents.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className={`block transition-colors hover:text-neutral-900 ${
                activeSection === c.id ? "text-olive font-medium" : ""
              }`}
            >
              {c.label}
            </a>
          ))}
          <a href="#top" className="block pt-6 hover:text-neutral-900">
            Back to the Top
          </a>
        </nav>
      </aside>

      <div id="top">
        {/* Hero banner */}
        <div className="relative w-full h-[220px] sm:h-[320px] lg:h-[420px] rounded-sm overflow-hidden bg-[#1f3a1f] mb-10">
          <video
            src="/videos/selfserve/header.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Title / meta */}
        <section className="mb-20">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="font-serif text-3xl mb-3">SelfServe</h1>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <a
                href="#"
                className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-600 hover:text-neutral-900 hover:border-neutral-400 transition-colors"
              >
                Visit GitHub →
              </a>
              <a
                href="#"
                className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-600 hover:text-neutral-900 hover:border-neutral-400 transition-colors"
              >
                Visit Demo →
              </a>
            </div>
          </div>

          <p className="text-sm text-neutral-500 leading-relaxed max-w-3xl mb-10">
            Boutique hotels juggle radios, sticky notes, and fragmented legacy systems to coordinate
            operations. Guest requests get lost, tasks fall through the cracks, and managers have no
            visibility into what&apos;s actually happening across the property. Staff waste time hunting
            down information that should be instantly accessible.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-neutral-200 pt-8">
            {meta.map((m) => (
              <div key={m.label}>
                <p className="text-xs text-neutral-400 mb-2">{m.label}</p>
                <div className="space-y-0.5">
                  {m.value.map((v) => (
                    <p key={v} className="text-sm text-neutral-900">
                      {v}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROBLEM */}
        <section id="problem" className="mb-24 max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-wide text-olive mb-3">PROBLEM</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-4">
            Hotel task management is outdated, slow, and clunky
          </h2>
          <p className="text-sm text-neutral-500 leading-relaxed">
            Boutique hotels juggle radios, sticky notes, and disconnected systems. Requests fall through
            the cracks, managers lack visibility, and staff waste time hunting for information that
            should be instant.
          </p>
        </section>

        {/* SOLUTION */}
        <section id="solution" className="mb-24">
          <p className="text-xs tracking-wide text-olive mb-3">SOLUTION</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-4 max-w-2xl">
            AI-powered task hub transforming hotel operations into real-time visibility
          </h2>
          <p className="text-sm text-neutral-500 leading-relaxed max-w-2xl mb-10">
            Guest requests automatically become trackable tasks, route intelligently across departments,
            and give managers real-time visibility—enterprise-grade operations without the complexity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {solutionTiles.map((tile, i) => (
              <div
                key={tile.title}
                className={`rounded-lg border border-neutral-200 bg-white p-6 flex flex-col gap-4 overflow-hidden ${
                  i === 0 ? "sm:row-span-2" : ""
                }`}
              >
                <h3 className="font-serif text-lg">{tile.title}</h3>
                <video
                  src={tile.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-md object-cover"
                  style={{ aspectRatio: tile.aspect }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="mb-24">
          <p className="text-xs tracking-wide text-olive mb-3">FEATURES</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-4 max-w-2xl">
            AI-powered task hub transforming hotel operations into real-time visibility
          </h2>
          <p className="text-sm text-neutral-500 leading-relaxed max-w-2xl mb-12">
            I have streamlined every step of hotel operations, from the moment a guest makes a request to
            the second it&apos;s resolved, built for the speed of hospitality.
          </p>

          <div className="space-y-20">
            {features.map((f) => (
              <div
                key={f.number + f.title}
                className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 items-start"
              >
                <div className="rounded-lg border border-neutral-300 px-4 py-2 text-sm text-neutral-700 w-fit">
                  {f.number} {f.title}
                </div>
                {f.video ? (
                  <video
                    src={f.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.25)] object-cover"
                    style={{ aspectRatio: f.aspect }}
                  />
                ) : f.img ? (
                  <div
                    className="relative w-full rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
                    style={{ aspectRatio: f.aspect }}
                  >
                    <Image src={f.img} alt={f.title} fill className="object-cover" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {/* IDEATION */}
        <section id="ideation" className="mb-24">
          <p className="text-xs tracking-wide text-olive mb-3">IDEATION</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-4">Design is an iterative process</h2>
          <p className="text-sm text-neutral-500 leading-relaxed max-w-2xl mb-10">
            I moved from manual bulk task creation to AI-assisted chat with live preview, allowing
            managers describe tasks conversationally and see results generate instantly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-neutral-400 mb-2 tracking-wide text-center">BEFORE</p>
              <div className="relative w-full h-[280px] sm:h-[360px] rounded-md overflow-hidden">
                <div className="absolute inset-x-0 top-0" style={{ height: "calc(100% + 40px)" }}>
                  <Image
                    src="https://framerusercontent.com/images/OC0xnGiGiRvCmAOVAnUccSKfkII.png"
                    alt="Before redesign"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {beforePoints.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#E8998D] text-white text-[10px] shrink-0">
                      ✕
                    </span>
                    <span className="text-base text-black">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-neutral-400 mb-2 tracking-wide text-center">AFTER</p>
              <div className="relative w-full h-[280px] sm:h-[360px] rounded-md overflow-hidden">
                <div className="absolute inset-x-0 top-0" style={{ height: "calc(100% + 40px)" }}>
                  <Image
                    src="https://framerusercontent.com/images/osnCfDgwg2efDTECUgMVrTHk.png"
                    alt="After redesign"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {afterPoints.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#9CC5A1] text-white text-sm shrink-0">
                      ✓
                    </span>
                    <span className="text-base text-black">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* OUTCOME */}
        <section id="outcome" className="mb-24 max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-wide text-olive mb-3">OUTCOME</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-4">
            So, what did all this work accomplish?
          </h2>
          <p className="text-sm text-neutral-500 leading-relaxed">
            I designed the complete staff-side platform from 0-1, now launching across 5 beta properties
            with 15+ hotels in the pipeline. By replacing radios, spreadsheets, and fragmented systems
            with unified AI-powered workflows, we&apos;re giving boutique hotels enterprise-grade
            operations without the unnecessary complexity.
          </p>
        </section>

        {/* REFLECTIONS */}
        <section id="reflection" className="mb-24">
          <p className="text-xs tracking-wide text-olive mb-3">REFLECTIONS</p>
          <h2 className="font-serif text-2xl sm:text-3xl mb-4">Mistakes, Metrics, and Moving Forward…</h2>
          <p className="text-sm text-neutral-500 leading-relaxed max-w-2xl mb-10">
            Building for real hotel staff taught me lessons no design course ever could.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {reflections.map((r) => (
              <div
                key={r.number}
                className="rounded-lg border border-neutral-200 p-5"
              >
                <p className="text-xs text-neutral-400 mb-3">{r.number}</p>
                <h3 className="font-serif text-base mb-2">{r.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>

          <div className="relative w-full h-[260px] sm:h-[380px] rounded-md overflow-hidden">
            <Image
              src="https://framerusercontent.com/images/QsN8SwyBSZ4H53db1tLF2Sp4dhY.png"
              alt="The SelfServe team"
              fill
              className="object-cover"
              loading="eager"
            />
            <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/90">
              The SelfServe team says hello!
            </p>
          </div>
        </section>

        {/* NEXT */}
        <section className="mb-10 py-10 flex justify-center">
          <Link
            href="/cinecircle"
            className="group inline-flex items-stretch gap-4 w-fit rounded-[3px] border-[0.5px] border-neutral-200 bg-white pr-5 pb-3 transition-[transform,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-neutral-500 hover:rotate-1"
          >
            <div className="flex flex-col justify-center gap-2 py-[60px] pl-[50px]">
              <p className="text-xs text-neutral-400">CINECIRCLE, 2025</p>
              <div className="relative">
                <h3 className="font-serif text-lg text-neutral-900">
                  Designing how South Asian Audiences
                  <br />
                  express film discussions
                </h3>
                <h3
                  aria-hidden
                  className="absolute inset-0 font-serif text-lg text-olive [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-500 ease-out group-hover:[clip-path:inset(0_0%_0_0)]"
                >
                  Designing how South Asian Audiences
                  <br />
                  express film discussions
                </h3>
              </div>
              <p className="text-xs text-neutral-500">Case Study / UX</p>
            </div>
            <div className="relative w-[201.5px] h-[206px] shrink-0 self-center">
              <Image
                src="https://framerusercontent.com/images/ZLt8SqQeZovOg8ivf9lrFa3RfQ.png"
                alt="CineCircle preview"
                fill
                className="object-contain"
                loading="eager"
              />
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
