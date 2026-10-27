# Contact form: Supabase + Vercel + Resend

## What is already implemented
The form POSTs to /api/contact on your Vercel site. The server validates the fields, saves the enquiry to Supabase, then requests an email notification to tellmoremarketing@gmail.com using Resend. Reply goes to the visitor's email. Database errors show a form error. Email errors do not discard a saved enquiry; notification_status records pending, sent, or failed.

No keys are embedded in the frontend. No public database access is granted.

## 1. Supabase
1. Sign in at https://supabase.com/dashboard and open or create the project for Tell More Marketing.
2. Open SQL Editor > New query.
3. Copy the complete contents of supabase/migrations/20261027_contact_submissions.sql from this repository, then Run.
4. Get the Project URL from Connect or Settings > Data API.
5. Get a secret key (sb_secret_...) from Settings > API Keys. The server also supports the legacy service_role JWT. Never use the publishable/anon key for this server connection.
6. Confirm the contact_submissions table is visible in Table Editor. It must have RLS enabled and no anon/authenticated policies.

## 2. Resend email
1. Sign in at https://resend.com and create an API key with permission to send email.
2. Add tellmoremarketing.com under Domains. Add exactly the DNS records Resend displays at the provider managing your DNS, then verify the domain.
3. Use a sender on that verified domain, for example: Tell More Marketing <contact@tellmoremarketing.com>.
   This is the sender identity, not the destination inbox. Notifications always go to tellmoremarketing@gmail.com.
4. For initial testing, onboarding@resend.dev is available only subject to Resend's test-recipient restrictions; verify your own domain for production. Do not use a Gmail address as the sender.

## 3. Vercel
Open https://vercel.com/tellmore1/tellmoremarketing-332c0693/settings/environment-variables
Add these values for Production (also Preview if you want to test preview deployments):

| Variable | Value |
| --- | --- |
| SUPABASE_URL | Your project URL, e.g. https://your-project.supabase.co |
| SUPABASE_SECRET_KEY | Supabase secret server key |
| RESEND_API_KEY | Resend API key |
| CONTACT_FROM_EMAIL | Tell More Marketing <contact@tellmoremarketing.com> |

Do not prefix any of these names with VITE_. Do not paste secrets into GitHub or chat.
After saving them, open Deployments and Redeploy the latest production deployment. Environment changes require a new deployment.

## 4. End-to-end test
1. Open https://tellmoremarketing.com/contact.
2. Submit school name TEST, your email, and a clearly labelled test message.
3. In Supabase Table Editor > contact_submissions, confirm one new row.
4. Check tellmoremarketing@gmail.com (including Spam).
5. In Resend > Emails, check the delivery event. notification_status=sent means Resend accepted the email, not that Gmail delivery is guaranteed.
6. Reply to the notification and confirm it addresses the email entered in the form.

## Troubleshooting and limits
- contact_not_configured (503): one or more Vercel variables are missing; save them and redeploy.
- storage_failed (502): check the Supabase URL/key, whether the project is paused, and the SQL migration.
- Saved row but no email: check notification_status, Resend Logs, sender verification, API-key permissions, and quotas.
- The server retries transient email failures once using an idempotency key. There is no scheduled background retry yet: rows left pending/failed need attention and manual resend through your email provider. All enquiries remain in Supabase.
- The endpoint has validation, same-origin checks, and a hidden spam field. If spam develops, add Vercel Firewall rate limiting or Turnstile before scaling traffic.
- Keep previews pointed at a separate test Supabase project if you need strict separation of test and real enquiries.
