"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLang } from "@/lib/i18n";

const GLIDE = [0.19, 1, 0.22, 1] as const;

export default function Preloader() {
  const { lang } = useLang();
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = sessionStorage.getItem("preloaded");
    if (reduce || seen) {
      setShow(false);
      return;
    }
    document.body.style.overflow = "hidden";
    let n = 0;
    const iv = setInterval(() => {
      n = Math.min(100, n + Math.round(5 + Math.random() * 12));
      setCount(n);
      if (n >= 100) clearInterval(iv);
    }, 45);
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("preloaded", "1");
      document.body.style.overflow = "";
    }, 1650);
    return () => {
      clearInterval(iv);
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  const name = lang === "ru" ? "Артём Яковлев" : "Artem Yakovlev";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="preloader"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.95, ease: GLIDE }}
        >
          <div className="wrap flex h-full flex-col justify-between py-10">
            <div className="flex items-center justify-between">
              <span className="eyebrow" style={{ opacity: 0.65 }}>
                {name}
              </span>
              <span className="eyebrow" style={{ opacity: 0.45 }}>
                {lang === "ru" ? "портфолио" : "portfolio"}
              </span>
            </div>
            <div className="flex items-end justify-between">
              <span
                style={{
                  fontSize: "clamp(64px, 13vw, 168px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.03em",
                  fontWeight: 400,
                }}
              >
                {String(count).padStart(3, "0")}
              </span>
              <span className="eyebrow" style={{ opacity: 0.45 }}>
                {lang === "ru" ? "загрузка" : "loading"}
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
