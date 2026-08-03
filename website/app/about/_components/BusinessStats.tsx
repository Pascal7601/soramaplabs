"use client";
import Image from "next/image";
import styles from "../about.module.css";
import RevealSection from "../../../components/RevealSection";

const BOTTOM_STATS = [
  {
    number: "3",
    label: "Years",
    text: "The company was founded in 2023. Every project is built with maintainability, performance, and reliability in mind.",
    link: "Work with us",
  },
  {
    number: "5+",
    label: "Technologies",
    text: "Expertise across React, Next.js, Node.js, Python, PostgreSQL, cloud infrastructure, and more.",
    link: "See our work",
  },
  {
    number: "100%",
    label: "Client Focused",
    text: "Every solution is designed around your business goals, users, and long-term success.",
    link: "See our work",
  },
];

export default function AboutSection() {
  return (
    <section data-nav-theme="dark" className={styles["about-section"]}>
      {/* Giant Background Text */}
      <div className={styles["about-wordmark"]} aria-hidden="true">
        About us
      </div>

      <div className={styles["about-container"]}>
        
        {/* Top Row: Text Left, Image Right */}
        <RevealSection className={styles["about-top-row"]}>
          <div className={styles["about-top-copy"]}>
            <h2 className={styles["header-2"]}>Building Technology that moves businesses forward</h2>
            <p className={styles["about-subtitle"]}>
              We&apos;re made up of top product experts, designers, engineers and
              product leaders who treat client projects as if they were our own
            </p>
            
            <div className={styles["top-stats-flex"]}>
              <div className={styles["top-stat"]}>
                <span className={styles["top-stat-num"]}>20+</span>
                <span className={styles["top-stat-label"]}>Completed Projects</span>
              </div>
              <div className={styles["top-stat"]}>
                <span className={styles["top-stat-num"]}>3</span>
                <span className={styles["top-stat-label"]}>Employees</span>
              </div>
            </div>
          </div>

          <div className={styles["about-top-image"]}>
            <Image 
              src="/developer-focus.png" 
              alt="Developer working at a multi-monitor desk" 
              fill 
              style={{ objectFit: "cover" }} 
            />
          </div>
        </RevealSection>

        {/* Middle Row: Image Left, Text Right */}
        <RevealSection className={styles["about-middle-row"]}>
          <div className={styles["about-middle-image"]}>
            <Image 
              src="/focus-2.png" 
              alt="Developer analyzing code on screen" 
              fill 
              style={{ objectFit: "cover" }} 
            />
          </div>

          <div className={styles["about-middle-copy"]}>
            <h2>Custom software built around your business.</h2>
            <p className={styles["about-subtitle"]}>
              We create modern digital products that solve real problems and
              deliver measurable results. Every solution is engineered with
              performance, scalability, and user experience at its core.
            </p>
            <a href="/services" className={styles["btn-services"]}>
              Services ↗
            </a>
          </div>
        </RevealSection>

        {/* Bottom Row: 3-Column Stats Grid */}
        <RevealSection className={styles["about-bottom-stats"]} stagger>
          {BOTTOM_STATS.map((stat) => (
            <div className={`${styles["bottom-stat-col"]} reveal-item`} key={stat.label}>
              <span className={styles["bottom-stat-num"]}>{stat.number}</span>
              <span className={styles["bottom-stat-label"]}>{stat.label}</span>
              <p>{stat.text}</p>
              <a href="#" className={styles["stat-link"]}>{stat.link} ↗</a>
            </div>
          ))}
        </RevealSection>
        
      </div>
    </section>
  );
}