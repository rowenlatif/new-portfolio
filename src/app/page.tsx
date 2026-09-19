"use client";

import Image from "next/image";
import Link from "next/link";
import MatrixDots from "@/components/MatrixDots";
import { setCursorLabel } from "@/components/CustomCursor";

const projects = [
  {
    label: "IBM MAXIMO",
    href: "/ibm",
    title: "AI-Driven Asset Management for Fortune 500 Companies",
    description: "Coming soon!",
    tags: ["Dashboards", "Desktop"],
    image: "/images/card-ibm.png",
    imageBg: "bg-gradient-to-b from-sky-100 to-sky-50",
    cursor: "Coming soon!",
    isLogo: false,
  },
  {
    label: "SELFSERVE",
    href: "/selfserve",
    title: "AI-Powered Operations Platform for Boutique Hotels",
    description:
      "Automating task routing and giving managers instant operational visibility",
    tags: ["Desktop", "Shipped"],
    image: "/images/card-selfserve.png",
    imageBg: "bg-gradient-to-b from-lime-100 to-olive/20",
    cursor: "View now",
    isLogo: false,
  },
  {
    label: "CINECIRCLE",
    href: "/cinecircle",
    title: "Designing how South Asian Audiences Express Authentic Film Discussion",
    description: "Creating long and short forms of content",
    tags: ["Mobile", "Shipped"],
    image: "/images/card-cinecircle.png",
    imageBg: "bg-gradient-to-b from-rose-100 to-rose-50",
    cursor: "View now",
    isLogo: false,
  },
  {
    label: "PERPLEXITY",
    href: "/perplexity",
    title: "Improving AI Adoption",
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
      <section className="sticky top-0 h-screen grid grid-cols-1 md:grid-cols-2 items-start px-6 sm:px-10 lg:px-16 pt-20 sm:pt-28 gap-10 bg-white overflow-hidden">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl leading-[1.15] mb-0.5">
            Hello, I&apos;m <span className="text-neutral-400 text-xl sm:text-2xl align-middle">. ݁₊ ୨୧˚.</span>{" "}
            <span className="font-script text-4xl sm:text-5xl align-middle">Rowen</span>
          </h1>
          <p className="font-serif text-3xl sm:text-4xl leading-[1.15] text-neutral-800 mb-6 max-w-md">
            I design products from concept to code{" "}
            <span className="text-neutral-400 text-xl sm:text-2xl">₊.</span>
          </p>
          <div className="text-sm text-neutral-500 space-y-0.5">
            <p>creative technologist</p>
            <p>product designer @ IBM</p>
          </div>
        </div>
        <div className="relative h-64 md:h-full w-full">
          <MatrixDots />
        </div>
      </section>

      <section
        id="featured-works"
        className="relative z-10 bg-white rounded-t-[2rem] shadow-[0_-30px_60px_-25px_rgba(0,0,0,0.15)] px-6 sm:px-10 lg:px-16 pt-16 pb-24 sm:pt-20"
      >
        <h2 className="font-serif text-3xl sm:text-4xl mb-14">Featured Works</h2>
        <div className="space-y-24 sm:space-y-32">
          {projects.map((project) => (
            <div
              key={project.label}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
              onMouseEnter={() => setCursorLabel(project.cursor)}
              onMouseLeave={() => setCursorLabel(null)}
            >
              <div>
                <p className="text-sm sm:text-base text-neutral-900 mb-3">{project.label}</p>
                <Link href={project.href} className="group">
                  <h3 className="text-xl sm:text-2xl font-medium leading-snug mb-2 group-hover:text-olive transition-colors">
                    {project.title}
                  </h3>
                </Link>
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
                className={`group/img relative overflow-hidden rounded-xl aspect-[16/10] flex items-center justify-center ${project.imageBg}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
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
