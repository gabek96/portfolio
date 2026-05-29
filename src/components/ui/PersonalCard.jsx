import { useEffect, useRef, useState } from 'react';

// ← Update these with your real answers.
// Each fact can use either an emoji OR an image/gif URL — add  image: 'https://...'
// to any entry and it will display instead of the emoji.
const FACTS = [
  { category: 'Favorite Movie',   value: 'Your Favorite Movie',   emoji: '🎬' },
  { category: 'Favorite Pokémon', value: 'Greninja',      emoji: '⚡' , image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e57c0ca5-c162-43e7-b0dc-40f215c30321/dkj3uf3-dda93834-5372-4956-814c-aa17dcd7479b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9lNTdjMGNhNS1jMTYyLTQzZTctYjBkYy00MGYyMTVjMzAzMjEvZGtqM3VmMy1kZGE5MzgzNC01MzcyLTQ5NTYtODE0Yy1hYTE3ZGNkNzQ3OWIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7wVbH-6B1A8sGyJBIPh1B8Y-8B1whFAC_hoM1sA4ZnQ'  },
  { category: 'Favorite Game',    value: 'Your Favorite Game',    emoji: '🎮' },
  { category: 'Favorite Food',    value: 'Your Favorite Food',    emoji: '🍕' },
  { category: 'Hometown',         value: 'Your Hometown',         emoji: '🏙️' },
  { category: 'Binge-Watching',   value: 'Your Fav Show',         emoji: '📺' },
];

const INTERVAL_MS = 3200;

export default function PersonalCard() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef(null);

  const goTo = (i) => {
    setVisible(false);
    setTimeout(() => {
      setIndex(i);
      setVisible(true);
    }, 250);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      goTo((prev) => {
        const next = (prev + 1) % FACTS.length;
        return next;
      });
    }, INTERVAL_MS);
    return () => clearInterval(timerRef.current);
  }, []);

  // restart timer on manual dot click
  const handleDot = (i) => {
    clearInterval(timerRef.current);
    goTo(i);
    timerRef.current = setInterval(() => {
      setIndex(c => {
        const next = (c + 1) % FACTS.length;
        goTo(next);
        return c;
      });
    }, INTERVAL_MS);
  };

  const fact = FACTS[index];

  return (
    <div className="border border-border rounded-xl overflow-hidden bg-card flex flex-col h-full">
      {/* Title bar */}
      <div className="border-b border-border px-5 py-3 bg-card-light flex items-center gap-3 flex-shrink-0">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-border" />
          <span className="w-2.5 h-2.5 rounded-full bg-border" />
          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
        </div>
        <span className="font-mono text-sm text-primary tracking-widest ml-1">PLAYER INFO</span>
      </div>

      {/* Fact display */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 250ms ease, transform 250ms ease',
          }}
        >
          {fact.image
            ? <img src={fact.image} alt={fact.value} className="w-24 h-24 object-contain rounded-xl mb-5 mx-auto" />
            : <div className="text-6xl mb-5">{fact.emoji}</div>
          }
          <p className="font-mono text-xs text-primary/60 uppercase tracking-[0.15em] mb-2">
            {fact.category}
          </p>
          <p className="text-2xl font-bold text-text">{fact.value}</p>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2 mt-10">
          {FACTS.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDot(i)}
              aria-label={`Go to fact ${i + 1}`}
              className="h-2 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: i === index ? '1.5rem' : '0.5rem',
                background: i === index ? '#2898c1' : '#333333',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
