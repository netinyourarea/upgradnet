import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Parallax, Reveal } from "./motion";

export const PHONE_HREF = "tel:+18552024908";
export const PHONE_DISPLAY = "(855) 202-4908";

export const LAUNCH_YEAR = 2026;

export const DISCLOSURE = `We are an independent third-party service assistance startup, launched in ${LAUNCH_YEAR}, and are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. We are not an internet service provider, cable television operator or telecommunications carrier, and we do not sell internet, cable or streaming plans. Our service fee is separate from any charge made by your provider.`;

export const FOOTER_NOTE =
  "Upgrade Net is an independent third-party service assistance startup. All trademarks belong to their respective owners.";

export const CALL_GREETING =
  "Thank you for calling Upgrade Net, an independent service assistance platform.";

type To =
  | "/"
  | "/internet"
  | "/outages"
  | "/cable-tv"
  | "/streaming"
  | "/wifi"
  | "/faq"
  | "/contact"
  | "/about";

/** Primary call-to-action: always shows, and dials, the toll-free number. */
export function CallButton({
  className = "btn-accent",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <a href={PHONE_HREF} className={className} aria-label={`Call ${PHONE_DISPLAY}`}>
      {PHONE_DISPLAY}
    </a>
  );
}

/** Short, visible independent-service notice. */
export function Disclosure({ className = "" }: { className?: string }) {
  return (
    <aside
      aria-label="Independent service disclosure"
      className={`border-l-2 border-accent bg-ivory py-4 pl-5 pr-4 ${className}`}
    >
      <p className="label-mono !text-foreground">Independent service disclosure</p>
      <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{DISCLOSURE}</p>
    </aside>
  );
}

export function GuideHero({
  index,
  eyebrow,
  title,
  lead,
  image,
  alt,
  caption,
  variant = "split",
  actions,
  titleClass = "",
}: {
  index: string;
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  alt: string;
  caption: string;
  variant?: "split" | "split-reverse" | "banner";
  actions?: ReactNode;
  titleClass?: string;
}) {
  if (variant === "banner") {
    return (
      <section className="rule-b">
        <div className="shell pb-10 pt-14 md:pb-14 md:pt-20">
          <p className="label-mono">
            {index} / {eyebrow}
          </p>
          <div className="mt-8 grid gap-10 md:grid-cols-12">
            <h1 className={`display-lg md:col-span-8 ${titleClass}`}>{title}</h1>
            <div className="md:col-span-4 md:self-end">
              <p className="text-base text-muted-foreground">{lead}</p>
              {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
            </div>
          </div>
        </div>
        <div className="shell pb-10">
          <Parallax className="aspect-[16/9] w-full md:aspect-[21/9]" strength={30}>
            <img src={image} alt={alt} width={1600} height={900} className="img-cover" />
          </Parallax>
          <p className="label-mono mt-4">{caption}</p>
        </div>
      </section>
    );
  }

  const reverse = variant === "split-reverse";
  return (
    <section className="rule-b">
      <div className="shell grid gap-10 pb-12 pt-14 md:grid-cols-12 md:gap-8 md:pb-16 md:pt-20">
        <div className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}>
          <p className="label-mono">
            {index} / {eyebrow}
          </p>
          <h1 className={`display-lg mt-7 text-[clamp(2.1rem,5.2vw,4.6rem)] ${titleClass}`}>
            {title}
          </h1>
          <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">{lead}</p>
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
        <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
          <Parallax className="aspect-[4/5] w-full" strength={24}>
            <img src={image} alt={alt} width={1200} height={1500} className="img-cover" />
          </Parallax>
          <p className="label-mono mt-4 border-t border-line pt-4">{caption}</p>
        </div>
      </div>
    </section>
  );
}

