import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    label: "IBM MAXIMO",
    href: "/ibm",
    title: "AI-Driven Asset Management for Fortune 500 Companies",
    description: "Coming soon!",
    tags: ["Dashboards", "Desktop"],
    image: "/images/card-ibm.png",
    imageBg: "bg-gradient-to-b from-sky-100 to-sky-50",
  },
  {
    number: "02",
    label: "SELFSERVE",
    href: "/selfserve",
    title: "AI-Powered Operations Platform for Boutique Hotels",
    description:
      "Automating task routing and giving managers instant operational visibility",
    tags: ["Desktop", "Shipped"],
    image: "/images/card-selfserve.png",
    imageBg: "bg-gradient-to-b from-lime-100 to-olive/20",
  },
  {
    number: "03",
    label: "CINECIRCLE",
    href: "/cinecircle",
    title: "Designing how South Asian Audiences Express Authentic Film Discussion",
    description: "Creating long and short forms of content",
    tags: ["Mobile", "Shipped"],
    image: "/images/card-cinecircle.png",
    imageBg: "bg-gradient-to-b from-rose-100 to-rose-50",
  },
  {
    number: "04",
    label: "PERPLEXITY",
    href: "/perplexity",
    title: "Improving AI Adoption",
    description: "Coming soon!",
    tags: ["UX Research"],
    image: "/images/perplexity-logo.png",
    imageBg: "",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="grid grid-cols-1 md:grid-cols-2 items-center px-6 sm:px-10 lg:px-16 py-10 md:py-16 gap-10">
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl leading-snug mb-2">
            Hello, I&apos;m <span className="font-script text-4xl sm:text-5xl align-middle">Rowen</span>
          </h1>
          <p className="font-serif text-2xl sm:text-3xl text-neutral-800 mb-6 max-w-md">
            I design products from concept to code
          </p>
          <div className="text-sm text-neutral-500 space-y-0.5">
            <p>creative technologist</p>
            <p>product designer @ IBM</p>
          </div>
        </div>
        <div
          className="h-64 md:h-96 w-full rounded-sm"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.18) 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
      </section>

      <hr className="border-neutral-200" />

      <section id="featured-works" className="px-6 sm:px-10 lg:px-16 py-16 sm:py-20">
        <h2 className="font-serif text-3xl sm:text-4xl mb-14">Featured Works</h2>
        <div className="space-y-24 sm:space-y-32">
          {projects.map((project) => (
            <div
              key={project.number}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <p className="text-xs tracking-wide text-neutral-400 mb-3">
                  {project.number} — {project.label}
                </p>
                <Link href={project.href} className="group">
                  <h3 className="text-xl sm:text-2xl font-medium leading-snug mb-2 group-hover:text-olive transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-sm text-neutral-500 mb-4 max-w-sm">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs rounded-full border border-neutral-300 px-3 py-1 text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <Link
                href={project.href}
                className={`relative overflow-hidden rounded-xl aspect-[16/10] flex items-center justify-center ${project.imageBg}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={project.number === "04" ? "object-contain p-16" : "object-cover object-top"}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
