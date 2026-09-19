import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Shared presentational building blocks + full case-study content for the
 * "Tencent" (ChatSlide AI) project.
 */

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-1.5 text-xs font-medium tracking-wide text-violet-600 mb-3">
      <span aria-hidden>✦</span>
      {children}
    </p>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return <h2 className="font-serif text-2xl sm:text-3xl mb-4">{children}</h2>;
}

function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="font-serif text-xl mb-3">{children}</h3>;
}

function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-5 max-w-2xl">
      {children}
    </p>
  );
}

function Caption({ children }: { children: ReactNode }) {
  return (
    <p className="text-center text-xs text-neutral-400 mt-3 mb-10">
      {children}
    </p>
  );
}

function Shot({
  src,
  width,
  height,
  alt,
  className = "",
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden rounded-lg border border-neutral-200 bg-violet-50/40 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
      />
    </div>
  );
}

function Section({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-14 sm:py-16 border-t border-neutral-200">
      {children}
    </section>
  );
}

/* ---------------------------------------------------------------------- */

export default function TencentCaseStudy() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero banner */}
      <div className="relative w-full h-64 sm:h-80 lg:h-[420px] overflow-hidden bg-violet-100">
        <Image
          src="https://framerusercontent.com/images/GrmPIlweEyXvGrMqjJ3PeleYmQ.jpg"
          alt=""
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="relative w-full max-w-2xl h-40 sm:h-56 rounded-lg overflow-hidden shadow-xl border border-white/40">
            <Image
              src="https://framerusercontent.com/images/wmYbSXlfp7iBorK7XCeBAfCzOFg.png"
              alt="ChatSlide AI presentation editor with the shortcut toolbar open"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>

      <div className="w-full px-6 py-14 sm:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Title + intro */}
          <h1 className="italic font-serif text-5xl sm:text-6xl mb-6">
            <span className="text-violet-600 not-italic">T</span>encent
          </h1>

          <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
            This project was in partnership with Tencent&apos;s client,
            ChatSlide AI. As a Product Design Intern, I worked with different
            AI-driven clients to simplify their products&apos; complex
            workflows! This case study will outline 1 of the 3 projects I
            worked on.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 max-w-2xl">
            <div>
              <p className="text-sm font-medium text-neutral-900 mb-2">
                Role
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                user experience research, interface design, prototype
                development
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-900 mb-2">
                Team
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                2 co-founders, 1 lead product designer, 1 lead software
                engineer
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-neutral-900 mb-2">
                Duration
              </p>
              <p className="text-sm text-neutral-600 leading-relaxed">
                april 2025 - september 2025
              </p>
            </div>
          </div>

          {/* CONTEXT */}
          <Section id="context">
            <Eyebrow>CONTEXT</Eyebrow>
            <Heading>Hold on, what is ChatSlide AI?</Heading>
            <P>
              ChatSlide AI is a one-click content tool that turns documents,
              videos, and web pages into presentations automatically.
              It&apos;s built to make slide creation fast, conversational,
              and totally low-effort. ChatSlide helps busy professionals,
              educators, and students create engaging content without
              touching a design tool.
            </P>

            <Shot
              src="https://framerusercontent.com/images/yeeSoob1j8NBB6P1F6OgF9ziPgY.png"
              width={700}
              height={80}
              alt="Four callouts describing ChatSlide AI's core capabilities"
              className="mb-6 bg-white p-3"
            />

            <Shot
              src="https://framerusercontent.com/images/cfaFlQFuBMBkIfTloz1KdB6IR4.png"
              width={700}
              height={520}
              alt="ChatSlide AI's current editor screen prior to the redesign"
            />
            <Caption>Client&apos;s current screen, prior to my redesign.</Caption>
          </Section>

          {/* PROBLEM */}
          <Section id="problem">
            <Eyebrow>PROBLEM</Eyebrow>
            <Heading>The AI failed over 95% of user tasks!</Heading>

            <Shot
              src="https://framerusercontent.com/images/T6JzHWOtOQ7cUDNlq6I8MRKbYMw.png"
              width={950}
              height={265}
              alt="Screenshots of various prompt testing sessions against the current AI"
            />
            <Caption>
              Screenshots of various prompt testing - responses from the
              current AI.
            </Caption>

            <P>
              The first version of the AI regularly failed to deliver
              relevant or functional responses.
            </P>
            <P>
              It ignored slide context, misapplied edits, and responded to
              vague prompts without asking for clarification. Even when it
              acted, it often changed the wrong slide or inserted generic
              filler like &ldquo;slide 5 text here&rdquo; with no visibility
              into what was changed or why.
            </P>

            <p className="text-neutral-900 text-sm font-medium mb-6">
              Some major breakdowns:
            </p>
            <Shot
              src="https://framerusercontent.com/images/WwyFHmrUiEpjgpEfeWA2olPuSU0.png"
              width={700}
              height={184}
              alt="Four numbered breakdowns: 0% success rate on formatting; no clarifications on vague input; no contextual memory; generic repetitive replies"
              className="mb-2 bg-white p-4"
            />
          </Section>

          {/* RESEARCH */}
          <Section id="research">
            <Eyebrow>RESEARCH</Eyebrow>
            <SubHeading>01. System Evaluation</SubHeading>
            <P>
              In the span of 3 weeks, I ran 25+ prompts across 5 prompt use
              types (established through user interview insights),
              evaluating each by four key metrics: accuracy, relevance,
              context awareness, and clarification handling. Combined with
              user interviews, these findings shaped the foundation of the
              redesign.
            </P>
            <p className="text-neutral-400 text-xs italic mb-6">
              Curious about the full, in-depth analysis? Find my
              documentation here.
            </p>

            <Shot
              src="https://framerusercontent.com/images/WHukcPN512tXPMXHvmhJVXbpWo.png"
              width={758}
              height={134}
              alt="Five prompt-type evaluation cards: editing, structure, visual, logic, and vague prompts"
              className="mb-6 bg-white p-3"
            />
            <Shot
              src="https://framerusercontent.com/images/Qw2yIcopZEQGrzQ62iW5cdRY.png"
              width={687}
              height={163}
              alt="Speech bubble quotes from testers about the AI's confusing behavior"
              className="mb-6 bg-white p-4"
            />

            <p className="text-neutral-900 text-sm font-medium mb-6">
              Thus, informed our product goals:
            </p>
            <Shot
              src="https://framerusercontent.com/images/UaKkyOuEjm33LXAdj4wIpTK8kQ.png"
              width={700}
              height={165}
              alt="Four numbered product goals derived from the system evaluation"
              className="mb-12 bg-white p-4"
            />

            <SubHeading>02. Competitive Analysis</SubHeading>
            <P>
              I conducted an in-depth analysis of current AI assistant
              tools, focusing on both direct competitors (AI writing/editing
              tools) and indirect competitors (context-aware productivity
              assistants).
            </P>
            <Shot
              src="https://framerusercontent.com/images/zLNQeivTt9XvGfspKUMRqfHseY.png"
              width={838}
              height={174}
              alt="Competitive analysis comparing ChatGPT, Gemini, Grok, Notion AI, and Perplexity"
              className="mb-6 bg-white p-3"
            />
            <Shot
              src="https://framerusercontent.com/images/1baOrXHIrY96I0SZlXKs9bEbE7Y.png"
              width={838}
              height={38}
              alt="Three takeaways from the competitive analysis"
              className="mb-2 bg-white p-3"
            />
          </Section>

          {/* DESIGN PROCESS */}
          <Section id="design-process">
            <Eyebrow>DESIGN PROCESS</Eyebrow>

            <SubHeading>01. Ideation</SubHeading>
            <P>
              The ideation process began with defining our core features,
              aligning with our project goals. I focused on balancing its
              dual role as both a reliable editing tool and a collaborative
              conversation interface.
            </P>
            <Shot
              src="https://framerusercontent.com/images/kADzZnTuAGMJxcZgqehPwEFs3WM.png"
              width={838}
              height={253}
              alt="First Phase MVP Features and Future Roadmap comparison"
              className="mb-12 bg-white p-4"
            />

            <SubHeading>02. Wireframes</SubHeading>
            <P>
              I established the core user flows before diving into visual
              design:
            </P>
            <Shot
              src="https://framerusercontent.com/images/uzxi2HyVIoyDrNtxIGfYiqVmmc.png"
              width={520}
              height={77}
              alt="Four user-flow scenarios represented as icons with short descriptions"
              className="mb-8 bg-white p-3 max-w-lg"
            />
            <P>
              With the user flows as a baseline, I designed wireframes to
              help me identify potential usability issues early and
              establish a solid foundation for the UI design.
            </P>
            <Shot
              src="https://framerusercontent.com/images/vf803uGpCpGCIpeR5YYiQVzzN0.png"
              width={838}
              height={589}
              alt="Low-fidelity wireframes of the ChatSlide AI chat panel, row one"
              className="mb-6 bg-white p-3"
            />
            <Shot
              src="https://framerusercontent.com/images/cJd4draWxLOe1ByVj9UwkvnmoM.png"
              width={838}
              height={593}
              alt="Low-fidelity wireframes of the ChatSlide AI chat panel, row two"
              className="mb-12 bg-white p-3"
            />

            <SubHeading>03. Exploration</SubHeading>
            <P>
              I explored multiple aesthetics before selecting a clean,
              minimal design that complements the presentation editor.
              Since the chatbot isn&apos;t the primary focus, its look is
              intentionally subtle, supporting the client&apos;s goal of
              making the AI feel reliable and easy to use.
            </P>
            <Shot
              src="/images/tencent-exploration.jpg"
              width={1200}
              height={500}
              alt="Multiple visual explorations of the AI chat panel, from dark gradients to light minimal styles"
              className="mb-8"
            />
            <P>
              I recalled that users repeatedly turned to the chat for
              simple, repetitive tasks like &ldquo;fix grammar&rdquo; or
              &ldquo;make longer.&rdquo; It was clear that they wanted fast
              access to simple prompts.
            </P>
            <P>
              To address this, I introduced a shortcut toolbar that gives
              users one-click access to common AI prompts!
            </P>

            <SubHeading>04. Backend Implementation</SubHeading>
            <P>
              I worked closely on shaping how prompts are interpreted and
              executed behind the scenes. Using tools like LangChain and
              Python, I helped define how user instructions are mapped to
              actions, from rewriting content to reformatting slides.
            </P>
            <Shot
              src="https://framerusercontent.com/images/ec5iYZHb6Btfle3uAE1htBdYU4.png"
              width={838}
              height={58}
              alt="Backend flow: prompt, clarification check, intent detection, user task execution, slide update"
              className="mb-8 bg-white p-3"
            />
            <P>
              I also introduced logic to handle vague prompts, allowing the
              assistant to ask clarifying questions rather than making
              incorrect assumptions.
            </P>
            <P>
              Another key challenge was making sure the AI edited the right
              slide at the right time. I added logic that connects the
              selected slide to the prompt, so the AI doesn&apos;t
              mistakenly apply changes somewhere else. These backend
              decisions directly supported the UX.
            </P>
            <Shot
              src="https://framerusercontent.com/images/G5ESk2qqaO618aY5FhnU8WzZHA.png"
              width={838}
              height={390}
              alt="Before and after comparison of the AI's response quality"
              className="mb-2 bg-white p-4"
            />
          </Section>

          {/* DESIGN SYSTEM */}
          <Section id="design-system">
            <Eyebrow>DESIGN SYSTEM</Eyebrow>
            <Heading>The components.</Heading>
            <Shot
              src="https://framerusercontent.com/images/hk6JwfNiFmVMN3L42ffL42Z1c.png"
              width={838}
              height={385}
              alt="Design system components used throughout the ChatSlide AI chat panel"
            />
          </Section>

          {/* PRODUCT */}
          <Section id="product">
            <Eyebrow>PRODUCT</Eyebrow>
            <Heading>How users collaborate with AI.</Heading>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-8">
              <div className="border border-neutral-200 rounded-lg p-6">
                <h3 className="font-serif text-lg mb-3">AI Slide Editing</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  User types in a prompt → The AI explains the logic and
                  makes slide changes accordingly
                </p>
              </div>
              <div className="border border-neutral-200 rounded-lg p-6">
                <h3 className="font-serif text-lg mb-3">Unclear Prompting</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  User types unclear prompt → AI asks for clarification
                  before taking action
                </p>
              </div>
              <div className="border border-neutral-200 rounded-lg p-6">
                <h3 className="font-serif text-lg mb-3">Slide Selection</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  User switches between slides to control where edits are
                  applied
                </p>
              </div>
              <div className="border border-neutral-200 rounded-lg p-6">
                <h3 className="font-serif text-lg mb-3">Shortcut Toolbar</h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  User applies quick edits using shortcut toolbar without
                  typing, for efficiency
                </p>
                <Shot
                  src="https://framerusercontent.com/images/qSe0irnn2ARwL7vozfIhgfqdCs.png"
                  width={454}
                  height={405}
                  alt="Shortcut toolbar exposing writing and image quick actions"
                />
              </div>
            </div>
          </Section>

          {/* REFLECTION */}
          <Section id="reflection">
            <Eyebrow>REFLECTION</Eyebrow>
            <Heading>Mistakes, metrics, moving forward…</Heading>

            <SubHeading>Mistakes: What I learned</SubHeading>
            <Shot
              src="https://framerusercontent.com/images/qXAKVYPv9dJaOi2aKNulyOlepg.png"
              width={838}
              height={124}
              alt="Three lessons learned: explaining AI's reasoning, setting realistic expectations, and designing for user control"
              className="mb-12 bg-white p-4"
            />

            <SubHeading>Metrics: What impact I made</SubHeading>
            <ul className="text-sm text-neutral-700 space-y-3 mb-12 list-disc pl-5 max-w-xl">
              <li>90% of testers preferred the updated shortcut toolbar</li>
              <li>80% success rate across revised prompt workflows</li>
              <li>4x increase in perceived relevance of AI edits</li>
              <li>70% reduction in AI editing the wrong slide</li>
            </ul>

            <SubHeading>Moving Forward: What I would do differently</SubHeading>
            <Shot
              src="https://framerusercontent.com/images/s9RlUsLc51Nfm6OqSl7pnw97L1Y.png"
              width={838}
              height={162}
              alt="Three next steps: validating edge cases at the system level, introducing session memory, and building in more fail states"
              className="bg-white p-4"
            />
          </Section>

          {/* Next in the collection */}
          <div className="mt-4 border border-neutral-200 rounded-lg p-8 text-center">
            <p className="text-xs text-neutral-400 mb-2">
              ✧˖° Next in the collection.
            </p>
            <Link
              href="/kappa-theta-pi"
              className="font-serif text-lg hover:text-violet-600 transition-colors"
            >
              Kappa Theta Pi Recruitment App
            </Link>
            <div className="relative w-full max-w-lg mx-auto h-56 mt-6 rounded-lg overflow-hidden border border-neutral-200">
              <Image
                src="https://framerusercontent.com/images/LAyVi4L81e58X40TCrc6VqTIEkM.png"
                alt="Kappa Theta Pi Recruitment App preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
