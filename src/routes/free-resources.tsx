import { createFileRoute, Link } from "@tanstack/react-router";
import { ClipboardCheck, BookOpen, MessageCircle, Mail, Instagram, Magnet, Handshake, Heart, RefreshCw } from "lucide-react";
import { useLang } from "@/lib/lang";
import { Arrow, btn, CtaBand, PageHero, Reveal } from "@/components/site";
import { landingPages } from "@/lib/landing-pages";

export const Route = createFileRoute("/free-resources")({
  head: () => ({
    meta: [
      { title: "Free resources for Texas driving schools — Tell More Marketing" },
      { name: "description", content: "A free social media review, free marketing guides and free answers to your questions. Practical help for Texas driving schools, no strings attached." },
      { property: "og:title", content: "Free resources for Texas driving schools — Tell More Marketing" },
      { property: "og:description", content: "Practical, free marketing help for Texas driving schools." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FreeResources,
});

const words = {
  en: {
    eyebrow: "Free resources",
    title: "Free help for Texas driving schools",
    sub: "Our approach is simple: be useful first. Everything on this page is free, with no contract and no strings attached.",
    offers: [
      { t: "Free social media review", d: "We look at your Instagram, Facebook and website, then send you clear next steps you can act on yourself.", cta: "Get your review" },
      { t: "Free marketing guides", d: "Practical guides on getting more students: showing up in local searches, building trust on social media and turning inquiries into booked lessons.", cta: "See all guides" },
      { t: "Free answers to your questions", d: "Not sure if a post, an ad or your Google profile is working? Email us or send us a DM and we'll give you an honest answer.", cta: "Ask us" },
    ],
    funnelEyebrow: "Our inbound funnel",
    funnelTitle: "Attract, engage, delight",
    funnelSub: "How our free resources turn into happy clients, and how happy clients bring in the next ones.",
    funnel: [
      { t: "Attract", who: "Strangers → visitors", d: "A Texas driving school owner searches Google or ChatGPT for ways to get more students and finds our free guide, landing pages or Instagram posts.", tools: ["Free marketing guides", "SEO landing pages", "Instagram @tellmoremarketing"], kpi: "Visits to our guides and pages" },
      { t: "Engage", who: "Visitors → leads → clients", d: "The owner asks for a free social media review. We send clear next steps, then talk on a discovery call about running their Instagram and Facebook.", tools: ["Free social media review", "Free answers by email or DM", "Discovery call"], kpi: "Review requests and calls booked" },
      { t: "Delight", who: "Clients → promoters", d: "We post every week, run ads and send a simple monthly report. Clients who see more bookings stay with us, leave a review and tell other owners.", tools: ["Monthly results report", "Quick, honest answers", "New guides as they come out"], kpi: "Clients who stay, reviews and referrals" },
    ],
    toolsLabel: "What we use",
    kpiLabel: "What we measure",
    loop: "The funnel is a loop: every happy client's review and recommendation attracts the next driving school owner.",
    guidesTitle: "Our free guides",
    mainGuide: "How to get more students for your Texas driving school",
    whyTitle: "Why we give this away",
    why: [
      { t: "Help first, sell later", d: "Driving school owners trust people who have already helped them. We'd rather prove we're useful than tell you we are." },
      { t: "Easy to find", d: "Helpful guides and answers are how owners find us on Google and ChatGPT when they search for ways to get more students." },
      { t: "No pressure", d: "If you ever want help running your social media, you'll already know how we work. If not, keep using the free resources." },
    ],
  },
  es: {
    eyebrow: "Recursos gratis",
    title: "Ayuda gratis para autoescuelas de Texas",
    sub: "Nuestra forma de trabajar es simple: primero ser útiles. Todo en esta página es gratis, sin contrato y sin compromiso.",
    offers: [
      { t: "Revisión gratis de redes sociales", d: "Revisamos tu Instagram, Facebook y sitio web, y te enviamos pasos claros que puedes aplicar tú mismo.", cta: "Pide tu revisión" },
      { t: "Guías de marketing gratis", d: "Guías prácticas para conseguir más alumnos: aparecer en búsquedas locales, generar confianza en redes y convertir consultas en clases reservadas.", cta: "Ver todas las guías" },
      { t: "Respuestas gratis a tus preguntas", d: "¿No sabes si una publicación, un anuncio o tu perfil de Google funciona? Escríbenos por email o mensaje directo y te daremos una respuesta honesta.", cta: "Pregúntanos" },
    ],
    funnelEyebrow: "Nuestro embudo inbound",
    funnelTitle: "Atraer, interactuar, encantar",
    funnelSub: "Cómo nuestros recursos gratis se convierten en clientes contentos, y cómo esos clientes atraen a los siguientes.",
    funnel: [
      { t: "Atraer", who: "Desconocidos → visitantes", d: "El dueño de una autoescuela en Texas busca en Google o ChatGPT cómo conseguir más alumnos y encuentra nuestra guía gratis, nuestras páginas o nuestros posts en Instagram.", tools: ["Guías de marketing gratis", "Páginas SEO por palabra clave", "Instagram @tellmoremarketing"], kpi: "Visitas a nuestras guías y páginas" },
      { t: "Interactuar", who: "Visitantes → prospectos → clientes", d: "El dueño pide una revisión gratis de sus redes. Le enviamos pasos claros y luego hablamos en una llamada sobre manejar su Instagram y Facebook.", tools: ["Revisión gratis de redes", "Respuestas gratis por email o DM", "Llamada inicial"], kpi: "Solicitudes de revisión y llamadas" },
      { t: "Encantar", who: "Clientes → promotores", d: "Publicamos cada semana, corremos anuncios y enviamos un reporte mensual sencillo. Los clientes que ven más reservas se quedan, dejan una reseña y nos recomiendan.", tools: ["Reporte mensual de resultados", "Respuestas rápidas y honestas", "Nuevas guías"], kpi: "Clientes que se quedan, reseñas y recomendaciones" },
    ],
    toolsLabel: "Qué usamos",
    kpiLabel: "Qué medimos",
    loop: "El embudo es un ciclo: la reseña y la recomendación de cada cliente contento atrae al siguiente dueño de autoescuela.",
    guidesTitle: "Nuestras guías gratis",
    mainGuide: "Cómo conseguir más alumnos para tu autoescuela en Texas",
    whyTitle: "Por qué lo ofrecemos gratis",
    why: [
      { t: "Primero ayudar, después vender", d: "Los dueños de autoescuelas confían en quien ya les ha ayudado. Preferimos demostrar que somos útiles a decirlo." },
      { t: "Fáciles de encontrar", d: "Las guías y respuestas útiles son la forma en que los dueños nos encuentran en Google y ChatGPT cuando buscan más alumnos." },
      { t: "Sin presión", d: "Si algún día quieres ayuda con tus redes sociales, ya sabrás cómo trabajamos. Si no, sigue usando los recursos gratis." },
    ],
  },
} as const;

const offerIcons = [ClipboardCheck, BookOpen, MessageCircle];
const funnelIcons = [Magnet, Handshake, Heart];

function FreeResources() {
  const { lang } = useLang();
  const t = words[lang];
  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} sub={t.sub} />

      <section className="px-5 pb-20">
        <ul className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {t.offers.map((o, i) => {
            const I = offerIcons[i]!;
            return (
              <Reveal as="li" key={o.t} className={`flex flex-col rounded-2xl p-8 shadow-card md:p-10 ${i === 0 ? "bg-primary text-primary-foreground" : "bg-card"}`}>
                <I className="h-10 w-10" strokeWidth={1.6} aria-hidden />
                <h2 className="mt-8 text-2xl leading-tight">{o.t}</h2>
                <p className="mt-3 flex-1 text-lg opacity-80">{o.d}</p>
                <div className="mt-8">
                  {i === 0 && <Link to="/contact" className="group font-bold underline decoration-pop decoration-2 underline-offset-4">{o.cta}<Arrow /></Link>}
                  {i === 1 && <a href="#guides" className="group font-bold text-primary underline decoration-pop decoration-2 underline-offset-4">{o.cta}<Arrow /></a>}
                  {i === 2 && (
                    <div className="flex flex-col gap-2 text-sm font-bold">
                      <a href="mailto:tellmoremarketing@gmail.com" className="flex min-w-0 items-center gap-2 break-all text-primary hover:underline"><Mail className="h-4 w-4 shrink-0" aria-hidden />tellmoremarketing@gmail.com</a>
                      <a href="https://instagram.com/tellmoremarketing" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary hover:underline"><Instagram className="h-4 w-4" aria-hidden />@tellmoremarketing</a>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </ul>
      </section>

      <section id="guides" className="px-5 pb-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-3xl md:text-5xl">{t.guidesTitle}</h2>
          <ul className="mt-8 border-t border-border">
            {[{ path: "/get-more-driving-school-students", title: t.mainGuide }, ...landingPages.map((p) => ({ path: p.path, title: p[lang].h1 }))].map((g) => (
              <li key={g.path} className="border-b border-border">
                <Link to={g.path} className="group flex items-center justify-between gap-4 py-5 font-display text-xl font-bold transition-colors hover:text-primary md:text-2xl">{g.title}<Arrow /></Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-soft px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl text-3xl md:text-5xl">{t.whyTitle}</h2>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {t.why.map((w, i) => (
              <Reveal as="li" key={w.t} className="rounded-2xl bg-card p-8 shadow-card">
                <span className="text-sm font-bold text-primary">0{i + 1}</span>
                <h3 className="mt-4 font-display text-2xl font-bold">{w.t}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{w.d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">{t.funnelEyebrow}</p>
          <h2 className="mt-3 max-w-3xl text-3xl md:text-5xl">{t.funnelTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t.funnelSub}</p>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {t.funnel.map((f, i) => {
              const I = funnelIcons[i]!;
              return (
                <Reveal as="li" key={f.t} className="flex flex-col rounded-2xl border border-border bg-card p-8 shadow-card">
                  <span className="text-sm font-bold text-primary">0{i + 1}</span>
                  <I className="mt-5 h-9 w-9 text-primary" strokeWidth={1.6} aria-hidden />
                  <h3 className="mt-5 font-display text-3xl font-bold">{f.t}</h3>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{f.who}</p>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{f.d}</p>
                  <p className="mt-6 text-sm font-bold">{t.toolsLabel}</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {f.tools.map((x) => <li key={x} className="rounded-full bg-soft px-3 py-1 text-sm">{x}</li>)}
                  </ul>
                  <div className="mt-auto pt-6"><p className="border-t border-border pt-4 text-sm"><span className="font-bold">{t.kpiLabel}: </span>{f.kpi}</p></div>
                </Reveal>
              );
            })}
          </ol>
          <Reveal className="mt-5 flex items-start gap-4 rounded-2xl bg-foreground p-8 text-background">
            <RefreshCw className="mt-1 h-6 w-6 shrink-0 text-pop" aria-hidden />
            <p className="font-display text-xl font-bold leading-snug md:text-2xl">{t.loop}</p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
