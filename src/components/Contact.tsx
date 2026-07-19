"use client";

import { useLang } from "@/lib/i18n";
import { copy, contacts } from "@/lib/content";
import { LineReveal, Reveal } from "./Reveal";

export default function Contact() {
  const { lang } = useLang();
  const t = copy[lang].contact;
  const f = copy[lang].footer;
  const name = lang === "ru" ? "Артём Яковлев" : "Artem Yakovlev";
  const year = new Date().getFullYear();

  const channels = [
    { label: "Behance", value: "behance.net", href: contacts.behance },
    { label: "GitHub", value: "ykvlev", href: contacts.github },
    { label: "Telegram", value: contacts.telegramHandle, href: contacts.telegram },
    { label: lang === "ru" ? "Сайт" : "Website", value: contacts.siteDisplay, href: contacts.site },
  ];

  return (
    <section
      id="contact"
      data-nav="light"
      className="section-dark section relative overflow-hidden"
      style={{ color: "#fff" }}
    >
      <div className="wrap relative z-10">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="eyebrow" style={{ opacity: 0.55 }}>
              {t.label}
            </span>
            <span className="rule flex-1" style={{ background: "rgba(255,255,255,0.18)" }} />
          </div>
        </Reveal>

        <h2 className="t-anchor mt-12 max-w-[18ch]">
          <LineReveal text={t.heading} />
        </h2>

        <Reveal delay={0.1}>
          <p className="t-body-lg mt-8 max-w-[46ch]" style={{ color: "rgba(255,255,255,0.75)" }}>
            {t.body}
          </p>
        </Reveal>

        {/* email statement */}
        <Reveal delay={0.15}>
          <a
            href={`mailto:${contacts.email}`}
            className="group mt-14 block"
            data-cursor="view"
          >
            <span className="eyebrow" style={{ opacity: 0.5 }}>
              {t.emailLabel}
            </span>
            <span className="t-heading mt-3 block break-words" style={{ fontWeight: 400 }}>
              {contacts.email}
            </span>
          </a>
        </Reveal>

        {/* phone + channels */}
        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-white/15 pt-12 md:grid-cols-4">
          <div>
            <div className="eyebrow" style={{ opacity: 0.5 }}>
              {t.phoneLabel}
            </div>
            <a href={contacts.phoneHref} className="t-h3 mt-3 block nav-link">
              {contacts.phoneDisplay}
            </a>
          </div>
          {channels.map((c) => (
            <div key={c.label}>
              <div className="eyebrow" style={{ opacity: 0.5 }}>
                {c.label}
              </div>
              <a
                href={c.href}
                target="_blank"
                rel="noopener"
                className="t-h3 mt-3 block nav-link"
              >
                {c.value}
              </a>
            </div>
          ))}
        </div>

        {/* footer rail */}
        <div className="mt-28 flex flex-col gap-6 border-t border-white/15 pt-8 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <div className="t-caption" style={{ color: "rgba(255,255,255,0.9)" }}>
              {name}
            </div>
            <div className="t-caption text-muted">{f.role}</div>
            <div className="t-caption text-muted">{f.city}</div>
          </div>
          <div className="flex items-end gap-8">
            <a href="#top" className="nav-link t-caption">
              ↑ {lang === "ru" ? "Наверх" : "Top"}
            </a>
            <div className="space-y-1 text-right">
              <div className="t-caption text-muted">© {year} · {name}</div>
              <div className="t-caption text-muted">{f.built}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
