import Image from "next/image";
import Link from "next/link";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-orange-600 text-xs font-medium tracking-wide mb-3">
      {children}
    </p>
  );
}

function GoalCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 rounded-2xl bg-orange-50 border border-orange-100 p-6 text-center text-sm text-neutral-700">
      {children}
    </div>
  );
}

function ImagePlaceholder({ caption }: { caption: string }) {
  return (
    <div className="w-full">
      <div className="w-full h-48 rounded-2xl bg-neutral-100 border border-neutral-200" />
      <p className="text-center text-xs text-neutral-400 mt-3">{caption}</p>
    </div>
  );
}

export default function SeeFoodPage() {
  return (
    <main className="flex-1 flex flex-col">
      <div className="w-full px-6 py-16 sm:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto">
          {/* Intro */}
          <h1 className="font-serif text-3xl sm:text-4xl text-orange-600 mb-6">
            SeeFood: An Augmented Dining Concept
          </h1>
          <p className="text-neutral-700 text-sm leading-relaxed mb-12">
            This project was in partnership with Tencent&apos;s client,
            ChatSlide AI. As a Product Design Intern, I worked with different
            AI-driven clients to simplify their products&apos; complex
            workflows! This case study will outline 1 of the 3 projects I
            worked on.
          </p>

          {/* Meta row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20 pb-12 border-b border-neutral-200">
            <div>
              <p className="text-xs text-neutral-400 mb-2">Skills</p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                AR Motion Prototyping
                <br />
                Spacial UI Design
                <br />
                Video editing + Compositing
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-400 mb-2">Tools</p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                Figma
                <br />
                Adobe After Effects
                <br />
                Adobe Premier Pro
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-400 mb-2">Duration</p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                A few weeks in May
              </p>
            </div>
          </div>

          {/* CONTEXT */}
          <section className="mb-20">
            <Eyebrow>✦ CONTEXT</Eyebrow>
            <h2 className="font-serif text-2xl mb-6">
              Elevating food awareness through technology.
            </h2>
            <p className="text-neutral-700 text-sm mb-6">I had two main goals:</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <GoalCard>
                Use AR to create spatially meaningful interactions, not just
                a gimmick
              </GoalCard>
              <GoalCard>
                Solve a real friction point in everyday experiences
              </GoalCard>
            </div>
          </section>

          {/* INSIGHT */}
          <section className="mb-20">
            <Eyebrow>✦ INSIGHT</Eyebrow>
            <h2 className="font-serif text-2xl mb-6">
              Menus are often vague, intimidating, or devoid of visuals.
            </h2>
            <p className="text-neutral-700 text-sm leading-relaxed mb-8">
              How do you order something if you don&apos;t know what it looks
              like?
              <br />
              How do you know whether that &ldquo;sunchoke tartine&rdquo; is a
              snack or a full meal?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <GoalCard>
                Use AR to create spatially meaningful interactions, not just
                a gimmick
              </GoalCard>
              <GoalCard>
                Solve a real friction point in everyday experiences
              </GoalCard>
            </div>
            <ImagePlaceholder caption="the real dish (left) vs the generated overlay (right)" />
          </section>

          {/* IDEA */}
          <section className="mb-20">
            <Eyebrow>✦ IDEA</Eyebrow>
            <h2 className="font-serif text-2xl mb-6">
              What if you could see your order before it even leaves the
              kitchen?
            </h2>
            <p className="text-neutral-700 text-sm leading-relaxed mb-8">
              Imagine scanning a QR code and watching a holographic tartine
              appear on your plate, complete with ingredient callouts, a
              taste-bud profile, and nutritional data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <GoalCard>Reduces server back-and-forth</GoalCard>
              <GoalCard>Empowers curious diners to branch out</GoalCard>
              <GoalCard>
                Encourages faster, more confident decisions
              </GoalCard>
            </div>
          </section>

          {/* DREAM */}
          <section className="mb-20">
            <Eyebrow>✦ DREAM</Eyebrow>
            <h2 className="font-serif text-2xl mb-6">
              Originally, I wanted to build a full WebXR prototype that ran
              live on mobile.
            </h2>
            <p className="text-neutral-700 text-sm mb-6">To do this, I needed to:</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <GoalCard>
                Film real-world restaurant footage at a stable angle
              </GoalCard>
              <GoalCard>
                Lock AR elements precisely to real plates via camera tracking
              </GoalCard>
              <GoalCard>Create UI that feels futuristic but not sci-fi</GoalCard>
            </div>
            <ImagePlaceholder caption="Figma exploration of UI ideas" />
          </section>

          {/* PIVOT */}
          <section className="mb-20">
            <Eyebrow>✦ PIVOT</Eyebrow>
            <h2 className="font-serif text-2xl mb-6">
              Filming was easy, but post-production was not&hellip;
            </h2>
            <p className="text-neutral-700 text-sm leading-relaxed">
              I pivoted from building an interactive prototype to crafting a
              motion concept video. This allowed me to focus on the vision
              before engineering the solution.
            </p>
          </section>

          {/* PROCESS */}
          <section className="mb-20">
            <Eyebrow>✦ PROCESS</Eyebrow>
            <h2 className="font-serif text-2xl mb-3">
              Filming was east, but post-production was not&hellip;
            </h2>
            <p className="text-neutral-700 text-sm leading-relaxed mb-10">
              I pivoted from building an interactive prototype to crafting a
              motion concept video. This allowed me to focus on the vision
              before engineering the solution.
            </p>

            <div className="mb-12">
              <h3 className="font-serif text-lg mb-2">01. Drafting</h3>
              <p className="text-neutral-700 text-sm leading-relaxed mb-6">
                Sketched out camera angles and UI mockups before filming. The
                challenge was balancing futuristic tone with grounded
                execution; something that could plausibly exist in the next
                1–2 years.
              </p>
              <div className="relative w-full h-72 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200">
                <Image
                  src="https://framerusercontent.com/images/D5LpOT8Gme6lS953QFpdPt5UsQ.png"
                  alt="Storyboarding drafts"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-xs text-neutral-400 mt-3">
                storyboarding drafts
              </p>
            </div>

            <div className="mb-12">
              <h3 className="font-serif text-lg mb-2">01. User Feedback</h3>
              <p className="text-neutral-700 text-sm leading-relaxed mb-6">
                Showed early clips to a few designer and non-designer
                friends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <GoalCard>
                  Unexpected finding: people weren&apos;t sure if the dish
                  was real or AI&hellip;
                </GoalCard>
                <GoalCard>So I leaned into the uncanniniess!</GoalCard>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-2">03. Editing</h3>
              <p className="text-neutral-700 text-sm leading-relaxed mb-6">
                Composited in After Effects using 3D Camera Tracker to anchor
                the dish. I color graded the overlaid tartine to match the
                restaurant&apos;s lighting and added UI text in Premiere.
              </p>
              <div className="relative w-full h-72 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200">
                <Image
                  src="https://framerusercontent.com/images/kiLB5J1kqFaAumZgZOjsBV4HOQ.png"
                  alt="Screenshot of editing process"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-xs text-neutral-400 mt-3">
                screenshot of editing process + various edited items
              </p>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section className="mb-20">
            <Eyebrow>✦ EXPERIENCE</Eyebrow>
            <h2 className="font-serif text-2xl mb-3">
              Instant 3D Dish Preview
            </h2>
            <p className="text-neutral-700 text-sm leading-relaxed mb-6">
              A conversational assistant listens to your order and generates
              a holographic approximation of the dish.
            </p>
            <div className="relative w-full h-80 rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 mb-14">
              <Image
                src="https://framerusercontent.com/images/Ji0TuemOctHnyr66vpetbV0fio.png"
                alt="Instant 3D dish preview"
                fill
                className="object-contain"
              />
            </div>

            <h3 className="font-serif text-2xl mb-3">
              Nutritional + Ingredient Callouts
            </h3>
            <p className="text-neutral-700 text-sm leading-relaxed mb-6">
              Calories, key ingredients, and taste sliders offer quick
              insight into what you&apos;re about to eat.
            </p>
            <div className="w-full h-48 rounded-2xl bg-neutral-100 border border-neutral-200" />
          </section>

          {/* REFLECTION */}
          <section className="mb-20">
            <Eyebrow>✦ REFLECTION</Eyebrow>
            <h2 className="font-serif text-2xl mb-6">
              This project was my crash course in motion tools
            </h2>
            <p className="text-neutral-700 text-sm leading-relaxed mb-4">
              The hardest part was the camera tracking a shaky handheld
              video. I used the 3D Camera Tracker to attach a null to the
              plate&apos;s surface and tweaked keyframes manually until it
              stuck.
            </p>
            <p className="text-neutral-700 text-sm mb-6">
              If I were to do it again:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <GoalCard>
                I&apos;d prototype directly in Unity or WebXR to allow
                real-time interactivity
              </GoalCard>
              <GoalCard>Connect the UI to USDA live nutrition data</GoalCard>
              <GoalCard>Add voice and gesture-based shortcuts</GoalCard>
              <GoalCard>
                Build a working mobile MVP for user testing in real
                restaurants
              </GoalCard>
            </div>
            <ImagePlaceholder caption="early debug render of scanline dish reveal" />
          </section>

          {/* Next in collection */}
          <Link
            href="/kappa-theta-pi"
            className="block rounded-2xl border border-neutral-200 p-6 hover:bg-neutral-50 transition-colors"
          >
            <div className="flex items-center gap-6">
              <div className="relative w-24 h-16 shrink-0 rounded-lg overflow-hidden bg-neutral-100">
                <Image
                  src="https://framerusercontent.com/images/LAyVi4L81e58X40TCrc6VqTIEkM.png"
                  alt="Kappa Theta Pi Recruitment App"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-orange-600 text-xs font-medium tracking-wide mb-1">
                  ✧˖° Next in the collection.
                </p>
                <p className="font-serif text-lg text-neutral-900">
                  Kappa Theta Pi Recruitment App
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
