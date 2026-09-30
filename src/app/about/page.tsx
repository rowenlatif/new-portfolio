import Image from "next/image";
import AboutIntro from "@/components/AboutIntro";

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
    <main className="flex-1 px-10 md:px-20 lg:px-32 pt-14 pb-10">
      <div className="min-w-0">
        <AboutIntro />

        <section id="communities" className="intro-slide-up" style={{ animationDelay: "0.9s" }}>
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
                  className={`group relative shrink-0 h-48 sm:h-56 bg-white p-2 pb-6 rounded-sm shadow-md ${rotations[i % rotations.length]}`}
                  style={{ aspectRatio: photo.ratio }}
                >
                  <div className="relative w-full h-full rounded-[2px] overflow-hidden">
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
                  className={`group relative shrink-0 h-48 sm:h-56 bg-white p-2 pb-6 rounded-sm shadow-md ${rotations[i % rotations.length]}`}
                  style={{ aspectRatio: photo.ratio }}
                >
                  <div className="relative w-full h-full rounded-[2px] overflow-hidden">
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
