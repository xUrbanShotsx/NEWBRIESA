import type { Metadata } from "next";
import { CtaBand } from "@/components/Sections";
import { PageHeader } from "@/components/PageHeader";
import { PlatformBlock, WhatWeDoBlock } from "@/components/Blocks";
import { Showcase } from "@/components/Showcase";
import { showcase } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Software Briesa builds and runs itself.",
  alternates: { canonical: "/products" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Our products"
        title={
          <>
            Focused software, <span className="tape">solved</span> completely.
          </>
        }
      >
        Each Briesa product removes one costly problem for one kind of business,
        and runs on the same shared platform. Pick a feature to see how it
        works.
      </PageHeader>
      <nav
        aria-label="Products"
        className="mx-auto mt-6 flex max-w-6xl gap-3 px-5 font-mono text-xs uppercase tracking-wider sm:px-8"
      >
        {showcase.map((p) => (
          <a
            key={p.slug}
            href={`#${p.slug}`}
            className="rounded-md border border-line px-3 py-1.5 transition-colors hover:border-accent hover:bg-tint"
          >
            {p.name}
          </a>
        ))}
      </nav>
      {showcase.map((p, i) => (
        <Showcase key={p.slug} product={p} flip={i % 2 === 1} />
      ))}
      <PlatformBlock />
      <WhatWeDoBlock />
      <CtaBand />
    </>
  );
}
