"use client";

import { motion } from "motion/react";
import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/content";
import IridescentBg from "./IridescentBg";
import ScrollBadge from "./ScrollBadge";
import Magnetic from "./Magnetic";

const GLIDE = [0.19, 1, 0.22, 1] as const;

export default function Hero() {
  const { lang } = useLang();
  const t = copy[lang].hero;
  const name = lang === "ru" ? ["Артём", "Яковлев"] : ["Artem", "Yakovlev"];

  return (
    <section
      id="top"
      data-nav="light"
      className="section-dark relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
      style={{ color: "#fff" }}
    >
      <IridescentBg />

      <div className="wrap relative z-10 pb-24 pt-32">
        <motion.div
          className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: GLIDE, delay: 0.1 }}
        >
          <span className="eyebrow" style={{ opacity: 0.85 }}>
            {t.eyebrow}
          </span>
          <span className="avail eyebrow">
            <span className="avail-dot" />
            {t.now}
          </span>
        </motion.div>

        <h1 className="t-display" style={{ display: "block" }}>
          {name.map((line, i) => (
            <span key={i} style={{ display: "block", overflow: "hidden" }}>
              <motion.span
                style={{ display: "block" }}
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.15, ease: GLIDE, delay: 0.2 + i * 0.12 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <motion.p
            className="t-body-lg max-w-[30ch]"
            style={{ color: "rgba(255,255,255,0.82)" }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: GLIDE, delay: 0.55 }}
          >
            {t.lead}
          </motion.p>

          <motion.div
            className="flex flex-shrink-0 flex-wrap gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: GLIDE, delay: 0.7 }}
          >
            <Magnetic>
              <a href="#work" className="pill pill--solid">
                {t.cta1}
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="pill">
                {t.cta2}
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* bottom rail */}
      <div className="wrap relative z-10 pb-8">
        <div className="rule mb-6" style={{ background: "rgba(255,255,255,0.16)" }} />
        <div className="flex items-center justify-between">
          <ScrollBadge />
          <div className="hidden items-center gap-8 sm:flex">
            {t.meta.map((m) => (
              <span key={m} className="eyebrow" style={{ opacity: 0.7 }}>
                {m}
              </span>
            ))}
          </div>
          <span className="eyebrow sm:hidden" style={{ opacity: 0.7 }}>
            {t.meta[2]}
          </span>
        </div>
      </div>
    </section>
  );
}
