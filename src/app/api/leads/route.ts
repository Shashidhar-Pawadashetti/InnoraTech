import { NextResponse } from "next/server";
import { getDb } from "@/db/client";
import { leads } from "@/db/schema";
import { leadPayloadSchema } from "@/lib/validation";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Honeypot Anti-Spam Check
    if (body.company_website_confirm && body.company_website_confirm.length > 0) {
      // Silently discard bot submission
      return NextResponse.json({ success: true, message: "Inquiry received" }, { status: 200 });
    }

    // 2. Validate Payload with Zod
    const validationResult = leadPayloadSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the highlighted form fields.",
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;
    const leadId = crypto.randomUUID();

    // 3. Persist to Neon PostgreSQL Database (if configured)
    const db = getDb();
    if (db) {
      try {
        await db.insert(leads).values({
          id: leadId,
          fullName: data.fullName,
          businessName: data.businessName,
          email: data.email,
          phone: data.phone,
          preferredContactMethod: data.preferredContactMethod,
          businessType: data.businessType,
          servicesNeeded: JSON.stringify(data.servicesNeeded),
          problemDescription: data.problemDescription,
          websiteUrl: data.websiteUrl || null,
          budgetRange: data.budgetRange || null,
          sourcePage: body.sourcePage || "/contact",
          referrer: body.referrer || null,
          utmSource: body.utmSource || null,
          utmMedium: body.utmMedium || null,
          utmCampaign: body.utmCampaign || null,
          status: "NEW",
        });
      } catch (dbError) {
        console.error("[DATABASE_INSERT_ERROR]", dbError);
      }
    }

    // 4. Send Transactional Notification via Resend (if configured)
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const toEmail = process.env.LEADS_TO_EMAIL || "founders@innoratech.com";
        const fromEmail = process.env.RESEND_FROM_EMAIL || "INNORATECH <leads@innoratech.com>";

        await resend.emails.send({
          from: fromEmail,
          to: toEmail,
          subject: `[New Lead] ${data.businessName} — ${data.servicesNeeded.join(", ")}`,
          text: `New Lead Details:\n\nName: ${data.fullName}\nBusiness: ${data.businessName}\nEmail: ${data.email}\nPhone: ${data.phone}\nService Interest: ${data.servicesNeeded.join(", ")}\nProblem: ${data.problemDescription}\nBudget: ${data.budgetRange || "Not specified"}`,
        });
      } catch (emailError) {
        console.error("[RESEND_NOTIFICATION_ERROR]", emailError);
      }
    }

    // 5. Success response
    return NextResponse.json(
      {
        success: true,
        referenceId: leadId,
        message: "Your enquiry has been received. Our team will contact you within 24 business hours.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[LEAD_API_ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        message: "We couldn't submit your enquiry. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}
