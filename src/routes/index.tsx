import { createFileRoute, Link } from "@tanstack/react-router";

import { Parallax, Reveal, SplitHeading } from "../components/motion";
import { CallButton } from "../components/blocks";
import { FaqList } from "../components/site-chrome";
import { usePageMeta } from "../hooks/use-page-meta";
import heroHome from "../assets/hero-home.jpg";
import internetHero from "../assets/internet-hero.jpg";
import cable from "../assets/cable.jpg";
import streamingImg from "../assets/streaming.jpg";
import wifiImg from "../assets/wifi.jpg";
import fiber from "../assets/fiber.jpg";
import coverage from "../assets/coverage.jpg";
import gaming from "../assets/gaming.jpg";
import work from "../assets/work.jpg";
import smartHome from "../assets/smart-home.jpg";
import compare from "../assets/compare.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const GUIDES = [
  {
    n: "01",
    to: "/internet",
    title: "Internet Connectivity",
    img: internetHero,
    alt: "Bright apartment with a laptop open on a marble table beside a sunlit living room",
    note: "Find out why a connection slows down, drops out or stops working, and what to check first.",
    topics: [
      "Slow internet",
      "Sudden disconnections",
      "No internet access",
      "Network interruptions",
    ],
    tone: "bg-background",
  },
  {
    n: "02",
    to: "/cable-tv",
    title: "Cable TV",
    img: cable,
    alt: "Dark home cinema with warm wall lighting and a large screen",
    note: "Understand missing channels, frozen pictures and the “No Signal” message on your television.",
    topics: [
      "Missing channels",
      "Signal interruptions",
      "Television connection problems",
      "Equipment troubleshooting",
    ],
    tone: "bg-beige",
  },
  {
    n: "03",
    to: "/streaming",
    title: "Streaming",
    img: streamingImg,
    alt: "Family watching a film on a large television in a living room at dusk",
    note: "See what lies behind buffering, changing picture quality and apps that will not load.",
    topics: [
      "Video buffering",
      "Poor streaming quality",
      "App connection problems",
      "Streaming interruptions",
    ],
    tone: "bg-ink text-accent-foreground",
  },
  {
    n: "04",
    to: "/wifi",
    title: "Home Wi-Fi",
    img: wifiImg,
    alt: "White Wi-Fi router on an oak console table in a warm interior",
    note: "Learn how your wireless network behaves in a real home, and how to get steadier coverage.",
    topics: [
      "Weak Wi-Fi signals",
      "Router placement",
      "Device connectivity",
      "Wireless network problems",
    ],
    tone: "bg-ivory",
  },
] as const;

const PROCESS = [
  {
    n: "01",
    title: "Describe your issue",
    body: "Tell us what is happening with your internet, cable television, Wi-Fi or streaming connection.",
  },
  {
    n: "02",
    title: "Understand your options",
    body: "Explore practical troubleshooting guidance and understand which issues may require your service provider's attention.",
  },
  {
    n: "03",
    title: "Get independent assistance",
    body: "Connect with our assistance team to discuss your situation and understand the next steps.",
  },
] as const;

const PROBLEMS = [
  {
    q: "Why do internet connections suddenly stop working?",
    a: "A sudden stop usually comes from one of three places: something in your home (a router that has frozen, a loose cable or a power glitch), something local to your area (maintenance or a damaged line), or something on the account side.",
  },
  {
    q: "Why do internet speeds become slower?",
    a: "Your connection is shared between every device at home, stretched by Wi-Fi distance and sometimes limited by how busy your provider's network is.",
  },
  {
    q: "Why does my connection disconnect repeatedly?",
    a: "Repeated drops often point to a weak wireless signal, interference from other devices, a router that is overheating or ageing, or an intermittent fault on the line.",
  },
  {
    q: "Why do some devices connect while others cannot?",
    a: "If a phone works and a laptop does not, the network itself is probably fine and the problem sits with the laptop: a stale saved password, a wrong network selected, or a setting that needs refreshing.",
  },
  {
    q: "Why does restarting a router sometimes help?",
    a: "A router is a small computer: a restart clears a frozen state and forces a fresh connection, but it cannot fix a problem outside your home.",
  },
] as const;

const SCOPES = [
  {
    t: "One device",
    d: "Other devices work normally. The issue is most likely with that device's Wi-Fi setting, saved network or software.",
  },
  {
    t: "Your whole home",
    d: "Every device is affected. Check your router and modem lights and cables, then consider whether your service is affected.",
  },
  {
    t: "A wider area",
    d: "Neighbors using the same provider report problems too, or the provider's status page lists an incident in your area.",
  },
] as const;

