"use client";

import { useLayoutEffect, useRef, type ReactNode, type HTMLAttributes } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface RevealSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  stagger?: boolean;
}

export default function RevealSection({
  children,
  stagger = false,
  ...rest
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const targets = stagger ? el.querySelectorAll(".reveal-item") : el;

      gsap.set(targets, { opacity: 0, y: 40 });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: stagger ? 0.12 : 0,
        ScrollTrigger: { trigger: el, start: "top 80%", once: true },
      });
    }, ref);

    return () => ctx.revert();
  }, [stagger]);

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
}