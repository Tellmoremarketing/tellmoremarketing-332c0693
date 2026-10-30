import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/landing";
import { landingPages } from "@/lib/landing-pages";

const page = landingPages.find((p) => p.path === "/how-to-promote-a-driving-school")!;

export const Route = createFileRoute("/how-to-promote-a-driving-school")({
  head: () => landingHead(page),
  component: () => <LandingPage page={page} />,
});
