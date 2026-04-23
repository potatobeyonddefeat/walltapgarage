import { PageShell } from "../../components/page-shell";

export default function TermsOfServicePage() {
  return (
    <PageShell>
      <main>
        <section className="section page-intro">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">Terms of Service</p>
              <h1 className="page-title">Baseline terms for inquiries and inventory information.</h1>
            </div>
            <p className="section-note">
              This placeholder page provides a clean destination for the footer utility
              links until formal legal text is finalized.
            </p>
          </div>

          <div className="info-panel legal-panel">
            <h3>Website information</h3>
            <p>
              Vehicle descriptions, availability, and pricing shown on this site are for
              general informational purposes and may change without notice.
            </p>
            <h3>No purchase guarantee</h3>
            <p>
              Submitting a form or contacting Walltap Garage does not reserve a vehicle
              or create a binding sales agreement unless confirmed separately in writing.
            </p>
            <h3>Next step</h3>
            <p>
              Final dealership, import, financing, and delivery terms should be provided
              by the business in customer-facing legal documentation before launch.
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
