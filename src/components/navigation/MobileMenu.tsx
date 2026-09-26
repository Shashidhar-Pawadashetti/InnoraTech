import Link from "next/link";
import { Button } from "@/components/ui/Button";

const links = [
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export interface MobileMenuProps {
  onClose: () => void;
  navLinks?: { href: string; label: string }[];
}

export function MobileMenu({ onClose, navLinks }: MobileMenuProps) {
  const displayLinks = navLinks ?? links;

  return (
    <div className="border-t border-[var(--border-default)] bg-white lg:hidden animate-in slide-in-from-top-1 duration-150">
      <nav className="mx-auto flex max-w-[1280px] flex-col gap-1 px-5 py-5 sm:px-6">
        {displayLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="rounded-[var(--radius-md)] px-3 py-3 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            {link.label}
          </Link>
        ))}

        <Button href="/contact" className="mt-3 w-full" onClick={onClose}>
          Start a Project
        </Button>
      </nav>
    </div>
  );
}
