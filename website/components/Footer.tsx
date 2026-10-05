"use client";

import Link from "next/link";
import { CORE_SERVICES, MODULES } from "@/lib/content";
import { FOOTER_STATIC_COLUMNS, SITE, SOCIALS } from "@/lib/site-config";

/**
 * Footer. The "Services" and "Products" columns are generated from
 * CORE_SERVICES and MODULES, so adding an entry in lib/content.ts adds a
 * footer link automatically. The Company column, socials and the wordmark
 * live in lib/site-config.ts.
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const columns: {
    heading: string;
    links: { label: string; href: string }[];
  }[] = [
    {
      heading: "Services",
      links: CORE_SERVICES.map((m) => ({
        label: m.name,
        href: `/services#${m.id}`,
      })),
    },
    {
      heading: "Products",
      links: MODULES.map((m) => ({
        label: m.status === "coming-soon" ? `${m.name} (soon)` : m.name,
        href: `/services#${m.id}`,
      })),
    },
    ...FOOTER_STATIC_COLUMNS.map((c) => ({
      heading: c.heading,
      links: [...c.links],
    })),
  ];

  return (
    <footer className="footer" data-nav-theme="dark">
      <div className="footer-wordmark" aria-hidden="true">
        {SITE.wordmark}
      </div>

      <div className="footer-content">
        <div className="footer-columns">
          {columns.map((col) => (
            <div className="footer-column" key={col.heading}>
              <h3>{col.heading}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-column">
            <h3>Socials</h3>
            <ul>
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer">
                    {s.label} ↗
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {SITE.year} {SITE.name}
          </span>
          <button onClick={scrollToTop} className="footer-back-to-top">
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
