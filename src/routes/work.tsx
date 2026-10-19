import { createFileRoute } from "@tanstack/react-router";
import { ImageIcon } from "lucide-react";
import { useLang } from "@/lib/lang";
import { Arrow, CtaBand, PageHero, Reveal } from "@/components/site";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Tell More Marketing" },
      { name: "description", content: "Sample social media projects for driving schools in Austin, Houston and San Antonio." },
      { property: "og:title", content: "Work — Tell More Marketing" },
      { property: "og:description", content: "Concept projects showing how we help Texas driving schools get more students." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Work,
});

function Work() {
  const { t } = useLang();
  return (
    <>
      <PageHero eyebrow={t.work.eyebrow} title={t.work.title} sub={t.extra.workSub} />
      <section className="px-5 pb-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {t.work.items.map((w, i) => (
            <Reveal key={w.t} className={`group ${i === 0 ? "md:col-span-2" : ""} ${i === 2 ? "md:mt-24" : ""}`}>
              <div className={`flex flex-col items-center justify-center gap-2 overflow-hidden rounded-[2rem] border-2 border-foreground text-muted-foreground transition-transform group-hover:-rotate-1 ${i === 0 ? "aspect-[21/9] bg-pop/60" : "aspect-[4/3] bg-soft"}`} role="img" aria-label={t.work.img}>
                <ImageIcon className="h-10 w-10" aria-hidden /><span className="text-sm">{t.work.img}</span>
              </div>
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h2 className="text-3xl md:text-4xl">{w.t}</h2>
                  <p className="mt-3"><span className="font-bold">{t.work.problem}:</span> <span className="text-muted-foreground">{w.p}</span></p>
                  <p className="mt-1"><span className="font-bold text-primary">{t.work.idea}<Arrow /></span> {w.i}</p>
                </div>
                <span className="font-display text-sm font-bold text-muted-foreground">0{i + 1}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
