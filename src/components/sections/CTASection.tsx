import { ArrowRight } from "lucide-react";

import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  return (
    <Section id="cta" className="bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-[var(--surface-dark)] px-7 py-14 sm:px-10 sm:py-16 lg:px-16 shadow-xl">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-blue-300">
              START A PROJECT
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Have a manual process you want to fix?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Tell us how your business currently works. We&apos;ll help you
              identify where technology can simplify the process.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">
                Let&apos;s Talk
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                href="/solutions"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 hover:text-white"
              >
                Explore Solutions
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
