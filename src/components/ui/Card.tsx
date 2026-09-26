import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export function Card({
  className,
  hoverable = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 transition-all duration-200",
        hoverable &&
          "hover:-translate-y-1 hover:border-[#0C34C5] hover:shadow-lg hover:shadow-slate-900/5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
