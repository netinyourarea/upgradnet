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
import { usePageMeta } from "../hooks/use-page-meta";
import cable from "../assets/cable.jpg";
import streamingImg from "../assets/streaming.jpg";

export const Route = createFileRoute("/cable-tv")({
  component: CableTvPage,
});

const NOT_WORKING = [
  {
    t: "Wrong input selected",
    d: "If the TV is set to a different input (HDMI 2, for instance), it will show a blank or “No Signal” screen even when the cable box is fine.",
  },
  {
    t: "Loose or damaged cables",
    d: "A coaxial or HDMI cable that has worked loose or been damaged can lead to missing channels or a missing picture.",
  },
  {
    t: "Set-top box needs a restart",
    d: "Cable boxes are small computers and can freeze or lose their channel information.",
  },
  {
    t: "Signal interruption",
    d: "A local fault, maintenance or an outage with your cable provider can remove channels or the whole service.",
  },
  {
    t: "Channel package or account change",
    d: "Channels depend on your subscription.",
  },
] as const;

const INTERRUPTIONS = [
  {
    t: "Cable or connector wear",
    d: "Old, bent or corroded coaxial cables and loose connectors can weaken the signal.",
  },
  {
    t: "Splitters and extra connections",
    d: "Splitters divide the signal.",
  },
  { t: "Weather", d: "Storms and water can affect outdoor cables and connections." },
  {
    t: "Maintenance or network faults",
    d: "Work on the provider's network, or equipment failures within it, can cause short or long interruptions.",
  },
  {
    t: "Power cuts",
    d: "Both your equipment and parts of the provider's network need electricity.",
  },
  {
    t: "Interference near cables",
    d: "Poorly shielded cables running beside power cables or electronics can pick up noise.",
  },
] as const;

const NO_SIGNAL = [
  {
    t: "Check the TV input source",
    d: "Use the TV remote's Input or Source button and select the one your cable box is plugged into, such as HDMI 1 or HDMI 2.",
  },
  {
    t: "Confirm the TV and cable box are powered on",
    d: "Check the box's display or lights.",
  },
  {
    t: "Check HDMI and coaxial cable connections",
    d: "Make sure the HDMI cable is firmly connected at both ends and the coaxial cable is finger-tight at the box and the wall outlet.",
  },
  {
    t: "Try a different HDMI port or cable",
    d: "A faulty port or cable can be the reason.",
  },
  {
    t: "Restart the set-top box following the manufacturer's instructions",
    d: "Many boxes should be powered off for about 30 seconds before being switched on again.",
  },
  {
    t: "Check for a provider notice",
    d: "Use your phone to look at the provider's website or app to see whether there is a service interruption in your area.",
  },
] as const;

const SOME_CHANNELS = [
  {
    t: "Channel is not in your package",
    d: "Some channels require a specific subscription.",
  },
  {
    t: "Provider-side issue with that channel",
    d: "Occasionally the problem is with a single channel's feed, not with your home equipment.",
  },
  {
    t: "Set-top box needs updating",
    d: "The box may need to refresh its channel list or software.",
  },
  {
    t: "Weak signal on certain frequencies",
    d: "Some channels use different frequencies, so a poor cable or connector can affect some and not others.",
  },
  {
    t: "Parental controls or channel lock",
    d: "Settings can hide or block channels.",
  },
] as const;

const CONNECTIONS = [
  {
    t: "Look at the wall outlet",
    d: "Make sure the coaxial cable is screwed in finger-tight and the outlet itself is not loose or damaged.",
  },
  {
    t: "Follow the cable to the box",
    d: "Check for kinks, cuts or crushed sections.",
  },
  {
    t: "Check the connection at the box",
    d: "The connector should sit straight and snug at the “Cable In” port.",
  },
  {
    t: "Check HDMI to the TV",
    d: "Push the HDMI plug in fully at both ends and make sure the right input is selected.",
  },
  {
    t: "Limit splitters",
    d: "If you have a splitter, try connecting the box to the cable more directly to see whether the picture improves.",
  },
  {
    t: "Do not open equipment",
    d: "Do not attempt to open the provider's equipment or work on cables outside the home.",
  },
] as const;

const BOX = [
  {
    t: "Frozen or unresponsive box",
    d: "If the remote does nothing and the display is stuck, a power restart as recommended by the manufacturer often helps.",
  },
  {
    t: "Box stuck on startup",
    d: "It may need several minutes to boot and download channel information.",
  },
  {
    t: "No power or no lights",
    d: "Check the power cable and the outlet it uses, and try a different outlet.",
  },
  {
    t: "Picture freezes or pixelates",
    d: "This can be a signal quality issue (cables, connections) or a fault with the box itself.",
  },
  {
    t: "Remote not working",
    d: "Replace batteries and make sure nothing blocks the box's sensor.",
  },
  {
    t: "Box overheating",
    d: "Place it where air can circulate, not inside a closed cabinet or under other equipment.",
  },
] as const;

