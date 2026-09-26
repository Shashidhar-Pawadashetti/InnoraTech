import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SolutionItem } from "@/data/solutions";

export interface SolutionCardProps {
  solution: SolutionItem;
}

export function SolutionCard({ solution }: SolutionCardProps) {
  return (
    <Card hoverable className="flex flex-col justify-between h-full group">
      <div>
        <div className="flex items-center justify-between mb-4">
          <Badge variant="brand">{solution.badge}</Badge>
        </div>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0C34C5] transition-colors mb-2">
          {solution.title}
        </h3>
        <p className="text-sm font-medium text-slate-700 mb-4">
          {solution.tagline}
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {solution.solutionSummary}
        </p>

        {/* Feature bullets */}
        <ul className="space-y-2 mb-6">
          {solution.features.slice(0, 3).map((feat, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
            >
              <CheckCircle2 className="w-4 h-4 text-[#0C34C5] shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/solutions/${solution.slug}`}
          className="inline-flex items-center text-sm font-semibold text-[#0C34C5] group-hover:text-[#09289E] gap-1.5"
        >
          Explore Solution{" "}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <div className="flex gap-2">
          {solution.impactMetrics.slice(0, 1).map((metric, i) => (
            <span
              key={i}
              className="text-xs font-semibold px-2 py-0.5 bg-slate-100 rounded text-slate-700"
            >
              {metric.value} {metric.label}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
