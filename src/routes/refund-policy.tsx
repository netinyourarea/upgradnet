import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "../components/legal";
import { usePageMeta } from "../hooks/use-page-meta";

export const Route = createFileRoute("/refund-policy")({
  component: RefundPolicyPage,
});

const SECTIONS = [
  {
    title: "The refund window",
    body: "Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. A request made after that window may not be eligible for review.",
  },
  {
    title: "What eligibility depends on",
    body: "Whether a refund can be approved depends on the service type you requested and on whether the assistance has already been delivered. For example, a request made before any assistance has started is treated differently from one made after the assistance has been completed. Each request is reviewed individually, and a refund is not unconditional.",
  },
  {
    title: "How to request a refund",
    body: "Call us on (855) 202-4908 or use the form on our Contact page. Please give the name you used when you requested assistance, the date of the request and a short description of why you are asking for a refund, so we can review it.",
  },
  {
    title: "Charges from your provider",
    body: "Our service fee is separate from anything your cable, internet or streaming provider charges you. We cannot refund, credit or change provider charges, because we do not issue provider bills. Billing disputes, cancellations and credits for provider services must be raised directly with your provider.",
  },
  {
    title: "What we do not do",
    body: "We do not sell internet, cable or streaming plans, so there is no provider plan to return through us. We also do not act on your provider account.",
  },
  {
    title: "Questions",
    body: "If you are unsure whether your situation qualifies, contact us before the window closes and we will explain how the review works.",
  },
] as const;

function RefundPolicyPage() {
  usePageMeta({
    title: "Refund Policy | Upgrade Net",
    description:
      "Refund requests for Upgrade Net assistance can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. Read the eligibility details.",
    path: "/refund-policy",
  });

  return (
    <LegalPage
      id="refund"
      title="Refund policy"
      lead="Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. The details below explain how eligibility works."
      sections={SECTIONS}
    />
  );
}
