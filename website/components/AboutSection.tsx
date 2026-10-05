import Image from "next/image";
import Link from "next/link";
import RevealSection from "@/components/RevealSection";

/**
 * HOME PAGE — short "about" teaser. The old version referenced
 * /about-office.jpg which isn't in /public; it now uses an existing image.
 */
export default function AboutSection() {
  return (
    <section id="about" data-nav-theme="light" className="about">
      <RevealSection className="about-layout">
        <div className="about-image-wrapper">
          <Image
            src="/developer-focus.png"
            alt="Soramap engineers at work"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="about-content">
          <p className="kicker">About Soramap</p>
          <h2 className="about-heading">
            We build operational systems that bring clarity, compliance, and
            control to your business.
          </h2>
          <div className="about-ctas">
            <Link href="/about" className="about-cta-filled">
              About Us ↗
            </Link>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
