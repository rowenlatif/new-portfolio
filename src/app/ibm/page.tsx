"use client";

import Image from "next/image";
import { setCursorLabel } from "@/components/CustomCursor";

const tags = ["Web / Mobile", "Case Study", "Shipped"];

const meta = [
  { label: "Role", value: ["Product Designer"] },
  { label: "Team", value: ["Project Manager", "Design & Tech Leads", "Engineers"] },
  { label: "Timeline", value: ["Aug 2026 – Dec 2026"] },
  { label: "Skills", value: ["Figma", "FigmaMake"] },
];

// Overlapping two-row collage. Offsets only apply from sm up; on phones the
// photos stack in a single column.
const photos = [
  {
    src: "/images/ibm/photo-1.jpg",
    alt: "Rowen taking a mirror selfie in an IBM office elevator",
    caption: "Elevator selfies are mandatory",
    position: "object-[37%_50%]",
    className: "sm:-rotate-3 sm:hover:-rotate-5 sm:translate-x-[2%] sm:translate-y-[5%]",
  },
  {
    src: "/images/ibm/photo-2.jpg",
    alt: "Rowen with two fellow interns under the IBM sign",
    caption: "From fellow KTP brothers to my co-op co-workers!",
    className: "sm:rotate-2 sm:hover:rotate-4 sm:-translate-x-[1%]",
  },
  {
    src: "/images/ibm/photo-3.jpg",
    alt: "Interns eating lunch together on the office terrace",
    caption: "Lunch breaks with the other design co-op girlies",
    className: "sm:rotate-2 sm:hover:rotate-4 sm:translate-x-[6%] sm:translate-y-[6%]",
  },
  {
    src: "/images/ibm/photo-4.jpg",
    alt: "IBM racing simulator in front of a large track display",
    caption: "Taking a quick break to test out the racing sim at the Innovation Studio",
    className: "sm:-rotate-2 sm:hover:-rotate-4 sm:translate-x-[1%] sm:translate-y-[1%]",
  },
];

// Later photos sit on top where they overlap.
const STACK = ["z-[1]", "z-[2]", "z-[3]", "z-[4]"];

export default function IbmPage() {
  return (
    <main className="flex-1 px-6 sm:px-10 lg:pl-24 lg:pr-20 xl:pl-32 xl:pr-28 py-10 grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-10">
      {/* Empty until there are sections to list; keeps the same content width as SelfServe. */}
      <aside className="hidden lg:block" />

      <div id="top">
        {/* Hero banner — baby blue from the homepage thumbnail */}
        <div className="w-full h-[220px] sm:h-[320px] lg:h-[420px] rounded-sm bg-gradient-to-b from-sky-100 to-sky-50 mb-10" />

        {/* Title / meta */}
        <section className="mb-20">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="font-serif text-3xl mb-3">IBM Maximo AI</h1>
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
            <span
              role="link"
              aria-disabled="true"
              onMouseEnter={() => setCursorLabel("Coming soon!")}
              onMouseLeave={() => setCursorLabel(null)}
              className="rounded-full border border-neutral-300 px-4 py-1.5 text-sm text-neutral-400 select-none"
            >
              Visit Demo →
            </span>
          </div>

          <p className="text-sm text-neutral-500 leading-relaxed max-w-3xl mb-10">
            Designing agentic AI experiences for asset management.
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

        {/* Mission */}
        <section className="py-10 sm:py-14 mb-32 sm:mb-40 flex flex-col md:flex-row md:justify-between gap-8 md:gap-16">
          <div className="md:w-[38%] shrink-0">
            <p className="text-xs tracking-wide text-neutral-400 mb-3">THE MISSION</p>
            <h2 className="font-serif text-2xl sm:text-3xl leading-snug text-balance">
              Transforming Maximo Assistant from flat tables into clear visual insights that help
              maintenance teams understand operational data faster.
            </h2>
          </div>
          <div className="md:w-[48%] space-y-4 text-sm text-neutral-500 leading-relaxed text-pretty">
            <p>
              As the sole Product Designer on data visualization for IBM Maximo, I owned the experience
              end to end, from early exploration through final handoff to engineering. The goal was to
              help enterprise maintenance teams make sense of their operational data at a glance instead
              of digging through rows of numbers to find what mattered.
            </p>
            <p>
              Maximo Assistant answers questions in natural language, but its responses often came back
              as dense tables. I designed how those answers become charts that people can open up and
              explore, with a clear path back to the records underneath, so that AI-generated insights
              feel trustworthy enough to act on.
            </p>
            <p>
              Much of the work happened beyond individual screens. Partnering closely with engineering and
              product, I shaped the rules behind the system itself: when an answer should become a chart
              rather than a table, and how visualization patterns hold up as the questions and data behind
              them change.
            </p>
          </div>
        </section>

        {/* Reading */}
        <section className="mb-32 sm:mb-40 flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-16">
          <div className="md:w-[52%] max-w-md">
            <p className="text-xs tracking-wide text-neutral-400 mb-3">ON MY DESK</p>
            <h2 className="font-serif text-2xl sm:text-3xl leading-snug text-balance mb-6">
              Learning the language of data visualization
            </h2>
            <div className="space-y-4 text-sm text-neutral-500 leading-relaxed text-pretty">
              <p>
                I came into this role with no background in data visualization. Besides my manager and
                everyone at IBM who&apos;s been so generous with their time, one of my biggest resources
                has been Edward R. Tufte&apos;s <em>The Visual Display of Quantitative Information</em>.
              </p>
              <p>
                It gave me the fundamentals to build on and, just as important, the vocabulary to put
                what I was seeing into words.
              </p>
            </div>
          </div>
          <div className="md:w-[40%] flex justify-center">
            <Image
              src="/images/ibm/tufte-cover.jpg"
              alt="Cover of The Visual Display of Quantitative Information by Edward R. Tufte"
              width={407}
              height={491}
              sizes="(min-width: 768px) 320px, 260px"
              className="w-[260px] md:w-[320px] h-auto rounded-lg shadow-[0_8px_24px_-8px_rgba(0,0,0,0.12)]"
            />
          </div>
        </section>

        {/* In progress */}
        <section className="mb-24">
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <p className="text-xs tracking-wide text-neutral-400 mb-3">IN THE WORKS</p>
            <h2 className="font-serif text-2xl sm:text-3xl mb-4">This case study is still being written</h2>
            <p className="text-sm text-neutral-500 leading-relaxed">
              I&apos;m currently designing at IBM, so the full story isn&apos;t ready to share just yet.
              In the meantime, here are a few snapshots from my time there so far!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-6 sm:gap-y-4 max-w-5xl mx-auto">
            {photos.map((photo, i) => (
              <figure
                key={photo.src}
                className={`relative bg-white p-3 pb-0 rounded-md shadow-[0_12px_30px_-10px_rgba(0,0,0,0.25)] transition-[rotate] duration-300 ease-out ${STACK[i]} ${photo.className}`}
              >
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 640px) 45vw, 90vw"
                    className={`object-cover ${photo.position ?? "object-center"}`}
                    priority={i < 2}
                  />
                </div>
                <figcaption className="py-3 text-center text-xs text-neutral-500">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
