"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { PRIMARY_CTA } from "@/lib/site-config";

/**
 * HERO / INTRO
 *
 * The GSAP timeline below is unchanged: logo loader -> headline words ->
 * `.hero-fade-up` elements. To change what the hero SAYS, edit the
 * HERO_COPY object. The list on the right is HERO_LINKS below (each
 * links to an anchor on /services).
 *
 * Animation hooks (don't rename): `.word-inner`, `.hero-fade-up`.
 */

const HERO_COPY = {
  // Each string is one line; words animate in individually.
  headlineLines: ["Software built to run,", "secured to last"],
  sub: "We build custom software, test and secure it, and offer ready-made business modules: HR & payroll, procurement, inventory, imprest and CRM.",
  secondaryCta: { label: "Explore modules", href: "/services" },
  panelTitle:
    "One team that builds your software and protects it, plus modules that work as one.",
};

// Right-hand list in the hero. `href` points at an id from lib/content.ts.
const HERO_LINKS = [
  {
    number: "01",
    label: "Custom Software Development",
    href: "/services#software-development",
  },
  { number: "02", label: "Cybersecurity", href: "/services#cybersecurity" },
  {
    number: "03",
    label: "HR, Procurement, Inventory & Imprest",
    href: "/services#hr-payroll",
  },
  { number: "04", label: "CRM & POS", href: "/services#crm" },
];

export default function IntroSequence() {
  const rootRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const master = gsap.timeline();
      gsap.set(loaderRef.current, { clipPath: "circle(150% at 50% 50%)" });
      gsap.set(markRef.current, { scale: 0.6, opacity: 0 });

      master.to(markRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        ease: "back.out(1.7)",
      });
      master.to(markRef.current, {
        scale: 1.08,
        duration: 0.45,
        ease: "sine.inOut",
        yoyo: true,
        repeat: 1,
      });
      master.to(
        markRef.current,
        { opacity: 0, scale: 0.9, duration: 0.5, ease: "power2.in" },
        "-=0.1",
      );

      master.to(
        loaderRef.current,
        {
          clipPath: "circle(0% at 50% 50%)",
          duration: 0.5,
          ease: "power4.inOut",
        },
        "-=0.4",
      );
      master
        .to(
          heroRef.current?.querySelectorAll(".word-inner") ?? [],
          { yPercent: 0, duration: 1.0, ease: "power4.out", stagger: 0.06 },
          "-=0.7",
        )
        .to(
          heroRef.current?.querySelectorAll(".hero-fade-up") ?? [],
          {
            opacity: 1,
            yPercent: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=0.6",
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="intro-root">
      <div ref={loaderRef} className="loader">
        <div ref={markRef} className="mark">
          <Image
            src="/soramapbg.png"
            width={300}
            height={300}
            alt=""
            className="loader-mark-image"
          />
        </div>
      </div>

      <section ref={heroRef} className="hero" data-nav-theme="dark">
        <div className="hero-content">
          <h1 className="hero-headline">
            {HERO_COPY.headlineLines.map((line, lineIndex) => (
              <span key={line} className="hero-line">
                {line.split(" ").map((word, wordIndex) => (
                  <span className="word-wrap" key={`${lineIndex}-${wordIndex}`}>
                    <span className="word-inner">{word}</span>
                  </span>
                ))}
              </span>
            ))}
          </h1>
          <p className="hero-sub hero-fade-up">{HERO_COPY.sub}</p>

          <div className="hero-buttons hero-fade-up">
            <Link href={PRIMARY_CTA.href} className="hero-cta hero-cta-solid">
              {PRIMARY_CTA.label} ↗
            </Link>
            <Link
              href={HERO_COPY.secondaryCta.href}
              className="hero-cta hero-cta-ghost"
            >
              {HERO_COPY.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className="hero-image hero-fade-up">
          <div className="hero-image-wrapper">
            {/* Swap this for a product screenshot when you have one. */}
            <Image
              src="/team-working.png"
              width={710}
              height={473}
              alt="Team using Soramap"
            />
          </div>
          <div>
            <h2 className="sub-title">{HERO_COPY.panelTitle}</h2>
            <ul className="hero-modules">
              {HERO_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span className="hero-module-number">{item.number}</span>
                    <span className="hero-module-name">{item.label}</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
