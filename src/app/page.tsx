import Link from "next/link";
import { ButtonLink, CtaBand, Eyebrow } from "@/components/Sections";
import { Magnetic } from "@/components/Magnetic";
import { Icon } from "@/components/Icons";
import { CONTACT_URL } from "@/lib/site";

const products = [
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

const steps: [string, string, string][] = [
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

const rows: [string, string, string][] = [
  ["REAHUB", "Live", "bg-accent text-bg"],
  ["WHSCOMPLY", "Live", "bg-accent text-bg"],
  ["Your software", "Open slot", "bg-tint text-ink"],
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] items-center gap-14 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <div data-load>
              <Eyebrow>Software development company</Eyebrow>
            </div>
            <h1
              data-load
              className="mt-6 font-display text-[clamp(2.7rem,6.4vw,5.7rem)] font-bold leading-[0.98] tracking-tight"
            >
              Software that does the <span className="tape">work</span>, not
              just the demo.
            </h1>
            <p data-load className="mt-7 max-w-lg text-lg text-ink-soft">
              Briesa designs, builds and runs software for businesses with real
              processes to get right. We build our own products and we build
              yours.
            </p>
            <div data-load className="mt-9 flex flex-wrap items-center gap-4">
              <Magnetic>
                <ButtonLink href={CONTACT_URL}>Start a project</ButtonLink>
              </Magnetic>
              <ButtonLink href="/#products" variant="ghost">
                See what we have built
              </ButtonLink>
            </div>
          </div>

          <div data-load>
            <div data-parallax="6">
              <div className="float rounded-[1.75rem] bg-[linear-gradient(140deg,oklch(0.19_0.05_262),oklch(0.3_0.11_266))] p-4 shadow-[0_40px_90px_-40px_oklch(0.24_0.05_258/0.7)] sm:p-6">
                <div className="rounded-2xl bg-surface p-5 text-ink">
                  <p className="eyebrow">Studio board</p>
                  <ul className="mt-4 divide-y divide-line">
                    {rows.map(([name, status, chip]) => (
                      <li
                        key={name}
                        className="board-row flex items-center justify-between py-4"
                      >
                        <span className="font-display text-lg font-semibold">
                          {name}
                        </span>
                        <span
                          className={`rounded-full px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider ${chip}`}
                        >
                          {status}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-widest text-ink-soft">
                    Sample board
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative overflow-hidden bg-[linear-gradient(110deg,oklch(0.19_0.05_262),oklch(0.3_0.11_266)_55%,oklch(0.2_0.06_262))] py-5 font-mono text-xs uppercase tracking-[0.18em] text-bg">
        <div
          aria-hidden="true"
          className="glow-x pointer-events-none absolute h-24 w-72 rounded-full bg-accent/70 blur-3xl"
        />
        <ul
          className="marquee flex w-max gap-10 whitespace-nowrap"
          aria-label="What Briesa does"
        >
          {[0, 1, 2, 3].flatMap((k) =>
            [
              "Web apps",
              "Internal tools",
              "Compliance software",
              "Integrations",
              "Product design",
              "Ongoing support",
            ].map((t) => (
              <li
                key={`${k}-${t}`}
                className="flex items-center gap-10"
                aria-hidden={k > 0}
              >
                {t}
                <span className="text-accent">/</span>
              </li>
            )),
          )}
        </ul>
      </div>

      <section id="products" className="mx-auto mt-28 max-w-6xl scroll-mt-28 px-5 sm:px-8">
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

      <section id="approach" className="mx-auto mt-28 grid max-w-6xl scroll-mt-28 grid-cols-[minmax(0,1fr)] gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div data-reveal>
          <Eyebrow>How we build</Eyebrow>
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

      <section id="studio" className="mx-auto mt-28 max-w-6xl scroll-mt-28 px-5 sm:px-8">
        <div data-reveal className="max-w-3xl">
          <Eyebrow>The studio</Eyebrow>
          <p className="mt-5 font-display text-[clamp(1.6rem,3vw,2.4rem)] font-semibold leading-snug tracking-tight">
            Briesa is a small software company. We run the products above
            ourselves, so we know what it costs to keep software alive after
            launch, and we price your build with that in mind.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
