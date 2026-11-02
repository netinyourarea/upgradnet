import { createFileRoute } from "@tanstack/react-router";

import { ArticlePage } from "../components/article-page";

export const Route = createFileRoute("/internet-service-assistance")({
  component: InternetServiceAssistancePage,
});

function InternetServiceAssistancePage() {
  return <ArticlePage path="/internet-service-assistance" />;
}
