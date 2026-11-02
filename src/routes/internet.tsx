import { createFileRoute } from "@tanstack/react-router";

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
  Related,
  Section,
  Steps,
} from "../components/blocks";
import { Parallax } from "../components/motion";
import { usePageMeta } from "../hooks/use-page-meta";
import internetHero from "../assets/internet-hero.jpg";
import fiber from "../assets/fiber.jpg";
import wifiImg from "../assets/wifi.jpg";

export const Route = createFileRoute("/internet")({
  component: InternetPage,
});

const CAUSES = [
  {
    t: "Router or modem fault",
    d: "Home networking equipment can freeze, overheat or fail with age.",
  },
  {
    t: "Loose or damaged cables",
    d: "A coaxial, Ethernet or power cable that has worked loose or been bumped can cut the connection completely.",
  },
  {
    t: "Device or settings problem",
    d: "A changed Wi-Fi password, the wrong network selected or a leftover VPN can block a healthy connection.",
  },
  {
    t: "Weak Wi-Fi signal",
    d: "Distance, walls and interference can weaken the signal until a device can no longer hold a connection.",
  },
  {
    t: "Provider outage or local fault",
    d: "Maintenance, a damaged line or failed equipment on the provider's network can affect many homes at once.",
  },
  {
    t: "Account restrictions",
    d: "A suspended account, an unresolved billing matter or a plan change can limit or switch off service.",
  },
] as const;

const STEPS = [
  {
    t: "Check whether one device or every device is affected",
    d: "Try a phone, a laptop and a TV.",
  },
  {
    t: "Check the lights on your router and modem",
    d: "Look for lights that are off, a different color from usual, or blinking continuously.",
  },
  {
    t: "Check the cables",
    d: "Make sure the power, coaxial or fiber, and Ethernet cables are seated firmly.",
  },
  {
    t: "Restart your router once",
    d: "Follow the manufacturer's instructions: usually off for about 30 seconds, then on, then wait a few minutes.",
  },
  {
    t: "Check your provider's status page",
    d: "Use mobile data to visit the provider's website or app and look for an incident in your area.",
  },
  {
    t: "Contact your provider if it still isn't working",
    d: "If the lights show no connection or the issue continues, your provider is the one able to investigate and repair it.",
  },
] as const;

const SLOW_OR_DROPPING = [
  {
    t: "Too many devices",
    d: "Every phone, TV and console uses a share of the connection, and background downloads quietly take more.",
  },
  {
    t: "Wi-Fi distance and obstacles",
    d: "Signal falls with distance, walls and floors, so a device at the edge of range keeps connecting and dropping.",
  },
  {
    t: "Interference",
    d: "Microwaves, cordless phones and nearby networks can disturb Wi-Fi, particularly on the 2.4 GHz band.",
  },
  {
    t: "An old or hot router",
    d: "Routers in cabinets or beside heat sources can slow down or restart, and older ones can't keep up with a busy home.",
  },
  {
    t: "Busy periods",
    d: "In the evening many households are online together, which can slow shared parts of the network.",
  },
  {
    t: "Provider-side faults",
    d: "Short, repeated drops on every device can reflect a fault on the line or the provider's network.",
  },
] as const;

const DURING = [
  {
    t: "Check your provider's status page or app",
    d: "Use mobile data. Providers often send text or email alerts too.",
  },
  {
    t: "Avoid repeated restarts",
    d: "One proper restart is reasonable; more won't fix a fault on the provider's side.",
  },
  {
    t: "Save your work and keep devices charged",
    d: "If the outage is linked to a power cut, charged phones and laptops are your lifeline.",
  },
  {
    t: "Follow your provider's updates",
    d: "Their notices are the only reliable source of restoration information for your area.",
  },
] as const;

const IMPROVE = [
  {
    t: "Place the router in an open, central spot",
    d: "A central, raised position usually serves the home better than a corner, a cabinet or the floor.",
  },
  {
    t: "Reduce obstacles and interference",
    d: "Keep it away from thick walls, metal, mirrors, microwaves and cordless phone bases.",
  },
  {
    t: "Use 5 GHz nearby, Ethernet for fixed devices",
    d: "5 GHz is faster at short range, 2.4 GHz travels further, and a cable removes Wi-Fi from the equation.",
  },
  {
    t: "Keep firmware updated and drop unused devices",
    d: "Old phones and forgotten gadgets may still be using bandwidth.",
  },
  {
    t: "Consider a mesh system for large homes",
    d: "Extenders, mesh units and wired access points can fill rooms the router can't reach.",
  },
] as const;

const PROVIDER = [
  {
    t: "Repeated outages",
    d: "Several drops in a short period may mean a line or equipment issue your provider needs to examine.",
  },
  {
    t: "No connection after the checks above",
    d: "If cables are firm, you've restarted once and allowed time to reconnect.",
  },
  {
    t: "Damaged outdoor cables",
    d: "If you can see a fallen, cut or damaged cable outside, do not touch it.",
  },
  {
    t: "Account or billing restrictions",
    d: "Only your provider can see and resolve a suspension, billing hold or plan change.",
  },
] as const;

