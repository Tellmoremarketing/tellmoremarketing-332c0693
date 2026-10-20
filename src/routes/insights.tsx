import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/lib/lang";
import { PageHero } from "@/components/site";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Tell More Marketing" },
      { name: "description", content: "Insights from Tell More Marketing." },
      { property: "og:title", content: "Insights — Tell More Marketing" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Insights,
});

function Insights() {
  const { lang } = useLang();
  return <PageHero eyebrow="Tell More Marketing" title={lang === "es" ? "Ideas" : "Insights"} />;
}
