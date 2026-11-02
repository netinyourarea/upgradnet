import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { CallButton, DISCLOSURE, FOOTER_NOTE, PHONE_DISPLAY, PHONE_HREF } from "./blocks";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/internet", label: "Internet" },
  { to: "/outages", label: "Outages" },
  { to: "/cable-tv", label: "Cable TV" },
  { to: "/streaming", label: "Streaming" },
  { to: "/wifi", label: "Wi-Fi" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm rule-b">
      <div className="shell flex items-center justify-between gap-6 py-4">
        <Link to="/" className="flex items-baseline gap-2" aria-label="Upgrade Net home">
          <span className="font-display text-xl font-extrabold uppercase tracking-[-0.04em]">
            Upgrade<span className="text-accent">Net</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex xl:gap-6">
          {NAV.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="link-underline font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <CallButton className="btn-accent hidden px-5 py-3 sm:inline-flex">
            Get assistance
          </CallButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="border border-line-strong px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] xl:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div className="rule-t bg-ivory xl:hidden">
          <ul className="shell divide-y divide-line">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-4 font-display text-2xl font-extrabold uppercase"
                >
                  {item.label}
                  <span className="label-mono">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="shell pb-6">
            <CallButton className="btn-accent w-full justify-center">Get assistance</CallButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="rule-t bg-ivory">
      <div className="shell grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="font-display text-4xl font-extrabold uppercase leading-[0.9] md:text-5xl">
            Clear answers for your <span className="text-accent">connection</span>
          </p>
          <p className="mt-6 max-w-md text-sm text-muted-foreground">
            Upgrade Net is an independent third-party assistance resource helping households
            understand internet connectivity, cable television, streaming and home Wi-Fi.
          </p>
          <a href={PHONE_HREF} className="btn-accent mt-8">
            {PHONE_DISPLAY}
          </a>
        </div>

        <nav aria-label="Guides" className="md:col-span-2 md:col-start-7">
          <p className="label-mono">Guides</p>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/internet", label: "Internet connection" },
              { to: "/outages", label: "Outages & restoration" },
              { to: "/cable-tv", label: "Cable TV" },
              { to: "/streaming", label: "Streaming" },
              { to: "/wifi", label: "Home Wi-Fi" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="md:col-span-2">
          <p className="label-mono">Company</p>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/about", label: "About" },
              { to: "/faq", label: "FAQ" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal" className="md:col-span-2">
          <p className="label-mono">Legal</p>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/privacy-policy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms & Conditions" },
              { to: "/disclaimer", label: "Disclaimer" },
              { to: "/refund-policy", label: "Refund Policy" },
              { to: "/advertising-disclosure", label: "Advertising Disclosure" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="link-underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="rule-t">
        <div className="shell flex flex-col gap-4 py-6 md:flex-row md:items-start md:justify-between md:gap-12">
          <p className="label-mono shrink-0">© {new Date().getFullYear()} Upgrade Net</p>
          <div className="max-w-3xl space-y-2 text-xs text-muted-foreground">
            <p className="font-bold text-foreground">{FOOTER_NOTE}</p>
            <p>{DISCLOSURE}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({
  index,
  eyebrow,
  title,
  lead,
}: {
  index: string;
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="shell grid gap-8 pb-14 pt-16 md:grid-cols-12 md:pb-20 md:pt-24">
      <div className="md:col-span-3">
        <p className="label-mono">
          {index} / {eyebrow}
        </p>
      </div>
      <div className="md:col-span-9">
        <h1 className="display-lg">{title}</h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">{lead}</p>
      </div>
    </section>
  );
}

export function FaqList({
  items,
  defaultOpen = 0,
  idPrefix = "faq",
}: {
  items: readonly { q: string; a: string }[];
  defaultOpen?: number | null;
  idPrefix?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  return (
    <ul className="rule-t">
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `${idPrefix}-panel-${i}`;
        return (
          <li key={item.q} className="rule-b">
            <h3 className="!text-base !leading-snug">
              <button
                type="button"
                id={`${idPrefix}-btn-${i}`}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-accent md:gap-8 md:py-6"
              >
                <span className="flex gap-4 md:gap-6">
                  <span className="label-mono pt-1.5">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-lg font-extrabold uppercase leading-[1.05] md:text-xl">
                    {item.q}
                  </span>
                </span>
                <span aria-hidden className="label-mono pt-1.5">
                  {open ? "—" : "+"}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={`${idPrefix}-btn-${i}`}
              inert={!open}
              className="grid overflow-hidden transition-[grid-template-rows,opacity] duration-500"
              style={{ gridTemplateRows: open ? "1fr" : "0fr", opacity: open ? 1 : 0 }}
            >
              <p className="min-h-0 max-w-3xl pb-7 text-sm text-muted-foreground md:pl-[3.25rem]">
                {item.a}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
