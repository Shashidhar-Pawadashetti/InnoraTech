CREATE TYPE "public"."lead_status" AS ENUM('NEW', 'CONTACTED', 'QUALIFIED', 'DISCOVERY_SCHEDULED', 'PROPOSAL_SENT', 'WON', 'LOST');--> statement-breakpoint
CREATE TABLE "leads" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"name" text NOT NULL,
	"business_name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"business_type" text NOT NULL,
	"service_interest" text NOT NULL,
	"problem_description" text NOT NULL,
	"website_url" text,
	"budget_range" text,
	"preferred_contact_method" text,
	"source_page" text,
	"utm_source" text,
	"utm_medium" text,
	"utm_campaign" text,
	"status" "lead_status" DEFAULT 'NEW' NOT NULL
);
