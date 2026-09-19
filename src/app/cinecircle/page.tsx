import Image from "next/image";
import Link from "next/link";

const toc = [
  { id: "problem", label: "01 Problem" },
  { id: "research", label: "02 Research" },
  { id: "ideation", label: "03 Ideation" },
  { id: "solution", label: "04 Solution" },
  { id: "design", label: "05 Design" },
  { id: "reflections", label: "06 Reflections" },
  { id: "outcome", label: "07 Outcome" },
];

const painPoints = [
  {
    title: "Private Expression",
    description: "Preferred group chats over online platforms",
    icon: "https://framerusercontent.com/images/Qdv2FSGu4f32a7XAxYVgeQzGwc.png",
  },
  {
    title: "Low Psychological Safety",
    description: "Fear of backlash and harsh discourse",
    icon: "https://framerusercontent.com/images/I5XtbR1AwxWKoq0Mo8f3RnB90zg.png",
  },
  {
    title: "Repetitive Exposure",
    description: "Same films circulated, limiting discovery",
    icon: "https://framerusercontent.com/images/ZR7wmDnvdkRejLzyMmn67nXRc9o.png",
  },
  {
    title: "Not Intuitive",
    description: "Dense information and unintuitive interactions",
    icon: "https://framerusercontent.com/images/iQBzR1b5hY73Km4qhtNAhJPQo.png",
  },
];

