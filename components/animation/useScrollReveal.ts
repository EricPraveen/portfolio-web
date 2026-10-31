'use client';

import { useEffect, useRef, useState } from 'react';

export interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
  delay = 0,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check prefers-reduced-motion
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsRevealed(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsRevealed(true);
      return;
    }

    let timeoutId: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              timeoutId = setTimeout(() => {
                setIsRevealed(true);
              }, delay);
            } else {
              setIsRevealed(true);
            }

            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            if (timeoutId) clearTimeout(timeoutId);
            setIsRevealed(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  return { ref, isRevealed };
}
