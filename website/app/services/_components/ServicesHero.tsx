import styles from "../services.module.css";
import RevealSection from "@/components/RevealSection";

export default function ServicesHero() {
  return (
    <section data-nav-theme="dark" className={styles["services-hero"]}>
      <RevealSection className={styles["services-hero-layout"]}>
        <h1>Your Partner for strategy, Engineering & AI Adoption</h1>
        <p>
          From boardroom ambition to bottom-line results. We deliver AI where
          it drives real value.
        </p>
        <a href="/contact" className={styles["services-hero-cta"]}>
          Work with us ↗
        </a>
      </RevealSection>
    </section>
  );
}
