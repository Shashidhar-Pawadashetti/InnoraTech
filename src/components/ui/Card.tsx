import type { HTMLAttributes, ReactNode } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({
  children,
  className = "",
  hoverable = true,
  ...props
}: CardProps) {
  const hoverStyles = hoverable
    ? "hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-sm"
    : "";

  return (
    <div
      className={`rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-white p-6 transition-all duration-200 ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
