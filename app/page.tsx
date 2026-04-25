import Link from "next/link";
import { PageShell } from "../components/page-shell";
import { Reveal } from "../components/reveal";
import { inventoryVehicles } from "../lib/site-content";

export default function Home() {
  const newArrivals = inventoryVehicles.filter((vehicle) => vehicle.newArrival).slice(0, 4);
  const serviceBuckets = [
    {
      title: "Vehicle Sourcing",
      description:
        "Source the right chassis with a clear brief, realistic pricing guidance, and approval before purchase.",
      href: "/services#sourcing",
    },
    {
      title: "Current Inventory",
      description:
        "Review ready-to-buy and inbound vehicles with pricing, condition context, and next-step contact paths.",
      href: "/inventory",
    },
    {
      title: "Export Logistics",
      description:
        "Move from purchase to shipping, customs, and delivery with milestone updates instead of vague status messages.",
      href: "/services#transport",
    },
  ];

  const trustSignals = [
    {
      title: "Nationwide Shipping",
      description:
        "Coordinate transport from Houston to buyers across the United States with clearer handoff expectations.",
    },
    {
      title: "Fully Inspected Vehicles",
      description:
        "Inventory and sourcing candidates are reviewed with condition notes, sourcing context, and buyer-facing checkpoints.",
    },
    {
      title: "Transparent Documentation",
      description:
        "Approval, shipping, and arrival milestones stay documented so buyers understand what is happening and when.",
    },
  ];

  return (
    <PageShell>
      <main>
        <section className="hero storefront-hero">
          <div className="hero-grid">
            <Reveal className="hero-copy" direction="up">
              <div className="storefront-hero-copy">
                <p className="eyebrow">Houston, Texas · Boutique import inventory and sourcing</p>
                <h1>Premium JDM &amp; European Imports Delivered to Your Door.</h1>
                <p className="lede">
                  Walltap Garage helps buyers source, import, and purchase enthusiast
                  vehicles with clearer pricing, documented process steps, and a direct
                  path from inquiry to delivery.
                </p>
                <div className="hero-actions">
                  <Link className="button button-primary" href="/inventory">
                    View Inventory
                  </Link>
                  <Link className="button button-secondary" href="/contact?inquiry=source">
                    Start Your Import
                  </Link>
                </div>
                <div className="hero-highlights" aria-label="Walltap service highlights">
                  <span>Curated inventory</span>
                  <span>Vehicle sourcing</span>
                  <span>Nationwide delivery</span>
                </div>
              </div>
            </Reveal>

            <Reveal className="hero-media" direction="left" delay={120}>
              <div className="hero-media-shell">
                <div className="hero-media-frame" />
                <div className="hero-mobile-message">
                  <p className="panel-label">Available Now</p>
                  <p className="hero-mobile-title">
                    Review current inventory first. Source the right car second.
                  </p>
                  <Link className="button button-primary" href="/inventory">
                    View Inventory
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="metrics-strip">
            <div>
              <p className="metric-number">Inventory</p>
              <p className="metric-copy">Curated JDM and European inventory with pricing and buyer notes.</p>
            </div>
            <div>
              <p className="metric-number">Sourcing</p>
              <p className="metric-copy">Clear briefs, approval checkpoints, and import planning.</p>
            </div>
            <div>
              <p className="metric-number">Delivery</p>
              <p className="metric-copy">Export logistics and nationwide handoff coordination.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-head service-lanes-head">
            <div>
              <p className="service-lanes-label">Service Lanes</p>
              <h2>Pick the path that matches where you are in the buying process.</h2>
            </div>
            <p className="section-note">
              Each route keeps the next action obvious, whether you are reviewing stock,
              approving a sourced car, or coordinating transport.
            </p>
          </div>

          <div className="section-intro-rail">
            <div className="section-intro-visual" aria-hidden="true">
            </div>

            <div className="section-intro-copy service-lanes-copy">
              <ul className="section-kicker-list service-lanes-list">
                <li>Start with current inventory when the right fit is already on the ground.</li>
                <li>Open a sourcing brief when the exact chassis, trim, or mileage matters.</li>
                <li>Track logistics and delivery through documented checkpoints instead of guesswork.</li>
              </ul>
            </div>
          </div>

          <div className="service-buckets">
            {serviceBuckets.map((bucket, index) => (
              <Reveal className="service-bucket" delay={index * 80} key={bucket.title}>
                <article>
                  <p className="card-index">0{index + 1}</p>
                  <h3>{bucket.title}</h3>
                  <p>{bucket.description}</p>
                  <Link className="service-bucket-link" href={bucket.href}>
                    Learn More
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">New Arrivals</p>
              <h2>Recent vehicles buyers can act on now.</h2>
            </div>
            <p className="section-note">
              Each arrival card keeps the details obvious: year, make, model, and a
              direct route into inventory or contact.
            </p>
          </div>

          <div className="inventory-grid new-arrivals-grid">
            {newArrivals.map((vehicle) => (
              <article className="inventory-card" key={vehicle.id}>
                <div
                  className={`inventory-card-image ${vehicle.imageClass}`}
                  style={{ backgroundPosition: vehicle.imagePosition }}
                />
                <div className="inventory-card-body">
                  <div className="inventory-card-fields">
                    <div className="inventory-field">
                      <p className="inventory-spec-label">Year</p>
                      <p className="inventory-spec-value">{vehicle.year}</p>
                    </div>
                    <div className="inventory-field">
                      <p className="inventory-spec-label">Make</p>
                      <p className="inventory-spec-value">{vehicle.make}</p>
                    </div>
                    <div className="inventory-field">
                      <p className="inventory-spec-label">Model</p>
                      <h3>{vehicle.model}</h3>
                    </div>
                  </div>
                  <div className="inventory-card-actions">
                    <Link className="button button-primary card-button" href="/inventory">
                      View Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="inventory-actions">
            <Link className="button button-primary" href="/inventory?category=new-arrivals">
              View New Arrivals
            </Link>
          </div>
        </section>

        <section className="section">
          <div className="section-head split-head">
            <div>
              <p className="eyebrow">Why Walltap?</p>
              <h2>Trust signals buyers look for before they commit.</h2>
            </div>
            <p className="section-note">
              The pitch is straightforward: cleaner communication, documented process
              steps, and vehicles handled like serious purchases rather than impulse inventory.
            </p>
          </div>

          <div className="trust-grid">
            {trustSignals.map((signal, index) => (
              <Reveal className="trust-card" delay={index * 80} key={signal.title}>
                <article>
                  <p className="card-index">0{index + 1}</p>
                  <h3>{signal.title}</h3>
                  <p>{signal.description}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="inventory-actions">
            <Link className="button button-secondary" href="/services">
              Learn About the Process
            </Link>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
