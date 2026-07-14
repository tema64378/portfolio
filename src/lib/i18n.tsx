"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "ru" | "en";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void };

const LangContext = createContext<Ctx>({
  lang: "ru",
  setLang: () => {},
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    const saved = (typeof window !== "undefined" &&
      window.localStorage.getItem("lang")) as Lang | null;
    if (saved === "ru" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", l);
      document.documentElement.lang = l;
    }
  };

  const toggle = () => setLang(lang === "ru" ? "en" : "ru");

  return (
    <LangContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
