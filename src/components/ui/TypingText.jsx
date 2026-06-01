import { useEffect, useState } from 'react';

export default function TypingText({ text, speed = 45, className = '' }) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  const [hideCursor, setHideCursor] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    setHideCursor(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
        setTimeout(() => setHideCursor(true), 3000);
      }
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      {!hideCursor && (
        <span
          className="inline-block w-[2px] h-[1em] bg-primary align-middle ml-0.5"
          style={{
            animation: done ? 'blink 1s step-end infinite' : 'none',
          }}
        />
      )}
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
}
