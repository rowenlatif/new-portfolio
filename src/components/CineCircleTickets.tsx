"use client";

import Image from "next/image";
import { useState } from "react";

/* Research themes as ticket stubs, recreated from the Figma component.
   The shape is a rect with concave quarter-circle bites (r=8) at every corner;
   nested padded layers give the 2px inset rule without breaking that outline. */

const FILL = "#F7D5CD";
const RULE = "#F1B5A7";
const NUMBER = "#EFAB9B";
const INK = "#DA431E";

const CUT = 8;
const RULE_INSET = 5;
const RULE_WIDTH = 2;

const themes = [
  {
    number: "01",
    stub: "left" as const,
    title: "Private Expression",
    body: "Preferred group chats over online platforms, keeping the best takes out of public view.",
  },
  {
    number: "02",
    stub: "left" as const,
    title: "Low Psychological Safety",
    body: "Fear of backlash and harsh discourse made fans hesitant to post an unpopular opinion.",
  },
  {
    number: "03",
    stub: "right" as const,
    title: "Repetitive Exposure",
    body: "The same films circulated on repeat, limiting discovery beyond the usual canon.",
  },
  {
    number: "04",
    stub: "right" as const,
    title: "Not Intuitive",
    body: "Dense information and unintuitive interactions buried the conversation worth having.",
  },
];

type Confetti = {
  id: number;
  kind: "chilli" | "star";
  tx: number;
  ty: number;
  peak: number;
  r: number;
  delay: number;
  dur: number;
  s: number;
};

/* Built in the event handler, so it never runs during render and can be
   properly irregular without risking a hydration mismatch. */
function makeConfetti(): Confetti[] {
  return Array.from({ length: 16 }, (_, i) => {
    const dir = Math.random() < 0.5 ? -1 : 1;
    const peak = -(40 + Math.random() * 90);
    return {
      id: i,
      kind: Math.random() < 0.45 ? "chilli" : "star",
      tx: dir * (30 + Math.random() * 150),
      ty: peak + 90 + Math.random() * 130,
      peak,
      r: (Math.random() - 0.5) * 540,
      delay: Math.random() * 160,
      dur: 760 + Math.random() * 460,
      s: 0.65 + Math.random() * 0.75,
    };
  });
}

/* One layer of the ticket: a concave-cornered panel, optionally padded so the
   next layer nests inside it. */
function Cut({
  off,
  pad,
  background,
  className = "",
  children,
}: {
  off: number;
  pad: number;
  background: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`ticket-cut ${className}`}
      style={
        {
          "--cut": `${CUT + off}px`,
          "--off": `${off}px`,
          background,
          padding: pad,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

function Panel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <Cut off={0} pad={RULE_INSET} background={FILL} className={className}>
      <Cut off={RULE_INSET} pad={RULE_WIDTH} background={RULE} className="h-full">
        <Cut off={RULE_INSET + RULE_WIDTH} pad={0} background={FILL} className="h-full">
          {children}
        </Cut>
      </Cut>
    </Cut>
  );
}

function Ticket({ theme }: { theme: (typeof themes)[number] }) {
  const [burst, setBurst] = useState<{ key: number; x: number; y: number; parts: Confetti[] } | null>(
    null
  );

  const onEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setBurst({
      key: Date.now(),
      x: e.clientX - r.left,
      y: e.clientY - r.top,
      parts: makeConfetti(),
    });
  };

  const stubEl = (
    <Panel className="shrink-0 w-[23%]">
      <div className="h-full flex items-center justify-center">
        <span className="font-serif text-4xl leading-none" style={{ color: NUMBER }}>
          {theme.number}
        </span>
      </div>
    </Panel>
  );

  const bodyEl = (
    <Panel className="flex-1">
      <div className="px-5 py-4">
        <p className="text-sm font-bold mb-1" style={{ color: INK }}>
          {theme.title}
        </p>
        <p className="text-xs leading-relaxed" style={{ color: INK }}>
          {theme.body}
        </p>
      </div>
    </Panel>
  );

  return (
    <div className="group relative" onMouseEnter={onEnter}>
      <div className="flex gap-[2px] min-h-[116px] transition-transform duration-500 ease-out group-hover:-rotate-1">
        {theme.stub === "left" ? (
          <>
            {stubEl}
            {bodyEl}
          </>
        ) : (
          <>
            {bodyEl}
            {stubEl}
          </>
        )}
      </div>

      {burst && (
        <div key={burst.key} className="pointer-events-none absolute inset-0">
          {burst.parts.map((p) => (
            <span
              key={p.id}
              className="ticket-confetti absolute will-change-transform"
              style={
                {
                  left: burst.x,
                  top: burst.y,
                  "--tx": `${p.tx}px`,
                  "--ty": `${p.ty}px`,
                  "--peak": `${p.peak}px`,
                  "--r": `${p.r}deg`,
                  "--s": p.s,
                  "--delay": `${p.delay}ms`,
                  "--dur": `${p.dur}ms`,
                } as React.CSSProperties
              }
            >
              {p.kind === "chilli" ? (
                <span className="block text-base leading-none">🌶️</span>
              ) : (
                <Image
                  src="/images/cinecircle/star.png"
                  alt=""
                  width={19}
                  height={18}
                  className="block w-[17px] h-auto"
                />
              )}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CineCircleTickets() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5">
      {themes.map((t) => (
        <Ticket key={t.number} theme={t} />
      ))}
    </div>
  );
}
