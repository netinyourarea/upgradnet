import { createFileRoute, Link } from "@tanstack/react-router";

import { Disclosure, GuideCTA } from "../components/blocks";
import { Reveal } from "../components/motion";
import { PageIntro } from "../components/site-chrome";
import { ARTICLES } from "../data/articles";
import { usePageMeta } from "../hooks/use-page-meta";

export const Route = createFileRoute("/insights/")({
  component: InsightsPage,
});

function InsightsPage() {
  usePageMeta({
    title: "Insights: Internet, Wi-Fi & Cable TV Guides | Upgrade Net",
    description:
      "Plain-language guides on fixing slow internet, Wi-Fi problems, cable TV issues, router setup and choosing a home internet plan.",
    path: "/insights",
  });

  return (
    <>
      <PageIntro
        eyebrow="Insights"
        title="Guides for a better connection."
        lead="Step-by-step articles on internet, Wi-Fi, routers, cable TV and home internet plans, written in plain language."
      />
      <div className="shell pb-10">
        <Disclosure />
      </div>

      <section aria-label="Articles" className="shell pb-16 md:pb-24">
        <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {ARTICLES.map((a, i) => (
            <li key={a.path}>
              <Reveal delay={(i % 2) * 100} className="h-full">
                <Link to={a.path} className="group flex h-full flex-col">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={a.image}
                      alt={a.alt}
                      loading="lazy"
                      width={1200}
                      height={750}
                      className="img-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                  <p className="label-mono mt-5 border-t border-line pt-4">{a.category}</p>
                  <h2 className="mt-3 text-2xl font-extrabold uppercase transition-colors group-hover:text-accent md:text-3xl">
                    {a.h1}
                  </h2>
                  <p className="mt-3 max-w-lg text-sm text-muted-foreground">{a.summary}</p>
                  <span className="label-mono mt-5 inline-block !text-foreground transition-transform group-hover:translate-x-2">
                    Read the guide →
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <GuideCTA
        title="Still stuck? Talk it through."
        text="If a guide does not solve your problem, our independent assistance team can help you understand your situation and your options."
      />
    </>
  );
}
