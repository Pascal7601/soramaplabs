import RevealSection from "@/components/RevealSection";

export default function CtaSection() {
  return (
    <section data-nav-theme="light" className="cta-band">
      <RevealSection className="cta-band-content">
        <p className="cta-band-lead">Let&apos;s talk —</p>
        <h2 className="cta-band-heading">
          We&apos;d love to hear about your project
        </h2>
        <a href="/contact" className="cta-band-button">
          Start a Project ↗
        </a>
      </RevealSection>
    </section>
  );
}
