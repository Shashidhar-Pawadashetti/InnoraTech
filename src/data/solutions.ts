export interface Solution {
  slug: string;
  eyebrow: string;
  title: string;
  shortDescription: string;
  description: string;
  problems: string[];
  capabilities: string[];
  workflow: {
    title: string;
    description: string;
  }[];
  cta: string;
  relatedServices?: string[];
  relatedProjectSlug?: string;
}

export type SolutionItem = Solution;

export const solutions: Solution[] = [
  {
    slug: "restaurants",
    eyebrow: "RESTAURANTS",
    title: "Digital systems for modern restaurants.",
    shortDescription:
      "Replace paper-based ordering and fragmented ordering channels with connected digital ordering workflows.",
    description:
      "Innora helps restaurants build direct digital ordering channels, QR table ordering, payment workflows, and restaurant-side order management.",
    problems: [
      "Food orders received through phone calls",
      "Dine-in orders handled using paper and pen",
      "Disconnected ordering channels",
      "Manual communication between front-of-house and kitchen",
    ],
    capabilities: [
      "Restaurant website",
      "Digital menu",
      "Online ordering",
      "QR table ordering",
      "Payment integration",
      "Order management",
      "Kitchen workflow",
      "Customer notifications",
    ],
    workflow: [
      {
        title: "Customer",
        description: "Customer opens the restaurant website or scans a table QR code.",
      },
      {
        title: "Digital Menu",
        description: "Customer browses the current menu and selects items.",
      },
      {
        title: "Order",
        description: "Order is submitted with pickup, delivery, or table information.",
      },
      {
        title: "Restaurant",
        description: "Restaurant staff receive and manage the order digitally.",
      },
      {
        title: "Kitchen",
        description: "Kitchen receives the order and updates its status.",
      },
    ],
    cta: "Discuss Your Restaurant Workflow",
    relatedServices: ["business-websites", "web-applications", "business-automation"],
    relatedProjectSlug: "restaurant-digital-ordering",
  },

  {
    slug: "hotels",
    eyebrow: "HOTELS",
    title: "Direct booking and reservation systems for hotels.",
    shortDescription:
      "Move room booking from fragmented manual conversations toward a structured digital booking workflow.",
    description:
      "Innora helps hotels build direct booking experiences with room availability, reservations, payments, and hotel-side booking management.",
    problems: [
      "Room bookings handled through phone calls",
      "Reservations managed through WhatsApp",
      "Dependence on external accommodation platforms",
      "Manual reservation tracking",
    ],
    capabilities: [
      "Hotel website",
      "Room catalogue",
      "Availability search",
      "Direct booking",
      "Payment integration",
      "Reservation dashboard",
      "Guest information",
      "Booking notifications",
    ],
    workflow: [
      {
        title: "Guest",
        description: "Guest visits the hotel's website and searches for available rooms.",
      },
      {
        title: "Availability",
        description: "Available room options are presented based on the selected dates.",
      },
      {
        title: "Booking",
        description: "Guest enters their details and confirms the reservation.",
      },
      {
        title: "Payment",
        description: "Payment is processed through the configured payment provider.",
      },
      {
        title: "Hotel",
        description: "The reservation becomes available in the hotel dashboard.",
      },
    ],
    cta: "Discuss Your Hotel Workflow",
    relatedServices: ["business-websites", "web-applications", "api-integrations"],
    relatedProjectSlug: "hotel-direct-booking",
  },

  {
    slug: "bakeries",
    eyebrow: "BAKERIES",
    title: "Digital ordering and automation for bakeries.",
    shortDescription:
      "Centralize product orders, custom cake requirements, payments, and production workflows.",
    description:
      "Innora helps bakeries move custom ordering and routine sales workflows from scattered conversations into structured digital systems.",
    problems: [
      "Custom cake requirements handled through chat",
      "Manual order tracking",
      "Payment details spread across different channels",
      "Production deadlines tracked manually",
    ],
    capabilities: [
      "Bakery website",
      "Product catalogue",
      "E-commerce",
      "Custom cake ordering",
      "Payment integration",
      "Order management",
      "Production workflow",
      "Customer notifications",
    ],
    workflow: [
      {
        title: "Customer",
        description: "Customer browses products or submits a custom cake requirement.",
      },
      {
        title: "Order",
        description: "Requirements and order information are captured in a structured format.",
      },
      {
        title: "Payment",
        description: "Payment or deposit is recorded through the configured workflow.",
      },
      {
        title: "Production",
        description: "The order enters the bakery's production workflow.",
      },
      {
        title: "Completion",
        description: "Customer receives the relevant order status or completion information.",
      },
    ],
    cta: "Discuss Your Bakery Workflow",
    relatedServices: ["business-websites", "web-applications", "business-automation"],
    relatedProjectSlug: "bakery-order-automation",
  },

  {
    slug: "business-automation",
    eyebrow: "CUSTOM AUTOMATION",
    title: "Automate the manual work your business repeats every day.",
    shortDescription:
      "Build dashboards, internal tools, workflows, and integrations around your existing business process.",
    description:
      "When a business has a process that does not fit a standard package, Innora can analyze the workflow and build a custom digital solution.",
    problems: [
      "Repetitive manual data entry",
      "Information spread across spreadsheets and messages",
      "Disconnected business systems",
      "Manual notifications and follow-ups",
    ],
    capabilities: [
      "Business dashboards",
      "CRM systems",
      "Internal web applications",
      "Workflow automation",
      "Notifications",
      "API integrations",
      "Approval workflows",
      "Custom portals",
    ],
    workflow: [
      {
        title: "Discover",
        description: "We map the current business process.",
      },
      {
        title: "Define",
        description: "We identify what should be automated and what should remain manual.",
      },
      {
        title: "Design",
        description: "We design the digital workflow and required system components.",
      },
      {
        title: "Build",
        description: "We implement the application, automation, and integrations.",
      },
      {
        title: "Improve",
        description: "The workflow can evolve as the business grows.",
      },
    ],
    cta: "Discuss Your Business Process",
    relatedServices: ["web-applications", "business-automation", "api-integrations"],
    relatedProjectSlug: "restaurant-digital-ordering",
  },
];
