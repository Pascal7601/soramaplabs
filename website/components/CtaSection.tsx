import Link from "next/link";
import RevealSection from "@/components/RevealSection";
import { PRIMARY_CTA } from "@/lib/site-config";

interface CtaSectionProps {
  lead?: string;
  heading?: string;
  buttonLabel?: string;
  href?: string;
}

/**
 * Reusable closing call-to-action band. Used on the home and services pages.
 * Override copy per page via props, e.g. <CtaSection heading="..." />.
 */
export default function CtaSection({
  lead = "Ready when you are —",
  heading = "See Soramap running on your own workflows",
  buttonLabel = PRIMARY_CTA.label,
  href = PRIMARY_CTA.href,
}: CtaSectionProps) {
  return (
    <section data-nav-theme="light" className="cta-band">
      <RevealSection className="cta-band-content">
        <p className="cta-band-lead">{lead}</p>
        <h2 className="cta-band-heading">{heading}</h2>
        <Link href={href} className="cta-band-button">
          {buttonLabel} ↗
        </Link>
      </RevealSection>
    </section>
  );
}
