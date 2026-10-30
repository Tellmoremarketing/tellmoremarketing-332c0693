import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Menu, X, Check, Mail, Instagram } from "lucide-react";
import { useLang } from "@/lib/lang";

export const Arrow = () => <span aria-hidden="true" className="ml-1 inline-block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>;
export const btn = "group inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-all hover:bg-primary-hover ";
export const btnPop = "group inline-flex items-center justify-center rounded-full bg-pop px-6 py-3.5 font-semibold text-pop-foreground transition-all hover:brightness-95";

export function Reveal({ children, className = "", as: As = "div" }: { children: ReactNode; className?: string; as?: "div" | "li" }) {
  return <As className={`reveal in ${className}`}>{children}</As>;
}

export const navLinks = [
  { to: "/services", k: "services" },
  { to: "/how-it-works", k: "how" },
  { to: "/team", k: "team" },
  { to: "/contact", k: "contact" },
] as const;

function Toggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center rounded-full border border-border p-0.5 text-sm font-bold" role="group" aria-label="Language">
      {(["en", "es"] as const).map((l) => (
        <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
          className={`rounded-full px-3 py-1 ${lang === l ? "bg-foreground text-background" : "text-foreground"}`}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function Logo() {
  return (
    <Link to="/" className="relative block w-36 shrink-0 overflow-hidden sm:w-40" style={{ aspectRatio: "770 / 300" }} aria-label="Tell More Marketing home">
      <img src="/brand/tell-more-logo.jpg" alt="Tell More Marketing" width={1034} height={792}
        className="absolute h-auto max-w-none"
        style={{ width: "134.3%", left: "-10.4%", top: "-86.7%" }}
        fetchPriority="high" />
    </Link>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.1 });
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname, lang]);

  const linkCls = "relative font-semibold after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full";

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 py-4">
          <Logo />
          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className={linkCls} activeProps={{ className: "text-primary after:w-full" }}>{t.nav[l.k]}</Link></li>
            ))}
          </ul>
          <div className="hidden items-center gap-3 lg:flex">
            <Toggle />
            <Link to="/contact" className={`${btn} py-2.5 text-sm`}>{t.nav.cta}<Arrow /></Link>
          </div>
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? t.nav.close : t.nav.menu}>
            {open ? <X /> : <Menu />}
          </button>
        </nav>
        {open && (
          <div className="border-t border-border bg-background px-5 pb-8 lg:hidden">
            <ul className="flex flex-col py-4">
              {navLinks.map((l) => (
                <li key={l.to}><Link to={l.to} className="block py-2 font-display text-4xl font-bold" activeProps={{ className: "text-primary" }}>{t.nav[l.k]}</Link></li>
              ))}
            </ul>
            <div className="flex items-center justify-between gap-3">
              <Toggle />
              <Link to="/contact" className={`${btn} py-2.5 text-sm`}>{t.nav.cta}<Arrow /></Link>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className="bg-foreground px-5 pb-10 pt-20 text-background">
        <div className="mx-auto max-w-7xl">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-pop">{t.extra.footerKicker}</p>
          <Link to="/contact" className="group mt-4 block font-display text-4xl font-bold leading-tight transition-colors hover:text-pop md:text-6xl">
            {t.extra.footerBig}<Arrow />
          </Link>
          <div className="mt-16 grid gap-10 border-t border-background/20 pt-10 md:grid-cols-3">
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-pop">{t.extra.home}</Link></li>
              {navLinks.map((l) => <li key={l.to}><Link to={l.to} className="hover:text-pop">{t.nav[l.k]}</Link></li>)}
              <li><Link to="/free-resources" className="hover:text-pop">{lang === "es" ? "Recursos gratis" : "Free resources"}</Link></li>
              <li><Link to="/get-more-driving-school-students" className="hover:text-pop">{lang === "es" ? "Guía gratis" : "Free guide"}</Link></li>
            </ul>
            <ul className="space-y-2">
              <li><a href="mailto:tellmoremarketing@gmail.com" className="flex items-center gap-2 hover:text-pop"><Mail className="h-4 w-4" aria-hidden />tellmoremarketing@gmail.com</a></li>
              <li><a href="https://instagram.com/tellmoremarketing" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-pop"><Instagram className="h-4 w-4" aria-hidden />@tellmoremarketing</a></li>
            </ul>
            <p className="text-background/60 md:text-right">{t.footer.rights}<br />tellmoremarketing.com<br /><span className="mt-3 inline-block">Made with love in Barcelona</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <section className="relative px-5 pb-12 pt-16 md:pb-16 md:pt-24">
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-widest text-primary">{eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-4xl leading-tight md:text-6xl">{title}</h1>
          {sub && <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">{sub}</p>}
        </Reveal>
      </div>
    </section>
  );
}

export function Marquee({ items }: { items: readonly string[] }) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y-2 border-foreground bg-pop py-4 text-pop-foreground" aria-hidden>
      <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl font-bold uppercase md:text-4xl">
        {row.map((x, i) => <span key={i} className="flex items-center gap-10">{x}<span className="text-primary">✦</span></span>)}
      </div>
    </div>
  );
}

