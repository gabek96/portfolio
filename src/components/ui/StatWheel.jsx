import { useEffect, useRef, useState } from 'react';

export const STATS = [
  { abbr: 'STR', label: 'Full-Stack',   value: 90 },
{ abbr: 'END', label: 'DevOps',       value: 60 },
  { abbr: 'DEX', label: 'Frontend',     value: 80 },
  { abbr: 'WIS', label: 'Leadership',   value: 83 },
  { abbr: 'CHA', label: 'Chatterbox',     value: 110 },
  { abbr: 'INT', label: 'Funny',   value: 120 },  
];

const CX = 140, CY = 140, R = 90, RINGS = 4, N = STATS.length;

function axisAngle(i) {
  return (Math.PI * 2 * i) / N - Math.PI / 2;
}

function toXY(i, r) {
  const a = axisAngle(i);
  return [CX + r * Math.cos(a), CY + r * Math.sin(a)];
}

function polyPts(pairs) {
  return pairs.map(([x, y]) => `${x.toFixed(2)},${y.toFixed(2)}`).join(' ');
}

export default function StatWheel({ animate }) {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    if (!animate || started.current) return;
    started.current = true;
    let startTs = null;
    const duration = 1100;
    const tick = (ts) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      setProgress(1 - Math.pow(1 - p, 3));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [animate]);

  const gridRings = Array.from({ length: RINGS }, (_, ri) => {
    const r = (R * (ri + 1)) / RINGS;
    return polyPts(Array.from({ length: N }, (_, i) => toXY(i, r)));
  });

  const statPoly = polyPts(STATS.map((s, i) => toXY(i, (Math.min(s.value, 100) / 100) * R * progress)));

  return (
    <svg viewBox="0 0 280 280" className="w-full h-full" aria-label="Developer stat radar chart">
      {/* Grid rings */}
      {gridRings.map((pts, i) => (
        <polygon key={i} points={pts} fill="none" stroke="#E0D6CC" strokeWidth="1" />
      ))}

      {/* Axis lines */}
      {STATS.map((_, i) => {
        const [x, y] = toXY(i, R);
        return <line key={i} x1={CX} y1={CY} x2={x} y2={y} stroke="#E0D6CC" strokeWidth="1" />;
      })}

      {/* Stat fill */}
      <polygon
        points={statPoly}
        fill="#496580"
        fillOpacity="0.2"
        stroke="#496580"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Stat dots */}
      {STATS.map((s, i) => {
        const [x, y] = toXY(i, (Math.min(s.value, 100) / 100) * R * progress);
        return <circle key={i} cx={x} cy={y} r="3.5" fill="#496580" />;
      })}

      {/* Labels */}
      {STATS.map((s, i) => {
        const [lx, ly] = toXY(i, R + 26);
        const ta = lx < CX - 8 ? 'end' : lx > CX + 8 ? 'start' : 'middle';
        return (
          <g key={i}>
            <text
              x={lx} y={ly - 5}
              textAnchor={ta}
              fill="#496580"
              fontSize="10"
              fontWeight="700"
              fontFamily="'Courier New', monospace"
            >
              {s.abbr}
            </text>
            <text
              x={lx} y={ly + 8}
              textAnchor={ta}
              fill="#7a6e65"
              fontSize="8"
            >
              {s.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
