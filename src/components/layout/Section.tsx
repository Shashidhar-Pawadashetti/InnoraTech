import * as React from "react";
import { Container } from "./Container";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  variant?: "light" | "slate" | "dark";
  padding?: "none" | "sm" | "md" | "lg";
}

export function Section({
  children,
  className = "",
  containerClassName = "",
  id,
  variant = "light",
  padding = "lg",
  ...props
}: SectionProps) {
  const variants = {
    light: "bg-white text-[var(--text-primary)]",
    slate: "bg-[var(--surface-secondary)] text-[var(--text-primary)] border-y border-[var(--border-default)]",
    dark: "bg-[var(--surface-dark)] text-white",
  };

  const paddings = {
    none: "py-0",
    sm: "py-10 md:py-12",
    md: "py-16 md:py-20",
    lg: "py-20 sm:py-24 lg:py-28",
  };

  // Check if children already has Container as root to avoid double nesting
  const isDirectContainer =
    React.isValidElement(children) &&
    (children.type === Container ||
      (typeof children.props === "object" &&
        children.props !== null &&
        "className" in children.props &&
        typeof (children.props as { className?: string }).className === "string" &&
        (children.props as { className?: string }).className?.includes("max-w-[1280px]")));

  return (
    <section
      id={id}
      className={`w-full relative ${variants[variant]} ${paddings[padding]} ${className}`}
      {...props}
    >
      {isDirectContainer ? (
        children
      ) : (
        <Container className={containerClassName}>{children}</Container>
      )}
    </section>
  );
}
