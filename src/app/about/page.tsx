import Image from "next/image";

const experience = [
  { logo: "/images/about/logo-ibm.png", name: "IBM", role: "Product Designer", year: "2026" },
  { logo: "/images/about/logo-blackrock.png", name: "BlackRock", role: "Visual Designer", year: "2025" },
  { logo: "/images/about/logo-perplexity.png", name: "Perplexity", role: "UX Researcher", year: "2025" },
];

const generatePhotos = [
  "/images/about/generate-1.jpg",
  "/images/about/generate-2.jpg",
  "/images/about/generate-3.jpg",
  "/images/about/generate-4.jpg",
  "/images/about/generate-5.jpg",
];

const ktpPhotos = [
  "/images/about/ktp-1.jpg",
  "/images/about/ktp-2.jpg",
  "/images/about/ktp-3.jpg",
  "/images/about/ktp-4.jpg",
  "/images/about/ktp-5.jpg",
];

const rotations = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2"];

export default function AboutPage() {
  return (
    <main className="flex-1 px-6 sm:px-10 lg:px-16 py-10 grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-10">
      <aside className="hidden lg:block">
        <nav className="sticky top-10 text-xs tracking-wide text-neutral-400 space-y-3">
          <a href="#intro" className="block hover:text-neutral-900">INTRO</a>
          <a href="#experience" className="block hover:text-neutral-900">EXPERIENCE</a>
          <a href="#communities" className="block hover:text-neutral-900">COMMUNITIES</a>
        </nav>
      </aside>

      <div>
        <section id="intro" className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 mb-24">
          <div className="relative w-fit">
            <div className="relative w-[220px] h-[280px] rounded-sm overflow-hidden shadow-md">
              <Image src="/images/about/hero.png" alt="Rowen Latif" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white">
              <Image src="/images/about/coffee.png" alt="Iced coffee" fill className="object-cover" />
            </div>
          </div>
          <div className="pt-2">
            <h1 className="font-serif text-3xl mb-3">
              Hi, I&apos;m Rowen<span className="italic">!</span>
            </h1>
            <div className="flex gap-6 text-xs tracking-wide text-neutral-500 mb-6">
              <span>PHL / NYC</span>
              <span>CS AND DESIGN @ NEU</span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-700 max-w-xl mb-4">
              I love making things!! You can find me designing products at{" "}
              <a href="#communities" className="underline underline-offset-2">Generate</a>, leading brand
              campaigns for <a href="#communities" className="underline underline-offset-2">Kappa Theta Pi</a>,
              or hunting for the next best coffee spot in Boston.
            </p>
            <p className="text-sm leading-relaxed text-neutral-700 max-w-xl">
              When I&apos;m not spending hours on Figma, I enjoy fashion, reading, pottery, and finding hidden
              gem cafes!
            </p>
          </div>
        </section>

        <section id="experience" className="mb-24">
          <h2 className="font-serif text-3xl mb-10">Experience</h2>
          <div className="space-y-6">
            {experience.map((item) => (
              <div key={item.name} className="flex items-center gap-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <Image src={item.logo} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-lg">{item.name}</span>
                  <span className="text-sm text-neutral-500">{item.role}</span>
                  <span className="text-sm text-neutral-400">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="communities">
          <h2 className="font-serif text-3xl mb-10">Communities</h2>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6 items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                  <Image src="/images/about/logo-generate.png" alt="Generate" fill className="object-cover" />
                </div>
                <span className="font-serif text-xl">Generate</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                This is where I first got into design, where I learned Figma for the first time and truly
                understood the fundamentals of how to create good user experiences. I&apos;ve met some of my
                closest friends here!
              </p>
            </div>
            <div className="flex gap-4 pb-4 overflow-x-auto">
              {generatePhotos.map((src, i) => (
                <div
                  key={src}
                  className={`relative shrink-0 w-40 h-48 sm:w-48 sm:h-56 bg-white p-2 pb-6 shadow-md ${rotations[i % rotations.length]}`}
                >
                  <div className="relative w-full h-full">
                    <Image src={src} alt="Generate memory" fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-6 items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                  <Image src="/images/about/logo-ktp.png" alt="Kappa Theta Pi" fill className="object-cover" />
                </div>
                <span className="font-serif text-xl">Kappa Theta Pi</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                I&apos;ve been in KTP since my sophomore year and have been active as VP Marketing, Design
                Lead, and more! I&apos;ve grown so much from KTP, and am so happy to be giving back as a
                mentor and instructor now.
              </p>
            </div>
            <div className="flex gap-4 pb-4 overflow-x-auto">
              {ktpPhotos.map((src, i) => (
                <div
                  key={src}
                  className={`relative shrink-0 w-40 h-48 sm:w-48 sm:h-56 bg-white p-2 pb-6 shadow-md ${rotations[i % rotations.length]}`}
                >
                  <div className="relative w-full h-full">
                    <Image src={src} alt="Kappa Theta Pi memory" fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
