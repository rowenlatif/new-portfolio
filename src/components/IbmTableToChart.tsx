"use client";

import { IBM_Plex_Sans } from "next/font/google";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const plex = IBM_Plex_Sans({ weight: ["400", "600"], subsets: ["latin"] });

/* A Carbon data table that folds into a Carbon time-series area chart. Drawn
   as one SVG rather than with @carbon/react + @carbon/charts so each value
   cell can travel from its row to its point on the chart. Colours are Carbon
   white-theme tokens; the data is made up. */

const BLUE_60 = "#0f62fe";
const GRAY_100 = "#161616";
const GRAY_70 = "#525252";
const GRAY_20 = "#e0e0e0";
const GRAY_10 = "#f4f4f4";
// Lighter than Carbon's defaults so the frame stays quiet next to the page
const GRID = "#f0f0f0";
const BASELINE = "#c6c6c6"; // Gray 30

const data = [
  { date: "Jan 1", value: 180 },
  { date: "Jan 3", value: 310 },
  { date: "Jan 5", value: 260 },
  { date: "Jan 7", value: 420 },
  { date: "Jan 9", value: 370 },
  { date: "Jan 11", value: 560 },
];

// Stage, in SVG units
const W = 400;
const H = 300;

// Table
const TABLE_TOP = 44;
const HEADER_H = 32;
// Rows share out whatever height is left, so the table reaches the bottom edge
const ROW_H = (H - TABLE_TOP - HEADER_H) / data.length;
const COL = { date: 12, site: 136, value: 268 };
const rowY = (i: number) => TABLE_TOP + HEADER_H + i * ROW_H + ROW_H / 2;

// Chart
const PLOT = { left: 40, right: 364, top: 58, bottom: 250 };
const Y_MAX = 600;
const Y_TICKS = [0, 200, 400, 600];
const px = (i: number) => PLOT.left + (i * (PLOT.right - PLOT.left)) / (data.length - 1);
const py = (v: number) => PLOT.bottom - (v / Y_MAX) * (PLOT.bottom - PLOT.top);

const linePath = data.map((d, i) => `${i ? "L" : "M"}${px(i)},${py(d.value)}`).join(" ");
const areaPath = `${linePath} L${px(data.length - 1)},${PLOT.bottom} L${px(0)},${PLOT.bottom} Z`;

const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

/* Fade helper: the table recedes first on the way to the chart, and the chart
   recedes first on the way back. */
const fade = (visible: boolean, delay: number): CSSProperties => ({
  opacity: visible ? 1 : 0,
  transition: `opacity 400ms ease-out ${delay}ms`,
});

// How long each view holds once its transition has finished, in ms.
const HOLD_TABLE = 1200;
const HOLD_CHART = 1800;
const TRANSITION = 1800; // longest staggered transition, either direction

