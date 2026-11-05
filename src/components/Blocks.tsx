import Link from "next/link";
import { Eyebrow } from "./Sections";
import { Icon } from "./Icons";
import { CONTACT_URL } from "@/lib/site";

export const products = [
  {
    name: "REAHUB",
    tag: "Real estate compliance",
    body: "Real estate agency software for NSW: property files, trust accounting, compliance registers, licence alerts and an audit log that cannot be edited, all on one record.",
    href: "https://reahub.com.au",
    spec: [
      ["market", "NSW real estate"],
      ["status", "live"],
      ["platform", "briesa"],
    ],
  },
  {
    name: "WHSCOMPLY",
    tag: "Work health and safety",
    body: "The records, checks and sign-offs a business needs to show its WHS duties are met, kept in one place and ready to export.",
    href: "https://whscomply.com",
    spec: [
      ["market", "work health & safety"],
      ["status", "live"],
      ["platform", "briesa"],
    ],
  },
];

export const markets = [
  "Real Estate",
  "Property Management",
  "Compliance",
  "Finance",
  "Professional Services",
  "Operations",
  "Health",
  "What's Next",
];

const whatWeDo: [string, string][] = [
  [
    "Micro-SaaS Products",
    "We find one costly problem in an industry and build the product that removes it, end to end.",
  ],
  [
    "AI That Does the Work",
    "Assistants grounded in your own records that answer, draft and flag in context, not generic chat.",
  ],
  [
    "Compliance by Design",
    "Audit trails, access control and the records regulators ask for, built in from the first release.",
  ],
  [
    "One Shared Platform",
    "Every product runs on the same foundation: sign-in, billing, data and deploys. So the next one ships faster.",
  ],
];

const steps: [string, string, string][] = [
  [
    "01",
    "Find",
    "We start inside an industry, with the people doing the work, until we can name the problem precisely.",
  ],
  [
    "02",
    "Build",
    "A small team ships a working product in weeks on our shared platform. Software, not slide decks.",
  ],
  [
    "03",
    "Launch",
    "Real customers and real data from the first release. We measure what people do, not what they say.",
  ],
  [
    "04",
    "Compound",
    "Every product strengthens the platform underneath it, so each one after ships faster and better.",
  ],
];

const faqs: [string, string][] = [
  [
    "What is Briesa?",
    "Briesa is a software studio that builds micro-SaaS: focused products that each solve one problem for one kind of business, completely. We design, build and run every product ourselves.",
  ],
  [
    "What is micro-SaaS?",
    "Software as a service with a deliberately narrow focus. Instead of one platform that does everything adequately, a micro-SaaS product does one job exceptionally well, for the people who live with that job every day.",
  ],
  [
    "What have you built?",
    "Our first product is REAHUB, real estate agency software for NSW: property files, trust accounting, compliance registers, licence alerts and an audit log that cannot be edited, all on one record.",
  ],
  [
    "Can I bring you a problem?",
    "Please do. If your industry still runs on spreadsheets, inboxes and good intentions, there may be a product in it. Tell us about it and we'll tell you honestly whether it's one we should build.",
  ],
];

export function MarketsStrip() {
  return (
    <div className="relative overflow-hidden bg-[linear-gradient(110deg,oklch(0.1_0_0),oklch(0.24_0_0)_55%,oklch(0.12_0_0))] py-5 font-mono text-xs uppercase tracking-[0.18em] text-white">
      <div
        aria-hidden="true"
        className="glow-x pointer-events-none absolute h-24 w-72 rounded-full bg-accent/70 blur-3xl"
      />
      <p className="sr-only">Markets we build for: {markets.join(", ")}</p>
      <ul
        className="marquee flex w-max gap-10 whitespace-nowrap"
        aria-hidden="true"
      >
        {[0, 1, 2, 3].flatMap((k) =>
          markets.map((t) => (
            <li key={`${k}-${t}`} className="flex items-center gap-10">
              {t}
              <span className="text-accent">/</span>
            </li>
          )),
        )}
      </ul>
    </div>
  );
}

