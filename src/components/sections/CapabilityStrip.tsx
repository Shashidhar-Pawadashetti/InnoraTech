import * as React from "react";
import { Container } from "@/components/ui/Container";

export function CapabilityStrip() {
  const capabilities = [
    "Websites",
    "Web Applications",
    "Business Automation",
    "API & Integrations",
    "Managed Technology",
  ];

  return (
    <div className="w-full border-y border-slate-200/80 bg-slate-50 py-4 sm:py-5">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500">
          {capabilities.map((item, idx) => (
            <React.Fragment key={idx}>
              <span className="hover:text-slate-800 transition-colors">
                {item}
              </span>
              {idx < capabilities.length - 1 && (
                <span className="text-[#0C3CD4] select-none">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>
    </div>
  );
}
