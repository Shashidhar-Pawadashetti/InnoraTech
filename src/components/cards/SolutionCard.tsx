import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Solution } from "@/data/solutions";

export interface SolutionCardProps {
  solution: Solution;
}

export function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <Card hoverable className="flex flex-col justify-between h-full group bg-white">
      <div>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="brand">{solution.eyebrow}</Badge>
        </div>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-[var(--brand-primary)] transition-colors mb-2">
          {solution.title}
        </h3>
        <p className="text-sm font-medium text-slate-700 mb-3">
          {solution.shortDescription}
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {solution.description}
        </p>

        {/* Feature bullets */}
        <ul className="space-y-2 mb-6">
          {solution.capabilities.slice(0, 4).map((cap, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
            >
              <Check className="w-4 h-4 text-[var(--brand-primary)] shrink-0 mt-0.5" />
              <span>{cap}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/solutions/${solution.slug}`}
          className="inline-flex items-center text-sm font-semibold text-[var(--brand-primary)] group-hover:text-[var(--brand-primary-hover)] gap-1.5"
        >
          Explore Solution{" "}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <span className="text-xs font-semibold px-2 py-0.5 bg-blue-50 text-[var(--brand-primary)] rounded">
          {solution.capabilities.length} Capabilities
        </span>
      </div>
    </Card>
  );
}
