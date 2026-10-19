import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, HelpCircle, BarChart3 } from "lucide-react";
import { useLang } from "@/lib/lang";
import { Arrow, btn, CtaBand, Marquee, Reveal, navLinks } from "@/components/site";

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

const problemIcons = [Clock, HelpCircle, BarChart3];

function Index() {
  const { t } = useLang();
  return (
    <>
      <section className="relative px-5 pb-20 pt-16 md:pb-28 md:pt-24">
        <div aria-hidden className="blob absolute -right-32 -top-10 h-80 w-80 rounded-full bg-pop md:h-[28rem] md:w-[28rem]" />
        <div aria-hidden className="blob blob-b absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-primary/15" />
        <Reveal className="relative mx-auto max-w-7xl">
          <p className="inline-block -rotate-2 rounded-full border-2 border-foreground bg-background px-4 py-1 text-sm font-bold uppercase tracking-widest">{t.extra.heroTag}</p>
          <h1 className="mt-8 text-[13vw] leading-[0.88] md:text-[8.5rem]">
            {t.hero.title.split(". ").map((part, i, a) => (
              <span key={i} className={`block ${i === 1 ? "text-primary" : ""}`}>{part}{i < a.length - 1 ? "." : ""}</span>
            ))}
          </h1>
          <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-end">
            <p className="max-w-xl text-lg text-muted-foreground md:text-xl">{t.hero.sub}</p>
            <div className="flex flex-wrap items-center gap-5 md:justify-end">
              <Link to="/contact" className={btn}>{t.hero.cta}<Arrow /></Link>
              <Link to="/how-it-works" className="group font-bold underline decoration-pop decoration-4 underline-offset-4">{t.hero.secondary}<Arrow /></Link>
            </div>
          </div>
        </Reveal>
      </section>

      <Marquee items={t.extra.marquee} />

      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <ul className="grid gap-5 md:grid-cols-3">
            {t.problems.items.map((p, i) => {
              const I = problemIcons[i]!;
              return (
                <Reveal as="li" key={p} className={`rounded-[2rem] border-2 border-foreground p-8 ${i === 1 ? "bg-primary text-primary-foreground md:-rotate-2" : "bg-card"}`}>
                  <I className="h-8 w-8" aria-hidden />
                  <p className="mt-8 font-display text-2xl font-bold leading-tight">{p}</p>
                </Reveal>
              );
            })}
          </ul>
          <Reveal><p className="mt-14 text-center font-display text-3xl font-bold md:text-5xl">{t.problems.line}</p></Reveal>
        </div>
      </section>

      <section className="px-5 pb-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">{t.extra.explore}</p>
          <ul className="mt-4 border-t-2 border-foreground">
            {navLinks.map((l, i) => (
              <li key={l.to} className="border-b-2 border-foreground">
                <Link to={l.to} className="group flex items-center justify-between py-6 transition-colors hover:bg-pop hover:px-4 md:py-8">
                  <span className="flex items-baseline gap-6">
                    <span className="font-display text-sm font-bold text-muted-foreground">0{i + 1}</span>
                    <span className="font-display text-4xl font-bold md:text-7xl">{t.nav[l.k]}</span>
                  </span>
                  <span className="font-display text-4xl md:text-6xl"><Arrow /></span>
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
