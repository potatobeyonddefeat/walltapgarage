import { LeadCaptureForm } from "../../components/lead-capture-form";
import { PageShell } from "../../components/page-shell";
import { companyDetails } from "../../lib/site-content";

type ContactPageProps = {
  searchParams?: Promise<{
    budget?: string;
    contact?: string;
    inquiry?: string;
    timeline?: string;
    vehicle?: string;
  }>;
};

function normalizeValue(value?: string) {
  return value?.trim() ?? "";
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = searchParams ? await searchParams : undefined;

  return (
    <PageShell>
      <main>
        <section className="section page-intro">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">Contact</p>
              <h1 className="page-title">Start a sourcing request with the details that matter.</h1>
            </div>
            <p className="section-note">
              Share the vehicle, budget, and timeline you have in mind. We&apos;ll use it
              to route inventory questions, sourcing requests, and serious buyer follow-up.
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-rail">
              <div className="contact-card">
                <h3>Reach Walltap Garage</h3>
                <p>
                  Prefer direct contact first? Use the details below for inventory
                  availability, appointments, and sourcing conversations.
                </p>
                <div className="spec-grid">
                  <div className="spec-item">
                    <p className="spec-label">Phone</p>
                    <p className="spec-value">
                      <a href={companyDetails.phoneHref}>{companyDetails.phoneDisplay}</a>
                    </p>
                  </div>
                  <div className="spec-item">
                    <p className="spec-label">Email</p>
                    <p className="spec-value">
                      <a href={companyDetails.emailHref}>{companyDetails.email}</a>
                    </p>
                  </div>
                  <div className="spec-item">
                    <p className="spec-label">Location</p>
                    <p className="spec-value">{companyDetails.location}</p>
                  </div>
                </div>
              </div>

              <div className="contact-card contact-card-accent">
                <p className="eyebrow">Best Results</p>
                <h3>What to include in your request</h3>
                <ul className="contact-checklist">
                  <li>Target model, chassis, or a close shortlist</li>
                  <li>Real budget range before taxes, shipping, or financing</li>
                  <li>Desired timing so sourcing pace matches urgency</li>
                  <li>Any hard requirements like transmission, mileage, or color</li>
                </ul>
              </div>

              <div className="contact-card">
                <p className="eyebrow">Process</p>
                <h3>How this intake is used</h3>
                <p>
                  The form helps separate ready-to-buy sourcing leads from general
                  questions. It also gives enough context to continue by email, call, or
                  text without restarting the conversation.
                </p>
              </div>
            </div>

            <LeadCaptureForm
              initialBudget={normalizeValue(params?.budget)}
              initialContactPreference={normalizeValue(params?.contact) || "email"}
              initialInquiryType={normalizeValue(params?.inquiry) || "source"}
              initialTimeline={normalizeValue(params?.timeline)}
              initialVehicleInterest={normalizeValue(params?.vehicle)}
            />
          </div>
        </section>
      </main>
    </PageShell>
  );
}
