import { useEffect, useRef, useState } from 'react';
import StatWheel from './StatWheel';

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
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#EF4444' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F59E0B' }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#22C55E' }} />
        </div>
        <span className="font-mono text-sm text-primary tracking-widest ml-1">Player Stats</span>
        <span className="ml-auto font-mono text-xs text-muted">LVL 21</span>
      </div>

      {/* Wheel only */}
      <div className="p-6 flex items-center justify-center">
        <div className="w-96 h-96">
          <StatWheel animate={animate} />
        </div>
      </div>
    </div>
  );
}
