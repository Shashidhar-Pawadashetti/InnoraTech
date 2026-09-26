"use client";

import * as React from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error("[APPLICATION_ERROR]", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 bg-white">
      <Container size="narrow" className="text-center space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-7 h-7" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          System Recovery
        </h1>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          An unexpected interface exception occurred. The incident has been
          logged for engineering review.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={() => reset()}>
            <RefreshCcw className="w-4 h-4 mr-1.5" /> Try Again
          </Button>
          <Link href="/">
            <Button variant="outline">
              <Home className="w-4 h-4 mr-1.5" /> Return Home
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
