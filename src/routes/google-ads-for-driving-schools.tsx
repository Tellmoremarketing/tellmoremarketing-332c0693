import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/landing";
import { landingPages } from "@/lib/landing-pages";

const page = landingPages.find((p) => p.path === "/google-ads-for-driving-schools")!;

export const Route = createFileRoute("/google-ads-for-driving-schools")({
  head: () => landingHead(page),
  component: () => <LandingPage page={page} />,
});
