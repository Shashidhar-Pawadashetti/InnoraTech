import { pgTable, text, timestamp, varchar, pgEnum } from "drizzle-orm/pg-core";

export const leadStatusEnum = pgEnum("lead_status", [
  "NEW",
  "CONTACTED",
  "QUALIFIED",
  "DISCOVERY_SCHEDULED",
  "PROPOSAL_SENT",
  "WON",
  "LOST",
]);

export const leads = pgTable("leads", {
  id: varchar("id", { length: 36 }).primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),

  // Contact Details
  fullName: varchar("full_name", { length: 255 }).notNull(),
  businessName: varchar("business_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  preferredContactMethod: varchar("preferred_contact_method", { length: 50 }).default("whatsapp").notNull(),

  // Project Profile
  businessType: varchar("business_type", { length: 100 }).notNull(),
  servicesNeeded: text("services_needed").notNull(), // JSON string array
  problemDescription: text("problem_description").notNull(),
  websiteUrl: varchar("website_url", { length: 500 }),
  budgetRange: varchar("budget_range", { length: 100 }),

  // Attribution
  sourcePage: varchar("source_page", { length: 500 }).notNull(),
  referrer: varchar("referrer", { length: 500 }),
  utmSource: varchar("utm_source", { length: 100 }),
  utmMedium: varchar("utm_medium", { length: 100 }),
  utmCampaign: varchar("utm_campaign", { length: 100 }),

  // Operational State
  status: leadStatusEnum("status").default("NEW").notNull(),
  internalNotes: text("internal_notes"),
  turnstileVerified: timestamp("turnstile_verified", { withTimezone: true }),
});

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
