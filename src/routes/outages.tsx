import { createFileRoute, Link } from "@tanstack/react-router";

import {
  Banner,
  Bullets,
  CallButton,
  Callout,
  Compare,
  FactGrid,
  GuideCTA,
  GuideHero,
  OnThisPage,
  Prose,
  Related,
  Section,
  Timeline,
} from "../components/blocks";
import { FaqList } from "../components/site-chrome";
import { usePageMeta } from "../hooks/use-page-meta";
import coverage from "../assets/coverage.jpg";
import fiber from "../assets/fiber.jpg";
import compareImg from "../assets/compare.jpg";

export const Route = createFileRoute("/outages")({
  component: OutagesPage,
});

const REASONS = [
  {
    t: "Network maintenance",
    d: "Providers sometimes work on equipment or lines, which can briefly interrupt service.",
  },
  {
    t: "Damaged fiber or physical cables",
    d: "Construction, accidents, fallen branches or animals can damage the cables that carry your service.",
  },
  {
    t: "Equipment failures",
    d: "Hardware in a provider's network, from street cabinets to exchange equipment, can fail like any other electronics.",
  },
  {
    t: "Power interruptions",
    d: "Network equipment and your own modem and router need electricity.",
  },
  {
    t: "Severe weather",
    d: "Storms, flooding, extreme heat or ice can damage equipment and make repair sites harder to reach.",
  },
  {
    t: "Congestion or technical faults",
    d: "Heavy demand or software and configuration faults can degrade or interrupt service without any physical damage.",
  },
  {
    t: "Unexpected infrastructure problems",
    d: "Some interruptions have no obvious outward cause, and take time for engineers to diagnose.",
  },
] as const;

const DETECT = [
  {
    t: "Check your provider's website",
    d: "Many providers publish an outage or service-status page.",
  },
  {
    t: "Check the provider's service-status page or app",
    d: "Sign-in to your account may show whether your address is affected.",
  },
  {
    t: "Look for notifications from your provider",
    d: "Providers may send text messages, emails or app alerts about incidents and planned maintenance.",
  },
  {
    t: "Contact provider support",
    d: "The provider can confirm whether there is a known incident at your address and give the most accurate update.",
  },
  {
    t: "Compare with nearby households",
    d: "If neighbors on the same provider are offline too, a wider problem is more likely.",
  },
] as const;

const FACTORS = [
  {
    t: "The nature of the fault",
    d: "Restarting a piece of equipment is very different from replacing a damaged section of cable.",
  },
  {
    t: "Local or widespread",
    d: "A fault affecting one home is typically simpler to deal with than one affecting a whole neighborhood or region.",
  },
  {
    t: "The infrastructure affected",
    d: "Different parts of a network (street cabinets, buried cable, overhead cable, exchange equipment) need different kinds of repair.",
  },
  {
    t: "Availability of repair teams",
    d: "Engineers must be assigned, travel to the site and often work in sequence across many faults.",
  },
  {
    t: "Weather and access conditions",
    d: "Storms, flooding or blocked roads can make it unsafe or impossible to reach the damaged equipment.",
  },
  {
    t: "The provider's restoration process",
    d: "Providers prioritize and sequence repairs differently, and some faults need testing before service returns.",
  },
] as const;

const DURING = [
  {
    t: "Check your provider's outage notifications",
    d: "Use mobile data to look at your provider's status page or app.",
  },
  {
    t: "Avoid repeatedly restarting equipment",
    d: "One proper restart is reasonable.",
  },
  {
    t: "Preserve mobile battery power if using mobile data as a backup",
    d: "Lower screen brightness, close unused apps and consider battery-saver mode.",
  },
  {
    t: "Save important work",
    d: "Save documents locally, and note anything you need to submit once the connection returns.",
  },
  {
    t: "Keep devices charged",
    d: "If the outage is linked to a power cut, charged phones and laptops are your lifeline.",
  },
  {
    t: "Follow updates from the service provider",
    d: "Their notices are the authoritative source of restoration information for your area.",
  },
] as const;

