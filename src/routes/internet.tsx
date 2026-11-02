import { createFileRoute, Link } from "@tanstack/react-router";

import {
  Banner,
  Bullets,
  CallButton,
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
    t: "Router or modem malfunction",
    d: "Home networking equipment can freeze, overheat or fail with age.",
  },
  {
    t: "Loose or disconnected cables",
    d: "A coaxial, Ethernet or power cable that has worked loose, been bumped or been chewed by a pet can cut the connection completely.",
  },
  {
    t: "Temporary device problems",
    d: "Phones, laptops and TVs sometimes lose their network connection on their own.",
  },
  {
    t: "Incorrect network settings",
    d: "A changed Wi-Fi password, a wrong network selected or a leftover setting such as a manual IP address or VPN can block an otherwise healthy connection.",
  },
  {
    t: "Wi-Fi signal problems",
    d: "Distance, walls and interference can weaken the wireless signal until a device can no longer hold a connection.",
  },
  {
    t: "Local network interruptions",
    d: "Maintenance, a damaged line or a failed piece of equipment serving your street or neighborhood can interrupt service for several homes at once.",
  },
  {
    t: "Service provider outages",
    d: "A wider fault on the provider's network affects customers across an area.",
  },
  {
    t: "Account or service-related restrictions",
    d: "A suspended account, an unresolved billing matter or a change to your plan can limit or switch off service.",
  },
] as const;

const STEPS = [
  {
    t: "Check whether one device or every device is affected",
    d: "Try a phone, a laptop and a TV.",
  },
  {
    t: "Check the power indicators on your router and modem",
    d: "Look for lights that are off, a different color from usual, or blinking continuously.",
  },
  {
    t: "Inspect cables and connections",
    d: "Make sure the power cable, the coaxial or fiber cable from the wall and any Ethernet cables are seated firmly.",
  },
  {
    t: "Confirm the device is on the correct Wi-Fi network",
    d: "Phones and laptops sometimes switch to a neighbor's network, a guest network or a public hotspot.",
  },
  {
    t: "Restart your router following the manufacturer's instructions",
    d: "Many routers recommend powering off for about 30 seconds and then back on.",
  },
  {
    t: "Allow time for the equipment to reconnect",
    d: "Modems and routers can take several minutes to start up and reconnect.",
  },
  {
    t: "Check your provider's own outage or service-status information",
    d: "Use your phone's mobile data or another connection to visit the provider's website or app.",
  },
  {
    t: "Contact your actual service provider if it looks like their network or your account",
    d: "If the lights show no connection, the status page lists an incident, or the issue continues after the steps above, your provider is the party able to investigate and repair it.",
  },
] as const;

const DISCONNECTS = [
  {
    t: "Weak wireless signals",
    d: "A device at the edge of Wi-Fi range may repeatedly connect and drop.",
  },
  {
    t: "Router overheating",
    d: "Routers placed in cabinets, under stacks of paper or beside heat sources can run hot and restart or slow down on their own.",
  },
  {
    t: "Equipment faults",
    d: "An aging router, a damaged cable or a failing connector can cause intermittent drops that seem to have no pattern.",
  },
  {
    t: "Network congestion",
    d: "When many devices or neighbors are active, shared capacity gets stretched.",
  },
  {
    t: "Wireless interference",
    d: "Microwaves, cordless phones, baby monitors and nearby networks can disturb Wi-Fi channels, particularly on the 2.4 GHz band.",
  },
  {
    t: "Provider-side interruptions",
    d: "Short, repeated drops affecting every device and connection type can reflect a fault on the line or the provider's network.",
  },
] as const;

const SLOW = [
  {
    t: "Multiple connected devices",
    d: "Every phone, TV, console and smart device uses a share of your connection, even if some use only a little.",
  },
  {
    t: "Network congestion",
    d: "In the evening, many households are online together.",
  },
  {
    t: "Wi-Fi distance",
    d: "Signal strength falls with distance and obstacles.",
  },
  {
    t: "Background downloads",
    d: "Software updates, cloud photo backups and game downloads can quietly consume bandwidth while you are trying to do something else.",
  },
  {
    t: "Router limitations",
    d: "An older router may not keep up with your plan's speed or with a busy household, and can become the slowest link in the chain.",
  },
  {
    t: "Device performance",
    d: "An old phone or a laptop full of background programs may be slow on its own, even on a fast connection.",
  },
  {
    t: "Provider-side speed issues",
    d: "Faults, maintenance or limits within your plan can reduce the speed you receive.",
  },
] as const;

