"use client";

import { useLang } from "@/lib/i18n";
import { copy, experience } from "@/lib/content";
import { Reveal } from "./Reveal";

export default function Experience() {
  const { lang } = useLang();
  const t = copy[lang].experience;

  return (
    <section id="experience" data-nav="dark" className="section">
      <div className="wrap">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="eyebrow text-muted">{t.label}</span>
            <span className="rule flex-1" />
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="t-anchor">{t.heading}</h2>
          <p className="t-body text-muted max-w-[34ch]">{t.note}</p>
        </div>

        <ul className="mt-16">
          {experience.map((e, i) => (
            <Reveal key={e.org} delay={0.04 * i}>
              <li className="exp-row group grid grid-cols-1 gap-4 border-t border-black/12 py-8 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-3">
                  <span className="eyebrow text-muted">{e.period}</span>
                </div>
                <div className="md:col-span-5">
                  <h3 className="t-h3">{e[lang].role}</h3>
                  <p className="eyebrow mt-2">{e.org}</p>
                </div>
                <p className="t-body text-muted md:col-span-4 max-w-[42ch]">
                  {e[lang].text}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
