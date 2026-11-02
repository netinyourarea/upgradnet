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
import streamingImg from "../assets/streaming.jpg";
import cable from "../assets/cable.jpg";
import gaming from "../assets/gaming.jpg";

export const Route = createFileRoute("/streaming")({
  component: StreamingPage,
});

const BUFFERING = [
  {
    t: "Unstable or slow connection",
    d: "Video is delivered in small pieces just ahead of what you watch.",
  },
  {
    t: "Weak Wi-Fi at the TV or device",
    d: "A streaming device far from the router, or behind walls, may receive a poor signal even when the internet connection is fine.",
  },
  {
    t: "Other activity on the network",
    d: "Downloads, backups, video calls and other streams compete for the same connection.",
  },
  {
    t: "Device limits",
    d: "Older TVs and streaming sticks can struggle to decode high-quality video or run heavy apps.",
  },
  {
    t: "Busy network periods",
    d: "Shared parts of a provider's network can feel slower in the evening, when many households are online.",
  },
  {
    t: "The streaming platform",
    d: "Sometimes the platform itself is busy or experiencing a problem.",
  },
] as const;

const QUALITY = [
  {
    t: "Standard definition video",
    d: "Works on modest connections and is the level many apps fall back to when the connection struggles.",
  },
  { t: "High definition (HD)", d: "Needs a steadier, faster connection than standard definition." },
  {
    t: "4K / Ultra HD",
    d: "Typically requires the most, and platforms often publish recommended speeds for it in their help pages.",
  },
  {
    t: "Several streams at once",
    d: "Each stream needs its own share of the connection, so add them together rather than judging one stream alone.",
  },
] as const;

const CHANGING = [
  {
    t: "Adaptive streaming",
    d: "Most apps constantly measure your connection and adjust quality to avoid stopping.",
  },
  {
    t: "Fluctuating Wi-Fi",
    d: "A signal that varies from moment to moment makes quality move up and down.",
  },
  {
    t: "Shared bandwidth",
    d: "When someone else starts a download or call, your stream may step down.",
  },
  {
    t: "Platform settings",
    d: "Many apps have quality or data-saver settings that limit or change the resolution, so check the app's playback settings.",
  },
] as const;

const NOT_LOADING = [
  {
    t: "Check whether other apps and websites work",
    d: "If nothing loads, the issue is your connection.",
  },
  {
    t: "Restart the app, then the device",
    d: "Close the app fully and reopen it.",
  },
  {
    t: "Check that the device is online",
    d: "Make sure the device is connected to the right Wi-Fi network and still has internet access.",
  },
  {
    t: "Check the date, time and software",
    d: "An incorrect date or an outdated app or system version can stop an app from connecting.",
  },
  {
    t: "Check the platform's own status",
    d: "Platforms often have a status page or social media account that reports known issues.",
  },
  {
    t: "Reinstall the app if supported",
    d: "Removing and reinstalling can clear corrupted data.",
  },
] as const;

const IMPROVE = [
  {
    t: "Move the router or streaming device closer, or remove obstacles",
    d: "Even a short distance and fewer walls can steady the signal.",
  },
  {
    t: "Use Ethernet where possible",
    d: "A cable removes Wi-Fi variation for TVs, consoles and streaming boxes.",
  },
  {
    t: "Pause large downloads during viewing",
    d: "Updates and backups can take much of the capacity.",
  },
  {
    t: "Reduce the number of simultaneous high-quality streams",
    d: "Lowering the quality setting on one device frees capacity for others.",
  },
  { t: "Keep apps and device software up to date", d: "Updates often fix playback problems." },
  {
    t: "Restart your router occasionally",
    d: "Follow the manufacturer's instructions.",
  },
] as const;

const WHEN_PLATFORM = [
  { t: "Only one app has problems", d: "Other apps stream normally." },
  {
    t: "The same problem appears on several of your devices, but only in that app",
    d: "This points away from a single device.",
  },
  {
    t: "Specific titles fail",
    d: "The issue might be with the content or the platform's servers.",
  },
  {
    t: "Error messages mention the service",
    d: "Look up the exact message in the platform's help pages.",
  },
  {
    t: "Reports of a platform outage",
    d: "The platform's status page or own channels may confirm this.",
  },
] as const;

const SECTIONS = [
  { id: "buffering", label: "Buffering" },
  { id: "speed", label: "Speed" },
  { id: "quality", label: "Changing quality" },
  { id: "not-loading", label: "Apps not loading" },
  { id: "multiple-devices", label: "Multiple devices" },
  { id: "stability", label: "Stability" },
  { id: "wifi-vs-ethernet", label: "Wi-Fi vs Ethernet" },
  { id: "platform", label: "Platform issues" },
] as const;

