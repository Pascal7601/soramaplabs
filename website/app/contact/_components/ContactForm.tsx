"use client";

import { useState, type FormEvent } from "react";
import { CORE_SERVICES, MODULES } from "@/lib/content";
import { SITE } from "@/lib/site-config";

/**
 * DEMO REQUEST FORM — temporary mailto implementation.
 *
 * There is no backend yet, so submitting opens the visitor's email app with
 * a pre-filled message to SITE.email. When you are ready for a real
 * backend, replace the body of `handleSubmit` with a fetch() to a Next.js
 * route handler (app/api/contact/route.ts) or a form service; the markup
 * and fields can stay exactly as they are.
 *
 * The checkbox list is built from CORE_SERVICES + MODULES (lib/content.ts).
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const modules = data.getAll("modules").join(", ") || "Not specified";
    const body = [
      `Name: ${data.get("name")}`,
      `Organisation: ${data.get("organisation")}`,
      `Email: ${data.get("email")}`,
      `Team size: ${data.get("size") || "Not specified"}`,
      `Interested in: ${modules}`,
      "",
      `${data.get("message") || ""}`,
    ].join("\n");

    window.location.href =
      `mailto:${SITE.email}` +
      `?subject=${encodeURIComponent("Demo request")}` +
      `&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Your name
        <input name="name" required autoComplete="name" />
      </label>

      <label>
        Organisation
        <input name="organisation" required autoComplete="organization" />
      </label>

      <label>
        Work email
        <input name="email" type="email" required autoComplete="email" />
      </label>

      <label>
        Team size
        <select name="size" defaultValue="">
          <option value="" disabled>
            Select
          </option>
          <option>1–20</option>
          <option>21–50</option>
          <option>51–150</option>
          <option>150+</option>
        </select>
      </label>

      <fieldset>
        <legend>What are you interested in?</legend>
        <div className="contact-checks">
          {[...CORE_SERVICES, ...MODULES].map((m) => (
            <label key={m.id} className="contact-check">
              <input
                type="checkbox"
                name="modules"
                value={
                  m.status === "coming-soon"
                    ? `${m.name} (coming soon)`
                    : m.name
                }
              />
              {m.name}
              {m.status === "coming-soon" ? " (coming soon)" : ""}
            </label>
          ))}
        </div>
      </fieldset>

      <label>
        Anything else?
        <textarea name="message" rows={4} />
      </label>

      <button type="submit" className="cta-band-button">
        Send request ↗
      </button>

      {sent && (
        <p className="contact-note" role="status">
          Your email app should have opened with the request ready to send.
        </p>
      )}
    </form>
  );
}
