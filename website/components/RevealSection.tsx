"use client";

import {
  useLayoutEffect,
  useRef,
  type ReactNode,
  type HTMLAttributes,
} from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

interface RevealSectionProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** When true, each child with `.reveal-item` animates in one after another. */
  stagger?: boolean;
}

/**
 * Fades + slides its content up when it scrolls into view.
 *
 * FIX: the original code passed `ScrollTrigger: {...}` (capital S), which
 * GSAP silently ignores, so everything animated on page load instead of on
 * scroll. The correct option key is lowercase `scrollTrigger`.
 */
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
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      });
    }, ref);

    // Content height changes (fonts, images) can shift trigger positions.
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [stagger]);

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
}
