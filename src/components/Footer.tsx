export default function Footer() {
  return (
    <footer className="w-full bg-olive text-white px-6 py-12 sm:px-10 lg:px-16 mt-auto">
      <p className="font-script text-lg tracking-wide mb-8">
        ─────── *ੈ✩‧₊˚✧˖*°࿐
      </p>
      <p className="font-serif text-3xl sm:text-4xl mb-2">
        Let&apos;s keep in <span className="font-script text-4xl sm:text-5xl">touch</span>!
      </p>
      <div className="flex items-center gap-6 text-base mb-10">
        <a
          href="mailto:latif.f@northeastern.edu"
          className="group inline-flex items-center gap-1 hover:text-white/70 transition-colors"
        >
          Email
          <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
            ↗
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/rowen-latif/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 hover:text-white/70 transition-colors"
        >
          LinkedIn
          <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
            ↗
          </span>
        </a>
      </div>
      <div className="text-base text-white/80 space-y-0.5">
        <p>Rowen Latif © 2026</p>
        <p>Built with love and iced coffee</p>
      </div>
    </footer>
  );
}
