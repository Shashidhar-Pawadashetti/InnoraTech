import { Container } from "@/components/layout/Container";

const capabilities = [
  "Business Websites",
  "Web Applications",
  "Business Automation",
  "API & Integrations",
  "Deployment & Maintenance",
];

export function CapabilityStrip() {
  return (
    <section className="border-y border-[var(--border-default)] bg-[var(--surface-secondary)]">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 py-6 text-sm font-medium text-[var(--text-secondary)] sm:gap-x-7">
          {capabilities.map((capability, index) => (
            <div key={capability} className="flex items-center gap-5">
              <span>{capability}</span>

              {index < capabilities.length - 1 && (
                <span className="hidden text-slate-300 sm:inline select-none">
                  •
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
