import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "../components/legal";
import { usePageMeta } from "../hooks/use-page-meta";

export const Route = createFileRoute("/disclaimer")({
  component: DisclaimerPage,
});

const POINTS = [
  {
    title: "Independent and unaffiliated",
    body: "Upgrade Net is an independent third-party service assistance startup, launched in 2026. We are not affiliated with, endorsed by or sponsored by any cable, internet or streaming service provider, and nothing on this website suggests otherwise.",
  },
  {
    title: "We are not a provider",
    body: "We are not an internet service provider, cable television operator or telecommunications carrier. We do not sell internet, cable or streaming plans, and we do not own, operate or maintain network infrastructure.",
  },
  {
    title: "Our fee is separate",
    body: "We charge a service fee for the assistance we deliver. It is separate from your provider's charges, and your provider continues to bill you as it always has.",
  },
  {
    title: "Provider decisions stay with the provider",
    body: "Service availability, pricing, technical support, outage information and restoration schedules are determined by your service provider. We cannot restore an outage, repair a provider network or change a provider account.",
  },
  {
    title: "Trademarks",
    body: "All trademarks belong to their respective owners. Where a provider name appears, it is a descriptive reference only, marked with ™ or ® as appropriate, and does not indicate any relationship with that company.",
  },
  {
    title: "General guidance, no promised outcome",
    body: "The guides and answers on this site are general information. Equipment and services differ, so follow your equipment maker's and provider's instructions, and never open provider equipment or work on cables outside your home. We cannot promise that a suggestion will resolve your issue, and the outage and restoration explanations on this site are not time estimates.",
  },
  {
    title: "Check details with your provider",
    body: "Before acting on anything that affects your account, billing, plan, equipment or repairs, confirm the details directly with your service provider.",
  },
] as const;

function DisclaimerPage() {
  usePageMeta({
    title: "Disclaimer | Upgrade Net",
    description:
      "Upgrade Net is an independent third-party service assistance startup, not affiliated with any cable, internet or streaming provider. Read our full disclaimer.",
    path: "/disclaimer",
  });

  return (
    <LegalPage
      id="disclaimer"
      title="Disclaimer"
      lead="Who we are, who we are not, and what our guidance can and cannot do."
      sections={POINTS}
    />
  );
}
