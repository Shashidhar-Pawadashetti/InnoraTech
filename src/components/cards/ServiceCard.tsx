import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { Service } from "@/data/services";

export interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card hoverable className="flex flex-col justify-between h-full group bg-white">
      <div>
        <span className="text-3xl font-black text-slate-200 group-hover:text-[var(--brand-primary)]/40 transition-colors block mb-4 font-mono">
          {service.number}
        </span>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-[var(--brand-primary)] transition-colors mb-2">
          {service.title}
        </h3>
        <p className="text-sm font-medium text-slate-700 mb-3">
          {service.shortDescription}
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Deliverables / Capabilities */}
        <div className="space-y-1.5 mb-6">
          {service.capabilities.slice(0, 3).map((cap, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
              <Check className="w-3.5 h-3.5 text-[var(--brand-primary)] shrink-0" />
              <span>{cap}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center text-sm font-semibold text-[var(--brand-primary)] group-hover:text-[var(--brand-primary-hover)] gap-1.5"
        >
          View Details{" "}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <span className="text-xs text-slate-400 font-medium">
          {service.suitableFor[0]}
        </span>
      </div>
    </Card>
  );
}
