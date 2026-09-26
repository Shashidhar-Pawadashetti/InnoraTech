import { z } from "zod";

export const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100),

  businessName: z
    .string()
    .trim()
    .min(2, "Please enter your business name.")
    .max(150),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(254),

  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(30),

  businessType: z
    .string()
    .trim()
    .min(1, "Please select your business type."),

  serviceInterest: z
    .string()
    .trim()
    .min(1, "Please select what you need."),

  problemDescription: z
    .string()
    .trim()
    .min(
      20,
      "Please tell us a little more about the problem (at least 20 characters)."
    )
    .max(5000),

  websiteUrl: z
    .string()
    .trim()
    .url("Please enter a valid URL.")
    .optional()
    .or(z.literal("")),

  budgetRange: z
    .string()
    .trim()
    .max(100)
    .optional()
    .or(z.literal("")),

  preferredContactMethod: z
    .string()
    .trim()
    .max(50)
    .optional()
    .or(z.literal("")),

  sourcePage: z
    .string()
    .trim()
    .max(500)
    .optional()
    .or(z.literal("")),

  utmSource: z
    .string()
    .trim()
    .max(100)
    .optional()
    .or(z.literal("")),

  utmMedium: z
    .string()
    .trim()
    .max(100)
    .optional()
    .or(z.literal("")),

  utmCampaign: z
    .string()
    .trim()
    .max(100)
    .optional()
    .or(z.literal("")),

  turnstileToken: z
    .string()
    .min(1, "Verification is required."),

  // Honeypot field (hidden from legitimate users, must be empty)
  companyWebsite: z
    .string()
    .optional()
    .or(z.literal("")),
});

export type ValidatedLead = z.infer<typeof leadSchema>;
