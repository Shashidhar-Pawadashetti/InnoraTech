"use client";

import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger multiple Reveals in a list/grid by passing 0, 1, 2... */
  delay?: number;
  as?: "div" | "li";
}

/**
 * Wraps any section/card content so it fades and slides up as it scrolls
 * into view. Respects prefers-reduced-motion globally (see globals.css) —
 * that media query disables the transition entirely, it doesn't need to be
 * handled per-component.
 *
 * Usage:
 *   <Reveal><HeroSection /></Reveal>
 *   {items.map((item, i) => <Reveal key={item.id} delay={i}>...</Reveal>)}
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      data-visible={inView}
      className={cn("reveal", className)}
      style={delay ? { transitionDelay: `${Math.min(delay, 6) * 80}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
