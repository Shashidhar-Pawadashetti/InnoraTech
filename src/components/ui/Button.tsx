import Link from "next/link";
import * as React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  asChild?: boolean;
}

const baseStyles =
  "group inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none cursor-pointer disabled:pointer-events-none disabled:opacity-50 select-none active:scale-[0.97]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--brand-primary)] !text-white hover:bg-[var(--brand-primary-hover)] shadow-sm",
  secondary:
    "border border-slate-800 bg-slate-900 !text-white hover:bg-slate-800 hover:border-slate-700 shadow-sm",
  outline:
    "border border-white/30 bg-white/10 !text-white hover:bg-white/20 hover:border-white/50 shadow-sm",
  ghost:
    "text-[var(--text-primary)] hover:bg-[var(--surface-secondary)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3.5 text-xs rounded-[var(--radius-sm)] gap-1.5",
  md: "min-h-11 px-5 text-sm rounded-[var(--radius-md)] gap-2",
  lg: "min-h-12 px-6 text-base rounded-[var(--radius-md)] gap-2.5",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      href,
      variant = "primary",
      size = "md",
      className = "",
      type = "button",
      disabled,
      style,
      ...props
    },
    ref
  ) => {
    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    // Guarantee white text on non-ghost button variants
    const computedStyle: React.CSSProperties =
      variant !== "ghost"
        ? { color: "#ffffff", ...style }
        : { ...style };

    if (href) {
      return (
        <Link href={href} className={classes} style={computedStyle}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={classes}
        style={computedStyle}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
