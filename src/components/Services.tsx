"use client";

import { useLang } from "@/lib/i18n";
import { copy, services } from "@/lib/content";
import { Reveal } from "./Reveal";

export default function Services() {
  const { lang } = useLang();
  const t = copy[lang].services;

  return (
    <section id="services" data-nav="dark" className="section">
      <div className="wrap">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="eyebrow text-muted">{t.label}</span>
            <span className="rule flex-1" />
          </div>
        </Reveal>

        <h2 className="t-heading mt-10 mb-14">{t.heading}</h2>

        <ul>
          {services.map((s, i) => (
            <Reveal key={s.no} delay={0.04 * i}>
              <li className="service-row group grid grid-cols-1 items-baseline gap-3 border-t border-black/12 py-8 md:grid-cols-12 md:gap-8">
                <span className="eyebrow text-muted md:col-span-1">{s.no}</span>
                <h3 className="t-subheading md:col-span-5">{s[lang].title}</h3>
                <p className="t-body text-muted md:col-span-6 max-w-[46ch]">
                  {s[lang].text}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
