import { createFileRoute } from "@tanstack/react-router";

import { ArticlePage } from "../components/article-page";

export const Route = createFileRoute("/internet-troubleshooting")({
  component: InternetTroubleshootingPage,
});

function InternetTroubleshootingPage() {
  return <ArticlePage path="/internet-troubleshooting" />;
}
