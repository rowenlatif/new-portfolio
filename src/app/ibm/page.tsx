"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { setCursorLabel } from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import IbmTableToChart from "@/components/IbmTableToChart";
import IbmMissionCards from "@/components/IbmMissionCards";
import IbmBookshelf from "@/components/IbmBookshelf";

// IBM's brand blue; the next-project hover uses it too (text-[#0f62fe]).
const IBM_BLUE = "#0f62fe";

const tags = ["Web / Mobile", "Case Study", "Shipped"];

const meta = [
  { label: "Role", value: ["Sole Product Designer"] },
  { label: "Team", value: ["Project Manager", "Design Lead", "Engineers"] },
  { label: "Timeline", value: ["Aug 2026 – Dec 2026"] },
  { label: "Skills", value: ["Figma", "FigmaMake", "BOB"] },
];

// Two-by-two grid; each photo tilts slightly on hover. On phones the photos
// stack in a single column.
const photos = [
  {
    src: "/images/ibm/photo-1.jpg",
    alt: "Rowen taking a mirror selfie in an IBM office elevator",
    caption: "Elevator selfies are mandatory",
    position: "object-[37%_50%]",
    className: "sm:hover:-rotate-2",
  },
  {
    src: "/images/ibm/photo-2.jpg",
    alt: "Rowen with two fellow interns under the IBM sign",
    caption: "From fellow KTP brothers to my co-op co-workers!",
    className: "sm:hover:rotate-2",
  },
  {
    src: "/images/ibm/photo-3.jpg",
    alt: "Interns eating lunch together on the office terrace",
    caption: "Lunch breaks with the other design co-op girlies",
    className: "sm:hover:rotate-2",
  },
  {
    src: "/images/ibm/photo-4.jpg",
    alt: "IBM racing simulator in front of a large track display",
    caption: "Taking a quick break to test out the racing sim at the Innovation Studio",
    className: "sm:hover:-rotate-2",
  },
];

// Web3Forms emails each submission to rowenlatif@gmail.com. The access key is
// public by design; it can only send to that inbox.
const WEB3FORMS_KEY = "ce3054e0-d8c0-47a7-b16a-fb3b9ff4b686";

function AccessRequestForm() {
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  if (status === "sent") {
    return (
      <p className="text-sm text-neutral-800">
        Thanks! I&apos;ll be in touch soon.
      </p>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("sending");
        try {
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
              access_key: WEB3FORMS_KEY,
              subject: "IBM case study walkthrough request",
              from_name: "rowenlatif.com",
              email,
              replyto: email,
              message: `${email} would like a walkthrough of the IBM Maximo case study.\n\n${note.trim() || "No note"}`,
              botcheck: (e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement | null)?.checked ?? false,
            }),
          });
          const data = await res.json();
          setStatus(data.success ? "sent" : "error");
        } catch {
          setStatus("error");
        }
      }}
      className="flex flex-col gap-2"
    >
      {/* Honeypot: hidden from people, ticked by bots, rejected by Web3Forms */}
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
      <label htmlFor="access-email" className="sr-only">
        Your email
      </label>
      <input
        id="access-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
        className="w-full rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-600 transition-colors"
      />
      <label htmlFor="access-note" className="sr-only">
        Add a note (optional)
      </label>
      <textarea
        id="access-note"
        rows={2}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a note (optional)"
        className="w-full resize-none rounded-2xl border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-600 transition-colors"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="self-center rounded-full bg-neutral-900 px-5 py-2 text-sm text-white hover:bg-neutral-700 disabled:opacity-60 transition-colors"
      >
        {status === "sending" ? "Sending…" : "Request access"}
      </button>
      {status === "error" && (
        <p className="text-xs text-neutral-600">
          Something went wrong. You can email me directly at{" "}
          <a href="mailto:rowenlatif@gmail.com" className="underline">
            rowenlatif@gmail.com
          </a>
          .
        </p>
      )}
    </form>
  );
}


