import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icons";
import { Magnetic } from "./Magnetic";
import { CONTACT_URL } from "@/lib/site";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function ButtonLink({
  href,
  children,
  variant = "ink",
}: {
  href: string;
  children: ReactNode;
  variant?: "ink" | "ghost" | "light";
}) {
  const styles = {
    ink: "bg-ink text-bg hover:bg-ink/85",
    light: "bg-white text-[#0e1230] hover:bg-white/90",
    ghost: "border border-ink/30 hover:border-ink hover:bg-tint",
  }[variant];
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold transition-colors duration-200 ${styles}`}
    >
      {children}{" "}
      {variant !== "ghost" && <Icon name="arrow" className="h-4 w-4" />}
    </Link>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto mt-28 max-w-6xl px-5 sm:px-8">
      <div
        data-reveal
        className="relative overflow-hidden rounded-[2rem] bg-accent px-7 py-16 text-white sm:px-14 sm:py-20"
      >
        <h2 className="max-w-3xl font-display text-[clamp(2.2rem,5vw,4.2rem)] font-bold leading-[1] tracking-tight">
          Let's build what's next.
        </h2>
        <p className="mt-5 max-w-lg text-lg">
          Built in Australia, made for anywhere. Bring us a problem worth
          solving and we'll show you what a focused product can do.
        </p>
        <div className="mt-9">
          <Magnetic>
            <ButtonLink href={CONTACT_URL} variant="light">
              Start a Conversation
            </ButtonLink>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
