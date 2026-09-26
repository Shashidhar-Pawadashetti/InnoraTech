import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { ServiceItem } from "@/data/services";

export interface ServiceCardProps {
  service: ServiceItem;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card hoverable className="flex flex-col justify-between h-full group">
      <div>
        <span className="text-3xl font-black text-slate-200 group-hover:text-[#0C34C5]/30 transition-colors block mb-4">
          {service.number}
        </span>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0C34C5] transition-colors mb-2">
          {service.title}
        </h3>
        <p className="text-sm font-medium text-slate-700 mb-3">
          {service.tagline}
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/services`}
          className="inline-flex items-center text-sm font-semibold text-[#0C34C5] group-hover:text-[#09289E] gap-1.5"
        >
          View Details{" "}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <div className="flex gap-1.5 flex-wrap">
          {service.technologies.slice(0, 2).map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2 py-0.5 bg-slate-100 rounded text-slate-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
