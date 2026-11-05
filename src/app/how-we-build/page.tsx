import type { Metadata } from "next";
import { CtaBand } from "@/components/Sections";
import { PageHeader } from "@/components/PageHeader";
import { StepsBlock } from "@/components/Blocks";

export const metadata: Metadata = {
  title: "How we build",
  description: "How Briesa scopes, builds, ships and runs software.",
  alternates: { canonical: "/how-we-build" },
};

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="How we build" title={<>One team from first call to <span className="tape">launch</span> and beyond.</>}>
        A short, predictable process. You see working software early and talk to the people writing it.
      </PageHeader>
      <StepsBlock />
      <CtaBand />
    </>
  );
}
