import { createFileRoute, Link } from "@tanstack/react-router";
import { ClipboardCheck, BookOpen, MessageCircle, Mail, Instagram } from "lucide-react";
import { useLang } from "@/lib/lang";
import { Arrow, btn, CtaBand, PageHero, Reveal } from "@/components/site";

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
      { t: "Free marketing guides", d: "Practical guides on getting more students: showing up in local searches, building trust on social media and turning inquiries into booked lessons.", cta: "Read the guide" },
      { t: "Free answers to your questions", d: "Not sure if a post, an ad or your Google profile is working? Email us or send us a DM and we'll give you an honest answer.", cta: "Ask us" },
    ],
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
      { t: "Guías de marketing gratis", d: "Guías prácticas para conseguir más alumnos: aparecer en búsquedas locales, generar confianza en redes y convertir consultas en clases reservadas.", cta: "Leer la guía" },
      { t: "Respuestas gratis a tus preguntas", d: "¿No sabes si una publicación, un anuncio o tu perfil de Google funciona? Escríbenos por email o mensaje directo y te daremos una respuesta honesta.", cta: "Pregúntanos" },
    ],
    whyTitle: "Por qué lo ofrecemos gratis",
    why: [
      { t: "Primero ayudar, después vender", d: "Los dueños de autoescuelas confían en quien ya les ha ayudado. Preferimos demostrar que somos útiles a decirlo." },
      { t: "Fáciles de encontrar", d: "Las guías y respuestas útiles son la forma en que los dueños nos encuentran en Google y ChatGPT cuando buscan más alumnos." },
      { t: "Sin presión", d: "Si algún día quieres ayuda con tus redes sociales, ya sabrás cómo trabajamos. Si no, sigue usando los recursos gratis." },
    ],
  },
} as const;

const offerIcons = [ClipboardCheck, BookOpen, MessageCircle];

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
                  {i === 1 && <Link to="/get-more-driving-school-students" className="group font-bold text-primary underline decoration-pop decoration-2 underline-offset-4">{o.cta}<Arrow /></Link>}
                  {i === 2 && (
                    <div className="flex flex-col gap-2 font-bold">
                      <a href="mailto:tellmoremarketing@gmail.com" className="flex items-center gap-2 text-primary hover:underline"><Mail className="h-4 w-4" aria-hidden />tellmoremarketing@gmail.com</a>
                      <a href="https://instagram.com/tellmoremarketing" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-primary hover:underline"><Instagram className="h-4 w-4" aria-hidden />@tellmoremarketing</a>
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </ul>
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

      <CtaBand />
    </>
  );
}
