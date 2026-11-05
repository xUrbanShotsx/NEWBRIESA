import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Bring Briesa a problem worth solving, or ask about REAHUB and WHSCOMPLY.",
  alternates: { canonical: "/contact" },
};

const steps = [
  "You tell us what the work looks like today.",
  "We reply by email, usually within a few business days.",
  "If it is a product we should build, we say so. If not, we say that too.",
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build what&apos;s <span className="tape">next</span>.
          </>
        }
      >
        Built in Australia, made for anywhere. Bring us a problem worth solving
        and we will show you what a focused product can do.
      </PageHeader>
      <section className="mx-auto mt-10 grid max-w-6xl grid-cols-[minmax(0,1fr)] gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr]">
        <div data-reveal>
          <p className="eyebrow">What happens next</p>
          <ol className="mt-6 space-y-5">
            {steps.map((s, i) => (
              <li key={s} className="grid grid-cols-[2.5rem_1fr] gap-3">
                <span className="font-mono text-sm text-accent">0{i + 1}</span>
                <span className="text-ink-soft">{s}</span>
              </li>
            ))}
          </ol>
        </div>
        <div data-reveal>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
