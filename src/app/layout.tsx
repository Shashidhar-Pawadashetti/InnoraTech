import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/Footer";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "INNORATECH",
    template: "%s | INNORATECH",
  },
  description:
    "INNORATECH helps businesses replace manual processes with modern websites, web applications, automation, and integrations.",
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
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
