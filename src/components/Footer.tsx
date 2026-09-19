export default function Footer() {
  return (
    <footer className="w-full bg-olive text-white px-6 py-12 sm:px-10 lg:px-16 mt-auto">
      <div className="flex items-center gap-3 text-lg tracking-wide mb-8">
        <span className="h-px w-16 bg-white/60" />
        <span className="font-script text-2xl">
          ✧ ˚ ☆ ˖ ⋆ ✦ ˚ ⋆｡
        </span>
      </div>
      <p className="font-serif text-3xl sm:text-4xl mb-4">
        Let&apos;s keep in <span className="font-script text-4xl sm:text-5xl">touch</span>!
      </p>
      <div className="flex items-center gap-6 text-base mb-10">
        <a href="mailto:latif.f@northeastern.edu" className="hover:opacity-70 transition-opacity">
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/rowen-latif/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          LinkedIn
        </a>
      </div>
      <div className="text-sm text-white/80 space-y-0.5">
        <p>Rowen Latif © 2026</p>
        <p>Built with love and iced coffee</p>
      </div>
    </footer>
  );
}
