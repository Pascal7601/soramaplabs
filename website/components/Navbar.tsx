"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import {
  NAV_INLINE,
  NAV_OVERLAY,
  PRIMARY_CTA,
  SITE,
  SOCIALS,
} from "@/lib/site-config";

/**
 * Navbar. Links, CTA and socials now come from lib/site-config.ts.
 * Theme switching (light/dark) is driven by `data-nav-theme` on each section.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>("[data-nav-theme]");

      sections.forEach((section) => {
        const sectionTheme = section.dataset.navTheme as "dark" | "light";

        ScrollTrigger.create({
          trigger: section,
          start: "top 90px",
          end: "bottom 90px",
          onEnter: () => setTheme(sectionTheme),
          onEnterBack: () => setTheme(sectionTheme),
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <header className="navbar">
      <div className={`navbar-bar ${theme === "light" ? "on-light" : ""}`}>
        <div className="navbar-logo">
          <Link href="/" className="cursor-pointer">
            <Image
              src={theme === "light" ? "/soramap-dark.png" : "/soramapbg.png"}
              width={90}
              height={90}
              alt={SITE.name}
            />
          </Link>
        </div>
        <nav className="navbar-links-inline">
          {NAV_INLINE.map(({ label, href }) => (
            <Link key={label} href={href}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="navbar-bar-right">
          <button
            className="navbar-toggle"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`navbar-overlay ${isOpen ? "is-open" : ""}`}>
        <div className="navbar-overlay-top">
          <Image
            src="/soramap-dark.png"
            width={90}
            height={90}
            className="fill-black"
            alt={SITE.name}
          />
          <Link
            href={PRIMARY_CTA.href}
            className="navbar-cta border-b-2 rounded-2"
            onClick={() => setIsOpen(false)}
          >
            {PRIMARY_CTA.label} ↗
          </Link>
          <button
            className="navbar-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="navbar-links">
          {NAV_OVERLAY.map(({ label, href }) => (
            <Link key={label} href={href} onClick={() => setIsOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="navbar-overlay-bottom">
          <span>
            © {SITE.year} {SITE.name}
          </span>
          <div className="navbar-socials">
            {SOCIALS.slice(0, 2).map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
