import type { Metadata } from "next";
import { CtaBand } from "@/components/Sections";
import { PageHeader } from "@/components/PageHeader";
import { ProductsBlock } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Products",
  description: "Software Briesa builds and runs itself.",
  alternates: { canonical: "/products" },
};

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Our products" title={<>Software we build, run and stand behind.</>}>
        REAHUB and WHSCOMPLY are Briesa products. They show how we build: narrow scope, real workflows, software that stays in use.
      </PageHeader>
      <ProductsBlock />
      <CtaBand />
    </>
  );
}
