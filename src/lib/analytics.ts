"use client";

export type AnalyticsEvent =
  | "start_project_click"
  | "explore_solutions_click"
  | "contact_form_open"
  | "contact_form_submit"
  | "contact_form_success"
  | "contact_form_error"
  | "solution_view"
  | "service_view"
  | "project_view";

export function trackEvent(
  name: AnalyticsEvent,
  properties?: Record<string, string | number | boolean | null | undefined>
) {
  if (typeof window === "undefined") return;

  try {
    // Vercel Web Analytics
    if ((window as unknown as { va?: (type: string, data: object) => void }).va) {
      (window as unknown as { va: (type: string, data: object) => void }).va("event", {
        name,
        ...properties,
      });
    }

    if (process.env.NODE_ENV !== "production") {
      console.log(`[ANALYTICS] Event: ${name}`, properties);
    }
  } catch (err) {
    console.warn("[ANALYTICS_ERROR] Could not track event:", err);
  }
}

export interface AttributionData {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  sourcePage?: string;
}

const UTM_STORAGE_KEY = "innoratech_attribution";

/**
 * Captures UTM parameters and source referrer page into sessionStorage for persistent lead attribution.
 */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source");
    const utmMedium = params.get("utm_medium");
    const utmCampaign = params.get("utm_campaign");
    const currentPath = window.location.pathname;

    const existingRaw = sessionStorage.getItem(UTM_STORAGE_KEY);
    const existing: AttributionData = existingRaw ? JSON.parse(existingRaw) : {};

    const updated: AttributionData = {
      utmSource: utmSource || existing.utmSource || "",
      utmMedium: utmMedium || existing.utmMedium || "",
      utmCampaign: utmCampaign || existing.utmCampaign || "",
      sourcePage:
        currentPath !== "/contact"
          ? currentPath
          : existing.sourcePage || "/",
    };

    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(updated));
  } catch {
    // sessionStorage might be restricted or throw in strict privacy contexts
  }
}

/**
 * Retrieves the stored attribution data when submitting a lead.
 */
export function getAttribution(): AttributionData {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
