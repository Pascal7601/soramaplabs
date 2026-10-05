import { CORE_SERVICES, MODULES } from "@/lib/content";

/**
 * /services page data.
 *
 * Derived from lib/content.ts so the home page, services page and footer
 * can never drift apart. Order on the page: company services first
 * (software development, cybersecurity), then the business modules
 * (including "coming soon" ones). Numbers are generated from the order.
 *
 * The shape is what ServiceTabs and ServiceCategorySection expect, so
 * those stay generic.
 */
export const CATEGORIES = [...CORE_SERVICES, ...MODULES].map((m, i) => ({
  id: m.id,
  number: String(i + 1).padStart(2, "0"),
  tabLabel: m.tabLabel,
  heading: m.name,
  tagline: m.tagline,
  description: m.summary,
  highlights: m.highlights,
  items: m.features,
  status: m.status,
}));

export type Category = (typeof CATEGORIES)[number];
