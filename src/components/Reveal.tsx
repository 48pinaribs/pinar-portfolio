"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** stagger delay step: "d1" | "d2" | "d3" (matches globals.css) */
  delay?: "d1" | "d2" | "d3";
};

/**
 * Scroll-triggered fade-up reveal, mirroring the reference design's
 * IntersectionObserver + .reveal/.reveal.in pattern.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classes = ["reveal", delay, visible ? "in" : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes}>
      {children}
    </Tag>
  );
}
