import { createFileRoute } from "@tanstack/react-router";

import { ArticlePage } from "../components/article-page";

export const Route = createFileRoute("/home-internet-plans-guide")({
  component: HomeInternetPlansGuidePage,
});

function HomeInternetPlansGuidePage() {
  return <ArticlePage path="/home-internet-plans-guide" />;
}
