import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import IntroSequence from "@/components/IntroSequence";
import ServicesSection from "@/components/ServicesSection";
export default function Home() {
  return (
    <main className="flex flex-col">
      <IntroSequence />
      <ServicesSection />
      <AboutSection />
      <CtaSection />
    </main>

  );
}
