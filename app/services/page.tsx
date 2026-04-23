import Link from "next/link";
import { PageShell } from "../../components/page-shell";
import { services } from "../../lib/site-content";

export default function ServicesPage() {
  return (
    <PageShell>
      <main>
        <section className="section page-intro">
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

          <div className="feature-grid feature-grid-full">
            {services.map((service, index) => (
              <article className="feature-card" key={service.title}>
                <p className="card-index">0{index + 1}</p>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>

          <div className="info-panel">
            <h3>What customers can expect</h3>
            <p>
              Clear communication, realistic timelines, and practical next steps on
              vehicle condition, sourcing options, shipping, and availability.
            </p>
            <Link className="button button-primary" href="/contact">
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
