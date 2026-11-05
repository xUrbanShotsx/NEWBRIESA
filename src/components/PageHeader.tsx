import type { ReactNode } from "react";
import { Eyebrow } from "./Sections";

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="relative">
      <div aria-hidden="true" className="grid-bg" />
      <div className="relative mx-auto max-w-6xl px-5 pb-6 pt-16 sm:px-8 sm:pt-24">
        <div data-load>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1
          data-load
          className="mt-5 max-w-4xl font-display text-[clamp(2.4rem,5.6vw,4.8rem)] font-bold leading-[1] tracking-tight"
        >
          {title}
        </h1>
        <p data-load className="mt-7 max-w-xl text-lg text-ink-soft">
          {children}
        </p>
      </div>
    </section>
  );
}
