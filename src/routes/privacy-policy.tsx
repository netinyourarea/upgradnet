import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "../components/legal";
import { usePageMeta } from "../hooks/use-page-meta";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
});

const SECTIONS = [
  {
    title: "Who this policy covers",
    body: "Upgrade Net is an independent third-party service assistance startup, launched in 2026. This policy explains what we collect when you visit this website, call us or send us a message, and how we use it.",
  },
  {
    title: "What we collect",
    body: "When you contact us we collect what you choose to share: usually your name, your phone number or email address and a description of the issue you want help with. If you request paid assistance, we also collect the details needed to process and record that request. Our website may also collect basic technical information, such as your browser type and the pages you view.",
  },
  {
    title: "What we never ask for",
    body: "We never ask for your provider account passwords or other sign-in credentials, and you should not share them with us. We do not need sensitive personal information to guide you through a connectivity issue.",
  },
  {
    title: "How we use your information",
    body: "We use it to understand your question, respond to you, deliver and record the assistance you requested, handle refund requests, keep our records and improve this website. We do not use it to access or change your provider account.",
  },
  {
    title: "Sharing",
    body: "We do not sell the personal information you give us. We share it only where needed to run our service (for example, with suppliers who help operate our website, phone line or payment handling) or where the law requires.",
  },
  {
    title: "Cookies, analytics and advertising",
    body: "This website uses a Google tag (gtag.js), which may set cookies or similar technologies to measure how the site is used and how our advertising performs. You can control cookies through your browser settings, and Google provides its own controls for advertising preferences.",
  },
  {
    title: "Secure connection",
    body: "This website is intended to be served over HTTPS so that information sent between your browser and the site is encrypted. No method of transmission or storage is completely secure, so please share only what is necessary.",
  },
  {
    title: "Retention",
    body: "We keep information only as long as needed for the purposes above, including to handle questions and refund requests, and as the law requires.",
  },
  {
    title: "Your choices",
    body: "You can ask what information we hold about you, or ask us to correct or delete it, through our Contact page or by phone. Your rights may vary depending on where you live.",
  },
  {
    title: "Changes",
    body: "We may update this policy from time to time. The version on this page is the current one.",
  },
] as const;

function PrivacyPolicyPage() {
  usePageMeta({
    title: "Privacy Policy | Upgrade Net",
    description:
      "How Upgrade Net, an independent third-party service assistance startup, collects, uses and protects information. We never ask for provider passwords.",
    path: "/privacy-policy",
  });

  return (
    <LegalPage
      id="privacy"
      title="Privacy policy"
      lead="What we collect, why we collect it, what we never ask for, and how your information is used."
      sections={SECTIONS}
    />
  );
}
