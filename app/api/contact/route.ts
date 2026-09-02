/**
 * POST /api/contact
 *
 * Server-only contact form handler.
 * - Server-side validation (name, email, subject, message)
 * - Honeypot field check (silently rejects bots)
 * - Sliding-window rate limiting (5 requests / 10 min per IP)
 * - Sends email via SMTP in production; logs to console in development
 * - No secrets are ever sent to the client
 *
 * Required env vars (production):
 *   CONTACT_EMAIL_TO   – where form submissions are delivered
 *   SMTP_HOST          – SMTP server hostname
 *   SMTP_PORT          – SMTP port (usually 587 or 465)
 *   SMTP_USER          – SMTP account username
 *   SMTP_PASS          – SMTP account password
 */

import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/* --------------------------------------------------------------------------
 * Rate Limiter (in-process sliding window)
 * Resets on server cold start — acceptable for a personal portfolio.
 * -------------------------------------------------------------------------- */
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5;

type RateBucket = { timestamps: number[] };
const rateLimitStore = new Map<string, RateBucket>();

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = rateLimitStore.get(ip) ?? { timestamps: [] };
  // Prune timestamps outside the window
  bucket.timestamps = bucket.timestamps.filter(
    (ts) => now - ts < RATE_LIMIT_WINDOW_MS
  );
  if (bucket.timestamps.length >= RATE_LIMIT_MAX) {
    rateLimitStore.set(ip, bucket);
    return true;
  }
  bucket.timestamps.push(now);
  rateLimitStore.set(ip, bucket);
  return false;
}

/* --------------------------------------------------------------------------
 * Validation helpers
 * -------------------------------------------------------------------------- */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ValidationResult {
  ok: boolean;
  field?: string;
  error?: string;
}

function validatePayload(body: Record<string, unknown>): ValidationResult {
  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const subject = String(body.subject ?? '').trim();
  const message = String(body.message ?? '').trim();

  if (!name || name.length < 2 || name.length > 80) {
    return { ok: false, field: 'name', error: 'Name must be between 2 and 80 characters.' };
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return { ok: false, field: 'email', error: 'A valid email address is required.' };
  }
  if (!subject || subject.length < 2 || subject.length > 120) {
    return { ok: false, field: 'subject', error: 'Please select or enter a subject.' };
  }
  if (!message || message.length < 10 || message.length > 4000) {
    return {
      ok: false,
      field: 'message',
      error: 'Message must be between 10 and 4 000 characters.',
    };
  }
  return { ok: true };
}

/* --------------------------------------------------------------------------
 * Mailer
 * -------------------------------------------------------------------------- */
async function sendContactEmail(payload: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<void> {
  const { name, email, subject, message } = payload;
  const to = process.env.CONTACT_EMAIL_TO;

  if (!to) {
    throw new Error('CONTACT_EMAIL_TO environment variable is not set.');
  }

  // In development: log to console instead of sending
  if (process.env.NODE_ENV !== 'production') {
    console.log('\n── Contact Form Submission (DEV) ──────────────────────');
    console.log(`From : ${name} <${email}>`);
    console.log(`To   : ${to}`);
    console.log(`Subj : ${subject}`);
    console.log(`─────────────────────────────────────────────────────`);
    console.log(message);
    console.log(`─────────────────────────────────────────────────────\n`);
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    replyTo: `"${name}" <${email}>`,
    to,
    subject: `[Portfolio] ${subject}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <hr />
      <p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p>
    `,
  });
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* --------------------------------------------------------------------------
 * Route Handler
 * -------------------------------------------------------------------------- */
export async function POST(request: NextRequest) {
  // 1. Content-type guard
  const ct = request.headers.get('content-type') ?? '';
  if (!ct.includes('application/json')) {
    return NextResponse.json({ ok: false, error: 'Bad request.' }, { status: 400 });
  }

  // 2. Rate limiting
  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Too many submissions. Please wait a few minutes and try again.' },
      { status: 429 }
    );
  }

  // 3. Parse body
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  // 4. Honeypot check — field "website" should be empty; bots usually fill it
  if (body.website && String(body.website).trim() !== '') {
    // Silently accept to not signal detection
    return NextResponse.json({ ok: true });
  }

  // 5. Validate
  const validation = validatePayload(body);
  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, field: validation.field, error: validation.error },
      { status: 422 }
    );
  }

  // 6. Send
  try {
    await sendContactEmail({
      name: String(body.name).trim(),
      email: String(body.email).trim(),
      subject: String(body.subject).trim(),
      message: String(body.message).trim(),
    });
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('[contact/route] Mail error:', err);
    return NextResponse.json(
      { ok: false, error: 'Message could not be delivered. Please use the email link below.' },
      { status: 500 }
    );
  }
}

// Reject non-POST methods
export async function GET() {
  return NextResponse.json({ ok: false, error: 'Method not allowed.' }, { status: 405 });
}
