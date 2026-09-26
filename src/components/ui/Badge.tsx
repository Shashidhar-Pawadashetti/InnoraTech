import type { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant = "brand" | "demo" | "client" | "neutral";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
}

const variants: Record<BadgeVariant, string> = {
  brand: "border-blue-100 bg-blue-50 text-[var(--brand-primary)]",
  demo: "border-blue-200 bg-blue-50 text-blue-700",
  client: "border-emerald-200 bg-emerald-50 text-emerald-700",
  neutral: "border-[var(--border-default)] bg-[var(--surface-secondary)] text-[var(--text-secondary)]",
};

export function Badge({
  children,
  className = "",
  variant = "brand",
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
