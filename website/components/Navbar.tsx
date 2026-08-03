"use client";

import { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Link from "next/link";

const LINKS = ["Work", "Services", "About"];

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
        <nav className="navbar-links-inline">
          <Link href="/">Home</Link>
          <a href="/about">Our Company</a>
          <a href="/services">Our Services</a>
          <a href="/work">Our Work</a>
        </nav>

        <div className="navbar-bar-right">
          <a href="/contact" className="navbar-contact">
            Contact Us
          </a>
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
          <Image src="/soramap.svg" width={36} height={36} className="fill-black" alt="Soramap" />
          <a href="/contact" className="navbar-cta">
            Start a project ↗
          </a>
          <button
            className="navbar-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="navbar-links">
          {LINKS.map((label) => (
            <a
              key={label}
              href={`/${label.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="navbar-overlay-bottom">
          <span>© 2026 Soramap</span>
          <div className="navbar-socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter ↗
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}