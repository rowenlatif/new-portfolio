import type { ReactNode } from "react";

/* The mission, split into four landscape cards, each with a technical line
   drawing in the spirit of a spec sheet. Lines share the table-to-chart
   animation's light grays. */

export const LINE = "#e0e0e0"; // drawing strokes and card borders
export const GRID = "#f0f0f0"; // graph-paper background
const LABEL = "#a8a8a8";

const label = {
  fontSize: 7.5,
  letterSpacing: 0.6,
  fill: LABEL,
  textAnchor: "middle" as const,
};

function GraphPaper({ step = 12.5 }: { step?: number }) {
  const lines = [];
  for (let v = step; v < 200; v += step) {
    lines.push(<line key={`h${v}`} x1={0} x2={200} y1={v} y2={v} />);
    lines.push(<line key={`v${v}`} y1={0} y2={200} x1={v} x2={v} />);
  }
  return (
    <g stroke={GRID} strokeWidth={1}>
      {lines}
    </g>
  );
}

/* 1 · Growing circles along a rising line: exploration through handoff */
function EndToEnd() {
  const stages = [
    { r: 14, name: "EXPLORE" },
    { r: 18, name: "DEFINE" },
    { r: 27, name: "DESIGN" },
    { r: 38, name: "HANDOFF" },
  ];
  let cx = 6;
  const circles = stages.map((s, i) => {
    cx += (i ? stages[i - 1].r : 0) + s.r;
    return { ...s, cx, cy: 192 - s.r };
  });
  return (
    <>
      <GraphPaper />
      <g fill="none" stroke={LINE} strokeWidth={1}>
        <line x1={6} y1={192} x2={194} y2={10} />
        <path d="M6 192 C 90 180, 150 120, 194 10" strokeDasharray="3 3" />
        {circles.map((c) => (
          <circle key={c.name} cx={c.cx} cy={c.cy} r={c.r} fill="white" />
        ))}
      </g>
      {circles.map((c) => (
        <text key={c.name} x={c.cx} y={c.cy + 2.5} {...label} fontSize={c.r < 15 ? 5 : 7.5}>
          {c.name}
        </text>
      ))}
      <text x={180} y={12} {...label}>
        SHIPPED
      </text>
    </>
  );
}

/* 2 · Concentric rings: rows, records, and the insight at the centre */
function AtAGlance() {
  return (
    <>
      <GraphPaper />
      <g fill="none" stroke={LINE} strokeWidth={1}>
        <circle cx={100} cy={100} r={92} fill="white" />
        <circle cx={100} cy={100} r={60} />
        <circle cx={100} cy={100} r={28} />
        <line x1={100} y1={4} x2={100} y2={196} />
        <line x1={4} y1={100} x2={196} y2={100} />
      </g>
      <text x={100} y={20} {...label}>
        ROWS
      </text>
      <text x={100} y={52} {...label}>
        RECORDS
      </text>
      <text x={100} y={86} {...label}>
        INSIGHT
      </text>
    </>
  );
}

/* 3 · Isometric layers: the chart sits over the records it came from */
function isoPlane(cy: number, divisions: number, bothWays: boolean) {
  const A = [20, cy];
  const B = [100, cy - 42];
  const C = [180, cy];
  const D = [100, cy + 42];
  const lerp = (p: number[], q: number[], t: number) => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t];
  const lines = [];
  for (let i = 1; i < divisions; i++) {
    const t = i / divisions;
    const [x1, y1] = lerp(A, B, t);
    const [x2, y2] = lerp(D, C, t);
    lines.push(<line key={`a${i}`} x1={x1} y1={y1} x2={x2} y2={y2} />);
    if (bothWays) {
      const [x3, y3] = lerp(A, D, t);
      const [x4, y4] = lerp(B, C, t);
      lines.push(<line key={`b${i}`} x1={x3} y1={y3} x2={x4} y2={y4} />);
    }
  }
  return (
    <g fill="none" stroke={LINE} strokeWidth={1}>
      <path d={`M${A} L${B} L${C} L${D} Z`} fill="white" />
      {lines}
    </g>
  );
}

