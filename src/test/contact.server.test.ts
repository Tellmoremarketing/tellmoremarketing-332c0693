import { describe, expect, it, vi } from "vitest";
import { handleContact } from "@/lib/contact.server";

const env = { SUPABASE_URL: "https://test.supabase.co", SUPABASE_SECRET_KEY: "sb_secret_test", RESEND_API_KEY: "re_test", CONTACT_FROM_EMAIL: "Contact <contact@example.com>" };
const body = { school: "School", email: "owner@example.com", message: "Hello" };
const request = (value = body) => new Request("https://tellmoremarketing.com/api/contact", {
  method: "POST", headers: { origin: "https://tellmoremarketing.com", "content-type": "application/json" }, body: JSON.stringify(value),
});
describe("Contact submissions", () => {
  it("stores the enquiry before emailing the fixed inbox with the visitor as reply-to", async () => {
    const send = vi.fn().mockResolvedValueOnce(new Response(null, { status: 201 }))
      .mockResolvedValueOnce(Response.json({ id: "email_test" }))
      .mockResolvedValueOnce(new Response(null, { status: 204 }));
    expect((await handleContact(request(), env, send)).status).toBe(200);
    expect(send.mock.calls[0][0]).toContain("/rest/v1/contact_submissions");
    const mail = JSON.parse(send.mock.calls[1][1].body);
    expect(mail.to).toEqual(["tellmoremarketing@gmail.com"]);
    expect(mail.reply_to).toBe(body.email);
  });
  it("does not send mail or confirm success when storage fails", async () => {
    const send = vi.fn().mockResolvedValue(new Response(null, { status: 500 }));
    expect((await handleContact(request(), env, send)).status).toBe(502);
    expect(send).toHaveBeenCalledTimes(1);
  });
  it("preserves a stored enquiry when email fails", async () => {
    const send = vi.fn().mockResolvedValueOnce(new Response(null, { status: 201 }))
      .mockResolvedValueOnce(Response.json({}, { status: 503 }))
      .mockResolvedValueOnce(Response.json({}, { status: 503 }))
      .mockResolvedValueOnce(new Response(null, { status: 204 }));
    expect((await handleContact(request(), env, send)).status).toBe(200);
    expect(JSON.parse(send.mock.calls[3][1].body).notification_status).toBe("failed");
  });
  it("rejects invalid email and missing configuration", async () => {
    const send = vi.fn();
    expect((await handleContact(request({ ...body, email: "invalid" }), env, send)).status).toBe(400);
    expect((await handleContact(request(), {}, send)).status).toBe(503);
    expect(send).not.toHaveBeenCalled();
  });
});
