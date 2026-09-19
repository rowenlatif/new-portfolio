import Image from "next/image";

const NAVY = "#0b3d78";

const sidebar = [
  { id: "highlights", label: "HIGHLIGHTS" },
  { id: "context", label: "CONTEXT" },
  { id: "problem", label: "PROBLEM" },
  { id: "research", label: "RESEARCH" },
  { id: "design-system", label: "DESIGN SYSTEM" },
  { id: "product", label: "PRODUCT" },
  { id: "reflection", label: "REFLECTION" },
  { id: "launch", label: "LAUNCH" },
];

const highlights = [
  {
    video: "https://framerusercontent.com/assets/LBtRAnaGrZ2iCBsDwLlrKri1o0.mp4",
    title: "Explore the KTP Community",
    text: "People tab to centralize member info and improve transparency, helping 100+ applicants better understand who they'll meet during rush.",
  },
  {
    video: "https://framerusercontent.com/assets/yy8IipMhOIc5Y91PfpRcOvugA.mp4",
    title: "Upcoming Events & In-App Reminders",
    text: "Event hub with smart reminders, making it easier for users to access schedules, RSVP, and stay organized without switching platforms.",
  },
  {
    video: "https://framerusercontent.com/assets/4epsiUEIw3PPGNl3rB5rCi4u20.mp4",
    title: "Account Creation",
    text: "Simplified account creation with a retro-tech touch!",
  },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="text-xs font-medium tracking-wide mb-3" style={{ color: NAVY }}>
      {children}
    </p>
  );
}

