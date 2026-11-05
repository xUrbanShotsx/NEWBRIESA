import type { Metadata } from "next";
import { CtaBand } from "@/components/Sections";
import { PageHeader } from "@/components/PageHeader";
import { StudioBlock } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Studio",
  description: "About Briesa, a small software development company.",
  alternates: { canonical: "/studio" },
};

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="The studio" title={<>A small team that <span className="tape">owns</span> what it ships.</>}>
        Briesa builds its own products and client software from the same codebase habits, tools and people.
      </PageHeader>
      <StudioBlock />
      <CtaBand />
    </>
  );
}
