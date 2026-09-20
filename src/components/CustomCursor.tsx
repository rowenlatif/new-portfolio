"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

type RichCursor = { title: ReactNode; category: string };
type CursorDetail = { label?: string | null; rich?: RichCursor | null };

type ScriptWord = {
  /** word index (split on spaces) that gets a bold script first letter */
  index: number;
  /** margin-left on the script letter, e.g. the gap between "Website" and the "R" in "Redesign" */
  spaceBefore?: string;
  /** margin-right on the script letter, pulling it tight against the serif remainder */
  spaceAfter?: string;
};

const DEFAULT_SPACE_BEFORE = "0.1em";
const DEFAULT_SPACE_AFTER = "-0.05em";

/**
 * Renders cursor title text where specific words get a bold script-font first letter
 * (pulled tight against the serif remainder) and every other word is medium-weight
 * EB Garamond, matching the Framer `cursor-2` component's mixed-font styling.
 */
export function ScriptAccentText({ text, scriptWords }: { text: string; scriptWords: ScriptWord[] }) {
  const words = text.split(" ");
  const specByIndex = new Map(scriptWords.map((w) => [w.index, w]));
  return (
    <>
      {words.map((word, i) => {
        const spec = specByIndex.get(i);
        const first = word.charAt(0);
        const rest = word.slice(1);
        const useScript = Boolean(spec) && /[A-Za-z]/.test(first);
        return (
          <span key={i}>
            {i > 0 ? " " : ""}
            {useScript ? (
              <>
                <span
                  className="font-script font-bold"
                  style={{
                    marginRight: spec?.spaceAfter ?? DEFAULT_SPACE_AFTER,
                    marginLeft: i > 0 ? spec?.spaceBefore ?? DEFAULT_SPACE_BEFORE : undefined,
                  }}
                >
                  {first}
                </span>
                <span className="font-serif-medium font-medium">{rest}</span>
              </>
            ) : (
              <span className="font-serif-medium font-medium">{word}</span>
            )}
          </span>
        );
      })}
    </>
  );
}

export default function CustomCursor() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [rich, setRich] = useState<RichCursor | null>(null);
  const [enabled, setEnabled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLabel(null);
    setRich(null);
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(mq.matches);
    const onChange = () => setEnabled(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e: MouseEvent) => {
      const el = wrapperRef.current;
      if (el) el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };
    const onCursorEvent = (e: Event) => {
      const detail = (e as CustomEvent<CursorDetail>).detail;
      if (detail && "rich" in detail) {
        setRich(detail.rich ?? null);
        setLabel(null);
      } else {
        setLabel(detail?.label ?? null);
        setRich(null);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("cursor:set", onCursorEvent);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("cursor:set", onCursorEvent);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={wrapperRef} className="fixed top-0 left-0 z-[100] pointer-events-none will-change-transform">
      <div
        className={[
          "absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full bg-black",
          "transition-opacity duration-150 ease-out will-change-[opacity]",
          label || rich ? "opacity-0" : "opacity-100",
        ].join(" ")}
      />
      <div
        className={[
          "absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-10 rounded-xl bg-black text-white",
          "flex items-center justify-center whitespace-nowrap px-4 font-sans text-base",
          "transition-[opacity,transform] duration-150 ease-out will-change-[opacity,transform]",
          label ? "opacity-100 scale-100" : "opacity-0 scale-75",
        ].join(" ")}
      >
        {label}
      </div>
      <div
        className={[
          "absolute top-0 left-0 flex flex-col items-start gap-1",
          "transition-[opacity,transform] duration-150 ease-out will-change-[opacity,transform]",
          rich ? "opacity-100 scale-100" : "opacity-0 scale-90",
        ].join(" ")}
        style={{ transform: "translate(16px, 8px)" }}
      >
        <p
          className="font-serif-medium font-medium text-[28px] leading-none text-black whitespace-nowrap"
          style={{ WebkitTextStroke: "6px white", paintOrder: "stroke fill" }}
        >
          {rich?.title} ↗
        </p>
        <span className="bg-white rounded-lg px-1 py-0.5 text-[10px] tracking-wide text-black whitespace-nowrap">
          {rich?.category}
        </span>
      </div>
    </div>
  );
}

export function setCursorLabel(label: string | null) {
  window.dispatchEvent(new CustomEvent<CursorDetail>("cursor:set", { detail: { label } }));
}

export function setCursorRich(rich: RichCursor | null) {
  window.dispatchEvent(new CustomEvent<CursorDetail>("cursor:set", { detail: { rich } }));
}
