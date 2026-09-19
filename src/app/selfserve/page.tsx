import Image from "next/image";
import Link from "next/link";

const contents = [
  { href: "#problem", label: "01 Problem" },
  { href: "#solution", label: "02 Solution" },
  { href: "#features", label: "03 Features" },
  { href: "#outcome", label: "04 Outcome" },
  { href: "#reflection", label: "05 Reflection" },
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
    title: "AI Task Creation",
    caption: "Type naturally, skip all the fields",
    img: "https://framerusercontent.com/images/Q1SwwjVCZk4jnsKL8ln6DZhbWM.png",
  },
  {
    title: "Search & Filtering",
    caption: "Find tasks fast and zero in on what matters",
    img: "https://framerusercontent.com/images/4kAjzLHAwArOEAMloNXpe0nFXVg.png",
  },
  {
    title: "Cross-Platform Workflows",
    caption: "Staff on mobile, managers on desktop",
    img: "https://framerusercontent.com/images/MQ3FOrGsscpi0mEQui2ZrnWEDo.png",
  },
];

const features = [
  {
    number: "01",
    title: "Smart Task Creation and Assignment",
    img: null,
  },
  {
    number: "02",
    title: "Real-Time Staff Analytics",
    img: "https://framerusercontent.com/images/XVyT65B5av8rAvjYxtT8gTffI.png",
  },
  {
    number: "02",
    title: "Simple Filtering",
    img: "https://framerusercontent.com/images/3T3y7NbgUDY0vOcKaZbCy7jPR3E.png",
  },
];

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
  return (
    <main className="flex-1 px-6 sm:px-10 lg:px-16 py-10 grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-10">
      <aside className="hidden lg:block">
        <nav className="sticky top-[var(--sidebar-top)] transition-[top] duration-300 ease-out text-xs tracking-wide text-neutral-400 space-y-3">
          <p className="text-neutral-900 mb-4">CONTENTS.</p>
          {contents.map((c) => (
            <a key={c.href} href={c.href} className="block hover:text-neutral-900">
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
          <Image
            src="https://framerusercontent.com/images/zeTGwGHTBBTm9j9ZWkX44E6w.png"
            alt="SelfServe product screenshots"
            fill
            className="object-cover"
            priority
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
        <section id="problem" className="mb-24 max-w-3xl">
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {solutionTiles.map((tile) => (
              <div
                key={tile.title}
                className="rounded-lg bg-[#dcebe0] p-6 flex flex-col gap-4 overflow-hidden"
              >
                <div>
                  <h3 className="font-serif text-lg mb-1">{tile.title}</h3>
                  <p className="text-xs text-neutral-500">{tile.caption}</p>
                </div>
                <div className="relative w-full h-40 rounded-md overflow-hidden">
                  <Image src={tile.img} alt={tile.title} fill className="object-cover" />
                </div>
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

          <div className="space-y-16">
            {features.map((f) => (
              <div
                key={f.number + f.title}
                className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 items-start"
              >
                <div className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 w-fit">
                  {f.number} {f.title}
                </div>
                {f.img && (
                  <div className="relative w-full h-[260px] sm:h-[360px] rounded-md overflow-hidden border border-neutral-200 bg-neutral-50">
                    <Image src={f.img} alt={f.title} fill className="object-contain" />
                  </div>
                )}
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
              <p className="text-xs text-neutral-400 mb-2 tracking-wide">BEFORE</p>
              <div className="relative w-full h-[280px] sm:h-[360px] rounded-md overflow-hidden border border-neutral-200">
                <Image
                  src="https://framerusercontent.com/images/OC0xnGiGiRvCmAOVAnUccSKfkII.png"
                  alt="Before redesign"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-xs text-neutral-400 mb-2 tracking-wide">AFTER</p>
              <div className="relative w-full h-[280px] sm:h-[360px] rounded-md overflow-hidden border border-neutral-200">
                <Image
                  src="https://framerusercontent.com/images/osnCfDgwg2efDTECUgMVrTHk.png"
                  alt="After redesign"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* OUTCOME */}
        <section id="outcome" className="mb-24 max-w-3xl">
          <p className="text-xs tracking-wide text-olive mb-3">OUTCOMES</p>
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
        <section className="mb-10">
          <Link
            href="/cinecircle"
            className="grid grid-cols-[1fr_140px] sm:grid-cols-[1fr_180px] gap-4 items-center border border-neutral-200 rounded-lg p-5 hover:border-neutral-400 transition-colors"
          >
            <div>
              <p className="text-xs text-neutral-400 mb-2">CINECIRCLE, 2025</p>
              <h3 className="font-serif text-lg mb-1">
                Designing how South Asian Audiences express film discussions
              </h3>
              <p className="text-xs text-neutral-500">Case Study / UX</p>
            </div>
            <div className="relative w-full h-[120px] sm:h-[150px] rounded-md overflow-hidden bg-neutral-50 border border-neutral-200">
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
