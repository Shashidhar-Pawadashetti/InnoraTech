import type { Metadata } from "next";
import { Mail, MessageCircle, MapPin, Clock, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { LeadForm } from "@/components/forms/LeadForm";

export const metadata: Metadata = {
  title: "Contact & Project Inquiry",
  description:
    "Start a project inquiry with INNORATECH. Tell us about your manual operational bottlenecks and receive a direct architectural response within 24 hours.",
};

export default function ContactPage() {
  return (
    <Section variant="light" padding="lg">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Context & Direct Founder Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0C3CD4]">
                Inquiries & Partnerships
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Let&apos;s Build Something Useful.
              </h1>
              <p className="text-base text-slate-600 leading-relaxed">
                Tell us about your business and how you currently handle orders,
                bookings, or repetitive manual tasks. We will analyze where digital
                workflows can save you hours of effort and protect your margins.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0C3CD4]/10 text-[#0C3CD4] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Email Our Founders
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    contact@innoratech.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    WhatsApp Business Direct
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Response SLA
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    Within 24 business hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Operational Base
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    India (Serving Local & International Clients)
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Assurance */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Direct Engineer Consultation</span>
              </div>
              <p>
                You will not be passed to an aggressive sales rep. You will speak
                directly with the founding engineers who build the software.
              </p>
            </div>
          </div>

          {/* Right Column: Smart Inbound Form */}
          <div className="lg:col-span-7">
            <LeadForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
