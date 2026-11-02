import { createFileRoute, Link } from "@tanstack/react-router";

import {
  Banner,
  Bullets,
  CallButton,
  Compare,
  FactGrid,
  GuideCTA,
  GuideHero,
  OnThisPage,
  Prose,
  Related,
  Section,
  Steps,
} from "../components/blocks";
import { usePageMeta } from "../hooks/use-page-meta";
import wifiImg from "../assets/wifi.jpg";
import smartHome from "../assets/smart-home.jpg";
import work from "../assets/work.jpg";

export const Route = createFileRoute("/wifi")({
  component: WifiPage,
});

const WEAK_ROOMS = [
  {
    t: "Distance from the router",
    d: "Signal fades as it travels.",
  },
  {
    t: "Walls and floors",
    d: "Brick, concrete, plaster with metal mesh and floors between levels absorb a lot of Wi-Fi signal.",
  },
  {
    t: "Large objects and appliances",
    d: "Mirrors, metal furniture, fish tanks and large appliances can block or reflect the signal.",
  },
  {
    t: "Router in a poor spot",
    d: "A router inside a cabinet, on the floor or in a corner sends much of its signal where nobody needs it.",
  },
  {
    t: "Interference",
    d: "Other wireless devices and nearby networks can reduce quality in particular rooms.",
  },
  {
    t: "Device limitations",
    d: "Some phones and laptops have weaker antennas than others and may struggle at the edge of coverage.",
  },
] as const;

const PLACEMENT = [
  {
    t: "Choose a central position",
    d: "Placing the router near the middle of the home usually gives more even coverage than placing it at one end.",
  },
  { t: "Raise it off the floor", d: "A shelf or table is generally better than floor level." },
  {
    t: "Keep it in the open",
    d: "Avoid placing the router in a cupboard, behind a TV, or inside a closed cabinet.",
  },
  {
    t: "Keep distance from interference",
    d: "Avoid putting it right next to microwaves, cordless phone bases or large metal objects.",
  },
  {
    t: "Mind the antennas",
    d: "If your router has adjustable antennas, upright is usually fine.",
  },
  {
    t: "Remember your provider's equipment",
    d: "The provider's modem often has to sit where the cable enters the home.",
  },
] as const;

const DISCONNECT = [
  {
    t: "Weak signal at the device",
    d: "A device at the edge of range connects and drops repeatedly.",
  },
  {
    t: "Switching between bands or access points",
    d: "Devices may hop between the 2.4 GHz and 5 GHz networks, or between routers and extenders, and lose connection in the process.",
  },
  {
    t: "Interference",
    d: "Neighboring networks and household electronics can disrupt wireless channels.",
  },
  {
    t: "Router overload or faults",
    d: "A router that is old, overheating or handling too many devices may drop connections.",
  },
  {
    t: "Power-saving settings on the device",
    d: "Some devices switch off Wi-Fi to save battery, causing disconnections.",
  },
  {
    t: "Outdated software",
    d: "Old router firmware or device software can cause connection problems.",
  },
] as const;

const COVERAGE = [
  { t: "Reposition the router first", d: "It is free and often the most effective fix." },
  { t: "Reduce obstacles between router and devices", d: "Even moving furniture can help." },
  {
    t: "Use the 5 GHz network for nearby, high-demand devices",
    d: "Save 2.4 GHz for devices further away.",
  },
  {
    t: "Update your router's firmware",
    d: "Where supported, updates can improve performance and stability.",
  },
  {
    t: "Use Ethernet for fixed devices",
    d: "A cable for desktops, consoles and TV boxes frees up wireless capacity for everything else.",
  },
  {
    t: "Consider additional equipment if needed",
    d: "See the final section on extenders, mesh systems and access points.",
  },
] as const;

const INTERFERENCE = [
  {
    t: "Neighboring Wi-Fi networks",
    d: "In apartment buildings and dense streets, many networks compete for the same channels, especially on 2.4 GHz.",
  },
  {
    t: "Microwave ovens",
    d: "These operate in the same range as 2.4 GHz Wi-Fi and can disturb it while running.",
  },
  {
    t: "Cordless phones and baby monitors",
    d: "Some use the same frequencies and can cause interference.",
  },
  {
    t: "Bluetooth devices",
    d: "Speakers, headsets and other accessories can share the 2.4 GHz spectrum.",
  },
  {
    t: "Dense building materials",
    d: "While not “interference” in the strict sense, thick materials weaken signals similarly.",
  },
] as const;

const EXTRA = [
  {
    t: "Wi-Fi extender (repeater)",
    d: "Picks up the existing signal and rebroadcasts it.",
  },
  {
    t: "Mesh Wi-Fi system",
    d: "Several units that work together to blanket a larger or awkward home with one network.",
  },
  {
    t: "Wired access point",
    d: "A second wireless unit connected to the router by cable, usually the most stable way to extend coverage.",
  },
  {
    t: "Powerline adapters",
    d: "Use the home's electrical wiring to carry the connection to another room.",
  },
] as const;

const SECTIONS = [
  { id: "how-it-works", label: "How Wi-Fi works" },
  { id: "weak-rooms", label: "Weak rooms" },
  { id: "placement", label: "Placement" },
  { id: "disconnecting", label: "Disconnecting" },
  { id: "bands", label: "2.4 vs 5 GHz" },
  { id: "devices", label: "How many devices" },
  { id: "coverage", label: "Coverage" },
  { id: "interference", label: "Interference" },
  { id: "equipment", label: "Extra equipment" },
] as const;

