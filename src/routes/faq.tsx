import { createFileRoute, Link } from "@tanstack/react-router";

import { CallButton, Disclosure, GuideCTA } from "../components/blocks";
import { FaqList, PageIntro } from "../components/site-chrome";
import { usePageMeta } from "../hooks/use-page-meta";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
});

type Faq = { q: string; a: string };

const GROUPS: readonly {
  id: string;
  title: string;
  note: string;
  link?: { to: "/internet" | "/outages" | "/cable-tv" | "/streaming" | "/wifi"; label: string };
  items: readonly Faq[];
}[] = [
  {
    id: "assistance",
    title: "Upgrade Net & fees",
    note: "Who we are, what we charge and how refunds work.",
    items: [
      {
        q: "Are you an official cable or internet service provider?",
        a: "No. Upgrade Net is an independent third-party service assistance startup, launched in 2026. We are not a cable, internet or streaming provider, and we are not affiliated with, endorsed by or sponsored by any of them.",
      },
      {
        q: "Do you sell internet, cable or streaming plans?",
        a: "No. We do not sell plans of any kind. What we offer is guidance and assistance: helping you understand a problem, work through the troubleshooting steps and work out what to ask your provider.",
      },
      {
        q: "Do you charge for your services?",
        a: "Yes. Our assistance carries a service fee, which is separate from anything your provider charges you. Please confirm the fee for the help you are requesting before you agree to it.",
      },
      {
        q: "Will I still be billed by my service provider?",
        a: "Yes. Your provider's billing stays exactly as it is. Our fee is in addition to your provider's charges and does not replace, reduce or change them.",
      },
      {
        q: "Do you need my account passwords or sensitive information?",
        a: "No. We never ask for your provider password or other sign-in credentials, and you should not share them with us. If anyone asks you for them in our name, please do not provide them and let us know.",
      },
      {
        q: "Which providers do you support?",
        a: "Our guidance covers common connectivity situations rather than any one company. We may mention providers by name to describe a topic, always with ™ or ® where appropriate, and without any affiliation, partnership or approval.",
      },
      {
        q: "Are your services refundable?",
        a: "Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided. Eligibility depends on the service type and on whether assistance has already been delivered, so please read our Refund Policy for the details.",
      },
      {
        q: "How can I contact Upgrade Net?",
        a: "Call (855) 202-4908 or use the form on our Contact page. When you call, you will hear: “Thank you for calling Upgrade Net, an independent service assistance platform.” For account, billing or repair requests, please contact your provider directly.",
      },
    ],
  },
  {
    id: "internet",
    title: "Internet",
    note: "Everyday connection problems at home.",
    link: { to: "/internet", label: "Internet connection guide" },
    items: [
      {
        q: "Why is my internet not working?",
        a: "The cause may be your router or modem, a loose cable, a problem on one device, weak Wi-Fi, a local interruption, a provider outage or an account issue. Begin by checking whether one device or every device is affected, then look at the lights on your router and modem and make sure cables are secure. Restart the router once, following the manufacturer's instructions, and allow several minutes for it to reconnect. If nothing helps, check your provider's service-status page and contact them.",
      },
      {
        q: "Why does my internet keep disconnecting?",
        a: "Repeated disconnections can come from weak wireless signals, interference, an overheating or aging router, network congestion, or intermittent faults on the line. Note whether it happens in one room, at certain times or on every device. A problem in one place suggests Wi-Fi. A problem on every device at once suggests the router or your internet service.",
      },
      {
        q: "Why is my internet speed slow?",
        a: "Speed is shared between all your devices and can be limited by Wi-Fi distance, background downloads, an older router, an underperforming device or busy periods on your provider's network. Test near the router, pause downloads and see whether the problem affects one device or all. If speeds are consistently far below what your plan describes, contact your provider.",
      },
      {
        q: "Should I restart my router?",
        a: "Restarting is a sensible first step because it clears temporary faults and forces a fresh connection. Follow your manufacturer's instructions, typically switching it off for about 30 seconds and then on again. Give it several minutes to reconnect. Avoid constant restarting and avoid factory resets, which erase your settings. A restart cannot fix a problem on your provider's network.",
      },
      {
        q: "How do I check whether my internet is down?",
        a: "Test a few devices, check the lights on your router or modem, and use mobile data to visit your provider's website or status page. If other devices work, the problem is with one device. If everything is offline and your provider reports an incident, the problem is probably wider than your home.",
      },
    ],
  },
  {
    id: "outages",
    title: "Outages",
    note: "Understanding interruptions and restoration.",
    link: { to: "/outages", label: "Outages & restoration guide" },
    items: [
      {
        q: "What causes internet outages?",
        a: "Outages can result from network maintenance, damaged fiber or cables, equipment failures, power interruptions, severe weather, congestion or technical faults and unexpected infrastructure problems.",
      },
      {
        q: "How long can an internet outage last?",
        a: "There is no universal duration. Minor equipment issues may be resolved quickly, while infrastructure damage or widespread outages can take considerably longer. The duration depends on the fault, whether it is local or widespread, the infrastructure affected, repair-team availability, weather and access conditions, and the provider's restoration process. Your provider is the only reliable source of timing for your area.",
      },
      {
        q: "How can I check whether my area has an outage?",
        a: "Visit your provider's own website, service-status page or app (using mobile data if needed), look for notifications they have sent, contact their support, and see whether neighbors on the same provider have the same problem.",
      },
      {
        q: "Will my internet return automatically?",
        a: "Usually yes. When the fault has been fixed, your equipment typically reconnects without help. If your provider says service is restored and you are still offline, restart your router once and, if that does not work, contact them.",
      },
      {
        q: "Should I contact my provider during an outage?",
        a: "Check their status page first, since a known incident may already have updates. If there is nothing about your area, or your equipment lights suggest a fault, report the problem so the provider can investigate. Avoid repeatedly restarting equipment while you wait.",
      },
    ],
  },
  {
    id: "cable-tv",
    title: "Cable TV",
    note: "Channels, signal and equipment.",
    link: { to: "/cable-tv", label: "Cable TV guide" },
    items: [
      {
        q: "Why are my TV channels missing?",
        a: "Missing channels can be caused by a loose cable, a set-top box that needs restarting, a signal interruption, a change to your channel package or a problem with a specific channel. Check connections, restart your box according to its instructions, and contact your cable TV provider if channels do not return.",
      },
      {
        q: "What does No Signal mean?",
        a: "It means the TV is not receiving a picture from the selected input. Check that the right input source is selected, that the TV and the cable box are powered on and that HDMI and coaxial cables are firmly connected. If those are fine, the issue may be with the box or a service interruption.",
      },
      {
        q: "Why is my cable television picture freezing?",
        a: "Freezing or pixelation can reflect a weak signal, damaged or loose cables, too many splitters, an overheating or faulty set-top box, or an interruption on the provider's network. Check connections, restart the box and make sure it has airflow. If it continues, contact your provider.",
      },
    ],
  },
  {
    id: "streaming",
    title: "Streaming",
    note: "Buffering, quality and apps.",
    link: { to: "/streaming", label: "Streaming guide" },
    items: [
      {
        q: "Why do streaming videos buffer?",
        a: "Video is delivered in small pieces. When the next piece arrives too slowly, playback pauses. This can be caused by a weak Wi-Fi signal, other devices using the connection, device limitations, busy network periods or an issue with the streaming platform.",
      },
      {
        q: "Does Wi-Fi affect streaming quality?",
        a: "Yes. A weak or crowded Wi-Fi signal can cause buffering and lower picture quality even on a fast internet plan. Moving the router or device closer, reducing obstacles, using the 5 GHz band or connecting by Ethernet can help.",
      },
      {
        q: "Why do streaming apps stop loading?",
        a: "The device might be offline, the app or the device software may need to be restarted or updated, or the streaming platform may be having problems. Check whether other apps work, restart the app and device and see whether the platform reports an issue.",
      },
    ],
  },
  {
    id: "wifi",
    title: "Wi-Fi",
    note: "Coverage, signal and devices.",
    link: { to: "/wifi", label: "Home Wi-Fi guide" },
    items: [
      {
        q: "Why is Wi-Fi weak in some rooms?",
        a: "Signals weaken with distance and when passing through walls, floors and large objects. A poorly positioned router or interference can make it worse. Moving the router to a central, open location often helps.",
      },
      {
        q: "How can I improve Wi-Fi coverage?",
        a: "Place the router centrally and off the floor, reduce obstructions, keep it away from interference, update its firmware where supported, use 5 GHz for nearby devices and Ethernet for fixed devices. In larger homes, a mesh system or wired access point may be worth considering.",
      },
      {
        q: "Why do devices disconnect from Wi-Fi?",
        a: "Likely causes include a weak signal, interference, an overloaded or faulty router, power-saving settings on the device and outdated software. If every device disconnects at once, the router or the internet service itself may be the cause.",
      },
    ],
  },
];

