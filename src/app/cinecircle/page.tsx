import Image from "next/image";
import Link from "next/link";
import CineCircleFeedScroll from "@/components/CineCircleFeedScroll";
import ScrollProgress from "@/components/ScrollProgress";
import CaseStudyContents from "@/components/CaseStudyContents";
import CineCircleTickets from "@/components/CineCircleTickets";
import CineCircleReel from "@/components/CineCircleReel";
import CineCircleDesignShowcase from "@/components/CineCircleDesignShowcase";
import FlipBook from "@/components/FlipBook";
import { cineCircleBrandbook } from "@/components/brandbooks";

const ROSE = "var(--color-rose-600)";

// Design section recordings. Crops are the phone's bounds in a 600px-tall
// frame of each recording, inset a pixel to hide the backdrop at the edges.
// prototypeUrl takes a figma.com/proto share link.
// Both flows start from the Home feed and branch at the Create sheet.
const CINECIRCLE_PROTOTYPE =
  "https://www.figma.com/proto/JHpxe4K6ejeZAkhql5cLTP/Portfolio-Stuff?node-id=539-17357&starting-point-node-id=539%3A17357";

// Post tiles under each flow's copy. Hidden for now; flip to bring them back.
const SHOW_FLOW_TILES = false;

const designFlows = [
  {
    id: "long",
    title: "Long form posts",
    body: "For users ready to articulate more thoughtful perspectives, structured inputs (movie selection, rating, tagging, formatting tools) enable depth without overwhelming those who prefer brevity.",
    video: "/videos/cinecircle/long-form.mp4",
    crop: { frameW: 307, frameH: 600, x: 27, y: 26, w: 253, h: 555 },
    prototypeUrl: CINECIRCLE_PROTOTYPE,
    tile: { src: "/images/cinecircle/post-review.png", w: 393, h: 314, alt: "Long form review post with a title and rating" },
  },
  {
    id: "short",
    title: "Short form posts",
    body: "Most users respond instinctively to films. By designing a lightweight post format (280 characters, media-only, no formatting tools), fans can quickly express initial reactions without cognitive pressure.",
    video: "/videos/cinecircle/short-form.mp4",
    crop: { frameW: 297, frameH: 600, x: 25, y: 27, w: 247, h: 546 },
    prototypeUrl: CINECIRCLE_PROTOTYPE,
    tile: { src: "/images/cinecircle/post-opinion.png", w: 393, h: 347, alt: "Short form post sharing a gut reaction to a film" },
  },
];

// The Solution section is hidden for now; flip to bring it back.
const SHOW_SOLUTION = false;

const sections = [
  { id: "problem", label: "Problem" },
  { id: "research", label: "Research" },
  { id: "ideation", label: "Ideation" },
  { id: "solution", label: "Solution" },
  { id: "design", label: "Design" },
  { id: "outcome", label: "Outcome" },
  { id: "reflections", label: "Reflections" },
  { id: "brandbook", label: "Brandbook" },
];

const toc = sections
  .filter((s) => SHOW_SOLUTION || s.id !== "solution")
  .map((s, i) => ({ ...s, label: `${String(i + 1).padStart(2, "0")} ${s.label}` }));

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
                {["Mobile", "Case Study", "Shipped"].map((tag) => (
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
          <section id="research" className="mb-24">
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
          {SHOW_SOLUTION && (
            <section id="solution" className="mb-24">
              <p className="text-rose-600 text-xs font-medium tracking-wide mb-3">
                SOLUTION
              </p>
              <h2 className="font-serif text-2xl mb-3">
                Designing a posting flow that adapts to different types of expressions
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
          )}

          {/* DESIGN */}
          <section id="design" className="mb-24">
            <p className="text-rose-600 text-xs font-medium tracking-wide mb-3">
              DESIGN
            </p>

            <div className="space-y-24">
              {designFlows.map((flow) => (
                <div
                  key={flow.id}
                  className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start"
                >
                  <div>
                    <h3 className="font-serif text-2xl mb-3">{flow.title}</h3>
                    <p className="text-neutral-700 text-sm max-w-md leading-relaxed">
                      {flow.body}
                    </p>
                    {SHOW_FLOW_TILES && (
                      <div
                        className="mt-10 w-full max-w-[340px] rounded-xl bg-white overflow-hidden shadow-[0_16px_40px_-16px_rgba(0,0,0,0.3)] ring-1 ring-black/5"
                      >
                        <Image
                          src={flow.tile.src}
                          alt={flow.tile.alt}
                          width={flow.tile.w}
                          height={flow.tile.h}
                          className="w-full h-auto"
                        />
                      </div>
                    )}
                  </div>
                  <CineCircleDesignShowcase
                    label={flow.title}
                    videoSrc={flow.video}
                    crop={flow.crop}
                    prototypeUrl={flow.prototypeUrl}
                  />
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

          {/* Team — same height as SelfServe's team photo, split across two shots */}
          <section className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative w-full h-[260px] sm:h-[380px] rounded-md overflow-hidden">
              <Image
                src="/images/cinecircle/team.jpg"
                alt="The CineCircle team posing in front of a Generate backdrop"
                fill
                sizes="(min-width: 640px) 45vw, 90vw"
                className="object-cover"
              />
              <p className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white/90">
                The CineCircle team says hello!
              </p>
            </div>
            <div className="relative w-full h-[260px] sm:h-[380px] rounded-md overflow-hidden">
              <Image
                src="/images/cinecircle/team-dinner.jpg"
                alt="The CineCircle team together at a food hall"
                fill
                sizes="(min-width: 640px) 45vw, 90vw"
                className="object-cover"
              />
              <p className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-white/90">
                &hellip;and off the clock
              </p>
            </div>
          </section>

          {/* BRANDBOOK */}
          <section id="brandbook" className="mb-24 pt-10">
            <div className="max-w-2xl mb-12">
              <p className="text-rose-600 text-xs font-medium tracking-wide mb-3">
                WAIT, BEFORE YOU GO…
              </p>
              <h2 className="font-serif text-2xl mb-3">Here&apos;s our brandbook</h2>
              <p className="text-neutral-700 text-sm">
                Flip through with the arrows, or click a page for a closer look.
              </p>
            </div>
            <FlipBook pages={cineCircleBrandbook} alt="CineCircle brandbook" />
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
                    className="absolute inset-0 font-serif text-lg text-rose-600 [clip-path:inset(0_100%_0_0)] transition-[clip-path] duration-500 ease-out group-hover:[clip-path:inset(0_0%_0_0)]"
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
      </div>
    </main>
  );
}
