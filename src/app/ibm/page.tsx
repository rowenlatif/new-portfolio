import Image from "next/image";

export default function IbmPage() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero banner — no image, project is under NDA */}
      <div className="w-full h-64 sm:h-80 lg:h-96 bg-neutral-100" />

      <div className="w-full px-6 py-10 sm:px-10 lg:px-16 flex gap-16">
        {/* Sticky contents sidebar */}
        <aside className="hidden lg:block w-40 shrink-0">
          <div className="sticky top-[var(--sidebar-top)] transition-[top] duration-300 ease-out text-xs text-neutral-400 tracking-wide space-y-3">
            <p>CONTENTS.</p>
            <p>01 Outcome</p>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0 max-w-4xl">
          <h1 className="font-serif text-3xl mb-4">IBM Maximo AI</h1>

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
              className="rounded-full border border-neutral-300 px-4 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors"
            >
              Visit Demo →
            </a>
          </div>

          <p className="text-neutral-700 mb-10">
            Designing agentic AI experiences for asset managment.
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
              <p className="text-sm text-neutral-700">Engineers</p>
            </div>
            <div>
              <p className="text-xs text-neutral-400 mb-1">Timeline</p>
              <p className="text-sm text-neutral-700">Aug 2026 – Dec 2026</p>
            </div>
            <div>
              <p className="text-xs text-neutral-400 mb-1">Skills</p>
              <p className="text-sm text-neutral-700">Figma</p>
              <p className="text-sm text-neutral-700">FigmaMake</p>
              <p className="text-sm text-neutral-700">Adobe AfterEffects</p>
            </div>
          </div>

          <div className="border border-neutral-200 rounded-lg p-8 mb-16 flex items-center justify-between gap-6">
            <div className="max-w-md">
              <p className="text-olive text-xs font-medium tracking-wide mb-3">
                REMINDER
              </p>
              <p className="text-neutral-700 text-sm leading-relaxed">
                This case study is under NDA! You can keep scrolling below to
                view my learning outcomes. If you&apos;d like to hear more,
                please reach out — I would love to chat.
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <div className="relative w-24 h-24">
                <Image
                  src="https://framerusercontent.com/images/UswEW0OLQvwuPsFn2c3omSJ9U.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <div className="relative w-20 h-20">
                <Image
                  src="https://framerusercontent.com/images/UswEW0OLQvwuPsFn2c3omSJ9U.png"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <p className="text-olive text-xs font-medium tracking-wide mb-3">
            REFLECTIONS
          </p>
          <h2 className="font-serif text-2xl mb-3">
            Mistakes, Metrics, and Moving Forward…
          </h2>
          <p className="text-neutral-700 text-sm mb-8">Text</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {["01 Text", "02 Text", "03 Text"].map((label) => (
              <div
                key={label}
                className="border border-neutral-200 rounded-lg p-5"
              >
                <p className="text-sm text-neutral-900 mb-2">{label}</p>
                <p className="text-sm text-neutral-500">Text</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