const ALL = GROUPS.flatMap((g) => g.items);

function FaqPage() {
  usePageMeta({
    title: "Internet, Cable TV, Streaming & Wi-Fi FAQ | Upgrade Net",
    description:
      "Answers to common questions on internet not working, disconnections, outages, cable TV No Signal, streaming buffering and weak Wi-Fi, plus what Upgrade Net is.",
    path: "/faq",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: ALL.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  });

  return (
    <>
      <PageIntro
        index="07"
        eyebrow="FAQ"
        title="Questions households ask most."
        lead="Straightforward answers about internet, outages, cable TV, streaming and Wi-Fi, plus a few about Upgrade Net itself."
      />
      <div className="shell pb-10">
        <Disclosure />
        <ul className="mt-8 flex flex-wrap gap-2">
          {GROUPS.map((g) => (
            <li key={g.id}>
              <a
                href={`#${g.id}`}
                className="inline-block border border-line-strong px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors hover:bg-ink hover:text-accent-foreground"
              >
                {g.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {GROUPS.map((g, gi) => (
        <section
          key={g.id}
          id={g.id}
          aria-labelledby={`${g.id}-h`}
          className={`scroll-mt-24 rule-t ${gi % 2 === 1 ? "bg-ivory" : ""}`}
        >
          <div className="shell grid gap-8 py-14 md:grid-cols-12 md:gap-10 md:py-20">
            <header className="md:col-span-4">
              <div className="md:sticky md:top-28">
                <p className="label-mono">
                  {String(gi + 1).padStart(2, "0")} / {g.items.length} questions
                </p>
                <h2
                  id={`${g.id}-h`}
                  className="mt-5 text-3xl font-extrabold uppercase md:text-[2.6rem]"
                >
                  {g.title}
                </h2>
                <p className="mt-4 text-sm text-muted-foreground">{g.note}</p>
                {g.link ? (
                  <Link
                    to={g.link.to}
                    className="label-mono link-underline mt-6 inline-block !text-foreground"
                  >
                    {g.link.label} →
                  </Link>
                ) : (
                  <div className="mt-6">
                    <CallButton>Get assistance</CallButton>
                  </div>
                )}
              </div>
            </header>
            <div className="md:col-span-8">
              <FaqList items={g.items} defaultOpen={null} idPrefix={`faq-${g.id}`} />
            </div>
          </div>
        </section>
      ))}

      <GuideCTA
        title="Didn't find your answer?"
        text="Our independent assistance team can talk through your situation and help you understand the next steps."
      />
    </>
  );
}
