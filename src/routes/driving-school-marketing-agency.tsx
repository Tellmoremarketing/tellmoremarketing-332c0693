import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/landing";
import { landingPages } from "@/lib/landing-pages";

const page = landingPages.find((p) => p.path === "/driving-school-marketing-agency")!;

export const Route = createFileRoute("/driving-school-marketing-agency")({
  head: () => landingHead(page),
  component: () => <LandingPage page={page} />,
});
