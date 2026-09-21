"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { setCursorLabel, setCursorRich, ScriptAccentText } from "@/components/CustomCursor";
import { triggerProjectTransition } from "@/components/ProjectTransitionOverlay";

const clusters = [
  {
    id: "fashion-archive",
    href: "/creative#fashion-archive",
    title: "Fashion Archive",
    scriptWords: [{ index: 1 }],
    category: "MY STYLE DIARY",
    box: "w-40 sm:w-48",
    images: [{ src: "/images/creative/fashion-archive.png", className: "w-full h-auto" }],
  },
  {
    id: "website-redesign",
    href: "/creative#website-redesign",
    title: "Website Redesign",
    scriptWords: [{ index: 1, spaceBefore: "0.24em", spaceAfter: "-0.1em" }],
    category: "HIGHLIGHTING KTP CULTURE",
    box: "w-64 sm:w-80",
    images: [{ src: "/images/creative/ktp-website.png", className: "w-full h-auto" }],
  },
  {
    id: "merch-design",
    href: "/creative#merch-designs",
    title: "Merch Design",
    scriptWords: [{ index: 1, spaceBefore: "0.24em", spaceAfter: "-0.1em" }],
    category: "GRAPHIC DESIGN",
    box: "relative w-44 sm:w-52 h-36 sm:h-44",
    images: [
      { src: "/images/creative/ktp-hoodie.png", className: "absolute left-0 top-6 w-28 sm:w-32 h-auto -rotate-6" },
      { src: "/images/creative/ktp-tee.png", className: "absolute right-0 top-0 w-24 sm:w-28 h-auto rotate-6" },
    ],
  },
];

const ROW_LEFT = ["18%", "50%", "82%"];
const STACK_ROTATE = [-6, 0, 6];
const STACK_OFFSET = [-14, 0, 14];

const projects = [
  {
    label: "IBM Maximo",
    href: "/ibm",
    unlinked: true,
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
    color: "#e0f2fe",
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
    color: "#dfe8c4",
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
    color: "#ffe4e6",
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
    color: "#f4f4f5",
    cursor: "Coming soon!",
    isLogo: true,
  },
];

