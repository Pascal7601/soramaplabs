"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import RevealSection from "@/components/RevealSection";

const SERVICES = [
  {
    title: "Technology",
    description:
      "We build cutting-edge mobile and web applications, pushing past conventional boundaries to solve real problems with real impact.",
    items: [
      "Mobile App Development",
      "Web Development",
      "AI & Innovation",
      "Backend & Infrastructure",
      "Emerging Technology",
    ],
    image: "/services/technology.jpg",
  },
  {
    title: "Experience",
    description:
      "Our product designers and strategists collaborate closely to deliver work that's grounded in real user insight, not guesswork.",
    items: ["Product Systems", "User Research", "UX Design", "Visual Design"],
    image: "/services/experience.jpg",
  },
  {
    title: "Strategy",
    description:
      "We partner with clients on strategy from day one — market positioning, growth potential, and technical roadmaps that hold up.",
    items: [
      "Digital Transformation",
      "Product Vision",
      "AI Strategy",
      "Technical Audits",
    ],
    image: "/services/strategy.jpg",
  },
  {
    title: "Growth",
    description:
      "We drive measurable growth across the full funnel by combining creative, data, and channel expertise in-house.",
    items: ["Channel Management", "Data & Analytics", "Performance Marketing"],
    image: "/services/growth.jpg",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" data-nav-theme="light" className="services">
      <RevealSection className="services-intro">
        <p className="eyebrow">What we do</p>
        <h2 className="section-heading">
          Elegant solutions built on proven methodologies.
        </h2>
      </RevealSection>

      <div className="services-layout">
        <div className="services-list">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`service-row ${i === activeIndex ? "is-active" : ""}`}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <div className="service-row-header">
                <span className="service-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{service.title}</h3>
                <span className="service-arrow">↗</span>
              </div>

              <div className="service-collapse">
                <div className="service-collapse-inner">
                  <p>{service.description}</p>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="services-image">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="services-image-inner"
            >
              <Image
                src={SERVICES[activeIndex].image}
                alt={SERVICES[activeIndex].title}
                fill
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}