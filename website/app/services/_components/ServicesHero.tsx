import Link from "next/link";
import styles from "../services.module.css";
import RevealSection from "@/components/RevealSection";
import { PRIMARY_CTA } from "@/lib/site-config";

export default function ServicesHero() {
  return (
    <section data-nav-theme="light" className={styles["services-hero"]}>
      <RevealSection className={styles["services-hero-layout"]}>
        <h1>Software development, cybersecurity and business modules</h1>
        <p>
          We build and secure software for your organisation, and offer
          ready-made modules you can start using today.
        </p>
        <Link href={PRIMARY_CTA.href} className={styles["services-hero-cta"]}>
          {PRIMARY_CTA.label} ↗
        </Link>
      </RevealSection>
    </section>
  );
}
