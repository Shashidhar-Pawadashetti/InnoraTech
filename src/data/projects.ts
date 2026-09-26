export interface Project {
  slug: string;
  category: string;
  label: string;
  title: string;
  description: string;
  status: "demo" | "client";
  services: string[];
  problem: string;
  solution: string;
  workflow: string[];
  outcome?: string;
  relatedSolutionSlug?: string;
  keyCapabilities?: string[];
  demonstrates?: string[];
}

export type ProjectItem = Project;

export const projects: Project[] = [
  {
    slug: "restaurant-digital-ordering",
    category: "Restaurants",
    label: "INNORATECH DEMO",
    title: "Restaurant Digital Ordering",
    description:
      "A demonstration system for direct online ordering, QR table ordering, and restaurant-side order management.",
    status: "demo",
    services: [
      "Business Websites",
      "Web Applications",
      "Business Automation",
    ],
    problem:
      "Restaurant orders may arrive through phone calls while dine-in orders are handled manually using paper and pen.",
    solution:
      "A connected digital ordering workflow that supports online ordering, QR table ordering, and restaurant-side order management.",
    workflow: [
      "Customer opens website or scans table QR",
      "Customer browses digital menu",
      "Customer places order",
      "Restaurant receives order",
      "Kitchen processes order",
      "Order status is updated",
    ],
    relatedSolutionSlug: "restaurants",
    keyCapabilities: [
      "Mobile-friendly digital menu browsing",
      "Contactless QR table ordering with table tagging",
      "Real-time kitchen order dispatch display",
      "UPI & card payment integration",
      "Automated order status notifications",
    ],
    demonstrates: [
      "End-to-end direct ordering without aggregator commission fees",
      "Elimination of manual pen-and-paper order recording errors",
      "Real-time coordination between dining floor and kitchen staff",
      "Instant order tracking and customer confirmation",
    ],
  },

  {
    slug: "hotel-direct-booking",
    category: "Hotels",
    label: "INNORATECH DEMO",
    title: "Hotel Direct Booking",
    description:
      "A demonstration system for direct room booking, payment, and reservation management.",
    status: "demo",
    services: [
      "Business Websites",
      "Web Applications",
      "API & Integrations",
    ],
    problem:
      "Room bookings may be handled through phone calls, WhatsApp, and external accommodation platforms.",
    solution:
      "A direct booking experience with room availability, reservation, payment, and hotel-side booking management.",
    workflow: [
      "Guest visits hotel website",
      "Guest checks availability",
      "Guest selects room",
      "Guest enters details",
      "Guest completes payment",
      "Hotel receives reservation",
    ],
    relatedSolutionSlug: "hotels",
    keyCapabilities: [
      "Interactive calendar with live room rate tiers",
      "Guaranteed room reservation with secure payment/deposit",
      "Automated WhatsApp & email check-in instructions",
      "Hotel dashboard for arrivals, departures, and availability",
      "Exportable booking records for external PMS integration",
    ],
    demonstrates: [
      "Capturing guest bookings directly without high OTA commissions",
      "Zero room double-bookings through instant calendar locks",
      "Automated payment and receipt dispatch without manual tracking",
      "Centralized front-desk dashboard for room management",
    ],
  },

  {
    slug: "bakery-order-automation",
    category: "Bakeries",
    label: "INNORATECH DEMO",
    title: "Bakery Order Automation",
    description:
      "A demonstration workflow for online ordering, custom cake requirements, and production tracking.",
    status: "demo",
    services: [
      "Business Websites",
      "Web Applications",
      "Business Automation",
    ],
    problem:
      "Custom cake requirements and production information can become scattered across messages and manual records.",
    solution:
      "A structured digital ordering workflow that captures requirements and moves orders through production.",
    workflow: [
      "Customer submits requirements",
      "Order details are captured",
      "Payment/deposit is recorded",
      "Order enters production",
      "Customer receives status updates",
    ],
    relatedSolutionSlug: "bakeries",
    keyCapabilities: [
      "Guided multi-attribute cake customizer (flavor, tier, message)",
      "Daily printable production run-sheet generation",
      "Pickup and delivery slot capacity management",
      "Advance deposit recording and receipt generation",
      "Automated ready-for-pickup customer alerts",
    ],
    demonstrates: [
      "100% structured custom order capture replacing unstructured chat threads",
      "Clear production schedules eliminating forgotten deadlines",
      "Automated status notifications reducing repetitive 'Is it ready?' queries",
      "Capacity-controlled scheduling preventing kitchen overbooking",
    ],
  },
];
