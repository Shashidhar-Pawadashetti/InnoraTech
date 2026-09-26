export interface SolutionItem {
  id: string;
  slug: string;
  badge: string;
  title: string;
  tagline: string;
  problemSummary: string;
  solutionSummary: string;
  features: string[];
  workflowSteps: { title: string; actor: string; description: string }[];
  impactMetrics: { label: string; value: string }[];
}

export const solutions: SolutionItem[] = [
  {
    id: "restaurants",
    slug: "restaurants",
    badge: "Hospitality & Dining",
    title: "Digital Systems for Modern Restaurants",
    tagline: "Replace paper-based ordering and fragmented phone calls with connected digital workflows.",
    problemSummary:
      "Orders handled through phone calls, paper tickets, and high-commission 3rd-party aggregators result in kitchen delays, miscommunication, and zero customer data ownership.",
    solutionSummary:
      "A commission-free direct ordering portal with QR table ordering, digital menus, real-time kitchen displays, instant payments, and automated WhatsApp receipts.",
    features: [
      "Commission-free direct online delivery & takeaway portal",
      "QR code contactless table menus with instant checkout",
      "Kitchen Display System (KDS) for real-time prep tracking",
      "Integrated UPI, cards, and automated WhatsApp receipts",
      "Customer re-order tracking and customer database ownership",
    ],
    workflowSteps: [
      { title: "QR Scan / Link", actor: "Customer", description: "Opens contactless live digital menu on phone" },
      { title: "Order & Payment", actor: "Customer", description: "Selects items, customizes notes, and pays via UPI/Card" },
      { title: "Order Routing", actor: "INNORATECH Engine", description: "Instant notification dispatched to kitchen display" },
      { title: "Preparation & Fulfillment", actor: "Kitchen Staff", description: "Ticket prepped with zero manual phone entry" },
    ],
    impactMetrics: [
      { label: "Commission Saved", value: "100%" },
      { label: "Order Error Reduction", value: "98%" },
      { label: "Staff Time Saved", value: "2.5 hrs/day" },
    ],
  },
  {
    id: "hotels",
    slug: "hotels",
    badge: "Hospitality & Lodging",
    title: "Direct Booking & Guest Automation for Hotels",
    tagline: "Eliminate OTA commission leaks and manual reservation tracking across WhatsApp.",
    problemSummary:
      "Reservations managed through scattered phone calls, WhatsApp messages, and external OTAs lead to double-bookings, delayed check-ins, and high commission payouts.",
    solutionSummary:
      "A branded direct booking engine with live room calendars, secure deposit processing, automated guest pre-arrival messaging, and PMS integrations.",
    features: [
      "Zero-commission direct room reservation engine",
      "Real-time room availability calendar with rate tiers",
      "Automated WhatsApp & SMS check-in details and directions",
      "Secure deposit collection and instant invoice dispatch",
      "Integration-ready for PMS and accounting workflows",
    ],
    workflowSteps: [
      { title: "Room Discovery", actor: "Guest", description: "Selects dates and room category on hotel website" },
      { title: "Guaranteed Booking", actor: "Guest", description: "Pays deposit securely with immediate room block" },
      { title: "Automated Welcome", actor: "INNORATECH Engine", description: "Dispatches WhatsApp check-in guide and location" },
      { title: "Front Desk Sync", actor: "Hotel Manager", description: "Reservation appears on centralized calendar" },
    ],
    impactMetrics: [
      { label: "Direct Bookings", value: "+45%" },
      { label: "OTA Commission Leakage", value: "-60%" },
      { label: "Check-in Friction", value: "Instant" },
    ],
  },
  {
    id: "bakeries",
    slug: "bakeries",
    badge: "Retail & Bakeries",
    title: "Custom Cake & Order Automation for Bakeries",
    tagline: "Eliminate lost cake specifications and disorganized chat orders.",
    problemSummary:
      "Custom cake specifications, flavor choices, delivery dates, and advance payments get buried inside WhatsApp chats, leading to production mistakes and missed deadlines.",
    solutionSummary:
      "An intuitive custom cake builder with slot-based pickup scheduling, automatic production run-sheets, and automated order status notifications.",
    features: [
      "Multi-attribute custom cake builder (flavor, weight, tier, notes)",
      "Capacity-controlled pickup and delivery slot locks",
      "Automated daily production run-sheet generation for chefs",
      "Instant payment receipts and order status tracking",
      "Customer notification alerts when order is boxed and ready",
    ],
    workflowSteps: [
      { title: "Custom Builder", actor: "Customer", description: "Selects design, weight, flavor, and pickup time" },
      { title: "Advance Payment", actor: "Customer", description: "Completes deposit to lock production slot" },
      { title: "Run-Sheet Entry", actor: "Kitchen System", description: "Item queued on chef's daily production sheet" },
      { title: "Pickup Alert", actor: "Customer", description: "Receives notification when cake is ready" },
    ],
    impactMetrics: [
      { label: "Spec Accuracy", value: "100%" },
      { label: "Prep Coordination", value: "Seamless" },
      { label: "Phone Inquiries", value: "-75%" },
    ],
  },
  {
    id: "business-automation",
    slug: "business-automation",
    badge: "Operations & SMBs",
    title: "Custom Process Automation & Internal Tools",
    tagline: "Automate repetitive data re-entry and synchronize disconnected business tools.",
    problemSummary:
      "Staff waste hours every day copying information across spreadsheets, email threads, billing tools, and messaging channels, stalling business growth.",
    solutionSummary:
      "Tailored web applications, operations dashboards, lightweight CRMs, and two-way API integrations that eliminate repetitive manual data entry.",
    features: [
      "Custom internal operations dashboards & portals",
      "Automated two-way data sync between software tools",
      "Lightweight customer relationship management (CRM)",
      "Automated payment and invoice reconciliation",
      "Notification bots and automated reminder pipelines",
    ],
    workflowSteps: [
      { title: "Data Event", actor: "External Tool", description: "Customer signs contract or makes payment" },
      { title: "Webhook Trigger", actor: "INNORATECH Flow", description: "Payload validated and mapped across systems" },
      { title: "Database Record", actor: "Central DB", description: "Operations dashboard updated in real time" },
      { title: "Team Notification", actor: "Operations", description: "Alert sent to team with zero manual copying" },
    ],
    impactMetrics: [
      { label: "Hours Reclaimed", value: "15+ hrs/wk" },
      { label: "Data Redundancy", value: "0%" },
      { label: "Process Velocity", value: "5x Faster" },
    ],
  },
];