const FAQS = [
  {
    q: "How long can an internet outage last?",
    a: "There is no universal duration. A minor equipment issue may be resolved quickly, while infrastructure damage or a wide-area outage can take considerably longer. The cause, the scale, the type of equipment affected, repair-team availability and weather and access conditions all play a part. Only your service provider can give an accurate update for your area, and Upgrade Net cannot estimate or promise a restoration time.",
  },
  {
    q: "Will my internet return automatically?",
    a: "In most cases, yes: once the underlying fault is fixed, your equipment reconnects without any action from you. Occasionally a router or modem needs a restart before it picks the connection back up. If the provider says service has been restored and you are still offline, restart your equipment once, following the manufacturer's instructions, and then contact the provider.",
  },
  {
    q: "What if only my area is affected?",
    a: "An area-wide outage means the cause lies in a shared part of your provider's network, so nothing in your home can fix it. Check the provider's status page, follow their updates, and consider mobile data as a temporary backup for essential tasks.",
  },
  {
    q: "Can planned maintenance cause outages?",
    a: "Yes. Providers sometimes carry out planned work that interrupts service for a period. They often announce this in advance by email, text or on their website, so it is worth checking your provider's notices if your service stops at an unusual time.",
  },
  {
    q: "How will I know when service is restored?",
    a: "Your equipment's lights should return to their normal pattern and devices should reconnect. Many providers also send restoration notifications by text, email or app. If you have not received one and your connection is still down, contact your provider.",
  },
  {
    q: "Should I contact my provider during an outage?",
    a: "Check their status page first, since a known incident may already have updates. If there is no information about your area, or your lights suggest a fault, report the problem so they can investigate your address.",
  },
] as const;

const SECTIONS = [
  { id: "what-is", label: "What is an outage?" },
  { id: "why", label: "Why they happen" },
  { id: "detect", label: "Is my area affected?" },
  { id: "duration", label: "How long?" },
  { id: "during", label: "During an outage" },
  { id: "router-or-provider", label: "Router or provider?" },
  { id: "outage-faq", label: "FAQ" },
] as const;

