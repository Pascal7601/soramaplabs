import Image from "next/image";
import RevealSection from "@/components/RevealSection";

export default function AboutSection() {
  return (
    <section id="about" data-nav-theme="light" className="about">
      <RevealSection className="about-layout">
        <div className="about-image-wrapper">
          <Image
            src="/about-office.jpg"
            alt="Our team"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="about-content">
          <p className="section-eyebrow">About Us</p>
          <h2 className="about-heading">
            We look for interesting challenges that move people forward.
          </h2>
          <div className="about-ctas">
            <a href="/about" className="about-cta-filled">
              About Us ↗
            </a>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}