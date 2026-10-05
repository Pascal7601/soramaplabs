"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import RevealSection from "@/components/RevealSection";
import { MODULES } from "@/lib/content";

/**
 * HOME PAGE — PRODUCTS (MODULES) SECTION
 *
 * Left: accordion list of modules (hover/tap to open).
 * Right: sticky preview panel showing the active module's highlights.
 *
 * Content comes from MODULES in lib/content.ts. Modules with
 * status "coming-soon" get a badge automatically. The old version pointed
 * at /services/*.jpg images that do not exist in /public (broken images),
 * so the right-hand side is now a themed panel. If you add real
 * screenshots later, add an `image` field to ProductModule and render it
 * in the panel.
 */
export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = MODULES[activeIndex];

  return (
    <section id="services" data-nav-theme="light" className="services">
      <RevealSection className="services-intro">
        <p className="kicker">Our Products</p>
        <h2 className="section-heading">
          Ready-made business modules that work as one.
        </h2>
      </RevealSection>

      <div className="services-layout">
        <div className="services-list">
          {MODULES.map((module, i) => (
            <div
              key={module.id}
              className={`service-row ${i === activeIndex ? "is-active" : ""}`}
              onMouseEnter={() => setActiveIndex(i)}
              onClick={() => setActiveIndex(i)}
            >
              <div className="service-row-header">
                <span className="service-number">{module.number}</span>
                <h3>{module.name}</h3>
                {module.status === "coming-soon" && (
                  <span className="badge">Coming soon</span>
                )}
                <span className="service-arrow">↗</span>
              </div>

              <div className="service-collapse">
                <div className="service-collapse-inner">
                  <p>{module.summary}</p>
                  <Link
                    href={`/services#${module.id}`}
                    className="service-learn-more"
                  >
                    Learn more ↗
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-image module-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="services-image-inner module-panel-inner"
            >
              <span className="module-panel-number">{active.number}</span>
              <div>
                <h3 className="module-panel-title">
                  {active.name}
                  {active.status === "coming-soon" && (
                    <span className="badge badge-light">Coming soon</span>
                  )}
                </h3>
                <p className="module-panel-tagline">{active.tagline}</p>
                <ul className="module-panel-list">
                  {active.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
