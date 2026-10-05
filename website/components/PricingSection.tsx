import Link from "next/link";
import RevealSection from "@/components/RevealSection";
import { PRICING, PRICING_NOTE } from "@/lib/content";

/**
 * PRICING — flat-rate tiers. Edit PRICING in lib/content.ts.
 * Set `featured: true` on one tier to highlight it.
 * PRICING_NOTE (also in content.ts) is the small print under the cards.
 */
export default function PricingSection() {
  return (
    <section id="pricing" data-nav-theme="light" className="pricing">
      <RevealSection className="pricing-intro">
        <p className="kicker">Pricing</p>
        <h2 className="section-heading">
          Predictable flat-rate pricing. No per-transaction surprises.
        </h2>
      </RevealSection>

      <RevealSection className="pricing-grid" stagger>
        {PRICING.map((tier) => (
          <article
            key={tier.name}
            className={`pricing-card reveal-item ${tier.featured ? "is-featured" : ""}`}
          >
            <h3>{tier.name}</h3>
            <p className="pricing-audience">{tier.audience}</p>
            <p className="pricing-price">
              {tier.price}
              <span>{tier.period}</span>
            </p>
            <ul>
              {tier.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Link href="/contact" className="pricing-cta">
              Talk to us ↗
            </Link>
          </article>
        ))}
      </RevealSection>

      <p className="pricing-note">{PRICING_NOTE}</p>
    </section>
  );
}
