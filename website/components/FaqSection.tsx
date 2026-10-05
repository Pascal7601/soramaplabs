"use client";

import { useState } from "react";
import RevealSection from "@/components/RevealSection";
import { FAQS } from "@/lib/content";

/**
 * FAQ accordion. One item open at a time. Edit FAQS in lib/content.ts.
 * Uses the same grid-rows 0fr -> 1fr collapse trick as the services list.
 */
export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section data-nav-theme="light" className="faq">
      <RevealSection className="faq-layout">
        <div className="faq-intro">
          <p className="kicker">FAQ</p>
          <h2 className="section-heading">Questions, answered.</h2>
        </div>

        <div className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = i === openIndex;
            return (
              <div
                key={item.q}
                className={`faq-row ${isOpen ? "is-open" : ""}`}
              >
                <button
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">
                    +
                  </span>
                </button>
                <div className="faq-collapse">
                  <div className="faq-collapse-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </RevealSection>
    </section>
  );
}
