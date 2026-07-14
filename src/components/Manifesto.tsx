"use client";

import { useLang } from "@/lib/i18n";
import { copy } from "@/lib/content";
import { LineReveal, Reveal } from "./Reveal";

export default function Manifesto() {
  const { lang } = useLang();
  const t = copy[lang].manifesto;

  return (
    <section data-nav="dark" className="section">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Reveal>
              <span className="eyebrow text-muted">✳ 2023 — ∞</span>
            </Reveal>
          </div>
          <div className="md:col-span-9">
            <h2 className="t-heading">
              <LineReveal text={t.quote} />
            </h2>
            <Reveal delay={0.15}>
              <p className="t-body-lg text-muted mt-8 max-w-[46ch]">{t.sub}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
