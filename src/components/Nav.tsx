"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLang } from "@/lib/i18n";
import { copy, contacts } from "@/lib/content";

const GLIDE = [0.19, 1, 0.22, 1] as const;

function useNavTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-nav]")
    );
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const v = (e.target as HTMLElement).dataset.nav;
            if (v === "light" || v === "dark") setTheme(v);
          }
        });
      },
      { rootMargin: "-24px 0px -94% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  return theme;
}

export default function Nav() {
  const { lang, setLang } = useLang();
  const t = copy[lang];
  const theme = useNavTheme();
  const [open, setOpen] = useState(false);
  const fg = theme === "light" ? "#ffffff" : "#000000";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "#work", label: t.nav.work },
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#contact", label: t.nav.contact },
  ];

  const name = lang === "ru" ? "Артём Яковлев" : "Artem Yakovlev";

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-50"
        style={{ height: "var(--nav-h)", color: fg, transition: "color 0.6s var(--ease-glide)" }}
      >
        <div className="wrap flex h-full items-center justify-between">
          <a href="#top" className="nav-link" style={{ fontSize: 13, letterSpacing: "0.02em" }}>
            {name}
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <div className="flex items-center gap-2" style={{ fontSize: 12 }}>
              {(["ru", "en"] as const).map((l, i) => (
                <span key={l} className="flex items-center gap-2">
                  {i === 1 && <span style={{ opacity: 0.4 }}>/</span>}
                  <button
                    onClick={() => setLang(l)}
                    className="nav-link"
                    style={{ opacity: lang === l ? 1 : 0.45, textTransform: "uppercase" }}
                  >
                    {l}
                  </button>
                </span>
              ))}
            </div>
            <a href={contacts.cv} target="_blank" rel="noopener" className="pill pill--tag">
              <span>{t.cv}</span>
            </a>
          </div>

          {/* mobile burger */}
          <button
            className="flex flex-col gap-[5px] md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            style={{ width: 26, color: fg }}
          >
            <span
              style={{
                height: 1.5, background: "currentColor",
                transition: "transform .5s var(--ease-glide)",
                transform: open ? "translateY(6.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                height: 1.5, background: "currentColor", opacity: open ? 0 : 1,
                transition: "opacity .3s",
              }}
            />
            <span
              style={{
                height: 1.5, background: "currentColor",
                transition: "transform .5s var(--ease-glide)",
                transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="section-dark fixed inset-0 z-40 flex flex-col md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: GLIDE }}
            style={{ background: "var(--color-obsidian)", color: "#fff" }}
          >
            <div className="wrap flex flex-1 flex-col justify-center gap-2 pt-20">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="t-anchor"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.07, duration: 0.7, ease: GLIDE }}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
            <div className="wrap flex items-center justify-between pb-10">
              <div className="flex items-center gap-3 eyebrow">
                {(["ru", "en"] as const).map((l, i) => (
                  <span key={l} className="flex items-center gap-3">
                    {i === 1 && <span style={{ opacity: 0.4 }}>/</span>}
                    <button
                      onClick={() => setLang(l)}
                      style={{ opacity: lang === l ? 1 : 0.45 }}
                    >
                      {l.toUpperCase()}
                    </button>
                  </span>
                ))}
              </div>
              <a
                href={contacts.cv}
                target="_blank"
                rel="noopener"
                onClick={() => setOpen(false)}
                className="pill pill--tag"
              >
                <span>{t.cv}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
