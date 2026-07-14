"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useLang } from "@/lib/i18n";
import { copy, type Project } from "@/lib/content";
import { Reveal } from "./Reveal";

export default function ProjectRow({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (p: Project) => void;
}) {
  const { lang } = useLang();
  const t = project[lang];
  const view = copy[lang].work.view;
  const flip = index % 2 === 1;
  const isDev = project.kind === "dev";

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="group grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10"
    >
      {/* visual column */}
      <div
        ref={ref}
        onClick={() => (isDev ? undefined : onOpen(project))}
        data-cursor={isDev ? undefined : "view"}
        className={`md:col-span-7 ${flip ? "md:order-2" : "md:order-1"} ${
          isDev ? "" : "cursor-pointer"
        }`}
      >
        {isDev ? (
          <DevPanel project={project} />
        ) : (
          <motion.div
            layoutId={`cover-${project.slug}`}
            className="media relative aspect-[4/3] w-full overflow-hidden"
          >
            <motion.div className="absolute inset-[-8%]" style={{ y }}>
              <Image
                src={project.cover as string}
                alt={t.title}
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* meta */}
      <div className={`md:col-span-5 ${flip ? "md:order-1" : "md:order-2"}`}>
        <Reveal>
          <div className="flex items-baseline justify-between">
            <span className="eyebrow text-muted">{num}</span>
            <span className="eyebrow text-muted">
              {isDev ? (lang === "ru" ? "Разработка" : "Dev") : project.year}
            </span>
          </div>
          <h3
            className={`t-subheading mt-4 ${isDev ? "" : "cursor-pointer"}`}
            onClick={() => (isDev ? undefined : onOpen(project))}
            data-cursor={isDev ? undefined : "view"}
          >
            {t.title}
          </h3>
          <p className="eyebrow mt-3">{t.category}</p>
          <p className="t-body text-muted mt-5 max-w-[42ch]">{t.description}</p>

          {isDev ? (
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener"
                  className="pill pill--tag"
                >
                  <span>{lang === "ru" ? "Открыть ↗" : "Live ↗"}</span>
                </a>
              )}
              {project.links?.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener"
                  className="nav-link"
                  style={{ fontSize: 13 }}
                >
                  GitHub →
                </a>
              )}
            </div>
          ) : (
            <button
              onClick={() => onOpen(project)}
              className="mt-7 inline-flex items-center gap-2 nav-link"
              style={{ fontSize: 13 }}
            >
              {view}
              <span aria-hidden>→</span>
            </button>
          )}
        </Reveal>
      </div>
    </motion.article>
  );
}

/* Dev projects have no imagery — a sharp mono panel keeps the editorial rhythm.
   Hovering a project with a live demo lazily loads it as a background preview. */
function DevPanel({ project }: { project: Project }) {
  const { lang } = useLang();
  const t = project[lang];
  const live = project.links?.live;
  const [mounted, setMounted] = useState(false);

  return (
    <div
      className={`dev-panel relative aspect-[4/3] w-full overflow-hidden ${
        live ? "dev-panel--live" : ""
      }`}
      onMouseEnter={() => live && setMounted(true)}
    >
      <span className="dev-panel__glow" aria-hidden />
      {live && mounted && (
        <span className="dev-live" aria-hidden>
          <iframe
            src={live}
            title=""
            tabIndex={-1}
            loading="lazy"
            scrolling="no"
            sandbox="allow-scripts allow-same-origin"
          />
        </span>
      )}
      <div className="relative z-10 flex h-full flex-col justify-between p-7 md:p-9">
        <div className="flex items-center justify-between">
          <span className="dev-mono">~/ {project.slug}</span>
          <span className="dev-mono">{project.year}</span>
        </div>
        <h4 className="dev-panel__title">{t.title}</h4>
        <div className="flex flex-wrap gap-2">
          {project.stack?.map((s) => (
            <span key={s} className="dev-chip">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
