import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, BookOpen, ClipboardCheck, Phone, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang";
import { Arrow, btn, CtaBand, Reveal } from "@/components/site";

export const Route = createFileRoute("/get-more-driving-school-students")({
  head: () => ({ meta: [
    { title: "How to Get More Driving School Students in Texas | Tell More Marketing" },
    { name: "description", content: "Practical tips for Texas driving schools: improve search visibility, build trust with social media, and turn more inquiries into booked lessons." },
    { property: "og:title", content: "How Texas Driving Schools Can Attract More Students" },
  ] }),
  component: Guide,
});

const words = {
  en: {
    eyebrow: "FREE GUIDE · TEXAS DRIVING SCHOOLS",
    title: "How to get more students for your Texas driving school",
    lead: "Empty lesson slots? More random posting isn't the answer. Create a clear path from online discovery to a real conversation—and, ultimately, more booked lessons.",
    action: "Get your free social media review",
    introTitle: "Your next student starts with a search.",
    intro: "Parents and new drivers research their options online. A clear Google presence, useful social content, and a simple way to get in touch can help your school stand out.",
    funnelTitle: "The conversion funnel",
    funnelDesc: "Here is how Tell More Marketing plans to attract driving school owners as clients.",
    steps: [
      ["Google or ChatGPT", "An owner searches for ways to get more driving school students."],
      ["This helpful article", "Our guide answers their question and introduces a practical approach."],
      ["Free social media review request", "The owner contacts us for specific recommendations."],
      ["Discovery call", "We qualify the opportunity, discuss goals, and explore working together."],
    ],
    stages: ["Top of funnel · Awareness", "Top of funnel · Awareness", "Middle of funnel · Consideration (MQL)", "Bottom of funnel · Decision (SQL)"],
    goalsTitle: "Our realistic conversion objectives",
    goalsNote: "Illustrative goals for a new campaign, not measured results or guarantees. Actual conversion rates must be tracked.",
    goals: [["1–3%", "Article visits → review requests"], ["20–30%", "Review requests → qualified leads"], ["50%", "Qualified leads → discovery calls (initial target)"]],
    tipsTitle: "Three ways to bring in more driving school students",
    tips: [
      ["Show up in local searches", "Keep your Google Business Profile updated, mention your Texas city and services, and make it easy for families to call or book."],
      ["Build trust through social media", "Share instructor introductions, student success stories with permission, and short answers to common parent questions."],
      ["Turn attention into action", "Use one clear call to action, answer inquiries promptly, and measure which posts, pages and ads lead to bookings."],
    ],
    searchTitle: "Five keywords our prospects search for",
    searchNote: "We checked each keyword with Ubersuggest and Google's own search suggestions (US results). Search volumes are small, which is normal for a niche B2B market, but competition is low: an article like this one can realistically rank.",
    photoCredit: "Photos: Unsplash",
    endTitle: "Ready to fill more lesson slots?",
    endText: "We help independent Texas driving schools build a social presence that attracts the right audience. Start with a free social media review.",
  },
  es: {
    eyebrow: "GUÍA GRATIS · AUTOESCUELAS DE TEXAS",
    title: "Cómo conseguir más alumnos para tu autoescuela en Texas",
    lead: "¿Tienes horarios vacíos? Publicar sin estrategia no basta. Crea un camino claro desde el primer descubrimiento en internet hasta una conversación y una reserva.",
    action: "Solicita una revisión gratis",
    introTitle: "Tu próximo alumno empieza con una búsqueda.",
    intro: "Los padres y nuevos conductores comparan opciones en internet. Una buena presencia en Google, contenido útil y una forma fácil de contactar ayudan a destacar.",
    funnelTitle: "El embudo de conversión",
    funnelDesc: "Así planea Tell More Marketing atraer a dueños de autoescuelas como clientes.",
    steps: [
      ["Google o ChatGPT", "El dueño busca maneras de conseguir más alumnos."],
      ["Este artículo", "Nuestra guía responde sus preguntas y presenta una estrategia."],
      ["Solicitud de revisión", "El dueño nos contacta para recibir recomendaciones específicas."],
      ["Llamada inicial", "Evaluamos sus objetivos y una posible colaboración."],
    ],
    stages: ["Parte alta del embudo · Descubrimiento", "Parte alta del embudo · Descubrimiento", "Parte media · Consideración (MQL)", "Parte baja · Decisión (SQL)"],
    goalsTitle: "Objetivos realistas de conversión",
    goalsNote: "Objetivos orientativos, no resultados medidos ni garantías. Debemos evaluar las tasas reales.",
    goals: [["1–3%", "Visitas al artículo → solicitudes"], ["20–30%", "Solicitudes → prospectos cualificados"], ["50%", "Prospectos cualificados → llamadas (meta inicial)"]],
    tipsTitle: "Tres formas de atraer más alumnos",
    tips: [
      ["Aparece en búsquedas locales", "Mantén actualizado tu Perfil de Empresa en Google, incluye tu ciudad y facilita las llamadas y reservas."],
      ["Genera confianza en redes", "Presenta a tus instructores, comparte logros con permiso y responde preguntas frecuentes de padres."],
      ["Convierte interés en acción", "Usa una llamada a la acción clara, responde rápido y mide qué contenido genera reservas."],
    ],
    searchTitle: "Cinco palabras clave que buscan nuestros clientes",
    searchNote: "Verificamos cada palabra clave con Ubersuggest y las sugerencias de búsqueda de Google (resultados de EE. UU., en inglés porque nuestros clientes buscan en inglés). El volumen es bajo, algo normal en un nicho B2B, pero la competencia también: un artículo como este puede posicionarse.",
    photoCredit: "Fotos: Unsplash",
    endTitle: "¿Quieres llenar más horarios?",
    endText: "Ayudamos a autoescuelas independientes de Texas a atraer a su público ideal. Empieza con una revisión gratis.",
  },
} as const;

