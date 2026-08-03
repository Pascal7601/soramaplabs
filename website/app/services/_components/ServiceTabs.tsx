"use client";

import { useLayoutEffect, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import styles from "../services.module.css";

interface Category {
  id: string;
  number: string;
  tabLabel: string;
}

export default function ServiceTabs({ categories }: { categories: Category[] }) {
  const [activeId, setActiveId] = useState(categories[0]?.id);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      categories.forEach((category) => {
        const section = document.getElementById(category.id);
        if (!section) return;

        ScrollTrigger.create({
          trigger: section,
          start: "top 40%",
          end: "bottom 40%",
          onEnter: () => setActiveId(category.id),
          onEnterBack: () => setActiveId(category.id),
        });
      });
    });

    return () => ctx.revert();
  }, [categories]);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles["service-tabs"]}>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleClick(category.id)}
          className={`${styles["service-tab"]} ${
            activeId === category.id ? styles["is-active"] : ""
          }`}
        >
          <span className={styles["tab-number"]}>{category.number}</span>
          {category.tabLabel}
        </button>
      ))}
    </nav>
  );
}
