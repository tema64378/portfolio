"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { copy, stats } from "@/lib/content";
import { LineReveal, Reveal } from "./Reveal";

export default function About() {
  const { lang } = useLang();
  const t = copy[lang].about;

  return (
    <section id="about" data-nav="dark" className="section">
      <div className="wrap">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="eyebrow text-muted">{t.label}</span>
            <span className="rule flex-1" />
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* text */}
          <div className="md:col-span-7">
            <h2 className="t-anchor mb-10">
              <LineReveal text={t.heading} />
            </h2>
            <div className="max-w-[52ch] space-y-6">
              {t.body.map((p, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <p className="t-body-lg text-muted">{p}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-black/10 pt-8">
              {stats.map((s, i) => (
                <Reveal key={s.value} delay={0.08 * i}>
                  <div>
                    <div className="t-subheading">{s.value}</div>
                    <div className="eyebrow text-muted mt-2">{s[lang]}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* portrait */}
          <div className="md:col-span-5">
            <Reveal delay={0.1}>
              <figure className="group">
                <div className="media media--mono relative aspect-[4/5] w-full" data-cursor="view">
                  <Image
                    src="/works/portrait.webp"
                    alt={t.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="eyebrow text-muted mt-4">
                  {t.caption}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
