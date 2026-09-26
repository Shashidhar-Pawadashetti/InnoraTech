"use client";

import * as React from "react";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // Log exception safely without exposing internal details in the UI
    console.error("[APPLICATION_ERROR]", error?.message || "Internal client exception");
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-white">
      <Container size="narrow" className="text-center space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-7 h-7" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] tracking-tight">
          Something went wrong.
        </h1>
        <p className="text-base text-[var(--text-secondary)] max-w-md mx-auto">
          An unexpected error occurred while loading this page. Our team has been notified.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={() => reset()}>
            <RefreshCcw className="w-4 h-4 mr-2" /> Try Again
          </Button>
          <Button href="/" variant="secondary">
            <Home className="w-4 h-4 mr-2" /> Back to Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
