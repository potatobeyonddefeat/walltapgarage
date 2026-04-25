import Link from "next/link";
import { ImportProcessSection } from "../../components/import-process-section";
import { PageShell } from "../../components/page-shell";
import { services } from "../../lib/site-content";

export default function ServicesPage() {
  const operatingPrinciples = [
    "Shortlist vehicles against a real brief before asking for approval.",
    "Keep timing, transit, and handoff checkpoints visible as the car moves.",
    "Treat every inquiry like a purchase process, not a lead form handoff.",
  ];

  return (
    <PageShell>
      <main>
        <section className="section page-intro services-page-intro">
          <div className="section-intro-rail">
            <div className="section-intro-copy">
              <div className="section-head split-head">
                <div>
                  <p className="eyebrow">Services</p>
                  <h1 className="page-title">Support for sourcing, importing, and delivery.</h1>
                </div>
                <p className="section-note">
                  Walltap Garage helps customers move from first inquiry to final handoff
                  with a cleaner, more transparent process.
                </p>
              </div>

              <ul className="section-kicker-list">
                <li>Vehicle selection starts with budget, chassis, and condition priorities.</li>
                <li>Purchase and transport move through visible approvals and milestone updates.</li>
                <li>Delivery planning stays tied to practical next steps, not generic status notes.</li>
              </ul>
            </div>

            <div className="section-intro-visual" aria-hidden="true">
              <div className="section-intro-visual-copy">
                <p className="panel-label">Process-led support</p>
                <h2>Walltap runs the buying path with clearer checkpoints.</h2>
                <p>
                  Buyers see what is being sourced, what has been approved, and what happens next
                  before the handoff gets complicated.
                </p>
              </div>
            </div>
          </div>

          <div className="services-overview">
            <div>
              <div className="section-head split-head">
                <div>
                  <p className="eyebrow">Service lanes</p>
                  <h2>Choose the part of the process you need help with now.</h2>
                </div>
                <p className="section-note">
                  These lanes cover the most common buyer needs: finding the right car,
                  moving it through import logistics, and handling the final financing or delivery conversation.
                </p>
              </div>

              <div className="feature-grid feature-grid-full">
                {services.map((service, index) => (
                  <article className="feature-card" id={service.id} key={service.title}>
                    <p className="card-index">0{index + 1}</p>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="services-aside">
              <p className="panel-label">Operating principles</p>
              <h3>What buyers should expect from the process.</h3>
              <ul>
                {operatingPrinciples.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </ul>
              <p>
                Clear communication, realistic timelines, and practical next steps on vehicle
                condition, sourcing options, shipping, and availability.
              </p>
              <Link className="button button-primary" href="/contact">
                Contact Us
              </Link>
            </aside>
          </div>
        </section>

        <ImportProcessSection />
      </main>
    </PageShell>
  );
}