const WAITING = [
  "Check your provider's own outage or status page, using mobile data.",
  "Avoid repeatedly restarting equipment; one proper restart is enough.",
  "Save open work and keep your phone and laptop charged.",
  "Use mobile data sparingly if it is your backup connection.",
  "Look for text, email or app notifications from your provider.",
] as const;

const EVERYDAY = [
  {
    img: compare,
    alt: "Hands holding a tablet on a bright desk while reviewing a household's devices",
    tag: "Multiple-device households",
    title: "Every person brings three screens",
    body: "Phones, tablets, laptops and consoles all share one connection.",
    span: "md:col-span-7",
    ratio: "aspect-[16/10]",
  },
  {
    img: work,
    alt: "Bright home office with a laptop on a video call",
    tag: "Remote working",
    title: "Video calls need a steady line",
    body: "A call does not need enormous speed, but it does need stability.",
    span: "md:col-span-5",
    ratio: "aspect-square",
  },
  {
    img: gaming,
    alt: "Gaming desk with a monitor and headset in warm amber light",
    tag: "Entertainment",
    title: "Streaming and gaming",
    body: "Streaming adapts picture quality to the connection, while online games care most about consistency.",
    span: "md:col-span-5",
    ratio: "aspect-square",
  },
  {
    img: smartHome,
    alt: "Hand touching a wall-mounted smart home control panel",
    tag: "Smart home & everyday use",
    title: "Small devices, constant connection",
    body: "Cameras, speakers, thermostats and doorbells use little data but stay connected all day, and they add up on a home network.",
    span: "md:col-span-7",
    ratio: "aspect-[16/10]",
  },
] as const;

const FAQS = [
  {
    q: "Is Upgrade Net an internet service provider?",
    a: "No.",
  },
  {
    q: "Why is my internet not working?",
    a: "Common causes include a frozen router, loose cables, a device-specific problem, weak Wi-Fi, a local interruption or a provider outage.",
  },
  {
    q: "How long does an internet outage last?",
    a: "There is no universal answer.",
  },
  {
    q: "When should I contact my service provider?",
    a: "Contact your provider if the problem continues after basic checks, if neighbors have the same issue, if you can see damaged external cables, or if you suspect an account or billing restriction.",
  },
] as const;

