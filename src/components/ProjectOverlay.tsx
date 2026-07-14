"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useLang } from "@/lib/i18n";
import { studies, type Project } from "@/lib/content";
import { lenisRef } from "@/lib/lenisRef";

const GLIDE = [0.19, 1, 0.22, 1] as const;

export default function ProjectOverlay({
  project,
  list,
  morphSlug,
  onNavigate,
  onClose,
}: {
  project: Project | null;
  list: Project[];
  morphSlug: string | null;
  onNavigate: (p: Project) => void;
  onClose: () => void;
}) {
  const { lang } = useLang();
  const scrollRef = useRef<HTMLDivElement>(null);

  const idx = project ? list.findIndex((p) => p.slug === project.slug) : -1;
  const prev = idx >= 0 ? list[(idx - 1 + list.length) % list.length] : null;
  const next = idx >= 0 ? list[(idx + 1) % list.length] : null;
  const useMorph = !!project && project.slug === morphSlug;

  // reset scroll to top whenever the shown project changes
  useEffect(() => {
    if (project && scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [project?.slug]);

  // pause Lenis + lock body while open; arrow keys leaf through projects
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && next) onNavigate(next);
      if (e.key === "ArrowLeft" && prev) onNavigate(prev);
    };
    document.addEventListener("keydown", onKey);

    if (project) {
      lenisRef.current?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenisRef.current?.start();
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      lenisRef.current?.start();
      document.body.style.overflow = "";
    };
  }, [project, prev, next, onClose, onNavigate]);

  const L = {
    close: lang === "ru" ? "Закрыть" : "Close",
    role: lang === "ru" ? "Роль" : "Role",
    challenge: lang === "ru" ? "Задача" : "Challenge",
    solution: lang === "ru" ? "Решение" : "Solution",
    result: lang === "ru" ? "Результат" : "Result",
    prev: lang === "ru" ? "Предыдущий" : "Previous",
    next: lang === "ru" ? "Следующий" : "Next",
    hint: lang === "ru" ? "← → листать · Esc закрыть" : "← → to leaf · Esc to close",
  };

  const study = project ? studies[project.slug] : undefined;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="section-dark fixed inset-0 z-[70]"
          style={{ background: "var(--color-obsidian)", color: "#fff" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: GLIDE }}
        >
          <div
            ref={scrollRef}
            data-lenis-prevent
            className="h-full overflow-y-auto hide-scrollbar"
          >
            {/* sticky bar */}
            <div
              className="sticky top-0 z-10"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.92) 40%, rgba(0,0,0,0))",
              }}
            >
              <div className="wrap flex items-center justify-between py-5">
                <span className="eyebrow" style={{ opacity: 0.6 }}>
                  {String(idx + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
                </span>
                <div className="flex items-center gap-3">
                  <button onClick={() => prev && onNavigate(prev)} aria-label={L.prev} className="nav-arrow">
                    ←
                  </button>
                  <button onClick={() => next && onNavigate(next)} aria-label={L.next} className="nav-arrow">
                    →
                  </button>
                  <button
                    onClick={onClose}
                    className="pill pill--invert pill--tag"
                    style={{ borderColor: "rgba(255,255,255,0.4)" }}
                  >
                    <span>{L.close} ✕</span>
                  </button>
                </div>
              </div>
            </div>

            {/* hero cover — morphs out of the clicked card */}
            {project.cover && (
              <div className="wrap -mt-2">
                <motion.div
                  layoutId={useMorph ? `cover-${project.slug}` : undefined}
                  className="media relative w-full overflow-hidden"
                  style={{ aspectRatio: "16 / 9" }}
                  initial={useMorph ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, ease: GLIDE }}
                >
                  <Image
                    src={project.cover}
                    alt={project[lang].title}
                    fill
                    sizes="(max-width: 900px) 100vw, 1100px"
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>
            )}

            {/* body — re-animates on each project change */}
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: GLIDE, delay: useMorph ? 0.12 : 0 }}
              className="wrap pb-28 pt-12"
            >
              <span className="eyebrow" style={{ opacity: 0.55 }}>
                {project[lang].category} · {project.year}
              </span>
              <h2 className="t-anchor mt-5 max-w-[16ch]">{project[lang].title}</h2>

              <div className="mt-8 flex flex-col gap-6 border-t border-white/15 pt-8 md:flex-row md:items-start md:justify-between">
                <p className="t-body-lg max-w-[52ch]" style={{ color: "rgba(255,255,255,0.82)" }}>
                  {project[lang].description}
                </p>
                <span className="eyebrow flex-shrink-0" style={{ opacity: 0.6 }}>
                  {project[lang].place}
                </span>
              </div>

              {study && (
                <>
                  <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/15 pt-10 md:grid-cols-4">
                    <Fact label={L.role} value={study.role[lang]} />
                    {study.metrics.map((m) => (
                      <Fact key={m.value} label={m[lang]} value={m.value} />
                    ))}
                  </div>

                  <div className="mt-16 grid grid-cols-1 gap-y-12 md:grid-cols-12 md:gap-x-8">
                    <Block no="01" label={L.challenge} text={study.challenge[lang]} />
                    <Block no="02" label={L.solution} text={study.solution[lang]} />
                    <Block no="03" label={L.result} text={study.result[lang]} />
                  </div>
                </>
              )}

              {/* gallery (cover already shown as hero) */}
              {(project.gallery?.length ?? 0) > 0 && (
                <div className="mt-16 flex flex-col gap-5 sm:gap-8">
                  {project.gallery!.map((src, i) => (
                    <motion.div
                      key={src}
                      className="media relative w-full"
                      style={{ aspectRatio: "16 / 10" }}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-8% 0px" }}
                      transition={{ duration: 0.9, ease: GLIDE }}
                    >
                      <Image
                        src={src}
                        alt={`${project[lang].title} — ${i + 1}`}
                        fill
                        sizes="(max-width: 900px) 100vw, 1100px"
                        className="object-contain"
                        style={{ background: "#0b0b0b" }}
                      />
                    </motion.div>
                  ))}
                </div>
              )}

              {next && (
                <button
                  onClick={() => onNavigate(next)}
                  className="group mt-24 block w-full border-t border-white/15 pt-10 text-left"
                >
                  <span className="eyebrow" style={{ opacity: 0.5 }}>
                    {L.next} →
                  </span>
                  <span className="t-heading mt-3 block" style={{ fontWeight: 400 }}>
                    {next[lang].title}
                  </span>
                </button>
              )}

              <p className="eyebrow mt-14" style={{ opacity: 0.4 }}>
                {L.hint}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="t-h3" style={{ fontWeight: 400 }}>
        {value}
      </div>
      <div className="eyebrow mt-2" style={{ opacity: 0.55 }}>
        {label}
      </div>
    </div>
  );
}

function Block({ no, label, text }: { no: string; label: string; text: string }) {
  return (
    <div className="md:col-span-4">
      <div className="flex items-baseline gap-3">
        <span className="eyebrow" style={{ opacity: 0.4 }}>
          {no}
        </span>
        <span className="eyebrow">{label}</span>
      </div>
      <p className="t-body mt-4" style={{ color: "rgba(255,255,255,0.82)" }}>
        {text}
      </p>
    </div>
  );
}
