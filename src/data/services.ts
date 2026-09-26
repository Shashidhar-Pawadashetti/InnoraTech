export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
}

export const services: ServiceItem[] = [
  {
    id: "business-websites",
    number: "01",
    title: "Business Websites",
    tagline: "High-converting, performance-optimized websites built around clear commercial goals.",
    description:
      "Modern websites designed to position your business as a market leader, explain your value proposition in seconds, and channel qualified visitors into inquiries.",
    deliverables: [
      "Custom responsive design (mobile, tablet, desktop)",
      "Technical SEO hierarchy and rich metadata",
      "Sub-second load times with modern image optimization",
      "Integrated lead capture and analytics tracking",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel Edge"],
  },
  {
    id: "web-applications",
    number: "02",
    title: "Web Applications",
    tagline: "Custom portals, booking engines, and internal operations tools.",
    description:
      "Full-stack web applications tailored to your business workflow, replacing off-the-shelf software limitations with exact operational efficiency.",
    deliverables: [
      "Secure authentication and role-based permissions",
      "Real-time dashboards and status monitoring",
      "Transactional workflows and database architecture",
      "Responsive cross-device interface for desktop and mobile",
    ],
    technologies: ["React Server Components", "PostgreSQL", "Drizzle ORM", "REST/Webhooks"],
  },
  {
    id: "business-automation",
    number: "03",
    title: "Business Automation",
    tagline: "Digital workflows that reduce repetitive manual work.",
    description:
      "Automated event pipelines that eliminate manual human data entry, synchronizing customer actions with your internal operations seamlessly.",
    deliverables: [
      "Automated WhatsApp & Email customer notifications",
      "Two-way invoice and payment reconciliation",
      "Order routing and fulfillment triggers",
      "Centralized event logging and error handling",
    ],
    technologies: ["Resend", "WhatsApp Cloud API", "Webhooks", "Serverless Crons"],
  },
  {
    id: "integrations",
    number: "04",
    title: "API & Integrations",
    tagline: "Payments, messaging, CRM, PMS, and third-party software connections.",
    description:
      "We connect the tools your business already uses—eliminating silos and enabling clean data communication between external platforms.",
    deliverables: [
      "Payment gateway integration (Stripe, UPI, Razorpay)",
      "PMS / POS software integration",
      "Third-party CRM and marketing sync",
      "Custom webhook listeners and secure payload verification",
    ],
    technologies: ["Stripe", "Razorpay", "Twilio", "Google Cloud"],
  },
  {
    id: "maintenance",
    number: "05",
    title: "Deployment & Maintenance",
    tagline: "Serverless speed, continuous uptime monitoring, and proactive support.",
    description:
      "We ensure your systems stay fast, secure, and reliable after launch, providing ongoing maintenance and technical enhancements as your business grows.",
    deliverables: [
      "Zero-config serverless global deployment on Vercel",
      "Uptime monitoring and error alert systems",
      "Security patches, dependency updates, and SSL renewal",
      "Dedicated technical support and ongoing iteration",
    ],
    technologies: ["Vercel Edge", "Cloudflare", "GitHub Actions", "Sentry"],
  },
];
