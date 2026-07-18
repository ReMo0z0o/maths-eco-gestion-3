import { useMemo } from "react";
import type { DomainFigureSpec } from "@/data/figures";

/**
 * Rendu SVG d'un domaine d'intégration : axes, courbes, région ombrée,
 * sommets étiquetés et légende. Spécification : src/data/figures.ts.
 */

const W = 420;
const H = 320;
const PAD = 34;

function compile(expr: string): (x: number) => number {
  const cleaned = expr.replace(/sqrt|abs|sin|cos/g, "");
  if (!/^[0-9x+\-*/().\s]*$/.test(cleaned)) {
    throw new Error(`Expression non autorisée : ${expr}`);
  }
  const body = expr
    .replace(/sqrt/g, "Math.sqrt")
    .replace(/abs/g, "Math.abs")
    .replace(/sin/g, "Math.sin")
    .replace(/cos/g, "Math.cos");
  return new Function("x", `return (${body});`) as (x: number) => number;
}

export default function DomainFigure({ spec }: { spec: DomainFigureSpec }) {
  const { window: win } = spec;
  const sx = (x: number) => PAD + ((x - win.xMin) / (win.xMax - win.xMin)) * (W - 2 * PAD);
  const sy = (y: number) => H - PAD - ((y - win.yMin) / (win.yMax - win.yMin)) * (H - 2 * PAD);

  const content = useMemo(() => {
    const regionPaths = spec.regions.map((r) => {
      const low = compile(r.yLow);
      const high = compile(r.yHigh);
      const n = 80;
      const top: string[] = [];
      const bottom: string[] = [];
      for (let i = 0; i <= n; i++) {
        const x = r.xFrom + ((r.xTo - r.xFrom) * i) / n;
        top.push(`${sx(x).toFixed(1)},${sy(high(x)).toFixed(1)}`);
      }
      for (let i = n; i >= 0; i--) {
        const x = r.xFrom + ((r.xTo - r.xFrom) * i) / n;
        bottom.push(`${sx(x).toFixed(1)},${sy(low(x)).toFixed(1)}`);
      }
      return `M ${top.join(" L ")} L ${bottom.join(" L ")} Z`;
    });

    const curvePaths = (spec.curves ?? []).map((c) => {
      const f = compile(c.fn);
      const [a, b] = c.domain ?? [win.xMin, win.xMax];
      const n = 120;
      const pts: string[] = [];
      for (let i = 0; i <= n; i++) {
        const x = a + ((b - a) * i) / n;
        const y = f(x);
        if (!Number.isFinite(y) || y < win.yMin - 1 || y > win.yMax + 1) {
          continue;
        }
        pts.push(`${pts.length === 0 ? "M" : "L"} ${sx(x).toFixed(1)} ${sy(y).toFixed(1)}`);
      }
      return pts.join(" ");
    });

    return { regionPaths, curvePaths };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spec]);

  // Graduations entières dans la fenêtre
  const xTicks: number[] = [];
  for (let t = Math.ceil(win.xMin); t <= Math.floor(win.xMax); t++) if (t !== 0) xTicks.push(t);
  const yTicks: number[] = [];
  for (let t = Math.ceil(win.yMin); t <= Math.floor(win.yMax); t++) if (t !== 0) yTicks.push(t);

  const x0 = sx(0);
  const y0 = sy(0);

  return (
    <figure className="my-2">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={spec.caption}
        className="mx-auto w-full max-w-[440px] rounded-xl border border-border bg-white"
      >
        {/* Région(s) ombrée(s) */}
        {content.regionPaths.map((d, i) => (
          <path key={i} d={d} fill="#4f46e5" fillOpacity={0.16} stroke="none" />
        ))}

        {/* Axes */}
        <line x1={PAD - 8} y1={y0} x2={W - 10} y2={y0} stroke="#5a6079" strokeWidth={1.2} />
        <line x1={x0} y1={H - PAD + 8} x2={x0} y2={12} stroke="#5a6079" strokeWidth={1.2} />
        <polygon
          points={`${W - 10},${y0} ${W - 18},${y0 - 4} ${W - 18},${y0 + 4}`}
          fill="#5a6079"
        />
        <polygon points={`${x0},12 ${x0 - 4},20 ${x0 + 4},20`} fill="#5a6079" />
        <text x={W - 14} y={y0 + 16} fontSize={13} fill="#232946" fontStyle="italic">
          x
        </text>
        <text x={x0 + 8} y={20} fontSize={13} fill="#232946" fontStyle="italic">
          y
        </text>
        <text x={x0 - 12} y={y0 + 14} fontSize={11} fill="#5a6079">
          0
        </text>

        {/* Graduations */}
        {xTicks.map((t) => (
          <g key={`x${t}`}>
            <line x1={sx(t)} y1={y0 - 3} x2={sx(t)} y2={y0 + 3} stroke="#5a6079" />
            <text x={sx(t)} y={y0 + 15} fontSize={10.5} fill="#5a6079" textAnchor="middle">
              {t}
            </text>
          </g>
        ))}
        {yTicks.map((t) => (
          <g key={`y${t}`}>
            <line x1={x0 - 3} y1={sy(t)} x2={x0 + 3} y2={sy(t)} stroke="#5a6079" />
            <text x={x0 - 7} y={sy(t) + 3.5} fontSize={10.5} fill="#5a6079" textAnchor="end">
              {t}
            </text>
          </g>
        ))}

        {/* Segments (droites verticales, bords…) */}
        {(spec.segments ?? []).map((s, i) => (
          <g key={i}>
            <line
              x1={sx(s.from[0])}
              y1={sy(s.from[1])}
              x2={sx(s.to[0])}
              y2={sy(s.to[1])}
              stroke="#232946"
              strokeWidth={1.6}
              strokeDasharray={s.dashed ? "5 4" : undefined}
            />
            {s.label && s.labelAt && (
              <text
                x={sx(s.labelAt[0])}
                y={sy(s.labelAt[1])}
                fontSize={12}
                fill="#232946"
                fontStyle="italic"
              >
                {s.label}
              </text>
            )}
          </g>
        ))}

        {/* Courbes */}
        {(spec.curves ?? []).map((c, i) => (
          <g key={i}>
            <path
              d={content.curvePaths[i]}
              fill="none"
              stroke="#4f46e5"
              strokeWidth={2}
              strokeDasharray={c.dashed ? "5 4" : undefined}
            />
            {c.label && c.labelAt && (
              <text
                x={sx(c.labelAt[0])}
                y={sy(c.labelAt[1])}
                fontSize={12}
                fill="#4338ca"
                fontStyle="italic"
                fontWeight={600}
              >
                {c.label}
              </text>
            )}
          </g>
        ))}

        {/* Points remarquables */}
        {(spec.points ?? []).map((p, i) => (
          <g key={i}>
            <circle cx={sx(p.at[0])} cy={sy(p.at[1])} r={3.4} fill="#232946" />
            <text
              x={sx(p.at[0]) + (p.offset?.[0] ?? 7)}
              y={sy(p.at[1]) + (p.offset?.[1] ?? -7)}
              fontSize={11.5}
              fill="#232946"
              fontWeight={600}
            >
              {p.label}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mx-auto mt-2 max-w-[440px] text-center font-sans-ui text-xs leading-relaxed text-muted-foreground">
        {spec.caption}
      </figcaption>
    </figure>
  );
}
