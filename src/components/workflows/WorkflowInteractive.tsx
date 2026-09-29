"use client";

import * as React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkflowStep {
  title: string;
  actor: string;
  description: string;
}

interface WorkflowInteractiveProps {
  systemTitle?: string;
  steps: WorkflowStep[];
  className?: string;
}

export function WorkflowInteractive({
  systemTitle = "Connected System Flow",
  steps,
  className,
}: WorkflowInteractiveProps) {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-slate-900 p-6 sm:p-8 text-white shadow-xl shadow-slate-900/10",
        className
      )}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#38BDF8]">
            Automated Architecture
          </span>
          <h4 className="text-lg font-bold text-white mt-1">{systemTitle}</h4>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Active Connected Flow</span>
        </div>
      </div>

      {/* Steps List */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          const isPast = idx < activeStep;

          return (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={cn(
                "cursor-pointer rounded-xl p-4 transition-all duration-200 border text-left",
                isActive
                  ? "bg-[#0C34C5]/20 border-[#38BDF8] ring-1 ring-[#38BDF8]/40 scale-[1.02]"
                  : "bg-slate-800/40 border-slate-800 hover:bg-slate-800/70 hover:border-slate-700"
              )}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={cn(
                    "text-xs font-bold px-2 py-0.5 rounded",
                    isActive
                      ? "bg-[#0C34C5] text-white"
                      : "bg-slate-800 text-slate-400"
                  )}
                >
                  Step 0{idx + 1}
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  {step.actor}
                </span>
              </div>
              <h5 className="text-sm font-semibold text-white mb-1.5 flex items-center gap-1.5">
                {isPast ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 animate-[fadeIn_0.3s_ease-out]" />
                ) : null}
                <span>{step.title}</span>
              </h5>
              <p className="text-xs text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Progress bar */}
      <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800 text-xs text-slate-400">
        <span>Click any step to inspect system handoff</span>
        <span className="text-[#38BDF8] font-medium flex items-center gap-1">
          Zero Manual Re-entry <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </div>
  );
}
