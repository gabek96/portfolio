import { useEffect, useRef, useState } from 'react';

export default function AnimatedSection({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) { setIsVisible(true); return; }

    // Fallback: ensure content is visible even if IntersectionObserver doesn't fire
    const fallback = setTimeout(() => setIsVisible(true), 800);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallback);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, rootMargin: '50px' }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
