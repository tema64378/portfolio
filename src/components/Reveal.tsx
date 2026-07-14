"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const GLIDE = [0.19, 1, 0.22, 1] as const;

/* Fade + rise on scroll into view */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1, ease: GLIDE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* Line-by-line clip reveal for headings. Pass text with \n between lines. */
export function LineReveal({
  text,
  className,
  delay = 0,
  stagger = 0.09,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const lines = text.split("\n");
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const line: Variants = {
    hidden: { y: "115%" },
    show: { y: "0%", transition: { duration: 1.1, ease: GLIDE } },
  };
  return (
    <motion.span
      className={className}
      style={{ display: "block" }}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {lines.map((l, i) => (
        <span
          key={i}
          style={{ display: "block", overflow: "hidden", paddingBottom: "0.04em" }}
        >
          <motion.span variants={line} style={{ display: "block" }}>
            {l || " "}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
