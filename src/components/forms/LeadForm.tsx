"use client";

import * as React from "react";
import { ArrowRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";

export function LeadForm() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    preferredContactMethod: "whatsapp",
    businessType: "restaurant",
    servicesNeeded: [] as string[],
    problemDescription: "",
    websiteUrl: "",
    budgetRange: "",
    company_website_confirm: "", // Honeypot
  });

  const [status, setStatus] = React.useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = React.useState("");

  const serviceOptions = [
    "Business Website",
    "Online Ordering",
    "Booking System",
    "E-commerce",
    "Business Automation",
    "Web Application",
    "API / Integration",
    "Maintenance & Support",
    "Not Sure — Consultation",
  ];

  const toggleService = (svc: string) => {
    setFormData((prev) => {
      const exists = prev.servicesNeeded.includes(svc);
      if (exists) {
        return {
          ...prev,
          servicesNeeded: prev.servicesNeeded.filter((s) => s !== svc),
        };
      } else {
        return { ...prev, servicesNeeded: [...prev.servicesNeeded, svc] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    if (formData.servicesNeeded.length === 0) {
      setStatus("error");
      setErrorMessage("Please select at least one service or area of interest.");
      return;
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sourcePage: window.location.pathname,
          referrer: document.referrer || null,
        }),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(
          json.message || "Failed to submit enquiry. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error. Please check your connection or contact us directly."
      );
    }
  };

  if (status === "success") {
    return (
      <div className="p-8 sm:p-10 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-slate-800 space-y-4">
        <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">
          Enquiry Received Successfully!
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed">
          Thank you for sharing your project requirements. Our founding team will
          review your operational details and get back to you via your preferred
          contact channel within <strong>24 business hours</strong>.
        </p>
        <div className="pt-4">
          <Button
            variant="outline"
            onClick={() => {
              setStatus("idle");
              setFormData({
                fullName: "",
                businessName: "",
                email: "",
                phone: "",
                preferredContactMethod: "whatsapp",
                businessType: "restaurant",
                servicesNeeded: [],
                problemDescription: "",
                websiteUrl: "",
                budgetRange: "",
                company_website_confirm: "",
              });
            }}
          >
            Submit Another Inquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-10 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-8"
    >
      {/* Honeypot field (hidden from real users) */}
      <input
        type="text"
        name="company_website_confirm"
        value={formData.company_website_confirm}
        onChange={(e) =>
          setFormData({ ...formData, company_website_confirm: e.target.value })
        }
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Step 1: About You */}
      <div className="space-y-4">
        <div className="border-b border-slate-100 pb-2">
          <span className="text-xs font-bold text-[#0C34C5] uppercase tracking-wider">
            Step 1
          </span>
          <h4 className="text-lg font-bold text-slate-900">Contact Information</h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Full Name *
            </label>
            <Input
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Business / Brand Name *
            </label>
            <Input
              required
              placeholder="e.g. Blue Harbor Bistro"
              value={formData.businessName}
              onChange={(e) =>
                setFormData({ ...formData, businessName: e.target.value })
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Email Address *
            </label>
            <Input
              type="email"
              required
              placeholder="rahul@example.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Phone / WhatsApp Number *
            </label>
            <Input
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Preferred Contact Method
          </label>
          <div className="flex gap-4 text-xs font-medium text-slate-700">
            {["whatsapp", "email", "phone"].map((method) => (
              <label
                key={method}
                className="flex items-center gap-1.5 cursor-pointer capitalize"
              >
                <input
                  type="radio"
                  name="preferredContactMethod"
                  value={method}
                  checked={formData.preferredContactMethod === method}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      preferredContactMethod: e.target.value,
                    })
                  }
                  className="text-[#0C34C5] focus:ring-[#0C34C5]"
                />
                <span>{method}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Step 2: About the Project */}
      <div className="space-y-4">
        <div className="border-b border-slate-100 pb-2">
          <span className="text-xs font-bold text-[#0C34C5] uppercase tracking-wider">
            Step 2
          </span>
          <h4 className="text-lg font-bold text-slate-900">Project Requirements</h4>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Industry / Business Type *
          </label>
          <Select
            value={formData.businessType}
            onChange={(e) =>
              setFormData({ ...formData, businessType: e.target.value })
            }
          >
            <option value="restaurant">Restaurant / Café / Bar</option>
            <option value="hotel">Hotel / Resort / Homestay</option>
            <option value="bakery">Bakery / Confectionery</option>
            <option value="retail">Retail Store / E-commerce</option>
            <option value="manufacturing">Small Manufacturer</option>
            <option value="healthcare">Clinic / Healthcare</option>
            <option value="services">Professional Services / Agency</option>
            <option value="startup">Tech Startup</option>
            <option value="other">Other Business Type</option>
          </Select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            What do you need? (Select all that apply) *
          </label>
          <div className="flex flex-wrap gap-2">
            {serviceOptions.map((svc) => {
              const selected = formData.servicesNeeded.includes(svc);
              return (
                <button
                  type="button"
                  key={svc}
                  onClick={() => toggleService(svc)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    selected
                      ? "bg-[#0C34C5] text-white border-[#0C34C5] shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {selected ? "✓ " : "+ "}
                  {svc}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            What manual process needs solving? *
          </label>
          <Textarea
            required
            placeholder="e.g. We spend 3 hours daily writing delivery orders by hand and fielding phone bookings..."
            value={formData.problemDescription}
            onChange={(e) =>
              setFormData({ ...formData, problemDescription: e.target.value })
            }
          />
        </div>
      </div>

      {/* Step 3: Additional Information */}
      <div className="space-y-4">
        <div className="border-b border-slate-100 pb-2">
          <span className="text-xs font-bold text-[#0C34C5] uppercase tracking-wider">
            Step 3
          </span>
          <h4 className="text-lg font-bold text-slate-900">Optional Details</h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Current Website / Social Profile (Optional)
            </label>
            <Input
              type="url"
              placeholder="https://yourbusiness.com"
              value={formData.websiteUrl}
              onChange={(e) =>
                setFormData({ ...formData, websiteUrl: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Budget Range (Optional)
            </label>
            <Select
              value={formData.budgetRange}
              onChange={(e) =>
                setFormData({ ...formData, budgetRange: e.target.value })
              }
            >
              <option value="">Select an investment tier...</option>
              <option value="tier_1">Starter Package (Under ₹50,000 / $600)</option>
              <option value="tier_2">Standard Solution (₹50k–₹1.5L / $600–$1,800)</option>
              <option value="tier_3">Custom Full-Stack (₹1.5L–₹3L / $1,800–$3,500)</option>
              <option value="tier_enterprise">Custom Enterprise Workflow</option>
            </Select>
          </div>
        </div>
      </div>

      {/* Error Alert */}
      {status === "error" && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={status === "submitting"}
        size="lg"
        className="w-full"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            Sending Project Inquiry...
          </>
        ) : (
          <>
            Let&apos;s Discuss Your Project <ArrowRight className="w-4 h-4 ml-1.5" />
          </>
        )}
      </Button>

      <p className="text-[11px] text-center text-slate-400">
        We respect your privacy. No spam. You will speak directly with an INNORATECH engineer.
      </p>
    </form>
  );
}
