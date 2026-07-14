"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useLang } from "@/lib/i18n";

export default function Interlude() {
  const { lang } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const caption =
    lang === "ru"
      ? "Каждый проект — это система, а не набор макетов"
      : "Every project is a system, not a pile of layouts";

  return (
    <section data-nav="light" className="section-dark relative">
      <div ref={ref} className="media media--mono group relative h-[62vh] w-full overflow-hidden">
        <motion.div className="absolute inset-[-12%]" style={{ y }}>
          <Image
            src="/works/crew.webp"
            alt={caption}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.55))" }}
        />
        <div className="wrap absolute inset-x-0 bottom-0 z-10 pb-10" style={{ color: "#fff" }}>
          <motion.p
            className="t-subheading max-w-[24ch]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          >
            {caption}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
