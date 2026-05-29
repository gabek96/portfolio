import { useEffect, useRef, useState } from 'react';
import StatWheel, { STATS } from './StatWheel';

export default function StatSection() {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setAnimate(true); observer.disconnect(); }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="border border-border rounded-xl overflow-hidden bg-card">
      {/* Title bar */}
      <div className="border-b border-border px-5 py-3 bg-card-light flex items-center gap-3">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-border" />
          <span className="w-2.5 h-2.5 rounded-full bg-border" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
        </div>
        <span className="font-mono text-sm text-primary tracking-widest ml-1">DEVELOPER STATS</span>
        <span className="ml-auto font-mono text-xs text-muted">LVL 4</span>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col md:flex-row items-center gap-12">
        {/* Radar chart */}
        <div className="w-80 h-80 flex-shrink-0">
          <StatWheel animate={animate} />
        </div>

        {/* Stat bars */}
        <div className="flex-1 w-full space-y-5">
          {STATS.map((s, i) => (
            <div key={s.abbr} className="flex items-center gap-4">
              <span className="font-mono text-sm font-bold text-primary w-10 flex-shrink-0">
                {s.abbr}
              </span>
              <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{
                    width: animate ? `${s.value}%` : '0%',
                    transition: `width 900ms cubic-bezier(0.4, 0, 0.2, 1) ${i * 90}ms`,
                  }}
                />
              </div>
              <span className="font-mono text-sm text-muted w-8 text-right flex-shrink-0">
                {s.value}
              </span>
              <span className="text-sm text-muted w-28 hidden sm:block flex-shrink-0">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
