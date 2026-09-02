'use client';

import React, { useId, useRef, useState } from 'react';

/* --------------------------------------------------------------------------
 * Types mirrored from profile.types — kept local so the Client Component
 * does not import from server-only content/ modules.
 * -------------------------------------------------------------------------- */
export interface ContactFormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
  // honeypot — never shown to humans
  website: string;
}

type FieldErrors = Partial<Record<keyof ContactFormFields | '_form', string>>;

type FormState =
  | { status: 'idle' }
  | { status: 'submitting' }
  | { status: 'success' }
  | { status: 'error'; message: string };

const SUBJECT_OPTIONS = [
  'Engineering Internship Inquiry',
  'Graduate Role Inquiry',
  'Collaboration / Research Proposal',
  'Technical Question',
  'Interview Invitation',
  'Other',
];

const EMPTY_FIELDS: ContactFormFields = {
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '',
};

/* --------------------------------------------------------------------------
 * Client-side validation mirrors server rules
 * -------------------------------------------------------------------------- */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f: ContactFormFields): FieldErrors {
  const errors: FieldErrors = {};
  if (!f.name.trim() || f.name.trim().length < 2 || f.name.trim().length > 80) {
    errors.name = 'Name must be between 2 and 80 characters.';
  }
  if (!f.email.trim() || !EMAIL_RE.test(f.email.trim())) {
    errors.email = 'A valid email address is required.';
  }
  if (!f.subject || f.subject === '') {
    errors.subject = 'Please select a subject.';
  }
  if (!f.message.trim() || f.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  }
  if (f.message.trim().length > 4000) {
    errors.message = 'Message must not exceed 4 000 characters.';
  }
  return errors;
}

/* --------------------------------------------------------------------------
 * ContactForm — isolated Client Component
 * contactEmail is passed as a prop from the Server Component.
 * -------------------------------------------------------------------------- */
