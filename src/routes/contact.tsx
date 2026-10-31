import { createFileRoute } from "@tanstack/react-router";
import { Mail, Instagram } from "lucide-react";
import { useLang } from "@/lib/lang";
import { ContactForm, PageHero, Reveal } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Free marketing review — Tell More Marketing" },
      { name: "description", content: "Tell us about your Texas driving school and get a free marketing review within 48 hours." },
      { property: "og:title", content: "Free marketing review — Tell More Marketing" },
      { property: "og:description", content: "Get clear next steps for your driving school's website, ads and social media, free." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { t } = useLang();
  return (
    <>
      <PageHero eyebrow={t.contact.eyebrow} title={t.contact.title} sub={t.contact.sub} />
      <section className="px-5 pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr]">
          <Reveal>
            <p className="font-display text-2xl font-bold">{t.contact.reach}</p>
            <ul className="mt-5 space-y-4 text-lg">
              <li><a href="mailto:tellmoremarketing@gmail.com" className="flex items-center gap-3 font-semibold text-primary hover:underline"><Mail className="h-5 w-5" aria-hidden />tellmoremarketing@gmail.com</a></li>
              <li><a href="https://instagram.com/tellmoremarketing" target="_blank" rel="noreferrer" className="flex items-center gap-3 font-semibold text-primary hover:underline"><Instagram className="h-5 w-5" aria-hidden />@tellmoremarketing</a></li>
            </ul>
          </Reveal>
          <Reveal><ContactForm /></Reveal>
        </div>
      </section>
    </>
  );
}