export default function KappaThetaPiPage() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero banner */}
      <div className="w-full h-56 sm:h-80 lg:h-96 flex items-center justify-center" style={{ backgroundColor: "rgb(1, 53, 123)" }}>
        <div className="relative w-[320px] sm:w-[500px] lg:w-[695px] h-full">
          <Image
            src="https://framerusercontent.com/images/jSubakI98v1uuUcZGx6dKNgHho.png"
            alt="KTP recruitment app phone mockups: Rush starts here, your KTP hub, never miss an event, meet the community, become a brother today"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="w-full px-6 py-10 sm:px-10 lg:px-16 flex gap-16">
        {/* Sticky contents sidebar */}
        <aside className="hidden lg:block w-40 shrink-0">
          <div className="sticky top-10 text-xs text-neutral-400 tracking-wide space-y-3">
            <p>CONTENTS.</p>
            {sidebar.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="block hover:text-neutral-900">
                {s.label}
              </a>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0 max-w-4xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-9 h-9 shrink-0">
              <Image src="/images/about/logo-ktp.png" alt="Kappa Theta Pi crest" fill className="object-contain" />
            </div>
            <h1 className="font-serif text-3xl">Recruitment App</h1>
          </div>

          <p className="text-neutral-700 mb-10 max-w-2xl">
            A mobile app designed to streamline the member experience for Kappa Theta Pi, a professional
            tech fraternity. Built with a subtle retro-tech aesthetic, the app helps potential &amp; active
            members stay organized by centralizing tasks, events, and communication in one place.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
            <div>
              <p className="text-xs text-neutral-400 mb-1">Role</p>
              <p className="text-sm text-neutral-700">
                User Experience Research, Interface Design, Prototype and Frontend Development
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-400 mb-1">Team</p>
              <p className="text-sm text-neutral-700">1 Project Lead, 2 Tech Leads, 13 Members</p>
            </div>
            <div>
              <p className="text-xs text-neutral-400 mb-1">Duration</p>
              <p className="text-sm text-neutral-700">February 2025 - May 2025</p>
            </div>
          </div>

          <div className="border border-neutral-200 rounded-lg p-8 mb-24 flex items-center justify-between gap-6">
            <div className="max-w-md">
              <p className="text-xs font-medium tracking-wide mb-3" style={{ color: NAVY }}>
                REMINDER
              </p>
              <p className="text-neutral-700 text-sm leading-relaxed">
                This case study is currently in the process of being revamped! You can keep scrolling
                below to view the older iteration.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <div className="relative w-20 h-20">
                <Image
                  src="https://framerusercontent.com/images/UswEW0OLQvwuPsFn2c3omSJ9U.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-16 h-16">
                <Image
                  src="https://framerusercontent.com/images/UswEW0OLQvwuPsFn2c3omSJ9U.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* HIGHLIGHTS */}
          <section id="highlights" className="mb-24 scroll-mt-10">
            <Eyebrow>✦ HIGHLIGHTS</Eyebrow>
            <h2 className="font-serif text-2xl mb-12">Rush starts here.</h2>

            <div className="space-y-16">
              {highlights.map((h) => (
                <div key={h.title} className="flex flex-col sm:flex-row items-center gap-10">
                  <video
                    src={h.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-[220px] h-auto rounded-md border border-neutral-200 shrink-0"
                  />
                  <div className="max-w-sm text-center sm:text-left">
                    <h3 className="font-serif text-xl mb-3">{h.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{h.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTEXT */}
          <section id="context" className="mb-24 scroll-mt-10">
            <Eyebrow>✦ CONTEXT</Eyebrow>
            <h2 className="font-serif text-2xl mb-4">Hold on, what is a tech frat?</h2>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl mb-8">
              Kappa Theta Pi is the first official co-ed tech fraternity in the nation! Northeastern&apos;s
              Omega chapter is a space for students in CS, Design, Engineering, and related fields to
              connect, collaborate, and grow professionally. As a newer chapter, we wanted to rethink what
              recruitment could look like. Traditional Greek life isn&apos;t our model; KTP is built to be
              inclusive, career-driven, and community-focused.
            </p>
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="https://framerusercontent.com/images/IMKePPfNGWzmBoHwpv4yrDtsXiE.png"
                alt="Kappa Theta Pi Omega chapter members group photo"
                fill
                className="object-cover"
              />
            </div>
          </section>

          {/* PROBLEM */}
          <section id="problem" className="mb-24 scroll-mt-10">
            <Eyebrow>✦ PROBLEM</Eyebrow>
            <h2 className="font-serif text-2xl mb-4">
              Finding the right info quickly and fairly was the biggest issue.
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl mb-3">
              Every semester, KTP evaluates 70+ applicants over the course of 2 weeks, reviewing essays,
              interviews, and notes from multiple social events. Active Members are expected to make
              decisions fast, but the information they need is scattered across Google Docs, Notion, Slack,
              and other random files. There&apos;s no centralized system.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl mb-8">
              This makes it difficult during voting, when a room of 40 members try to recall who said what
              about which applicant. The process can be slow, disorganized, and risk bias.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-neutral-200">
                <Image
                  src="https://framerusercontent.com/images/7dKTkzhnKf6PnuZJ5fbcdpjyfI.png"
                  alt="Pain point: information is too scattered, and we make decisions fast"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-neutral-200">
                <Image
                  src="https://framerusercontent.com/images/DhLg3CKGywQS6tHS9UAvUNGBxGs.png"
                  alt="Pain point: members want to be formal, yet approachable"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* RESEARCH & EXPLORATION */}
          <section id="research" className="mb-24 scroll-mt-10">
            <Eyebrow>✦ RESEARCH &amp; EXPLORATION</Eyebrow>

            <h3 className="font-serif text-xl mb-3">
              01. Two Key Users: Active Members (Brothers) &amp; Potential Members (Pledges)
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl mb-8">
              Research showed that Potentials felt overwhelmed without clear schedules or guidance, while
              Actives struggled to find and evaluate applicant information quickly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="https://framerusercontent.com/images/U5s5UwN6aaYtXmrL0NZMrMJqxSc.png"
                  alt="Persona: Ayla Urquizo, Brother"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                <Image
                  src="https://framerusercontent.com/images/WTUtWvVFqVVd4zazV9ih4Ggjo.png"
                  alt="Persona: Adheep Rampure, Pledge"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl mb-6">
              To address these distinct needs, we designed user flows for both groups, guided by product
              goals shaped through research and user interviews.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
              <div>
                <p className="text-sm font-medium text-neutral-900 mb-2">Informed Product Goals:</p>
                <ul className="text-sm text-neutral-600 space-y-1.5">
                  <li>⊹ Centralize recruitment workflows</li>
                  <li>⊹ Support fair, efficient decision-making</li>
                  <li>⊹ Make process approachable for potential members</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900 mb-2">Informed User Flows:</p>
                <ul className="text-sm text-neutral-600 space-y-1.5">
                  <li>⊹ People → Profile Flow</li>
                  <li>⊹ Calendar Flow</li>
                </ul>
              </div>
            </div>

            <h3 className="font-serif text-xl mb-3">
              02. Competitive Analysis: The competition lacked structure and personalization
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl mb-8">
              To better understand the space, I reviewed Slack, Notion, and Handshake to see how they
              support key workflows like recruitment, events, and member visibility.
            </p>
            <div className="relative w-full aspect-[21/9] rounded-lg overflow-hidden mb-16">
              <Image
                src="https://framerusercontent.com/images/wK3N5XZR4vBVR5MiObvnMq78Pk.png"
                alt="Competitive analysis of Slack, Notion, and Handshake"
                fill
                className="object-contain"
              />
            </div>

            <h3 className="font-serif text-xl mb-3">03. Information architecture</h3>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl mb-8">
              I created a map that split the app into two distinct views: pledge-facing and member-facing.
              This helped us avoid navigation overload and prioritize the most-used features for each user
              group. It also laid the groundwork for our tab structure and future scalability.
            </p>
            <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden border border-neutral-200 mb-16">
              <Image
                src="https://framerusercontent.com/images/bLRcijiNfGhp750g7UmTjpOICDQ.png"
                alt="Information architecture flowchart for the KTP app"
                fill
                className="object-contain"
              />
            </div>

            <h3 className="font-serif text-xl mb-3">04. Ideation &amp; Iteration</h3>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl mb-3">
              We began with a bold retro-tech direction, with UI inspired by early computing. It looked
              cool and matched our tech roots, but testing quickly revealed it sacrificed usability for
              aesthetics.
            </p>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl mb-8">
              Users found it hard to navigate and visually dense. While the style got compliments, it
              wasn&apos;t intuitive so we pivoted toward a cleaner, more modern system.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-neutral-200 mb-2">
                  <Image
                    src="https://framerusercontent.com/images/LUmBXJFUYRW9nslbeMrAt1svRQ.png"
                    alt="Early retro tech ideation screens"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-neutral-400">early retro tech ideation</p>
              </div>
              <div>
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-neutral-200 mb-2">
                  <Image
                    src="https://framerusercontent.com/images/QEC7kr0ZUMHv0ioAOPUOKkhRcu0.png"
                    alt="Various exploration screens"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-neutral-400">various exploration screens</p>
              </div>
            </div>
          </section>

          {/* DESIGN SYSTEM */}
          <section id="design-system" className="mb-24 scroll-mt-10">
            <Eyebrow>✦ DESIGN SYSTEM</Eyebrow>
            <h2 className="font-serif text-2xl mb-4">The building blocks!</h2>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl mb-8">
              I built a modular design system to ensure consistency, accessibility, and scalability across
              the app. As a CS major, I worked closely with engineers, making handoff smoother and
              implementation-ready from the start.
            </p>
            <div className="relative w-full aspect-[16/8] rounded-lg overflow-hidden border border-neutral-200">
              <Image
                src="https://framerusercontent.com/images/4ZC5ZUkbg5TbdtLNiMi61E5oZk.png"
                alt="Design system: tabs, colors, typography, buttons, text fields, and modals"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* PRODUCT */}
          <section id="product" className="mb-24 scroll-mt-10">
            <Eyebrow>✦ PRODUCT</Eyebrow>
            <h2 className="font-serif text-2xl mb-12">
              How active and potential members interact with each other.
            </h2>

            <h3 className="font-serif text-xl mb-3">⊹ People → Profile Flow</h3>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl mb-6">
              Actives &amp; Potentials can search and view people. Actives can keep notes within profiles
              and Potentials can see who is involved in the Rush process.
            </p>
            <div className="relative w-full aspect-[16/8] rounded-lg overflow-hidden mb-16" style={{ backgroundColor: "rgb(1, 53, 123)" }}>
              <Image
                src="https://framerusercontent.com/images/DkvEFdFnLS3cazbNtuyGr0oCvVU.png"
                alt="People to profile flow screens"
                fill
                className="object-contain"
              />
            </div>

            <h3 className="font-serif text-xl mb-3">⊹ Calendar Flow</h3>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl mb-6">
              Actives &amp; Potentials can view upcoming events, see event details, and RSVP.
            </p>
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-neutral-200">
              <Image
                src="https://framerusercontent.com/images/l4yUeiw3BWVUZM2EvyCGvXRF2o.png"
                alt="Calendar flow screens"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* REFLECTION */}
          <section id="reflection" className="mb-24 scroll-mt-10">
            <Eyebrow>✦ REFLECTION</Eyebrow>
            <h2 className="font-serif text-2xl mb-12">Mistakes, moving forward…</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <p className="text-sm font-medium text-neutral-900 mb-4">Mistakes: What I learned</p>
                <div className="space-y-4">
                  <div className="border border-neutral-200 rounded-lg p-5">
                    <p className="text-sm text-neutral-700">
                      Our first pass leaned into a terminal-inspired style with 8-bit buttons and low
                      contrast.
                    </p>
                  </div>
                  <div className="border border-neutral-200 rounded-lg p-5">
                    <p className="text-sm text-neutral-900 mb-1">Usability suffered</p>
                    <p className="text-sm text-neutral-500">
                      The nostalgic aesthetic hurt readability and frustrated users, even those who were
                      tech savvy.
                    </p>
                  </div>
                  <div className="border border-neutral-200 rounded-lg p-5">
                    <p className="text-sm text-neutral-900 mb-1">Key lesson</p>
                    <p className="text-sm text-neutral-500">
                      Aesthetic nostalgia can&apos;t outrank usability.
                    </p>
                  </div>
                  <div className="border border-neutral-200 rounded-lg p-5">
                    <p className="text-sm text-neutral-900 mb-1">Workflow challenge</p>
                    <p className="text-sm text-neutral-500">
                      Updating designs mid-build forced the dev team to spend hours reworking flows.
                    </p>
                  </div>
                  <div className="border border-neutral-200 rounded-lg p-5">
                    <p className="text-sm text-neutral-900 mb-1">Process takeaway</p>
                    <p className="text-sm text-neutral-500">
                      Real-time collaboration only works when there&apos;s a shared, locked definition of
                      &quot;done&quot;.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-neutral-900 mb-4">
                  Moving Forward: What I would do differently
                </p>
                <div className="space-y-4">
                  <div className="border border-neutral-200 rounded-lg p-5">
                    <p className="text-sm text-neutral-900 mb-1">Prototype multiple styles early</p>
                    <p className="text-sm text-neutral-500">
                      Test both retro and modern directions up front to align on visuals before building.
                    </p>
                  </div>
                  <div className="border border-neutral-200 rounded-lg p-5">
                    <p className="text-sm text-neutral-900 mb-1">Kickoff with developers</p>
                    <p className="text-sm text-neutral-500">Align better and earlier on scope.</p>
                  </div>
                  <div className="border border-neutral-200 rounded-lg p-5">
                    <p className="text-sm text-neutral-900 mb-1">Publish a component library</p>
                    <p className="text-sm text-neutral-500">
                      Release as soon as designs are approved to reduce rework.
                    </p>
                  </div>
                  <div className="border border-neutral-200 rounded-lg p-5">
                    <p className="text-sm text-neutral-900 mb-1">Weekly check-ins</p>
                    <p className="text-sm text-neutral-500">
                      Surface blockers and lock decisions faster through consistent updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* LAUNCH */}
          <section id="launch" className="mb-24 scroll-mt-10">
            <Eyebrow>✦ LAUNCH</Eyebrow>
            <h2 className="font-serif text-2xl mb-3">See our app live in the Apple Store!</h2>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-2xl mb-8">
              Take a look at our app in the App Store!
            </p>
            <div className="relative w-full aspect-[16/7] rounded-lg overflow-hidden" style={{ backgroundColor: "rgb(1, 53, 123)" }}>
              <Image
                src="https://framerusercontent.com/images/CjUcPRgw9GErMp1sOMaLyvyoeuI.png"
                alt="KTP app icon and phone mockups shown in the App Store"
                fill
                className="object-contain"
              />
            </div>
          </section>

          {/* Next in the collection */}
          <a
            href="/cinecircle"
            className="block border border-neutral-800 rounded hover:-rotate-1 transition-transform p-10 text-center"
          >
            <p className="text-xs text-neutral-500 mb-3">CINECIRCLE, 2025</p>
            <h3 className="font-serif text-2xl mb-3">
              Designing how South Asian Audiences express film discussions
            </h3>
            <p className="text-sm text-neutral-500">Case Study / UX</p>
          </a>
        </div>
      </div>
    </main>
  );
}