export default function IbmPage() {
  return (
    <main className="flex-1 px-6 sm:px-10 lg:pl-24 lg:pr-20 xl:pl-32 xl:pr-28 py-10">
      <ScrollProgress color={IBM_BLUE} />

      {/* Inset by the width of the contents column other case studies have (140px + 40px gap), on both sides */}
      <div id="top" className="lg:px-[180px]">
        {/* Hero banner — baby blue from the homepage thumbnail; multiply drops the GIF's off-white ground into it */}
        <div className="relative w-full h-[220px] sm:h-[320px] lg:h-[420px] rounded-sm overflow-hidden bg-gradient-to-b from-sky-100 to-sky-50 mb-10">
          <Image
            src="/images/ibm/eye-bee-m.gif"
            alt="Animated IBM logo drawn as an eye, a bee and the letter M"
            fill
            unoptimized
            priority
            className="object-cover mix-blend-multiply scale-125"
          />
        </div>

        {/* Title / meta */}
        <section className="mb-20">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="font-serif text-3xl mb-3">IBM Maximo AI Assistant</h1>
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
        <section className="pt-10 sm:pt-14 mb-32 sm:mb-40">
          <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-16 mb-12">
            <div className="md:w-[44%] shrink-0">
              <p className="text-xs tracking-wide text-[#0f62fe] mb-3">THE MISSION</p>
              <h2 className="font-serif text-2xl sm:text-3xl leading-snug text-balance">
                Transforming Maximo Assistant from flat tables into clear visual insights that help
                maintenance teams understand operational data faster.
              </h2>
            </div>
            {/* Tables into charts, illustrated with made-up data in Carbon's style.
                md:pt-7 clears THE MISSION label so it starts level with the heading. */}
            <div className="md:w-[48%] md:pt-7">
              <IbmTableToChart />
            </div>
          </div>

          <IbmMissionCards />
        </section>

        {/* Reading */}
        <section className="mb-32 sm:mb-40">
          <div className="max-w-2xl mb-10">
            <p className="text-xs tracking-wide text-[#0f62fe] mb-3">ON MY DESK</p>
            <h2 className="font-serif text-2xl sm:text-3xl leading-snug text-balance mb-6">
              Learning the language of data visualization
            </h2>
            <p className="text-sm text-neutral-500 leading-relaxed text-pretty">
              I came into this role with no background in data visualization. Alongside my manager and
              everyone at IBM who&apos;s been so generous with their time, Edward R. Tufte&apos;s{" "}
              <em>The Visual Display of Quantitative Information</em> gave me the fundamentals, and the
              vocabulary to put what I was seeing into words.
            </p>
          </div>

          <IbmBookshelf />
        </section>

        {/* Locked preview — the real work stays private until we talk */}
        <section className="mb-32 sm:mb-40">
          {/* min-h keeps room for the form wherever the image's own ratio is too short for it */}
          <div className="relative w-full max-w-5xl mx-auto min-h-[520px] sm:aspect-[2624/1600] rounded-xl border border-neutral-200 overflow-hidden">
            <Image
              src="/images/ibm/dashboard.png"
              alt=""
              aria-hidden
              fill
              sizes="(min-width: 1024px) 70vw, 90vw"
              className="object-cover blur-xl scale-110 select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-white/50 flex items-center justify-center px-6">
              <div className="w-full max-w-md text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)] ring-1 ring-black/5">
                  <svg
                    aria-hidden
                    viewBox="0 0 24 24"
                    className="h-7 w-7 text-neutral-800"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
                    <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
                    <circle cx="12" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl mb-4">Want the full walkthrough?</h2>
                <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                  This work is locked for now. Leave your email if you&apos;d like to hear more, and
                  I&apos;d be happy to walk you through everything.
                </p>
                <AccessRequestForm />
              </div>
            </div>
          </div>
        </section>

        {/* In progress */}
        <section className="mb-24">
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
            <p className="text-xs tracking-wide text-[#0f62fe] mb-3">IN THE WORKS</p>
            <h2 className="font-serif text-2xl sm:text-3xl mb-4">A look inside my time at IBM</h2>
            <p className="text-sm text-neutral-500 leading-relaxed">
              The full case study is still in progress while my work at IBM continues. In the meantime,
              here are a few moments from my time on the team so far.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {photos.map((photo, i) => (
              <figure
                key={photo.src}
                className={`relative bg-white p-3 pb-0 rounded-md shadow-[0_12px_30px_-10px_rgba(0,0,0,0.25)] transition-[rotate] duration-300 ease-out ${photo.className}`}
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

        {/* Next in collection */}
        <section className="mb-10 py-10 flex justify-center">
          <Link
            href="/selfserve"
            className="group inline-flex items-stretch gap-4 w-fit rounded-[3px] border-[0.5px] border-neutral-200 bg-white pr-5 pb-3 transition-[transform,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-neutral-500 hover:rotate-1"
          >
            <div className="flex flex-col justify-center gap-2 py-[60px] pl-[50px]">
              <p className="text-xs text-neutral-400">SELFSERVE, 2026</p>
              <div className="relative">
                <h3 className="font-serif text-lg text-neutral-900">
                  AI-Powered Operations Platform
                  <br />
                  for Boutique Hotels
                </h3>
                <h3
                  aria-hidden
                  className="absolute inset-0 font-serif text-lg text-[#0f62fe] [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-500 ease-out group-hover:[clip-path:inset(0_0%_0_0)]"
                >
                  AI-Powered Operations Platform
                  <br />
                  for Boutique Hotels
                </h3>
              </div>
              <p className="text-xs text-neutral-500">Case Study / UX</p>
            </div>
            <div className="relative w-[201.5px] h-[206px] shrink-0 self-center">
              <Image
                src="/images/card-selfserve.png"
                alt="SelfServe preview"
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
