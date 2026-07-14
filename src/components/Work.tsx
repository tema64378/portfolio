"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup } from "motion/react";
import { useLang } from "@/lib/i18n";
import {
  copy,
  projects,
  filterLabels,
  type FilterKey,
  type Project,
} from "@/lib/content";
import { Reveal } from "./Reveal";
import ProjectRow from "./ProjectRow";
import ProjectOverlay from "./ProjectOverlay";

type Filter = FilterKey | "all";
const FILTERS: Filter[] = ["all", "brand", "screens", "graphic", "social", "dev"];

export default function Work() {
  const { lang } = useLang();
  const t = copy[lang].work;
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<Project | null>(null);
  // slug of the card the overlay was opened from — drives the shared-element morph
  const [morphSlug, setMorphSlug] = useState<string | null>(null);

  const openProject = (p: Project) => {
    setMorphSlug(p.slug);
    setActive(p);
  };

  const list = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((p) => p.filters.includes(filter)),
    [filter]
  );

  // overlay leafs through design projects only (dev cards link out)
  const designList = useMemo(
    () => projects.filter((p) => p.kind === "design"),
    []
  );

  return (
    <section id="work" data-nav="dark" className="section">
      <div className="wrap">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="eyebrow text-muted">{t.label}</span>
            <span className="rule flex-1" />
          </div>
        </Reveal>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <h2 className="t-anchor">{t.heading}</h2>
          <p className="t-body text-muted max-w-[40ch]">{t.note}</p>
        </div>

        {/* filters */}
        <div className="mt-10 flex flex-wrap gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="pill pill--tag"
              data-active={filter === f}
            >
              <span>{filterLabels[f][lang]}</span>
            </button>
          ))}
        </div>

        {/* rows */}
        <LayoutGroup>
          <div className="mt-16 flex flex-col gap-20 md:gap-28">
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => (
                <ProjectRow
                  key={p.slug}
                  project={p}
                  index={i}
                  onOpen={openProject}
                />
              ))}
            </AnimatePresence>
          </div>

          <ProjectOverlay
            project={active}
            list={designList}
            morphSlug={morphSlug}
            onNavigate={setActive}
            onClose={() => setActive(null)}
          />
        </LayoutGroup>
      </div>
    </section>
  );
}
