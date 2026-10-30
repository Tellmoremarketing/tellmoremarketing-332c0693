import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, HelpCircle, BarChart3 } from "lucide-react";
import { useLang } from "@/lib/lang";
import { Arrow, btn, CtaBand, Reveal, navLinks } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tell More Marketing — Social media for Texas driving schools" },
      { name: "description", content: "Social media marketing for driving schools in Texas. Attract potential students through Instagram and Facebook content and advertising. Get your free social media review." },
      { property: "og:title", content: "Tell More Marketing — Social media for Texas driving schools" },
      { property: "og:description", content: "Social media marketing for driving schools in Texas. Spend more time teaching. Let us handle your social media." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const problemIcons = [Clock, HelpCircle, BarChart3];

const guideTeaser = {
  en: {
    eyebrow: "Free guide",
    title: "How to get more students for your Texas driving school",
    text: "Our step-by-step guide: how families find driving schools online, and three practical ways to turn that attention into booked lessons.",
    cta: "Read the guide",
    alt: "A smiling driving instructor and student during a lesson",
  },
  es: {
    eyebrow: "Guía gratis",
    title: "Cómo conseguir más alumnos para tu autoescuela en Texas",
    text: "Nuestra guía paso a paso: cómo las familias encuentran autoescuelas en internet y tres formas prácticas de convertir ese interés en reservas.",
    cta: "Leer la guía",
    alt: "Un instructor de manejo y su alumna sonriendo durante una clase",
  },
} as const;

function Index() {
  const { t, lang } = useLang();
  const g = guideTeaser[lang];
  return (
    <>
      <section className="relative px-5 pb-20 pt-16 md:pb-28 md:pt-24">
        <Reveal className="relative mx-auto max-w-7xl">
          <h1 className="max-w-5xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-3xl font-display text-2xl font-semibold leading-tight text-primary md:text-3xl">{t.hero.tagline}</p>
          <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
            <p className="max-w-xl text-lg text-muted-foreground md:text-xl">{t.hero.sub}</p>
            <div className="flex flex-col items-start gap-4 md:items-center">
              <Link to="/contact" className={btn}>{t.hero.cta}<Arrow /></Link>
              <Link to="/how-it-works" className="group font-bold underline decoration-pop decoration-2 underline-offset-4">{t.hero.secondary}<Arrow /></Link>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-soft px-5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <ul className="grid gap-5 md:grid-cols-3">
            {t.problems.items.map((p, i) => {
              const I = problemIcons[i]!;
              return (
                <Reveal as="li" key={p} className={`rounded-2xl bg-card p-8 shadow-card`}>
                  <I className="h-8 w-8 text-primary" aria-hidden />
                  <p className="mt-6 font-display text-xl font-bold leading-tight">{p}</p>
                </Reveal>
              );
            })}
          </ul>
          <Reveal><p className="mt-14 text-center font-display text-2xl font-bold md:text-3xl">{t.problems.line}</p></Reveal>
        </div>
      </section>

      <section className="px-5 py-20">
        <Reveal className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-soft md:grid-cols-2">
          <img src="/guide/driving-lesson.jpg" alt={g.alt} width={1600} height={900} loading="lazy"
            className="aspect-[16/10] h-full w-full object-cover object-[35%_center] md:aspect-auto" />
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">{g.eyebrow}</p>
            <h2 className="mt-4 text-3xl md:text-4xl">{g.title}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{g.text}</p>
            <Link to="/get-more-driving-school-students" className={`${btn} mt-8 self-start`}>{g.cta}<Arrow /></Link>
          </div>
        </Reveal>
      </section>

      <section className="px-5 pb-10 pt-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">{t.extra.explore}</p>
          <ul className="mt-4 border-t border-border">
            {navLinks.map((l, i) => (
              <li key={l.to} className="border-b border-border">
                <Link to={l.to} className="group flex items-center justify-between py-6 transition-colors hover:px-3 hover:text-primary md:py-7">
                  <span className="flex items-baseline gap-6">
                    <span className="font-display text-sm font-bold text-muted-foreground">0{i + 1}</span>
                    <span className="font-display text-3xl font-bold md:text-5xl">{t.nav[l.k]}</span>
                  </span>
                  <span className="font-display text-3xl md:text-4xl"><Arrow /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