/** Editorial section: sticky heading on the left, free-form content on the right. */
export function Section({
  id,
  n,
  title,
  kicker,
  tone = "plain",
  children,
}: {
  id: string;
  n?: string;
  title: string;
  kicker?: string;
  tone?: "plain" | "ivory";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-h`}
      className={`scroll-mt-24 rule-b ${tone === "ivory" ? "bg-ivory" : ""}`}
    >
      <div className="shell grid gap-10 py-16 md:grid-cols-12 md:gap-8 md:py-24">
        <header className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <p className="label-mono">{n ? `${n}${kicker ? ` / ${kicker}` : ""}` : kicker}</p>
            <h2 id={`${id}-h`} className="mt-5 text-3xl font-extrabold uppercase md:text-[2.6rem]">
              {title}
            </h2>
          </div>
        </header>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}

export function Prose({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`max-w-2xl space-y-5 text-[1.02rem] text-muted-foreground ${className}`}>
      {children}
    </div>
  );
}

/** Bordered 2–3 column information grid. */
export function FactGrid({
  items,
  cols = 2,
}: {
  items: readonly { t: string; d: string }[];
  cols?: 2 | 3;
}) {
  return (
    <ul
      className={`grid border-l border-t border-line ${cols === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}
    >
      {items.map((it, i) => (
        <li key={it.t} className="border-b border-r border-line">
          <Reveal delay={(i % 3) * 70} className="h-full">
            <div className="h-full p-6">
              <p className="label-mono !text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-lg font-extrabold uppercase leading-[1.05] md:text-xl">
                {it.t}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{it.d}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

/** Large numbered troubleshooting steps. */
export function Steps({ items }: { items: readonly { t: string; d?: string }[] }) {
  return (
    <ol className="border-t border-line">
      {items.map((s, i) => (
        <li key={s.t} className="rule-b">
          <Reveal delay={Math.min(i, 3) * 60}>
            <div className="grid items-baseline gap-3 py-6 sm:grid-cols-[5.5rem_1fr] md:py-7">
              <p className="font-display text-4xl font-extrabold leading-none tracking-[-0.05em] text-accent md:text-5xl">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="text-lg font-extrabold uppercase leading-[1.1] md:text-xl">{s.t}</h3>
                {s.d ? <p className="mt-2 max-w-xl text-sm text-muted-foreground">{s.d}</p> : null}
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

/** Simple definition list with square markers. */
export function Bullets({ items }: { items: readonly { t: string; d?: string }[] }) {
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((it) => (
        <li key={it.t} className="grid gap-1 py-4 sm:grid-cols-[1.25rem_1fr] sm:gap-3">
          <span aria-hidden className="mt-2 hidden h-2 w-2 bg-accent sm:block" />
          <div>
            <p className="font-display text-base font-extrabold uppercase tracking-[-0.01em]">
              {it.t}
            </p>
            {it.d ? <p className="mt-1 text-sm text-muted-foreground">{it.d}</p> : null}
          </div>
        </li>
      ))}
    </ul>
  );
}

/** Two-column comparison with two titled lists. */
export function Compare({
  left,
  right,
  caption,
}: {
  left: { title: string; items: readonly string[] };
  right: { title: string; items: readonly string[] };
  caption?: string;
}) {
  return (
    <div>
      <div className="grid border border-line-strong md:grid-cols-2">
        {[left, right].map((col, i) => (
          <div
            key={col.title}
            className={`p-6 md:p-8 ${i === 1 ? "border-t border-line-strong bg-ink text-accent-foreground md:border-l md:border-t-0" : "bg-background"}`}
          >
            <p className={`label-mono ${i === 1 ? "!text-accent" : "!text-accent"}`}>
              {i === 0 ? "Pattern A" : "Pattern B"}
            </p>
            <h3 className="mt-3 text-2xl font-extrabold uppercase">{col.title}</h3>
            <ul className="mt-6 space-y-3">
              {col.items.map((t) => (
                <li key={t} className="flex gap-3 text-sm">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
                  <span className={i === 1 ? "text-beige" : "text-muted-foreground"}>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {caption ? <p className="mt-4 max-w-2xl text-sm text-muted-foreground">{caption}</p> : null}
    </div>
  );
}

/** Vertical timeline for "what happens next" style explanations. */
export function Timeline({
  items,
  label = "Stage",
}: {
  items: readonly { t: string; d: string }[];
  label?: string;
}) {
  return (
    <ol className="relative ml-2 border-l border-line-strong">
      {items.map((it, i) => (
        <li key={it.t} className="relative pb-9 pl-8 last:pb-0">
          <span
            aria-hidden
            className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 border border-line-strong bg-background"
          >
            <span className="absolute inset-[3px] bg-accent" />
          </span>
          <Reveal delay={i * 60}>
            <p className="label-mono">
              {label} {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 text-xl font-extrabold uppercase">{it.t}</h3>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">{it.d}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

/** Full-width photographic banner with an overlaid statement. */
export function Banner({
  image,
  alt,
  label,
  children,
}: {
  image: string;
  alt: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section className="relative rule-b">
      <Parallax className="h-[56vh] min-h-[22rem] w-full" strength={44}>
        <img
          src={image}
          alt={alt}
          loading="lazy"
          width={1920}
          height={1008}
          className="img-cover"
        />
      </Parallax>
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/10 to-transparent">
        <div className="shell w-full pb-9">
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-accent-foreground">
            {label}
          </p>
          <p className="mt-4 max-w-3xl font-display text-2xl font-extrabold uppercase leading-[0.98] text-accent-foreground md:text-5xl">
            {children}
          </p>
        </div>
      </div>
    </section>
  );
}

/** Highlighted educational note. */
export function Callout({
  title,
  children,
  tone = "light",
}: {
  title: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={`border p-6 md:p-8 ${tone === "dark" ? "border-ink bg-ink text-accent-foreground" : "border-line-strong bg-ivory"}`}
    >
      <p className="label-mono !text-accent">{title}</p>
      <div
        className={`mt-3 max-w-2xl space-y-3 text-sm ${tone === "dark" ? "text-beige" : "text-muted-foreground"}`}
      >
        {children}
      </div>
    </div>
  );
}

export function Related({ items }: { items: readonly { to: To; label: string; note: string }[] }) {
  return (
    <section aria-labelledby="related-h" className="rule-b">
      <div className="shell py-14 md:py-16">
        <h2 id="related-h" className="label-mono !text-foreground">
          Related guides
        </h2>
        <ul className="mt-8 grid border-t border-line md:grid-cols-3 md:divide-x md:divide-line">
          {items.map((r) => (
            <li key={r.to} className="rule-b md:border-b-0">
              <Link to={r.to} className="group block py-7 md:px-7 md:first:pl-0">
                <p className="font-display text-2xl font-extrabold uppercase transition-colors group-hover:text-accent">
                  {r.label}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{r.note}</p>
                <span className="label-mono mt-6 inline-block transition-transform group-hover:translate-x-2">
                  Read guide →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function GuideCTA({
  title = "Want to talk it through?",
  text,
}: {
  title?: string;
  text: string;
}) {
  return (
    <section className="bg-ink text-accent-foreground">
      <div className="shell grid gap-8 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-8">
          <p className="label-mono !text-beige">Independent assistance</p>
          <h2 className="display-lg mt-5 text-[clamp(2rem,4.6vw,3.8rem)]">{title}</h2>
          <p className="mt-6 max-w-2xl text-beige">{text}</p>
          <p className="mt-4 max-w-2xl text-beige">
            If the problem isn&apos;t solved, visit our live team support on our toll-free number{" "}
            <a
              href={PHONE_HREF}
              className="whitespace-nowrap font-bold text-accent-foreground underline decoration-accent underline-offset-4"
            >
              {PHONE_DISPLAY}
            </a>
            .
          </p>
          <p className="mt-4 max-w-2xl text-xs text-beige/80">
            Upgrade Net does not control provider networks or guarantee service availability.
            Outages, repairs and restoration are handled by your service provider.
          </p>
        </div>
        <div className="flex flex-wrap items-end gap-3 md:col-span-4 md:justify-end">
          <CallButton>Get assistance</CallButton>
          <Link
            to="/contact"
            className="inline-flex items-center border border-white/40 px-7 py-4 font-mono text-xs uppercase tracking-[0.18em] transition-colors hover:bg-white hover:text-ink"
          >
            Send a message
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Small in-page anchor navigation shown under a hero. */
export function OnThisPage({ items }: { items: readonly { id: string; label: string }[] }) {
  return (
    <nav aria-label="On this page" className="rule-b bg-ivory">
      <div className="shell flex gap-x-7 gap-y-2 overflow-x-auto py-4 md:flex-wrap md:overflow-visible">
        <span className="label-mono shrink-0 !text-foreground">On this page</span>
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className="link-underline shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground"
          >
            {it.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
