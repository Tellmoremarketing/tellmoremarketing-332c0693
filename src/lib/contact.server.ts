type ContactEnv = {
  SUPABASE_URL?: string;
  SUPABASE_SECRET_KEY?: string;
  RESEND_API_KEY?: string;
  CONTACT_FROM_EMAIL?: string;
};

const json = (body: unknown, status = 200) => Response.json(body, {
  status, headers: { "Cache-Control": "no-store" },
});

// Called only by src/server.ts. Never import this module into browser code.
export async function handleContact(request: Request, env: ContactEnv, send: typeof fetch = fetch): Promise<Response> {
  if (request.method !== "POST") return json({ success: false }, 405);
  if (!["https://tellmoremarketing.com", "https://www.tellmoremarketing.com", new URL(request.url).origin].includes(request.headers.get("origin") ?? "")) {
    return json({ success: false }, 403);
  }
  if (!request.headers.get("content-type")?.includes("application/json")) return json({ success: false }, 415);
  if (Number(request.headers.get("content-length") ?? 0) > 20000) return json({ success: false }, 413);

  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 20000) return json({ success: false }, 413);
    body = JSON.parse(raw);
    if (!body || typeof body !== "object" || Array.isArray(body)) return json({ success: false }, 400);
  } catch { return json({ success: false }, 400); }
  if (body._honey) return json({ success: true });

  const school = typeof body.school === "string" ? body.school.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!school || school.length > 300 || email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n]/.test(email) || message.length > 5000) {
    return json({ success: false, error: "invalid_fields" }, 400);
  }

  const { SUPABASE_URL, SUPABASE_SECRET_KEY, RESEND_API_KEY, CONTACT_FROM_EMAIL } = env;
  if (!SUPABASE_URL || !SUPABASE_SECRET_KEY || !RESEND_API_KEY || !CONTACT_FROM_EMAIL) {
    return json({ success: false, error: "contact_not_configured" }, 503);
  }
  const id = crypto.randomUUID();
  const headers: Record<string, string> = {
    apikey: SUPABASE_SECRET_KEY, "Content-Type": "application/json",
  };
  // Support legacy service-role JWTs as well as the recommended sb_secret key.
  if (!SUPABASE_SECRET_KEY.startsWith("sb_secret_")) headers.Authorization = `Bearer ${SUPABASE_SECRET_KEY}`;
  const table = `${SUPABASE_URL.replace(/\/$/, "")}/rest/v1/contact_submissions`;
  try {
    const saved = await send(table, {
      method: "POST", headers: { ...headers, Prefer: "return=minimal" },
      body: JSON.stringify({ id, school_name: school, email, message, notification_status: "pending" }),
      signal: AbortSignal.timeout(8000),
    });
    if (!saved.ok) throw new Error("storage_failed");
  } catch {
    console.error("Contact storage failed"); // Do not log personal data or keys.
    return json({ success: false, error: "storage_failed" }, 502);
  }

  let emailId: string | null = null;
  for (let attempt = 0; attempt < 2 && !emailId; attempt++) {
    try {
      const response = await send("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json", "Idempotency-Key": `contact-${id}` },
        body: JSON.stringify({
          from: CONTACT_FROM_EMAIL,
          to: ["tellmoremarketing@gmail.com"],
          reply_to: email,
          subject: "New website enquiry — Tell More Marketing",
          text: `School: ${school}\nEmail: ${email}\n\nMessage:\n${message || "(No message provided)"}\n\nSubmission ID: ${id}`,
        }),
        signal: AbortSignal.timeout(6000),
      });
      const result = await response.json();
      if (response.ok && typeof result.id === "string") emailId = result.id;
      else if (response.status < 500 && response.status !== 429) break;
    } catch { /* Retry once using the same email idempotency key. */ }
  }
  try {
    const updated = await send(`${table}?id=eq.${id}`, {
      method: "PATCH", headers,
      body: JSON.stringify({ notification_status: emailId ? "sent" : "failed", notification_email_id: emailId }),
      signal: AbortSignal.timeout(4000),
    });
    if (!updated.ok) console.error("Contact notification status update failed", id);
  } catch { console.error("Contact notification status update failed", id); }
  if (!emailId) console.error("Contact saved but email notification failed", id);
  // A saved enquiry remains successful even if email is temporarily unavailable.
  return json({ success: true });
}
