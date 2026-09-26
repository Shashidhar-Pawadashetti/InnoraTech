import { ArrowRight, Check, Workflow } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/Badge";

const workflowItems = [
  {
    title: "Manual Process",
    description: "Phone calls, paper, messages, spreadsheets",
  },
  {
    title: "Digital System",
    description: "Website, web application, centralized workflow",
  },
  {
    title: "Automation",
    description: "Connected processes, notifications, integrations",
  },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_30%,rgba(12,52,197,0.08),transparent_35%)]" />

      <Container>
        <div className="grid min-h-[680px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
          <div>
            <Badge>BUSINESS TECHNOLOGY SOLUTIONS</Badge>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
              Turn Manual Work Into{" "}
              <span className="text-[var(--brand-primary)]">
                Digital Solutions.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg lg:text-xl">
              INNORATECH helps businesses replace manual processes with modern
              websites, web applications, automation, and integrations.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button href="/solutions" variant="secondary">
                Explore Solutions
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--text-secondary)]">
              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-[var(--brand-primary)]" />
                Business-focused
              </span>

              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-[var(--brand-primary)]" />
                Custom-built
              </span>

              <span className="inline-flex items-center gap-2">
                <Check className="h-4 w-4 text-[var(--brand-primary)]" />
                Long-term support
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[28px] border border-[var(--border-default)] bg-[var(--surface-secondary)] p-6 shadow-sm sm:p-8">
              <div className="flex items-center justify-between border-b border-[var(--border-default)] pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]">
                    Digital Workflow
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-[var(--text-primary)]">
                    From manual to connected
                  </h2>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--brand-primary-soft)]">
                  <Workflow className="h-5 w-5 text-[var(--brand-primary)]" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {workflowItems.map((item, index) => (
                  <div key={item.title}>
                    <div className="rounded-2xl border border-[var(--border-default)] bg-white p-5 shadow-xs transition-transform hover:-translate-y-0.5">
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--brand-primary-soft)] text-sm font-semibold text-[var(--brand-primary)]">
                          0{index + 1}
                        </div>

                        <div>
                          <h3 className="font-semibold text-[var(--text-primary)]">
                            {item.title}
                          </h3>

                          <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {index < workflowItems.length - 1 && (
                      <div className="flex justify-center py-2 font-mono text-sm text-[var(--brand-primary)]">
                        ↓
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-blue-100 bg-white px-5 py-4 shadow-lg sm:block">
              <p className="text-xs text-[var(--text-muted)]">
                INNORATECH
              </p>
              <p className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                Digital systems that work together.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
