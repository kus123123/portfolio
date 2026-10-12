"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Content stays visible without JavaScript; only off-screen sections wait to reveal.
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    element.dataset.waiting = "true";
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        delete element.dataset.waiting;
        observer.disconnect();
      }
    }, { threshold: 0.08 });
    observer.observe(element);
    return () => {
      observer.disconnect();
      delete element.dataset.waiting;
    };
  }, []);

  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