export function ContactForm({ contactEmail }: { contactEmail: string }) {
  const uid = useId();
  const statusRef = useRef<HTMLDivElement>(null);
  const [fields, setFields] = useState<ContactFormFields>(EMPTY_FIELDS);
  const [touched, setTouched] = useState<Partial<Record<keyof ContactFormFields, boolean>>>({});
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formState, setFormState] = useState<FormState>({ status: 'idle' });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    const next = { ...fields, [name]: value };
    setFields(next);
    if (touched[name as keyof ContactFormFields]) {
      // Re-validate on change once a field has been touched
      const errs = validate(next);
      setFieldErrors((prev) => ({ ...prev, [name]: errs[name as keyof ContactFormFields] }));
    }
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errs = validate(fields);
    setFieldErrors((prev) => ({ ...prev, [name]: errs[name as keyof ContactFormFields] }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    const errs = validate(fields);
    setFieldErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setFormState({ status: 'submitting' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fields),
      });
      const data = (await res.json()) as { ok: boolean; error?: string; field?: string };

      if (data.ok) {
        setFormState({ status: 'success' });
        setFields(EMPTY_FIELDS);
        setTouched({});
        setFieldErrors({});
      } else if (data.field) {
        setFieldErrors({ [data.field]: data.error });
        setFormState({ status: 'idle' });
      } else {
        setFormState({
          status: 'error',
          message: data.error ?? 'Something went wrong. Please use the email link below.',
        });
      }
    } catch {
      setFormState({
        status: 'error',
        message: 'Network error. Please use the email link below.',
      });
    }

    // Move focus to status banner
    setTimeout(() => statusRef.current?.focus(), 50);
  }

  const isSubmitting = formState.status === 'submitting';
  const charCount = fields.message.length;

  return (
    <div className="contact-form-wrapper">
      {/* ── Status Banner ────────────────────────────────────────────────── */}
      {formState.status === 'success' && (
        <div
          ref={statusRef}
          role="status"
          aria-live="polite"
          tabIndex={-1}
          className="form-status form-status--success"
        >
          <span className="form-status__icon" aria-hidden="true">✓</span>
          <div>
            <strong>Message sent.</strong>
            <p>Thanks &mdash; I&apos;ll reply to your email within a few business days.</p>
          </div>
        </div>
      )}

      {formState.status === 'error' && (
        <div
          ref={statusRef}
          role="alert"
          aria-live="assertive"
          tabIndex={-1}
          className="form-status form-status--error"
        >
          <span className="form-status__icon" aria-hidden="true">!</span>
          <div>
            <strong>Delivery failed.</strong>
            <p>
              {formState.message}{' '}
              <a href={`mailto:${contactEmail}`} className="form-status__fallback-link">
                Email directly →
              </a>
            </p>
          </div>
        </div>
      )}

      {formState.status !== 'success' && (
        <form
          onSubmit={handleSubmit}
          noValidate
          aria-label="Contact form"
          className="contact-form"
        >
          {/* ── Honeypot — hidden from humans, visible to bots ── */}
          <div aria-hidden="true" className="contact-form__honeypot">
            <label htmlFor={`${uid}-website`}>
              Website (leave blank)
            </label>
            <input
              type="text"
              id={`${uid}-website`}
              name="website"
              value={fields.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {/* ── Name ── */}
          <div className={`form-field${fieldErrors.name ? ' form-field--error' : ''}`}>
            <label htmlFor={`${uid}-name`} className="form-label">
              Name <span aria-hidden="true" className="form-label__required">*</span>
            </label>
            <input
              type="text"
              id={`${uid}-name`}
              name="name"
              value={fields.name}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="name"
              required
              aria-required="true"
              aria-describedby={fieldErrors.name ? `${uid}-name-err` : undefined}
              aria-invalid={!!fieldErrors.name}
              className="form-input"
              placeholder="Your full name"
              disabled={isSubmitting}
            />
            {fieldErrors.name && (
              <p id={`${uid}-name-err`} role="alert" className="field-error">
                {fieldErrors.name}
              </p>
            )}
          </div>

          {/* ── Email ── */}
          <div className={`form-field${fieldErrors.email ? ' form-field--error' : ''}`}>
            <label htmlFor={`${uid}-email`} className="form-label">
              Email <span aria-hidden="true" className="form-label__required">*</span>
            </label>
            <input
              type="email"
              id={`${uid}-email`}
              name="email"
              value={fields.email}
              onChange={handleChange}
              onBlur={handleBlur}
              autoComplete="email"
              required
              aria-required="true"
              aria-describedby={fieldErrors.email ? `${uid}-email-err` : undefined}
              aria-invalid={!!fieldErrors.email}
              className="form-input"
              placeholder="you@example.com"
              disabled={isSubmitting}
            />
            {fieldErrors.email && (
              <p id={`${uid}-email-err`} role="alert" className="field-error">
                {fieldErrors.email}
              </p>
            )}
          </div>

          {/* ── Subject ── */}
          <div className={`form-field${fieldErrors.subject ? ' form-field--error' : ''}`}>
            <label htmlFor={`${uid}-subject`} className="form-label">
              Subject <span aria-hidden="true" className="form-label__required">*</span>
            </label>
            <select
              id={`${uid}-subject`}
              name="subject"
              value={fields.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-required="true"
              aria-describedby={fieldErrors.subject ? `${uid}-subject-err` : undefined}
              aria-invalid={!!fieldErrors.subject}
              className="form-select"
              disabled={isSubmitting}
            >
              <option value="" disabled>
                Select a subject…
              </option>
              {SUBJECT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {fieldErrors.subject && (
              <p id={`${uid}-subject-err`} role="alert" className="field-error">
                {fieldErrors.subject}
              </p>
            )}
          </div>

          {/* ── Message ── */}
          <div className={`form-field${fieldErrors.message ? ' form-field--error' : ''}`}>
            <label htmlFor={`${uid}-message`} className="form-label">
              Message <span aria-hidden="true" className="form-label__required">*</span>
            </label>
            <textarea
              id={`${uid}-message`}
              name="message"
              value={fields.message}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              aria-required="true"
              aria-describedby={
                fieldErrors.message
                  ? `${uid}-message-err`
                  : `${uid}-message-hint`
              }
              aria-invalid={!!fieldErrors.message}
              className="form-textarea"
              placeholder="Share context about your inquiry, timeline, or project details."
              rows={6}
              disabled={isSubmitting}
            />
            <div className="field-meta">
              <span
                id={`${uid}-message-hint`}
                className="field-hint"
                aria-live="polite"
              >
                {charCount > 0 ? `${charCount} / 4 000 characters` : 'Minimum 10 characters.'}
              </span>
            </div>
            {fieldErrors.message && (
              <p id={`${uid}-message-err`} role="alert" className="field-error">
                {fieldErrors.message}
              </p>
            )}
          </div>

          {/* ── Submit ── */}
          <div className="form-actions">
            <button
              type="submit"
              disabled={isSubmitting}
              className="form-submit-btn"
              aria-busy={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="btn-spinner" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                'Send Message →'
              )}
            </button>
            <p className="form-privacy-note">
              Your details are used solely to respond to your inquiry and are never shared.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
