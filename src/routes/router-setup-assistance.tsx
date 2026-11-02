import { createFileRoute } from "@tanstack/react-router";

import { ArticlePage } from "../components/article-page";

export const Route = createFileRoute("/router-setup-assistance")({
  component: RouterSetupAssistancePage,
});

function RouterSetupAssistancePage() {
  return <ArticlePage path="/router-setup-assistance" />;
}
