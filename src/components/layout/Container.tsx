import type { ReactNode } from "react";

export type ContainerSize = "sm" | "md" | "lg" | "narrow" | "default" | "wide";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
}

const sizes: Record<ContainerSize, string> = {
  narrow: "max-w-4xl",
  sm: "max-w-4xl",
  md: "max-w-5xl",
  default: "max-w-[1280px]",
  lg: "max-w-[1280px]",
  wide: "max-w-7xl",
};

export function Container({
  children,
  className = "",
  size = "default",
}: ContainerProps) {
  const maxWidth = sizes[size] ?? "max-w-[1280px]";
  return (
    <div
      className={`mx-auto w-full ${maxWidth} px-5 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}
