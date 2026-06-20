// Lúmina W — contact form backend (Netlify Function v2)
// Flow: validate -> store in Supabase -> notify via Resend.
// Zero npm dependencies: everything goes through fetch() against the
// Supabase REST and Resend HTTP APIs.
//
// Required env vars (set in Netlify > Site config > Environment variables):
//   SUPABASE_URL                 https://<project>.supabase.co
//   SUPABASE_SERVICE_ROLE_KEY    service_role key (server-only, never expose)
//   RESEND_API_KEY               re_...
//   CONTACT_TO                   inbox that receives the lead (e.g. contact@luminaw.co)
//   CONTACT_FROM                 verified Resend sender (e.g. web@luminaw.co)

export const config = { path: '/api/contact' };

const REQUIRED_FIELDS = [
  'name',
  'company',
  'email',
  'phone',
  'need',
  'stage',
  'message',
] as const;

const MAX_LEN = 5000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export default async (req: Request): Promise<Response> => {
  if (req.method !== 'POST') return json(405, { error: 'method_not_allowed' });

  let raw: Record<string, unknown>;
  try {
    raw = await req.json();
  } catch {
    return json(400, { error: 'invalid_json' });
  }

  // Honeypot: real users never fill this hidden field. Pretend success so
  // bots get no signal, but store/notify nothing.
  if (typeof raw.website === 'string' && raw.website.trim() !== '') {
    return json(200, { ok: true });
  }

  // Normalize + validate every field as required.
  const data: Record<string, string> = {};
  for (const key of REQUIRED_FIELDS) {
    const val = typeof raw[key] === 'string' ? (raw[key] as string).trim() : '';
    if (!val) return json(422, { error: 'missing_field', field: key });
    if (val.length > MAX_LEN)
      return json(422, { error: 'too_long', field: key });
    data[key] = val;
  }
  if (!EMAIL_RE.test(data.email)) {
    return json(422, { error: 'invalid_email', field: 'email' });
  }

  const meta = {
    locale: typeof raw.locale === 'string' ? raw.locale.slice(0, 8) : null,
    source: typeof raw.source === 'string' ? raw.source.slice(0, 300) : null,
    user_agent: req.headers.get('user-agent')?.slice(0, 500) ?? null,
    ip:
      req.headers.get('x-nf-client-connection-ip') ??
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      null,
  };

  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!SUPABASE_URL || !SERVICE_KEY) {
    console.error('contact: missing Supabase env vars');
    return json(500, { error: 'server_misconfigured' });
  }

  // 1) Persist — this is the source of truth. If it fails, we fail the request.
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions`, {
      method: 'POST',
      headers: {
        apikey: SERVICE_KEY,
        Authorization: `Bearer ${SERVICE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({ ...data, ...meta }),
    });
    if (!res.ok) {
      console.error(
        'contact: supabase insert failed',
        res.status,
        await res.text()
      );
      return json(502, { error: 'storage_failed' });
    }
  } catch (err) {
    console.error('contact: supabase request error', err);
    return json(502, { error: 'storage_failed' });
  }

  // 2) Notify — best-effort. A failed email must not lose a stored lead.
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const CONTACT_TO = process.env.CONTACT_TO;
  const CONTACT_FROM = process.env.CONTACT_FROM;
  if (RESEND_API_KEY && CONTACT_TO && CONTACT_FROM) {
    const rows = [
      ['Nombre', data.name],
      ['Empresa', data.company],
      ['Email', data.email],
      ['Teléfono', data.phone],
      ['Necesidad', data.need],
      ['Etapa', data.stage],
      ['Mensaje', data.message],
    ]
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 12px;font-weight:600;vertical-align:top">${esc(k)}</td><td style="padding:6px 12px;white-space:pre-wrap">${esc(v)}</td></tr>`
      )
      .join('');
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: CONTACT_FROM,
          to: [CONTACT_TO],
          reply_to: data.email,
          subject: `Nuevo lead: ${data.name} (${data.company})`,
          html: `<h2 style="font-family:sans-serif">Nuevo mensaje del formulario</h2><table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">${rows}</table>`,
        }),
      });
    } catch (err) {
      console.error('contact: resend notify failed (lead already stored)', err);
    }
  }

  return json(200, { ok: true });
};
