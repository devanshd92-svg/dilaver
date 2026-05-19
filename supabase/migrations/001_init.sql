-- Run in Supabase SQL editor or via CLI migration tool.

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text,
  cover_image text,
  published_at timestamptz
);

create table if not exists public.contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.posts enable row level security;
alter table public.contact_inquiries enable row level security;

-- Anonymous read of published posts
create policy "posts_select_published"
  on public.posts for select
  using (published_at is not null);

-- Allow anonymous inserts for contact form (adjust if you add auth later)
create policy "contact_insert_anon"
  on public.contact_inquiries for insert
  with check (true);

-- No public read on contact rows
create policy "contact_no_select"
  on public.contact_inquiries for select
  using (false);