export function WhatWeDoBlock() {
  return (
    <section className="mx-auto mt-28 max-w-6xl px-5 sm:px-8">
      <div data-reveal>
        <Eyebrow>What we do</Eyebrow>
        <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.02] tracking-tight">
          One studio. Many focused products.
        </h2>
      </div>
      <ul data-stagger className="mt-12 grid gap-x-10 gap-y-2 md:grid-cols-2">
        {whatWeDo.map(([t, b], i) => (
          <li
            key={t}
            className="row-hover grid grid-cols-[3rem_1fr] gap-3 border-t border-line py-7"
          >
            <span className="font-mono text-sm text-accent">0{i + 1}</span>
            <div>
              <h3 className="font-display text-2xl font-bold">{t}</h3>
              <p className="mt-2 max-w-md text-ink-soft">{b}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function ProductsBlock() {
  return (
    <section className="mx-auto mt-28 max-w-6xl px-5 sm:px-8">
      <div data-reveal>
        <Eyebrow>What we have built</Eyebrow>
        <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.02] tracking-tight">
          Focused products, each solving one problem completely.
        </h2>
      </div>
      <div data-stagger className="mt-12 grid gap-6 md:grid-cols-2">
        {products.map((p) => (
          <Link
            key={p.name}
            href={p.href}
            className="lift ticks group flex flex-col justify-between rounded-xl border border-line bg-surface p-7 sm:p-9"
          >
            <div>
              <p className="eyebrow">{p.tag}</p>
              <h3 className="mt-4 font-display text-4xl font-bold tracking-tight">
                {p.name}
              </h3>
              <p className="mt-4 max-w-md text-ink-soft">{p.body}</p>
              <dl className="mt-6 divide-y divide-line border-y border-line font-mono text-xs">
                {p.spec.map(([k, v]) => (
                  <div key={k} className="flex justify-between py-2">
                    <dt className="text-ink-soft">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
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

export function ThesisBlock() {
  return (
    <section className="mx-auto mt-28 grid max-w-6xl grid-cols-[minmax(0,1fr)] gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr]">
      <div data-reveal>
        <Eyebrow>Our thesis</Eyebrow>
        <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.02] tracking-tight">
          Small software, solved completely.
        </h2>
        <p className="mt-6 max-w-md text-ink-soft">
          Every Briesa product starts from the same belief: the best software
          disappears into the work it was built for.
        </p>
        <p className="mt-8 font-display text-7xl font-bold text-accent">1</p>
        <p className="font-mono text-xs uppercase tracking-wider text-ink-soft">
          Problem per product. Solved completely.
        </p>
      </div>
      <div data-stagger className="space-y-6">
        {[
          [
            "The Briesa thesis",
            "The future of software isn't one platform that does everything adequately. It's many focused products that each do one thing exceptionally well.",
            "Why we build micro-SaaS",
          ],
          [
            "Principle 01",
            "Software built for one industry's rules beats a generic tool configured to fit them.",
            "Depth over breadth",
          ],
          [
            "Principle 02",
            "Small products ship often, listen closely and compound. Shipping is a habit, not an event.",
            "Momentum over size",
          ],
        ].map(([k, q, t]) => (
          <figure
            key={k}
            className="rounded-xl border border-line bg-surface p-7"
          >
            <p className="eyebrow">{k}</p>
            <h3 className="mt-3 font-display text-xl font-bold">{t}</h3>
            <blockquote className="mt-3 text-ink-soft">
              &ldquo;{q}&rdquo;
            </blockquote>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function StepsBlock() {
  return (
    <section className="mx-auto mt-20 grid max-w-6xl grid-cols-[minmax(0,1fr)] gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
      <div data-reveal>
        <Eyebrow>How we build</Eyebrow>
        <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.02] tracking-tight">
          From a real problem to a running product.
        </h2>
        <p className="mt-6 max-w-md text-ink-soft">
          Big software tries to do everything for everyone. We do the opposite:
          one problem, one product, solved completely, then on to the next.
        </p>
      </div>
      <ol data-stagger className="divide-y divide-line border-y border-line">
        {steps.map(([n, title, body]) => (
          <li
            key={n}
            className="row-hover grid grid-cols-[3.5rem_1fr] gap-4 py-7"
          >
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

export function FaqBlock() {
  return (
    <section className="mx-auto mt-28 max-w-4xl px-5 sm:px-8">
      <div data-reveal>
        <Eyebrow>FAQ</Eyebrow>
        <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.02] tracking-tight">
          Frequently asked questions
        </h2>
      </div>
      <div className="mt-10 border-b border-line">
        {faqs.map(([q, a]) => (
          <details key={q} className="group border-t border-line py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between font-display text-xl font-semibold">
              {q}
              <span
                aria-hidden="true"
                className="text-accent transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl text-ink-soft">{a}</p>
          </details>
        ))}
      </div>
      <p className="mt-6 text-ink-soft">
        Have more questions?{" "}
        <Link href={CONTACT_URL} className="font-semibold text-ink underline">
          Get in touch
        </Link>
        .
      </p>
    </section>
  );
}

export function PlatformBlock() {
  const layers = ["Sign-in", "Billing", "Data", "Deploys"];
  return (
    <section className="mx-auto mt-28 max-w-6xl px-5 sm:px-8">
      <div data-reveal className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>The platform</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.02] tracking-tight">
            One foundation under every product.
          </h2>
          <p className="mt-6 max-w-md text-ink-soft">
            Every product runs on the same sign-in, billing, data and deploys.
            We solve those once, so each new product starts at the problem, not
            the plumbing.
          </p>
        </div>
        <div className="dots rounded-xl border border-line p-5 sm:p-8">
          <div className="grid grid-cols-2 gap-3">
            {products.map((p) => (
              <div
                key={p.name}
                className="rounded-lg border border-accent/60 bg-surface p-4 font-mono text-sm"
              >
                {p.name.toLowerCase()}
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-dashed border-line bg-surface/60 p-4 text-center font-mono text-sm text-ink-soft">
            next product
          </div>
          <div className="mx-auto h-6 w-px bg-accent" aria-hidden="true" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {layers.map((l) => (
              <div
                key={l}
                className="rounded-lg border border-line bg-tint p-3 text-center font-mono text-xs uppercase tracking-wider"
              >
                {l}
              </div>
            ))}
          </div>
          <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-widest text-ink-soft">
            Shared platform
          </p>
        </div>
      </div>
    </section>
  );
}

export function BuildersBlock() {
  const rows: [string, string][] = [
    ["who", "A small team that designs, builds and runs every product itself"],
    ["location", "Designed and built in Australia, made for anywhere"],
    [
      "cadence",
      "A working product in weeks, then small releases that compound",
    ],
    ["feedback", "Real customers and real data from the first release"],
    ["principle", "Secure by design, AI-native, built to last"],
  ];
  return (
    <section className="mx-auto mt-28 max-w-6xl px-5 sm:px-8">
      <div data-reveal className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Eyebrow>Behind the software</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(2rem,4.2vw,3.5rem)] font-bold leading-[1.02] tracking-tight">
            The people who build it are the people who answer.
          </h2>
          <p className="mt-6 max-w-md text-ink-soft">
            If you use a Briesa product, you should know who is behind it and
            how they work. This is the short version.
          </p>
        </div>
        <dl className="ticks rounded-xl border border-line bg-surface font-mono text-sm">
          {rows.map(([k, v]) => (
            <div
              key={k}
              className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line p-4 last:border-0"
            >
              <dt className="text-accent">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
