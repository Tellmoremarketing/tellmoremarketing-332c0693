-- Run once in the Supabase SQL Editor for the production project.
create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  school_name text not null check (char_length(school_name) between 1 and 300),
  email text not null check (char_length(email) between 3 and 254),
  message text not null default '' check (char_length(message) <= 5000),
  notification_status text not null default 'pending'
    check (notification_status in ('pending', 'sent', 'failed')),
  notification_email_id text
);
alter table public.contact_submissions enable row level security;
revoke all on table public.contact_submissions from anon, authenticated;
grant select, insert, update on table public.contact_submissions to service_role;
create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);
-- No public policies: visitors cannot read or directly write this table.