function StreamingPage() {
  usePageMeta({
    title: "Streaming Buffering Problems and How to Fix Them | Upgrade Net",
    description:
      "Why does streaming keep buffering? Learn what affects video quality, how multiple devices share your connection, Wi-Fi versus Ethernet and when the platform is the problem.",
    path: "/streaming",
  });

  return (
    <>
      <GuideHero
        variant="banner"
        index="04"
        eyebrow="Streaming guide"
        title="Smoother streaming starts with understanding your connection."
        lead="Streaming performance depends on your internet connection, your device, the app, the video quality you choose and the streaming platform itself. Understanding which one is the weak link is the first step to fixing it."
        image={streamingImg}
        alt="Family watching a film on a large television in a living room at dusk"
        caption="Fig. 01 — A good evening in front of the screen depends on a chain of small links."
        actions={<CallButton>Get assistance</CallButton>}
      />
      <div className="shell py-8">
        <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
          Upgrade Net cannot guarantee specific streaming performance. Results depend on your
          connection, devices and the platforms you use.
        </p>
      </div>
      <OnThisPage items={SECTIONS} />

      <Section
        id="buffering"
        n="01"
        kicker="Common causes"
        title="Why does streaming keep buffering?"
      >
        <FactGrid items={BUFFERING} cols={2} />
      </Section>

      <Section
        id="speed"
        n="02"
        kicker="Planning"
        title="What internet speed is suitable for streaming?"
        tone="ivory"
      >
        <Bullets items={QUALITY} />
      </Section>

      <Section id="quality" n="03" kicker="Picture" title="Why does video quality keep changing?">
        <FactGrid items={CHANGING} cols={2} />
      </Section>

      <Banner
        image={cable}
        alt="Dark home cinema room with warm wall lighting and a large screen"
        label="Fig. 02 — Quality follows the connection"
      >
        Most apps trade picture quality for continuity. That is by design.
      </Banner>

      <Section
        id="not-loading"
        n="04"
        kicker="Troubleshooting"
        title="Why are streaming applications not loading?"
      >
        <Steps items={NOT_LOADING} />
      </Section>

      <Section
        id="multiple-devices"
        n="05"
        kicker="Sharing"
        title="How multiple devices affect streaming"
        tone="ivory"
      >
        <div className="grid gap-10 lg:grid-cols-5">
          <Prose className="lg:col-span-3">
            <p>
              Your internet connection is shared between everything using it at the same time. Two
              people streaming in different rooms, a game downloading in the background, a video
              call in the study and a handful of smart devices all take a share.
            </p>
            <p>
              When the combined demand is more than your connection can comfortably deliver, the
              streams fall back in quality or stall. Wi-Fi adds another constraint: all wireless
              devices share the airtime of the same router.
            </p>
            <p>
              If your household is struggling, look at what else is running before blaming the
              streaming app, and consider our{" "}
              <Link to="/wifi" className="underline decoration-accent underline-offset-4">
                home Wi-Fi guide
              </Link>
              .
            </p>
          </Prose>
          <img
            src={gaming}
            alt="Gaming desk with a monitor and headset in warm amber light"
            loading="lazy"
            width={1200}
            height={900}
            className="aspect-[4/3] w-full object-cover lg:col-span-2"
          />
        </div>
      </Section>

      <Section
        id="stability"
        n="06"
        kicker="Practical advice"
        title="How to improve streaming stability"
      >
        <Bullets items={IMPROVE} />
      </Section>

      <Section
        id="wifi-vs-ethernet"
        n="07"
        kicker="Connection type"
        title="Wi-Fi versus Ethernet for streaming"
        tone="ivory"
      >
        <Compare
          left={{
            title: "Wi-Fi",
            items: [
              "Convenient and needs no cables.",
              "Signal weakens with distance and obstacles.",
              "Affected by interference and other wireless devices.",
              "Often fine for phones, tablets and nearby TVs.",
              "5 GHz is typically faster but has a shorter range than 2.4 GHz.",
            ],
          }}
          right={{
            title: "Ethernet",
            items: [
              "A physical cable from router to device.",
              "Not affected by wireless interference or distance within the home.",
              "Usually more consistent for TVs, consoles and streaming boxes.",
              "Needs a cable run and a device with an Ethernet port.",
              "A good fix if one TV constantly buffers over Wi-Fi.",
            ],
          }}
          caption="Neither is “better” in every home. Ethernet simply removes the wireless variable when stability matters most."
        />
      </Section>

      <Section
        id="platform"
        n="08"
        kicker="Not your connection"
        title="When the problem may be related to a streaming platform"
      >
        <Bullets items={WHEN_PLATFORM} />
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
          In that case, the platform's help center or support team is the right contact, not your
          internet provider and not Upgrade Net.
        </p>
      </Section>

      <Related
        items={[
          {
            to: "/wifi",
            label: "Home Wi-Fi",
            note: "Placement, bands and interference explained.",
          },
          {
            to: "/internet",
            label: "Internet connection",
            note: "Slow or unstable internet? Start with the checklist.",
          },
          {
            to: "/cable-tv",
            label: "Cable TV",
            note: "No Signal, missing channels and set-top boxes.",
          },
        ]}
      />
      <GuideCTA
        title="Streaming still stuttering?"
        text="Our independent assistance team can help you understand what may be affecting your streaming and whether the next step belongs with your provider."
      />
    </>
  );
}
