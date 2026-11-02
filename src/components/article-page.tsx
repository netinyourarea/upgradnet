import { Link } from "@tanstack/react-router";

import { ARTICLES, type ArticlePath, type Block } from "../data/articles";
import { SITE_URL, usePageMeta } from "../hooks/use-page-meta";
import { CallButton, Disclosure, GuideCTA, GuideHero, Section } from "./blocks";
import { FaqList } from "./site-chrome";

function BlockView({ block }: { block: Block }) {
  switch (block.k) {
    case "p":
      return <p className="max-w-3xl text-[1.02rem] text-muted-foreground">{block.v}</p>;
    case "q":
      return (
        <p className="max-w-3xl border-l-4 border-accent bg-ivory px-5 py-4 text-[1.02rem] text-foreground">
          {block.v}
        </p>
      );
    case "h3":
      return <h3 className="pt-4 font-display text-xl font-extrabold uppercase">{block.v}</h3>;
    case "ul":
      return (
        <ul className="divide-y divide-line border-y border-line">
          {block.v.map((item) => (
            <li
              key={item}
              className="flex gap-3 py-3 text-[0.98rem] leading-relaxed text-muted-foreground"
            >
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="divide-y divide-line border-y border-line">
          {block.v.map((item, i) => (
            <li
              key={item}
              className="flex gap-4 py-3 text-[0.98rem] leading-relaxed text-muted-foreground"
            >
              <span className="font-display text-xs font-extrabold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="overflow-x-auto border border-line-strong">
          <table className="w-full min-w-[32rem] text-left text-sm">
            <thead>
              <tr className="bg-ivory">
                {block.head.map((h, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="label-mono border-b border-line-strong px-4 py-3 font-normal"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {block.rows.map((row) => (
                <tr key={row.join("|")}>
                  {row.map((cell, i) => (
                    <td
                      key={i}
                      className={`px-4 py-3 align-top ${i === 0 ? "font-bold" : "text-muted-foreground"}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export function ArticlePage({ path }: { path: ArticlePath }) {
  const index = ARTICLES.findIndex((a) => a.path === path);
  const article = ARTICLES[index];
  const next = ARTICLES[(index + 1) % ARTICLES.length];
  if (!article || !next) throw new Error("Unknown article path: " + path);
  const url = `${SITE_URL}${path}`;

  usePageMeta({
    title: article.metaTitle,
    description: article.metaDescription,
    ogTitle: article.ogTitle,
    ogDescription: article.ogDescription,
    ogType: "article",
    path,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          headline: article.h1,
          description: article.metaDescription,
          mainEntityOfPage: url,
          publisher: { "@type": "Organization", name: "Upgrade Net", url: SITE_URL },
        },
        {
          "@type": "FAQPage",
          mainEntity: article.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
            {
              "@type": "ListItem",
              position: 2,
              name: "Insights",
              item: `${SITE_URL}/insights`,
            },
            { "@type": "ListItem", position: 3, name: article.h1, item: url },
          ],
        },
      ],
    },
  });

  const nav = [
    ...article.sections.map((s) => ({ id: s.id, label: s.heading })),
    { id: "faq", label: "FAQ" },
  ];

  return (
    <>
      <GuideHero
        variant="banner"
        eyebrow={`Insights / ${article.category}`}
        title={article.h1}
        lead={article.summary}
        image={article.image}
        alt={article.alt}
        caption={`Fig. 01 — ${article.category} guide`}
        titleClass="text-[clamp(1.9rem,4.2vw,3.6rem)]"
        actions={
          <>
            <CallButton>Get assistance</CallButton>
            <Link to="/insights" className="btn-outline">
              All insights
            </Link>
          </>
        }
      />

      <div className="shell space-y-5 py-10">
        {article.intro.map((t) => (
          <p key={t} className="max-w-3xl text-[1.05rem] text-muted-foreground">
            {t}
          </p>
        ))}
        <Disclosure />
      </div>
      <nav aria-label="In this guide" className="rule-t rule-b bg-ivory">
        <div className="shell py-10 md:py-12">
          <p className="label-mono">In this guide</p>
          <ol className="mt-6 grid gap-x-10 gap-y-1 md:grid-cols-2">
            {nav.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="group flex items-baseline gap-4 border-b border-line py-3 transition-colors hover:text-accent"
                >
                  <span className="font-display text-xs font-extrabold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold">{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {article.sections.map((s, i) => (
        <Section
          key={s.id}
          id={s.id}
          n={String(i + 1).padStart(2, "0")}
          title={s.heading}
          tone={i % 2 === 1 ? "ivory" : "plain"}
        >
          <div className="space-y-5">
            {s.blocks.map((b, j) => (
              <BlockView key={j} block={b} />
            ))}
          </div>
        </Section>
      ))}

      <section id="faq" aria-labelledby="article-faq-h" className="scroll-mt-24 rule-b">
        <div className="shell grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <p className="label-mono">FAQ</p>
            <h2
              id="article-faq-h"
              className="mt-5 text-3xl font-extrabold uppercase md:text-[2.6rem]"
            >
              {article.faqHeading}
            </h2>
          </div>
          <div className="md:col-span-8">
            <FaqList items={article.faqs} idPrefix="article" />
          </div>
        </div>
      </section>

      <section className="shell py-16 md:py-24">
        {article.closing ? (
          <div aria-labelledby="closing-h" role="group" className="mb-12">
            <h2 id="closing-h" className="text-3xl font-extrabold uppercase md:text-[2.6rem]">
              {article.closing.heading}
            </h2>
            <div className="mt-6 space-y-5">
              {article.closing.text.map((t) => (
                <p key={t} className="max-w-3xl text-[1.02rem] text-muted-foreground">
                  {t}
                </p>
              ))}
            </div>
          </div>
        ) : null}
        <p className="label-mono">Next guide</p>
        <Link
          to={next.path}
          className="link-underline mt-4 inline-block font-display text-2xl font-extrabold uppercase md:text-3xl"
        >
          {next.h1} →
        </Link>
      </section>

      <GuideCTA
        title="Still stuck? Talk it through."
        text="If this guide did not solve your problem, our independent assistance team can help you understand your situation and your options."
      />
    </>
  );
}