const IMPROVE = [
  {
    t: "Place the router in an open, central location",
    d: "Wi-Fi radiates outward, so a central, elevated spot usually serves the home better than a corner or the floor.",
  },
  {
    t: "Avoid unnecessary physical obstructions",
    d: "Thick walls, metal, mirrors and large aquariums absorb or reflect signals.",
  },
  {
    t: "Keep router firmware updated where supported",
    d: "Many routers update themselves; others have an update option in their settings or app.",
  },
  {
    t: "Use Ethernet for devices that need stability",
    d: "A cable from the router to a desktop, console or streaming box removes Wi-Fi from the equation.",
  },
  {
    t: "Disconnect devices that are no longer needed",
    d: "Old phones, unused tablets and forgotten gadgets may still be connected and using bandwidth.",
  },
  {
    t: "Position equipment away from major sources of interference",
    d: "Keep the router away from microwaves, cordless phone bases and large electrical equipment.",
  },
] as const;

const PROVIDER = [
  {
    t: "Repeated outages",
    d: "If service drops several times in a short period, there may be a line or equipment issue your provider needs to examine.",
  },
  {
    t: "Persistent loss of connectivity",
    d: "If the connection has not returned after you have checked cables, restarted the router and allowed time to reconnect.",
  },
  {
    t: "Damaged external cables",
    d: "If you can see a fallen, cut or damaged cable outside, do not touch it.",
  },
  {
    t: "Provider network problems",
    d: "If the provider's status page lists an incident or neighbors using the same provider have the same problem.",
  },
  {
    t: "Account-related restrictions",
    d: "If you suspect a suspended account, a billing hold or a plan change, only your provider can see and resolve this.",
  },
] as const;

const SECTIONS = [
  { id: "not-working", label: "Not working?" },
  { id: "what-to-do", label: "What to do" },
  { id: "disconnecting", label: "Disconnecting" },
  { id: "slow", label: "Slow internet" },
  { id: "improve", label: "Improve" },
  { id: "contact-provider", label: "Contact provider" },
] as const;

function InternetPage() {
  usePageMeta({
    title: "Internet Not Working? Troubleshooting Guide | Upgrade Net",
    description:
      "Why is my internet not working, disconnecting or slow? Follow an eight-step checklist, learn the common causes and find out when to contact your service provider.",
    path: "/internet",
  });

  return (
    <>
      <GuideHero
        index="01"
        eyebrow="Internet connection guide"
        title="When your internet stops working, start here."
        lead="Internet interruptions can happen for several reasons. The problem may involve your home equipment, device settings, wireless signal or an interruption affecting your service provider's network."
        image={internetHero}
        alt="Laptop open on a marble table in a bright apartment with a living room behind it"
        caption="Fig. 01 — Most home connection problems begin with a simple question: what exactly has stopped?"
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
        title="What to do when your internet suddenly stops"
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

      <Section
        id="disconnecting"
        n="03"
        kicker="Intermittent drops"
        title="Why does my internet keep disconnecting?"
      >
        <Bullets items={DISCONNECTS} />
      </Section>

      <Section id="slow" n="04" kicker="Speed" title="Why is my internet so slow?" tone="ivory">
        <FactGrid items={SLOW} cols={2} />
      </Section>

      <Section
        id="improve"
        n="05"
        kicker="Practical advice"
        title="How to improve your internet experience"
      >
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
        <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
          Want more detail on wireless coverage? Read our{" "}
          <Link to="/wifi" className="underline decoration-accent underline-offset-4">
            home Wi-Fi guide
          </Link>
          .
        </p>
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
            to: "/outages",
            label: "Internet outages",
            note: "What an outage is, how long it can last and how to tell it from a router problem.",
          },
          {
            to: "/wifi",
            label: "Home Wi-Fi",
            note: "Placement, bands, interference and coverage explained in plain language.",
          },
          {
            to: "/streaming",
            label: "Streaming",
            note: "Why video buffers and what a steady stream needs from your connection.",
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