function TablesIntoCharts() {
  return (
    <>
      {/* Records: rows only */}
      {isoPlane(150, 6, false)}
      {/* Path back down to the records */}
      <g stroke={LINE} strokeWidth={1} strokeDasharray="3 3">
        <line x1={20} y1={150} x2={20} y2={92} />
        <line x1={180} y1={150} x2={180} y2={92} />
        <line x1={100} y1={192} x2={100} y2={134} />
      </g>
      {/* Chart: full grid with a rising curve on it */}
      {isoPlane(92, 8, true)}
      <path d="M40 102 C 70 92, 95 70, 120 78 S 160 60, 172 74" fill="none" stroke={LINE} strokeWidth={1.5} />
      {/* Arrows up: insight you can act on */}
      <g fill="none" stroke={LINE} strokeWidth={1}>
        {[60, 100, 140].map((x) => (
          <g key={x}>
            <line x1={x} y1={58} x2={x} y2={14} />
            <path d={`M${x - 5} 20 L${x} 14 L${x + 5} 20`} />
          </g>
        ))}
      </g>
      <text x={100} y={95} {...label}>
        CHART
      </text>
      <text x={160} y={188} {...label}>
        RECORDS
      </text>
    </>
  );
}

/* 4 · Thresholds and a changing signal: when an answer becomes a chart */
function TheRules() {
  return (
    <>
      <defs>
        <pattern id="ibm-hatch" width={6} height={6} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1={0} y1={0} x2={0} y2={6} stroke={LINE} strokeWidth={1} />
        </pattern>
      </defs>
      <rect x={14} y={44} width={86} height={110} fill="url(#ibm-hatch)" />
      <g fill="none" stroke={LINE} strokeWidth={1}>
        <line x1={14} y1={10} x2={14} y2={170} />
        <line x1={14} y1={170} x2={196} y2={170} />
        <line x1={14} y1={44} x2={196} y2={44} strokeDasharray="4 3" />
        <line x1={14} y1={154} x2={196} y2={154} strokeDasharray="4 3" />
        <path d="M14 30 C 50 30, 60 150, 100 150 S 150 40, 196 60" strokeDasharray="3 3" />
        <line x1={100} y1={44} x2={100} y2={154} />
        {/* Spans along the bottom */}
        <line x1={14} y1={184} x2={196} y2={184} />
        {[14, 100, 196].map((x) => (
          <line key={x} x1={x} y1={180} x2={x} y2={188} />
        ))}
      </g>
      <text x={105} y={38} {...label}>
        CHART
      </text>
      <text x={105} y={166} {...label}>
        TABLE
      </text>
      <text x={156} y={110} {...label}>
        PATTERN
      </text>
      <text x={57} y={196} {...label}>
        QUESTION
      </text>
      <text x={148} y={196} {...label}>
        DATA CHANGES
      </text>
    </>
  );
}

const cards: { title: string; body: ReactNode; art: ReactNode; alt: string }[] = [
  {
    title: "Sole designer, exploration to handoff",
    body: "As the sole Product Designer on data visualization for IBM Maximo, I owned the experience from early exploration through final handoff to engineering.",
    art: <EndToEnd />,
    alt: "Circles growing along a rising line, labelled explore, define, design and handoff",
  },
  {
    title: "Insight over rows of numbers",
    body: "The goal was to help enterprise maintenance teams make sense of their operational data at a glance, instead of digging through rows to find what mattered.",
    art: <AtAGlance />,
    alt: "Concentric rings labelled rows, records and insight",
  },
  {
    title: "Answers you can explore",
    body: "Maximo Assistant's answers often came back as dense tables. I designed how they become charts people can open up, with a clear path back to the records underneath, so AI insights feel trustworthy enough to act on.",
    art: <TablesIntoCharts />,
    alt: "An isometric chart layer floating above a layer of records, joined by dashed lines",
  },
  {
    title: "Establishing rules and systems",
    body: "With engineering and product, I shaped when an answer should become a chart rather than a table, and how visualization patterns hold up as the questions and data behind them change.",
    art: <TheRules />,
    alt: "A dashed signal crossing between a chart threshold and a table threshold",
  },
];

export default function IbmMissionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {cards.map((c) => (
        <div key={c.title} className="flex flex-col sm:flex-row rounded-xl border border-[#e0e0e0] bg-white overflow-hidden">
          <div className="sm:w-[36%] shrink-0 p-3 flex items-center justify-center">
            <svg viewBox="0 0 200 200" role="img" aria-label={c.alt} className="w-full max-w-[180px] sm:max-w-none aspect-square">
              {c.art}
            </svg>
          </div>
          {/* Titles stay on one line: sized off the text column's width (cqi), capped at text-lg */}
          <div className="@container min-w-0 flex-1 p-5 flex flex-col justify-center">
            <h3 className="font-serif whitespace-nowrap leading-snug mb-2 text-[clamp(0.7rem,5.4cqi,1.125rem)]">{c.title}</h3>
            <p className="text-xs text-neutral-500 leading-relaxed text-pretty">{c.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
