import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Menu, X, Check, Clock, HelpCircle, BarChart3, CalendarDays, Camera, Target, Languages, FileBarChart, Mail, Instagram, ImageIcon } from "lucide-react";
import { translations, type Lang } from "@/lib/translations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tell More Marketing — Social media for Texas driving schools" },
      { name: "description", content: "We run social media for Texas driving schools so more students find you, trust you and book. Free audit." },
      { property: "og:title", content: "Tell More Marketing — Social media for Texas driving schools" },
      { property: "og:description", content: "You teach driving. We fill your schedule. Bilingual content, lead ads and clear monthly results." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const Arrow = () => <span aria-hidden="true" className="ml-1 inline-block">↗</span>;

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-1 font-display text-xl font-bold text-foreground">
      Tell More<span className="text-primary">↗</span>
      <span className="sr-only">Tell More Marketing home</span>
    </a>
  );
}

const btn = "inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function Section({ id, eyebrow, title, children, soft }: { id: string; eyebrow: string; title: string; children: ReactNode; soft?: boolean }) {
  return (
    <section id={id} className={`px-5 py-20 md:py-28 ${soft ? "bg-soft" : ""}`}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
          <h2 className="mt-2 max-w-2xl text-3xl md:text-4xl">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

const team = ["Arya Balak", "Zack Morissette", "Lilou Petit", "Igne Spulyte", "Niko Hrenar", "Clémence Auboiroux"];
const serviceIcons = [CalendarDays, Camera, Target, Languages, FileBarChart];
const problemIcons = [Clock, HelpCircle, BarChart3];

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const [open, setOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const saved = localStorage.getItem("tm-lang");
    if (saved === "en" || saved === "es") setLang(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("tm-lang", lang);
  }, [lang]);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const links = [
    ["services", t.nav.services], ["how", t.nav.how], ["work", t.nav.work], ["team", t.nav.team], ["contact", t.nav.contact],
  ] as const;

  const Toggle = () => (
    <div className="flex items-center rounded-lg border border-border text-sm font-semibold" role="group" aria-label="Language">
      {(["en", "es"] as const).map((l) => (
        <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
          className={`rounded-lg px-3 py-1.5 ${lang === l ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"}`}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <Logo />
          <ul className="hidden items-center gap-7 text-sm font-medium lg:flex">
            {links.map(([id, label]) => <li key={id}><a href={`#${id}`} className="hover:text-primary">{label}</a></li>)}
          </ul>
          <div className="hidden items-center gap-3 lg:flex">
            <Toggle />
            <a href="#contact" className={`${btn} py-2 text-sm`}>{t.nav.cta}<Arrow /></a>
          </div>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? t.nav.close : t.nav.menu}>
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <div className="border-t border-border px-5 pb-6 lg:hidden">
            <ul className="flex flex-col gap-1 py-3">
              {links.map(([id, label]) => (
                <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-2 font-medium">{label}</a></li>
              ))}
            </ul>
            <div className="flex items-center justify-between gap-3">
              <Toggle />
              <a href="#contact" onClick={() => setOpen(false)} className={`${btn} py-2 text-sm`}>{t.nav.cta}<Arrow /></a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="px-5 pb-16 pt-16 md:pb-24 md:pt-28">
          <Reveal className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl leading-tight md:text-6xl">{t.hero.title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{t.hero.sub}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#contact" className={btn}>{t.hero.cta}<Arrow /></a>
              <a href="#how" className="font-semibold text-primary hover:underline">{t.hero.secondary}<Arrow /></a>
            </div>
            <ul className="mt-10 flex flex-col items-center justify-center gap-3 text-sm font-medium sm:flex-row sm:gap-8">
              {t.hero.points.map((p) => (
                <li key={p} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" aria-hidden />{p}</li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section className="bg-soft px-5 py-14" aria-label="Problems">
          <Reveal className="mx-auto max-w-5xl">
            <ul className="grid gap-6 md:grid-cols-3">
              {t.problems.items.map((p, i) => {
                const I = problemIcons[i];
                return (
                  <li key={p} className="flex items-center gap-3 font-medium">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-card text-primary"><I className="h-5 w-5" aria-hidden /></span>{p}
                  </li>
                );
              })}
            </ul>
            <p className="mt-8 text-center font-display text-xl font-bold">{t.problems.line}</p>
          </Reveal>
        </section>

        <Section id="services" eyebrow={t.services.eyebrow} title={t.services.title}>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((s, i) => {
              const I = serviceIcons[i];
              return (
                <Reveal key={s.t} className="rounded-xl bg-card p-6 shadow-card">
                  <I className="h-7 w-7 text-primary" strokeWidth={1.6} aria-hidden />
                  <h3 className="mt-4 text-lg">{s.t}</h3>
                  <p className="mt-2 text-muted-foreground">{s.d}</p>
                </Reveal>
              );
            })}
          </div>
        </Section>

        <Section id="how" eyebrow={t.how.eyebrow} title={t.how.title} soft>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {t.how.steps.map((s, i) => (
              <Reveal key={s.t} className="rounded-xl bg-card p-6 shadow-card">
                <span className="font-display text-4xl font-bold text-primary">{i + 1}</span>
                <h3 className="mt-3 text-lg">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </Reveal>
            ))}
          </ol>
        </Section>

        <Section id="work" eyebrow={t.work.eyebrow} title={t.work.title}>
          <p className="mt-2 text-sm text-muted-foreground">{t.work.note}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {t.work.items.map((w) => (
              <Reveal key={w.t} className="overflow-hidden rounded-xl bg-card shadow-card">
                <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 bg-soft text-muted-foreground" role="img" aria-label={t.work.img}>
                  <ImageIcon className="h-8 w-8" aria-hidden /><span className="text-xs">{t.work.img}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg">{w.t}</h3>
                  <p className="mt-3 text-sm"><span className="font-semibold">{t.work.problem}:</span> <span className="text-muted-foreground">{w.p}</span></p>
                  <p className="mt-1 text-sm"><span className="font-semibold text-primary">{t.work.idea}<Arrow /></span> {w.i}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="team" eyebrow={t.team.eyebrow} title={t.team.title} soft>
          <p className="mt-4 max-w-2xl text-muted-foreground">{t.team.intro}</p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((n, i) => (
              <Reveal key={n} className="flex items-center gap-4 rounded-xl bg-card p-5 shadow-card">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground" aria-hidden>
                  {n.split(" ").map((x) => x[0]).join("")}
                </span>
                <div><p className="font-display font-bold">{n}</p><p className="text-sm text-muted-foreground">{t.team.roles[i]}</p></div>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow={t.contact.eyebrow} title={t.contact.title}>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_2fr]">
            <Reveal>
              <p className="text-muted-foreground">{t.contact.sub}</p>
              <p className="mt-8 font-semibold">{t.contact.reach}</p>
              <ul className="mt-3 space-y-3">
                <li><a href="mailto:hello@tellmoremarketing.com" className="flex items-center gap-2 text-primary hover:underline"><Mail className="h-4 w-4" aria-hidden />hello@tellmoremarketing.com</a></li>
                <li><a href="https://instagram.com/tellmoremarketing" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary hover:underline"><Instagram className="h-4 w-4" aria-hidden />@tellmoremarketing</a></li>
              </ul>
            </Reveal>
            <ContactForm lang={lang} />
          </div>
        </Section>
      </main>

      <footer className="border-t border-border px-5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
          <Logo />
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
            <li><a href="https://tellmoremarketing.com" className="hover:text-foreground">tellmoremarketing.com</a></li>
            <li><a href="https://instagram.com/tellmoremarketing" target="_blank" rel="noreferrer" className="hover:text-foreground">Instagram<Arrow /></a></li>
            <li><a href="#" className="hover:text-foreground">{t.footer.privacy}</a></li>
            <li><a href="#" className="hover:text-foreground">{t.footer.terms}</a></li>
          </ul>
          <p className="text-muted-foreground">{t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
}

type Field = "name" | "school" | "city" | "email" | "phone" | "social" | "message";
const fields: { k: Field; req: boolean; type?: string; area?: boolean }[] = [
  { k: "name", req: true }, { k: "school", req: true }, { k: "city", req: true }, { k: "email", req: true, type: "email" },
  { k: "phone", req: false, type: "tel" }, { k: "social", req: false, type: "url" }, { k: "message", req: true, area: true },
];

function ContactForm({ lang }: { lang: Lang }) {
  const t = translations[lang].contact;
  const [v, setV] = useState<Record<Field, string>>({ name: "", school: "", city: "", email: "", phone: "", social: "", message: "" });
  const [err, setErr] = useState<Partial<Record<Field, string>>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const n: Partial<Record<Field, string>> = {};
    fields.forEach(({ k, req }) => { if (req && !v[k].trim()) n[k] = t.required; });
    if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) n.email = t.badEmail;
    if (v.social && !/^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/\S*)?$/i.test(v.social.trim())) n.social = t.badUrl;
    setErr(n);
    if (Object.keys(n).length === 0) setSent(true);
  };

  if (sent) {
    return <div role="status" className="flex items-center gap-3 rounded-xl bg-soft p-8 font-display text-xl font-bold"><Check className="h-6 w-6 text-primary" aria-hidden />{t.thanks}</div>;
  }

  const input = "mt-1 w-full rounded-xl border border-input bg-card px-4 py-3 outline-none focus:border-primary";
  return (
    <form onSubmit={submit} noValidate className="grid gap-4 rounded-xl bg-card p-6 shadow-card sm:grid-cols-2 md:p-8">
      {fields.map(({ k, type, area }) => (
        <div key={k} className={area || k === "social" ? "sm:col-span-2" : ""}>
          <label htmlFor={k} className="text-sm font-medium">{t[k]}</label>
          {area ? (
            <textarea id={k} rows={4} value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} aria-invalid={!!err[k]} aria-describedby={err[k] ? `${k}-err` : undefined} className={input} />
          ) : (
            <input id={k} type={type ?? "text"} value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} aria-invalid={!!err[k]} aria-describedby={err[k] ? `${k}-err` : undefined} className={input} />
          )}
          {err[k] && <p id={`${k}-err`} className="mt-1 text-sm text-destructive">{err[k]}</p>}
        </div>
      ))}
      <div className="sm:col-span-2"><button type="submit" className={btn}>{t.send}<Arrow /></button></div>
    </form>
  );
}
