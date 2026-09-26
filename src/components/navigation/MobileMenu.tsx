"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { solutions } from "@/data/solutions";
import { services } from "@/data/services";

export interface MobileMenuProps {
  onClose: () => void;
}

export function MobileMenu({ onClose }: MobileMenuProps) {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="border-t border-[var(--border-default)] bg-white lg:hidden animate-in slide-in-from-top-1 duration-150 max-h-[80vh] overflow-y-auto">
      <nav className="mx-auto flex max-w-[1280px] flex-col gap-1 px-5 py-5 sm:px-6">
        {/* Solutions Group */}
        <div>
          <div className="flex items-center justify-between rounded-[var(--radius-md)] px-3 py-2.5 text-sm font-semibold text-slate-900 hover:bg-[var(--surface-secondary)]">
            <Link href="/solutions" onClick={onClose} className="grow">
              Solutions
            </Link>
            <button
              type="button"
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="p-1 text-slate-500 hover:text-[var(--brand-primary)]"
              aria-label="Toggle solutions submenu"
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  solutionsOpen ? "rotate-180 text-[var(--brand-primary)]" : ""
                }`}
              />
            </button>
          </div>

          {solutionsOpen && (
            <div className="ml-4 pl-3 border-l-2 border-slate-100 my-1 space-y-1">
              {solutions.map((sol) => (
                <Link
                  key={sol.slug}
                  href={`/solutions/${sol.slug}`}
                  onClick={onClose}
                  className="block py-1.5 text-xs font-medium text-slate-600 hover:text-[var(--brand-primary)]"
                >
                  {sol.eyebrow}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Services Group */}
        <div>
          <div className="flex items-center justify-between rounded-[var(--radius-md)] px-3 py-2.5 text-sm font-semibold text-slate-900 hover:bg-[var(--surface-secondary)]">
            <Link href="/services" onClick={onClose} className="grow">
              Services
            </Link>
            <button
              type="button"
              onClick={() => setServicesOpen(!servicesOpen)}
              className="p-1 text-slate-500 hover:text-[var(--brand-primary)]"
              aria-label="Toggle services submenu"
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-[var(--brand-primary)]" : ""
                }`}
              />
            </button>
          </div>

          {servicesOpen && (
            <div className="ml-4 pl-3 border-l-2 border-slate-100 my-1 space-y-1">
              {services.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  onClick={onClose}
                  className="block py-1.5 text-xs font-medium text-slate-600 hover:text-[var(--brand-primary)]"
                >
                  {svc.title}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link
          href="/work"
          onClick={onClose}
          className="rounded-[var(--radius-md)] px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          Work
        </Link>

        <Link
          href="/process"
          onClick={onClose}
          className="rounded-[var(--radius-md)] px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          Process
        </Link>

        <Link
          href="/about"
          onClick={onClose}
          className="rounded-[var(--radius-md)] px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          About
        </Link>

        <Link
          href="/contact"
          onClick={onClose}
          className="rounded-[var(--radius-md)] px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          Contact
        </Link>

        <div className="pt-2">
          <Button href="/contact" className="w-full" onClick={onClose}>
            Start a Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </nav>
    </div>
  );
}
