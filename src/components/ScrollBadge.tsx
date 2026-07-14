"use client";

import { useLang } from "@/lib/i18n";

export default function ScrollBadge() {
  const { lang } = useLang();
  const text =
    lang === "ru"
      ? "ЛИСТАЙ ВНИЗ · ЛИСТАЙ ВНИЗ · "
      : "SCROLL DOWN · SCROLL DOWN · ";

  return (
    <a
      href="#work"
      aria-label={lang === "ru" ? "Листай вниз" : "Scroll down"}
      className="relative grid h-[92px] w-[92px] place-items-center"
    >
      <svg viewBox="0 0 100 100" className="spin-slow h-full w-full">
        <defs>
          <path
            id="badge-circle"
            d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
          />
        </defs>
        <text
          fill="currentColor"
          style={{ fontSize: 9, letterSpacing: "0.18em", fontWeight: 500 }}
        >
          <textPath href="#badge-circle" startOffset="0">
            {text}
          </textPath>
        </text>
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="absolute"
      >
        <path d="M12 5v14M6 13l6 6 6-6" />
      </svg>
    </a>
  );
}
