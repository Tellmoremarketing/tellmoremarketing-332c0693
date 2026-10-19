import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { CtaBand, PageHero, Reveal } from "@/components/site";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — Tell More Marketing" },
      { name: "description", content: "Free audit, a content plan built for your school, then more bookings with monthly results. Three steps, no headaches." },
      { property: "og:title", content: "How it works — Tell More Marketing" },
      { property: "og:description", content: "Three steps from a free social media audit to a fuller driving school schedule." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: How,
});

function How() {
  const { t } = useLang();
  return (
    <>
      <PageHero eyebrow={t.how.eyebrow} title={t.how.title} sub={t.extra.howSub} />
      <section className="px-5 pb-10">
        <ol className="mx-auto max-w-7xl">
          {t.how.steps.map((s, i) => (
            <Reveal as="li" key={s.t} className={`grid items-center gap-6 border-t-2 border-foreground py-12 md:grid-cols-[auto_1fr_1fr] md:gap-16 md:py-16 ${i % 2 ? "md:pl-24" : ""}`}>
              <span className={`flex h-28 w-28 items-center justify-center rounded-full font-display text-6xl font-bold md:h-40 md:w-40 md:text-8xl ${i === 1 ? "bg-pop text-pop-foreground" : "bg-primary text-primary-foreground"} ${i === 2 ? "rotate-6" : "-rotate-6"}`}>{i + 1}</span>
              <h2 className="text-4xl md:text-6xl">{s.t}</h2>
              <p className="text-xl text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </ol>
      </section>
      <CtaBand />
    </>
  );
}
