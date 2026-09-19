"use client";

import Image from "next/image";
import Link from "next/link";
import { setCursorLabel } from "@/components/CustomCursor";

const projects = [
  {
    label: "IBM Maximo",
    href: "/ibm",
    title: (
      <>
        AI-Driven Asset Management for
        <br />
        Fortune 500 Companies
      </>
    ),
    description: "Coming soon!",
    tags: ["Dashboards", "Desktop"],
    image: "/images/card-ibm.png",
    imageBg: "bg-gradient-to-b from-sky-100 to-sky-50",
    cursor: "Coming soon!",
    isLogo: false,
  },
  {
    label: "SelfServe",
    href: "/selfserve",
    title: (
      <>
        AI-Powered Operations Platform for
        <br />
        Boutique Hotels
      </>
    ),
    description:
      "Automating task routing and giving managers instant operational visibility",
    tags: ["Desktop", "Shipped"],
    image: "/images/card-selfserve.png",
    imageBg: "bg-gradient-to-b from-lime-100 to-olive/20",
    cursor: "View now",
    isLogo: false,
  },
  {
    label: "CineCircle",
    href: "/cinecircle",
    title: (
      <>
        Designing how South Asian Audiences
        <br />
        Express Authentic Film Discussion
      </>
    ),
    description: "Creating long and short forms of content",
    tags: ["Mobile", "Shipped"],
    image: "/images/card-cinecircle.png",
    imageBg: "bg-gradient-to-b from-rose-100 to-rose-50",
    cursor: "View now",
    isLogo: false,
  },
  {
    label: "Perplexity",
    href: "/perplexity",
    title: <>Improving AI Adoption</>,
    description: "Coming soon!",
    tags: ["UX Research"],
    image: "/images/perplexity-logo.png",
    imageBg: "",
    cursor: "Coming soon!",
    isLogo: true,
  },
];

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <section className="sticky top-0 grid grid-cols-1 md:grid-cols-2 items-start px-10 pt-12 sm:pt-16 pb-[30px] gap-10 bg-white overflow-hidden">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl leading-[1.15] mb-0.5">
            Hello, I&apos;m <span className="text-neutral-900 text-xl sm:text-2xl align-middle">. ݁₊ ୨୧˚.</span>{" "}
            <span className="font-script font-normal text-4xl sm:text-5xl align-middle">Rowen</span>
          </h1>
          <p className="font-serif text-3xl sm:text-4xl leading-[1.15] text-neutral-800 mb-6 max-w-md">
            I design products from concept to code{" "}
            <span className="text-neutral-900 text-xl sm:text-2xl">₊.</span>
          </p>
          <div className="text-base text-neutral-500 space-y-0.5">
            <p>creative technologist</p>
            <p>product designer @ IBM</p>
          </div>
        </div>
        <div className="relative h-64 md:h-96 w-full" />
      </section>

      <section
        id="featured-works"
        className="relative z-10 isolate overflow-hidden bg-white/90 backdrop-blur-md border-t border-white/70 rounded-t-[2rem] shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.2)] px-10 pt-20 pb-24 scroll-mt-24"
      >
        <h2 className="font-serif text-3xl sm:text-4xl mb-6">Featured Works</h2>
        <div className="space-y-24 sm:space-y-32">
          {projects.map((project) => (
            <div key={project.label} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-sm sm:text-base text-neutral-900 mb-3">{project.label}</p>
                <h3 className="text-xl sm:text-2xl font-medium leading-snug mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-neutral-900 mb-4 max-w-sm">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-serif rounded-full border border-neutral-300 px-4 py-2 text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={project.href}
                onMouseEnter={() => setCursorLabel(project.cursor)}
                onMouseLeave={() => setCursorLabel(null)}
                className={`group/img relative overflow-hidden rounded-xl aspect-[16/10] flex items-center justify-center ${project.imageBg}`}
              >
                <Image
                  src={project.image}
                  alt={typeof project.label === "string" ? project.label : "project thumbnail"}
                  fill
                  className={
                    project.isLogo
                      ? "object-contain p-16"
                      : "object-cover object-top scale-100 group-hover/img:scale-110 transition-transform duration-500 ease-out"
                  }
                />
                {!project.isLogo && (
                  <div className="absolute inset-x-0 bottom-0 h-2/3 group-hover/img:h-1/4 bg-gradient-to-b from-transparent to-white transition-all duration-500 ease-out" />
                )}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
