import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-white">
      <Container size="narrow" className="text-center space-y-6">
        <span className="text-4xl font-extrabold text-[#0C34C5]">404</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-base text-slate-600 max-w-md mx-auto">
          The page or system resource you requested could not be located. It may
          have moved, or the link may be outdated.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button>
              <Home className="w-4 h-4 mr-1.5" /> Back to Homepage
            </Button>
          </Link>
          <Link href="/solutions">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-1.5" /> Explore Solutions
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
