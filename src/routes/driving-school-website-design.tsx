import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/landing";
import { landingPages } from "@/lib/landing-pages";

const page = landingPages.find((p) => p.path === "/driving-school-website-design")!;

export const Route = createFileRoute("/driving-school-website-design")({
  head: () => landingHead(page),
  component: () => <LandingPage page={page} />,
});
