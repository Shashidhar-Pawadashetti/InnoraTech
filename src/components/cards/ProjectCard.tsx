import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ProjectItem } from "@/data/projects";

export interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card hoverable className="flex flex-col justify-between h-full group">
      <div>
        {/* Classification Badge */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <Badge variant={project.isDemo ? "demo" : "client"}>
            {project.isDemo ? "INNORATECH Demo" : "Client Project"}
          </Badge>
          <span className="text-xs font-medium text-slate-500">
            {project.category}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0C3CD4] transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-slate-700 mb-3">
          {project.tagline}
        </p>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="space-y-1.5 mb-6">
          {project.keyFeatures.slice(0, 2).map((feat, i) => (
            <div key={i} className="text-xs text-slate-600 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0C3CD4] shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <Link
          href={`/work`}
          className="inline-flex items-center text-sm font-semibold text-[#0C3CD4] group-hover:text-[#082FA8] gap-1.5"
        >
          View Case Study{" "}
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <div className="flex gap-1.5">
          {project.technologies.slice(0, 2).map((tech, idx) => (
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
