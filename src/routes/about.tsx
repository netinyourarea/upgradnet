import { createFileRoute, Link } from "@tanstack/react-router";

import {
  Bullets,
  CallButton,
  Callout,
  Disclosure,
  FactGrid,
  GuideCTA,
  GuideHero,
  Prose,
  Section,
  Steps,
} from "../components/blocks";
import { usePageMeta } from "../hooks/use-page-meta";
import compare from "../assets/compare.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const EXPLAIN = [
  {
    t: "Internet connectivity",
    d: "Why connections slow down, drop or stop, and how to tell a home issue from a provider issue.",
  },
  {
    t: "Internet outages",
    d: "What an outage is, why restoration times vary and what to do while you wait.",
  },
  {
    t: "Cable television",
    d: "No Signal messages, missing channels, set-top boxes and cable connections.",
  },
  { t: "Streaming", d: "Buffering, changing video quality and apps that will not load." },
  { t: "Home Wi-Fi", d: "Router placement, coverage, interference and connecting many devices." },
  {
    t: "When to contact your provider",
    d: "Recognizing the problems that only your service provider can resolve.",
  },
] as const;

const APPROACH = [
  {
    t: "No provider affiliation",
    d: "We are not affiliated with any particular service provider unless explicitly stated.",
  },
  {
    t: "Honest about limits",
    d: "We do not control networks, restore outages or guarantee that a service will be available or fast.",
  },
  {
    t: "Providers decide provider matters",
    d: "Service availability, pricing, technical support, outage information and restoration schedules are determined by the relevant service provider.",
  },
  {
    t: "Information first",
    d: "The guides on this site are free to read and written so that you can act on them without contacting anyone.",
  },
] as const;

const STEPS = [
  {
    t: "Describe your issue",
    d: "Tell us what is happening with your internet, cable television, Wi-Fi or streaming connection.",
  },
  {
    t: "Understand your options",
    d: "Explore practical troubleshooting guidance and understand which issues may require your service provider's attention.",
  },
  {
    t: "Get independent assistance",
    d: "Connect with our assistance team to discuss your situation and understand the next steps.",
  },
] as const;

const COMMIT = [
  { t: "Plain language", d: "We explain technical topics in everyday terms." },
  {
    t: "No invented numbers",
    d: "We do not publish made-up statistics, restoration times or performance guarantees.",
  },
  { t: "Clear disclosure", d: "We tell you who we are and who we are not, on every page." },
  { t: "Practical steps", d: "Where we can, we give you something to check or do." },
] as const;

function AboutPage() {
  usePageMeta({
    title: "About Upgrade Net: Independent Connectivity Guidance",
    description:
      "Upgrade Net is an independent third-party assistance resource helping households understand internet, cable TV, streaming and home Wi-Fi. We are not a service provider.",
    path: "/about",
  });

  return (
    <>
      <GuideHero
        variant="split-reverse"
        index="06"
        eyebrow="About"
        title="Independent guidance for everyday connectivity."
        lead="Upgrade Net is an independent third-party assistance resource focused on helping households better understand internet connectivity, cable television, streaming and home Wi-Fi."
        image={compare}
        alt="Hands holding a tablet on a bright desk"
        caption="Fig. 01 — Understanding the problem comes before solving it."
        actions={
          <>
            <CallButton>Get assistance</CallButton>
            <Link to="/faq" className="btn-outline">
              Read the FAQ
            </Link>
          </>
        }
      />

      <Section
        id="purpose"
        n="01"
        kicker="Our purpose"
        title="Making everyday connectivity easier to navigate"
      >
        <Prose>
          <p>
            We believe that understanding a connectivity problem is the first step towards finding
            the right solution.
          </p>
          <p>
            Through accessible information, practical troubleshooting guidance and independent
            assistance, we aim to make everyday connectivity questions easier to navigate. Most
            people do not want a lecture on networking. They want to know what has gone wrong, what
            they can try, and who they need to call.
          </p>
        </Prose>
        <div className="mt-10">
          <Disclosure />
        </div>
      </Section>

      <Section
        id="explain"
        n="02"
        kicker="What we help explain"
        title="Topics we cover"
        tone="ivory"
      >
        <FactGrid items={EXPLAIN} cols={2} />
      </Section>

      <Section
        id="independent"
        n="03"
        kicker="Our independent approach"
        title="Third-party, by design"
      >
        <Prose className="mb-8">
          <p>
            We are not an internet service provider or cable operator. We do not own or operate
            telecommunications infrastructure, and we are not affiliated with any particular service
            provider unless explicitly stated.
          </p>
        </Prose>
        <Bullets items={APPROACH} />
      </Section>

      <Section
        id="assist"
        n="04"
        kicker="How we assist households"
        title="A simple, three-step process"
        tone="ivory"
      >
        <Steps items={STEPS} />
        <div className="mt-10">
          <Callout title="What we do not do">
            <p>
              We do not restore outages, repair provider networks or guarantee service. When a
              problem sits with your provider, we will say so and help you understand what to ask
              them.
            </p>
          </Callout>
        </div>
      </Section>

      <Section id="commitment" n="05" kicker="Our commitment" title="Clear information">
        <FactGrid items={COMMIT} cols={2} />
        <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
          Have a question about something on this site?{" "}
          <Link to="/contact" className="underline decoration-accent underline-offset-4">
            Get in touch
          </Link>
          .
        </p>
      </Section>

      <GuideCTA
        title="Questions about your connection?"
        text="Start with our guides, or speak with our assistance team about what you are experiencing."
      />
    </>
  );
}
