import RevealSection from "@/components/RevealSection";
import { VALUE_PROPS } from "@/lib/content";

/**
 * "WHY SORAMAP" — 4-up benefits grid
 * Dark section. Edit the copy in VALUE_PROPS (lib/content.ts).
 */
export default function ValueProps() {
  return (
    <section data-nav-theme="dark" className="value-props">
      <RevealSection className="value-props-intro">
        <p className="kicker kicker-light">Why Soramap</p>
        <h2 className="section-heading">
          Software that matches how your organisation really runs.
        </h2>
      </RevealSection>

      <RevealSection className="value-props-grid" stagger>
        {VALUE_PROPS.map((item, i) => (
          <div className="value-prop reveal-item" key={item.title}>
            <span className="value-prop-number">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </RevealSection>
    </section>
  );
}
