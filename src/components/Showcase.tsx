"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "./Icons";
import type { Product, State } from "@/lib/products";

const CHIP: Record<State, string> = {
  ok: "bg-accent/20 text-[#9fb2ff]",
  flag: "bg-[oklch(0.78_0.15_70/0.18)] text-[oklch(0.85_0.13_75)]",
  open: "bg-white/10 text-ink-soft",
};
const LABEL: Record<State, string> = { ok: "ok", flag: "flag", open: "open" };
const DURATION = 6000;

export function Showcase({
  product,
  flip = false,
}: {
  product: Product;
  flip?: boolean;
}) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const hovering = useRef(false);
  const f = product.features[active];

  useEffect(() => {
    if (!auto) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => {
      if (!hovering.current)
        setActive((a) => (a + 1) % product.features.length);
    }, DURATION);
    return () => window.clearInterval(t);
  }, [auto, product.features.length, active]);

  const pct = (f.summary[0] / f.summary[1]) * 100;

  return (
    <section
      id={product.slug}
      className="mx-auto mt-28 max-w-6xl scroll-mt-28 px-5 sm:px-8"
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
    >
      <div
        data-reveal
        className="flex flex-wrap items-end justify-between gap-6"
      >
        <div className="max-w-2xl">
          <p className="eyebrow">{product.tag}</p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4rem)] font-bold leading-none tracking-tight">
            {product.name}
          </h2>
          <p className="mt-5 text-ink-soft">{product.body}</p>
        </div>
        <Link
          href={product.url}
          className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-semibold transition-colors hover:border-ink hover:bg-tint"
        >
          Visit {product.host} <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </div>

      <div
        data-reveal
        className={`mt-10 grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[0.85fr_1.15fr] ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <div
          role="tablist"
          aria-label={`${product.name} features`}
          className="space-y-2"
        >
          {product.features.map((feat, i) => {
            const on = i === active;
            return (
              <button
                key={feat.title}
                role="tab"
                aria-selected={on}
                type="button"
                onClick={() => {
                  setActive(i);
                  setAuto(false);
                }}
                className={`spot relative block w-full overflow-hidden rounded-xl border p-5 text-left transition-colors ${on ? "border-accent/70 bg-surface" : "border-line hover:bg-surface/60"}`}
              >
                <span className="flex items-center justify-between font-display text-xl font-bold">
                  {feat.title}
                  <span className="font-mono text-xs text-ink-soft">
                    0{i + 1}
                  </span>
                </span>
                {on && (
                  <span className="mt-1 block text-sm text-ink-soft">
                    {feat.desc}
                  </span>
                )}
                {on && auto && (
                  <span
                    key={`p-${active}`}
                    className="tab-progress absolute inset-x-0 bottom-0 h-0.5 origin-left bg-accent"
                    style={{ animationDuration: `${DURATION}ms` }}
                  />
                )}
                {on && !auto && (
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent" />
                )}
              </button>
            );
          })}
        </div>

        <div className="lift ticks overflow-hidden rounded-xl border border-line bg-[oklch(0.12_0_0)]">
          <div className="flex items-center gap-2 border-b border-line px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="ml-3 flex-1 truncate rounded-md bg-white/5 px-3 py-1 font-mono text-xs text-ink-soft">
              {product.host} / {f.title.toLowerCase().replace(/\s+/g, "-")}
            </span>
          </div>
          <div key={active} className="p-5 sm:p-7">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-2xl font-bold">{f.heading}</h3>
              <span className="font-mono text-xs text-ink-soft">
                {f.summary[0]}/{f.summary[1]} {f.summary[2]}
              </span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div
                className="bar-fill h-full origin-left rounded-full bg-accent"
                style={{ width: `${pct}%` }}
              />
            </div>
            <ul className="mt-5 divide-y divide-line">
              {f.rows.map(([label, meta, state], i) => (
                <li
                  key={label}
                  className="board-row row-hover flex items-center justify-between gap-4 py-3.5"
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <div className="min-w-0">
                    <p className="truncate font-medium">{label}</p>
                    <p className="truncate font-mono text-xs text-ink-soft">
                      {meta}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-md px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wider ${CHIP[state]}`}
                  >
                    {LABEL[state]}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-widest text-ink-soft">
              Sample data
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
