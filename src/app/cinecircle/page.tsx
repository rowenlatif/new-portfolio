import Image from "next/image";
import Link from "next/link";
import CineCircleFeedScroll from "@/components/CineCircleFeedScroll";
import ScrollProgress from "@/components/ScrollProgress";
import CaseStudyContents from "@/components/CaseStudyContents";
import CineCircleTickets from "@/components/CineCircleTickets";
import CineCircleReel from "@/components/CineCircleReel";

const ROSE = "var(--color-rose-600)";

const toc = [
  { id: "problem", label: "01 Problem" },
  { id: "research", label: "02 Research" },
  { id: "ideation", label: "03 Ideation" },
  { id: "solution", label: "04 Solution" },
  { id: "design", label: "05 Design" },
  { id: "reflections", label: "06 Reflections" },
  { id: "outcome", label: "07 Outcome" },
];

const reflections = [
  {
    title: "✎ᝰ Designing for casual film fans",
    body: "Casual fans move fast between apps. I learned to test with real film fans, not just designers, and prioritize simplicity over feature completeness.",
  },
  {
    title: "𝄞⨾𓍢ִ໋ Too many options overwhelm users",
    body: "Too many customization options created decision paralysis. Finding the right defaults was harder than designing the features themselves.",
  },
  {
    title: "𝄞⨾𓍢ִ໋ With more time…",
    body: "I'd explore richer reaction analytics, watch-party features, and smarter recommendations that keep momentum in the conversation.",
  },
];

