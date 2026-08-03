"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import Image from "next/image";

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
        "-=0.1"
      );

      master.to(
        loaderRef.current,
        { clipPath: "circle(0% at 50% 50%)", duration: 0.7, ease: "power4.inOut" },
        "-=0.4"
      );
      master
        .to(
          heroRef.current?.querySelectorAll(".word-inner") ?? [],
          { yPercent: 0, duration: 1.0, ease: "power4.out", stagger: 0.06 },
          "-=0.7"
        )
        .to(
          heroRef.current?.querySelectorAll(".hero-fade-up") ?? [],
          { opacity: 1, yPercent: 0, duration: 0.8, ease: "power3.out", stagger: 0.1 },
          "-=0.6"
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="intro-root">
      <div ref={loaderRef} className="loader">
        <div ref={markRef} className="mark">
			<Image src="/soramap.svg" width={300} height={300} alt="" className="loader-mark-image" />
		</div>
      </div>

      <section ref={heroRef} className="hero" data-nav-theme="dark">
        <div className="hero-content">
          <h1 className="hero-headline">
            Engineering Tomorow&apos;s <br/> Digital Products
          </h1>
          <p className="hero-sub hero-fade-up">
            We design and build high-performance web applications,
            cloud infrastructure, and custom software solutions for ambitious brands.
          </p>
          <a href="/contact" className="hero-cta hero-fade-up">
            Work With Us ↗
          </a>
        </div>
        <div className="hero-image hero-fade-up">
          <div className="hero-image-wrapper"> 
            <Image src="/hero-img.png" width={300} height={300} alt="" />
          </div>
          <div>
            <h2 className="sub-title">Leveraging deep technical expertise, we design and build scalable products with foward-thinking founders.</h2>
            <div className="sub-text gap-3">
              <div className="flex items-center gap-3 my-2">
                <Image src="/stack.svg" width={20} height={20} alt="" />
                <span className="text-[#CCD1D9]">Full-stack Engineering</span>
              </div>
              <div className="flex items-center gap-3 my-2">
                <Image src="/cloud.svg" width={20} height={20} alt="" />
                <span className="text-[#CCD1D9]">Cloud Infrastructure</span>
              </div>
              <div className="flex items-center gap-3 my-2">
                <Image src="/ai.svg" width={20} height={20} alt="" />
                <span className="text-[#CCD1D9]">AI Solutions</span>
              </div>
              <div className="flex items-center gap-3 my-2">
                <Image src="/security.svg" width={20} height={20} alt="" />
                <span className="text-[#CCD1D9]">Application Security</span>
              </div>
              <div className="flex items-center gap-3 my-2">
                <Image src="/design.svg" width={20} height={20} alt="" />
                <span className="text-[#CCD1D9]">Product Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}