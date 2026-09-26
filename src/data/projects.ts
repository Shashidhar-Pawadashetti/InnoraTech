export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  isDemo: boolean;
  tagline: string;
  description: string;
  problem: string;
  existingProcess: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  results: { metric: string; label: string }[];
}

export const projects: ProjectItem[] = [
  {
    id: "restaurant-ordering",
    slug: "restaurant-ordering",
    title: "Restaurant Digital Ordering System",
    category: "Hospitality & Dining",
    isDemo: true,
    tagline: "Direct commission-free table ordering & kitchen display flow.",
    description:
      "A complete hospitality platform replacing paper tickets with dynamic QR menus, instant UPI payments, and synchronized kitchen prep displays.",
    problem:
      "During peak meal hours, waitstaff waste 15 minutes per table writing down orders and walking slips to the kitchen. Phone takeaway orders cause repeated miscommunications.",
    existingProcess:
      "Customers wait for waiters $\\to$ orders recorded on paper slips $\\to$ waiter hand-delivers slip to kitchen $\\to$ kitchen re-reads handwritten notes $\\to$ cashier manually tallies bill.",
    solution:
      "A direct web application where patrons scan a table QR code, browse live categorized menus, pay via UPI, and tickets auto-route instantly to the kitchen display.",
    keyFeatures: [
      "Contactless QR table ordering with zero app download required",
      "Live order status dashboard for kitchen staff",
      "Instant automated receipts dispatched via WhatsApp",
      "Direct settlement with zero 3rd-party aggregator commissions",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Neon PostgreSQL", "Resend"],
    results: [
      { metric: "100%", label: "Direct Margin Kept" },
      { metric: "4.5 min", label: "Prep Time Saved / Table" },
      { metric: "0", label: "Paper Slips Required" },
    ],
  },
  {
    id: "hotel-booking",
    slug: "hotel-booking",
    title: "Hotel Direct Booking Platform",
    category: "Hospitality & Lodging",
    isDemo: true,
    tagline: "Commission-free reservation engine with live calendar locks.",
    description:
      "Direct room booking portal designed to capture guests looking to book directly, bypassing 18-25% OTA commissions.",
    problem:
      "The property relies heavily on phone bookings and WhatsApp messages. Staff frequently encounter double-booking errors and fail to secure advance deposits.",
    existingProcess:
      "Guest calls hotel $\\to$ receptionist checks physical paper diary $\\to$ sends bank details over WhatsApp $\\to$ waits for screenshot $\\to$ manually marks room reserved.",
    solution:
      "A fast, modern direct booking website with real-time room availability, immediate credit card/UPI deposit settlement, and automated WhatsApp confirmation messages.",
    keyFeatures: [
      "Dynamic room availability calendar with multi-tier pricing",
      "Automated WhatsApp message with directions & check-in guidelines",
      "Zero commission direct client reservations",
      "Manager overview dashboard for arrivals, departures, and cleaning status",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Drizzle ORM"],
    results: [
      { metric: "20%", label: "Average Commission Saved" },
      { metric: "100%", label: "Deposit Pre-Payment Rate" },
      { metric: "< 60s", label: "Instant Reservation Confirmation" },
    ],
  },
  {
    id: "bakery-automation",
    slug: "bakery-automation",
    title: "Bakery Custom Order & Production Workflow",
    category: "Retail & Bakery",
    isDemo: true,
    tagline: "Custom cake specification builder and automatic kitchen run-sheets.",
    description:
      "An automated ordering system handling custom design choices, scheduled delivery slots, and daily kitchen preparation lists.",
    problem:
      "Custom cake orders taken over chat get fragmented. Bakers miss specific dietary requests, flavor choices, or customized message inscriptions.",
    existingProcess:
      "Customer messages on Instagram $\\to$ chats back and forth for pricing $\\to$ payment confirmation lost in chat $\\to$ chef misses custom design details.",
    solution:
      "A guided cake configuration portal that calculates exact pricing, locks pickup slots, and compiles a daily production run-sheet for pastry chefs.",
    keyFeatures: [
      "Visual multi-attribute cake customizer (flavor, tier, message)",
      "Daily printable production run-sheet for kitchen team",
      "Automated slot availability management to prevent kitchen overload",
      "Automated customer pickup reminders",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel Serverless"],
    results: [
      { metric: "100%", label: "Custom Note Accuracy" },
      { metric: "3 hrs/day", label: "Admin Chat Time Saved" },
      { metric: "Zero", label: "Overbooked Delivery Slots" },
    ],
  },
];
