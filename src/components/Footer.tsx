import Image from "next/image";
import Link from "next/link";

const solutionLinks = [
  { label: "Restaurants", href: "/solutions/restaurants" },
  { label: "Hotels", href: "/solutions/hotels" },
  { label: "Bakeries", href: "/solutions/bakeries" },
  {
    label: "Business Automation",
    href: "/solutions/business-automation",
  },
];

const companyLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--surface-dark)] text-white">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" aria-label="INNORATECH home">
              <Image
                src="/brand/logo-dark.svg"
                alt="INNORATECH"
                width={170}
                height={37}
                className="h-8 w-auto"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              Turn manual work into digital solutions. INNORATECH helps
              businesses build modern websites, web applications, automation, and
              integrations.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Solutions
            </h3>

            <ul className="mt-4 space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200">
              Company
            </h3>

            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} INNORATECH. All rights reserved.</p>

          <div className="flex gap-5">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
