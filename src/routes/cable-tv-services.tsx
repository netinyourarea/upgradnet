import { createFileRoute } from "@tanstack/react-router";

import { ArticlePage } from "../components/article-page";

export const Route = createFileRoute("/cable-tv-services")({
  component: CableTvServicesPage,
});

function CableTvServicesPage() {
  return <ArticlePage path="/cable-tv-services" />;
}
