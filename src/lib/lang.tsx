import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Lang } from "@/lib/translations";

const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "en", setLang: () => {} });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => {
    const saved = localStorage.getItem("tm-lang");
    if (saved === "en" || saved === "es") setLang(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("tm-lang", lang);
  }, [lang]);
  return <Ctx.Provider value={{ lang, setLang }}>{children}</Ctx.Provider>;
}

export function useLang() {
  const { lang, setLang } = useContext(Ctx);
  return { lang, setLang, t: translations[lang] };
}
