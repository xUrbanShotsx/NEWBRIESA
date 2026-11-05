import type { Metadata } from "next";
import { CtaBand } from "@/components/Sections";
import { PageHeader } from "@/components/PageHeader";
import { BuildersBlock, ThesisBlock, FaqBlock } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "Studio",
  description: "About Briesa, a small software development company.",
  alternates: { canonical: "/studio" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="The studio"
        title={
          <>
            Small software, <span className="tape">solved</span> completely.
          </>
        }
      >
        Briesa is a micro-SaaS studio. Designed and built in Australia: focused,
        AI-native, secure by design, built to last.
      </PageHeader>
      <BuildersBlock />
      <ThesisBlock />
      <FaqBlock />
      <CtaBand />
    </>
  );
}
