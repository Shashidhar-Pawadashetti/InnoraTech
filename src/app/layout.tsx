import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/Footer";
import { AttributionCapture } from "@/components/analytics/AttributionCapture";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://innoratech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "INNORATECH | Digital Solutions for Growing Businesses",
    template: "%s | INNORATECH",
  },

  description:
    "INNORATECH helps businesses replace manual processes with modern websites, web applications, automation, and integrations.",

  applicationName: "INNORATECH",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "INNORATECH",
    title: "INNORATECH | Turn Manual Work Into Digital Solutions",
    description:
      "Modern websites, web applications, business automation, and integrations for growing businesses.",
    url: "/",
    images: [
      {
        url: "/og/innoratech-default.png",
        width: 1200,
        height: 630,
        alt: "INNORATECH — Turn Manual Work Into Digital Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "INNORATECH | Turn Manual Work Into Digital Solutions",
    description:
      "Modern websites, web applications, business automation, and integrations for growing businesses.",
    images: ["/og/innoratech-default.png"],
  },

  icons: {
    icon: "/brand/favicon.svg",
    apple: "/brand/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}>
        {/* Skip to Content for Keyboard Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--brand-primary)] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        <Navbar />
        <main id="main-content" className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />

        {/* Real User Monitoring & Core Web Vitals */}
        <Analytics />
        <SpeedInsights />
        <AttributionCapture />
      </body>
    </html>
  );
}
