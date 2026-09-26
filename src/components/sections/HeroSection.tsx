import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, RefreshCw, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 bg-white">
      {/* Background subtle technical grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C3CD4]/10 border border-[#0C3CD4]/20 text-[#0C3CD4] text-xs font-semibold uppercase tracking-wider">
              <span>Business Technology Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Turn Manual Work{" "}
              <span className="text-[#0C3CD4]">Into Digital Solutions.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">
              INNORATECH helps businesses replace manual processes with modern
              websites, web applications, automation, and connected systems.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto shadow-md">
                  Start a Project <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/solutions">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Explore Solutions
                </Button>
              </Link>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#0C3CD4]" />
                <span>Zero-Commission Models</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#0C3CD4]" />
                <span>Modern Serverless Speed</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#0C3CD4]" />
                <span>End-to-End Ownership</span>
              </div>
            </div>
          </div>

          {/* Right Column: Transformation Pipeline Visual */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 sm:p-7 text-white shadow-xl shadow-slate-900/10 relative">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  innoratech.pipeline.ts
                </span>
              </div>

              {/* Transformation Stack */}
              <div className="space-y-3.5">
                {/* Stage 1: Manual Chaos */}
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 text-xs font-bold">
                      01
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Manual Process</p>
                      <p className="text-sm font-semibold text-slate-200">
                        Phone Calls • Paper Slips • Chats
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] text-red-400 font-mono">Slow</span>
                </div>

                {/* Connecting arrow */}
                <div className="flex justify-center -my-1 text-slate-500">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

                {/* Stage 2: INNORATECH Engine */}
                <div className="p-3.5 rounded-xl bg-[#0C3CD4]/20 border border-[#0C3CD4]/60 flex items-center justify-between ring-1 ring-[#0C3CD4]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#0C3CD4] flex items-center justify-center text-white text-xs font-bold">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-[#38BDF8] font-medium">
                        INNORATECH Engine
                      </p>
                      <p className="text-sm font-semibold text-white">
                        Web App + API + Automations
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#38BDF8] font-mono">
                    Integrated
                  </span>
                </div>

                {/* Connecting arrow */}
                <div className="flex justify-center -my-1 text-slate-500">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

                {/* Stage 3: Connected Digital Outcome */}
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xs font-bold">
                      <RefreshCw className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Business Outcome</p>
                      <p className="text-sm font-semibold text-emerald-400">
                        Zero Friction • Direct Revenue
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-mono">
                    Automated
                  </span>
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  System Operational
                </span>
                <span>Latency: 28ms</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
