import { PageShell } from "../../components/page-shell";

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <main>
        <section className="section page-intro">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">Privacy Policy</p>
              <h1 className="page-title">Basic privacy expectations for customer inquiries.</h1>
            </div>
            <p className="section-note">
              This placeholder policy explains how contact submissions and customer
              conversations are handled until final legal copy is supplied.
            </p>
          </div>

          <div className="info-panel legal-panel">
            <h3>Information collected</h3>
            <p>
              Walltap Garage may collect your name, email address, phone number, and
              vehicle inquiry details when you contact the business through this site.
            </p>
            <h3>How it is used</h3>
            <p>
              Information is used to respond to inventory questions, discuss sourcing
              requests, schedule follow-up conversations, and coordinate customer service.
            </p>
            <h3>Sharing and retention</h3>
            <p>
              Customer information should not be sold. It may be shared only with service
              partners directly involved in sourcing, shipping, financing, or delivery
              when needed to complete a customer request.
            </p>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
