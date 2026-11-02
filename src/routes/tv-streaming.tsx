import { createFileRoute } from "@tanstack/react-router";

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

export const Route = createFileRoute("/tv-streaming")({
  component: TvStreamingPage,
});

const TV_CAUSES = [
  {
    t: "Wrong input selected",
    d: "If the TV is set to a different input, it will show a blank or “No Signal” screen even when the cable box is fine.",
  },
  {
    t: "Loose or damaged cables",
    d: "A coaxial or HDMI cable that has worked loose can lead to missing channels or no picture.",
  },
  {
    t: "Set-top box needs a restart",
    d: "Cable boxes are small computers and can freeze or lose their channel information.",
  },
  {
    t: "Signal interruption",
    d: "A local fault, maintenance or an outage with your provider can remove channels or the whole service.",
  },
  {
    t: "Package or account change",
    d: "Channels depend on your subscription, so a change to it can remove some.",
  },
] as const;

const NO_SIGNAL = [
  {
    t: "Check the TV input source",
    d: "Use the remote's Input or Source button and select the one your cable box is plugged into.",
  },
  {
    t: "Confirm the TV and cable box are powered on",
    d: "Check the box's display or lights.",
  },
  {
    t: "Check the HDMI and coaxial cables",
    d: "HDMI firm at both ends; coaxial finger-tight at the box and the wall outlet.",
  },
  {
    t: "Restart the set-top box",
    d: "Follow the manufacturer's instructions: usually off for about 30 seconds, then on.",
  },
  {
    t: "Check for a provider notice",
    d: "Use your phone to look at the provider's website or app for a service interruption.",
  },
] as const;

const BUFFERING = [
  {
    t: "Unstable or slow connection",
    d: "Video arrives in small pieces just ahead of what you watch, so a weak link means a pause.",
  },
  {
    t: "Weak Wi-Fi at the TV",
    d: "A streaming device far from the router, or behind walls, may get a poor signal even when the internet is fine.",
  },
  {
    t: "Other activity on the network",
    d: "Downloads, backups, video calls and other streams compete for the same connection.",
  },
  {
    t: "Device or platform limits",
    d: "Older TVs and sticks can struggle with high-quality video, and sometimes the platform itself is busy.",
  },
] as const;

const IMPROVE = [
  {
    t: "Use Ethernet for TVs and streaming boxes",
    d: "A cable removes Wi-Fi variation and is the simplest fix for a TV that keeps buffering.",
  },
  {
    t: "Move the router or device closer",
    d: "Even a short distance and fewer walls can steady the signal.",
  },
  {
    t: "Pause large downloads while watching",
    d: "Updates and backups can take much of the capacity.",
  },
  {
    t: "Restart the app, then the device",
    d: "Also keep apps and device software up to date, since updates often fix playback problems.",
  },
] as const;

const CONTACT = [
  {
    t: "No signal after the checks above",
    d: "Cable provider: the box or the line may need attention. Provider equipment is typically supplied by the provider.",
  },
  {
    t: "Channels missing across the board",
    d: "Cable provider: especially if neighbors on the same provider have the same issue.",
  },
  {
    t: "Only one streaming app has problems",
    d: "The platform's help center: other apps work, so it isn't your internet.",
  },
  {
    t: "Constant buffering on every app",
    d: "Your internet provider: follow the internet checklist first.",
  },
] as const;

const SECTIONS = [
  { id: "tv", label: "TV problems" },
  { id: "no-signal", label: "No Signal" },
  { id: "buffering", label: "Buffering" },
  { id: "improve", label: "Improve streaming" },
  { id: "who-to-contact", label: "Who to contact" },
] as const;

function TvStreamingPage() {
  usePageMeta({
    title: "Cable TV No Signal & Streaming Buffering Guide | Upgrade Net",
    description:
      "Troubleshoot cable TV and streaming: what “No Signal” means, why channels go missing, why video buffers and who to contact. Short, independent, plain-language guide.",
    path: "/tv-streaming",
  });

  return (
    <>
      <GuideHero
        variant="split-reverse"
        index="02"
        eyebrow="Cable TV & streaming"
        title="Understand your TV and streaming connection."
        lead="When channels disappear, the screen says “No Signal” or video keeps buffering, the cause may be your equipment, your internet or the provider."
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
      <OnThisPage items={SECTIONS} />

      <Section id="tv" n="01" kicker="Cable TV" title="Why are my TV channels not working?">
        <FactGrid items={TV_CAUSES} cols={2} />
      </Section>

      <Section
        id="no-signal"
        n="02"
        kicker="Step by step"
        title="What to do when your TV says No Signal"
        tone="ivory"
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

      <Section id="buffering" n="03" kicker="Streaming" title="Why does streaming keep buffering?">
        <FactGrid items={BUFFERING} cols={2} />
      </Section>

      <Section
        id="improve"
        n="04"
        kicker="Practical advice"
        title="How to improve streaming stability"
        tone="ivory"
      >
        <Bullets items={IMPROVE} />
      </Section>

      <Section id="who-to-contact" n="05" kicker="Escalation" title="Who should you contact?">
        <Bullets items={CONTACT} />
        <p className="mt-8 max-w-2xl text-sm text-muted-foreground">
          If the problem isn&apos;t solved, visit our live team support on our toll-free number{" "}
          <a
            href="tel:+18552024908"
            className="whitespace-nowrap font-bold text-foreground underline decoration-accent underline-offset-4"
          >
            (855) 202-4908
          </a>
          . Upgrade Net does not provide TV channels or streaming, and cannot guarantee streaming
          performance.
        </p>
      </Section>

      <Related
        items={[
          {
            to: "/internet",
            label: "Internet, outages & Wi-Fi",
            note: "Slow or unstable internet? Start with the checklist.",
          },
          {
            to: "/faq",
            label: "All questions",
            note: "Answers on internet, outages, TV, streaming, Wi-Fi and Upgrade Net.",
          },
        ]}
      />
      <GuideCTA
        title="Still not working?"
        text="If you have gone through these checks and are unsure whether the issue is your equipment or your provider's service, our independent assistance team can talk it through with you."
      />
    </>
  );
}
