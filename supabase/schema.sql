-- Lúmina W — contact form storage
-- Run once in the Supabase SQL editor (or via `supabase db push`).
-- The Netlify function writes with the service_role key, so RLS stays ON
-- and no anon/public policy is granted: only the server can read or write.

create table if not exists public.contact_submissions (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),

  -- Form fields (all required at the application layer)
  name        text not null,
  company     text not null,
  email       text not null,
  phone       text not null,
  need        text not null,
  stage       text not null,
  message     text not null,

  -- Request metadata (best-effort, for triage / anti-spam)
  locale      text,
  source      text,
  user_agent  text,
  ip          text
);

create index if not exists contact_submissions_created_at_idx
  on public.contact_submissions (created_at desc);

create index if not exists contact_submissions_email_idx
  on public.contact_submissions (email);

-- Lock the table down. The service_role key bypasses RLS, so the function
-- keeps working; anon/authenticated clients get nothing.
alter table public.contact_submissions enable row level security;
