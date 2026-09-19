import Image from "next/image";

const sidebar = [
  {
    heading: "SIDEQUESTS",
    items: ["FASHION ARCHIVE", "NODI CAFE", "CHOP, CHOP!"],
  },
  {
    heading: "KAPPA THETA PI",
    items: ["WEBSITE REDESIGN", "MERCH DESIGNS", "GRAPHIC DESIGN"],
  },
];

export default function CreativePage() {
  return (
    <main className="flex-1 px-6 sm:px-10 lg:px-16 py-10 grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-10">
      <aside className="hidden lg:block">
        <nav className="sticky top-10 text-[11px] tracking-wide text-neutral-400 space-y-4">
          {sidebar.map((group) => (
            <div key={group.heading}>
              <p className="text-neutral-500 mb-1.5">{group.heading}</p>
              <div className="space-y-1 pl-3">
                {group.items.map((item) => (
                  <a key={item} href={`#${item.toLowerCase().replace(/[^a-z]+/g, "-")}`} className="block hover:text-neutral-900">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      <div>
        <div className="text-center mb-24 sm:mb-32">
          <p className="font-serif italic text-2xl sm:text-3xl leading-none">A Look</p>
          <p className="text-xs text-neutral-400 tracking-wide my-1">into my</p>
          <p className="font-serif italic text-4xl sm:text-5xl">
            <span className="text-lg text-neutral-400 align-middle mr-1">(creative)</span>Work
          </p>
        </div>

        <section id="fashion-archive" className="mb-24">
          <h3 className="text-lg font-medium mb-2">Fashion Archive</h3>
          <p className="text-sm text-neutral-500 max-w-xl mb-6">
            A mini passion project I worked on while playing around with the new Claude Code and Figma MCP to
            keep track of all of my outfits, like my very own fashion diary!
          </p>
          <div className="relative w-full max-w-md h-72 sm:h-96">
            <Image src="/images/creative/fashion-archive.png" alt="Fashion Archive app mockup" fill className="object-contain object-left" />
          </div>
        </section>

        <section id="nodi-cafe" className="mb-24">
          <h3 className="text-lg font-medium mb-2">NODI Cafe</h3>
          <p className="text-sm text-neutral-500 max-w-xl mb-6">
            Branding a South Asian inspired coffee shop that I will be opening with my friends in Philly!
            &quot;Nodi&quot; means river in Bangla.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-[1.2fr_1fr_1fr] gap-4 items-stretch">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image src="/images/creative/nodi-poster.png" alt="NODI poster" fill className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["nodi-tile-1.png", "nodi-tile-2.png", "nodi-tile-3.png", "nodi-tile-4.png"].map((src) => (
                <div key={src} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image src={`/images/creative/${src}`} alt="NODI brand detail" fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <Image src="/images/creative/nodi-menu.png" alt="NODI menu design" fill className="object-cover" />
            </div>
          </div>
        </section>

        <section id="chop-chop" className="mb-24">
          <h3 className="text-lg font-medium mb-2">Chop, Chop!</h3>
          <p className="text-sm text-neutral-400 italic">Coming soon!</p>
        </section>

        <hr className="border-neutral-200 mb-24" />

        <section id="website-redesign" className="mb-24">
          <p className="font-serif text-2xl mb-8">Kappa Theta Pi</p>
          <h3 className="text-lg font-medium mb-2">Website Redesign</h3>
          <p className="text-sm text-neutral-500 max-w-xl mb-6">
            As VP of Marketing, it was imperative that I refreshed our very outdated website because this was
            a very common entry point for many prospective members. First impressions matter!
          </p>
          <div className="relative w-full max-w-2xl h-64 sm:h-96">
            <Image src="/images/creative/ktp-website.png" alt="Kappa Theta Pi website redesign" fill className="object-contain object-left" />
          </div>
        </section>

        <section id="merch-designs" className="mb-24">
          <h3 className="text-lg font-medium mb-2">Merch Design</h3>
          <p className="text-sm text-neutral-500 max-w-xl mb-6">
            My favorite part of holding a design leadership position was creating fun, unique merch for the
            entire org and seeing it come to life!
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-50">
              <Image src="/images/creative/ktp-hoodie.png" alt="Kappa Theta Pi hoodie merch" fill className="object-contain" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src="/images/creative/ktp-shirts-photo.png" alt="Kappa Theta Pi members wearing merch" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-50">
              <Image src="/images/creative/ktp-tee.png" alt="Kappa Theta Pi t-shirt merch" fill className="object-contain" />
            </div>
          </div>
        </section>

        <section id="graphic-design">
          <h3 className="text-lg font-medium mb-2">Graphic Design</h3>
          <p className="text-sm text-neutral-500 max-w-xl mb-6">
            Social media is where I get to have the most fun with KTP&apos;s brand! I create all of our
            graphics from scratch in Figma, experimenting with different visual directions while keeping
            everything rooted in the techy, web-inspired identity I built for the org.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-lg border border-neutral-200" />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
