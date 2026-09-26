import {
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

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
  id: uuid("id").defaultRandom().primaryKey(),

  createdAt: timestamp("created_at", {
    withTimezone: true,
  })
    .defaultNow()
    .notNull(),

  name: text("name").notNull(),
  businessName: text("business_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),

  businessType: text("business_type").notNull(),
  serviceInterest: text("service_interest").notNull(),

  problemDescription: text("problem_description").notNull(),

  websiteUrl: text("website_url"),
  budgetRange: text("budget_range"),
  preferredContactMethod: text("preferred_contact_method"),

  sourcePage: text("source_page"),
  utmSource: text("utm_source"),
  utmMedium: text("utm_medium"),
  utmCampaign: text("utm_campaign"),

  status: leadStatusEnum("status")
    .default("NEW")
    .notNull(),
});

export type Lead = typeof leads.$inferSelect;
export type NewLead = typeof leads.$inferInsert;
