"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { captureAttribution, trackEvent } from "@/lib/analytics";

function AttributionCaptureInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // 1. Capture UTM and source page attribution
    captureAttribution();

    // 2. Track route-specific view events
    if (pathname.startsWith("/solutions/") && pathname !== "/solutions") {
      trackEvent("solution_view", {
        slug: pathname.replace("/solutions/", ""),
      });
    } else if (pathname.startsWith("/services/") && pathname !== "/services") {
      trackEvent("service_view", {
        slug: pathname.replace("/services/", ""),
      });
    } else if (pathname.startsWith("/work/") && pathname !== "/work") {
      trackEvent("project_view", {
        slug: pathname.replace("/work/", ""),
      });
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    // 3. Delegate CTA button click tracking across Server & Client components
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button");
      if (!target) return;

      const href = target.getAttribute("href") || "";
      const text = target.textContent?.trim().toLowerCase() || "";

      if (
        href === "/contact" ||
        text.includes("start a project") ||
        text.includes("get in touch")
      ) {
        trackEvent("start_project_click", {
          href,
          text: target.textContent?.trim(),
        });
      } else if (
        href === "/solutions" ||
        text.includes("explore solutions") ||
        text.includes("view solutions")
      ) {
        trackEvent("explore_solutions_click", {
          href,
          text: target.textContent?.trim(),
        });
      }
    };

    document.addEventListener("click", handleClick, { passive: true });
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}

export function AttributionCapture() {
  return (
    <Suspense fallback={null}>
      <AttributionCaptureInner />
    </Suspense>
  );
}
