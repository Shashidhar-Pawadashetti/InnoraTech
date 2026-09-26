import { Resend } from "resend";
import { env } from "@/lib/env";
import { LeadNotification } from "@/emails/LeadNotification";
import { LeadConfirmation } from "@/emails/LeadConfirmation";

const resend = new Resend(env.RESEND_API_KEY);

export interface LeadEmailData {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: string;
  serviceInterest: string;
  problemDescription: string;
  budgetRange?: string;
  preferredContactMethod?: string;
}

export async function sendLeadEmails(lead: LeadEmailData): Promise<void> {
  // Graceful simulation when running in local dev or without live Resend credentials
  if (
    !env.RESEND_API_KEY ||
    env.RESEND_API_KEY.startsWith("re_placeholder") ||
    env.RESEND_API_KEY === "re_123456789"
  ) {
    console.log(
      `[RESEND_SIMULATION] Email dispatch simulated:\n  To Lead: ${lead.email}\n  To Agency: ${env.LEADS_TO_EMAIL}\n  Subject: New project enquiry — ${lead.businessName}`
    );
    return;
  }

  try {
    await Promise.all([
      resend.emails.send({
        from: env.RESEND_FROM_EMAIL,
        to: env.LEADS_TO_EMAIL,
        subject: `New project enquiry — ${lead.businessName}`,
        react: LeadNotification(lead),
      }),
      resend.emails.send({
        from: env.RESEND_FROM_EMAIL,
        to: lead.email,
        subject: "We received your INNORATECH project enquiry",
        react: LeadConfirmation(lead),
      }),
    ]);
  } catch (error) {
    // Log failure without failing the entire lead creation process
    console.error("[RESEND_DELIVERY_ERROR] Failed to send email notifications:", error);
  }
}