export default function CineCirclePage() {
  return (
    <main className="flex-1 flex flex-col">
      <ScrollProgress color={ROSE} />

      <div className="w-full px-6 sm:px-10 lg:pl-24 lg:pr-20 xl:pl-32 xl:pr-28 py-10 grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-10">
        {/* Sticky contents sidebar */}
        <aside className="hidden lg:block">
          <CaseStudyContents items={toc} activeClassName="text-rose-600 font-medium" />
        </aside>

        {/* Main content */}
        <div id="top" className="min-w-0">
          {/* Hero banner */}
          <div className="w-full h-[220px] sm:h-[320px] lg:h-[420px] rounded-sm overflow-hidden bg-gradient-to-b from-rose-100 to-rose-50 flex items-center justify-center px-6 mb-10">
            <div className="relative w-full max-w-2xl aspect-[859/311]">
              <Image
                src="https://framerusercontent.com/images/IO9doX9CqvnOWmW9ReIUTtFJqAU.png"
                alt="CineCircle post creation and review mockups"
                fill
                className="object-contain drop-shadow-md"
                priority
              />
            </div>
          </div>

          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="font-serif text-3xl mb-3">CineCircle</h1>
              <div className="flex flex-wrap gap-2">
                {["Web / Mobile", "Case Study", "Shipped"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="https://github.com/GenerateNU/cinecircle"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-rose-300 px-4 py-1.5 text-sm text-rose-700 hover:bg-rose-50 transition-colors"
            >
              View GitHub →
            </a>
          </div>

          <p className="text-neutral-700 mb-10">
            Designing a community space for South Asian cinema fans
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-neutral-200 pt-8 mb-20">
            <div>
              <p className="text-xs text-neutral-400 mb-1">Role</p>
              <p className="text-sm text-neutral-700">Product Designer</p>
            </div>
            <div>
              <p className="text-xs text-neutral-400 mb-1">Team</p>
              <p className="text-sm text-neutral-700">Project Manager</p>
              <p className="text-sm text-neutral-700">Design &amp; Tech Leads</p>
              <p className="text-sm text-neutral-700">4 Designers</p>
            </div>
            <div>
              <p className="text-xs text-neutral-400 mb-1">Timeline</p>
              <p className="text-sm text-neutral-700">Sept 2025 — Dec 2025</p>
            </div>
            <div>
              <p className="text-xs text-neutral-400 mb-1">Skills</p>
              <p className="text-sm text-neutral-700">Figma</p>
              <p className="text-sm text-neutral-700">FigmaMake</p>
              <p className="text-sm text-neutral-700">Adobe AfterEffects</p>
            </div>
          </div>

          {/* PROBLEM */}
          <section id="problem" className="pt-20 sm:pt-28 mb-24 text-center max-w-3xl mx-auto">
            <p className="text-rose-600 text-xs font-medium tracking-wide mb-3">
              PROBLEM
            </p>
            <h2 className="font-serif text-2xl mb-4 text-balance">
              It&apos;s hard to sustain meaningful movie discussions on social
              platforms
            </h2>
            <p className="text-neutral-700 text-sm leading-relaxed max-w-2xl mx-auto">
              Fans found themselves stuck between fragmented group chats and
              noisy comment threads, where thoughtful takes got buried and
              real conversation about the films they loved never had a place
              to live.
            </p>
          </section>

          {/* RESEARCH */}
          <section id="research" className="mb-10">
            <p className="text-rose-600 text-xs font-medium tracking-wide mb-3">
              RESEARCH
            </p>
            <h2 className="font-serif text-2xl mb-3">
              Understanding South Asian film fans
            </h2>
            <p className="text-neutral-700 text-sm mb-8 max-w-2xl">
              Talking to South Asian film enthusiasts, I identified the main
              themes to bridge their shared pain points and guide our
              designs:
            </p>

            <CineCircleTickets />

            <div className="mt-20">
              <h2 className="font-serif text-2xl mb-3">Competitive Analysis</h2>
              <p className="text-neutral-700 text-sm mb-10 max-w-2xl">
                Fans already split their film talk across half a dozen apps — none
                of which were built for it. I mapped where each one earns its keep,
                and where the conversation falls through.
              </p>
              <CineCircleReel />
            </div>
          </section>

          {/* How Might We callout */}
          <div className="rounded-lg bg-gradient-to-b from-white to-amber-50 border border-amber-100 px-10 py-16 sm:px-12 sm:py-20 mb-24 max-w-2xl mx-auto flex items-center justify-center text-center">
            <p className="font-serif text-xl sm:text-2xl leading-relaxed max-w-[32rem] text-balance text-neutral-800">
              How might we design an experience that{" "}
              <span className="italic text-orange-600">encourages</span> fans
              to <span className="italic text-orange-600">express</span> their
              perspectives clearly and{" "}
              <span className="italic text-orange-600">confidently</span> in a
              digital space?
            </p>
          </div>

          {/* IDEATION */}
          <section id="ideation" className="mb-24">
            <p className="text-rose-600 text-xs font-medium tracking-wide mb-3">
              IDEATING
            </p>
            <h2 className="font-serif text-2xl mb-3 max-w-2xl">
              Clarifying what a &ldquo;post&rdquo; needed to communicate
            </h2>
            <p className="text-neutral-700 text-sm mb-8 max-w-2xl">
              In early ideation sessions, I clarified what a &ldquo;post&rdquo;
              fundamentally needed to communicate because users express
              differently.
            </p>

            <CineCircleFeedScroll />
          </section>

          {/* SOLUTION */}
          <section id="solution" className="mb-24">
            <p className="text-rose-600 text-xs font-medium tracking-wide mb-3">
              SOLUTION
            </p>
            <h2 className="font-serif text-2xl mb-3 max-w-2xl">
              Designing a posting flow that adapts to different types of
              expressions
            </h2>
            <p className="text-neutral-700 text-sm mb-8 max-w-2xl leading-relaxed">
              Rather than merging post types into one editor, I separated the
              flows to let users choose between short and long form before
              writing. I found that asking users to select their post type
              upfront (short or long form) made posting more intuitive and
              efficient by aligning the interface with their intent. In early
              prototypes, I tested a single editor for all content types.
              During reviews, users struggled to decide how much to write
              once already in the flow, especially when switching between
              casual reactions and in-depth reviews.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="border border-neutral-200 rounded-lg p-6 min-h-40">
                <p className="text-rose-600 text-xs font-medium tracking-wide mb-2">
                  INITIAL DESIGNS
                </p>
                <p className="text-neutral-800">Combined flow caused confusion</p>
              </div>
              <div className="border border-neutral-200 rounded-lg p-6 min-h-40">
                <p className="text-rose-600 text-xs font-medium tracking-wide mb-2">
                  FINAL DESIGNS
                </p>
                <p className="text-neutral-800">
                  Clear entry point showed more intentional expression
                </p>
              </div>
            </div>
          </section>

          {/* DESIGN */}
          <section id="design" className="mb-24">
            <p className="text-rose-600 text-xs font-medium tracking-wide mb-3">
              DESIGN
            </p>

            <div className="mb-16">
              <h3 className="font-serif text-2xl mb-3">Short form posts</h3>
              <p className="text-neutral-700 text-sm max-w-xl leading-relaxed">
                Most users respond instinctively to films. By designing a
                lightweight post format (280 characters, media-only, no
                formatting tools), fans can quickly express initial reactions
                without cognitive pressure.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-3">Long form posts</h3>
              <p className="text-neutral-700 text-sm max-w-xl leading-relaxed">
                For users ready to articulate more thoughtful perspectives,
                structured inputs (movie selection, rating, tagging,
                formatting tools) enable depth without overwhelming those who
                prefer brevity.
              </p>
            </div>
          </section>

          {/* REFLECTIONS */}
          <section id="reflections" className="mb-24">
            <p className="text-rose-600 text-xs font-medium tracking-wide mb-3">
              REFLECTIONS
            </p>
            <h2 className="font-serif text-2xl mb-3">
              Mistakes, Metrics, and Moving Forward…
            </h2>
            <p className="text-neutral-700 text-sm mb-8">
              Designing for passionate, opinionated film fans taught me
              lessons no design course ever could.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {reflections.map((r) => (
                <div
                  key={r.title}
                  className="border border-neutral-200 rounded-lg p-5"
                >
                  <p className="text-sm text-neutral-900 mb-2">{r.title}</p>
                  <p className="text-sm text-neutral-500">{r.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* OUTCOME */}
          <section id="outcome" className="py-8 sm:py-12 mb-24 text-center max-w-2xl mx-auto">
            <p className="text-rose-600 text-xs font-medium tracking-wide mb-3">
              OUTCOME
            </p>
            <h2 className="font-serif text-2xl mb-4">
              So, what did all this work accomplish?
            </h2>
            <p className="text-neutral-700 text-sm leading-relaxed">
              I designed CineCircle&apos;s full posting experience from 0-1 —
              separating short and long-form flows and replacing likes with
              expressive reactions. Early testers spent more time writing
              thoughtful takes and reported feeling safer sharing unpopular
              opinions, turning passive scrolling into real film discussion.
            </p>
          </section>

          {/* Next in collection */}
          <section className="mb-10 py-10 flex justify-center">
            <Link
              href="/perplexity"
              className="group inline-flex items-stretch gap-4 w-fit rounded-[3px] border-[0.5px] border-neutral-200 bg-white pr-5 pb-3 transition-[transform,border-color] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-neutral-500 hover:rotate-1"
            >
              <div className="flex flex-col justify-center gap-2 py-[60px] pl-[50px]">
                <p className="text-xs text-neutral-400">PERPLEXITY, 2026</p>
                <div className="relative">
                  <h3 className="font-serif text-lg text-neutral-900">
                    Improving AI Adoption
                  </h3>
                  <h3
                    aria-hidden
                    className="absolute inset-0 font-serif text-lg text-rose-600 [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-500 ease-out group-hover:[clip-path:inset(0_0%_0_0)]"
                  >
                    Improving AI Adoption
                  </h3>
                </div>
                <p className="text-xs text-neutral-500">UX Research</p>
              </div>
              <div className="relative w-[201.5px] h-[206px] shrink-0 self-center">
                <Image
                  src="/images/perplexity-logo.png"
                  alt="Perplexity preview"
                  fill
                  className="object-contain"
                  loading="eager"
                />
              </div>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
