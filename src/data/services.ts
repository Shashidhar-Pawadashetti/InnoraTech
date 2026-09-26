export interface Service {
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  capabilities: string[];
  suitableFor: string[];
}

export type ServiceItem = Service;

export const services: Service[] = [
  {
    slug: "business-websites",
    number: "01",
    title: "Business Websites",
    shortDescription:
      "Modern websites designed around business goals and customer journeys.",
    description:
      "We build responsive business websites that establish a professional digital presence and create clear paths toward enquiries, bookings, or orders.",
    capabilities: [
      "Responsive design",
      "Business pages",
      "Landing pages",
      "Enquiry forms",
      "CMS where required",
      "Analytics",
      "SEO fundamentals",
      "Deployment",
    ],
    suitableFor: [
      "Restaurants",
      "Hotels",
      "Bakeries",
      "Retail businesses",
      "Professional services",
    ],
  },

  {
    slug: "web-applications",
    number: "02",
    title: "Web Applications",
    shortDescription:
      "Booking systems, ordering platforms, dashboards, portals, and internal applications.",
    description:
      "We build business web applications around specific workflows that need more than a standard website.",
    capabilities: [
      "Booking systems",
      "Ordering systems",
      "Dashboards",
      "CRM systems",
      "Internal tools",
      "Customer portals",
      "Authentication",
      "Business workflows",
    ],
    suitableFor: [
      "Restaurants",
      "Hotels",
      "Retail",
      "Manufacturing",
      "Professional services",
    ],
  },

  {
    slug: "business-automation",
    number: "03",
    title: "Business Automation",
    shortDescription:
      "Automate repetitive workflows, notifications, approvals, and business processes.",
    description:
      "We identify repetitive manual work and replace unnecessary steps with connected digital workflows.",
    capabilities: [
      "Workflow automation",
      "Notifications",
      "Approvals",
      "Forms",
      "Lead workflows",
      "Order workflows",
      "Internal process automation",
    ],
    suitableFor: [
      "Growing businesses",
      "Operations teams",
      "Restaurants",
      "Hotels",
      "Retail businesses",
    ],
  },

  {
    slug: "api-integrations",
    number: "04",
    title: "API & Integrations",
    shortDescription:
      "Connect payments, communication tools, business systems, and third-party APIs.",
    description:
      "We connect the systems your business already uses so information can move between them without repeated manual entry.",
    capabilities: [
      "Payment integrations",
      "Email integrations",
      "WhatsApp integrations",
      "CRM integrations",
      "PMS integrations",
      "POS integrations",
      "Third-party APIs",
    ],
    suitableFor: [
      "Hotels",
      "Restaurants",
      "E-commerce businesses",
      "SaaS companies",
      "Businesses with multiple systems",
    ],
  },

  {
    slug: "deployment-maintenance",
    number: "05",
    title: "Deployment & Maintenance",
    shortDescription:
      "Deploy, monitor, maintain, and improve your digital systems after launch.",
    description:
      "We provide the operational support required to keep business websites and applications running after launch.",
    capabilities: [
      "Cloud deployment",
      "Domain and SSL",
      "Monitoring",
      "Backups",
      "Security updates",
      "Bug fixes",
      "Minor improvements",
      "Technical support",
    ],
    suitableFor: [
      "Existing INNORATECH clients",
      "Businesses with existing websites",
      "Businesses with custom web applications",
    ],
  },
];
