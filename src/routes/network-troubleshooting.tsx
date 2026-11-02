import { createFileRoute } from "@tanstack/react-router";

import { ArticlePage } from "../components/article-page";

export const Route = createFileRoute("/network-troubleshooting")({
  component: NetworkTroubleshootingPage,
});

function NetworkTroubleshootingPage() {
  return <ArticlePage path="/network-troubleshooting" />;
}