export default function IbmTableToChart() {
  const [chart, setChart] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  /* Loops table → chart → table while on screen; pauses off screen. With
     reduced motion it just sits on the chart. */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = setTimeout(() => setChart(true), 0);
      return () => clearTimeout(t);
    }
    let timer: ReturnType<typeof setTimeout> | undefined;
    let showingChart = false;
    const step = () => {
      showingChart = !showingChart;
      setChart(showingChart);
      timer = setTimeout(step, TRANSITION + (showingChart ? HOLD_CHART : HOLD_TABLE));
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timer);
        if (entry.isIntersecting) timer = setTimeout(step, HOLD_TABLE);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={ref} className={`${plex.className} w-full`}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto bg-white border border-[#f0f0f0] motion-reduce:[&_*]:!transition-none"
        role="img"
        aria-label={`Work orders closed, ${data[0].date} to ${data[data.length - 1].date}, rising from ${data[0].value} to ${data[data.length - 1].value}, shown as a table turning into an area chart.`}
      >
        {/* Shared title: table title and chart title sit in the same place */}
        <text x={12} y={28} fontSize={14} fontWeight={600} fill={GRAY_100}>
          Work orders closed
        </text>

        {/* ---- Table ---- */}
        <g style={fade(!chart, chart ? 0 : 500)}>
          <rect x={0} y={TABLE_TOP} width={W} height={HEADER_H} fill={GRAY_20} />
          {[
            { x: COL.date, label: "Date" },
            { x: COL.site, label: "Site" },
            { x: COL.value, label: "Work orders" },
          ].map((h) => (
            <text key={h.label} x={h.x} y={TABLE_TOP + HEADER_H / 2} dominantBaseline="middle" fontSize={12} fontWeight={600} fill={GRAY_100}>
              {h.label}
            </text>
          ))}
          {data.map((d, i) => (
            <g key={d.date}>
              <rect x={0} y={rowY(i) - ROW_H / 2} width={W} height={ROW_H} fill={GRAY_10} />
              <line x1={0} x2={W} y1={rowY(i) + ROW_H / 2} y2={rowY(i) + ROW_H / 2} stroke={GRAY_20} />
              <text x={COL.date} y={rowY(i)} dominantBaseline="middle" fontSize={12} fill={GRAY_70}>
                {d.date}
              </text>
              <text x={COL.site} y={rowY(i)} dominantBaseline="middle" fontSize={12} fill={GRAY_70}>
                Site A
              </text>
            </g>
          ))}
        </g>

        {/* ---- Chart frame: gridlines, ticks, axis titles ---- */}
        <g style={fade(chart, chart ? 300 : 0)}>
          {Y_TICKS.map((t) => (
            <g key={t}>
              <line x1={PLOT.left} x2={PLOT.right} y1={py(t)} y2={py(t)} stroke={GRID} />
              <text x={PLOT.left - 8} y={py(t)} textAnchor="end" dominantBaseline="middle" fontSize={10} fill={GRAY_70}>
                {t}
              </text>
            </g>
          ))}
          <line x1={PLOT.left} x2={PLOT.right} y1={PLOT.bottom} y2={PLOT.bottom} stroke={BASELINE} />
          {data.map((d, i) => (
            <text key={d.date} x={px(i)} y={PLOT.bottom + 16} textAnchor="middle" fontSize={10} fill={GRAY_70}>
              {d.date}
            </text>
          ))}
          <text x={(PLOT.left + PLOT.right) / 2} y={H - 10} textAnchor="middle" fontSize={10} fontWeight={600} fill={GRAY_100}>
            Date
          </text>
        </g>

        {/* Area rises from the baseline once the points have landed */}
        <path
          d={areaPath}
          fill={BLUE_60}
          fillOpacity={0.3}
          style={{
            transformBox: "view-box",
            transformOrigin: `0 ${PLOT.bottom}px`,
            transform: `scaleY(${chart ? 1 : 0})`,
            transition: `transform 800ms ${EASE} ${chart ? 1000 : 0}ms`,
          }}
        />
        {/* Line draws through the points */}
        <path
          d={linePath}
          fill="none"
          stroke={BLUE_60}
          strokeWidth={1.5}
          pathLength={1}
          strokeDasharray={1}
          style={{
            strokeDashoffset: chart ? 0 : 1,
            transition: `stroke-dashoffset 700ms ease-in-out ${chart ? 800 : 0}ms`,
          }}
        />

        {/* ---- Value cells: the one piece that travels ---- */}
        {data.map((d, i) => {
          const tx = chart ? px(i) : COL.value;
          const ty = chart ? py(d.value) : rowY(i);
          const delay = (chart ? 150 : 200) + i * 55;
          return (
            <g
              key={d.date}
              style={{
                transform: `translate(${tx}px, ${ty}px)`,
                transition: `transform 900ms ${EASE} ${delay}ms`,
              }}
            >
              <text
                dominantBaseline="middle"
                fontSize={12}
                fill={GRAY_100}
                style={{ opacity: chart ? 0 : 1, transition: `opacity 300ms ease-out ${chart ? delay + 300 : delay}ms` }}
              >
                {d.value}
              </text>
              <circle
                r={3}
                fill="white"
                stroke={BLUE_60}
                strokeWidth={1.5}
                style={{ opacity: chart ? 1 : 0, transition: `opacity 300ms ease-out ${chart ? delay + 300 : 0}ms` }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
