import { ButtonLink, CtaBand, Eyebrow } from "@/components/Sections";
import { FaqBlock, MarketsStrip, ProductsBlock, StepsBlock, ThesisBlock, WhatWeDoBlock } from "@/components/Blocks";
import { Magnetic } from "@/components/Magnetic";
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
              <Eyebrow>Micro-SaaS studio</Eyebrow>
            </div>
            <h1
              data-load
              className="mt-6 font-display text-[clamp(2.7rem,6.4vw,5.7rem)] font-bold leading-[0.98] tracking-tight"
            >
              We build the future of <span className="tape">software</span>.
            </h1>
            <p data-load className="mt-7 max-w-lg text-lg text-ink-soft">
              Briesa is a micro-SaaS studio. We build focused software products
              that each solve one problem completely, then keep making them
              better. Designed and built in Australia.
            </p>
            <div data-load className="mt-9 flex flex-wrap items-center gap-4">
              <Magnetic>
                <ButtonLink href={CONTACT_URL}>Start a Conversation</ButtonLink>
              </Magnetic>
              <ButtonLink href="/products" variant="ghost">
                See Our Products
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

      <MarketsStrip />
      <WhatWeDoBlock />
      <ThesisBlock />
      <ProductsBlock />
      <StepsBlock />
      <FaqBlock />
      <CtaBand />
    </>
  );
}
