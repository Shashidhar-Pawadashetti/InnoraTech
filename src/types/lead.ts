export type LeadStatus =
  | "NEW"
  | "CONTACTED"
  | "QUALIFIED"
  | "DISCOVERY_SCHEDULED"
  | "PROPOSAL_SENT"
  | "WON"
  | "LOST";

export interface LeadInput {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: string;
  serviceInterest: string;
  problemDescription: string;
  websiteUrl?: string;
  budgetRange?: string;
  preferredContactMethod?: string;
  sourcePage?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  turnstileToken: string;
}

export const businessTypes = [
  "Restaurant",
  "Hotel",
  "Bakery",
  "Retail",
  "Manufacturing",
  "Healthcare",
  "Professional Services",
  "Startup",
  "Other",
] as const;

export const serviceInterests = [
  "Business Website",
  "Web Application",
  "Online Ordering",
  "Booking System",
  "E-commerce",
  "Business Automation",
  "API / Integration",
  "Maintenance",
  "Not Sure — I want consultation",
] as const;
