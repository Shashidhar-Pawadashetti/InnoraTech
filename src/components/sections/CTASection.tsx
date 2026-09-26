import * as React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquareCode } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <section className="w-full bg-[#0B1220] py-20 sm:py-28 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#0C3CD4]/20 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0C3CD4]/20 border border-[#0C3CD4]/40 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider">
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>Ready to Eliminate Friction?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Have a Manual Process You Want to Fix?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Tell us how your business currently handles orders, bookings, or daily
            tasks. We will help you identify where digital systems can eliminate
            repetitive work and protect your margins.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-[#0C3CD4]/25">
                Start a Project <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <Link href="/solutions" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-slate-700 text-white hover:bg-slate-800 hover:text-white"
              >
                Explore Solutions
              </Button>
            </Link>
          </div>

          <p className="text-xs text-slate-400 pt-2">
            No obligation • Discovery consultation with our founding engineering team
          </p>
        </div>
      </Container>
    </section>
  );
}
