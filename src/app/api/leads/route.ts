import { NextResponse } from "next/server";

import { db } from "@/db/client";
import { leads } from "@/db/schema";
import { leadSchema } from "@/lib/lead-validation";
import { verifyTurnstile } from "@/lib/turnstile";
import { sendLeadEmails } from "@/lib/email";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Honeypot Anti-Spam Check (hidden companyWebsite field)
    if (body.companyWebsite && String(body.companyWebsite).trim().length > 0) {
      // Silently discard bot submission with 200 OK
      return NextResponse.json(
        {
          success: true,
          message: "Your enquiry has been received.",
        },
        { status: 200 }
      );
    }

    // 2. Server-side Zod Validation
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the information you entered.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    // 3. Turnstile Server Verification
    const turnstileValid = await verifyTurnstile(parsed.data.turnstileToken);

    if (!turnstileValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Verification failed. Please try again.",
        },
        { status: 403 }
      );
    }

    const lead = parsed.data;

    // 4. Neon PostgreSQL Database Insertion (Source of Truth)
    try {
      await db.insert(leads).values({
        name: lead.name,
        businessName: lead.businessName,
        email: lead.email,
        phone: lead.phone,
        businessType: lead.businessType,
        serviceInterest: lead.serviceInterest,
        problemDescription: lead.problemDescription,
        websiteUrl: lead.websiteUrl || null,
        budgetRange: lead.budgetRange || null,
        preferredContactMethod: lead.preferredContactMethod || null,
        sourcePage: lead.sourcePage || null,
        utmSource: lead.utmSource || null,
        utmMedium: lead.utmMedium || null,
        utmCampaign: lead.utmCampaign || null,
      });
    } catch (dbError) {
      console.error("[DATABASE_INSERTION_ERROR]", dbError);
      return NextResponse.json(
        {
          success: false,
          message: "We couldn't submit your enquiry. Please try again.",
        },
        { status: 500 }
      );
    }

    // 5. Asynchronous Resend Notification (Email failures don't fail the lead response)
    sendLeadEmails({
      name: lead.name,
      businessName: lead.businessName,
      email: lead.email,
      phone: lead.phone,
      businessType: lead.businessType,
      serviceInterest: lead.serviceInterest,
      problemDescription: lead.problemDescription,
      budgetRange: lead.budgetRange,
      preferredContactMethod: lead.preferredContactMethod,
    }).catch((emailErr) => {
      console.error("[EMAIL_DISPATCH_BACKGROUND_ERROR]", emailErr);
    });

    // 6. Success Response
    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been received.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Lead submission failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "We couldn't submit your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { success: false, message: "Method Not Allowed" },
    { status: 405, headers: { Allow: "POST" } }
  );
}

export async function PUT() {
  return NextResponse.json(
    { success: false, message: "Method Not Allowed" },
    { status: 405, headers: { Allow: "POST" } }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { success: false, message: "Method Not Allowed" },
    { status: 405, headers: { Allow: "POST" } }
  );
}

