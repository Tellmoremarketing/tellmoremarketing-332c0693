import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { CtaBand, PageHero, Reveal } from "@/components/site";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — Tell More Marketing" },
      { name: "description", content: "Meet the six TBS Education marketing students behind Tell More Marketing." },
      { property: "og:title", content: "Team — Tell More Marketing" },
      { property: "og:description", content: "Six marketing students in Barcelona helping Texas driving schools grow." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Team,
});

const team = ["Arya Balak", "Zack Morissette", "Lilou Petit", "Igne Spulyte", "Niko Hrenar", "Clémence Auboiroux"];
const portraits: Record<string, string> = {
  "Arya Balak": "/team/arya.jpg",
  "Zack Morissette": "/team/zack.jpg",
  "Lilou Petit": "/team/lilou.jpg",
  "Niko Hrenar": "/team/nico.jpg",
  "Clémence Auboiroux": "/team/clemence.jpg",
};
const tones = ["bg-primary text-primary-foreground", "bg-soft text-primary"];

function Team() {
  const { t } = useLang();
  return (
    <>
      <PageHero eyebrow={t.team.eyebrow} title={t.team.title} sub={t.team.intro} />
      <section className="px-5 pb-10">
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((n, i) => (
            <Reveal key={n} className={`group`}>
              {portraits[n] ? (
                <img src={portraits[n]} alt={n} width={600} height={600}
                  className="aspect-square w-full rounded-2xl object-cover object-center"
                  loading={i < 3 ? "eager" : "lazy"} decoding="async" />
              ) : (
                <div className={`flex aspect-square items-center justify-center rounded-2xl font-display text-6xl font-bold ${tones[i % tones.length]}`} aria-hidden>
                  {n.split(" ").map((x) => x[0]).join("")}
                </div>
              )}
              <p className="mt-4 font-display text-2xl font-bold">{n}</p>
              <p className="text-muted-foreground">{t.team.roles[i]}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
