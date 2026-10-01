"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { solutions } from "@/data/solutions";
import { services } from "@/data/services";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border-default)] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-[1280px] items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          aria-label="Innora home"
          className="shrink-0 flex items-center"
          onClick={() => {
            setOpen(false);
            setActiveDropdown(null);
          }}
        >
          <Image
            src="/brand/logo.svg"
            alt="Innora"
            width={170}
            height={37}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("solutions")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center gap-1">
              <Link
                href="/solutions"
                className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--brand-primary)] py-2"
                onClick={() => setActiveDropdown(null)}
              >
                Solutions
              </Link>
              <button
                type="button"
                aria-expanded={activeDropdown === "solutions"}
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "solutions" ? null : "solutions"
                  )
                }
                className="text-slate-400 hover:text-[var(--brand-primary)] focus:outline-none p-1"
              >
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "solutions" ? "rotate-180 text-[var(--brand-primary)]" : ""}`} />
              </button>
            </div>

            {activeDropdown === "solutions" && (
              <div className="absolute top-full left-0 w-72 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-900/10 border border-slate-100 animate-[fadeSlideDown_0.18s_ease-out]">
                <div className="mb-2 px-3 pt-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Industry Solutions
                  </p>
                </div>
                <div className="space-y-1">
                  {solutions.map((sol) => (
                    <Link
                      key={sol.slug}
                      href={`/solutions/${sol.slug}`}
                      onClick={() => setActiveDropdown(null)}
                      className="block rounded-xl px-3 py-2 text-sm transition-colors hover:bg-slate-50 group"
                    >
                      <span className="font-semibold text-slate-800 group-hover:text-[var(--brand-primary)] block">
                        {sol.eyebrow}
                      </span>
                      <span className="text-xs text-slate-500 line-clamp-1 block">
                        {sol.shortDescription}
                      </span>
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-slate-100 px-3">
                    <Link
                      href="/solutions"
                      onClick={() => setActiveDropdown(null)}
                      className="text-xs font-semibold text-[var(--brand-primary)] hover:underline inline-flex items-center gap-1"
                    >
                      All Solutions Overview &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center gap-1">
              <Link
                href="/services"
                className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--brand-primary)] py-2"
                onClick={() => setActiveDropdown(null)}
              >
                Services
              </Link>
              <button
                type="button"
                aria-expanded={activeDropdown === "services"}
                onClick={() =>
                  setActiveDropdown(
                    activeDropdown === "services" ? null : "services"
                  )
                }
                className="text-slate-400 hover:text-[var(--brand-primary)] focus:outline-none p-1"
              >
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180 text-[var(--brand-primary)]" : ""}`} />
              </button>
            </div>

            {activeDropdown === "services" && (
              <div className="absolute top-full left-0 w-80 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-900/10 border border-slate-100 animate-[fadeSlideDown_0.18s_ease-out]">
                <div className="mb-2 px-3 pt-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Core Technical Services
                  </p>
                </div>
                <div className="space-y-1">
                  {services.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      onClick={() => setActiveDropdown(null)}
                      className="block rounded-xl px-3 py-2 text-sm transition-colors hover:bg-slate-50 group"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-slate-400">
                          {svc.number}
                        </span>
                        <span className="font-semibold text-slate-800 group-hover:text-[var(--brand-primary)]">
                          {svc.title}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500 line-clamp-1 block pl-6">
                        {svc.shortDescription}
                      </span>
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-slate-100 px-3">
                    <Link
                      href="/services"
                      onClick={() => setActiveDropdown(null)}
                      className="text-xs font-semibold text-[var(--brand-primary)] hover:underline inline-flex items-center gap-1"
                    >
                      All Services Overview &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/work"
            className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--brand-primary)]"
          >
            Work
          </Link>

          <Link
            href="/process"
            className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--brand-primary)]"
          >
            Process
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--brand-primary)]"
          >
            About
          </Link>

          <Button href="/contact">
            Start a Project
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] border border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--surface-secondary)] lg:hidden transition-colors"
        >
          {open ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </div>

      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </header>
  );
}
