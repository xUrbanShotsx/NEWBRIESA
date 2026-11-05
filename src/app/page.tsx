import Link from "next/link";
import { ButtonLink, CtaBand, Eyebrow } from "@/components/Sections";
import { ProductsBlock } from "@/components/Blocks";
import { Magnetic } from "@/components/Magnetic";
import { Icon } from "@/components/Icons";
import { CONTACT_URL } from "@/lib/site";

const rows: [string, string, string][] = [
  ["REAHUB", "Live", "bg-accent text-white"],
  ["WHSCOMPLY", "Live", "bg-accent text-white"],
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

      <div className="relative overflow-hidden bg-[linear-gradient(110deg,oklch(0.19_0.05_262),oklch(0.3_0.11_266)_55%,oklch(0.2_0.06_262))] py-5 font-mono text-xs uppercase tracking-[0.18em] text-white">
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

      <ProductsBlock />
      <p className="mx-auto mt-10 flex max-w-6xl flex-wrap gap-x-8 gap-y-3 px-5 font-semibold sm:px-8">
        <Link href="/how-we-build" className="inline-flex items-center gap-2">
          How we build <Icon name="arrow" className="h-4 w-4" />
        </Link>
        <Link href="/studio" className="inline-flex items-center gap-2">
          The studio <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </p>

      <CtaBand />
    </>
  );
}