export default function Home() {
  const [revealed, setRevealed] = useState(false);
  const [settled, setSettled] = useState(false);
  const [hoveredCluster, setHoveredCluster] = useState<string | null>(null);
  const [hoverTilt, setHoverTilt] = useState<{ id: string; rx: number; ry: number } | null>(null);
  const clusterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = clusterRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!revealed) return;
    const t = setTimeout(() => setSettled(true), 900);
    return () => clearTimeout(t);
  }, [revealed]);

  return (
    <main className="flex-1 flex flex-col">
      <section className="sticky top-0 -mt-20 grid grid-cols-1 md:grid-cols-2 items-start px-10 pt-32 sm:pt-36 pb-[20px] gap-10 bg-white overflow-hidden">
        <div>
          <div className="intro-slide-up">
            <h1 className="font-serif text-3xl sm:text-4xl leading-[1.15] mb-0.5">
              <span className="intro-reveal-x inline-block" style={{ animationDelay: "0.05s" }}>
                Hello, I&apos;m <span className="text-neutral-900 text-xl sm:text-2xl align-middle">. ݁₊ ୨୧˚.</span>{" "}
                <span className="font-script font-normal text-4xl sm:text-5xl align-middle">Rowen</span>
              </span>
            </h1>
            <p className="font-serif text-3xl sm:text-4xl leading-[1.3] text-neutral-800 mb-6 max-w-md">
              <span className="intro-reveal-x inline-block" style={{ animationDelay: "0.18s" }}>
                I design products from concept to code{" "}
                <span className="text-neutral-900 text-xl sm:text-2xl">₊.</span>
              </span>
            </p>
          </div>
          <div className="intro-slide-up text-base text-neutral-500 space-y-0.5" style={{ animationDelay: "0.55s" }}>
            <p>creative technologist</p>
            <p>product designer @ IBM</p>
          </div>
        </div>
        <div className="relative h-64 md:h-96 w-full" />
      </section>

      <section
        id="featured-works"
        className="intro-slide-up relative z-10 isolate overflow-hidden bg-white border-t border-white/70 rounded-t-[2rem] rounded-b-[2rem] shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.2),0_20px_40px_-20px_rgba(0,0,0,0.2)] px-10 pt-14 pb-24 scroll-mt-24"
        style={{ animationDelay: "0.75s" }}
      >
        <h2 className="font-serif text-3xl sm:text-4xl mb-6">Featured Works</h2>
        <div className="space-y-24 sm:space-y-32">
            {projects.map((project) => {
              const media = (
                <>
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
                </>
              );

              return (
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
                  {project.unlinked ? (
                    <div
                      onMouseEnter={() => setCursorLabel(project.cursor)}
                      onMouseLeave={() => setCursorLabel(null)}
                      className={`group/img relative overflow-hidden rounded-xl aspect-[16/10] flex items-center justify-center cursor-none ${project.imageBg}`}
                    >
                      {media}
                    </div>
                  ) : (
                    <Link
                      href={project.href}
                      onMouseEnter={() => setCursorLabel(project.cursor)}
                      onMouseLeave={() => setCursorLabel(null)}
                      onClick={(e) => {
                        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
                        e.preventDefault();
                        setCursorLabel(null);
                        triggerProjectTransition(e.currentTarget, project.color, project.href);
                      }}
                      className={`group/img relative overflow-hidden rounded-xl aspect-[16/10] flex items-center justify-center ${project.imageBg}`}
                    >
                      {media}
                    </Link>
                  )}
                </div>
              );
            })}
        </div>
      </section>

      <div className="relative h-[200vh] -mt-[100vh] bg-olive">
        <section className="sticky top-0 z-0 h-screen overflow-hidden bg-olive px-10 pt-44 text-white">
          <h2 className="font-serif text-lg sm:text-4xl text-center whitespace-nowrap">
            <span className="font-script font-bold" style={{ marginRight: "-0.1em" }}>
              C
            </span>
            urious about my creative works?
          </h2>
          <div
            ref={clusterRef}
            className="relative mt-16 h-[420px] max-w-4xl mx-auto"
            style={{ perspective: "1400px" }}
          >
            {(() => {
              const hoveredIndex = hoveredCluster ? clusters.findIndex((c) => c.id === hoveredCluster) : -1;
              return clusters.map((cluster, i) => {
                const hovered = hoveredCluster === cluster.id;
                const left = revealed ? ROW_LEFT[i] : "50%";
                const scale = hovered ? 1.8 : 1;
                const stackRotate = revealed ? 0 : STACK_ROTATE[i];
                const stackOffsetX = revealed ? 0 : STACK_OFFSET[i];
                const staggering = revealed && !settled;
                const tilt = hovered && hoverTilt?.id === cluster.id ? hoverTilt : { rx: 0, ry: 0 };
                const glow = hovered
                  ? "drop-shadow(0 0 10px rgba(255,255,255,0.6)) drop-shadow(0 25px 30px rgba(0,0,0,0.35))"
                  : "drop-shadow(0 25px 25px rgba(0,0,0,0.15))";
                const repel =
                  revealed && hoveredIndex !== -1 && !hovered ? (i < hoveredIndex ? -90 : i > hoveredIndex ? 90 : 0) : 0;

              return (
                <Link
                  key={cluster.id}
                  href={cluster.href}
                  onMouseEnter={() => {
                    setHoveredCluster(cluster.id);
                    setCursorRich({
                      title: <ScriptAccentText text={cluster.title} scriptWords={cluster.scriptWords} />,
                      category: cluster.category,
                    });
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const px = (e.clientX - rect.left) / rect.width - 0.5;
                    const py = (e.clientY - rect.top) / rect.height - 0.5;
                    setHoverTilt({ id: cluster.id, rx: py * -24, ry: px * 24 });
                  }}
                  onMouseLeave={() => {
                    setHoveredCluster(null);
                    setHoverTilt(null);
                    setCursorRich(null);
                  }}
                  className="absolute top-1/2 transition-[left,transform,filter] ease-out"
                  style={{
                    left,
                    transform: `translate(-50%, -50%) translateX(${stackOffsetX + repel}px) rotate(${stackRotate}deg) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) scale(${scale})`,
                    filter: glow,
                    transitionDuration: staggering ? "700ms" : "250ms",
                    transitionDelay: staggering ? `${i * 90}ms` : "0ms",
                    zIndex: hovered ? 30 : revealed ? 10 : clusters.length - i,
                  }}
                >
                  <div className={cluster.box}>
                    {cluster.images.map((img, idx) => (
                      <Image key={idx} src={img.src} alt={cluster.title} width={640} height={640} className={img.className} />
                    ))}
                  </div>
                </Link>
              );
            });
            })()}
          </div>
        </section>
      </div>
    </main>
  );
}
