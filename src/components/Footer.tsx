export default function Footer() {
  return (
    <footer className="w-full bg-olive text-white px-10 py-12 mt-auto">
      <p className="font-sans not-italic font-normal text-white text-lg tracking-wide mb-3">
        ─────── *ੈ✩‧₊˚✧˖*°࿐
      </p>
      <p className="font-serif text-3xl sm:text-4xl mb-2">
        Let&apos;s keep in
        <span className="font-script font-normal text-4xl sm:text-5xl ml-6">touch</span>!
      </p>
      <div className="flex items-center gap-2.5 text-lg mb-10">
        <a href="mailto:latif.f@northeastern.edu" className="group inline-flex items-center">
          <span>Email</span>
          <span className="inline-block overflow-hidden w-0 opacity-0 ml-0 group-hover:w-5 group-hover:opacity-100 group-hover:ml-1 transition-all duration-200">
            ↗
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/rowen-latif/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center"
        >
          <span>LinkedIn</span>
          <span className="inline-block w-5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
