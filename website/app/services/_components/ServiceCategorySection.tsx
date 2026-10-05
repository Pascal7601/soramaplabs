"use client";

import { useState } from "react";
import styles from "../services.module.css";
import RevealSection from "@/components/RevealSection";

interface Item {
  title: string;
  description: string;
}

interface Category {
  id: string;
  number: string;
  heading: string;
  tagline: string;
  description: string;
  highlights: string[];
  items: Item[];
  status: "live" | "coming-soon";
}

/**
 * One block on /services (a company service or a product module):
 * heading + highlights panel on the left, description + feature accordion
 * on the right. "coming-soon" entries show a badge next to the heading.
 *
 * The old version rendered /services/*.jpg photos that don't exist in
 * /public. The left side is now a themed panel (class `.category-image`
 * is reused so services.module.css doesn't need to change).
 */
export default function ServiceCategorySection({
  category,
}: {
  category: Category;
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id={category.id}
      data-nav-theme="light"
      className={styles["category-section"]}
    >
      <RevealSection className={styles["category-layout"]}>
        <div className={styles["category-left"]}>
          <h2>
            {category.heading}
            {category.status === "coming-soon" && (
              <span className="badge">Coming soon</span>
            )}
          </h2>
          <div className={`${styles["category-image"]} category-highlights`}>
            <span className="category-highlights-number">
              {category.number}
            </span>
            <p className="category-highlights-tagline">{category.tagline}</p>
            <ul>
              {category.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles["category-right"]}>
          <p className={styles["category-description"]}>
            {category.description}
          </p>

          <span className={styles["services-label"]}>↓ Features</span>

          <div className={styles["accordion"]}>
            {category.items.map((item, i) => (
              <div key={item.title} className={styles["accordion-row"]}>
                <button
                  className={styles["accordion-header"]}
                  onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
                >
                  <span>{item.title}</span>
                  <span
                    className={`${styles["accordion-chevron"]} ${
                      i === openIndex ? styles["is-open"] : ""
                    }`}
                  >
                    ›
                  </span>
                </button>

                <div className={styles["accordion-collapse"]}>
                  <div className={styles["accordion-collapse-inner"]}>
                    <p className={styles["accordion-description"]}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