const SECTIONS = [
  { id: "not-working", label: "Not working?" },
  { id: "what-to-do", label: "What to do" },
  { id: "slow", label: "Slow or dropping" },
  { id: "outages", label: "Outages" },
  { id: "wifi", label: "Wi-Fi" },
  { id: "contact-provider", label: "Contact provider" },
] as const;

function InternetPage() {
  usePageMeta({
    title: "Internet Not Working, Slow or Down? Outages & Wi-Fi Guide | Upgrade Net",
    description:
      "Why is my internet not working, slow or disconnecting? A short checklist, how to tell an outage from a router problem, Wi-Fi tips and when to contact your provider.",
    path: "/internet",
  });

  return (
    <>
      <GuideHero
        index="01"
        eyebrow="Internet, outages & Wi-Fi"
        title="When your internet stops working, start here."
        lead="The problem may involve your home equipment, device settings, Wi-Fi signal or your service provider's network. This guide helps you tell them apart."
        image={internetHero}
        alt="Laptop open on a marble table in a bright apartment with a living room behind it"
        caption="Fig. 01 — Most home connection problems begin with one question: what exactly has stopped?"
        actions={
          <>
            <CallButton>Get assistance</CallButton>
            <a href="#what-to-do" className="btn-outline">
              Jump to the checklist
            </a>
          </>
        }
      />
      <OnThisPage items={SECTIONS} />

      <Section id="not-working" n="01" kicker="Causes" title="Why is my internet not working?">
        <FactGrid items={CAUSES} cols={2} />
      </Section>

      <Section
        id="what-to-do"
        n="02"
        kicker="Checklist"
        title="What to do when it suddenly stops"
        tone="ivory"
      >
        <Steps items={STEPS} />
      </Section>

      <Banner
        image={fiber}
        alt="Glowing fiber optic strands against a dark background"
        label="Fig. 02 — Behind the wall"
      >
        Your home equipment is only the last few meters of a much longer path.
      </Banner>

      <Section id="slow" n="03" kicker="Speed & stability" title="Why is it slow or disconnecting?">
        <FactGrid items={SLOW_OR_DROPPING} cols={2} />
      </Section>

      <Section
        id="outages"
        n="04"
        kicker="Outages"
        title="Is it my router or a provider outage?"
        tone="ivory"
      >
        <Compare
          left={{
            title: "Likely your home equipment",
            items: [
              "Only some devices or rooms are affected.",
              "Router lights look abnormal, or it feels hot.",
              "A restart helps briefly, then the problem returns.",
              "The provider's status page shows no incident.",
            ],
          }}
          right={{
            title: "Likely a provider outage",
            items: [
              "Every device is offline, wired or wireless.",
              "Neighbors on the same provider have the same problem.",
              "The status page or app lists an incident.",
              "Restarting your equipment makes no difference.",
            ],
          }}
          caption="If your signs match the right-hand column, restarting again and again will not help."
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <Callout title="How long does an outage last?" tone="dark">
            <p>
              There is no universal answer. A minor equipment issue may be fixed quickly, while
              cable damage or a wide-area outage can take much longer. Only your provider can give
              an accurate update, and Upgrade Net cannot estimate or promise a restoration time.
            </p>
          </Callout>
          <div>
            <p className="label-mono">While you wait</p>
            <div className="mt-4">
              <Bullets items={DURING} />
            </div>
          </div>
        </div>
      </Section>

      <Section id="wifi" n="05" kicker="Wi-Fi" title="How to improve your Wi-Fi">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <Bullets items={IMPROVE} />
          </div>
          <div className="lg:col-span-2">
            <Parallax className="aspect-[4/5] w-full" strength={20}>
              <img
                src={wifiImg}
                alt="White Wi-Fi router standing in an open spot on an oak console table"
                loading="lazy"
                width={1200}
                height={1504}
                className="img-cover"
              />
            </Parallax>
            <p className="label-mono mt-3">Open, central and off the floor.</p>
          </div>
        </div>
      </Section>

      <Section
        id="contact-provider"
        n="06"
        kicker="Escalation"
        title="When should you contact your internet provider?"
        tone="ivory"
      >
        <Bullets items={PROVIDER} />
        <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
          If the problem isn&apos;t solved, visit our live team support on our toll-free number{" "}
          <a
            href="tel:+18552024908"
            className="whitespace-nowrap font-bold text-foreground underline decoration-accent underline-offset-4"
          >
            (855) 202-4908
          </a>
          . Our independent assistance team can help you understand the next steps.
        </p>
      </Section>

      <Related
        items={[
          {
            to: "/tv-streaming",
            label: "TV & streaming",
            note: "No Signal, missing channels and video that keeps buffering.",
          },
          {
            to: "/faq",
            label: "All questions",
            note: "Answers on internet, outages, TV, streaming, Wi-Fi and Upgrade Net.",
          },
        ]}
      />
      <GuideCTA
        title="Still stuck? Talk it through."
        text="If you have worked through the checklist and are not sure what to do next, our independent assistance team can help you understand your situation and your options."
      />
    </>
  );
}