function Home() {
  usePageMeta({
    title: "Home Internet, Cable TV, Streaming & Wi-Fi Help | Upgrade Net",
    description:
      "Independent guidance for slow internet, sudden disconnections, Wi-Fi problems, cable TV and streaming issues. Practical troubleshooting steps and clear information.",
    path: "/",
  });

  return (
    <>
      {/* HERO */}
      <section className="rule-b">
        <div className="shell grid gap-10 pb-12 pt-14 md:grid-cols-12 md:gap-8 md:pb-16 md:pt-20">
          <div className="md:col-span-7">
            <p className="label-mono">Independent connectivity guide</p>
            <h1 className="display-lg mt-7 text-[clamp(2.3rem,5.9vw,5.2rem)]">
              <SplitHeading text="Understand your" />
              <SplitHeading text="home internet" className="text-accent" />
              <SplitHeading text="connection." />
            </h1>
            <p className="mt-8 font-display text-xl font-extrabold uppercase leading-tight tracking-[-0.02em] md:text-2xl">
              Clear Guidance for Internet, Cable TV &amp; Streaming.
            </p>
            <p className="mt-5 max-w-xl text-base text-muted-foreground">
              Experiencing slow internet, unexpected disconnections, Wi-Fi problems or streaming
              interruptions? Upgrade Net helps households understand common connectivity issues,
              explore practical troubleshooting steps and navigate their service options.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CallButton>Get assistance</CallButton>
              <Link to="/internet" className="btn-outline">
                Explore troubleshooting
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <Parallax className="aspect-[4/5] w-full" strength={26}>
              <img
                src={heroHome}
                alt="Person using a laptop on a linen sofa in a bright, modern connected home"
                width={1408}
                height={1760}
                className="img-cover"
              />
            </Parallax>
            <p className="label-mono mt-4 border-t border-line pt-4">
              Fig. 01 — A connected household
            </p>
          </div>
        </div>
      </section>

      {/* A. INTRODUCTION */}
      <section aria-labelledby="intro" className="rule-b bg-ivory">
        <div className="shell grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="label-mono">Introduction</p>
            <h2 id="intro" className="mt-5 text-3xl font-extrabold uppercase md:text-[2.6rem]">
              Home life now runs on the connection
            </h2>
          </div>
          <div className="space-y-5 text-[1.02rem] text-muted-foreground md:col-span-7 md:col-start-6">
            <p>
              Work, school, banking, video calls with family, television, music and the thermostat
              on the wall: in most households, nearly all of it depends on one internet connection.
              When it falters, the effect is felt everywhere at once.
            </p>
            <p>
              This site is written to help you tell them apart. Start with the guides below, follow
              the practical steps, and know when the right move is to contact your actual service
              provider.
            </p>
          </div>
        </div>
      </section>

      {/* B. EXPLORE OUR GUIDES — four visually distinct cards */}
      <section aria-labelledby="guides" className="shell py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-6">
          <h2 id="guides" className="display-lg max-w-2xl text-[clamp(2rem,4.8vw,4rem)]">
            Explore our guides
          </h2>
          <p className="label-mono">Four areas of home connectivity</p>
        </div>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {GUIDES.map((g, i) => (
            <li key={g.to}>
              <Reveal delay={(i % 2) * 100} className="h-full">
                <Link
                  to={g.to}
                  className={`group flex h-full flex-col border border-line-strong ${g.tone}`}
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={g.img}
                      alt={g.alt}
                      loading="lazy"
                      width={1200}
                      height={675}
                      className="img-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <p className="label-mono !text-accent">{g.n}</p>
                    <h3 className="mt-3 text-3xl font-extrabold uppercase transition-colors group-hover:text-accent">
                      {g.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm opacity-80">{g.note}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {g.topics.map((t) => (
                        <li
                          key={t}
                          className="border border-current/30 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.12em] opacity-80"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <span className="label-mono mt-8 inline-block !text-current transition-transform group-hover:translate-x-2">
                      Read the guide →
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* C. HOW ASSISTANCE WORKS */}
      <section
        aria-labelledby="process"
        className="rule-t bg-ink py-16 text-accent-foreground md:py-24"
      >
        <div className="shell">
          <div className="grid gap-8 md:grid-cols-12">
            <h2 id="process" className="display-lg text-[clamp(2rem,4.8vw,4rem)] md:col-span-6">
              How assistance works
            </h2>
            <p className="text-beige md:col-span-4 md:col-start-9">
              Three straightforward steps, from describing the problem to knowing what to do next.
            </p>
          </div>
          <ol className="mt-14 grid gap-px bg-white/15 md:grid-cols-3">
            {PROCESS.map((step, i) => (
              <li key={step.n} className="bg-ink">
                <Reveal delay={i * 120}>
                  <div className="p-6 md:p-9">
                    <p className="num-oversize text-accent">{step.n}</p>
                    <h3 className="mt-8 text-2xl font-extrabold uppercase">{step.title}</h3>
                    <p className="mt-4 text-sm text-beige">{step.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* D. INTERNET PROBLEMS EXPLAINED */}
      <section aria-labelledby="problems" className="rule-b">
        <div className="shell grid gap-0 md:grid-cols-12 md:gap-12">
          <div className="pt-16 md:col-span-5 md:py-24">
            <div className="md:sticky md:top-28">
              <p className="label-mono">Internet problems explained</p>
              <h2 id="problems" className="display-lg mt-5 text-[clamp(2rem,4.4vw,3.6rem)]">
                What usually lies behind the problem
              </h2>
              <Parallax className="mt-10 hidden aspect-[4/3] w-full md:block" strength={26}>
                <img
                  src={fiber}
                  alt="Glowing fiber optic strands against a dark background"
                  loading="lazy"
                  width={1600}
                  height={912}
                  className="img-cover"
                />
              </Parallax>
            </div>
          </div>
          <div className="pb-16 pt-2 md:col-span-7 md:py-24">
            <FaqList items={PROBLEMS} defaultOpen={0} idPrefix="problems" />
            <Link to="/internet" className="btn-outline mt-10">
              Full internet connection guide
            </Link>
          </div>
        </div>
      </section>

      {/* E. OUTAGES AND RESTORATION */}
      <section aria-labelledby="outages" className="bg-ivory rule-b">
        <div className="shell py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="label-mono">Outages and restoration</p>
              <h2 id="outages" className="display-lg mt-5 text-[clamp(2rem,4.8vw,4rem)]">
                When the service itself is down
              </h2>
            </div>
            <div className="space-y-5 text-muted-foreground md:col-span-6">
              <p>
                An internet outage is an interruption in connectivity. It can affect one household,
                a neighborhood or a wider service area. A problem with your own equipment and a
                provider-side outage can look the same from the sofa, but they are fixed by
                different people.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="label-mono">How wide is the problem?</p>
              <ul className="mt-5 grid border-l border-t border-line-strong sm:grid-cols-3">
                {SCOPES.map((s, i) => (
                  <li key={s.t} className="border-b border-r border-line-strong bg-background p-5">
                    <p className="font-display text-xs font-extrabold text-accent">0{i + 1}</p>
                    <h3 className="mt-2 text-lg font-extrabold uppercase leading-tight">{s.t}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-5">
              <p className="label-mono">What you can check while waiting</p>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {WAITING.map((w) => (
                  <li key={w} className="flex gap-3 py-3 text-sm text-muted-foreground">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link to="/outages" className="btn-outline mt-12">
            Read the outage guide
          </Link>
        </div>
      </section>

      {/* Photographic break */}
      <section className="relative">
        <Parallax className="h-[52vh] min-h-[20rem] w-full" strength={44}>
          <img
            src={coverage}
            alt="Aerial view of a sunlit residential neighborhood at golden hour"
            loading="lazy"
            width={1600}
            height={912}
            className="img-cover"
          />
        </Parallax>
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-transparent to-transparent">
          <div className="shell w-full pb-9">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-foreground">
              Fig. 02 — One street, one network, many homes
            </p>
            <p className="mt-4 max-w-3xl font-display text-2xl font-extrabold uppercase leading-[0.98] text-accent-foreground md:text-5xl">
              Restoration depends on the provider, the fault and the circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* F. BUILT AROUND EVERYDAY CONNECTIVITY */}
      <section aria-labelledby="everyday" className="shell py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-6">
          <h2 id="everyday" className="display-lg max-w-2xl text-[clamp(2rem,4.8vw,4rem)]">
            Built around everyday connectivity
          </h2>
          <p className="max-w-xs text-sm text-muted-foreground">
            No two households use their connection the same way. Here is what the load looks like.
          </p>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-12">
          {EVERYDAY.map((card, i) => (
            <article key={card.title} className={card.span}>
              <Reveal delay={i * 100}>
                <div className={`overflow-hidden ${card.ratio}`}>
                  <img
                    src={card.img}
                    alt={card.alt}
                    loading="lazy"
                    className="img-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                </div>
                <p className="label-mono mt-5 border-t border-line pt-4">{card.tag}</p>
                <h3 className="mt-3 text-2xl font-extrabold uppercase md:text-3xl">{card.title}</h3>
                <p className="mt-3 max-w-lg text-sm text-muted-foreground">{card.body}</p>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      {/* G. COMMON QUESTIONS */}
      <section aria-labelledby="faq" className="rule-t shell py-16 md:py-24">
        <div className="grid gap-8 md:grid-cols-12">
          <h2 id="faq" className="display-lg text-[clamp(2rem,4.4vw,3.6rem)] md:col-span-5">
            Common questions
          </h2>
          <div className="md:col-span-7">
            <FaqList items={FAQS} idPrefix="home-faq" />
            <Link to="/faq" className="btn-outline mt-10">
              All questions
            </Link>
          </div>
        </div>
      </section>

      {/* H. FINAL CTA */}
      <section className="rule-t bg-ivory">
        <div className="shell grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-8">
            <h2 className="display-xl text-[clamp(2.4rem,7vw,6.5rem)]">
              Let&apos;s understand your <span className="text-accent">connection.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-6 md:col-span-4">
            <p className="text-sm text-muted-foreground">
              Whether you&apos;re experiencing an internet interruption, Wi-Fi problem or streaming
              issue, start with clear information and independent assistance.
            </p>
            <p className="text-sm text-muted-foreground">
              If the problem isn&apos;t solved, visit our live team support on our toll-free number{" "}
              <a
                href="tel:+18552024908"
                className="whitespace-nowrap font-bold text-foreground underline decoration-accent underline-offset-4"
              >
                (855) 202-4908
              </a>
              .
            </p>
            <div className="flex flex-wrap gap-3">
              <CallButton>Contact our team</CallButton>
              <Link to="/contact" className="btn-outline">
                Send a message
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">
              Independent third-party assistance. Not an internet service provider.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
