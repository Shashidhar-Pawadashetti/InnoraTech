import * as React from "react";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";

export interface ProblemCardProps {
  icon: LucideIcon;
  industry: string;
  headline: string;
  description: string;
  solutionLink: string;
}

export function ProblemCard({
  icon: Icon,
  industry,
  headline,
  description,
  solutionLink,
}: ProblemCardProps) {
  return (
    <Card hoverable className="flex flex-col justify-between h-full group">
      <div>
        <div className="w-11 h-11 rounded-xl bg-slate-100 group-hover:bg-[#0C34C5]/10 flex items-center justify-center text-slate-700 group-hover:text-[#0C34C5] transition-colors mb-5">
          <Icon className="w-5 h-5" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
          {industry}
        </p>
        <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-[#0C34C5] transition-colors">
          {headline}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
      </div>
      <div className="mt-6 pt-4 border-t border-slate-100">
        <Link
          href={solutionLink}
          className="inline-flex items-center text-sm font-semibold text-[#0C34C5] group-hover:text-[#09289E] gap-1.5"
        >
          See how we solve this{" "}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </Card>
  );
}
