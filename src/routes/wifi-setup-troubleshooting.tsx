import { createFileRoute } from "@tanstack/react-router";

import { ArticlePage } from "../components/article-page";

export const Route = createFileRoute("/wifi-setup-troubleshooting")({
  component: WifiSetupTroubleshootingPage,
});

function WifiSetupTroubleshootingPage() {
  return <ArticlePage path="/wifi-setup-troubleshooting" />;
}
