/**
 * SITE CONFIG — brand, contact details, navigation and footer links.
 *
 * Edit this file to change anything that appears in the Navbar, Footer,
 * Contact page or page <title>. Components import from here, so you never
 * need to hunt through JSX for an email address or a link.
 */

export const SITE = {
  name: "Soramap",
  /** Big faded word at the top of the footer */
  wordmark: "SORAMAP",
  tagline: "Custom software, cybersecurity and business modules.",
  description:
    "Soramap Labs is a software and cybersecurity company. We build custom software, secure systems, and offer ready-made modules for HR & payroll, procurement, inventory and imprest, with CRM and POS coming soon.",
  /** Public contact address. Used by the contact form (mailto) and footer. */
  email: "info@soramaplabs.com",
  year: new Date().getFullYear(),
} as const;

/** Links shown inline in the desktop navbar. */
export const NAV_INLINE = [
  { label: "Solutions", href: "/services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Our Company", href: "/about" },
  { label: "Contact us", href: "/contact" },
] as const;

/** Links shown in the full-screen menu overlay (max 5 — see the
 *  nth-child transition delays in globals.css). */
export const NAV_OVERLAY = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
] as const;

/** Call-to-action in the menu overlay + hero. */
export const PRIMARY_CTA = { label: "Book a demo", href: "/contact" } as const;

export const SOCIALS = [
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Instagram", href: "https://instagram.com" },
] as const;

/**
 * Footer columns. Module links are generated from lib/content.ts in
 * Footer.tsx, so only the static columns live here.
 */
export const FOOTER_STATIC_COLUMNS = [
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Our Work", href: "/work" },
      { label: "Contact", href: "/contact" },
      // TODO: create app/privacy/page.tsx, then change "#" to "/privacy"
      { label: "Privacy Policy", href: "#" },
    ],
  },
] as const;
