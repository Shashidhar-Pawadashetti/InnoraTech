import * as React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "light" | "slate" | "dark";
  padding?: "none" | "sm" | "md" | "lg";
}

export function Section({
  className,
  variant = "light",
  padding = "md",
  children,
  ...props
}: SectionProps) {
  const variants = {
    light: "bg-white text-slate-800",
    slate: "bg-slate-50 text-slate-800 border-y border-slate-200/80",
    dark: "bg-[#0B1220] text-white",
  };

  const paddings = {
    none: "py-0",
    sm: "py-10 md:py-12",
    md: "py-16 md:py-24",
    lg: "py-20 md:py-32",
  };

  return (
    <section
      className={cn("w-full relative", variants[variant], paddings[padding], className)}
      {...props}
    >
      {children}
    </section>
  );
}
