"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/#featured-works", label: "projects" },
  { href: "/about", label: "about" },
  { href: "/creative", label: "creative" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="w-full px-6 py-5 sm:px-10 lg:px-16 flex items-center justify-between">
      <Link href="/" className="shrink-0">
        <Image src="/nav-mark.png" alt="Rowen Latif" width={40} height={32} className="opacity-80" />
      </Link>
      <nav className="flex items-center gap-6 sm:gap-10 text-sm text-neutral-500">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : link.href.startsWith("/#")
                ? false
                : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive
                  ? "text-neutral-900 transition-colors"
                  : "hover:text-neutral-900 transition-colors"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
