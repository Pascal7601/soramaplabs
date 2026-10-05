import type { Metadata } from "next";
import ContactForm from "./_components/ContactForm";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book a demo",
  description:
    "Tell us what you need and we will set up a walkthrough or scoping call.",
};

/**
 * CONTACT / BOOK A DEMO
 *
 * The navbar, hero and CTA buttons all point to /contact, which did not
 * exist before (it would 404). This page is intentionally small.
 */
export default function ContactPage() {
  return (
    <main className="contact" data-nav-theme="light">
      <div className="contact-layout">
        <div className="contact-intro">
          <p className="kicker">Book a demo</p>
          <h1 className="section-heading">
            Let&apos;s look at your workflows together.
          </h1>
          <p className="contact-lead">
            Tell us what you need (custom software, cybersecurity or one of our
            modules) and roughly how big your team is. We will reply with next
            steps.
          </p>
          <p className="contact-email">
            Prefer email? <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </p>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
