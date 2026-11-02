import { Disclosure } from "./blocks";
import { PageIntro } from "./site-chrome";

export type LegalSection = { title: string; body: string };

export function LegalPage({
  index,
  title,
  lead,
  sections,
  id,
}: {
  index: string;
  title: string;
  lead: string;
  sections: readonly LegalSection[];
  id: string;
}) {
  return (
    <>
      <PageIntro index={index} eyebrow="Legal" title={title} lead={lead} />
      <section aria-labelledby={id} className="shell pb-24">
        <h2 id={id} className="sr-only">
          {title} details
        </h2>
        <Disclosure className="mb-12" />
        <div className="border-t border-line">
          {sections.map((s, i) => (
            <div key={s.title} className="rule-b grid gap-3 py-9 md:grid-cols-12 md:gap-8">
              <h3 className="text-xl font-extrabold uppercase md:col-span-4 md:text-2xl">
                <span className="label-mono mb-2 block">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h3>
              <p className="max-w-3xl text-sm text-muted-foreground md:col-span-8">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
