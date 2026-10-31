import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, MonitorSmartphone, Camera, Target, MousePointerClick, Search, CalendarCheck, Bot, Languages, FileBarChart } from "lucide-react";
import { useLang } from "@/lib/lang";
import { Arrow, CtaBand, PageHero, Reveal } from "@/components/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Tell More Marketing" },
      { name: "description", content: "Websites, SEO, Google Ads, Facebook & Instagram ads, online booking, automatic replies and social media for Texas driving schools." },
      { property: "og:title", content: "Services — Tell More Marketing" },
      { property: "og:description", content: "Everything your page needs to bring in more driving students." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const icons = [CalendarDays, MonitorSmartphone, Camera, Target, MousePointerClick, Search, CalendarCheck, Bot, Languages, FileBarChart];

function Services() {
  const { t } = useLang();
  return (
    <>
      <PageHero eyebrow={t.services.eyebrow} title={t.services.title} sub={t.extra.servicesSub} />
      <section className="px-5 pb-10">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-6">
          {t.services.items.map((s, i) => {
            const I = icons[i]!;
            const span = i < 2 || i >= 8 ? "md:col-span-3" : "md:col-span-2";
            const tone = i === 0 ? "bg-primary text-primary-foreground" : i === 3 ? "bg-soft" : "bg-card";
            return (
              <Reveal key={s.t} className={`group rounded-2xl p-8 shadow-card md:p-10 ${span} ${tone}`}>
                <div className="flex items-start justify-between">
                  <I className="h-10 w-10" strokeWidth={1.6} aria-hidden />
                  <span className="font-display text-sm font-bold opacity-60">0{i + 1}</span>
                </div>
                <h2 className="mt-8 text-2xl leading-tight">{s.t}</h2>
                <p className="mt-3 text-lg opacity-80">{s.d}</p>
                {s.to && <Link to={s.to} className="group mt-5 inline-block font-bold underline decoration-pop decoration-2 underline-offset-4">{t.services.more}<Arrow /></Link>}
              </Reveal>
            );
          })}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
