import Link from "next/link";
import { Eyebrow } from "./Sections";
import { Icon } from "./Icons";

export const products = [
  {
    name: "REAHUB",
    tag: "Real estate compliance",
    body: "One file per property, trust accounts that reconcile, registers that fill from the work and an audit log nobody can edit.",
    href: "https://reahub.com.au",
  },
  {
    name: "WHSCOMPLY",
    tag: "Work health and safety",
    body: "The records, checks and sign-offs a business needs to show its WHS duties are met, kept in one place and ready to export.",
    href: "https://whscomply.com",
  },
];

export const steps: [string, string, string][] = [
  [
    "01",
    "Scope",
    "We sit with the people doing the work and write down what actually happens, including the spreadsheet nobody admits to.",
  ],
  [
    "02",
    "Build",
    "Small releases every week. You use real software from the first fortnight, not a deck about it.",
  ],
  [
    "03",
    "Ship",
    "We launch it, move your people onto it and fix what the first month turns up.",
  ],
  [
    "04",
    "Run",
    "We keep it running, patched and improving. The team that built it is the team that answers.",
  ],
];

export function ProductsBlock() {
  return (
    <section className="mx-auto mt-28 max-w-6xl px-5 sm:px-8">
      <div data-reveal>
        <Eyebrow>Our products</Eyebrow>
        <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.02] tracking-tight">
          Two products in market, both built for people with an audit coming.
        </h2>
      </div>
      <div data-stagger className="mt-12 grid gap-6 md:grid-cols-2">
        {products.map((p) => (
          <Link
            key={p.name}
            href={p.href}
            className="lift group flex flex-col justify-between rounded-[1.75rem] border border-line bg-surface p-7 sm:p-9"
          >
            <div>
              <p className="eyebrow">{p.tag}</p>
              <h3 className="mt-4 font-display text-4xl font-bold tracking-tight">
                {p.name}
              </h3>
              <p className="mt-4 max-w-md text-ink-soft">{p.body}</p>
            </div>
            <span className="mt-10 inline-flex items-center gap-2 font-semibold">
              Visit {p.name} <Icon name="arrow" className="h-4 w-4" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function StepsBlock() {
  return (
    <section className="mx-auto mt-20 grid max-w-6xl grid-cols-[minmax(0,1fr)] gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
      <div data-reveal>
        <Eyebrow>The process</Eyebrow>
        <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.02] tracking-tight">
          Four steps, one team, no hand-offs.
        </h2>
      </div>
      <ol data-stagger className="divide-y divide-line border-y border-line">
        {steps.map(([n, title, body]) => (
          <li key={n} className="row-hover grid grid-cols-[3.5rem_1fr] gap-4 py-7">
            <span className="font-mono text-sm text-accent">{n}</span>
            <div>
              <h3 className="font-display text-2xl font-bold">{title}</h3>
              <p className="mt-2 max-w-md text-ink-soft">{body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function StudioBlock() {
  return (
    <section className="mx-auto mt-20 max-w-6xl px-5 sm:px-8">
      <div data-reveal className="max-w-3xl">
        <Eyebrow>The studio</Eyebrow>
        <p className="mt-5 font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-snug tracking-tight">
          Briesa is a small software company. We run the products ourselves, so
          we know what it costs to keep software alive after launch, and we
          price your build with that in mind.
        </p>
      </div>
    </section>
  );
}
