import type { Metadata } from "next";
import { CtaBand } from "@/components/Sections";
import { PageHeader } from "@/components/PageHeader";
import {
  PlatformBlock,
  ProductsBlock,
  WhatWeDoBlock,
} from "@/components/Blocks";

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
        and runs on the same shared platform.
      </PageHeader>
      <ProductsBlock />
      <PlatformBlock />
      <WhatWeDoBlock />
      <CtaBand />
    </>
  );
}
