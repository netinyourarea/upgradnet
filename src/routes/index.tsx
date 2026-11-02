import { createFileRoute, Link } from "@tanstack/react-router";

import { Parallax, Reveal, SplitHeading } from "../components/motion";
import { CallButton } from "../components/blocks";
import { FaqList } from "../components/site-chrome";
import { usePageMeta } from "../hooks/use-page-meta";
import heroHome from "../assets/hero-home.jpg";
import internetHero from "../assets/internet-hero.jpg";
import streamingImg from "../assets/streaming.jpg";
import fiber from "../assets/fiber.jpg";
import coverage from "../assets/coverage.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const GUIDES = [
  {
    n: "01",
    to: "/internet",
    title: "Internet, Outages & Wi-Fi",
    img: internetHero,
    alt: "Bright apartment with a laptop open on a marble table beside a sunlit living room",
    note: "Find out why a connection slows down, drops out or stops working, and what to check first.",
    topics: ["Slow internet", "Outages", "Weak Wi-Fi", "No internet access"],
    tone: "bg-background",
  },
  {
    n: "02",
    to: "/tv-streaming",
    title: "TV & Streaming",
    img: streamingImg,
    alt: "Family watching a film on a large television in a living room at dusk",
    note: "Understand missing channels, the “No Signal” message and video that keeps buffering.",
    topics: ["Missing channels", "No Signal", "Video buffering", "Apps not loading"],
    tone: "bg-ink text-accent-foreground",
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
          <p className="label-mono">Two guides</p>
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