const keywords = [
  ["driving school marketing", "Ubersuggest: SEO difficulty 12/100 (low)"],
  ["driving school marketing agency", "Google suggestion"],
  ["driving school marketing ideas", "Google suggestion"],
  ["how to promote driving school business", "Google suggestion"],
  ["driving school advertising ideas", "Google suggestion"],
] as const;
const stepIcons = [Search, BookOpen, ClipboardCheck, Phone];

function Guide() {
  const { lang } = useLang();
  const t = words[lang];
  return (
    <article>
      <header className="px-5 pb-20 pt-16 md:pt-24">
        <Reveal className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">{t.eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-4xl md:text-6xl">{t.title}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">{t.lead}</p>
          <Link to="/contact" className={`${btn} mt-9`}>{t.action}<Arrow /></Link>
        </Reveal>
        <Reveal className="mx-auto mt-14 max-w-7xl">
          <img src="/guide/driving-lesson.jpg" alt="A smiling driving instructor and student during a lesson" width={1600} height={900}
            className="aspect-[16/9] w-full rounded-3xl object-cover shadow-card md:aspect-[21/9]" fetchPriority="high" />
        </Reveal>
      </header>

      <section className="bg-soft px-5 py-16">
        <Reveal className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1fr_minmax(0,22rem)]">
          <div>
            <h2 className="max-w-3xl text-3xl md:text-4xl">{t.introTitle}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">{t.intro}</p>
          </div>
          <img src="/guide/social-media-phone.jpg" alt="A phone showing Instagram, TikTok, YouTube and other social media apps" width={900} height={1125}
            loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-card" />
        </Reveal>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl">{t.funnelTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t.funnelDesc}</p>
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {t.steps.map(([title, description], i) => {
              const Icon = stepIcons[i]!;
              return <li key={title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <span className="text-xs font-bold text-primary">0{i + 1}</span>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t.stages[i]}</p>
                <Icon className="mt-5 h-8 w-8 text-primary" aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
                <p className="mt-3 text-muted-foreground">{description}</p>
                {i < 3 && <ArrowRight className="mt-5 h-5 w-5 text-primary" aria-hidden="true" />}
              </li>;
            })}
          </ol>
          <div className="mt-12 rounded-3xl bg-foreground p-8 text-background md:p-12">
            <h3 className="text-2xl md:text-3xl">{t.goalsTitle}</h3>
            <p className="mt-3 max-w-3xl text-background/70">{t.goalsNote}</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {t.goals.map(([rate, label]) => <div key={label} className="border-t border-background/20 pt-5">
                <p className="font-display text-4xl font-bold text-pop">{rate}</p>
                <p className="mt-2 text-sm text-background/80">{label}</p>
              </div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-4xl text-3xl md:text-5xl">{t.tipsTitle}</h2>
          <img src="/guide/driving-test.jpg" alt="A driving instructor with a clipboard explaining a driving test to a student" width={1400} height={932}
            loading="lazy" className="mt-10 aspect-[16/9] w-full rounded-3xl object-cover object-top shadow-card md:aspect-[3/1]" />
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {t.tips.map(([title, detail], i) => <div key={title} className="rounded-2xl bg-card p-8 shadow-card">
              <span className="text-sm font-bold text-primary">0{i + 1}</span>
              <h3 className="mt-4 font-display text-2xl font-bold">{title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{detail}</p>
            </div>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-5xl">{t.searchTitle}</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">{t.searchNote}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{keywords.map(([k, source]) =>
            <li key={k} className="rounded-2xl border border-border bg-soft px-5 py-4">
              <p className="font-semibold">{k}</p>
              <p className="mt-1 text-sm text-muted-foreground">{source}</p>
            </li>)}</ul>
          <p className="mt-10 text-xs text-muted-foreground">{t.photoCredit}</p>
        </div>
      </section>
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-pop p-8 md:p-14">
          <h2 className="max-w-4xl text-3xl md:text-5xl">{t.endTitle}</h2>
          <p className="mt-5 max-w-2xl text-lg">{t.endText}</p>
          <Link to="/contact" className={`${btn} mt-8`}>{t.action}<Arrow /></Link>
        </div>
      </section>
      <CtaBand />
    </article>
  );
}
