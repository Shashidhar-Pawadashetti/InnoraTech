import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z
    .string()
    .min(1)
    .default(
      "postgresql://placeholder:placeholder@ep-sample.us-east-2.aws.neon.tech/innoratech?sslmode=require"
    ),

  RESEND_API_KEY: z.string().min(1).default("re_placeholder_development_key"),
  RESEND_FROM_EMAIL: z
    .string()
    .min(1)
    .default("Innora <leads@innoratech.in>"),
  LEADS_TO_EMAIL: z.string().min(1).default("founders@innoratech.in"),

  TURNSTILE_SECRET_KEY: z
    .string()
    .min(1)
    .default("1x0000000000000000000000000000000AA"),

  NEXT_PUBLIC_TURNSTILE_SITE_KEY: z
    .string()
    .min(1)
    .default("1x00000000000000000000AA"),

  NEXT_PUBLIC_SITE_URL: z
    .string()
    .url()
    .default("http://localhost:3000"),
});

export const env = envSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,

  RESEND_API_KEY: process.env.RESEND_API_KEY,
  RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
  LEADS_TO_EMAIL: process.env.LEADS_TO_EMAIL,

  TURNSTILE_SECRET_KEY: process.env.TURNSTILE_SECRET_KEY,

  NEXT_PUBLIC_TURNSTILE_SITE_KEY:
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,

  NEXT_PUBLIC_SITE_URL:
    process.env.NEXT_PUBLIC_SITE_URL,
});