function WifiPage() {
  usePageMeta({
    title: "Why Is My Wi-Fi Weak or Disconnecting? Home Wi-Fi Guide | Upgrade Net",
    description:
      "Understand home Wi-Fi: router placement, weak rooms, 2.4 GHz versus 5 GHz, interference, how many devices can connect and how to improve wireless coverage.",
    path: "/wifi",
  });

  return (
    <>
      <GuideHero
        index="05"
        eyebrow="Home Wi-Fi guide"
        title="Better understanding of your home Wi-Fi."
        lead="Wi-Fi is invisible, which makes its problems hard to picture. This guide explains how it behaves inside a real home, why some rooms struggle, and what you can do about it in plain language."
        image={wifiImg}
        alt="White Wi-Fi router placed on an oak console table in a warm interior"
        caption="Fig. 01 — Placement often matters more than the router's brand."
        actions={
          <>
            <CallButton>Get assistance</CallButton>
            <a href="#placement" className="btn-outline">
              Router placement tips
            </a>
          </>
        }
      />
      <OnThisPage items={SECTIONS} />

      <Section id="how-it-works" n="01" kicker="Basics" title="How does home Wi-Fi work?">
        <div className="grid gap-10 lg:grid-cols-5">
          <Prose className="lg:col-span-3">
            <p>
              Your internet service arrives at your home through a cable or fiber line and ends at a
              modem or similar device. A router then turns that connection into a wireless network,
              broadcasting radio signals that phones, laptops and smart devices pick up.
            </p>
            <p>
              Wi-Fi is the link between your devices and the router only. It is not the internet
              itself. That is why you can have a perfectly working internet service and still
              experience slow or unreliable wireless in some rooms. In many homes the modem and
              router are combined into one box supplied by the provider.
            </p>
            <p>
              Like any radio signal, Wi-Fi gets weaker the farther it travels and each wall or floor
              it passes through. Everything else in this guide follows from that.
            </p>
          </Prose>
          <img
            src={smartHome}
            alt="Hand touching a wall-mounted smart home control panel"
            loading="lazy"
            width={1200}
            height={1200}
            className="aspect-square w-full object-cover lg:col-span-2"
          />
        </div>
      </Section>

      <Section
        id="weak-rooms"
        n="02"
        kicker="Coverage"
        title="Why is Wi-Fi weak in certain rooms?"
        tone="ivory"
      >
        <FactGrid items={WEAK_ROOMS} cols={2} />
      </Section>

      <Section id="placement" n="03" kicker="Placement" title="Where should you place your router?">
        <Steps items={PLACEMENT} />
      </Section>

      <Banner
        image={work}
        alt="Bright home office with a laptop open on a video call"
        label="Fig. 02 — Every room has a job"
      >
        A home office, a living room and a bedroom each ask something different of Wi-Fi.
      </Banner>

      <Section
        id="disconnecting"
        n="04"
        kicker="Stability"
        title="Why do devices keep disconnecting?"
      >
        <Bullets items={DISCONNECT} />
      </Section>

      <Section
        id="bands"
        n="05"
        kicker="Frequency"
        title="Understanding 2.4 GHz and 5 GHz Wi-Fi"
        tone="ivory"
      >
        <Compare
          left={{
            title: "2.4 GHz",
            items: [
              "Longer range, so it travels farther and through more walls.",
              "Generally slower maximum speeds.",
              "More crowded, with more interference from neighbors and household devices.",
              "Good for distant devices and smart-home gadgets.",
            ],
          }}
          right={{
            title: "5 GHz",
            items: [
              "Shorter range and less able to pass through walls.",
              "Generally faster speeds.",
              "Less crowded, so typically less interference.",
              "Good for streaming, calls and gaming near the router.",
            ],
          }}
          caption="Many routers combine both bands under one name and decide automatically which to use. Some let you name them separately. Check your router's documentation. Newer standards may also support additional bands."
        />
      </Section>

      <Section id="devices" n="06" kicker="Capacity" title="How many devices can connect to Wi-Fi?">
        <Prose>
          <p>
            There is no single number. Routers differ in how many devices they can hold at once, and
            the practical limit depends much more on <em>what</em> those devices are doing than how
            many there are. A dozen smart bulbs barely use any capacity, while two 4K streams and a
            game download can strain a busy network.
          </p>
          <p>
            Many home routers can hold a good number of connected devices, but performance shared
            between them will fall when many are active at once. Your router's manual or the
            manufacturer's specifications are the most useful guide to its limits, and disconnecting
            devices you no longer use is a simple way to reduce the load.
          </p>
        </Prose>
      </Section>

      <Section
        id="coverage"
        n="07"
        kicker="Improvement"
        title="How to improve wireless coverage"
        tone="ivory"
      >
        <Bullets items={COVERAGE} />
      </Section>

      <Section id="interference" n="08" kicker="Noise" title="Understanding Wi-Fi interference">
        <FactGrid items={INTERFERENCE} cols={3} />
      </Section>

      <Section
        id="equipment"
        n="09"
        kicker="Next step"
        title="When should you consider additional networking equipment?"
        tone="ivory"
      >
        <FactGrid items={EXTRA} cols={2} />
      </Section>

      <Related
        items={[
          {
            to: "/internet",
            label: "Internet connection",
            note: "Eight steps for when your internet stops working.",
          },
          {
            to: "/streaming",
            label: "Streaming",
            note: "Wi-Fi versus Ethernet and keeping video steady.",
          },
          {
            to: "/outages",
            label: "Outages",
            note: "When the problem is bigger than your router.",
          },
        ]}
      />
      <GuideCTA
        title="Wi-Fi still unreliable?"
        text="Our independent assistance team can help you understand what may be affecting your wireless connection and what to look at next."
      />
    </>
  );
}
