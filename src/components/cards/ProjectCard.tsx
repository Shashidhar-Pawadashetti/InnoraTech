import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/data/projects";

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hoverable className="flex flex-col justify-between h-full group bg-white">
      <div>
        {/* Classification Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <Badge variant={project.status === "demo" ? "demo" : "client"}>
            {project.label}
          </Badge>
          <span className="text-xs font-medium text-slate-500">
            {project.category}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-[var(--brand-primary)] transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Workflow preview */}
        <div className="space-y-1.5 mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Workflow Highlights
          </p>
          {project.workflow.slice(0, 3).map((step, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-primary)] shrink-0" />
              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center text-sm font-semibold text-[var(--brand-primary)] group-hover:text-[var(--brand-primary-hover)] gap-1.5"
        >
          View Demo Flow{" "}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <div className="flex gap-1.5 flex-wrap">
          {project.services.slice(0, 2).map((svc, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2 py-0.5 bg-slate-100 rounded text-slate-600"
            >
              {svc}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
