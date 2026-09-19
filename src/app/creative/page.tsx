import Image from "next/image";
import type { ReactNode } from "react";

function IconLink({ href, label, children }: { href?: string; label: string; children: ReactNode }) {
  const className =
    "inline-flex items-center justify-center w-9 h-9 rounded-full bg-black text-white hover:opacity-80 transition-opacity";
  if (!href) {
    return (
      <span className={`${className} opacity-40 cursor-default`} aria-label={`${label} (coming soon)`}>
        {children}
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={className}>
      {children}
    </a>
  );
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.75 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.41-5.27 5.7.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .3.2.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11.5 4.5" />
      <path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07L12.5 19.5" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

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
    <main className="flex-1 px-10 py-10 grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-10">
      <aside className="hidden lg:block">
        <nav className="sticky top-[var(--sidebar-top)] transition-[top] duration-300 ease-out text-[11px] tracking-wide text-neutral-400 space-y-4">
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
          <h3 className="text-lg font-normal mb-2">Fashion Archive</h3>
          <p className="text-base text-neutral-500 max-w-xl mb-4">
            A mini passion project I worked on while playing around with the new Claude Code and Figma MCP to
            keep track of all of my outfits, like my very own fashion diary!
          </p>
          <div className="flex gap-3 mb-6">
            <IconLink href="https://github.com/rowenlatif/fashion-archive" label="Fashion Archive GitHub repo">
              <GithubIcon />
            </IconLink>
          </div>
          <div className="relative w-full max-w-md h-72 sm:h-96">
            <Image src="/images/creative/fashion-archive.png" alt="Fashion Archive app mockup" fill className="object-contain object-left" />
          </div>
        </section>

        <section id="nodi-cafe" className="mb-24">
          <h3 className="text-lg font-normal mb-2">NODI Cafe</h3>
          <p className="text-base text-neutral-500 max-w-xl mb-6">
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
          <h3 className="text-lg font-normal mb-2">Chop, Chop!</h3>
          <p className="text-sm text-neutral-400 italic">Coming soon!</p>
        </section>

        <hr className="border-neutral-200 mb-24" />

        <section id="website-redesign" className="mb-24">
          <p className="font-serif text-2xl mb-8">Kappa Theta Pi</p>
          <h3 className="text-lg font-normal mb-2">Website Redesign</h3>
          <p className="text-base text-neutral-500 max-w-xl mb-4">
            As VP of Marketing, it was imperative that I refreshed our very outdated website because this was
            a very common entry point for many prospective members. First impressions matter!
          </p>
          <div className="flex gap-3 mb-6">
            <IconLink href="https://github.com/ktpNortheastern/ktpwebsite" label="Kappa Theta Pi website GitHub repo">
              <GithubIcon />
            </IconLink>
            <IconLink label="Kappa Theta Pi website live link">
              <LinkIcon />
            </IconLink>
          </div>
          <div className="relative w-full max-w-2xl h-64 sm:h-96">
            <Image src="/images/creative/ktp-website.png" alt="Kappa Theta Pi website redesign" fill className="object-contain object-left" />
          </div>
        </section>

        <section id="merch-designs" className="mb-24">
          <h3 className="text-lg font-normal mb-2">Merch Design</h3>
          <p className="text-base text-neutral-500 max-w-xl mb-6">
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
          <h3 className="text-lg font-normal mb-2">Graphic Design</h3>
          <p className="text-base text-neutral-500 max-w-xl mb-4">
            Social media is where I get to have the most fun with KTP&apos;s brand! I create all of our
            graphics from scratch in Figma, experimenting with different visual directions while keeping
            everything rooted in the techy, web-inspired identity I built for the org.
          </p>
          <div className="flex gap-3 mb-6">
            <IconLink href="https://www.ktpneu.org/" label="Kappa Theta Pi Instagram">
              <InstagramIcon />
            </IconLink>
          </div>
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
