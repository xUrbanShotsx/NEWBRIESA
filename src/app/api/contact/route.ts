import { NextResponse } from "next/server";

const TOPICS = [
  "A problem worth solving",
  "REAHUB",
  "WHSCOMPLY",
  "Partnership",
  "Something else",
];

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // honeypot: real people leave this empty
  if (clean(body.website, 200)) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const company = clean(body.company, 160);
  const topic = clean(body.topic, 80);
  const message = clean(body.message, 5000);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10)
    return NextResponse.json(
      { error: "Please add your name, a valid email and a short message." },
      { status: 400 },
    );
  if (!TOPICS.includes(topic))
    return NextResponse.json({ error: "Pick a topic." }, { status: 400 });

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Briesa <onboarding@resend.dev>";

  if (!key || !to) {
    if (process.env.NODE_ENV !== "production") {
      console.log("[contact] not configured, message received:", {
        name,
        email,
        company,
        topic,
        message,
      });
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { error: "Contact is not set up yet. Please try again later." },
      { status: 503 },
    );
  }

  const text = `Name: ${name}\nEmail: ${email}\nCompany: ${company || "-"}\nTopic: ${topic}\n\n${message}`;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Briesa contact: ${topic} (${name})`,
      text,
    }),
  });
  if (!res.ok)
    return NextResponse.json(
      { error: "We could not send your message. Please try again." },
      { status: 502 },
    );
  return NextResponse.json({ ok: true });
}
