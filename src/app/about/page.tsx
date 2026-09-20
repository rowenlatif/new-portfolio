import Image from "next/image";

const experience = [
  { logo: "/images/about/logo-ibm.png", name: "IBM", role: "Product Designer", year: "2026" },
  { logo: "/images/about/logo-blackrock.png", name: "BlackRock", role: "Visual Designer", year: "2025" },
  { logo: "/images/about/logo-perplexity.png", name: "Perplexity", role: "UX Researcher", year: "2025" },
];

const generatePhotos = [
  { src: "/images/about/generate-1.jpg", ratio: 278.92 / 179.36, caption: "The Cinecircle Team!" },
  { src: "/images/about/generate-2.jpg", ratio: 281.92 / 182.04, caption: "Me explaining my design process" },
  { src: "/images/about/generate-3.jpg", ratio: 270.11 / 175.03, caption: "Our team out on retreat!" },
  { src: "/images/about/generate-4.jpg", ratio: 197.91 / 198.84, caption: "Silly slack meetings" },
  { src: "/images/about/generate-5.jpg", ratio: 173.44 / 223.34, caption: "Moral drinks" },
];

const ktpPhotos = [
  { src: "/images/about/ktp-1.jpg", ratio: 198 / 243, caption: "I have twins!" },
  { src: "/images/about/ktp-2.jpg", ratio: 270 / 175, caption: "We got new letters!!" },
  { src: "/images/about/ktp-3.jpg", ratio: 214.92 / 216.12, caption: "A very professional pic" },
  { src: "/images/about/ktp-4.jpg", ratio: 281.92 / 182.04, caption: "Tabling for our club" },
  { src: "/images/about/ktp-5.jpg", ratio: 198 / 243, caption: "Relaxing retreat" },
];

const rotations = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2"];

export default function AboutPage() {
  return (
    <main className="flex-1 px-10 py-10 grid grid-cols-1 lg:grid-cols-[140px_1fr] gap-10">
      <aside className="hidden lg:block">
        <nav className="sticky top-[var(--sidebar-top)] transition-[top] duration-300 ease-out text-xs tracking-wide text-neutral-400 space-y-3">
          <a href="#intro" className="block hover:text-neutral-900">INTRO</a>
          <a href="#experience" className="block hover:text-neutral-900">EXPERIENCE</a>
          <a href="#communities" className="block hover:text-neutral-900">COMMUNITIES</a>
        </nav>
      </aside>

      <div className="min-w-0">
        <section id="intro" className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 mb-24">
          <div className="relative w-[220px] h-[220px] rounded-2xl overflow-hidden">
            <Image src="/images/about/hero.png" alt="Rowen Latif" fill className="object-cover" />
          </div>
          <div className="pt-2">
            <h1 className="font-serif text-3xl mb-1">
              Hi, I&apos;m Rowen<span className="italic">!</span>
            </h1>
            <div className="flex gap-6 text-xs tracking-wide text-neutral-500 mb-6">
              <span>PHL / NYC</span>
              <span>CS AND DESIGN @ NEU</span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-700 max-w-[372px] mb-4">
              I love making things!! You can find me designing products at{" "}
              <a
                href="https://generatenu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-neutral-400 transition-colors"
              >
                Generate
              </a>, leading brand
              campaigns for <a href="#communities" className="underline underline-offset-2 hover:text-neutral-400 transition-colors">Kappa Theta Pi</a>,
              or hunting for the next best coffee spot in Boston.
            </p>
            <p className="text-sm leading-relaxed text-neutral-700 max-w-[372px]">
              When I&apos;m not spending hours on Figma, I enjoy fashion, reading, pottery, and finding hidden
              gem cafes!
            </p>
          </div>
        </section>

        <section id="experience" className="mb-24">
          <h2 className="font-serif text-3xl mb-10">Experience</h2>
          <div className="space-y-7 pl-20">
            {experience.map((item) => (
              <div key={item.name} className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0">
                  <Image src={item.logo} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-serif text-2xl mb-0.5">{item.name}</p>
                  <div className="flex items-baseline gap-2 text-sm">
                    <span className="text-neutral-900">{item.role}</span>
                    <span className="text-neutral-500">{item.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="communities">
          <h2 className="font-serif text-3xl mb-10">Communities</h2>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-6 items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image src="/images/about/logo-generate.png" alt="Generate" fill className="object-cover" />
                </div>
                <span className="font-sans text-2xl font-normal">Generate</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                This is where I first got into design, where I learned Figma for the first time and truly
                understood the fundamentals of how to create good user experiences. I&apos;ve met some of
                my closest friends here!
              </p>
            </div>
            <div className="flex gap-6 pb-4 overflow-x-auto">
              {generatePhotos.map((photo, i) => (
                <div
                  key={photo.src}
                  className={`group relative shrink-0 h-48 sm:h-56 bg-white p-2 pb-6 rounded-2xl shadow-md ${rotations[i % rotations.length]}`}
                  style={{ aspectRatio: photo.ratio }}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image src={photo.src} alt="Generate memory" fill className="object-cover" />
                  </div>
                  <p className="absolute bottom-0.5 inset-x-0 h-5 flex items-center justify-center px-2 text-[10px] text-neutral-500 text-center truncate opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {photo.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_360px] gap-6 items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image src="/images/about/logo-ktp.png" alt="Kappa Theta Pi" fill className="object-cover" />
                </div>
                <span className="font-sans text-2xl font-normal">Kappa Theta Pi</span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                I&apos;ve been in KTP since my sophomore year and have been active as VP Marketing, Design
                Lead, and more! I&apos;ve grown so much from KTP, and am so happy to be giving back as a
                mentor and instructor now.
              </p>
            </div>
            <div className="flex gap-6 pb-4 overflow-x-auto">
              {ktpPhotos.map((photo, i) => (
                <div
                  key={photo.src}
                  className={`group relative shrink-0 h-48 sm:h-56 bg-white p-2 pb-6 rounded-2xl shadow-md ${rotations[i % rotations.length]}`}
                  style={{ aspectRatio: photo.ratio }}
                >
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image src={photo.src} alt="Kappa Theta Pi memory" fill className="object-cover" />
                  </div>
                  <p className="absolute bottom-0.5 inset-x-0 h-5 flex items-center justify-center px-2 text-[10px] text-neutral-500 text-center truncate opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {photo.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
