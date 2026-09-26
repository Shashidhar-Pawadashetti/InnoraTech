import { ArrowLeft, Home } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-white">
      <Container size="narrow" className="text-center space-y-6">
        <span className="text-5xl font-extrabold text-[var(--brand-primary)]">404</span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
          Page Not Found
        </h1>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/">
            <Home className="w-4 h-4 mr-2" /> Back to Home
          </Button>
          <Button href="/solutions" variant="secondary">
            <ArrowLeft className="w-4 h-4 mr-2" /> Explore Solutions
          </Button>
        </div>
      </Container>
    </div>
  );
}
