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
  link?: { to: "/internet" | "/tv-streaming"; label: string };
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
    title: "Outages & Wi-Fi",
    note: "Interruptions, restoration and wireless coverage.",
    link: { to: "/internet", label: "Internet, outages & Wi-Fi guide" },
    items: [
      {
        q: "How long can an internet outage last?",
        a: "There is no universal duration. Minor equipment issues may be resolved quickly, while infrastructure damage or widespread outages can take considerably longer. Your provider is the only reliable source of timing for your area, and Upgrade Net cannot estimate or promise a restoration time.",
      },
      {
        q: "How can I check whether my area has an outage?",
        a: "Visit your provider's website, status page or app (using mobile data if needed), look for notifications they have sent, and see whether neighbors on the same provider have the same problem.",
      },
      {
        q: "Will my internet return automatically?",
        a: "Usually yes. When the fault has been fixed, your equipment typically reconnects without help. If your provider says service is restored and you are still offline, restart your router once and, if that does not work, contact them.",
      },
      {
        q: "Why is Wi-Fi weak in some rooms?",
        a: "Signals weaken with distance and when passing through walls, floors and large objects. Moving the router to a central, open location, using 5 GHz for nearby devices and Ethernet for fixed devices often helps.",
      },
    ],
  },
  {
    id: "tv-streaming",
    title: "TV & streaming",
    note: "Channels, signal, buffering and apps.",
    link: { to: "/tv-streaming", label: "TV & streaming guide" },
    items: [
      {
        q: "Why are my TV channels missing, or what does No Signal mean?",
        a: "No Signal means the TV is not receiving a picture from the selected input. Check that the right input is selected, that the TV and cable box are on and that HDMI and coaxial cables are firm. Restart the box following its instructions, and contact your cable provider if channels do not return.",
      },
      {
        q: "Why do streaming videos buffer?",
        a: "Video is delivered in small pieces. When the next piece arrives too slowly, playback pauses. Causes include a weak Wi-Fi signal, other devices using the connection, device limits or a problem with the streaming platform. Moving closer to the router or using Ethernet can help.",
      },
      {
        q: "Why do streaming apps stop loading?",
        a: "The device might be offline, the app or device software may need restarting or updating, or the platform may be having problems. Check whether other apps work, restart the app and device and see whether the platform reports an issue.",
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
