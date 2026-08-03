"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../services.module.css";
import RevealSection from "@/components/RevealSection";

interface Item {
  title: string;
  description: string;
}

interface Category {
  id: string;
  heading: string;
  image: string;
  description: string;
  items: Item[];
}

export default function ServiceCategorySection({ category }: { category: Category }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id={category.id}
      data-nav-theme="light"
      className={styles["category-section"]}
    >
      <RevealSection className={styles["category-layout"]}>
        <div className={styles["category-left"]}>
          <h2>{category.heading}</h2>
          <div className={styles["category-image"]}>
            <Image src={category.image} alt="" fill style={{ objectFit: "cover" }} />
          </div>
        </div>

        <div className={styles["category-right"]}>
          <p className={styles["category-description"]}>{category.description}</p>

          <span className={styles["services-label"]}>↓ Services</span>

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
                    <p>{item.description}</p>
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