"use client";

import { useLang } from "@/lib/i18n";
import { copy, testimonial, awards } from "@/lib/content";
import { Reveal } from "./Reveal";

export default function Recognition() {
  const { lang } = useLang();
  const t = copy[lang].recognition;
  const q = testimonial[lang];

  return (
    <section id="recognition" data-nav="dark" className="section">
      <div className="wrap">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="eyebrow text-muted">{t.label}</span>
            <span className="rule flex-1" />
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* pull quote */}
          <figure className="md:col-span-7">
            <span
              className="block leading-none"
              style={{ fontSize: "clamp(48px,7vw,88px)", opacity: 0.12 }}
              aria-hidden
            >
              “
            </span>
            <Reveal>
              <blockquote className="t-quote -mt-4 max-w-[30ch]">
                {q.quote}
              </blockquote>
            </Reveal>
            <Reveal delay={0.1}>
              <figcaption className="mt-9 flex flex-col gap-1">
                <span className="t-h3" style={{ fontWeight: 400 }}>
                  {testimonial.author}
                </span>
                <span className="eyebrow text-muted">
                  {q.role} · {testimonial.source[lang]}
                </span>
              </figcaption>
            </Reveal>
          </figure>

          {/* awards */}
          <div className="md:col-span-5">
            <Reveal>
              <span className="eyebrow text-muted">
                {lang === "ru" ? "Награды и признание" : "Awards & recognition"}
              </span>
            </Reveal>
            <ul className="mt-6">
              {awards.map((a, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <li className="award-row flex items-start gap-4 border-t border-black/12 py-5">
                    <span className="award-mark" aria-hidden />
                    <span className="t-body">{a[lang]}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
