import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import FaqSection from "@/components/FaqSection";
import IntroSequence from "@/components/IntroSequence";
import OfferingsSection from "@/components/OfferingsSection";
import PricingSection from "@/components/PricingSection";
import ServicesSection from "@/components/ServicesSection";
import ValueProps from "@/components/ValueProps";

/**
 * HOME PAGE — section order. Reorder or remove sections here.
 *
 *   Hero -> What we do -> Products -> Why Soramap -> Pricing -> FAQ -> About -> CTA
 */
export default function Home() {
  return (
    <main className="flex flex-col">
      <IntroSequence />
      <OfferingsSection />
      <ServicesSection />
      <ValueProps />
      <PricingSection />
      <FaqSection />
      <AboutSection />
      <CtaSection />
    </main>
  );
}
