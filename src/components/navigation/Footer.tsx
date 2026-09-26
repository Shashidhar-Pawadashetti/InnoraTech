import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B1220] text-slate-400 border-t border-slate-800">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/brand/logo-dark.svg"
                alt="INNORATECH"
                width={147}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Turn manual work into digital solutions. Helping businesses build
              modern websites, web applications, and digital automations.
            </p>
          </div>

          {/* Col 2: Industry Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/solutions/restaurants"
                  className="hover:text-white transition-colors"
                >
                  Restaurants
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/hotels"
                  className="hover:text-white transition-colors"
                >
                  Hotels
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/bakeries"
                  className="hover:text-white transition-colors"
                >
                  Bakeries
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/business-automation"
                  className="hover:text-white transition-colors"
                >
                  Custom Business Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Agency Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Business Websites
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Business Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  API & Integrations
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Deployment & Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Agency & Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Featured Work
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {currentYear} INNORATECH. All rights reserved.</p>
          <p className="text-slate-400">
            Professional Technology & Business-Solutions Agency
          </p>
        </div>
      </Container>
    </footer>
  );
}
