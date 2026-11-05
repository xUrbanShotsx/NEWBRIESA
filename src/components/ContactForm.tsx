"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "./Icons";

const TOPICS = [
  "A problem worth solving",
  "REAHUB",
  "WHSCOMPLY",
  "Partnership",
  "Something else",
];

const field =
  "mt-2 w-full rounded-lg border border-line bg-[oklch(0.12_0_0)] px-4 py-3 text-ink placeholder:text-ink-soft/60 transition-colors focus:border-accent focus:outline-none";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, topic }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      setState("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  if (state === "sent")
    return (
      <div
        role="status"
        className="ticks rounded-xl border border-line bg-surface p-8 sm:p-10"
      >
        <p className="eyebrow">Message sent</p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">
          Thanks. We will read this and reply by email.
        </h2>
        <p className="mt-4 text-ink-soft">
          If it is a problem worth solving, we will tell you honestly whether it
          is one we should build.
        </p>
      </div>
    );

  return (
    <form
      onSubmit={submit}
      noValidate={false}
      className="ticks space-y-5 rounded-xl border border-line bg-surface p-6 sm:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Name
          <input
            name="name"
            required
            maxLength={120}
            autoComplete="name"
            className={field}
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className={field}
            placeholder="you@company.com"
          />
        </label>
      </div>

      <label className="block text-sm font-medium">
        Company{" "}
        <span className="font-mono text-xs text-ink-soft">optional</span>
        <input
          name="company"
          maxLength={160}
          autoComplete="organization"
          className={field}
          placeholder="Company or agency"
        />
      </label>

      <fieldset>
        <legend className="text-sm font-medium">What is this about?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={topic === t}
              onClick={() => setTopic(t)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${topic === t ? "border-accent bg-accent text-white" : "border-line hover:border-ink hover:bg-tint"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <label className="block text-sm font-medium">
        Message
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          className={field}
          placeholder="Tell us what the work looks like today."
        />
      </label>

      {/* honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state === "error" && (
        <p
          role="alert"
          className="rounded-lg border border-[oklch(0.78_0.15_70/0.5)] bg-[oklch(0.78_0.15_70/0.12)] px-4 py-3 text-sm"
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-semibold text-bg transition-colors hover:bg-ink/85 disabled:opacity-60"
      >
        {state === "sending" ? "Sending..." : "Send message"}
        <Icon name="arrow" className="h-4 w-4" />
      </button>
    </form>
  );
}
