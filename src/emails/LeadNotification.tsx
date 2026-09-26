import * as React from "react";

interface LeadNotificationProps {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: string;
  serviceInterest: string;
  problemDescription: string;
  budgetRange?: string;
  preferredContactMethod?: string;
}

export function LeadNotification({
  name,
  businessName,
  email,
  phone,
  businessType,
  serviceInterest,
  problemDescription,
  budgetRange,
  preferredContactMethod,
}: LeadNotificationProps) {
  const timestamp = new Date().toUTCString();

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
        <span
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "#0C34C5",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
          }}
        >
          Internal Lead Notification
        </span>
        <h2
          style={{
            margin: "6px 0 0 0",
            fontSize: "20px",
            color: "#0f172a",
          }}
        >
          New Project Enquiry — {businessName}
        </h2>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td
                style={{
                  padding: "6px 0",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#64748b",
                  width: "140px",
                }}
              >
                Prospect Name:
              </td>
              <td style={{ padding: "6px 0", fontSize: "14px", color: "#0f172a" }}>
                {name}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "6px 0",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#64748b",
                }}
              >
                Business:
              </td>
              <td style={{ padding: "6px 0", fontSize: "14px", color: "#0f172a" }}>
                {businessName}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "6px 0",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#64748b",
                }}
              >
                Email:
              </td>
              <td style={{ padding: "6px 0", fontSize: "14px", color: "#0f172a" }}>
                <a href={`mailto:${email}`} style={{ color: "#0C34C5" }}>
                  {email}
                </a>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "6px 0",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#64748b",
                }}
              >
                Phone / WhatsApp:
              </td>
              <td style={{ padding: "6px 0", fontSize: "14px", color: "#0f172a" }}>
                {phone}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "6px 0",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#64748b",
                }}
              >
                Business Type:
              </td>
              <td style={{ padding: "6px 0", fontSize: "14px", color: "#0f172a" }}>
                {businessType}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  padding: "6px 0",
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#64748b",
                }}
              >
                Service Interest:
              </td>
              <td style={{ padding: "6px 0", fontSize: "14px", color: "#0f172a" }}>
                {serviceInterest}
              </td>
            </tr>
            {preferredContactMethod && (
              <tr>
                <td
                  style={{
                    padding: "6px 0",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#64748b",
                  }}
                >
                  Preferred Channel:
                </td>
                <td style={{ padding: "6px 0", fontSize: "14px", color: "#0f172a" }}>
                  {preferredContactMethod}
                </td>
              </tr>
            )}
            {budgetRange && (
              <tr>
                <td
                  style={{
                    padding: "6px 0",
                    fontSize: "14px",
                    fontWeight: "bold",
                    color: "#64748b",
                  }}
                >
                  Budget Range:
                </td>
                <td style={{ padding: "6px 0", fontSize: "14px", color: "#0f172a" }}>
                  {budgetRange}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div
        style={{
          backgroundColor: "#f8fafc",
          padding: "16px",
          borderRadius: "8px",
          border: "1px solid #e2e8f0",
          marginBottom: "20px",
        }}
      >
        <span
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "#64748b",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "8px",
          }}
        >
          Problem Description
        </span>
        <p
          style={{
            margin: "0",
            fontSize: "14px",
            color: "#334155",
            whiteSpace: "pre-wrap",
          }}
        >
          {problemDescription}
        </p>
      </div>

      <div
        style={{
          borderTop: "1px solid #f1f5f9",
          paddingTop: "12px",
          fontSize: "12px",
          color: "#94a3b8",
        }}
      >
        Received: {timestamp} via INNORATECH Lead Capture Engine
      </div>
    </div>
  );
}
