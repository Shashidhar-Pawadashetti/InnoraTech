export interface ProcessStepItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  output: string;
}

export const processSteps: ProcessStepItem[] = [
  {
    number: "01",
    title: "Discover",
    tagline: "Understand the business and current workflow.",
    description:
      "We interview your team to uncover where manual friction, paper slips, or repetitive message threads are slowing operations down.",
    output: "Operational friction map & bottleneck audit.",
  },
  {
    number: "02",
    title: "Define",
    tagline: "Define requirements, architecture, and scope.",
    description:
      "We produce a concrete specification document outlining system features, integration endpoints, and timeline milestones before coding.",
    output: "Requirements specification & system milestone roadmap.",
  },
  {
    number: "03",
    title: "Design",
    tagline: "Create user experience and workflow structure.",
    description:
      "We map out user interfaces and data journeys to ensure the system is intuitive for your customers and straightforward for your staff.",
    output: "Interactive user flows & responsive interface layouts.",
  },
  {
    number: "04",
    title: "Build",
    tagline: "Develop, integrate, and automate the solution.",
    description:
      "We build your web application, configure databases, connect payment and messaging APIs, and write serverless automation functions.",
    output: "Production-ready codebase & connected integrations.",
  },
  {
    number: "05",
    title: "Test",
    tagline: "Validate functionality, edge cases, and reliability.",
    description:
      "We conduct cross-device testing, payment sandbox simulations, and staff scenario walk-throughs to verify system stability.",
    output: "QA certification & zero-defect verification report.",
  },
  {
    number: "06",
    title: "Launch",
    tagline: "Deploy system and train staff on usage.",
    description:
      "We deploy to global edge infrastructure, link your custom domain with SSL, and conduct hands-on staff onboarding.",
    output: "Live production system & operational handover.",
  },
  {
    number: "07",
    title: "Support",
    tagline: "Maintain, monitor, and continuously improve.",
    description:
      "We provide ongoing uptime monitoring, security patching, and iterative feature enhancements as your operational volume grows.",
    output: "Proactive maintenance & continuous technical support.",
  },
];