const postExamples = [
  {
    caption: "…forming an opinion?",
    image: "https://framerusercontent.com/images/8pzx1KKD5k9SK71OMklhqYpvyA.png",
  },
  {
    caption: "...rating a film?",
    image: "https://framerusercontent.com/images/gAHWfMkim47vnSQolvMOIBHeF8.png",
  },
  {
    caption: "…writing reviews?",
    image: "https://framerusercontent.com/images/eU8qxgsobv4nRAZKFvJWaGXCcpE.png",
  },
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

const reactions = [
  { emoji: "🌶️", label: "Spicy", count: 824 },
  { emoji: "✨", label: "Thought-Provoking", count: 179 },
  { emoji: "🧠", label: "Mind-Blowing", count: 517 },
  { emoji: "🧨", label: "Explosive", count: 68 },
];

export default function CineCirclePage() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero banner */}
      <div className="w-full bg-gradient-to-b from-rose-100 to-rose-50 flex items-center justify-center px-6 py-16 sm:py-20">
        <div className="relative w-full max-w-3xl aspect-[859/311]">
          <Image
            src="https://framerusercontent.com/images/IO9doX9CqvnOWmW9ReIUTtFJqAU.png"
            alt="CineCircle post creation and review mockups"
            fill
            className="object-contain drop-shadow-md"
            priority
          />
        </div>
      </div>

      <div className="w-full px-6 py-10 sm:px-10 lg:px-16 flex gap-16">
        {/* Sticky contents sidebar */}
        <aside className="hidden lg:block w-40 shrink-0">
          <div className="sticky top-10 text-xs text-neutral-400 tracking-wide space-y-3">
            <p>CONTENTS.</p>
            {toc.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="block hover:text-neutral-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#top"
              className="block pt-4 hover:text-neutral-900 transition-colors"
            >
              Back to the Top
            </a>
          </div>
        </aside>

        {/* Main content */}
        <div id="top" className="flex-1 min-w-0 max-w-4xl">
          <h1 className="font-serif text-3xl mb-4">CineCircle</h1>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex flex-wrap items-center gap-2">
              {["Web / Mobile", "Case Study", "Shipped"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="#"
              className="rounded-full border border-rose-300 px-4 py-1.5 text-sm text-rose-700 hover:bg-rose-50 transition-colors"
            >
              View GitHub →
            </a>
          </div>

          <p className="text-neutral-700 mb-10">
            Designing a community space for South Asian cinema fans
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-14">
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

          {/* Reminder callout */}
          <div className="border border-neutral-200 rounded-lg p-8 mb-16 flex items-center justify-between gap-6">
            <div className="max-w-md">
              <p className="text-rose-600 text-xs font-medium tracking-wide mb-3">
                REMINDER
              </p>
              <p className="text-neutral-700 text-sm leading-relaxed">
                This case study is currently in the process of being revamped!
                You can keep scrolling below to view the older iteration.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <div className="relative w-16 h-16">
                <Image
                  src="https://framerusercontent.com/images/UswEW0OLQvwuPsFn2c3omSJ9U.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-12 h-12">
                <Image
                  src="https://framerusercontent.com/images/UswEW0OLQvwuPsFn2c3omSJ9U.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* PROBLEM */}
          <section id="problem" className="mb-20">
            <p className="text-rose-600 text-xs font-medium tracking-wide mb-3">
              PROBLEM
            </p>
            <h2 className="font-serif text-2xl mb-4 max-w-2xl">
              It&apos;s hard to sustain meaningful movie discussions on social
              platforms
            </h2>
            <p className="text-neutral-700 text-sm leading-relaxed max-w-2xl">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {painPoints.map((point) => (
                <div
                  key={point.title}
                  className="border border-neutral-200 rounded-lg p-6"
                >
                  <div className="relative w-14 h-14 mb-6">
                    <Image
                      src={point.icon}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="font-serif text-lg text-neutral-900 mb-1">
                    {point.title}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* How Might We callout */}
          <div className="rounded-lg bg-gradient-to-b from-white to-amber-50 border border-amber-100 p-10 sm:p-14 mb-20 flex items-center justify-center text-center">
            <p className="font-serif text-xl sm:text-2xl leading-relaxed max-w-2xl text-neutral-800">
              How might we design an experience that{" "}
              <span className="italic text-orange-600">encourages</span> fans
              to <span className="italic text-orange-600">express</span> their
              perspectives clearly and{" "}
              <span className="italic text-orange-600">confidently</span> in a
              digital space?
            </p>
          </div>

          {/* IDEATION */}
          <section id="ideation" className="mb-20">
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {postExamples.map((post) => (
                <div key={post.caption} className="flex flex-col gap-3">
                  <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden border border-neutral-200 bg-neutral-50">
                    <Image
                      src={post.image}
                      alt={post.caption}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <p className="text-sm text-neutral-500 text-center italic">
                    {post.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SOLUTION */}
          <section id="solution" className="mb-20">
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
          <section id="design" className="mb-20">
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

            <div className="mb-16">
              <h3 className="font-serif text-2xl mb-3">Long form posts</h3>
              <p className="text-neutral-700 text-sm max-w-xl leading-relaxed">
                For users ready to articulate more thoughtful perspectives,
                structured inputs (movie selection, rating, tagging,
                formatting tools) enable depth without overwhelming those who
                prefer brevity.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl mb-3">
                Replacing likes with reactions
              </h3>
              <p className="text-neutral-700 text-sm max-w-xl leading-relaxed mb-8">
                Instead of neutral likes, reactions such as{" "}
                <span className="italic">Spicy</span> or{" "}
                <span className="italic">Thought-Provoking</span> allow users
                to convey emotional tone and cultural relevance, shifting
                engagement from validation to expression.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-10">
                <div className="relative w-56 h-72 shrink-0">
                  <Image
                    src="https://framerusercontent.com/images/s0RACLxZtEUgVxaNLPCAZpbP8.png"
                    alt="CineCircle feed"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute -bottom-4 -right-10 w-40 h-52">
                    <Image
                      src="https://framerusercontent.com/images/YI7b34DgWY3yTa6FMUiFjbs6NV8.png"
                      alt="CineCircle post detail"
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 sm:ml-8">
                  {reactions.map((r) => (
                    <span
                      key={r.label}
                      className="flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-700"
                      title={r.label}
                    >
                      <span>{r.emoji}</span>
                      <span>{r.count}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* REFLECTIONS */}
          <section id="reflections" className="mb-20">
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
          <section id="outcome" className="mb-20 text-center max-w-2xl mx-auto">
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
          <Link
            href="/perplexity"
            className="group block border border-neutral-200 rounded-lg p-8 flex items-center justify-between gap-6 hover:border-neutral-300 transition-colors"
          >
            <div>
              <p className="text-xs text-neutral-400 tracking-wide mb-3">
                NEXT IN THE COLLECTION
              </p>
              <p className="text-xs text-neutral-400 mb-1">PERPLEXITY, 2026</p>
              <h3 className="font-serif text-lg text-neutral-900 mb-1 group-hover:text-rose-600 transition-colors">
                Improving AI Adoption
              </h3>
              <p className="text-xs text-neutral-400">UX Research</p>
            </div>
            <div className="hidden sm:block w-32 h-32 rounded-md bg-neutral-100 shrink-0" />
          </Link>
        </div>
      </div>
    </main>
  );
}
