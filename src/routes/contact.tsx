import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import {
  CALL_GREETING,
  CallButton,
  Disclosure,
  GuideHero,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "../components/blocks";
import { usePageMeta } from "../hooks/use-page-meta";
import internetHero from "../assets/internet-hero.jpg";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  usePageMeta({
    title: "Contact Upgrade Net | Independent Assistance Platform",
    description:
      "Questions about internet connectivity, cable TV, streaming or home Wi-Fi? Call or message the Upgrade Net independent assistance team.",
    path: "/contact",
  });

  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <GuideHero
        index="08"
        eyebrow="Contact"
        title="Let's talk about your connection."
        lead="Have questions about internet connectivity, cable television, streaming or home Wi-Fi? Reach out to our assistance team."
        image={internetHero}
        alt="Laptop on a marble table in a bright apartment living room"
        caption="Fig. 01 — Tell us what you are experiencing."
        actions={<CallButton>Get assistance</CallButton>}
      />

      <section aria-labelledby="contact-details" className="rule-t bg-ivory">
        <div className="shell grid gap-14 py-20 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="label-mono">Reach us</p>
            <h2
              id="contact-details"
              className="mt-6 text-3xl font-extrabold uppercase md:text-[2.6rem]"
            >
              Phone &amp; hours
            </h2>
            <a href={PHONE_HREF} className="btn-accent mt-8 inline-flex">
              {PHONE_DISPLAY}
            </a>
            <dl className="mt-12 space-y-6 border-t border-line pt-8">
              <div>
                <dt className="label-mono">Hours</dt>
                <dd className="mt-2 text-sm text-muted-foreground">Mon–Sat · 8am–9pm</dd>
              </div>
              <div>
                <dt className="label-mono">When you call</dt>
                <dd className="mt-2 text-sm text-muted-foreground">
                  You will hear: &ldquo;{CALL_GREETING}&rdquo; We never ask for provider passwords.
                </dd>
              </div>
              <div>
                <dt className="label-mono">Good to know</dt>
                <dd className="mt-2 text-sm text-muted-foreground">
                  For account, billing, repair or outage-restoration requests, please contact your
                  service provider directly. Our service fee is separate from your provider's
                  charges, and Upgrade Net cannot act on provider accounts.
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-8">
            {submitted ? (
              <div className="border border-line-strong p-10">
                <p className="label-mono">Thanks</p>
                <p className="mt-4 max-w-md text-lg">
                  Thank you for your message. If your matter is urgent, you can also call us on{" "}
                  <a href={PHONE_HREF} className="underline decoration-accent underline-offset-4">
                    {PHONE_DISPLAY}
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                className="grid gap-6 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <label className="flex flex-col gap-2 sm:col-span-1">
                  <span className="label-mono">Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    className="border border-line-strong bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                  />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-1">
                  <span className="label-mono">Email or phone</span>
                  <input
                    type="text"
                    name="contact"
                    required
                    className="border border-line-strong bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                  />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="label-mono">Service area or ZIP code (optional)</span>
                  <input
                    type="text"
                    name="address"
                    className="border border-line-strong bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                  />
                </label>
                <label className="flex flex-col gap-2 sm:col-span-2">
                  <span className="label-mono">What is happening with your connection?</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="border border-line-strong bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                  />
                </label>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-accent">
                    Contact our team
                  </button>
                  <p className="mt-4 text-xs text-muted-foreground">
                    Submitting this form does not commit you to anything. Please do not include
                    passwords or payment details.
                  </p>
                </div>
              </form>
            )}
            <Disclosure className="mt-10" />
            <p className="mt-6 text-sm text-muted-foreground">
              Looking for answers first? Read the{" "}
              <Link to="/internet" className="underline decoration-accent underline-offset-4">
                internet guide
              </Link>{" "}
              or the{" "}
              <Link to="/faq" className="underline decoration-accent underline-offset-4">
                FAQ
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
