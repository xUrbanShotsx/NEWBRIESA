import type { Metadata } from "next";
import { CtaBand } from "@/components/Sections";
import { PageHeader } from "@/components/PageHeader";
import { StepsBlock, FaqBlock } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "How we build",
  description: "How Briesa scopes, builds, ships and runs software.",
  alternates: { canonical: "/how-we-build" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="How we build"
        title={
          <>
            From a real problem to a <span className="tape">running</span>{" "}
            product.
          </>
        }
      >
        One problem, one product, solved completely, then on to the next.
      </PageHeader>
      <StepsBlock />
      <FaqBlock />
      <CtaBand />
    </>
  );
}
