import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "../components/legal";
import { usePageMeta } from "../hooks/use-page-meta";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
});

const SECTIONS = [
  {
    title: "Who we are",
    body: "Upgrade Net is an independent third-party service assistance startup, launched in 2026. We guide and support households with questions about internet connectivity, cable television, streaming and home Wi-Fi. We are not affiliated with, endorsed by or sponsored by any cable, internet or streaming service provider.",
  },
  {
    title: "What we do and do not do",
    body: "We assist, guide and help you understand your options. We do not sell internet, cable or streaming plans, we do not own or operate network infrastructure, and using this website does not create an agency relationship between you and Upgrade Net. Service availability, pricing, technical support, outage information and restoration schedules are determined by your service provider.",
  },
  {
    title: "Our service fee",
    body: "Our assistance carries a service fee that is separate from, and in addition to, anything your provider charges. Your provider continues to bill you as before. Please confirm the fee for the assistance you are requesting before you agree to pay it.",
  },
  {
    title: "Refunds",
    body: "Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. Eligibility depends on the service type and on whether assistance has already been delivered. Please read our Refund Policy for the full details.",
  },
  {
    title: "Information we will never ask for",
    body: "We never ask for your provider account password or other sign-in credentials. Please do not share them with us, by phone or through the website.",
  },
  {
    title: "General guidance only",
    body: "Information on this website is general guidance. We make reasonable efforts to keep it accurate, but equipment, services and circumstances differ, and we do not promise that any suggestion will resolve your issue. Confirm anything that affects your account, billing, equipment or repairs directly with your provider.",
  },
  {
    title: "Trademarks",
    body: "Provider and product names, where mentioned, are trademarks of their respective owners and are used only to describe the topic being discussed. Their use does not suggest any partnership, sponsorship or approval.",
  },
  {
    title: "Acceptable use",
    body: "Please use this website and our assistance honestly. Do not submit false information, attempt to disrupt or gain unauthorized access to the site, or use it for unlawful purposes.",
  },
  {
    title: "Limitation of liability",
    body: "To the extent permitted by law, Upgrade Net is not liable for losses arising from reliance on information on this website, from service interruptions, or from actions or omissions of third-party providers. Nothing in these terms limits any liability that cannot be limited by law.",
  },
  {
    title: "Changes to these terms",
    body: "We may update these terms from time to time. Continued use of the website after changes are posted means you accept the updated terms.",
  },
] as const;

function TermsPage() {
  usePageMeta({
    title: "Terms & Conditions | Upgrade Net",
    description:
      "Terms for using Upgrade Net, an independent third-party service assistance startup. Covers our separate service fee, refunds and what we do not do.",
    path: "/terms",
  });

  return (
    <LegalPage
      id="terms"
      title="Terms & conditions"
      lead="The terms for using Upgrade Net's website and assistance, including our service fee and how it relates to your provider's charges."
      sections={SECTIONS}
    />
  );
}