export function CtaBand() {
  const { t } = useLang();
  return (
    <section className="px-5 py-20">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-8 py-16 text-primary-foreground md:px-16 md:py-24">
        <h2 className="relative max-w-3xl text-3xl leading-tight md:text-5xl">{t.contact.title}</h2>
        <p className="relative mt-6 max-w-xl text-lg opacity-90">{t.contact.sub}</p>
        <Link to="/contact" className={`${btnPop} relative mt-10`}>{t.nav.cta}<Arrow /></Link>
      </Reveal>
    </section>
  );
}

type Field = "school" | "email" | "message";
const fields: { k: Field; req: boolean; type?: string; area?: boolean }[] = [
  { k: "school", req: true },
  { k: "email", req: true, type: "email" },
  { k: "message", req: false, area: true },
];

export function ContactForm() {
  const t = useLang().t.contact;
  const [v, setV] = useState<Record<Field, string>>({ school: "", email: "", message: "" });
  const [err, setErr] = useState<Partial<Record<Field, string>>>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    const form = e.currentTarget;
    const n: Partial<Record<Field, string>> = {};
    fields.forEach(({ k, req }) => { if (req && !v[k].trim()) n[k] = t.required; });
    if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) n.email = t.badEmail;
    setErr(n);
    if (Object.keys(n).length > 0) return;
    setSubmitError(false);
    setSending(true);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 30000);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          school: v.school.trim(),
          email: v.email.trim(),
          message: v.message.trim(),
          _honey: new FormData(form).get("_honey") ?? "",
        }),
      });
      const result = await response.json();
      if (!response.ok || (result.success !== true && result.success !== "true")) {
        throw new Error("Form submission was not accepted");
      }
      setSent(true);
    } catch {
      setSubmitError(true);
    } finally {
      window.clearTimeout(timeout);
      setSending(false);
    }
  };

  if (sent) {
    return <div role="status" className="flex items-center gap-3 rounded-[2rem] bg-pop p-10 font-display text-2xl font-bold text-pop-foreground"><Check className="h-7 w-7" aria-hidden />{t.thanks}</div>;
  }

  const input = "mt-1 w-full border-0 border-b-2 border-foreground/20 bg-transparent px-0 py-3 text-lg outline-none transition-colors focus:border-primary";
  return (
    <form onSubmit={submit} noValidate aria-busy={sending} className="grid gap-6 rounded-2xl bg-card p-6 shadow-card sm:grid-cols-2 md:p-10">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {fields.map(({ k, type, area }) => (
        <div key={k} className={area ? "sm:col-span-2" : ""}>
          <label htmlFor={k} className="text-sm font-bold uppercase tracking-wider">{t[k]}</label>
          {area ? (
            <textarea id={k} name={k} rows={4} value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} aria-invalid={!!err[k]} aria-describedby={err[k] ? `${k}-err` : undefined} className={input} />
          ) : (
            <input id={k} name={k} type={type ?? "text"} value={v[k]} onChange={(e) => setV({ ...v, [k]: e.target.value })} aria-invalid={!!err[k]} aria-describedby={err[k] ? `${k}-err` : undefined} className={input} />
          )}
          {err[k] && <p id={`${k}-err`} className="mt-1 text-sm text-destructive">{err[k]}</p>}
        </div>
      ))}
      {submitError && <p role="alert" className="text-destructive sm:col-span-2">{t.sendError} <a className="underline" href="mailto:tellmoremarketing@gmail.com">tellmoremarketing@gmail.com</a></p>}
      <div className="sm:col-span-2"><button type="submit" disabled={sending} className={`${btn} disabled:cursor-wait disabled:opacity-60`}>{sending ? t.sending : t.send}<Arrow /></button></div>
    </form>
  );
}
