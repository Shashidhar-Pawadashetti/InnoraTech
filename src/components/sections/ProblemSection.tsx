import {
  Hotel,
  ClipboardList,
  MessageSquareText,
  Store,
} from "lucide-react";

import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card } from "@/components/ui/Card";

const problems = [
  {
    icon: ClipboardList,
    label: "Restaurants",
    title: "Paper-based ordering",
    description:
      "Dine-in orders are often written manually and passed from waiter to kitchen, creating delays and mistakes.",
  },
  {
    icon: Hotel,
    label: "Hotels",
    title: "Manual room bookings",
    description:
      "Reservations can arrive through phone calls, WhatsApp, and multiple booking platforms.",
  },
  {
    icon: MessageSquareText,
    label: "Bakeries",
    title: "Orders across conversations",
    description:
      "Custom cake details, payments, and deadlines can become fragmented across chats and spreadsheets.",
  },
  {
    icon: Store,
    label: "Growing Businesses",
    title: "Disconnected workflows",
    description:
      "Important work gets spread across paper, spreadsheets, messages, and separate software systems.",
  },
];

export function ProblemSection() {
  return (
    <Section id="problems">
      <SectionHeader
        eyebrow="THE PROBLEM"
        title="Still Managing Important Work Manually?"
        description="We start by understanding how your business actually operates, then design a digital system around the workflow."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {problems.map((problem) => {
          const Icon = problem.icon;

          return (
            <Card key={problem.title} className="group">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--brand-primary-soft)]">
                <Icon className="h-5 w-5 text-[var(--brand-primary)]" />
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-primary)]">
                {problem.label}
              </p>

              <h3 className="mt-2 text-xl font-semibold tracking-tight text-[var(--text-primary)]">
                {problem.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                {problem.description}
              </p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
