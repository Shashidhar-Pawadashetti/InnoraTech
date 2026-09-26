import Link from "next/link";
import * as React from "react";

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
  "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none cursor-pointer disabled:pointer-events-none disabled:opacity-50 select-none";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-primary-hover)] shadow-sm",
  secondary:
    "border border-[var(--border-default)] bg-white text-[var(--text-primary)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-secondary)]",
  outline:
    "border border-[var(--border-default)] bg-transparent text-[var(--text-primary)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-secondary)]",
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
      ...props
    },
    ref
  ) => {
    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
      return (
        <Link href={href} className={classes}>
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
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
