import { z } from "zod";

export const leadPayloadSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Full name must be at least 2 characters")
    .max(100),
  businessName: z
    .string()
    .trim()
    .min(2, "Business name is required")
    .max(150),
  email: z
    .string()
    .trim()
    .email("Please provide a valid business email address"),
  phone: z
    .string()
    .trim()
    .min(8, "Phone number is too short")
    .max(25),
  preferredContactMethod: z
    .enum(["whatsapp", "email", "phone"])
    .default("whatsapp"),

  businessType: z.enum([
    "restaurant",
    "hotel",
    "bakery",
    "retail",
    "manufacturing",
    "healthcare",
    "services",
    "startup",
    "other",
  ]),

  servicesNeeded: z
    .array(z.string())
    .min(1, "Please select at least one service"),
  problemDescription: z
    .string()
    .trim()
    .min(10, "Please describe the manual process or bottleneck (min 10 characters)")
    .max(2000),

  websiteUrl: z.string().trim().url("Please enter a valid URL").optional().or(z.literal("")),
  budgetRange: z.string().optional(),

  // Anti-Spam Tokens
  turnstileToken: z.string().optional(),
  company_website_confirm: z.string().max(0, "Bot detected").optional(),
});

export type LeadPayload = z.infer<typeof leadPayloadSchema>;
