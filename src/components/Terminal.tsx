"use client";

import { useEffect, useState } from "react";

type Seg = [text: string, cls?: string];

const lines: Seg[][] = [
  [["$ briesa products --list"]],
  [["reahub", "text-accent"], ["     real estate compliance   live"]],
  [["whscomply", "text-accent"], ["  work health & safety     live"]],
  [["next", "text-ink-soft"], ["       one problem, solved       open"]],
  [[""]],
  [["$ briesa platform --shared"]],
  [["sign-in  billing  data  deploys  "], ["ok", "text-accent"]],
  [["$ "]],
];

const total =
  lines.flat().reduce((n, [t]) => n + t.length + 0, 0) + lines.length;

function render(count: number) {
  let left = count;
  return lines.map((segs, i) => {
    const out = segs.map(([t, cls], j) => {
      const take = Math.max(0, Math.min(t.length, left));
      left -= take;
      return (
        <span key={j} className={cls}>
          {t.slice(0, take)}
        </span>
      );
    });
    left -= 1;
    return <div key={i}>{out.length ? out : null}&nbsp;</div>;
  });
}

export function Terminal() {
  const [count, setCount] = useState(total);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let n = 0;
    let timer: number;
    const step = () => {
      n += 1;
      setCount(n);
      if (n < total) timer = window.setTimeout(step, n % 7 === 0 ? 70 : 22);
    };
    const start = window.setTimeout(() => {
      setCount(0);
      step();
    }, 900);
    return () => {
      window.clearTimeout(start);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative">
      <pre
        aria-hidden="true"
        className="invisible overflow-hidden p-5 font-mono text-[0.78rem] leading-7 sm:text-sm"
      >
        {lines.map((s, i) => (
          <div key={i}>{s.map(([t]) => t).join("")}&nbsp;</div>
        ))}
      </pre>
      <pre
        aria-label="briesa products --list: reahub live, whscomply live, next open"
        className="absolute inset-0 overflow-hidden p-5 font-mono text-[0.78rem] leading-7 sm:text-sm"
      >
        {render(count)}
        <span className="cursor" />
      </pre>
    </div>
  );
}
