import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { landingPages, type LandingPageData } from "@/lib/landing-pages";
import { Arrow, btn, CtaBand, Reveal } from "@/components/site";

const words = {
  en: {
    eyebrow: "Guide · Texas driving schools",
    answer: "Short answer",
    faq: "Frequently asked questions",
    related: "More free guides",
    mainGuide: "How to get more students for your Texas driving school",
    resources: "All our free resources",
    endTitle: "Want this done for your school?",
    endText: "We handle Instagram and Facebook for Texas driving schools, in English and Spanish. Start with a free social media review.",
    cta: "Get your free social media review",
  },
  es: {
    eyebrow: "Guía · Autoescuelas de Texas",
    answer: "Respuesta corta",
    faq: "Preguntas frecuentes",
    related: "Más guías gratis",
    mainGuide: "Cómo conseguir más alumnos para tu autoescuela en Texas",
    resources: "Todos nuestros recursos gratis",
    endTitle: "¿Quieres que lo hagamos por tu escuela?",
    endText: "Nos encargamos de Instagram y Facebook para autoescuelas de Texas, en inglés y en español. Empieza con una revisión gratis de tus redes.",
    cta: "Pide tu revisión gratis",
  },
} as const;

export function landingHead(page: LandingPageData) {
  return {
    meta: [
      { title: page.meta.title },
      { name: "description", content: page.meta.description },
      { property: "og:title", content: page.meta.title },
      { property: "og:description", content: page.meta.description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}

export function LandingPage({ page }: { page: LandingPageData }) {
  const { lang } = useLang();
  const w = words[lang];
  const c = page[lang];
  const others = landingPages.filter((p) => p.path !== page.path);
  return (
    <article>
      <header className="px-5 pb-12 pt-16 md:pt-24">
        <Reveal className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">{w.eyebrow}</p>
          <h1 className="mt-5 text-4xl leading-tight md:text-6xl">{c.h1}</h1>
          <div className="mt-10 rounded-2xl border-l-4 border-primary bg-soft p-6 md:p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-primary">{w.answer}</p>
            <p className="mt-3 text-lg leading-relaxed md:text-xl">{c.answer}</p>
          </div>
        </Reveal>
      </header>

      <div className="px-5 pb-16">
        <div className="mx-auto max-w-4xl space-y-12">
          {c.sections.map((s) => (
            <Reveal key={s.h}>
              <h2 className="text-3xl md:text-4xl">{s.h}</h2>
              {s.p && <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{s.p}</p>}
              {s.list && (
                <ul className="mt-5 space-y-3">
                  {s.list.map((item) => {
                    const [head, ...rest] = item.split(": ");
                    return (
                      <li key={item} className="flex gap-3 text-lg leading-relaxed">
                        <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-pop" aria-hidden />
                        <span className="text-muted-foreground">
                          {rest.length ? <><strong className="text-foreground">{head}:</strong> {rest.join(": ")}</> : item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>

      <section className="bg-soft px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl">{w.faq}</h2>
          <div className="mt-8 space-y-4">
            {c.faq.map((f) => (
              <Reveal key={f.q} className="rounded-2xl bg-card p-6 shadow-card md:p-8">
                <h3 className="font-display text-xl font-bold">{f.q}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl bg-pop p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl">{w.endTitle}</h2>
            <p className="mt-4 max-w-2xl text-lg">{w.endText}</p>
            <Link to="/contact" className={`${btn} mt-8`}>{w.cta}<Arrow /></Link>
          </div>

          <h2 className="mt-16 text-2xl md:text-3xl">{w.related}</h2>
          <ul className="mt-6 border-t border-border">
            {others.map((p) => (
              <li key={p.path} className="border-b border-border">
                <Link to={p.path} className="group flex items-center justify-between gap-4 py-5 font-semibold transition-colors hover:text-primary">
                  {p[lang].h1}<Arrow />
                </Link>
              </li>
            ))}
            <li className="border-b border-border">
              <Link to="/get-more-driving-school-students" className="group flex items-center justify-between gap-4 py-5 font-semibold transition-colors hover:text-primary">{w.mainGuide}<Arrow /></Link>
            </li>
            <li className="border-b border-border">
              <Link to="/free-resources" className="group flex items-center justify-between gap-4 py-5 font-semibold transition-colors hover:text-primary">{w.resources}<Arrow /></Link>
            </li>
          </ul>
        </div>
      </section>

      <CtaBand />
    </article>
  );
}
