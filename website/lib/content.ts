/**
 * CONTENT — the single source of truth for what Soramap sells.
 *
 * The home page, the /services page and the footer all read from here.
 * To add a product module, add ONE object to MODULES. To change pricing,
 * edit PRICING. To add a question, add to FAQS. No component edits needed.
 */

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export interface ModuleFeature {
  title: string;
  description: string;
}

export interface ProductModule {
  /** URL-safe id. Used for #anchors on /services and footer links. */
  id: string;
  /** Display number, e.g. "01" */
  number: string;
  /** Full name, e.g. "HR & Payroll" */
  name: string;
  /** Short label used in tabs */
  tabLabel: string;
  /** One-line promise, shown under the name */
  tagline: string;
  /** 2–3 sentence overview */
  summary: string;
  /** Short bullets (shown on home page + preview panel) */
  highlights: string[];
  /** Detailed features (shown in the /services accordions) */
  features: ModuleFeature[];
  /** "live" = shipping today. "coming-soon" shows a badge everywhere. */
  status: "live" | "coming-soon";
}

export interface PricingTier {
  name: string;
  price: string; // keep as string so you can write "KES 8,000" or "Custom"
  period: string; // "/month", "/year", ""
  audience: string;
  includes: string[];
  featured?: boolean;
}

/* ------------------------------------------------------------------ */
/* Core services (what the company does, beyond the ready-made modules)*/
/* DRAFT COPY: review the feature lists against what you really offer. */
/* ------------------------------------------------------------------ */

