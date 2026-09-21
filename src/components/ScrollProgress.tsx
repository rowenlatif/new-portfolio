"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress({ color }: { color: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / docHeight)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-[60] h-[6px] bg-white">
      <div
        className="h-full transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%`, backgroundColor: color }}
      />
    </div>
  );
}
