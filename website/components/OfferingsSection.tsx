import Link from "next/link";
import RevealSection from "@/components/RevealSection";
import { CORE_SERVICES } from "@/lib/content";

/**
 * HOME PAGE — "WHAT WE DO"
 *
 * The company's core services (custom software development and
 * cybersecurity), shown as two large cards above the ready-made modules.
 * Content comes from CORE_SERVICES in lib/content.ts.
 */
export default function OfferingsSection() {
  return (
    <section id="offerings" data-nav-theme="light" className="offerings">
      <RevealSection className="offerings-intro">
        <p className="kicker">What we do</p>
        <h2 className="section-heading">
          We build software, and we make sure it can&apos;t be broken.
        </h2>
      </RevealSection>

      <RevealSection className="offerings-grid" stagger>
        {CORE_SERVICES.map((s) => (
          <article key={s.id} className="offering-card reveal-item">
            <span className="offering-number">{s.number}</span>
            <h3>{s.name}</h3>
            <p className="offering-tagline">{s.tagline}</p>
            <p className="offering-summary">{s.summary}</p>
            <ul>
              {s.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <Link href={`/services#${s.id}`} className="offering-link">
              Learn more ↗
            </Link>
          </article>
        ))}
      </RevealSection>
    </section>
  );
}