export const CORE_SERVICES: ProductModule[] = [
  {
    id: "software-development",
    status: "live",
    number: "01",
    name: "Custom Software Development",
    tabLabel: "Custom Software",
    tagline: "If you can describe it, we can build it.",
    summary:
      "We design, build and maintain any software solution your organisation needs: web platforms, mobile apps, internal tools, integrations and APIs, from first prototype to production support.",
    highlights: [
      "Web & mobile applications",
      "Internal tools & automation",
      "APIs & system integrations",
      "Ongoing maintenance & support",
    ],
    features: [
      {
        title: "Web & Mobile Applications",
        description:
          "Customer-facing products and internal platforms built to be fast, accessible and easy to extend.",
      },
      {
        title: "Business Systems & Automation",
        description:
          "Replace spreadsheets and manual approvals with systems shaped around how your teams actually work.",
      },
      {
        title: "APIs & Integrations",
        description:
          "Connect your new and existing systems (payments, accounting, HR, government portals) so data flows once.",
      },
      {
        title: "Cloud, Maintenance & Support",
        description:
          "We deploy, monitor and keep improving what we build, so launch day is the start, not the end.",
      },
    ],
  },
  {
    id: "cybersecurity",
    status: "live",
    number: "02",
    name: "Cybersecurity",
    tabLabel: "Cybersecurity",
    tagline: "Find the weaknesses before someone else does.",
    summary:
      "We test, review and harden your applications and infrastructure. As both a software builder and a security firm, we understand how systems are made and how they get broken.",
    highlights: [
      "Penetration testing",
      "Vulnerability assessments",
      "Secure code review",
      "Security audits & compliance readiness",
    ],
    features: [
      {
        title: "Penetration Testing",
        description:
          "Controlled, real-world attacks against your web apps, APIs and networks, with a clear report of what was found and how to fix it.",
      },
      {
        title: "Vulnerability Assessment",
        description:
          "Systematic scanning and review of your systems to find, rank and track weaknesses over time.",
      },
      {
        title: "Secure Code Review",
        description:
          "Our engineers read your code for the flaws scanners miss, and show your developers how to avoid them next time.",
      },
      {
        title: "Security Audits & Compliance Readiness",
        description:
          "Assess your policies and controls against frameworks and regulations such as the Data Protection Act, and build a plan to close the gaps.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Business modules (ready-made products)                              */
/* ------------------------------------------------------------------ */

export const MODULES: ProductModule[] = [
  {
    id: "hr-payroll",
    status: "live",
    number: "01",
    name: "HR & Payroll",
    tabLabel: "HR & Payroll",
    tagline: "Pay people correctly and on time.",
    summary:
      "Automate statutory compliance (KRA, NSSF, SHA) and generate seamless payslips. A complete employee database and leave management system built for local operational needs.",
    highlights: [
      "Employee database & profiles",
      "Automated payroll & statutory deductions",
      "Leave requests & approvals",
      "Payslips generated in one click",
    ],
    features: [
      {
        title: "Employee Management",
        description:
          "One record per employee: personal details, contracts, documents, job history and reporting lines, searchable in seconds.",
      },
      {
        title: "Payroll & Statutory Compliance",
        description:
          "Run payroll with PAYE, NSSF and SHA calculated automatically. Review, approve and release payslips with a full audit trail.",
      },
      {
        title: "Leave Management",
        description:
          "Staff request leave from any device, managers approve in one tap, and balances update automatically.",
      },
      {
        title: "Employee Requests",
        description:
          "A single place for staff to raise HR requests, such as letters, updates to personal details and more, with every request tracked to completion.",
      },
    ],
  },
  {
    id: "procurement",
    status: "live",
    number: "02",
    name: "Procurement",
    tabLabel: "Procurement",
    tagline: "Every purchase approved, ordered and matched.",
    summary:
      "Full-cycle B2B purchasing. Route requisitions through custom approval chains, generate Purchase Orders, and strictly match incoming Goods Receipts against original orders.",
    highlights: [
      "Requisition approval engine",
      "Purchase order generation",
      "Supplier management",
      "Goods receipt matching",
    ],
    features: [
      {
        title: "Purchase Requisitions",
        description:
          "Departments raise requests against a budget; the system routes them through the approval chain you define.",
      },
      {
        title: "Purchase Orders",
        description:
          "Convert approved requisitions into Purchase Orders and send them to suppliers without re-typing anything.",
      },
      {
        title: "Supplier Management",
        description:
          "Keep supplier details, quotations and purchase history in one place so you can compare and re-order faster.",
      },
      {
        title: "Goods Receipt Matching",
        description:
          "Match what arrives against what was ordered. Short deliveries and mismatches are flagged before anyone pays.",
      },
    ],
  },
  {
    id: "inventory",
    status: "live",
    number: "03",
    name: "Inventory",
    tabLabel: "Inventory",
    tagline: "Know what you have, where it is, and when to reorder.",
    summary:
      "Track stock across stores and locations in real time. Goods received through Procurement land in inventory automatically, and every issue out is recorded against a person, department or project.",
    highlights: [
      "Item catalogue & stock levels",
      "Multiple stores & locations",
      "Stock issue & transfer records",
      "Reorder-level alerts",
    ],
    features: [
      {
        title: "Items & Stock Levels",
        description:
          "A searchable catalogue of every item with live quantities, units of measure and valuation.",
      },
      {
        title: "Stores & Transfers",
        description:
          "Manage several stores or sites and move stock between them with a clear record of who moved what.",
      },
      {
        title: "Stock Issues",
        description:
          "Issue items to staff, departments or projects through an approved request, so nothing leaves the store unrecorded.",
      },
      {
        title: "Reorder Alerts & Stock Takes",
        description:
          "Get warned when an item drops below its reorder level and reconcile physical counts against the system.",
      },
    ],
  },
  {
    id: "imprest",
    status: "live",
    number: "04",
    name: "Imprest & Activity Advances",
    tabLabel: "Imprest",
    tagline: "Cash advances with a paper trail that closes itself.",
    summary:
      "Eliminate lost receipts and manual cash advance tracking. Empower your field operations with secure activity advances, multi-tier approvals, and automated receipt reconciliation.",
    highlights: [
      "Activity advance requests",
      "Multi-tier approvals",
      "Strict surrender workflows",
      "Project & budget code tracking",
    ],
    features: [
      {
        title: "Advance Requests",
        description:
          "Staff request an advance for an activity, with the budget, purpose and dates captured up front.",
      },
      {
        title: "Multi-tier Approvals",
        description:
          "Route each request to the right approvers based on amount, department or project.",
      },
      {
        title: "Surrender & Reconciliation",
        description:
          "Staff upload receipts and surrender the balance. Outstanding advances are visible and block new ones until cleared.",
      },
      {
        title: "Project & Budget Codes",
        description:
          "Every shilling is tagged to a project or budget line, so reporting to donors and management is instant.",
      },
    ],
  },
  {
    id: "crm",
    status: "coming-soon",
    number: "05",
    name: "CRM",
    tabLabel: "CRM",
    tagline: "Every customer relationship in one place.",
    summary:
      "Coming soon. Track leads, customers and follow-ups in one shared system, connected to the rest of your Soramap modules.",
    highlights: [
      "Lead & customer records",
      "Follow-up reminders",
      "Sales pipeline view",
    ],
    features: [
      {
        title: "Customer Records",
        description:
          "A single profile per customer with contacts, history and notes your whole team can see.",
      },
      {
        title: "Pipeline & Follow-ups",
        description:
          "See where every opportunity stands and never miss a follow-up.",
      },
    ],
  },
  {
    id: "pos",
    status: "coming-soon",
    number: "06",
    name: "Point of Sale (POS)",
    tabLabel: "POS",
    tagline: "Sell fast, and let stock update itself.",
    summary:
      "Coming soon. A point-of-sale system that connects directly to Inventory, so every sale updates your stock.",
    highlights: ["Fast checkout", "Linked to Inventory", "Daily sales reports"],
    features: [
      {
        title: "Checkout",
        description: "Quick, simple sales screens built for busy counters.",
      },
      {
        title: "Inventory Sync",
        description:
          "Every sale deducts stock automatically, so counts stay accurate.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Pricing                                                             */
/* NOTE: figures carried over from the previous site copy. Confirm     */
/* before launch, especially where Inventory sits in each tier.        */
/* ------------------------------------------------------------------ */

export const PRICING: PricingTier[] = [
  {
    name: "Starter",
    price: "KES 8,000",
    period: "/month",
    audience: "Up to 20 employees",
    includes: ["HR & Payroll", "Leave management", "Payslip generation"],
  },
  {
    name: "Growth",
    price: "KES 20,000",
    period: "/month",
    audience: "Up to 50 employees",
    includes: [
      "HR & Payroll",
      "Imprest & Activity Advances",
      "Budget code tracking",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "KES 50,000",
    period: "/month",
    audience: "Up to 150 employees",
    includes: [
      "All modules",
      "Procurement",
      "Inventory",
      "Imprest",
      "HR & Payroll",
    ],
  },
  {
    name: "Annual Licence",
    price: "KES 400k – 750k",
    period: "/year",
    audience: "Mid-sized organisations & NGOs",
    includes: [
      "Unlimited users",
      "Isolated database environment",
      "Custom onboarding & reporting chains",
    ],
  },
];

/** Shown under the pricing cards. */
export const PRICING_NOTE =
  "Prices cover the ready-made modules. Custom software development and cybersecurity engagements are quoted per project. CRM and POS pricing will be announced at launch.";

/* ------------------------------------------------------------------ */
/* Why Soramap (value props, mirrors Enerpize's 4-up benefits grid)    */
/* ------------------------------------------------------------------ */

export const VALUE_PROPS = [
  {
    title: "Security built in, not bolted on",
    text: "We are a cybersecurity firm as well as a software builder, so everything we ship is designed and tested with security in mind.",
  },
  {
    title: "One connected system",
    text: "Goods received flow into stock. Approved requisitions become orders. Payroll and advances share the same employee record.",
  },
  {
    title: "Built for local compliance",
    text: "KRA, NSSF and SHA handled out of the box, with currency and workflows that match how you actually operate.",
  },
  {
    title: "Predictable flat-rate pricing",
    text: "Pay a fixed monthly or annual fee for your team size. No per-transaction surprises.",
  },
  {
    title: "Control you can audit",
    text: "Every approval, change and payment is logged, so audits and donor reviews take hours instead of weeks.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const FAQS = [
  {
    q: "What is Soramap?",
    a: "A software and cybersecurity company. We build custom software, test and secure systems, and offer ready-made business modules for HR & payroll, procurement, inventory and imprest (activity advances), with CRM and POS coming soon.",
  },
  {
    q: "Can you build custom software for us?",
    a: "Yes. We develop any software solution: web and mobile apps, internal tools, integrations and APIs. Tell us what you need and we will scope it with you.",
  },
  {
    q: "What cybersecurity services do you offer?",
    a: "Penetration testing, vulnerability assessments, secure code review, and security audits with compliance readiness. Because we also build software, we can fix what we find as well as report it.",
  },
  {
    q: "Are CRM and POS available?",
    a: "Not yet. Both are in our plans and will connect to the existing modules. Get in touch if you want to be among the first to try them.",
  },
  {
    q: "Can I start with just one module?",
    a: "Yes. Most clients start with HR & Payroll or Imprest and add Procurement and Inventory later. Everything shares the same employee and approval data, so nothing needs re-entering.",
  },
  {
    q: "Does payroll handle statutory deductions?",
    a: "Yes. PAYE (KRA), NSSF and SHA are calculated automatically and payslips can be generated for the whole team in one run.",
  },
  {
    q: "How does the imprest workflow work?",
    a: "Staff request an advance against an activity and budget code, approvers sign off through the chain you define, and the advance must be surrendered with receipts before the next one is issued.",
  },
  {
    q: "Is there an implementation fee?",
    a: "The Annual Licence includes custom implementation and onboarding. For monthly plans, get in touch and we will confirm what onboarding looks like for your team.",
  },
  {
    q: "Can we get a demo?",
    a: "Absolutely. Use the Book a demo button and we will walk you through the modules that matter to your team.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

export const getModule = (id: string) => MODULES.find((m) => m.id === id);
