import { PageShell } from "../../components/page-shell";

export default function ContactPage() {
  return (
    <PageShell>
      <main>
        <section className="section page-intro">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">Contact</p>
              <h1 className="page-title">Ready to find your next vehicle?</h1>
            </div>
            <p className="section-note">
              Reach out to ask about current inventory, discuss a sourcing request, or
              schedule a viewing.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-card">
              <h3>Reach Walltap Garage</h3>
              <div className="spec-grid">
                <div className="spec-item">
                  <p className="spec-label">Phone</p>
                  <p className="spec-value">+1 (281) 745-8884</p>
                </div>
                <div className="spec-item">
                  <p className="spec-label">Email</p>
                  <p className="spec-value">iancuandre@yahoo.com</p>
                </div>
                <div className="spec-item">
                  <p className="spec-label">Location</p>
                  <p className="spec-value">Houston, Texas</p>
                </div>
              </div>
            </div>

            <form className="contact-form">
              <label>
                <span>Your name</span>
                <input name="name" type="text" />
              </label>
              <label>
                <span>Email address</span>
                <input name="email" type="email" />
              </label>
              <label>
                <span>Tell us what you&apos;re looking for</span>
                <textarea name="message" rows={6} />
              </label>
              <button className="button button-primary" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
