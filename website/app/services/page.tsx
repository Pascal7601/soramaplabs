import ServicesHero from "./_components/ServicesHero";
import ServiceTabs from "./_components/ServiceTabs";
import ServiceCategorySection from "./_components/ServiceCategorySection";
import CtaSection from "@/components/CtaSection";
import { CATEGORIES } from "./data";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServiceTabs categories={CATEGORIES} />
      {CATEGORIES.map((category) => (
        <ServiceCategorySection key={category.id} category={category} />
      ))}
      <CtaSection />
    </main>
  );
}