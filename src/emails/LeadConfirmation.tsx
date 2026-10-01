import * as React from "react";

interface LeadConfirmationProps {
  name: string;
  businessName: string;
  serviceInterest: string;
}

export function LeadConfirmation({
  name,
  businessName,
  serviceInterest,
}: LeadConfirmationProps) {
  return (
    <div
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        lineHeight: "1.6",
        color: "#1e293b",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "24px",
        border: "1px solid #e2e8f0",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          borderBottom: "2px solid #0C34C5",
          paddingBottom: "16px",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            margin: "0",
            fontSize: "22px",
            color: "#0f172a",
          }}
        >
          Thank you for contacting Innora.
        </h2>
      </div>

      <p style={{ fontSize: "15px", color: "#334155" }}>
        Hello {name},
      </p>

      <p style={{ fontSize: "15px", color: "#334155" }}>
        We received your project information for <strong>{businessName}</strong> regarding{" "}
        <strong>{serviceInterest}</strong> and will review it before getting back to you.
      </p>

      <div
        style={{
          backgroundColor: "#f8fafc",
          padding: "16px",
          borderRadius: "8px",
          border: "1px solid #e2e8f0",
          margin: "20px 0",
        }}
      >
        <p style={{ margin: "0", fontSize: "13px", color: "#64748b" }}>
          Our engineering team analyzes each submission directly to see how digital workflows,
          custom web applications, or business automations can solve your specific operational bottlenecks.
        </p>
      </div>

      <p style={{ fontSize: "14px", color: "#475569" }}>
        If you have any immediate questions or supplementary details to share, feel free to reply directly to this email.
      </p>

      <div
        style={{
          borderTop: "1px solid #f1f5f9",
          paddingTop: "16px",
          marginTop: "24px",
          fontSize: "13px",
          color: "#64748b",
        }}
      >
        <p style={{ margin: "0 0 4px 0", fontWeight: "bold", color: "#0f172a" }}>
          Innora Team
        </p>
        <p style={{ margin: "0", fontSize: "12px", color: "#94a3b8" }}>
          Turn Manual Work Into Digital Solutions.
        </p>
      </div>
    </div>
  );
}
