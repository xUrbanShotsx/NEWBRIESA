import { ButtonLink, CtaBand, Eyebrow } from "@/components/Sections";
import {
  FaqBlock,
  MarketsStrip,
  ProductsBlock,
  StepsBlock,
  ThesisBlock,
  PlatformBlock,
  WhatWeDoBlock,
} from "@/components/Blocks";
import { Magnetic } from "@/components/Magnetic";
import { CONTACT_URL } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="grid-bg" />
        <div className="relative mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] items-center gap-14 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1fr_0.9fr]">
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
            <ul
              data-load
              className="mt-10 flex flex-wrap gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-ink-soft"
            >
              {[
                "Focused",
                "AI-native",
                "Secure by design",
                "Built to last",
              ].map((t) => (
                <li
                  key={t}
                  className="rounded-md border border-line bg-surface/60 px-2.5 py-1"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div data-load>
            <div data-parallax="6">
              <div className="float rounded-[1.75rem] bg-[linear-gradient(140deg,oklch(0.1_0_0),oklch(0.26_0_0))] p-4 shadow-[0_40px_90px_-40px_oklch(0_0_0/0.7)] sm:p-6">
                <div className="overflow-hidden rounded-2xl bg-[oklch(0.12_0_0)] text-ink ring-1 ring-white/10">
                  <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="ml-3 font-mono text-xs text-ink-soft">
                      briesa / studio
                    </span>
                  </div>
                  <pre className="overflow-x-auto p-5 font-mono text-[0.78rem] leading-7 sm:text-sm">
                    {`$ briesa products --list
`}
                    <span className="text-accent">reahub</span>
                    {`     real estate compliance   live
`}
                    <span className="text-accent">whscomply</span>
                    {`  work health & safety     live
`}
                    <span className="text-ink-soft">next</span>
                    {`       one problem, solved       open

$ briesa platform --shared
sign-in  billing  data  deploys  ok
$ `}
                    <span className="cursor" />
                  </pre>
                </div>
                <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-widest text-ink-soft">
                  Illustrative terminal
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarketsStrip />
      <WhatWeDoBlock />
      <PlatformBlock />
      <ThesisBlock />
      <ProductsBlock />
      <StepsBlock />
      <FaqBlock />
      <CtaBand />
    </>
  );
}