function OutagesPage() {
  usePageMeta({
    title: "Internet Outages: How Long Do They Last? | Upgrade Net",
    description:
      "What causes an internet outage, how to tell whether your area is affected, why restoration times vary and what to do while you wait. Independent, plain-language guide.",
    path: "/outages",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  });

  return (
    <>
      <GuideHero
        variant="banner"
        index="02"
        eyebrow="Outages & restoration"
        title="Internet outages: what happens and what to expect."
        lead="Outages are frustrating partly because the answers sit with someone else. This guide explains what is happening, how to tell it from a home equipment problem, and why nobody can honestly promise a restoration time."
        image={coverage}
        alt="Aerial view of a sunlit residential neighborhood at golden hour with homes sharing the same streets"
        caption="Fig. 01 — An outage can affect one home, one street or a whole service area."
        actions={<CallButton>Get assistance</CallButton>}
      />
      <OnThisPage items={SECTIONS} />

      <Section id="what-is" n="01" kicker="Definition" title="What is an internet outage?">
        <Prose>
          <p>
            An internet outage is an interruption in connectivity. It can affect a single household,
            a neighborhood or a much wider service area, and it can last for a few minutes or
            considerably longer.
          </p>
          <p>
            What matters most is where the fault sits. If it is inside your home (a frozen router, a
            loose cable), you can often fix it yourself. If it is on your provider's network, it is
            their job to find and repair it, and waiting for them is usually the only option.
          </p>
        </Prose>
      </Section>

      <Section id="why" n="02" kicker="Causes" title="Why do internet outages happen?" tone="ivory">
        <FactGrid items={REASONS} cols={2} />
      </Section>

      <Section
        id="detect"
        n="03"
        kicker="Checking"
        title="How can I tell if my area has an outage?"
      >
        <Bullets items={DETECT} />
        <div className="mt-10">
          <Callout title="One device, the whole home, or a wider area?">
            <p>
              If only one device is affected, the cause is probably that device. If every device in
              your home is offline, the cause is the router, the line or the service. If neighbors
              on the same provider are also offline, or the provider lists an incident, it is
              probably a wider interruption.
            </p>
          </Callout>
        </div>
      </Section>

      <Banner
        image={fiber}
        alt="Glowing fiber optic strands against a dark background"
        label="Fig. 02 — The network behind the outlet"
      >
        Restoration is a repair process, not a switch.
      </Banner>

      <Section
        id="duration"
        n="04"
        kicker="Restoration"
        title="How long does it take for internet service to return?"
        tone="ivory"
      >
        <Timeline items={FACTORS} label="Factor" />
        <div className="mt-10">
          <Callout title="Minor versus major faults" tone="dark">
            <p>
              Minor equipment issues may be resolved quickly. Infrastructure damage or widespread
              outages can take considerably longer. Your provider's status page, app or support line
              is the only reliable source for timing in your area.
            </p>
          </Callout>
        </div>
      </Section>

      <Section
        id="during"
        n="05"
        kicker="While you wait"
        title="What should you do during an outage?"
      >
        <Bullets items={DURING} />
      </Section>

      <Section
        id="router-or-provider"
        n="06"
        kicker="Diagnosis"
        title="Is it my router or a provider outage?"
        tone="ivory"
      >
        <Compare
          left={{
            title: "Likely a home equipment issue",
            items: [
              "Only some devices are affected, or one room loses signal.",
              "Router or modem lights look abnormal, or it feels unusually hot.",
              "A restart briefly fixes the problem, but it returns.",
              "A cable looks loose or damaged inside the home.",
              "Your provider's status page shows no incident.",
              "Wired and wireless devices behave differently.",
            ],
          }}
          right={{
            title: "Likely a wider network interruption",
            items: [
              "Every device is offline, wired or wireless.",
              "Neighbors using the same provider have the same problem.",
              "The provider's status page or app lists an incident.",
              "Equipment lights indicate no connection to the provider.",
              "Restarting your equipment makes no difference.",
              "The problem began suddenly, perhaps after a storm or power cut.",
            ],
          }}
          caption="If your signs match the right-hand column, restarting the router again and again will not help. Check your provider's information instead."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/internet" className="btn-outline">
            Home troubleshooting checklist
          </Link>
        </div>
      </Section>

      <section id="outage-faq" aria-labelledby="outage-faq-h" className="scroll-mt-24 rule-b">
        <div className="shell grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="label-mono">07 / FAQ</p>
            <h2
              id="outage-faq-h"
              className="mt-5 text-3xl font-extrabold uppercase md:text-[2.6rem]"
            >
              Outage questions
            </h2>
            <img
              src={compareImg}
              alt="Hands holding a tablet on a bright desk"
              loading="lazy"
              width={1408}
              height={1008}
              className="mt-8 hidden aspect-[4/3] w-full object-cover md:block"
            />
          </div>
          <div className="md:col-span-8">
            <FaqList items={FAQS} idPrefix="outage" />
          </div>
        </div>
      </section>

      <Related
        items={[
          {
            to: "/internet",
            label: "Internet connection",
            note: "An eight-step checklist for when your internet stops working.",
          },
          {
            to: "/wifi",
            label: "Home Wi-Fi",
            note: "When the connection is fine but the wireless signal isn't.",
          },
          {
            to: "/faq",
            label: "All questions",
            note: "Answers on internet, cable TV, streaming, Wi-Fi and Upgrade Net.",
          },
        ]}
      />
      <GuideCTA
        title="Not sure what you're dealing with?"
        text="Our independent assistance team can help you work out whether your issue looks like a home equipment problem or a provider matter, and what to do next."
      />
    </>
  );
}
