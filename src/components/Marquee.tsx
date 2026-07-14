"use client";

import { useLang } from "@/lib/i18n";
import { marquee } from "@/lib/content";
import { Reveal } from "./Reveal";

export default function Marquee() {
  const { lang } = useLang();
  const seq = [...marquee.items, ...marquee.items];

  return (
    <section data-nav="dark" className="marquee-section">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow text-muted">{marquee.label[lang]}</span>
        </Reveal>
      </div>
      <div className="marquee-viewport mt-6" aria-hidden>
        <div className="marquee-track">
          {seq.map((item, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
