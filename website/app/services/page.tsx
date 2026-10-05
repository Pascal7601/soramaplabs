import type { Metadata } from "next";
import ServicesHero from "./_components/ServicesHero";
import ServiceTabs from "./_components/ServiceTabs";
import ServiceCategorySection from "./_components/ServiceCategorySection";
import CtaSection from "@/components/CtaSection";
import { CATEGORIES } from "./data";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Custom software development, cybersecurity, and ready-made modules for HR & payroll, procurement, inventory and imprest. CRM and POS coming soon.",
};

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
