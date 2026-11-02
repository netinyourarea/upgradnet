import { createFileRoute } from "@tanstack/react-router";

import { CALL_GREETING } from "../components/blocks";
import { LegalPage } from "../components/legal";
import { usePageMeta } from "../hooks/use-page-meta";

export const Route = createFileRoute("/advertising-disclosure")({
  component: AdvertisingDisclosurePage,
});

const SECTIONS = [
  {
    title: "Who is advertising",
    body: "When you see an advertisement for Upgrade Net, it is our own advertisement. We are an independent third-party service assistance startup, launched in 2026, and we advertise our assistance services through online advertising platforms such as Google Ads.",
  },
  {
    title: "No provider endorsement",
    body: "Our advertisements are not placed, approved or endorsed by any cable, internet or streaming service provider. We are not affiliated with, or sponsored by, any such provider, and an advertisement of ours does not mean we speak for one.",
  },
  {
    title: "What our advertisements offer",
    body: "Our advertisements describe assistance and guidance. We do not sell internet, cable or streaming plans. Our assistance carries a service fee that is separate from your provider's charges, and your provider will keep billing you as before.",
  },
  {
    title: "Provider names in advertising",
    body: "If a provider name or service appears in an advertisement, it is a descriptive reference to the topic of the help being offered, and is marked ™ or ® as appropriate. It does not mean the provider has any involvement.",
  },
  {
    title: "When you call us",
    body: `If you call the number shown in our advertisements or on this site, you reach Upgrade Net. Our greeting is: “${CALL_GREETING}” If you were looking for your provider's customer service line, please contact your provider directly.`,
  },
  {
    title: "Your information and advertising",
    body: "This website uses a Google tag to measure how visitors reach us and how our advertising performs. See our Privacy Policy for details on cookies and how to manage them. We never ask for provider passwords.",
  },
  {
    title: "Questions about an advertisement",
    body: "If an advertisement of ours seems unclear or you think it may be misleading, tell us through our Contact page or by phone so we can look into it.",
  },
] as const;

function AdvertisingDisclosurePage() {
  usePageMeta({
    title: "Advertising Disclosure | Upgrade Net",
    description:
      "How Upgrade Net advertises: we are an independent third-party service assistance startup, not affiliated with any provider, and our service fee is separate from provider charges.",
    path: "/advertising-disclosure",
  });

  return (
    <LegalPage
      id="advertising"
      title="Advertising disclosure"
      lead="How and why you may see Upgrade Net advertised, and what our advertisements do and do not mean."
      sections={SECTIONS}
    />
  );
}
