"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  /** Fraction of the element that must be visible before it's considered "in view" */
  threshold?: number;
  /** Shrinks/grows the viewport box used for the intersection check, e.g. "-80px" to trigger a bit later */
  rootMargin?: string;
  /** Once true, stop observing — the reveal never plays again on scroll back up */
  once?: boolean;
}

/**
 * Tracks whether an element has scrolled into view. Used by <Reveal> for
 * scroll-triggered entrance animations, but usable directly if you need
 * more control than Reveal gives you.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  // Lazy initializer, not a setState-in-effect: if IntersectionObserver isn't
  // available for any reason, fail open — show the content immediately rather
  // than leave it permanently hidden.
  const [inView, setInView] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