const PROVIDER = [
  {
    t: "No signal after the checks above",
    d: "If cables, input and a restart have not helped, the box or the line may need attention from your provider.",
  },
  {
    t: "Channels missing across the board",
    d: "Especially if neighbors on the same provider have the same issue.",
  },
  {
    t: "Equipment seems faulty",
    d: "Provider equipment (cable boxes, modems) is typically supplied by the provider.",
  },
  { t: "Damaged outdoor cables", d: "Do not touch them." },
  {
    t: "Account or package concerns",
    d: "Only the provider can see your subscription, billing status or channel package.",
  },
] as const;

const SECTIONS = [
  { id: "channels", label: "Channels not working" },
  { id: "interruptions", label: "Signal interruptions" },
  { id: "no-signal", label: "No signal" },
  { id: "some-channels", label: "Some channels" },
  { id: "connections", label: "Cable connections" },
  { id: "set-top-box", label: "Set-top box" },
  { id: "provider", label: "Contact provider" },
] as const;

function CableTvPage() {
  usePageMeta({
    title: "Cable TV No Signal or Channels Missing? Guide | Upgrade Net",
    description:
      "Troubleshoot cable TV problems: what “No Signal” means, why channels go missing, how to check connections and set-top boxes, and when to contact your cable provider.",
    path: "/cable-tv",
  });

  return (
    <>
      <GuideHero
        variant="split-reverse"
        index="03"
        eyebrow="Cable TV guide"
        title="Understand your cable TV connection."
        lead="When channels disappear or the screen says “No Signal”, the cause may be in your living room, your equipment or your provider's network. This guide helps you tell them apart, with practical checks you can do yourself."
        image={cable}
        alt="Dark home cinema room with warm wall lighting and a large screen at the front"
        caption="Fig. 01 — A television is only the last link in the chain."
        actions={
          <>
            <CallButton>Get assistance</CallButton>
            <a href="#no-signal" className="btn-outline">
              Fix “No Signal”
            </a>
          </>
        }
      />
      <div className="shell py-8">
        <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
          Upgrade Net does not provide television channels or operate cable networks. Channels,
          signal and equipment come from your cable TV provider.
        </p>
      </div>
      <OnThisPage items={SECTIONS} />

      <Section
        id="channels"
        n="01"
        kicker="Common causes"
        title="Why are my TV channels not working?"
      >
        <FactGrid items={NOT_WORKING} cols={2} />
      </Section>

      <Section
        id="interruptions"
        n="02"
        kicker="Signal"
        title="What causes cable signal interruptions?"
        tone="ivory"
      >
        <Bullets items={INTERRUPTIONS} />
      </Section>

      <Section
        id="no-signal"
        n="03"
        kicker="Step by step"
        title="What to do when your television displays No Signal"
      >
        <Steps items={NO_SIGNAL} />
      </Section>

      <Banner
        image={streamingImg}
        alt="Family watching a film on a large television in a warmly lit living room"
        label="Fig. 02 — Living room, evening"
      >
        Most “No Signal” screens are solved at the TV, not the street.
      </Banner>

      <Section
        id="some-channels"
        n="04"
        kicker="Partial failure"
        title="Why do some channels work while others do not?"
      >
        <FactGrid items={SOME_CHANNELS} cols={2} />
      </Section>

      <Section
        id="connections"
        n="05"
        kicker="Inspection"
        title="How to check cable connections"
        tone="ivory"
      >
        <Bullets items={CONNECTIONS} />
      </Section>

      <Section
        id="set-top-box"
        n="06"
        kicker="Equipment"
        title="Understanding set-top box problems"
      >
        <FactGrid items={BOX} cols={3} />
      </Section>

      <Section
        id="provider"
        n="07"
        kicker="Escalation"
        title="When to contact your cable TV provider"
        tone="ivory"
      >
        <Bullets items={PROVIDER} />
      </Section>

      <Related
        items={[
          {
            to: "/streaming",
            label: "Streaming",
            note: "When the picture comes over the internet instead of a cable box.",
          },
          {
            to: "/outages",
            label: "Outages",
            note: "How to tell a service interruption from an equipment problem.",
          },
          {
            to: "/faq",
            label: "All questions",
            note: "Answers on internet, cable TV, streaming, Wi-Fi and Upgrade Net.",
          },
        ]}
      />
      <GuideCTA
        title="Television still not working?"
        text="If you have gone through these checks and are unsure whether the issue is your equipment or your provider's service, our independent assistance team can talk it through with you."
      />
    </>
  );
}
