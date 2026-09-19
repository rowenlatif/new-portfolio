export default function Footer() {
  return (
    <footer className="w-full bg-olive text-white px-6 py-12 sm:px-10 lg:px-16 mt-auto">
      <p className="font-sans not-italic font-normal text-white text-lg tracking-wide mb-8">
        ─────── *ੈ✩‧₊˚✧˖*°࿐
      </p>
      <p className="font-serif text-3xl sm:text-4xl mb-2">
        Let&apos;s keep in
        <span className="font-script font-normal text-4xl sm:text-5xl ml-6">touch</span>!
      </p>
      <div className="flex items-center gap-2.5 text-lg mb-10">
        <a
          href="mailto:latif.f@northeastern.edu"
          className="group inline-flex items-center"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-2">Email</span>
          <span className="ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
            ↗
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/rowen-latif/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-2">LinkedIn</span>
          <span className="ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
            ↗
          </span>
        </a>
      </div>
      <div className="text-base text-white space-y-0.5">
        <p>Rowen Latif © 2026</p>
        <p>Built with love and iced coffee</p>
      </div>
    </footer>
  );
}
