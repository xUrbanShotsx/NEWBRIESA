import Link from "next/link";
import { CONTACT_URL } from "@/lib/site";

const items: [string, string][] = [
  ["Products", "/products"],
  ["How we build", "/how-we-build"],
  ["Studio", "/studio"],
  ["REAHUB", "https://reahub.com.au"],
  ["WHSCOMPLY", "https://whscomply.com"],
  ["Contact", CONTACT_URL],
];

export function Footer() {
  return (
    <footer className="mt-28 overflow-hidden border-t border-line bg-[oklch(0.12_0.03_262)] text-ink">
      <div className="mx-auto max-w-6xl px-5 pt-16 sm:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <p className="max-w-sm font-display text-2xl font-semibold leading-snug">
            Software that does the work, built by people who stay.
          </p>
          <ul className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
            {items.map(([label, href]) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-ink/75 transition-colors hover:text-accent"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p
          aria-hidden="true"
          className="mt-14 select-none font-display text-[clamp(4rem,19vw,16rem)] font-bold leading-[0.8] tracking-tighter text-ink/10"
        >
          BRIESA
        </p>
      </div>
      <div className="border-t border-line py-5 text-center font-mono text-xs uppercase tracking-widest text-ink/60">
        © 2026 Briesa. All rights reserved.
      </div>
    </footer>
  );
}
