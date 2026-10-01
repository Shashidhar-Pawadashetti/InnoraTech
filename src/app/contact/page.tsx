import type { Metadata } from "next";
import { Mail, MessageCircle, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { LeadForm } from "@/components/forms/LeadForm";

export const metadata: Metadata = {
  title: "Contact & Project Inquiry",
  description:
    "Tell us how your business currently works, what is currently manual, and what you want to improve. Receive a direct architectural proposal from our founding engineers.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Project Inquiry | Innora",
    description:
      "Start a direct discussion with our founding software engineers about digitizing your business workflow.",
    url: "/contact",
    images: ["/og/innoratech-default.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Contact Hero & Workspace */}
      <section className="bg-[var(--surface-secondary)] border-b border-[var(--border-default)]">
        <Container>
          <div className="py-16 sm:py-20 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--brand-primary)]">
              START A PROJECT
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Let&apos;s Build Something Useful.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-secondary)]">
              Tell us how your business currently works, what is currently manual,
              and what you want to improve.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Two-Column Layout */}
      <Section padding="lg">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Founder Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Direct Founder Consultation
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  When you reach out to Innora, you speak directly with the engineers
                  who build the software. No junior sales reps, no aggressive scripts.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                {/* Email */}
                <a
                  href="mailto:hello@innoratech.in"
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-[var(--brand-primary)] transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[var(--brand-primary)] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="grow">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Email
                    </p>
                    <p className="text-sm font-semibold text-slate-900 group-hover:text-[var(--brand-primary)]">
                      hello@innoratech.in
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[var(--brand-primary)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-emerald-500 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div className="grow">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      WhatsApp
                    </p>
                    <p className="text-sm font-semibold text-slate-900 group-hover:text-emerald-600">
                      +91 98765 43210
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/innora-tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white hover:border-blue-600 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.69 1.69 0 1 0 0-3.38 1.69 1.69 0 0 0 0 3.38m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                    </svg>
                  </div>
                  <div className="grow">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      LinkedIn
                    </p>
                    <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-700">
                      Innora Tech
                    </p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Guarantees & SLA */}
              <div className="rounded-xl border border-slate-200 bg-slate-50/80 p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Transparent Process Guarantee</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We reply within <strong>24 business hours</strong> with initial architectural
                  feedback on whether your workflow can be automated and what technology is appropriate.
                </p>
                <div className="flex items-center gap-2 pt-2 border-t border-slate-200/80 text-[11px] text-slate-500">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Operational Base: India • Global Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-7">
              <LeadForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
