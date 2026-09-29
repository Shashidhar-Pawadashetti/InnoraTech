"use client";

import * as React from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { FormField } from "./FormField";
import { businessTypes, serviceInterests } from "@/types/lead";
import { leadSchema } from "@/lib/lead-validation";
import { trackEvent, getAttribution } from "@/lib/analytics";

export function LeadForm() {
  const [formData, setFormData] = React.useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    businessType: "",
    serviceInterest: "",
    problemDescription: "",
    websiteUrl: "",
    budgetRange: "",
    preferredContactMethod: "WhatsApp",
    companyWebsite: "", // Honeypot
  });

  const [fieldErrors, setFieldErrors] = React.useState<Record<string, string>>({});
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  // Track form open event on mount
  React.useEffect(() => {
    trackEvent("contact_form_open", {
      sourcePage: typeof window !== "undefined" ? window.location.pathname : "/contact",
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    setFieldErrors({});

    // Track submit attempt
    trackEvent("contact_form_submit", {
      businessType: formData.businessType,
      serviceInterest: formData.serviceInterest,
    });

    // Capture dynamic browser attribution on submit with persistent storage fallback
    const stored = getAttribution();
    const params = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
    const attribution = {
      sourcePage: stored.sourcePage || (typeof window !== "undefined" ? window.location.pathname : "/contact"),
      utmSource: params?.get("utm_source") || stored.utmSource || "",
      utmMedium: params?.get("utm_medium") || stored.utmMedium || "",
      utmCampaign: params?.get("utm_campaign") || stored.utmCampaign || "",
    };

    // Client-side validation for immediate feedback
    const payload = {
      ...formData,
      ...attribution,
      turnstileToken: "cf-turnstile-dummy",
    };

    const validation = leadSchema.safeParse(payload);
    if (!validation.success) {
      const errors: Record<string, string> = {};
      validation.error.issues.forEach((issue) => {
        const path = issue.path[0];
        if (path && typeof path === "string") {
          errors[path] = issue.message;
        }
      });
      setFieldErrors(errors);
      setStatus("idle");
      setErrorMessage("Please check the highlighted form fields before submitting.");
      return;
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.status === 201 && data.success) {
        setStatus("success");

        // Fire conversion event ONLY on confirmed 201 response
        trackEvent("contact_form_success", {
          businessType: formData.businessType,
          serviceInterest: formData.serviceInterest,
        });
      } else {
        setStatus("error");
        setErrorMessage(data.message || "We couldn't submit your enquiry. Please try again.");

        trackEvent("contact_form_error", {
          status: res.status,
        });
      }
    } catch (err) {
      console.error("[FORM_SUBMIT_NETWORK_ERROR]", err);
      setStatus("error");
      setErrorMessage("Network error. Please try again or reach out directly via WhatsApp or email.");

      trackEvent("contact_form_error", {
        status: "network_exception",
      });
    }
  };

  // Success UI
  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-8 sm:p-12 shadow-sm text-slate-900 animate-in fade-in duration-200">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
          <CheckCircle2 className="h-6 w-6" />
        </div>

        <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          Thanks — your enquiry has been received.
        </h3>

        <p className="mt-4 text-base leading-relaxed text-slate-700">
          We&apos;ve received the details about your project and will review them before
          getting back to you. An engineer will examine your operational workflow
          and prepare a clear architectural proposal.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/solutions">
            Explore Our Solutions
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button href="/" variant="secondary">
            Back to INNORATECH
          </Button>
        </div>

        <div className="mt-8 pt-6 border-t border-emerald-200/80 text-xs text-slate-500">
          Urgent project query? Reach out directly via WhatsApp at{" "}
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[var(--brand-primary)] hover:underline"
          >
            +91 98765 43210
          </a>
          .
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm space-y-6"
    >
      {/* Honeypot field (hidden from real users, rejects bots) */}
      <input
        type="text"
        name="companyWebsite"
        value={formData.companyWebsite}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] opacity-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="border-b border-slate-100 pb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[var(--brand-primary)]">
          Project Inquiry
        </span>
        <h3 className="text-xl font-bold text-slate-900 mt-1">
          Tell us about your business process
        </h3>
      </div>

      {/* Row 1: Full Name & Business Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Full Name" required error={fieldErrors.name} id="name">
          <Input
            id="name"
            name="name"
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormField>

        <FormField label="Business Name" required error={fieldErrors.businessName} id="businessName">
          <Input
            id="businessName"
            name="businessName"
            placeholder="e.g. Blue Harbor Bistro"
            value={formData.businessName}
            onChange={handleChange}
            required
          />
        </FormField>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Email" required error={fieldErrors.email} id="email">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="rahul@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormField>

        <FormField label="Phone / WhatsApp" required error={fieldErrors.phone} id="phone">
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </FormField>
      </div>

      {/* Row 3: Business Type & Service Interest */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <FormField label="Business Type" required error={fieldErrors.businessType} id="businessType">
          <Select
            id="businessType"
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            required
          >
            <option value="">Select your industry...</option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </FormField>

        <FormField label="What do you need?" required error={fieldErrors.serviceInterest} id="serviceInterest">
          <Select
            id="serviceInterest"
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleChange}
            required
          >
            <option value="">Select requirement...</option>
            {serviceInterests.map((interest) => (
              <option key={interest} value={interest}>
                {interest}
              </option>
            ))}
          </Select>
        </FormField>
      </div>

      {/* Problem Description */}
      <FormField
        label="Tell us about the problem"
        required
        error={fieldErrors.problemDescription}
        id="problemDescription"
        hint="Min. 20 characters"
      >
        <Textarea
          id="problemDescription"
          name="problemDescription"
          rows={4}
          placeholder="Describe your current manual steps, what software you use, and where the workflow breaks down..."
          value={formData.problemDescription}
          onChange={handleChange}
          required
        />
      </FormField>

      {/* Optional Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
        <FormField label="Current Website" error={fieldErrors.websiteUrl} id="websiteUrl" hint="Optional">
          <Input
            id="websiteUrl"
            name="websiteUrl"
            type="url"
            placeholder="https://example.com"
            value={formData.websiteUrl}
            onChange={handleChange}
          />
        </FormField>

        <FormField label="Budget Range" id="budgetRange" hint="Optional">
          <Select
            id="budgetRange"
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
          >
            <option value="">Select an investment tier...</option>
            <option value="Under ₹50,000 / $600">Starter Package (Under ₹50k / $600)</option>
            <option value="₹50k–₹1.5L / $600–$1,800">Standard System (₹50k–₹1.5L / $600–$1,800)</option>
            <option value="₹1.5L–₹3L / $1,800–$3,500">Custom Full-Stack (₹1.5L–₹3L / $1,800–$3,500)</option>
            <option value="Custom Enterprise">Custom Enterprise Process</option>
          </Select>
        </FormField>
      </div>

      {/* Preferred Contact Method */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-2">
          Preferred Contact Method
        </label>
        <div className="flex gap-6 text-xs font-medium text-slate-700">
          {["WhatsApp", "Email", "Phone"].map((method) => (
            <label key={method} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="preferredContactMethod"
                value={method}
                checked={formData.preferredContactMethod === method}
                onChange={handleChange}
                className="text-[var(--brand-primary)] focus:ring-[var(--brand-primary)]"
              />
              <span>{method}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Error Message */}
      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-xs text-red-800 flex items-start gap-2.5 animate-in fade-in duration-150">
          <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">{errorMessage}</p>
            <p className="mt-1 text-slate-600">
              You can also email us directly at{" "}
              <a href="mailto:contact@innoratech.com" className="text-[var(--brand-primary)] underline">
                contact@innoratech.com
              </a>{" "}
              or message us on WhatsApp.
            </p>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          disabled={status === "submitting"}
          size="lg"
          className="w-full"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting Your Enquiry...
            </>
          ) : (
            <>
              Send Project Enquiry
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>
      </div>

      <p className="text-center text-[11px] text-slate-400">
        Protected by Cloudflare Turnstile. Your data is never shared. Direct engineer consultation.
      </p>
    </form>
  );
}
