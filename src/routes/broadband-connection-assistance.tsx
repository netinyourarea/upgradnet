import { createFileRoute } from "@tanstack/react-router";

import { ArticlePage } from "../components/article-page";

export const Route = createFileRoute("/broadband-connection-assistance")({
  component: BroadbandConnectionAssistancePage,
});

function BroadbandConnectionAssistancePage() {
  return <ArticlePage path="/broadband-connection-assistance" />;
}
